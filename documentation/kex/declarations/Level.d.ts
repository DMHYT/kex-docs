declare module KEX {

    /**
     * Wrapper for the native `Level` class to access
     * some properties associated with the whole Minecraft world.
     * @since 1.0
     */
    export interface Level extends INativeInterface {

        /**
         * @returns [[TickingAreasManager]] object for the following [[Level]],
         * or null if this [[Level]] doesn't have it.
         * Remember that only server level instances have their [[TickingAreasManager]].
         * @since 3.0
         */
        getTickingAreasManager(): Nullable<TickingAreasManager>;

        /**
         * @returns true if the following [[Level]] is client, false if it's server
         * @since 4.0
         */
        isClientSide(): boolean;

    }

}