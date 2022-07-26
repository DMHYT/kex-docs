declare module KEX {

    /**
     * Module containing some of Minecraft's singleton objects.
     * Most of them must be accessed on the client side, otherwise they return null.
     * @since 2.0
     */
    export module GlobalContext {

        /**
         * @returns [[LocalPlayer]] object of the current minecraft client.
         * Must be called on the client side, otherwise null be returned.
         * @since 2.0
         */
        export function getLocalPlayer(): Nullable<LocalPlayer>;
        
        /**
         * @returns [[Level]] object of the current minecraft client.
         * Should not be used on the server side.
         * @since 3.0
         */
        export function getLevel(): Nullable<Level>;

    }

}