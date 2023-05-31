declare module KEX {

    /**
     * Module to register custom block entity types and assign them for specific blocks.
     * 
     * Unlike InnerCore's [[TileEntity]], these entities are registered as vanilla tile types
     * like chest, hopper, brewing stand, furnace etc., via native code.
     * 
     * A block entity type must be represented by a non-abstract Java class inherited from `vsdum.kex.modules.tileentity.BlockActor`
     * (despite the latter class doesn't have any abstract methods required to implement).
     * 
     * After creating a tile entity class, register the numeric ID for it using [[TileEntityModule.registerTileEntityType]] method.
     * You must store the returned value in order to use it later for the blocks that will have this tile entity type.
     * 
     * So, for example:
     * ```java
     * package visualstudiodan.test;
     * 
     * import vsdum.kex.modules.TileEntityModule;
     * import vsdum.kex.modules.tileentity.BlockActor;
     * import vsdum.kex.util.mcmath.BlockPos;
     * 
     * public class TestTile extends BlockActor {
     *  public static final int TYPE = TileEntityModule.registerTileEntityType("test_tile", TestTile::new);
     *  public TestTile(long ptr, int type, BlockPos blockPos) {
     *      super(ptr, type, blockPos);
     *  }
     * }
     * ```
     * Then in JS/TS:
     * ```ts
     * const TEST_TILE_TYPE = WRAP_JAVA("visualstudiodan.test.TestTile").TYPE;
     * IDRegistry.genBlockID("testBlock");
     * Block.createBlock("testBlock", [{...}]);
     * KEX.TileEntityModule.registerForBlock(BlockID.testBlock, TEST_TILE_TYPE);
     * ```
     * @since 4.0
     */
    export module TileEntityModule {

        /**
         * Registers new custom native block entity type
         * @param typeName unique string identifier of the new block entity type, traditionally in snake case
         * @param callback function that will be called every time the custom tile is about to be created,
         * and must return the Java wrapper object of the tile
         * @returns generated numeric ID for the created block entity type. Should be stored somewhere in your code
         * in order to assign this type for a block later using [[registerForBlock]].
         * @since 4.0
         */
        export function registerTileEntityType(typeName: any_string, callback: TileEntityCreationCallback): number;

        /**
         * Assigns the custom native block entity type by its given numeric ID, to the block by its given numeric ID.
         * It means every time the block with given ID is placed, a tile of type of given ID will be created for this block,
         * also calling a [[TileEntityCreationCallback]] you specified while registering this block entity type.
         * @since 4.0
         */
        export function registerForBlock(blockID: number, type: number): void;

        /**
         * Function used in [[TileEntityModule.registerTileEntityType]] method.
         * It will be called every time the custom tile is created, and must return the Java wrapper object
         * of the tile (so it'd be better to implement this callback in Java as well).
         * 
         * **Remember!** All the parameters provided by the callback are crucial for the created block entity
         * and required to be put into its Java wrapper object.
         * @param pointer pointer to the native block entity object that will have to be wrapped by your Java object,
         * represented by a signed 64-bit integer
         * @param type numeric ID of the following block entity's type
         * @param pos block coordinates where the tile is being created
         * @since 4.0
         */
        export interface TileEntityCreationCallback {
            (pointer: number, type: number, pos: Vector): BlockActor;
        }

        /**
         * Base Java abstract class for custom native block entities. In terms of 
         * TypeScript declarations it's just an interface to call particular
         * block entity methods when needed, on block entity objects, obtained
         * for example using [[BlockSource.getCustomBlockEntity]] method
         * @since 4.0
         */
        export interface BlockActor extends INativeInterface {

            /**
             * [[NetworkEntityType]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            networkEntityType: Nullable<NetworkEntityType>;
            
            /**
             * [[NetworkEntity]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            networkEntity: Nullable<NetworkEntity>;
            
            /**
             * [[SyncedNetworkData]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            networkData: Nullable<SyncedNetworkData>;
            
            /**
             * [[ItemContainer]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            container: Nullable<ItemContainer>;
            
            /**
             * @returns block coordinates of the following [[BlockActor]]
             * @since 4.0
             */
            getBlockPos(): Vector;
            
            /**
             * @returns numeric ID of the dimension the following [[BlockActor]] is in
             * @since 4.0
             */
            getDimension(): number;
            
            /**
             * Invokes native block entity position getter in order to update it
             * for the following Java wrapper. Used mainly internally, for example
             * when the [[BlockActor]] is moved by a piston etc.
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            updateBlockPos(): BlockActor;
            
            /**
             * @returns [[BlockState]] object of the block having the following [[BlockActor]],
             * or null if this [[BlockActor]] doesn't have a world object for some reason
             * @since 4.0
             */
            getBlockState(): Nullable<BlockState>;
            
            /**
             * @returns [[BlockSource]] object of the world the following [[BlockActor]] is in,
             * or null if this [[BlockActor]] doesn't have a world object for some reason
             * @since 4.0
             */
            getWorld(): Nullable<BlockSource>;
            
            /**
             * @returns whether the following [[BlockActor]] has a [[BlockSource]] world object
             * @since 4.0
             */
            hasWorld(): boolean;
            
            /**
             * @returns numeric ID of the block entity type the following [[BlockActor]] has
             * @since 4.0
             */
            getType(): number;
            
            /**
             * @returns non-negative amount of ticks the following [[BlockActor]] exists in the world.
             * After re-entering the level, this value is reset back to zero.
             * @since 4.0
             */
            getLife(): number;
            
            /**
             * @returns whether the following [[BlockActor]] object refers to the client-side
             * native copy of the block entity
             * @since 4.0
             */
            isClient(): boolean;
            
            /**
             * @returns whether the following [[BlockActor]] object refers to the server-side
             * native copy of the block entity
             * @since 4.0
             */
            isServer(): boolean;
            
            /**
             * Method called by Minecraft when entering the level and loading the following [[BlockActor]].
             * 
             * In your [[save]] method implementation you can store some additional data of the block entity
             * to the compound tag given there, and then read it from the compound tag given in [[load]] method.
             * @since 4.0
             */
            load(data: NBT.CompoundTag): void;
            
            /**
             * Method called by Minecraft when leaving the level and unloading the following [[BlockActor]].
             * 
             * In your [[save]] method implementation you can store some additional data of the block entity
             * to the compound tag given there, and then read it from the compound tag given in [[load]] method.
             * @since 4.0
             */
            save(data: NBT.CompoundTag): boolean;
            
            /**
             * Method called by Minecraft every tick (20 times a second)
             * @since 4.0
             */
            tick(): void;
            
            /**
             * @since 4.0
             */
            isFinished(): boolean;
            
            /**
             * @since 4.0
             */
            onChanged(): void;
            
            /**
             * @since 4.0
             */
            isMovable(): boolean;
            
            /**
             * @since 4.0
             */
            onPlace(): void;
            
            /**
             * @since 4.0
             */
            onMove(): void;
            
            /**
             * @since 4.0
             */
            onRemoved(): void;
            
            /**
             * @since 4.0
             */
            triggerEvent(id: number, type: number): void;
            
            /**
             * @since 4.0
             */
            getCustomName(): Nullable<jstring>;
            
            /**
             * @since 4.0
             */
            setCustomName(customName: any_string): void;
            
            /**
             * @since 4.0
             */
            getName(): Nullable<jstring>;
            
            /**
             * Method called by Minecraft when chunk containing the following [[BlockActor]] is being loaded.
             * @since 4.0
             */
            onChunkLoaded(): void;
            
            /**
             * Method called by Minecraft when chunk containing the following [[BlockActor]] is being unloaded.
             * @since 4.0
             */
            onChunkUnloaded(): void;
            
            /**
             * @since 4.0
             */
            onUse(player: Player, side: number, vec: Vector): boolean;
            
            /**
             * @since 4.0
             */
            getScreenByName(container: ItemContainer, screenName: any_string): Nullable<UI.IWindow>;

        }

    }

}