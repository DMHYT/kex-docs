declare module KEX {

    /**
     * Successor to the
     * <a href="https://github.com/DMHYT/LIBS/tree/master/source/TextureWorker" target="_blank">TextureWorker</a>
     * library, rewritten to Java and restructured.
     * @since 3.0
     */
    export module TextureWorker {

        /**
         * Internal method to paint a whole picture represented as a [[android.graphics.Bitmap]] instance,
         * to a specific RGB(A?) color.
         * @returns your picture painted to the given color
         * @since 3.0
         */
        export function changeBitmapColor(source: android.graphics.Bitmap, colorR: number, colorG: number, colorB: number, colorA?: number): android.graphics.Bitmap;
        
        /**
         * Internal method to paint a whole picture represented as a [[android.graphics.Bitmap]] instance,
         * to a specific RGB(A?) color represented as a color int.
         * @returns your picture painted to the given color
         * @since 3.0
         */
        export function changeBitmapColor(source: android.graphics.Bitmap, color: number): android.graphics.Bitmap;
        
        /**
         * @returns object to describe and create a texture from multiple other textures, and write it to storage
         * @since 3.0
         */
        export function createTextureWithOverlays(): OverlaidTextureBuilder;
        
        /**
         * @returns object to describe and create a texture made from another texture
         * with a specific color applied to it, and write it to the storage.
         * @since 3.0
         */
        export function createPaintedTexture(): PaintedTextureBuilder;
        
        /**
         * @returns object to describe and create a texture made from another texture
         * with grayscale filter applied to it, and write it to the storage.
         * @since 3.0
         */
        export function createGrayscaledTexture(): GrayscaledTextureBuilder;

        /**
         * Object returned by [[TextureWorker.createTextureWithOverlays]]
         * used to specify parameters for the texture made from multiple other textures,
         * create it and write to storage.
         * @since 3.0
         */
        export interface OverlaidTextureBuilder {
            
            /**
             * Specifies the parameters of the resulting [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            bitmap(width: number, height: number, config?: android.graphics.Bitmap.Config): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay by given path to the picture.
             * @param path absolute path of the directory, where the overlay's source texture is stored
             * @param name texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(path: any_string, name: any_string): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay by given path to the picture, with the RGB(A?) color applied to it.
             * @param path absolute path to the directory, where the overlay's source texture is stored
             * @param name texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(path: any_string, name: any_string, colorR: number, colorG: number, colorB: number, colorA?: number): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay represented as a [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(bitmap: android.graphics.Bitmap): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay represented as a [[android.graphics.Bitmap]] object, with the RGB(A?) color applied to it.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(bitmap: android.graphics.Bitmap, colorR: number, colorG: number, colorB: number, colorA?: number): OverlaidTextureBuilder;
            
            /**
             * Specifies the path to the resulting texture in the storage.
             * @param path absolute poth to the directory, where the resulting texture will be stored
             * @param name resulting texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            result(path: any_string, name: any_string): OverlaidTextureBuilder;
            
            /**
             * @returns [[android.graphics.Bitmap]] object of the resulting texture,
             * or null if it had been already written to storage before, or [[bitmap]] was not called
             * @since 3.0
             */
            create(): Nullable<android.graphics.Bitmap>;

        }

        /**
         * Object returned by [[TextureWorker.createPaintedTexture]]
         * used to describe and create a texture made from another texture
         * with a specific color applied to it, and write it to the storage.
         * @since 3.0
         */
        export interface PaintedTextureBuilder {
            
            /**
             * Specifies the parameters of the resulting [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            bitmap(width: number, height: number, config?: android.graphics.Bitmap.Config): PaintedTextureBuilder;
            
            /**
             * Specifies the path to the source texture in the storage.
             * @param path absolute poth to the directory, where the source texture will be stored
             * @param name source texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(path: any_string, name: any_string): PaintedTextureBuilder;
            
            /**
             * Specifies the source texture represented as a [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(bitmap: android.graphics.Bitmap): PaintedTextureBuilder;
            
            /**
             * Specifies the RGB(A?) color the texture will be painted in.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            color(r: number, g: number, b: number, a?: number): PaintedTextureBuilder;
            
            /**
             * Specifies the path to the resulting texture in the storage.
             * @param path absolute poth to the directory, where the resulting texture will be stored
             * @param name resulting texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            result(path: any_string, name: any_string): PaintedTextureBuilder;
            
            /**
             * @returns [[android.graphics.Bitmap]] object of the resulting texture,
             * or null if it had been already written to storage before, or [[bitmap]] was not called
             * @since 3.0
             */
            create(): Nullable<android.graphics.Bitmap>;

        }

        /**
         * Object returned by [[TextureWorker.createGrayscaledTexture]]
         * used to describe and create a texture made from another texture
         * with grayscale filter applied to it, and write it to the storage.
         * @since 3.0
         */
        export interface GrayscaledTextureBuilder {
            
            /**
             * Specifies the path to the source texture in the storage.
             * @param path absolute poth to the directory, where the source texture will be stored
             * @param name source texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(path: any_string, name: any_string): GrayscaledTextureBuilder;
            
            /**
             * Specifies the source texture represented as a [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(src: android.graphics.Bitmap): GrayscaledTextureBuilder;
            
            /**
             * Specifies the path to the resulting texture in the storage.
             * @param path absolute poth to the directory, where the resulting texture will be stored
             * @param name resulting texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            result(path: any_string, name: any_string): GrayscaledTextureBuilder;
            
            /**
             * @returns [[android.graphics.Bitmap]] object of the resulting texture,
             * or null if it had been already written to storage before, or [[bitmap]] was not called
             * @since 3.0
             */
            create(): Nullable<android.graphics.Bitmap>;

        }

    }

}