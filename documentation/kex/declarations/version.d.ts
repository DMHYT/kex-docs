// /**
//  * This declaration file is made for the developers,
//  * that made their project KEX-dependent inside of `launcher.js` script.
//  * 
//  * The code there must look like this:
//  * ```js
//  * ConfigureMultiplayer({...});
//  * 
//  * ModAPI.addAPICallback("KernelExtension", function(api) {
//  *     if(typeof api.getKEXVersionCode === "function" && api.getKEXVersionCode() >= preferred_version) {
//  *         Launch({ KEX: api });
//  *     }
//  * });
//  * ```
//  * If you want KEX API object in your mod to be called something except `KEX`, when adding
//  * `kex.d.ts` file to your project, you have to replace all `declare module KEX` with `declare module YourName` there.
//  */
declare module KEX {

    /**
     * @returns current version of Kernel Extension mod installed in your modpack,
     * represented as an array of three integers. The first number means release,
     * the second means beta, and the third means hotfix.
     * @since 1.2
     */
    export function getKEXVersion(): [ number, number, number ];

    /**
     * @returns current version of Kernel Extension mod installed in your modpack,
     * represented as a three-digit integer,
     * whose digits are release, beta and hotfix number correspondingly.
     * @since 1.3
     */
    export function getKEXVersionCode(): number;

}