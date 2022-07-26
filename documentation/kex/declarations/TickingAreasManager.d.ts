declare module KEX {

    /**
     * Wrapper for the native `TickingAreasManager` class to add or remove
     * new ticking areas to the world the player is in at the moment.
     * @since 3.0
     */
    export interface TickingAreasManager extends INativeInterface {

        /**
         * @returns whether there is at least one active ticking area
         * in the world at the moment.
         * @since 3.0
         */
        hasActiveAreas(): boolean;

        /**
         * @returns how many ticking areas are there
         * in the given dimension at the moment.
         * @since 3.0
         */
        countAreasIn(dimension: WorldOrDimension): number;

        /**
         * @returns how many ticking areas are there
         * in all dimensions of the current Minecraft world at the moment.
         * @since 3.0
         */
        countAllAreas(): number;

        /**
         * @returns whether a ticking area exists by given name
         * in the given dimension. Dimension parameter is needed because
         * every dimension has its own ticking areas list, and it's possible
         * that two areas with the same name exist at the same time in different dimensions
         * @since 3.0
         */
        hasArea(areaName: any_string, dimension: WorldOrDimension): number;

        /**
         * Adds new rectangle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting rectangle,
         * but all the chunks that intersect with this rectangle.
         * In this overload, the name of the area is set to default (`"Area{N}"`)
         * @param dimension dimension where to create the ticking area
         * @param x1 X coordinate of the area's start position
         * @param z1 Z coordinate of the area's start position
         * @param x2 X coordinate of the area's end position
         * @param z2 Z coordinate of the area's end position
         * @since 3.0
         */
        addRectangleArea(dimension: WorldOrDimension, x1: number, z1: number, x2: number, z2: number): void;

        /**
         * Adds new rectangle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting rectangle,
         * but all the chunks that intersect with this rectangle.
         * @param dimension dimension where to create the ticking area
         * @param name area name, that must be unique for the given dimension
         * @param x1 X coordinate of the area's start position
         * @param z1 Z coordinate of the area's start position
         * @param x2 X coordinate of the area's end position
         * @param z2 Z coordinate of the area's end position
         * @since 3.0
         */
        addRectangleArea(dimension: WorldOrDimension, name: any_string, x1: number, z1: number, x2: number, z2: number): void;

        /**
         * Adds new circle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting circle,
         * but all the chunks that intersect with this circle.
         * In this overload, the name of the area is set to default (`"Area{N}"`)
         * @param dimension dimension where to create the ticking area
         * @param x X coordinate of the area's center position
         * @param z Z coordinate of the area's center position
         * @param radius area's radius in meters (blocks)
         * @since 3.0
         */
        addCircleArea(dimension: WorldOrDimension, x: number, z: number, radius: number): void;

        /**
         * Adds new circle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting circle,
         * but all the chunks that intersect with this circle.
         * In this overload, the name of the area is set to default (`"Area{N}"`)
         * @param dimension dimension where to create the ticking area
         * @param name area name, that must be unique for the given dimension
         * @param x X coordinate of the area's center position
         * @param z Z coordinate of the area's center position
         * @param radius area's radius in meters (blocks)
         * @since 3.0
         */
        addCircleArea(dimension: WorldOrDimension, name: any_string, x: number, z: number, radius: number): void;

        /**
         * Removes all the ticking areas from given dimension containing the given position.
         * @since 3.0
         */
        removeAreaByPosition(dimension: WorldOrDimension, x: number, z: number): void;

        /**
         * Removes the ticking area by given name in given dimension, if the area with this name exists.
         * @since 3.0
         */
        removeAreaByName(dimension: WorldOrDimension, name: any_string): void;

        /**
         * Method used internally when you don't specify the name for a new ticking area.
         * @returns names that look like `"Area{N}"`, where `{N}` is an incrementing integer.
         * @since 3.0
         */
        findUsableDefaultName(dimension: WorldOrDimension): jstring;

    }
    
}