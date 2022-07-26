declare module KEX {

    /**
     * Wrapper for the native `Slime` class extending [[Mob]]
     * and giving access to more methods of entities of this class.
     * 
     * You can construct new [[Slime]] from an existing [[Actor]] or [[Mob]],
     * or call [[Actor.asMob]] and [[Mob.asSlime]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]] or [[Mob]] is not a [[Slime]].
     * @since 1.0
     */
    export class Slime extends Mob {

        /**
         * Constructs new [[Slime]] object from given entity unique ID.
         * Use [[Actor.isValid]], [[Actor.isMob]] and [[Mob.isSlime]] first, to check if entity with
         * this ID exists and it's a [[Slime]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(entity: number);
        
        /**
         * Constructs new [[Slime]] object from an existing [[Mob]] object.
         * Use [[Mob.isSlime]] first, to check if your [[Mob]] is a [[Slime]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(mob: Mob);
        
        /**
         * Constructs new [[Slime]] object from an existing [[Actor]] object.
         * Use [[Actor.isMob]] and [[Mob.isSlime]] first, to check if your [[Actor]] is a [[Slime]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(actor: Actor);
        
        /**
         * @since 1.0
         */
        decreaseSquish(): number;
        
        /**
         * @since 1.0
         */
        justJumped(): boolean;
        
        /**
         * @since 1.0
         */
        justLanded(): boolean;
        
        /**
         * @since 1.0
         */
        getSquishValue(): number;
        
        /**
         * @since 1.0
         */
        getOldSquishValue(): number;
        
        /**
         * @since 1.0
         */
        getTargetSquish(): number;
        
        /**
         * @since 1.0
         */
        getSlimeSize(): number;
        
        /**
         * @since 1.0
         */
        setSlimeSize(size: number): void;

    }

}