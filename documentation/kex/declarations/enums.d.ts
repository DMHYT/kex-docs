/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/enums/EItemAnimation.html" target="_blank">EItemAnimation</a>
 * enum adding missing item animation types.
 * @since 2.2
 */
declare enum EItemAnimation {
    NONE = 0,
    EAT = 1,
    DRINK = 2,
    BLOCK = 3,
    CAMERA = 5,
    SPEAR = 6,
    CROSSBOW = 9
}


/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/enums/ETileEntityType.html" target="_blank">ETileEntityType</a>
 * @since 3.0
 */
declare enum ETileEntityType {
    NETHER_REACTOR = 3,
    SIGN = 4,
    MOB_SPAWNER = 5,
    SKULL = 6,
    FLOWER_POT = 7,
    ENCHANTING_TABLE = 9,
    DAYLIGHT_DETECTOR = 10,
    MUSIC_BLOCK = 11,
    COMPARATOR = 12,
    DROPPER = 14,
    ITEM_FRAME = 17,
    PISTON = 18,
    CHALKBOARD = 20,
    END_PORTAL = 22,
    END_GATEWAY = 24,
    COMMAND_BLOCK = 26,
    BED = 27,
    BANNER = 28,
    STRUCTURE_BLOCK = 32,
    CHEMISTRY_TABLE = 34,
    CONDUIT_BLOCK = 35,
    JIGSAW = 36,
    BLAST_FURNACE = 38,
    SMOKER = 39,
    BELL = 40,
    CAMPFIRE = 41,
    BARREL = 42,
    BEEHIVE = 43,
    LODESTONE = 44
}


declare module KEX {

    /**
     * Enum listing values of all food saturation modifiers
     * defined by vanilla.
     * @since 2.0
     */
    export enum ESaturationModifier {
        POOR = 0.2,
        LOW = 0.6,
        NORMAL = 1.2,
        GOOD = 1.6,
        MAX = 2.0,
        SUPERNATURAL = 2.4
    }

    /**
     * Enum listing all entity damage cause numeric IDs
     * defined by vanilla.
     * @since 3.0
     */
    export enum EDamageCause {
        NONE = -1,
        OVERRIDE = 0,
        CONTACT = 1,
        ENTITY_ATTACK = 2,
        PROJECTILE = 3,
        SUFFOCATION = 4,
        FALL = 5,
        FIRE = 6,
        FIRE_TICK = 7,
        LAVA = 8,
        DROWNING = 9,
        BLOCK_EXPLOSION = 10,
        ENTITY_EXPLOSION = 11,
        VOID = 12,
        SUICIDE = 13,
        MAGIC = 14,
        WITHER = 15,
        STARVE = 16,
        ANVIL = 17,
        THORNS = 18,
        FALLING_BLOCK = 19,
        PISTON = 20,
        FLY_INTO_WALL = 21,
        MAGMA = 22,
        FIREWORKS = 23,
        LIGHTNING = 24,
        CHARGING = 25,
        TEMPERATURE = 26,
        ALL = 31
    }

    /**
     * Enum to specify integer command argument types
     * in custom command registry.
     * @since 3.0
     */
    export enum EArgumentType {
        INT = 0,
        FLOAT = 1,
        BOOL = 2,
        RELATIVE_FLOAT = 3,
        POSITION = 4,
        FLOAT_POSITION = 5,
        STRING = 6,
        MESSAGE = 7,
        JSON = 8,
        ENTITY = 9,
        PLAYER = 10,
        ENUM = 11,
        STRING_ENUM = 12,
        LITERAL = 13
    }

}