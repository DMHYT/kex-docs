declare module KEX {

    /**
     * Wrapper for the native `MobEffectInstance` class to be used to represent
     * the potion effect that is applied to an entity, or that is going to be applied to them
     * @since 1.0
     */
    export class MobEffectInstance extends java.lang.Object implements INativeInterface {

        /**
         * @returns pointer to the native object wrapped by the [[MobEffectInstance]] object,
         * represented by a signed 64-bit integer
         */
        getPointer(): number;

        /**
         * Constructs new [[MobEffectInstance]] object by given potion effect numeric ID.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @since 1.0
         */
        constructor(id: number);

        /**
         * Constructs new [[MobEffectInstance]] object by given potion effect numeric ID and effect duration.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @since 1.0
         */
        constructor(id: number, duration: number);

        /**
         * Constructs new [[MobEffectInstance]] object by given potion effect numeric ID, effect duration and amplifier.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @since 1.0
         */
        constructor(id: number, duration: number, amplifier: number);

        /**
         * Constructs new [[MobEffectInstance]] object using a wide set of parameters.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @param id numeric ID of the potion effect
         * @param duration effect duration
         * @param amplifier effect amplifier (remember that amplifier is 1 less than effect level displayed like a roman numeral)
         * @param isAmbient unknown parameter, set to false
         * @param isEffectVisible whether the effect produces particles coming from an entity with it applied
         * @param displaysOnScreenTextureAnimation whether the effect is visible in potion effects window
         * @since 1.0
         */
        constructor(id: number, duration: number, amplifier: number, isAmbient: boolean, isEffectVisible: boolean, displaysOnScreenTextureAnimation: boolean);

        /**
         * Constructs new [[MobEffectInstance]] object using a wide set of parameters.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @param id numeric ID of the potion effect
         * @param durationPeaceful effect duration on peaceful game difficulty
         * @param durationEasy effect duration on easy game difficulty
         * @param durationNormal effect duration on normal game difficulty
         * @param durationHard effect duration on hard game difficulty
         * @param amplifier effect amplifier (remember that amplifier is 1 less than effect level displayed like a roman numeral)
         * @param isAmbient unknown parameter, set to false
         * @param isEffectVisible whether the effect produces particles coming from an entity with it applied
         * @param displaysOnScreenTextureAnimation whether the effect is visible in potion effects window
         * @since 3.0
         */
        constructor(id: number, durationPeaceful: number, durationEasy: number, durationNormal: number, durationHard: number, amplifier: number, isAmbient: boolean, isEffectVisible: boolean, displaysOnScreenTextureAnimation: boolean);

        /**
         * @returns numeric ID of the potion effect
         * @since 1.0
         */
        getId(): number;

        /**
         * @returns effect duration
         * @since 1.0
         */
        getDuration(): number;

        /**
         * Sets current effect duration
         * @since 3.0 
         */
        setDuration(duration: number): void;

        /**
         * @returns whether the following [[MobEffectInstance]] has duration
         * for a specific game difficulty above peaceful 
         * @since 3.0
         */
        hasDifficultyDuration(difficulty: 1 | 2 | 3): boolean;

        /**
         * @returns effect duration for a specific game difficulty above peaceful (1 - easy, 2 - normal, 3 - hard).
         * If it's not specified, -1 is returned.
         * - Tip: duration for peaceful difficulty is obtained by usual [[MobEffectInstance.getDuration]]
         * @since 3.0
         */
        getDifficultyDuration(difficulty: 1 | 2 | 3): number;

        /**
         * Sets effect duration for a specific game difficulty above peaceful (1 - easy, 2 - normal, 3 - hard)
         * @since 3.0
         */
        setDifficultyDuration(difficulty: 1 | 2 | 3, duration: number): void;

        /**
         * @returns effect amplifier (remember that amplifier is 1 less than effect level displayed like a roman numeral)
         * @since 1.0
         */
        getAmplifier(): number;

        /** @since 1.0 */
        isAmbient(): boolean;

        /**
         * @returns whether the effect produces particles coming from an entity with it applied
         * @since 3.0
         */
        isEffectVisible(): boolean;

        /**
         * @returns whether the effect is visible in potion effects window
         * @since 1.0
         */
        displaysOnScreenTextureAnimation(): boolean;

        /** @since 1.0 */
        isNoCounter(): boolean;

        /** @since 3.0 */
        setNoCounter(noCounter: boolean): void;

        /**
         * @returns effect duration if it is applied as a splash potion
         * (it is actually `duration * 0.75`)
         * @since 3.0
         */
        getSplashDuration(): number;

        /**
         * @returns effect duration if it is applied as a lingering potion
         * (it is actually `duration * 0.25`)
         * @since 3.0
         */
        getLingerDuration(): number;

        /**
         * @returns [[MobEffect]] object for the following effect instance,
         * or null if effect is not valid
         */
        getEffect(): Nullable<MobEffect>;

    }

}