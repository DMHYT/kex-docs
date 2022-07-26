declare module KEX {

    /**
     * A module that adds bunch of new features
     * that can be applied to vanilla or custom items.
     * Remember that not all the methods support vanilla items,
     * because of some technical peculiarities.
     * @since 1.0
     */
    export module ItemsModule {

        /**
         * If this property is set to true, the item with given ID
         * won't be usable in adventure mode, by default it's false.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setRequiresWorldBuilder(id: number, requiresWorldBuilder: boolean): void;

        /**
         * If this property is set to true, the item with given ID
         * will be immune to any type of explosion.
         * The only vanilla item with this property set to true is nether star.
         * By default it's false.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setExplodable(id: number, explodable: boolean): void;

        /**
         * If this property is set to true, the item with given ID
         * will be immune to fire and lava. Talking about the vanilla items,
         * the only items having this property set to true are netherite ingot, tools and armor.
         * By default it's false.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setFireResistant(id: number, fireResistant: boolean): void;

        /**
         * If this property is set to true, the item with given ID
         * will not despawn in a certain period of time after it was dropped on the ground and not picked up by anyone.
         * There are no vanilla items with this property set to false, by default it's true.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setShouldDespawn(id: number, shouldDespawn: boolean): void;

        /**
         * If this property is set to true, the icon of the item with given ID
         * will be horizontally mirrored in container slots. By default it's false.
         * Some of the vanilla items with this property set to true are fishing rod and carrot on a stick.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setIsMirroredArt(id: number, isMirroredArt: boolean): void;

        /**
         * Sets the amount of items that can be smelt with a single item of given ID as a fuel.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setFurnaceBurnIntervalMultiplier(id: number, multiplier: number): void;

        /**
         * Sets the multiplier that will be used in calculating the amount of experience to add to a player
         * (or to drop from a broken furnace) after smelting the item with given ID (the method must be applied
         * to the result and not to the ingredient).
         * Default value is 0.0, cooked meat has 0.35, golden ingot has 1.0 (1.0 = 100% chance of dropping any XP)
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setFurnaceXPMultiplier(id: number, multiplier: number): void;

        /**
         * Calling this method prevents the item with given ID to be repaired in anvil
         * using any material or these items paired. This can be used, for example, with electric tools.
         * @param id numeric ID of the item to apply this property to, vanilla **NOT** supported
         * @since 1.0
         */
        export function setCannotBeRepairedInAnvil(id: number): void;

        /**
         * @returns true if the item with given ID is a food, false otherwise
         * @since 1.4
         */
        export function isFood(id: number): boolean;

        /**
         * @returns object containing food properties of the item with given ID,
         * or null if the item is not a food
         * @since 1.4
         */
        export function getFood(id: number): Nullable<FoodItemComponent>;

        /**
         * Registers new string food saturation modifier that can be used in food properties JSON object.
         * Currently there are 6 pre-defined modifiers in vanilla:
         * - `"poor"` - 0.2
         * - `"low"` - 0.6
         * - `"normal"` - 1.2
         * - `"good"` - 1.6
         * - `"max"` - 2.0
         * - `"supernatural"` - 2.4
         * @since 1.4
         */
        export function newFoodSaturationModifier(name: any_string, value: number): void;

        /**
         * @returns floating point value of food saturation modifier by given name,
         * or 1.2 (value of `"normal"` modifier) if the modifier by this name is not defined
         * @since 1.4
         */
        export function saturationModifierFromString(name: any_string): number;

        /**
         * Sets dynamic maximum use duration for the item with given ID,
         * depending on the contents of the item instance.
         * @param id numeric ID of the item to apply this callback to, vanilla **NOT** supported
         * @param callback function that takes the item instance and must return max use duration value for it
         * @since 2.2
         */
        export function setMaxUseDurationDynamic(id: number, callback: UseDurationCallback): void;

        /**
         * Adds custom modification to the item tooltip. It is better than InnerCore's [[Item.registerNameOverrideFunction]],
         * because exactly the hover text and not the item name is being modified.
         * @param id numeric ID of the item to apply this callback to, vanilla supported
         * @param callback function that takes tooltip represented by the list of strings, which you can modify in any way, as the second parameter,
         * and also item instance as the first parameter and [[Level]] object as the third
         * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
         * @param isCallbackForced default is true, you can set it to false, if your tooltip doesn't have any volatile components,
         * then your tooltip will be called 4 times less often than the ones with this param set to true, which will reduce a tiny performance loss.
         * @since 3.0
         */
        export function addTooltip(id: number, callback: OnTooltipCallback, priority?: number, isCallbackForced?: boolean): void;

        /**
         * Sets dynamic food properties for the item with given ID,
         * depending on the contents of the item instance.
         * @param id numeric ID of the item to apply this callback to, vanilla supported
         * @param callback function that takes the item instance and must return the food properties object builder
         * with all needed properties specified for it
         * @since 3.0
         */
        export function setDynamicFoodValues(id: number, callback: FoodValuesCallback): void;

        /**
         * Sets the given [[ReachDistanceModifier]] object to be enabled when the player is holding
         * the item with given ID in their hand.
         * @param id numeric ID of the item to apply the modifier to, vanilla supported
         * @since 3.0
         */
        export function registerReachDistanceModifierFor(id: number, modifier: ReachDistanceModifier): void;
        
        /**
         * Function used in [[ItemsModule.setMaxUseDurationDynamic]] method
         * @param stack item instance, for which the callback was called
         * @returns use duration for the given item instance
         * @since 2.2
         */
        export interface UseDurationCallback {
            (stack: ItemInstance): number;
        }

        /**
         * Function used in [[ItemsModule.addTooltip]] method
         * @param stack item instance, for which the callback was called
         * @param text tooltip represented by the list of strings (divided by line breaks).
         * You can modify it in any way: change the existing elements, add yours and remove elements.
         * @param level [[Level]] object to get some additional data
         * @since 3.0
         */
        export interface OnTooltipCallback {
            (stack: ItemInstance, text: java.util.List<jstring>, level: Level): void;
        }

        /**
         * Function used in [[ItemsModule.setDynamicFoodValues]] method
         * @param stack item instance, for which the callback was called
         * @returns food properties object builder with all needed properties specified for the given item instance
         * @since 3.0
         */
        export interface FoodValuesCallback {
            (stack: ItemInstance): FoodItemComponent.Builder;
        }

    }

}