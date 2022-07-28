declare module KEX {

    /**
     * Module to register new entity damage sources and death causes,
     * also containing new method to deal damage to the entity,
     * with wider parameters object than in InnerCore's [[Entity.damageEntity]] method.
     * @since 3.0
     */
    export module DamageModule {

        /**
         * Class used to register a custom entity damage source
         * and specify a static or dynamic death message for it.
         * @since 3.0
         */
        export class CustomCause extends java.lang.Object {

            /**
             * Name of the damage source, which you
             * had specified in [[CustomCause]]'s constructor.
             * @since 3.0
             */
            readonly name: jstring;

            /**
             * Numeric ID of the damage source,
             * which is automatically generated when creating a new [[CustomCause]].
             * This ID is generated once and remains the same in the modpack you're currently in.
             * @since 3.0
             */
            readonly id: number;

            /**
             * Constructs new [[CustomCause]] object by given name,
             * automatically registering new damage source in native,
             * and a numeric ID, which will remain the same in the current modpack.
             * @since 3.0
             */
            constructor(name: any_string);

            /**
             * Specifies that the following damage source is of fire type.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setFire(): CustomCause;

            /**
             * Specifies death message for the following damage source.
             * In this overload, the given message is set as the English localization,
             * which will be used by default if you don't add translations to other languages.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDeathMessage(message: any_string): CustomCause;

            /**
             * Specifies death message for the following damage source.
             * @param translations object with language codes as keys and translations
             * of the death message to the corresponding language as values
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDeathMessage(translations: { [key: string]: string }): CustomCause;

            /**
             * Specifies dynamic death message depending on the circumstances of the entity damage event,
             * for the following damage source.
             * @param callback function that must return manually generated death message that will be sent in the chat
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDeathMessageCallback(callback: CustomTranslationCallback): CustomCause;

        }

        /**
         * @returns whether the damage type of given numeric ID
         * is a fire damage type
         * @since 3.0
         */
        export function isFire(id: number): boolean;

        /**
         * Deals damage to the given entity.
         * Successor to InnerCore's [[Entity.damageEntity]] method,
         * but with wider additional parameters object.
         * @param entity unique ID of the entity to deal damage to
         * @param damage amount of damage (2 damage points = 1 heart)
         * @param cause numeric ID of the damage cause, can be one of [[KEX.EDamageCause]] values,
         * or [[CustomCause.id]] field
         * @param params additional parameters object
         * @since 3.0
         */
        export function damageEntity(entity: number, damage: number, cause: number, params?: DamageDealingParams): void;

        /**
         * Function used in [[CustomCause.setDeathMessageCallback]].
         * @param source object containing circumstances of the entity damage event, which caused the entity's death
         * @param nickname nickname of the entity to print into the death message
         * @param deadEntity the entity who died and needs to send a death message for them in the chat, as an [[Actor]] object
         * @returns manually generated and localized death message, that will be sent in the chat
         * @since 3.0
         */
        export interface CustomTranslationCallback {
            (source: ActorDamageSource, nickname: jstring, deadEntity: Actor): any_string;
        }

        /**
         * Parameters object used in [[DamageModule.damageEntity]] method.
         * @since 3.0
         */
        export interface DamageDealingParams {

            /**
             * Damage source type
             * - omitting this param - common damage
             * - `"actor"` or `"entity"` - damage from an attacking entity
             * - `"blocksource"` or `"world"` - damage from the world
             * - `"block"` - damage from a specific block
             */
            source?: "actor" | "entity" | "blocksource" | "world" | "block";

            /**
             * Unknown param, defaults to false
             */
            bool1?: boolean;

            /**
             * Unknown param, defaults to false
             */
            bool2?: boolean;

            /**
             * Unique ID of the attacker entity, needs to be specified
             * if you put `"actor"` or `"entity"` in [[source]] param.
             */
            attacker?: number;

            /**
             * World object, needs to be specified
             * if you put `"blocksource"` or `"world"` in [[source]] param.
             */
            world?: BlockSource;

            /**
             * Same as [[world]]
             */
            region?: BlockSource;

            /**
             * Coordinates of the block, which dealt the damage,
             * needs to be specified if you put `"block"` in [[source]] param.
             */
            position?: Partial<Vector>;

            /**
             * Same as [[position]]
             */
            pos?: Partial<Vector>;

            /**
             * Same as X coordinate in [[position]]
             */
            x?: number;

            /**
             * Same as Y coordinate in [[position]]
             */
            y?: number;
            
            /**
             * Same as Z coordinate in [[position]]
             */
            z?: number;

        }

    }

}