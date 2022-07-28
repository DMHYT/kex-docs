declare module KEX {

    /**
     * Wrapper for the native `ActorDamageSource` class to get access
     * to the circumstances of an entity damage event.
     * @since 3.0
     */
    export interface ActorDamageSource extends INativeInterface {
        
        /**
         * @returns whether the victim entity was damaged by another entity
         * @since 3.0
         */
        isEntitySource(): boolean;
        
        /**
         * @returns whether the victim entity was damaged by an entity
         * that had come from another entity, for example, an arrow or another projectile from a player
         * @since 3.0
         */
        isChildEntitySource(): boolean;
        
        /**
         * @returns whether the victim entity was damaged by a specific block in the world,
         * for example, magma or cactus
         * @since 3.0
         */
        isBlockSource(): boolean;
        
        /**
         * @returns whether the victim entity is in creative mode
         * @since 3.0
         */
        isEntityCreative(): boolean;
        
        /**
         * @returns whether the victim entity can place and break blocks in the world
         * @since 3.0
         */
        isEntityWorldBuilder(): boolean;
        
        /**
         * @returns victim entity's unique ID
         * @since 3.0
         */
        getEntityUniqueID(): number;
        
        /**
         * @returns victim entity's numeric type
         * @since 3.0
         */
        getEntityType(): number;
        
        /**
         * @since 3.0
         */
        getEntityCategories(): number;
        
        /**
         * @returns victim entity as an [[Actor]] object, or null
         * if couldn't get the victim entity for some reason
         * @since 3.0
         */
        getEntity(): Nullable<Actor>;
        
        /**
         * @returns whether the attacker entity is in creative mode
         * @since 3.0
         */
        isDamagingEntityCreative(): boolean;
        
        /**
         * @returns whether the attacker entity can place and break blocks in the world
         * @since 3.0
         */
        isDamagingEntityWorldBuilder(): boolean;
        
        /**
         * @returns attacker entity's unique ID
         * @since 3.0
         */
        getDamagingEntityUniqueID(): number;
        
        /**
         * @returns attacker entity's numeric type
         * @since 3.0
         */
        getDamagingEntityType(): number;
        
        /**
         * @since 3.0
         */
        getDamagingEntityCategories(): number;
        
        /**
         * @returns attacker entity as an [[Actor]] object, or null if
         * the victim entity was not attacked by another entity
         * @since 3.0
         */
        getDamagingEntity(): Nullable<Actor>;
        
        /**
         * @returns numeric ID of the damage cause
         * @since 3.0
         */
        getCause(): number;
        
        /**
         * Sets numeric ID of the damage cause
         * @since 3.0
         */
        setCause(cause: number): void;
        
        /**
         * @returns block that damaged the victim entity as a [[BlockState]] object,
         * or null if the victim entity was not attacked by a block
         * @since 3.0
         */
        getBlock(): Nullable<BlockState>;

    }

}