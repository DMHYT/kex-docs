declare module KEX {

    /**
     * Module containing methods to access properties of any registered biome,
     * and some new useful features for modded biomes
     * @since 5.0
     */
    export module BiomesModule {

        /**
         * Specifies the custom translation key for the name of the custom biome with given string identifier.
         * This key will then be returned by [[BiomeInterface.getModName]] method.
         * Example:
         * ```ts
         * KEX.BiomesModule.setBiomeTranslationKey("aether_plains", "aether.biome.plains");
         * // translations for "aether.biome.plains" key are added in the lang files
         * 
         * const key = KEX.BiomesModule.getBiomeByName("aether_plains").getTranslationKey();
         * 
         * KEX.I18n.translate(key);
         * // => "Равнины Рая"
         * ```
         * However, you can just add translations for the key `"biome.innercore.your_biome_nameid"`
         * and it will work without using the following method.
         * @since 5.0
         */
        export function setBiomeTranslationKey(biomeNameID: any_string, key: any_string): void;

        /**
         * Specifies the name of the mod adding the custom biome with given string identifier.
         * This name will then be returned by [[BiomeInterface.getModName]] method instead of defaulting to `"InnerCore"`.
         * Example:
         * ```ts
         * KEX.BiomesModule.setModNameForBiome("aether_plains", "Aether");
         * 
         * KEX.BiomesModule.getBiomeByName("aether_plains").getModName();
         * // => "Aether"
         * ```
         * @since 5.0
         */
        export function setModNameForBiome(biomeNameID: any_string, modName: any_string): void;

        /**
         * @returns [[BiomeInterface]] instance for the biome with given numeric identifier,
         * or null if the biome with this ID cannot be found.
         * Throws [[java.lang.IllegalStateException]] if called before biomes initialized.
         * Create a handler for `"BiomesInitialized"` callback to avoid this.
         * @since 5.0
         */
        export function getBiomeById(id: number): Nullable<BiomeInterface>;

        /**
         * @returns [[BiomeInterface]] instance for the biome with given string identifier,
         * or null if the biome with this name ID cannot be found.
         * Throws [[java.lang.IllegalStateException]] if called before biomes initialized.
         * Create a handler for `"BiomesInitialized"` callback to avoid this.
         * @since 5.0
         */
        export function getBiomeByName(name: any_string): Nullable<BiomeInterface>;

        /**
         * Iterates through list of all registered biomes and calls the given function for each of them.
         * Throws [[java.lang.IllegalStateException]] if called before biomes initialized.
         * Create a handler for `"BiomesInitialized"` callback to avoid this.
         * @since 5.0
         */
        export function forEachBiome(callback: (biome: BiomeInterface) => void): void;

        /**
         * Interface used to access different properties of a specific biome.
         * Returned by [[BiomesModule.getBiomeById]] and [[BiomesModule.getBiomeByName]].
         * 
         * [[BiomeInterface]]s for all the biomes are cached in [[BiomesModule]]
         * when `"BiomesInitialized"` event is fired. Biomes are initialized
         * when entering the world, that means you cannot operate the biomes outside of a world.
         * 
         * @since 5.0
         */
        export interface BiomeInterface {

            /**
             * @returns numeric identifier of the following biome,
             * can be different for the same biome in different worlds
             * @since 5.0
             */
            getNumericID(): number;

            /**
             * @returns string identifier of the following biome
             * @since 5.0
             */
            getNameID(): jstring;

            /**
             * @returns temperature value for the following biome, in vanilla
             * varies from -0.5 (taiga) to 2.0 (desert and nether biomes)
             * @since 5.0
             */
            getTemperature(): number;

            /**
             * @returns amount of precipitation (rain or snow) in the following biome,
             * in vanilla varies from 0.0 (desert and nether biomes) to 1.0 (mushroom island)
             * @since 5.0
             */
            getDownfall(): number;

            /**
             * @returns true if biome's downfall is greater than 0.85,
             * or if the biome is force set as humid
             * @since 5.0
             */
            isHumid(): boolean;

            /**
             * @returns true if the following biome has snow instead of rain
             * @since 5.0
             */
            isSnowCovered(): boolean;

            /**
             * @returns true if the following biome is vanilla (probably also
             * returns true for addon-registered biomes)
             * @since 5.0
             */
            isVanilla(): boolean;

            /**
             * @returns true if the following biome was registered with InnerCore API
             * @since 5.0
             */
            isModded(): boolean;

            /**
             * @returns translation key for the following biome's name
             * 
             * If a custom translation key was specified for this biome
             * using [[BiomesModule.setBiomeTranslationKey]], it is returned.
             * 
             * Default key is `biome.namespace.nameid`, where `namespace` is `minecraft`
             * for vanilla biomes and `innercore` for modded biomes.
             * @since 5.0
             */
            getTranslationKey(): jstring;

            /**
             * @returns localized name of the following biome, basically:
             * ```ts
             * KEX.I18n.get(biome.getTranslationKey())
             * ```
             * @since 5.0
             */
            getName(): jstring;

            /**
             * @returns name of the mod adding the following biome, if it was specified
             * using [[BiomesModule.setModNameForBiome]], `"Minecraft"` for vanilla biomes
             * and `"InnerCore"` for modded biomes without specified mod name
             * @since 5.0
             */
            getModName(): jstring;

        }

    }

}