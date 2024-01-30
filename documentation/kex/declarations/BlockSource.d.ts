/**
 * Type alias for the InnerCore's [[BlockSource]]
 * to fix names conflicting in [[KEX.BlockSource]] declaration.
 */
type InnerCoreBlockSource = BlockSource;

declare module KEX {

    /**
     * Class extending [[InnerCoreBlockSource]]
     * and adding some new methods not implemented in InnerCore API.
     * @since 3.0
     */
    export class BlockSource extends globalThis.InnerCoreBlockSource {

        /**
         * Constructs new [[BlockSource]] object from an existing [[InnerCoreBlockSource]] object.
         * @since 3.0
         */
        constructor(icObj: InnerCoreBlockSource);

        /**
         * Converts given InnerCore's `BlockSource` object to KEX `BlockSource` object.
         * @since 3.0
         */
        static toKEXBlockSource(icObj: InnerCoreBlockSource): BlockSource;

        /**
         * @returns [[BlockSource]] object for the current client
         * @since 3.0
         */
        static getCurrentClientRegion(): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object for world generation
         * @since 3.0
         */
        static getCurrentWorldGenRegion(): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object of the dimension where the given [[Actor]] is
         * (null if the given [[Actor]] is not valid or the dimension is not loaded and [[BlockSource]] hasn't been created yet)
         * @since 3.0
         */
        static getDefaultForActor(entity: Actor): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object of the dimension where the given entity is
         * (null if the given entity does not exist or the dimension is not loaded and [[BlockSource]] hasn't been created yet)
         * @since 3.0
         */
        static getDefaultForActor(entityUID: number): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object of the given dimension by default
         * (null if the given dimension is not loaded and [[BlockSource]] hasn't been created yet)
         * @since 3.0
         */
        static getDefaultForDimension(dimensionId: number): Nullable<BlockSource>;

        /**
         * @returns [[Level]] that owns the dimension of the following [[BlockSource]] or null
         * if this [[BlockSource]] is not owned by a [[Level]] for some reason
         * @since 3.0
         */
        getLevel(): Nullable<Level>;

        /**
         * @returns [[Dimension]] that owns the following [[BlockSource]] or null
         * if this [[BlockSource]] is not owned by a [[Dimension]] for some reason
         * @since 3.0
         */
        getDimensionObject(): Nullable<Dimension>;

        /**
         * @returns wrapper [[TileEntityModule.BlockActor]] object for the custom native block entity
         * on given [[Math.BlockPos]], or null if there is no custom block entity found
         * @since 5.0
         */
        getCustomBlockEntity(pos: Math.BlockPos): Nullable<TileEntityModule.BlockActor>;

        /**
         * @returns wrapper [[TileEntityModule.BlockActor]] object for the custom native block entity
         * on given coords, or null if there is no custom block entity found
         * @since 4.0
         */
        getCustomBlockEntity(x: number, y: number, z: number): Nullable<TileEntityModule.BlockActor>;

        /**
         * @returns [[BlockState]] object to access block properties
         * on given [[Math.BlockPos]], or null if something went wrong getting the block state
         * @since 5.0
         */
        getBlockState(pos: Math.BlockPos): Nullable<BlockState>;

        /**
         * @returns [[BlockState]] object to access block properties
         * on given coordinates, or null if something went wrong getting the block state
         */
        getBlockState(x: number, y: number, z: number): Nullable<BlockState>;

        /**
         * Sets block properties object on given coordinates. Has to be called whenever
         * you want to make changes to a certain block in the world.
         * [[BlockState.setValue]] returns another [[BlockState]] object, which
         * has to be specified here.
         * @returns whether the block state was set successfully or not
         * @since 5.0
         */
        setBlockState(x: number, y: number, z: number, state: BlockState, flags: number): boolean;

        /**
         * Same as [[setBlockState]] but without firing a block update event
         * @returns whether the block state was set successfully or not
         * @since 5.0
         */
        setBlockStateNoUpdate(x: number, y: number, z: number, state: BlockState): boolean;

        /**
         * New implementation of [[InnerCoreBlockSource.getBiome]], which gets the biome
         * on given coordinates, even if the needed chunk is not loaded
         * (takes from 3 to 5 ms in this case)
         * @returns numeric ID of the biome on given coordinates
         * @since 5.0
         */
        getBiome(x: number, z: number): number;

        /**
         * **Purely experimental** variant of [[getBiome]], which doesn't support modded biomes,
         * gives 15-35% speed increase in the overworld, and 700-1000% increase in the nether
         * @returns numeric ID of the biome on given coordinates
         * @since 5.0
         */
        getBiomeFast(x: number, z: number): number;

    }

}