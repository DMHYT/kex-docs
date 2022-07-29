declare module KEX {

    /**
     * Module to work with loaded areas in the world.
     * Actually a shortcut of [[TickingAreasManager]] class with more human-readable structure.
     * @since 3.0
     */
    export module ChunksModule {

        /**
         * Adds new rectangle-shaped ticking area to the given dimension.
         * @param dimension dimension where to create the ticking area
         * @param name name of the area, that must be unique for the given dimension.
         * If you omit this parameter, the name will be set to default (`"Area{N}"`), where `{N}` is an incrementing integer).
         * - Note: before creating a new area with the name specified, ensure that there is no area
         * with your name in the given dimension, using [[ChunksModule.areaExists]]. If you skip this check,
         * you may get a [[java.lang.IllegalArgumentException]] when calling [[LoadedRectangle.load]].
         * @returns object to specify start and end position of your area, and then load it
         * @since 3.0
         */
        export function addLoadedRectangle(dimension: WorldOrDimension, name?: any_string): LoadedRectangle;

        /**
         * Adds new circle-shaped ticking area to the given dimension.
         * @param dimension dimension where to create the ticking area
         * @param name name of the area, that must be unique for the given dimension.
         * If you omit this parameter, the name will be set to default (`"Area{N}"`), where `{N}` is an incrementing integer).
         * - Note: before creating a new area with the name specified, ensure that there is no area
         * with your name in the given dimension, using [[ChunksModule.areaExists]]. If you skip this check,
         * you may get a [[java.lang.IllegalArgumentException]] when calling [[LoadedCircle.load]].
         * @returns object to specify center position and radius of your area, and then load it
         * @since 3.0
         */
        export function addLoadedCircle(dimension: WorldOrDimension, name?: any_string): LoadedCircle;

        /**
         * Adds new rectangle-shaped ticking area to the given dimension, covering only one chunk on given coordinates.
         * It is actually a shortcut, which looks like this:
         * ```java
         * return addLoadedRectangle(dimension, name)
         *     .start(x, z)
         *     .end(x, z);
         * ```
         * @param dimension dimension where to create the ticking area
         * @param name name of the area, that must be unique for the given dimension.
         * If you omit this parameter, the name will be set to default (`"Area{N}"`), where `{N}` is an incrementing integer).
         * - Note: before creating a new area with the name specified, ensure that there is no area
         * with your name in the given dimension, using [[ChunksModule.areaExists]]. If you skip this check,
         * you may get a [[java.lang.IllegalArgumentException]] when calling [[LoadedRectangle.load]].
         * @returns object to load the created area. This method returns the same object as [[addLoadedRectangle]], but
         * in this case you don't need to specify start and end position of the area.
         * @since 3.0
         */
        export function addLoadedChunk(dimension: WorldOrDimension, x: number, z: number, name?: any_string): LoadedRectangle;

        /**
         * @returns whether a ticking area with given name exists in given dimension
         * @since 3.0
         */
        export function areaExists(name: any_string, dimension: WorldOrDimension): boolean;

        /**
         * Object returned by [[ChunksModule.addLoadedRectangle]] and [[ChunksModule.addLoadedChunk]].
         * @since 3.0
         */
        export interface LoadedRectangle {

            /**
             * Specifies the start position of your area. If the following [[LoadedRectangle]] was returned
             * by [[ChunksModule.addLoadedChunk]], you don't need to call this method.
             * Also note that your area will cover not only the blocks included in the resulting rectangle,
             * but all the chunks that intersect with this rectangle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            start(x: number, z: number): LoadedRectangle;

            /**
             * Specifies the end position of your area. If the following [[LoadedRectangle]] was returned
             * by [[ChunksModule.addLoadedChunk]], you don't need to call this method.
             * Also note that your area will cover not only the blocks included in the resulting rectangle,
             * but all the chunks that intersect with this rectangle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            end(x: number, z: number): LoadedRectangle;

            /**
             * Loads the following area into the world.
             * Ensure that you've specified [[start]] and [[end]] positions before calling this method,
             * otherwise you'll get a [[java.lang.IllegalStateException]].
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            load(): LoadedRectangle;

            /**
             * Unloads the following area from the world.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            unload(): LoadedRectangle;

            /**
             * @returns whether the following area is loaded into the world at the moment
             * @since 3.0
             */
            isLoaded(): boolean;

        }

        /**
         * Object returned by [[ChunksModule.addLoadedCircle]].
         * @since 3.0
         */
        export interface LoadedCircle {

            /**
             * Specifies the center position of your area.
             * Note that your area will cover not only the blocks included in the resulting circle,
             * but all the chunks that intersect with this circle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            center(x: number, z: number): LoadedCircle;

            /**
             * Specifies the radius of your circle area in meters (blocks).
             * Note that your area will cover not only the blocks included in the resulting circle,
             * but all the chunks that intersect with this circle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            radius(r: number): LoadedCircle;

            /**
             * Loads the following area into the world.
             * Ensure that you've specified [[center]] position and [[radius]] before calling this method,
             * otherwise you'll get a [[java.lang.IllegalStateException]].
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            load(): LoadedCircle;

            /**
             * Unloads the following area from the world.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            unload(): LoadedCircle;

            /**
             * @returns whether the following area is loaded into the world at the moment
             * @since 3.0
             */
            isLoaded(): boolean;

        }

    }

}