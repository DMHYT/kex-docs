/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/modules/Callback.html" target="_blank">Callback</a>
 * module listing new callbacks invoked by Kernel Extension mod
 * and adding some new features to the callback system.
 * @since 1.0
 */
export namespace Callback {

    export function addCallback(name: "KEX-InnerCoreIdsCached", func: () => void, priority?: number): void;
    export function addCallback(name: "PlayerJump", func: PlayerJumpFunction, priority?: number): void;
    export function addCallback(name: "GameModeChanged", func: GameModeChangedFunction, priority?: number): void;
    export function addCallback(name: "ChangeCarriedItem", func: ChangeCarriedItemFunction, priority?: number): void;
    export function addCallback(name: "EntitySneakChanged", func: EntitySneakChangedFunction, priority?: number): void;
    export function addCallback(name: "ItemTooltip", func: KEX.ItemsModule.OnTooltipCallback, priority?: number): void;
    export function addCallback(name: "BlockEventEntityStepOff", func: globalThis.Block.EntityStepOnFunction, priority?: number): void;

    /**
     * Same as [[addCallback]], but using improved callback system allowing
     * you to add a callback handler, that will be called only [[once]],
     * or to remove an existing callback handler with [[off]].
     * @since 2.1
     */
    export var on: typeof addCallback;
    
    /**
     * Same as [[addCallback]], but the given callback handler
     * will be called only once, when the event occurs, and then it'll be removed
     * from the handlers list.
     * @since 2.1
     */
    export var once: typeof addCallback;

    /**
     * Removes an existing callback handler from the handlers list.
     * To use this, you'll need to make your handler an external function, for example:
     * ```js
     * var jumpCounter = 0;
     * function jumpHandler(player) {
     *     if(++jumpCounter >= 10) {
     *         Callback.off("PlayerJump", jumpHandler);
     *     }
     *     Debug.m("The player has already jumped " + jumpCounter + " times!");
     * }
     * Callback.on("PlayerJump", jumpHandler);
     * ```
     * @since 2.1
     */
    export var off: typeof addCallback;

    /**
     * Function used in `"PlayerJump"` callback.
     * @param player unique ID of the player, who jumped
     * @since 2.0
     */
    export interface PlayerJumpFunction {
        (player: number): void;
    }

    /**
     * Function used in `"GameModeChanged"` callback.
     * @param mode numeric ID of the game mode the local player has switched to
     * @since 2.0
     */
    export interface GameModeChangedFunction {
        (mode: number): void;
    }

    /**
     * Function used in `"ChangeCarriedItem"` callback
     * @param player unique ID of the player, whose carried item has changed
     * @param oldItem item instance of the player's hand before changing
     * @param newItem item instance of the player's hand after changing
     * @param hand 0=mainhand, 1=offhand
     * @since 2.2.2
     */
    export interface ChangeCarriedItemFunction {
        (player: number, oldItem: ItemInstance, newItem: ItemInstance, hand: 0 | 1): void;
    }

    /**
     * Function used in `"EntitySneakChanged"` callback.
     * @param entity unique ID of the entity, that changed their sneak state
     * @param sneaking sneak state of the entity after changing, true = sneaking, false = not sneaking
     * @since 3.0
     */
    export interface EntitySneakChangedFunction {
        (entity: number, sneaking: boolean): void;
    }

}