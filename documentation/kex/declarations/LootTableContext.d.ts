declare module KEX {

    /**
     * Object containing data about the circumstances of a loot event.
     * Used in all methods connected with generating a list of randomly chosen items from a loot table.
     * @since 2.0
     */
    export interface LootTableContext extends INativeInterface {

        /**
         * @returns following loot event's `ThisEntity`, most commonly it's a victim entity,
         * from which the chosen items are dropped. If loot event was not associated
         * with an entity death, null is returned.
         * @since 2.0
         */
        getThisEntity(): Nullable<Actor>;

        /**
         * @since 2.0
         */
        getOriginalItemName(): Nullable<jstring>;

        /**
         * @since 2.0
         */
        setOriginalItemName(name: any_string): void;

        /**
         * @since 2.0
         */
        getLevel(): Nullable<Level>;

        /**
         * @returns following loot event's explosion radius. It's the range
         * the chosen items will be dropped in, if it's a loot event from entity death.
         * @since 2.0
         */
        getExplosionRadius(): number;

        /**
         * @returns amount of luck applied to the following loot event.
         * @since 2.0
         */
        getLuck(): number;

        /**
         * @returns [[Player]] object of the player who had killed the victim entity, or null if
         * the following loot event was not triggered by entity death or
         * the victim was not killed by a player.
         * @since 2.0
         */
        getKillerPlayer(): Nullable<Player>;

        /**
         * @returns [[Actor]] object of the player's pet who had killed the victim entity, or null if
         * the following loot event was not triggered by entity death or
         * the victim was not killed by some player's pet.
         * @since 2.0
         */
        getKillerPet(): Nullable<Actor>;

        /**
         * @returns [[Actor]] object of the entity who had killed the victim entity, or null if
         * the following loot event was not triggered by entity death or
         * the victim was not killed by an entity.
         * @since 2.0
         */
        getKillerEntity(): Nullable<Actor>;
        
    }

    export module LootTableContext {

        /**
         * Object used to create new [[LootTableContext]] from scratch where it's needed.
         * 
         * Designed for sequential calls starting with its constructor and ending with its `create()` method.
         * @since 2.0
         */
        export class Builder extends java.lang.Object implements INativeInterface {

            /**
             * @returns pointer to the native object wrapped by the following [[LootTableContext.Builder]] object,
             * represented by a signed 64-bit integer
             */
            getPointer(): number;
            
            /**
             * Constructs new [[LootTableContext.Builder]] object from given [[Level]] object.
             * This [[Level]] can be obtained in different ways, for example,
             * [[Actor.getLevel]] or [[GlobalContext.getLevel]].
             * @since 2.0
             */
            constructor(level: Level);
            
            /**
             * Specifies loot event's explosion radius.
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withExplosionRadius(radius: number): Builder;
            
            /**
             * Specifies loot event's `ThisEntity`. Most commonly it's
             * a dead entity, from which the items are dropped.
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withThisEntity(entity: Actor): Builder;
            
            /**
             * Specifies loot event's luck value.
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withLuck(luck: number): Builder;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withOriginalItemName(name: any_string): Builder;
            
            /**
             * Specifies the player entity who killed the victim entity (`ThisEntity`).
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withKillerPlayer(player: Player): Builder;
            
            /**
             * @returns [[LootTableContext]] object created from the following [[Builder]]
             * after all `with` calls.
             * - Note: the result object is linked to a native object,
             * and the native one will be deleted from memory once this object's `finalize` method will be called.
             * @since 2.0
             */
            create(): LootTableContext;

        }

    }

}