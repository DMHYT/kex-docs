declare module KEX {

    /**
     * Wrapper for the native `LocalPlayer` class extending [[Player]]
     * and adding some new methods associated specifically with the client-side player entity.
     * 
     * You can construct new [[LocalPlayer]] from an existing [[Actor]], [[Mob]] or [[Player]],
     * or call [[Actor.asLocalPlayer]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]], [[Mob]] or [[Player]] is not a [[LocalPlayer]].
     * @since 2.0
     */
    export class LocalPlayer extends Player {

        /**
         * Constructs new [[LocalPlayer]] object from given entity unique ID.
         * Use [[Actor.isValid]] and [[Actor.isLocalPlayer]] first, to check if entity with
         * this ID exists and it's a [[LocalPlayer]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 2.0
         */
        constructor(entity: number);

        /**
         * Constructs new [[LocalPlayer]] object from an existing [[Player]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Player]] is not a [[LocalPlayer]].
         * You should better use [[Actor.asLocalPlayer]], that will return null in case your [[Player]] is not a [[LocalPlayer]].
         * @since 2.0
         */
        constructor(player: Player);

        /**
         * Constructs new [[LocalPlayer]] object from an existing [[Mob]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Mob]] is not a [[LocalPlayer]].
         * You should better use [[Actor.asLocalPlayer]], that will return null in case your [[Mob]] is not a [[LocalPlayer]].
         * @since 2.0
         */
        constructor(mob: Mob);

        /**
         * Constructs new [[LocalPlayer]] object from an existing [[Actor]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Actor]] is not a [[LocalPlayer]].
         * You should better use [[Actor.asLocalPlayer]], that will return null in case your [[Actor]] is not a [[LocalPlayer]].
         * @since 2.0
         */
        constructor(actor: Actor);

        /**
         * @returns [[MoveInputHandler]] object of the following [[LocalPlayer]],
         * or null if this [[LocalPlayer]] doesn't have it for some reason.
         * @since 2.0
         */
        getMoveInputHandler(): Nullable<MoveInputHandler>;

        /**
         * @returns whether the following [[LocalPlayer]] is flying at the moment
         * @since 2.0
         */
        isFlying(): boolean;

    }

}