declare module KEX {

    /**
     * Small module to convert numeric item and block IDs to string identifiers
     * used, for example, in addons
     * @since 1.3
     */
    export module AddonUtils {

        /**
         * @returns string identifier in format `"minecraft:identifier"`
         * of the item by given numeric ID
         * @since 1.3
         */
        export function getAddonItemIdentifier(id: number): jstring;

        /**
         * @returns string identifier of the block by given numeric ID, or null if
         * the block with given ID was not found
         * @since 1.3
         */
        export function getBlockNameId(id: number): Nullable<jstring>;

        /**
         * @returns numeric ID of the item by given string identifier.
         * The identifier must be without `"namespace:"` (`"minecraft:"`),
         * the method does not support items created by addons (having namespace not `"minecraft"`)
         * @since 1.3
         */
        export function getNumericIdFromIdentifier(identifier: any_string): number;

    }

}