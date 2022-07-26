declare type jstring = java.lang.String;


/**
 * Type alias to mark that both Java and JS string can be used as a parameter somewhere.
 * Used in all methods imported from Java containing `String` parameters.
 */
declare type any_string = string | jstring;


/**
 * Interface implemented by all KEX classes that are interfaces
 * to equivalent native objects. Has only one method to overload,
 * that must return pointer to the native object represented by a signed 64-bit integer.
 */
declare interface INativeInterface extends java.lang.Object {

    /**
     * @returns pointer to the native object wrapped by the following native interface object,
     * represented by a signed 64-bit integer
     */
    getPointer(): number;

}


/**
 * Type alias to mark that [[KEX.TickingAreasManager]] and [[KEX.ChunksModule]] methods
 * can take the dimension in three representations:
 * - The numeric ID of the dimension
 * - The [[BlockSource]] object associated with the needed dimension
 * - The [[KEX.Dimension]] object for the needed dimension
 */
declare type WorldOrDimension = number | BlockSource | KEX.Dimension;


/**
 * Object used in [[KEX.LootModule]] to specify some quantity ranges,
 * like item count, data/damage, number of loot pool rolls etc.
 */
declare type MinMax = { min: number, max: number };


/**
 * Type alias listing all the vanilla structure string types.
 * Used in `"exploration_map"` loot table entry function's JSON description.
 */
declare type FeatureTypes =
    "buriedtreasure" |
    "endcity" |
    "fortress" |
    "mansion" |
    "mineshaft" |
    "monument" |
    "pillageroutpost" |
    "ruins" |
    "shipwreck" |
    "stronghold" |
    "temple" |
    "village";


/**
 * Type alias listing all the vanilla enchantment string types.
 * Used in `"specific_enchants"` loot table entry function's JSON description.
 */
declare type EnchantTypes =
    "protection" |
    "fire_protection" |
    "feather_falling" |
    "blast_protection" |
    "projectile_protection" |
    "thorns" |
    "respiration" |
    "aqua_affinity" |
    "depth_strider" |
    "sharpness" |
    "smite" |
    "bane_of_arthropods" |
    "knockback" |
    "fire_aspect" |
    "looting" |
    "efficiency" |
    "silk_touch" |
    "unbreaking" |
    "fortune" |
    "power" |
    "punch" |
    "flame" |
    "infinity" |
    "luck_of_the_sea" |
    "lure" |
    "frost_walker" |
    "mending" |
    "binding_curse" |
    "vanishing_curse" |
    "impaling" |
    "riptide" |
    "loyalty" |
    "channeling";


/**
 * Type alias listing all the string food saturation modifiers defined by vanilla.
 * - `"poor"` = 0.2
 * - `"low"` = 0.6
 * - `"normal"` = 1.2
 * - `"good"` = 1.6
 * - `"max"` = 2.0
 * - `"supernatural"` = 2.4
 */
declare type VanillaFoodSaturationModifiers =
    "poor" |
    "low" |
    "normal" |
    "good" |
    "max" |
    "supernatural";


/**
 * Type alias listing all the vanilla potion effect string types.
 * Used in [[Item.FoodEffect.name]].
 */
declare type PotionEffectTypes =
    "movement_speed" |
    "movement_slowdown" |
    "dig_speed" |
    "dig_slowdown" |
    "damage_boost" |
    "heal" |
    "harm" |
    "jump" |
    "confusion" |
    "regeneration" |
    "damage_resistance" |
    "fire_resistance" |
    "water_breathing" |
    "invisibility" |
    "blindness" |
    "night_vision" |
    "hunger" |
    "weakness" |
    "poison" |
    "wither" |
    "health_boost" |
    "absorption" |
    "saturation" |
    "levitation" |
    "fatal_poison" |
    "conduit_power" |
    "slow_falling" |
    "bad_omen" |
    "village_hero";