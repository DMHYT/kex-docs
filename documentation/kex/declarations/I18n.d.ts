declare module KEX {

    /**
     * Module to get or create vanilla localizations.
     * @since 3.0
     */
    export module I18n {

        /**
         * @returns the given key translated to the current game language,
         * or this key itself, if the translation for it was not found
         * @since 3.0
         */
        export function translate(key: any_string): jstring;

        /**
         * Adds your custom path to localization files directory,
         * to make adding new vanilla translations more convenient than
         * creating the `texts/` directory in an addon.
         * 
         * All files in the given directory must be with `.lang` extension,
         * have the in format `languagecode_REGIONCODE.lang` (like `en_US.lang`, `ru_RU.lang` etc.),
         * and be of key-value type:
         * ```yaml
         * ## Comment
         * key1=translation1
         * key2=translation2
         * ...
         * ```
         * @param dir absolute path to your custom translations directory
         * @since 3.0
         */
        export function addLangDir(dir: any_string): void;

    }

}