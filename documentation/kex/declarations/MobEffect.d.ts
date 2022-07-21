declare module KEX {

    /**
     * Wrapper for the native `MobEffect` class to access
     * some additional properties of a specific potion effect.
     * @since 1.0
     */
    export class MobEffect extends java.lang.Object implements INativeInterface {

        /**
         * @returns pointer to the native object wrapped by the following [[MobEffect]] object,
         * represented by a signed 64-bit integer
         */
        getPointer(): number;

        /**
         * @returns whether the effect is visible in potion effects window by default
         * @since 1.0
         */
        isVisible(): boolean;

        /**
         * @returns the numeric ID of the following effect
         * @since 1.0
         */
        getId(): number;

        /**
         * @returns whether the effect can cause harm to the entity in any way,
         * which leads to death or health points loss
         * @since 1.0
         */
        isHarmful(): boolean;

        /**
         * @returns [[MobEffect]] object for the potion effect by given numeric ID,
         * or null if effect by this ID is not defined
         */
        static getById(id: number): Nullable<MobEffect>;

    }

}