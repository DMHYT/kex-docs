/**
 * Extension for InnerCore's 
 * <a href="https://docs.mineprogramming.org/api/modules/Item.html" target="_blank">Item</a>
 * module adding new methods or patching existing ones.
 * @since 1.0
 */
export namespace Item {

    /**
     * Creates eatable item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @returns object to apply some more additional parameters to the registered item.
     * @since 1.0
     */
    export function createFoodItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: FoodParamsDescription): globalThis.Item.NativeItem;

    /**
     * Creates sword item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
    export function createSwordItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

    /**
     * Creates axe item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
     export function createAxeItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

     /**
     * Creates pickaxe item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
    export function createPickaxeItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

    /**
     * Creates shovel item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
     export function createShovelItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

     /**
     * Creates hoe item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
    export function createHoeItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

    /**
     * Creates tool item using specified parameters with customized behavior.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @param toolParams object to define tool item's custom behavior using a set of functions called in different moments
     * @since 1.0
     */
    export function createCustomTool(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription, toolParams?: ExtendedToolParams): void;

    /**
     * Creates shears item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 2.2
     */
    export function createShearsItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: ShearsDescription): void;

    /**
     * Creates flint and steel item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 2.2
     */
     export function createFlintAndSteelItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: FlintAndSteelDescription): void;

    /**
     * Object used in all tool item creation methods.
     * @since 1.0
     */
    export interface CommonToolDescription {

        /**
         * Maximum stack size of the tool item, defaults to 1.
         */
        stack?: number;

        /**
         * If true, the tool item will not be displayed in creative inventory, defaults to false.
         */
        isTech?: boolean;

        /**
         * Tool item's material, you can use string name of the material
         * defined by vanilla or registered by [[ToolAPI.addToolMaterial]] or by creating a [[KEX.ToolsModule.ItemTier]],
         * or you can specify the description object of the new tool material.
         * If you don't specify `name` property in this object, this new material will have
         * name like `__unnamedMaterial{N}`, where `{N}` is an incrementing integer.
         */
        tier?: string | ToolAPI.ToolMaterial;

    }

    /**
     * Object used in [[Item.createShearsItem]] method.
     * @since 2.2
     */
    export interface ShearsDescription extends CommonToolDescription {

        /**
         * Here, when creating a shears item, you can specify only its durability
         * without creating a tool material.
         * In this case, your shears will have the same cutting speed as vanilla shears,
         * but the durability will be different.
         */
        durability?: number;

    }

    /**
     * Object used in [[Item.createFlintAndSteelItem]] method.
     * @since 2.2
     */
    export interface FlintAndSteelDescription extends CommonToolDescription {

        /**
         * When creating a flint and steel item, only durability is needed
         * from tool material params. So specifying a whole tool material
         * here is irrelevant.
         * - If you have created a [[KEX.ToolsModule.ItemTier]] for a set of different
         * tools including the following flint and steel, you can use [[KEX.ToolsModule.ItemTier.getUses]]
         * as a [[durability]] parameter in this object.
         * - If you have created a tool material for a set of different tools including the
         * following flint and steel using [[ToolAPI.addToolMaterial]], you can use [[KEX.ToolsModule.getTierByName]]
         * using your material's name, and then call [[KEX.ToolsModule.ItemTier.getUses]] on the result of the
         * previous method and specify the resulting integer as a [[durability]] parameter in this object.
         */
        tier?: never;

        /**
         * Durability of the flint and steel item
         */
        durability?: number;

    }

    /**
     * Object used in updated [[Item.createFoodItem]] method,
     * containing many properties that weren't accessible before without more low-level code
     * like [[Item.setProperties]].
     * @since 1.0
     */
    export interface FoodParamsDescription {
        
        /**
         * Maximum stack size of the food item, defaults to 64.
         */
        stack?: number;

        /**
         * If true, the food item will not be displayed in creative inventory, defaults to false.
         */
        isTech?: boolean;

        /**
         * Amount of nutrition points refilled by the food item, defaults to 1.
         */
        food?: number;

        /**
         * Same as [[food]].
         */
        nutrition?: number;

        /**
         * Saturation modifier used to calculate amount of saturation points refilled by the food item,
         * by the formula `nutrition * saturationModifier`. Can be one of string types defined by vanilla,
         * custom string type registered with [[ItemsModule.newFoodSaturationModifier]] or a floating point value.
         * Defaults to 1.2 (`"normal"`).
         */
        saturation_modifier?: VanillaFoodSaturationModifiers | string | number;

        /**
         * Adds `is_meat` tag to the food item, which means this item will be able to be eaten by dogs
         * to restore their health. Defaults to false.
         */
        is_meat?: boolean;

        /**
         * Whether the food item can be eaten even if the player has full food stats.
         * Defaults to false.
         */
        can_always_eat?: boolean;

        /**
         * Cooldown the food item is set on after being eaten by a player.
         * Defaults to 0 (no cooldown).
         */
        cooldown_time?: number;

        /**
         * Same as [[cooldown_time]], but using pre-defined string cooldown types
         * instead of integer values. Defaults to `"none"` (no cooldown).
         */
        cooldown_type?: "chorusfruit" | "none";

        /**
         * Unknown property, defaults to `[ 0.0, 0.0, 0.0 ]`.
         */
        on_use_range?: [ number, number, number ];

        /**
         * One of pre-defined string types of action that is performed when the food item is eaten.
         * Defaults to `"none"` (no action).
         */
        on_use_action?: "chorus_teleport" | "suspicious_stew_effect" | "none";

        /**
         * Name ID of the item that the food item is converted to after being eaten. In vanilla it's used,
         * for example, for stews (converted to bowls). Defaults to empty string (doesn't convert to any item).
         */
        using_converts_to?: any_string;

        /**
         * List of potion effects that are added to the player who had eaten the food item.
         */
        effects?: FoodEffect[];

        /**
         * List of numeric IDs of potion effects that are removed from the player who had eaten the food item.
         */
        remove_effects?: number[];

    }

    /**
     * Object used in [[FoodParamsDescription.effects]].
     * Describes a single potion effect added to the player who had eaten a specific food item.
     * @since 1.0
     */
    export interface FoodEffect {

        /**
         * Potion effect's lowercase string name.
         */
        name?: PotionEffectTypes;
        
        /**
         * Potion effect's duration in seconds, defaults to 1.
         */
        duration?: number;

        /**
         * Potion effect's level, defaults to 1.
         */
        amplifier?: number;

        /**
         * Chance for this potion effect to be applied, defaults to 1.0 (100%).
         */
        chance?: number;

    }

    /**
     * Interface extending InnerCore's [[ToolAPI.ToolParams]]
     * and adding new method for custom tools with volatile attack damage value
     * depending on the item instance.
     * @since 1.0
     */
    export interface ExtendedToolParams extends ToolAPI.ToolParams {

        /**
         * @returns attack damage value used instead of the tool material's `attackDamageBonus` value,
         * calculated depending on the given [[ItemInstance]].
         * @param attacker **_Added in 5.0_**. Unique ID of the player entity which attacked another entity.
         * Set to 0 when this method is not called within an attack event.
         * @param victim **_Added in 5.0_**. Unique ID of the entity which was attacked by the player.
         * Set to 0 when this method is not called within an attack event.
         * @since 1.0
         */
        getAttackDamageBonus?: (item: ItemInstance, attacker: number, victim: number) => number;

    }

}