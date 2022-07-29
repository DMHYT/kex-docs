declare module KEX {

    /**
     * The object used to modify player's camera roll angle.
     * @since 3.0
     */
    export class CameraRollModifier extends java.lang.Object {

        /**
         * Constructs new [[CameraRollModifier]] object and adds it to the global list.
         * Remember that it must only be created on the client side, so you probably will have to use client packets.
         * @since 3.0
         */
        constructor();

        /**
         * Sets the value that will be added to the camera roll angle.
         * This value must be in radians, so if you have it in degrees,
         * you must divide it by pi and multiply it by 180.
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setModifier(modifier: number): CameraRollModifier;
        
        /**
         * Enables or disables builtin interpolation feature for the following [[CameraRollModifier]].
         * This feature will change the roll angle every frame for the changes to be smoother.
         * 
         * By default the interpolation feature is enabled for a new-created [[CameraRollModifier]].
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setInterpolationEnabled(interpolationEnabled: boolean): CameraRollModifier;
        
        /**
         * Sets smoothing power. This value is used in interpolation logics. It must be
         * a value from 0 to 1 non-inclusively. If you put 1, the roll will stop,
         * if you put 0, there will be no interpolation at all.
         * 
         * This value is 0.85 by default, and you may just don't change it, as it
         * already provides you with a smooth roll.
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setSmoothing(smoothing: number): CameraRollModifier;
        
        /**
         * Enables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        enable(): CameraRollModifier;
        
        /**
         * Disables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        disable(): CameraRollModifier;
        
        /**
         * @returns the value that will be added to the camera roll angle, in radians
         * @since 3.0
         */
        getModifier(): number;
        
        /**
         * @returns whether the interpolation feature is enabled for the following modifier object
         * @since 3.0
         */
        isInterpolationEnabled(): boolean;
        
        /**
         * @returns smoothing power value for the following modifier object
         * @since 3.0
         */
        getSmoothing(): number;
        
        /**
         * @returns whether the following modifier object is enabled at the moment
         * @since 3.0
         */
        isActive(): boolean;

    }

}