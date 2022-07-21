declare type jstring = java.lang.String;


/**
 * Type alias to mark that both Java and JS string can be used as a parameter somewhere.
 * Used in all methods imported from Java containing `String` parameters.
 */
declare type any_string = string | jstring;


/**
 * Interface implemented by all KEX classes that are interfaces
 * to equivalent native objects. Has only one method to overload,
 * that must return pointer to the native object represented by a signed 64-bit integer.
 */
declare interface INativeInterface extends java.lang.Object {

    /**
     * @returns pointer to the native object wrapped by the following native interface object,
     * represented by a signed 64-bit integer
     */
    getPointer(): number;

}


/**
 * Type alias to mark that [[KEX.TickingAreasManager]] and [[KEX.ChunksModule]] methods
 * can take the dimension in three representations:
 * - The numeric ID of the dimension
 * - The [[BlockSource]] object associated with the needed dimension
 * - The [[KEX.Dimension]] object for the needed dimension
 */
declare type WorldOrDimension = number | BlockSource | KEX.Dimension;