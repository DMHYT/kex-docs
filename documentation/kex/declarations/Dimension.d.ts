declare module KEX {

    /**
     * Wrapper for the native `Dimension` class to access
     * some properties associated with the specific dimension of a Minecraft world.
     * @since 1.0
     */
    export interface Dimension extends INativeInterface {

        /**
         * @returns numeric ID of the following [[Dimension]]
         * @since 3.0
         */
        getDimensionId(): number;

        /**
         * @returns [[Level]] object that owns the following [[Dimension]],
         * or null if this [[Dimension]] is not owned by a [[Level]] for some reason.
         * @since 3.0
         */
        getLevel(): Nullable<Level>;

    }

}