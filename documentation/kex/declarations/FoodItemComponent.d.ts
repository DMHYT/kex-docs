declare module KEX {
    
    /**
     * Object containing all the food properties of the specific item.
     * Returned by [[ItemsModule.getFood]]
     * @since 1.4
     */
    export interface FoodItemComponent extends INativeInterface {

        /**
         * @returns numeric ID of the item that the following [[FoodItemComponent]] is associated with.
         * @since 1.4
         */
        getItem(): number;

        /**
         * @returns the amount of nutrition points added to the player's food stats when eating the food.
         * 2 nutrition = 1 hunger bar.
         * @since 1.4
         */
        getNutrition(): number;

        /**
         * @returns the saturation modifier that is used in calculating the amount of saturation points
         * added to the player's food stats when eating the food.
         * The formula is `saturation = nutrition * saturationModifier`
         * @since 1.4
         */
        getSaturationModifier(): number;

        /**
         * @returns the amount of saturation points added to the player's food stats when eating the food.
         * @since 1.4
         */
        getSaturation(): number;

        /**
         * @returns the name ID of the item, that will be added to the inventory after eating the food
         * (for example, mushroom stew -> `"bowl"`), or null if this item was not specified.
         * @since 1.4
         */
        getUsingConvertsTo(): Nullable<jstring>;

        /**
         * @returns numeric ID of the action that will be performed after eating the food.
         * - -1 -> unknown (not specified)
         * - 0 -> chorus teleport
         * - 1 -> suspicious stew effect
         * @since 1.4
         */
        getOnUseAction(): number;

        /** @since 1.4 */
        getOnUseRange(): Vector;

        /**
         * @returns cooldown type of the following food item, or null if it was not specified.
         * The only known vanilla food cooldown type is `chorusfruit`.
         * @since 1.4
         */
        getCooldownType(): Nullable<jstring>;

        /**
         * @returns cooldown time of the following food item, 0 by default.
         * The only vanilla food item with cooldown time is chorus fruit.
         * @since 1.4
         */
        getCooldownTime(): number;

        /**
         * @returns true if the following food can be eaten even when the player has full food stats.
         * By default this property is false, the only vanilla food items with this property set to true
         * are golden apple and enchanted apple.
         * @since 1.4
         */
        canAlwaysEat(): boolean;

        /**
         * @returns list of potion effects applied to the player when eating the following food.
         * @since 1.4
         */
        getEffects(): java.util.List<FoodItemComponent.Effect>;

        /**
         * @returns list of numeric IDs of potion effects that will be removed
         * from the player if present, when eating the following food.
         * @since 1.4
         */
        getRemoveEffects(): java.util.List<number>;

    }
    
    export module FoodItemComponent {

        /**
         * Object containing data about a single potion effect applied
         * by food, including the chance of applying
         * @since 1.4
         */
        export interface Effect extends java.lang.Object {

            /**
             * @returns name ID of the potion effect, or null if the effect is not valid
             * @since 1.4
             */
            getDescriptionId(): Nullable<jstring>;

            /**
             * @returns numeric ID of the potion effect
             * @since 1.4
             */
            getId(): number;

            /**
             * @returns potion effect object, or null if the effect is not valid
             * @since 1.4
             */
            getEffect(): Nullable<MobEffect>;

            /**
             * @returns potion effect duration
             * @since 1.4
             */
            getDuration(): number;

            /**
             * @returns potion effect amplifier
             * @since 1.4
             */
            getAmplifier(): number;

            /**
             * @returns chance for the potion effect to be applied (1.0 = 100%)
             * @since 1.4
             */
            getChance(): number;

        }

        /**
         * Object used to specify all common food properties and use them somewhere.
         * Currently the only way to use this object is in [[ItemsModule.FoodValuesCallback]] function.
         * @since 3.0
         */
        export class Builder extends java.lang.Object {

            /**
             * Constructs new food properties [[Builder]] object
             * @since 3.0
             */
            constructor();

            /**
             * Sets the amount of nutrition points to be refilled by the food
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            nutrition(nutr: number): Builder;

            /**
             * Sets the food's saturation modifier, used to calculate
             * the amount of saturation points refilled by the food
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            saturationMod(sat: number): Builder;

            /**
             * Sets food's `canAlwaysEat` property to true
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            alwaysEat(): Builder;

            /**
             * Adds potion effect to be applied when eating the food
             * @param eff effect instance object
             * @param chance chance for the effect to be applied, default is 1.0 = 100%
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            effect(eff: MobEffectInstance, chance?: number): Builder;

        }
        
    }

}