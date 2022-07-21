declare module KEX {
    
    /**
     * The object used to modify player's reach distance
     * (maximum distance from which the player can reach blocks or mobs and interact with them)
     * @since 3.0
     */
    export class ReachDistanceModifier extends java.lang.Object {

        /**
         * Constructs new [[ReachDistanceModifier]] object and adds it to the global list.
         * Remember that it must only be created on the client side, so you probably will have to use client packets.
         * This object contains two values: `modifier` and `multiplier`.
         * ```cpp
         * // Pseudocode of reach distance modifiers application
         * // 12 or 6 depending on whether the player is in creative mode or not
         * float result = getReachDistance(); 
         * // adding all the modifiers to the result
         * for(mod : modifiers) {
         *  if(mod.enabled) {
         *      result += mod.modifier;
         *  }
         * }
         * // multiplying result by all the multipliers
         * for(mod : modifiers) {
         *  if(mod.enabled) {
         *      result *= mod.multiplier;
         *  }
         * }
         * // done!
         * return result;
         * ```
         * By default the modifier is 0, the multiplier is 1
         * @since 3.0
         */
        constructor();

        /**
         * Sets new modifier
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setModifier(modifier: number): ReachDistanceModifier;

        /**
         * Sets new multiplier
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setMultiplier(multiplier: number): ReachDistanceModifier;

        /**
         * Enables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        enable(): ReachDistanceModifier;

        /**
         * Disables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        disable(): ReachDistanceModifier;

        /**
         * @returns `modifier` value of the following object at the moment
         * @since 3.0
         */
        getModifier(): number;

        /**
         * @returns `multiplier` value of the following object at the moment
         * @since 3.0
         */
        getMultiplier(): number;

        /**
         * @returns whether the following modifier object is enabled at the moment
         * @since 3.0
         */
        isActive(): boolean;

    }

}