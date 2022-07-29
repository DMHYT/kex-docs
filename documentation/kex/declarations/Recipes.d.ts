/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/modules/Recipes.html" target="_blank">Recipes</a>
 * module adding new methods to register recipes of other types, not supported before.
 * @since 3.0
 */
export namespace Recipes {

    /**
     * Adds new custom smithing table recipe
     * @param baseID numeric ID of the item to put in the left slot of the smithing table
     * @param additionID numeric ID of the item to put in the central slot of the smithing table
     * @param resultID numeric ID of the item that will appear in the right slot of the smithing table.
     * If the first ingredient has any NBT data, like custom name, enchantments, [[ItemExtraData]] etc.,
     * this data will be copied into the result item instance.
     * @since 3.0
     */
    export function addSmithingTableRecipe(baseID: number, additionID: number, resultID: number): void;

    /**
     * Removes smithing table recipe by given two ingredients' numeric IDs,
     * if the recipe with this ingredients exists.
     * @since 3.0
     */
    export function removeSmithingTableRecipe(baseID: number, additionID: number): void;

    /**
     * @returns list of all registered smithing table recipes having the item with given numeric ID as a result
     * @since 3.0
     */
    export function getSmithingTableRecipesByResult(resultID: number): SmithingTableRecipe[];

    /**
     * @return list of all registered smithing table recipes having the item with given numeric ID as a first ingredient
     * @since 3.0
     */
    export function getSmithingTableRecipesByBase(baseID: number): SmithingTableRecipe[];

    /**
     * @returns list of all registered smithing table recipes, both vanilla and custom
     * @since 3.0
     */
    export function getAllSmithingTableRecipes(): SmithingTableRecipe[];

    /**
     * Immutable object used internally to store custom smithing table recipes.
     * @since 3.0
     */
    export interface SmithingTableRecipe {

        /**
         * Numeric ID of the item that must be put in the left slot
         * of the smithing table along with [[additionID]] in the central slot
         * to get [[resultID]] in the right slot
         */
        readonly baseID: number;

        /**
         * Numeric ID of the item that must be put in the central slot
         * of the smithing table along with [[baseID]] in the left slot
         * to get [[resultID]] in the right slot
         */
        readonly additionID: number;

        /**
         * Numeric ID of the item which you will get in the right slot of the smithing table
         * if you put [[baseID]] in the left slot and [[additionID]] in the central slot.
         * If the item instance of [[baseID]] has any NBT data, like custom name, enchantments, [[ItemExtraData]] etc.,
         * this data will be copied into the instance of [[resultID]].
         */
        readonly resultID: number;

    }

}