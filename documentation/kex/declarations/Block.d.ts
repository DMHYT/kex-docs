/**
 * Extension for InnerCore's 
 * <a href="https://docs.mineprogramming.org/api/modules/Block.html" target="_blank">Block</a>
 * module adding new methods or patching existing ones.
 * @since 4.0
 */
export namespace Block {

    /**
     * Same as [[KEX.BlocksModule.registerComparatorSignalCallbackJS]].
     * @since 4.0 
     */
    export function registerComparatorSignalFunctionForID(id: number, func: KEX.BlocksModule.ComparatorSignalCallback, isCallbackForced?: boolean): void;

    /**
     * Same as [[registerComparatorSignalFunctionForID]], but can also take string ID of the block (internally converting it to numeric).
     * @since 4.0
     */
    export function registerComparatorSignalCallback(id: string | number, func: KEX.BlocksModule.ComparatorSignalCallback, isCallbackForced?: boolean): void;

    /**
     * Registers the function that will be called when an entity steps off a block with given numeric ID.
     * The function has the same parameters as in [[Block.registerEntityStepOnFunction]].
     * @since 4.0
     */
    export function registerEntityStepOffFunctionForID(id: number, func: globalThis.Block.EntityStepOnFunction): void;

    /**
     * Same as [[registerEntityStepOffFunctionForID]], but can also take string ID of the block (internally converting it to numeric).
     * @since 4.0
     */
    export function registerEntityStepOffFunction(id: string | number, func: globalThis.Block.EntityStepOnFunction): void;

    /**
     * @returns light level value for the block with given ID and data. If `data` parameter is omitted, it defaults to 0.
     * @since 4.0
     */
    export function getLightLevel(id: number, data?: number): number;

    /**
     * Sets light level value for the block with given ID and data 0
     * @param lightLevel light level value for the block with given ID, clamped between 0 and 15 inclusively
     * @since 4.0
     */
    export function setLightLevel(id: number, lightLevel: number): void;

    /**
     * Sets light level value for the block with given ID and data.
     * Same as [[KEX.BlocksModule.setLightEmission]].
     * @param lightLevel light level value for the block with given ID and data, clamped between 0 and 15 inclusively
     * @since 4.0
     */
    export function setLightLevel(id: number, data: number, lightLevel: number): void;

}