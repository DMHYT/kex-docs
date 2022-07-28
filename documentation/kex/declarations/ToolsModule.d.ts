declare module KEX {

    /**
     * Global module patching the whole InnerCore's [[ToolAPI]] module
     * to replace crutchy custom tools system with C++&Java logics,
     * which not only duplicates the existing system with a slight performance boost,
     * but also adds new features that have been impossible for years with [[ToolAPI]].
     * 
     * To prevent Kernel Extension API from overloading with duplicate methods,
     * [[ToolsModule]]'s internal functions are not added to this documentation. That's because
     * you can still use equivalent methods [[ToolAPI]] and [[Item]] modules.
     * 
     * This module has come through loads of bug fixes because
     * making full backward compatibility was an extremely difficult task,
     * but finally, since Kernel Extension **3.0**, the native tools API became
     * the most stable ever.
     * 
     * @since 1.0
     */
    export module ToolsModule {

        /**
         * @returns [[ItemTier]] object by given tool material name, or null
         * if tool material with given name has not been registered.
         * @since 1.0
         */
        export function getTierByName(tierName: any_string): Nullable<ItemTier>;

        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a tool item.
         * @since 2.2
         */
        export function isTool(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a sword item.
         * @since 2.2
         */
        export function isSword(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as an axe item.
         * @since 2.2
         */
        export function isAxe(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a pickaxe item.
         * @since 2.2
         */
        export function isPickaxe(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a shovel item.
         * @since 2.2
         */
        export function isShovel(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a hoe item.
         * @since 2.2
         */
        export function isHoe(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a custom tool item. A problem is that items from the mods
         * that don't use `ToolLib` **23** or higher and `BlockEngine` **9** or higher,
         * are considered as custom tools. Maybe in future updates this defect will be resolved.
         * @since 2.2
         */
        export function isCustomTool(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a shears item.
         * @since 2.2
         */
        export function isShears(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a flint and steel item.
         * @since 2.2
         */
        export function isFlintAndSteel(id: number): boolean;

        /**
         * Wrapper for the native `Item::Tier` class
         * used to register custom materials for tools, same as [[ToolAPI.ToolMaterial]],
         * but the created object is linked to the equivalent native object.
         * @since 1.0
         */
        export class ItemTier extends java.lang.Object implements INativeInterface {

            /**
             * @returns pointer to the native object wrapped by the following [[ItemTier]] object,
             * represented by a signed 64-bit integer
             */
            getPointer(): number;

            /**
             * Constructs new [[ItemTier]] object including equivalent native object,
             * and adds it to the lookup map used in [[ToolsModule.getTierByName]].
             * @param name your tool material's name, must be unique or you'll get a [[java.lang.IllegalArgumentException]]
             * telling you the tool material with your name has already been registered
             * @param level tool digging level, (1 - wooden, 2 - stone, 3 - iron, ...)
             * @param uses tool durability
             * @param speed how many times faster the tool with this material will mine blocks of its types
             * @param attackDamageBonus how many attack damage will be added to the tool's base damage from its material
             * @param enchantmentValue the more it is, the better enchantments you'll get with less experience levels on the enchanting table
             * @since 1.0 
             */
            constructor(name: any_string, level: number, uses: number, speed: number, attackDamageBonus: number, enchantmentValue: number);
            
            /**
             * @returns digging level of the tools with the following [[ItemTier]]
             * @since 1.0 
             */
            getLevel(): number;
            
            /**
             * @returns durability of the tools with the following [[ItemTier]]
             * @since 1.0 
             */
            getUses(): number;
            
            /**
             * @returns how many times faster the tools with the following [[ItemTier]] will mine blocks of their types
             * @since 1.0 
             */
            getSpeed(): number;
            
            /**
             * @returns how many attack damage will be added to the base damage of the tools with the following [[ItemTier]]
             * @since 1.0 
             */
            getAttackDamageBonus(): number;
            
            /**
             * @returns the value used when enchanting a tool with the following [[ItemTier]].
             * The more it is, the better enchantments you will get with less experience levels.
             * @since 1.0 
             */
            getEnchantmentValue(): number;

        }

    }

}