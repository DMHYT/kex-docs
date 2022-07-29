declare module KEX {

    /**
     * Successor to the
     * <a href="https://github.com/DMHYT/LIBS/tree/master/source/ItemAnimHelper" target="_blank">ItemAnimHelper</a>
     * library, rewritten to Java and restructured.
     * @since 3.0
     */
    export module ItemAnimHelper {

        /**
         * Creates simple textures from given animated item texture from PC ('tall' texture)
         * @param sourcePath absolute path to the 'tall' texture
         * @param resultPath absolute path to the result textures (they will be with different meta and same name)
         * @since 3.0
         */
        export function convertTexture(sourcePath: any_string, resultPath: any_string): void;
        
        /**
         * The texture of the item with given ID will animate between given intervals in ticks
         * @param id numeric ID of the item to apply the animated icon to
         * @param textureName name of your item's texture without `_meta.png`
         * @param ticks how many ticks must pass between changing item texture animation frame
         * @param frames how many frames does the item texture animation have
         * @since 3.0
         */
        export function makeCommonAnim(id: number, textureName: any_string, ticks: number, frames: number): void;
        
        /**
         * The texture of the item with given ID will change its animation frames according to frame numbers array which you will specify
         * @param id numeric ID of the item to apply the animated icon to
         * @param textureName name of your item's texture without `_meta.png`
         * @param interval interval between which the texture will change its frame
         * @param frames frames that texture will be being changed to, every update interval
         * @since 3.0
         */
        export function makeAdvancedAnim(id: number, textureName: any_string, interval: number, frames: number[]): void;
        
    }

}