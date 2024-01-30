/**
 * Type alias for the InnerCore's [[BlockState]]
 * to fix names conflicting in [[KEX.BlockState]] declaration.
 * @since 5.0
 */
type InnerCoreBlockState = BlockState;

declare module KEX {

    /**
     * Class to operate additional properties of a certain block in the world.
     * Full rewrite not connected with [[InnerCoreBlockState]],
     * adding bunch of useful methods similar to those from Forge.
     * 
     * The main thing you need to know about block states is that
     * the object is in fact immutable. Each object has a **runtime ID**.
     * Each runtime ID refers to a block state object with a specific combination of property values.
     * If you change the value of a property, for example using [[BlockState.setValue]] method,
     * it is not changed in the object, but another object with another runtime ID and
     * needed property values combination is returned.
     * 
     * This also means that if you want to change the value of a block property
     * on specific coordinates in the world, you have to call [[BlockSource.setBlockState]]
     * with an object obtained after changing the value of a property.
     * 
     * Example:
     * ```ts
     * // suppose that the block we are getting is an anvil,
     * // not checking not to distract you
     * const anvil = world.getBlockState(x, y, z);
     * 
     * // as ANVIL_DAMAGE is a property of Java enum type,
     * // convert it to integer type to work with it in JS/TS
     * const ANVIL_DAMAGE_INT = KEX.VanillaStates.ANVIL_DAMAGE.toIntegerProperty();
     * 
     * // getting anvil damage value
     * const damageValue = anvil.getValue(ANVIL_DAMAGE_INT);
     * // if anvil is damaged
     * if(damageValue != KEX.BlockStates.AnvilDamage.UNDAMAGED) {
     *      // resetting anvil damage and storing
     *      // the returned object in the same variable
     *      anvil = anvil.setValue(ANVIL_DAMAGE_INT, KEX.BlockStates.AnvilDamage.UNDAMAGED);
     *      // setting the modified block state in the world (mandatory if changes made)
     *      world.setBlockState(x, y, z, anvil, 0);
     * }
     * ```
     * 
     * One more important thing to note is that a certain block with specific ID cannot store
     * any block property by default. If you are initializing a block which you want to hold
     * some properties, you have to specify them all using [[BlocksModule.registerStateForBlock]] method,
     * providing block's numeric ID and property object.
     * 
     * Since this class released in KEX 5.0, [[InnerCoreBlockState]] was replaced
     * with KEX's [[BlockState]] everywhere it was used.
     * @since 5.0
     */
    export class BlockState extends java.lang.Object {

        /**
         * Constructs new [[BlockState]] instance from given block numeric ID and data
         * @since 5.0
         */
        constructor(id: number, data: number);

        /**
         * @returns runtime ID of the following [[BlockState]], read more
         * about it in the class description
         * @since 5.0
         */
        getRuntimeID(): number;

        /**
         * @returns whether the following [[BlockState]] owns a vanilla
         * or Java-registered custom block entity
         * @since 5.0
         */
        hasBlockEntity(): boolean;

        /**
         * @returns iterable set of all block properties the block type
         * in the following [[BlockState]] can hold
         * @since 5.0
         */
        getProperties(): java.util.Collection<BlockStates.Property<any>>;

        /**
         * @returns whether the block type in the following [[BlockState]]
         * can hold the given block property
         * @since 5.0
         */
        hasProperty<T>(property: BlockStates.Property<T>): boolean;

        /**
         * @returns the value of given block property in the following [[BlockState]].
         * Use only if you are sure the following block can hold the given property.
         * @since 5.0
         */
        getValue<T>(property: BlockStates.Property<T>): T;

        /**
         * @returns the value of given block property in the following [[BlockState]],
         * wrapped in a [[java.util.Optional]] object, which holds null if
         * the following block cannot hold the given property or it was not found for some reason
         * @since 5.0
         */
        getOptionalValue<T>(property: BlockStates.Property<T>): java.util.Optional<T>;

        /**
         * @returns another [[BlockState]] with the given property value matching to the value given.
         * Read more about how it works in the class description.
         * @since 5.0
         */
        setValue<T, V extends T>(property: BlockStates.Property<T>, value: V): BlockState;

        /**
         * @returns [[BlockState]] with the given property set to the value, which goes
         * right next to the current value in the set of possible values of given property
         * @since 5.0
         */
        cycle<T>(property: BlockStates.Property<T>): BlockState;

        /**
         * @returns [[BlockState]] with given rotation applied. Matters only
         * for Java-registered custom blocks with `IRotatable` block component.
         * @since 5.0
         */
        rotate(rotation: Math.Rotation): BlockState;

        /**
         * @returns [[BlockState]] with given mirroring applied. Matters only
         * for Java-registered custom blocks with `IMirrorable` block component.
         * @since 5.0
         */
        mirror(m: Math.Mirror): BlockState;

        /**
         * @since 5.0
         */
        getFriction(): number;

        /**
         * @since 5.0
         */
        getDestroySpeed(): number;

        /**
         * @since 5.0
         */
        getLightBlock(): number;

        /**
         * @since 5.0
         */
        getLightEmission(): number;

    }

    /**
     * Namespace containing functions to register custom block states (properties),
     * and some enums for vanilla properties
     * @since 5.0
     */
    export namespace BlockStates {

        /**
         * Base abstract class for all types of block states
         * @since 5.0
         */
        export interface Property<T> extends java.lang.Object, INativeInterface {

            /**
             * Method implemented differently in every [[Property]] type,
             * used in [[java.lang.Object]]'s [[hashCode]] method implementation
             * @returns hash code for the following [[Property]]
             * @since 5.0
             */
            generateHashCode(): number;

            /**
             * @returns string identifier of the following [[Property]]
             * @since 5.0
             */
            getName(): jstring;

            /**
             * @returns numeric identifier of the following [[Property]]
             * @since 5.0
             */
            getNumericID(): number;

            /**
             * @returns [[java.lang.Class]] of the following [[Property]]'s value type.
             * `Class<Integer>` for [[IntegerProperty]], `Class<Boolean>` for [[BooleanProperty]].
             * @since 5.0
             */
            getValueClass(): java.lang.Class<T>;

            /**
             * Each possible value of a [[Property]] has its corresponding
             * non-negative integer index.
             * @returns index of the given [[Property]] value.
             * Throws [[java.lang.IllegalArgumentException]] if given value
             * is not possible for the following [[Property]].
             * @since 5.0
             */
            getIndex(value: T): number;

            /**
             * @returns [[java.util.Collection]] containing all possible
             * values of the following [[Property]]
             * @since 5.0
             */
            getPossibleValues(): java.util.Collection<T>;

            /**
             * Reverse function for [[getIndex]].
             * @returns [[Property]] value by given index, wrapped in a [[java.util.Optional]],
             * which may be null in case given index is not possible for the following [[Property]].
             * @since 5.0
             */
            getValue(index: number): java.util.Optional<T>;

        }

        /**
         * Class representing an integer type of block state
         * @since 5.0
         */
        export interface IntegerProperty extends Property<number> {}

        /**
         * Class representing a boolean type of block state
         * @since 5.0
         */
        export interface BooleanProperty extends Property<boolean> {}

        /**
         * Class representing a type of block state,
         * which as values takes member of a certain Java enum.
         * Should not be constructed in JS/TS code.
         * Use its [[toIntegerProperty]] method to operate it properly.
         * @since 5.0
         */
        export interface EnumProperty extends Property<any> {

            /**
             * @returns copy of the following [[EnumProperty]] of integer type,
             * to properly operate it in JS/TS code
             * @since 5.0
             */
            toIntegerProperty(): IntegerProperty;

        }

        /**
         * Registers a custom block state of integer type
         * @param name unique string identifier for the block state,
         * which will be used in NBT serialization
         * @param min minimum possible value for the state
         * @param max maximum possible value for the state
         * @returns [[IntegerProperty]] instance for the created block state
         * @since 5.0
         */
        export function createIntegerProperty(name: any_string, min: number, max: number): IntegerProperty;

        /**
         * Registers a custom block state of boolean type
         * @param name unique string identifier for the block state,
         * which will be used in NBT serialization
         * @returns [[BooleanProperty]] instance for the created block state
         * @since 5.0
         */
        export function createBooleanProperty(name: any_string): BooleanProperty;

        /**
         * Enum defining the values of [[VanillaStates.ANVIL_DAMAGE]] block state
         * @since 5.0
         */
        export enum AnvilDamage {
            UNDAMAGED = 0,
            SLIGHTLY_DAMAGED = 1,
            VERY_DAMAGED = 2,
            BROKEN = 3
        }
    
        /**
         * Enum defining the values of [[VanillaStates.BAMBOO_LEAF_SIZE]] block state
         * @since 5.0
         */
        export enum BambooLeaves {
            NONE = 0,
            SMALL = 1,
            LARGE = 2
        }
    
        /**
         * Enum defining the values of [[VanillaStates.BELL_ATTACHMENT]] block state
         * @since 5.0
         */
        export enum BellAttachment {
            FLOOR = 0,
            CEILING = 1,
            SINGLE_WALL = 2,
            DOUBLE_WALL = 3
        }

        /**
         * Enum defining the values of [[VanillaStates.BLOCK_COLOR]] block state
         * @since 5.0
         */
        export enum BlockColor {
            WHITE = 0,
            ORANGE = 1,
            MAGENTA = 2,
            LIGHT_BLUE = 3,
            YELLOW = 4,
            LIME = 5,
            PINK = 6,
            GRAY = 7,
            SILVER = 8,
            CYAN = 9,
            PURPLE = 10,
            BLUE = 11,
            BROWN = 12,
            GREEN = 13,
            RED = 14,
            BLACK = 15
        }

        /**
         * Enum defining the values of [[VanillaStates.CORAL_COLOR]] block state
         * @since 5.0
         */
        export enum CoralColor {
            BLUE = 0,
            PINK = 1,
            PURPLE = 2,
            RED = 3,
            YELLOW = 4
        }

        /**
         * Enum defining the values of [[VanillaStates.HATCH_LEVEL]] block state
         * @since 5.0
         */
        export enum HatchLevel {
            NO_CRACKS = 0,
            CRACKED = 1,
            MAX_CRACKED = 2
        }

        /**
         * Enum defining the values of [[VanillaStates.LEVER_DIRECTION]] block state
         * @since 5.0
         */
        export enum LeverDirection {
            DOWN_EAST_WEST = 0,
            EAST = 1,
            WEST = 2,
            SOUTH = 3,
            NORTH = 4,
            UP_NORTH_SOUTH = 5,
            UP_EAST_WEST = 6,
            DOWN_NORTH_SOUTH = 7
        }

        /**
         * Enum defining the values of [[VanillaStates.PILLAR_AXIS]] block state
         * @since 5.0
         */
        export enum PillarAxis {
            Y = 0, X = 1, Z = 2
        }

        /**
         * Enum defining the values of [[VanillaStates.PORTAL_AXIS]] block state
         * @since 5.0
         */
        export enum PortalAxis {
            UNKNOWN = 0, X = 1, Z = 2
        }

        /**
         * Enum defining the values of [[VanillaStates.RAIL_DIRECTION]] block state
         * @since 5.0
         */
        export enum RailShape {
            NORTH_SOUTH = 0,
            EAST_WEST = 1,
            ASCENDING_EAST = 2,
            ASCENDING_WEST = 3,
            ASCENDING_NORTH = 4,
            ASCENDING_SOUTH = 5,
            SOUTH_EAST = 6,
            SOUTH_WEST = 7,
            NORTH_WEST = 8,
            NORTH_EAST = 9
        }

        /**
         * Enum defining the values of [[VanillaStates.BAMBOO_THICKNESS]] block state
         * @since 5.0
         */
        export enum StalkThickness {
            THIN = 0, THICK = 1
        }

        /**
         * Enum defining the values of [[VanillaStates.STRUCTURE_BLOCK_TYPE]] block state
         * @since 5.0
         */
        export enum StructureBlockType {
            DATA = 0,
            SAVE = 1,
            LOAD = 2,
            CORNER = 3,
            INVALID = 4,
            EXPORT = 5
        }

        /**
         * Enum defining the values of [[VanillaStates.STRUCTURE_VOID_TYPE]] block state
         * @since 5.0
         */
        export enum StructureVoidType {
            VOID = 0, AIR = 1
        }

        /**
         * Enum defining the values of [[VanillaStates.TORCH_FACING_DIRECTION]] block state
         * @since 5.0
         */
        export enum TorchFacing {
            UNKNOWN = 0,
            WEST = 1,
            EAST = 2,
            NORTH = 3,
            SOUTH = 4,
            TOP = 5
        }

        /**
         * Enum defining the values of [[VanillaStates.WALL_CONNECTION_TYPE_NORTH]],
         * [[VanillaStates.WALL_CONNECTION_TYPE_EAST]],
         * [[VanillaStates.WALL_CONNECTION_TYPE_SOUTH]]
         * and [[VanillaStates.WALL_CONNECTION_TYPE_WEST]] block states
         * @since 5.0
         */
        export enum WallConnectionType {
            NONE = 0,
            SHORT = 1,
            TALL = 2
        }

    }

    /**
     * Namespace containing Java wrappers for all the vanilla block states (properties).
     * 
     * Some of them are of Java enum type, should be converted to integer type using
     * [[BlockStates.EnumProperty.toIntegerProperty]] method.
     * There are JS enums in the [[BlockStates]] namespace provided for the most of them.
     * 
     * @since 5.0
     */
    export namespace VanillaStates {
        /**@since 5.0 */
        export const AGE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const ATTACHED_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.PortalAxis]]
         * @since 5.0
         */
        export const PORTAL_AXIS: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const BITE_COUNTER: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const BREWING_STAND_SLOT_A_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const BREWING_STAND_SLOT_B_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const BREWING_STAND_SLOT_C_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const BUTTON_PRESSED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const CONDITIONAL_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const COVERED_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.AnvilDamage]]
         * @since 5.0
         */
        export const ANVIL_DAMAGE: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const DISARMED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const DOOR_HINGE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const UPPER_BLOCK_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const HORIZONTAL_FACING: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const END_PORTAL_EYE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const EXPLODE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const FACING_DIRECTION: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const CAULDRON_FILL_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const GROWTH: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HEAD_PIECE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const HEIGHT: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const INFINIBURN_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const IN_WALL_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const LIQUID_DEPTH: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const MOISTURIZED_AMOUNT: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const NO_DROP_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const KELP_AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const OCCUPIED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const OPEN_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const OUTPUT_SUBTRACT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const OUTPUT_LIT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const PERSISTENT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const POWERED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const RAIL_DATA_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.RailShape]]
         * @since 5.0
         */
        export const RAIL_DIRECTION: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const REDSTONE_SIGNAL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const REPEATER_DELAY: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SUSPENDED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TOGGLE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TOP_SLOT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TRIGGERED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const UPDATE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const UPSIDE_DOWN_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const VINE_DIRECTION_BITS: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const ALLOW_UNDERWATER_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const COLOR_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const DEAD_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const CLUSTER_COUNT: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const ITEM_FRAME_MAP_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const SAPLING_TYPE: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.TorchFacing]]
         * @since 5.0
         */
        export const TORCH_FACING_DIRECTION: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const DRAG_DOWN: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TURTLE_EGG_COUNT: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.HatchLevel]]
         * @since 5.0
         */
        export const HATCH_LEVEL: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const GROUND_SIGN_DIRECTION: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WEIRDO_DIRECTION: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CORAL_DIRECTION: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.BlockColor]]
         * @since 5.0
         */
        export const BLOCK_COLOR: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.StalkThickness]]
         * @since 5.0
         */
        export const BAMBOO_THICKNESS: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.BambooLeaves]]
         * @since 5.0
         */
        export const BAMBOO_LEAF_SIZE: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const STABILITY: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STABILITY_CHECK_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const WOOD_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const DIRT_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SAND_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const OLD_LOG_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const NEW_LOG_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CHISEL_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const DEPRECATED: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const OLD_LEAF_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const NEW_LEAF_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SPONGE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SAND_STONE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const TALL_GRASS_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const FLOWER_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE_2: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE_3: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE_4: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const MONSTER_EGG_STONE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_BRICK_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HUGE_MUSHROOM_BITS: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WALL_BLOCK_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const PRISMARINE_BLOCK_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const DOUBLE_PLANT_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CHEMISTRY_TABLE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SEA_GRASS_TYPE: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.CoralColor]]
         * @since 5.0
         */
        export const CORAL_COLOR: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const CAULDRON_LIQUID_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HANGING_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const STRIPPED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const CORAL_HANG_TYPE_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.BellAttachment]]
         * @since 5.0
         */
        export const BELL_ATTACHMENT: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.StructureVoidType]]
         * @since 5.0
         */
        export const STRUCTURE_VOID_TYPE: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.StructureBlockType]]
         * @since 5.0
         */
        export const STRUCTURE_BLOCK_TYPE: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const EXTINGUISHED: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const COMPOSTER_FILL_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CORAL_FAN_DIRECTION: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.LeverDirection]]
         * @since 5.0
         */
        export const LEVER_DIRECTION: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.PillarAxis]]
         * @since 5.0
         */
        export const PILLAR_AXIS: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const BLOCK_LIGHT_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HONEY_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WEEPING_VINES_AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WALL_POST_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_NORTH: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_EAST: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_SOUTH: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_WEST: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const ROTATION: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const TWISTING_VINES_AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const RESPAWN_ANCHOR_CHARGE: BlockStates.IntegerProperty;
    }

}