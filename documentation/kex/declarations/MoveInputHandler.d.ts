declare module KEX {

    /**
     * Object containing read-only data about a [[LocalPlayer]]'s movement.
     * 
     * Returned by [[LocalPlayer.getMoveInputHandler]].
     * 
     * Most commonly used to apply different kinds of velocity boosts to the player.
     * @since 2.0
     */
    export interface MoveInputHandler extends INativeInterface {

        /**
         * @since 2.0
         */
        clearInputState(): void;
        
        /**
         * @since 2.0
         */
        isChangeHeight(): boolean;
        
        /**
         * @since 2.0
         */
        isPlayerMoving(): boolean;
        
        /**
         * @since 2.0
         */
        isJumpDown(): boolean;
        
        /**
         * @since 2.0
         */
        wantsMoveForward(): boolean;
        
        /**
         * @since 2.0
         */
        setSneakPersistence(persistence: boolean): void;
        
        /**
         * @since 2.0
         */
        setGazeDirection(x: number, y: number, z: number): void;
        
        /**
         * @since 2.0
         */
        isMovingForward(): boolean;
        
        /**
         * @since 2.0
         */
        isMovingBackward(): boolean;
        
        /**
         * @since 2.0
         */
        isMovingLeft(): boolean;
        
        /**
         * @since 2.0
         */
        isMovingRight(): boolean;
        
        /**
         * @since 2.0
         */
        getMovingForward(): number;
        
        /**
         * @since 2.0
         */
        getMovingBackward(): number;
        
        /**
         * @since 2.0
         */
        getMovingLeft(): number;
        
        /**
         * @since 2.0
         */
        getMovingRight(): number;

    }

}