declare module KEX {

    /**
     * A module that adds some new features that can be applied to custom blocks.
     * Remember that you cannot use this module's methods on vanilla blocks,
     * as they don't support them because of some technical peculiarities.
     * @since 4.0
     */
    export module BlocksModule {

        /**
         * Registers the block with given numeric ID as a comparator signal emitter.
         * @param callback the function that will be called on every block with given ID in the world, several times a second,
         * and must return comparator signal strength based on given circumstances
         * @param isCallbackForced Comparator signal callback is called by Minecraft on a block every 2 ticks (10 times a second).
         * For optimization purposes, KEX increases this interval to 10 ticks (2 times a second). If high call frequency is important
         * for your block, you can set this parameter to true, and the interval between calls for your block will be set back to 2 ticks.
         * By default this parameter is set to false.
         * @since 4.0
         */
        export function registerComparatorSignalCallbackJS(id: number, callback: ComparatorSignalCallback, isCallbackForced?: boolean): void;

        /**
         * Registers the block with given numeric ID as a comparator signal emitter.
         * @param callback the function that will be called on every block with given ID in the world, several times a second,
         * and must return comparator signal strength based on given circumstances
         * @param isCallbackForced Comparator signal callback is called by Minecraft on a block every 2 ticks (10 times a second).
         * For optimization purposes, KEX increases this interval to 10 ticks (2 times a second). If high call frequency is important
         * for your block, you can set this parameter to true, and the interval between calls for your block will be set back to 2 ticks.
         * By default this parameter is set to false.
         * @since 5.0
         */
        export function registerComparatorSignalCallback(id: number, callback: ComparatorSignalCallbackJava, isCallbackForced?: boolean): void;

        /**
         * Registers the function that will be called when an entity steps on a block with given numeric ID
         * 
         * **Note:** as of June 2023 (latest InnerCore version being `2.3.1b115`), InnerCore's [[Block.registerEntityStepOnFunction]]
         * is broken, so it's patched by this method in order for it to properly function. If it will be fixed in a future InnerCore
         * update, the patch will be removed.
         * @since 4.0
         */
        export function registerOnStepOnCallback(id: number, callback: OnStepOnCallback): void;

        /**
         * Registers the function that will be called when an entity steps off a block with given numeric ID
         * @since 4.0
         */
        export function registerOnStepOffCallback(id: number, callback: OnStepOffCallback): void;

        /**
         * Unlike the InnerCore's [[Block.SpecialType]]'s `lightlevel` parameter, this method allows to set
         * separate light level values for different data values of a block with the same ID.
         * @param lightLevel light level value for the block with given ID and data, clamped between 0 and 15 inclusively
         * @since 4.0
         */
        export function setLightEmission(id: number, data: number, lightLevel: number): void;

        /**
         * @returns light level value for the block with given ID and data
         * @since 4.0
         */
        export function getLightEmission(id: number, data: number): number;

        /**
         * Registers the block with given numeric ID as a possible holder of given block property.
         * You can't add any properties to your custom block's block state object, if you don't
         * specify all the properties held by your block using this method.
         * @since 5.0
         */
        export function registerStateForBlock(id: number, state: NonNullable<BlockStates.Property<any>>): void;

        /**
         * Function used in [[BlocksModule.registerComparatorSignalCallbackJS]].
         * @param block object containing ID, data and states of the block, on which the callback is called
         * @param world [[BlockSource]] object of the world the block is in
         * @param coords object containing block's coordinates, the `side` where the comparator is located relative
         * to the block, and the coordinates of the comparator itself in `relative` field.
         * @returns comparator signal strength to output from the block. Clamped between 0 and 15 inclusively.
         * @since 4.0
         */
        export interface ComparatorSignalCallback {
            (block: BlockState, world: BlockSource, coords: globalThis.Callback.ItemUseCoordinates): number;
        }

        /**
         * Function used in [[BlocksModule.registerComparatorSignalCallback]].
         * @param block object containing ID, data and states of the block, on which the callback is called
         * @param world [[BlockSource]] object of the world the block is in
         * @param pos integer coordinates of the block's position in the world
         * @param side the side where the comparator is located relative to the block
         * @returns comparator signal strength to output from the block. Clamped between 0 and 15 inclusively.
         * @since 5.0
         */
        export interface ComparatorSignalCallbackJava {
            (block: BlockState, world: BlockSource, pos: Math.BlockPos, side: Math.Direction): number;
        }

        /**
         * Function used in [[BlocksModule.registerOnStepOnCallback]].
         * @param world [[BlockSource]] object of the world the block is in
         * @param pos block's coordinates
         * @param state object containing ID, data and states of the block, on which the callback is called
         * @param entity [[Actor]] object of the entity, which stepped on the block
         * @since 4.0
         */
        export interface OnStepOnCallback {
            (world: BlockSource, pos: Vector, state: BlockState, entity: Actor): void;
        }

        /**
         * Function used in [[BlocksModule.registerOnStepOffCallback]].
         * The parameters are completely the same as in [[OnStepOnCallback]],
         * so instead of rewriting their description here, just an alias is declared.
         * @since 4.0
         */
        export type OnStepOffCallback = OnStepOnCallback;

    }

}