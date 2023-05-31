declare module KEX {

    /**
     * A module that adds a wide set of features
     * with loot tables, for example: modifying vanilla loot tables
     * (so that loot in dungeon chests and drops from killed mobs changes),
     * filling containers like chests and barrels with a loot table,
     * getting list of randomly chosen items from a loot table etc.
     * @since 1.0
     */
    export module LootModule {

        /**
         * Adds a new modifier to the loot table with given name.
         * @param tableName path to the loot table, relative to `<behavior_pack>/loot_tables/` and without `.json`
         * @returns [[LootModifier]] object containing loads of functions
         * to modify the loot table how you wish
         * @since 1.0
         * @since 4.0 you can use full loot table dir in `tableName` parameter, same as in the rest of the module's methods
         */
        export function createLootTableModifier(tableName: any_string): LootModifier;

        /**
         * @returns empty [[LootConditions]] to use in loot entry function description
         * @since 1.0
         */
        export function createConditionsList(): LootConditions;

        /**
         * Adds new item that can be dropped when bartering with piglins.
         * Actually it's a wrapper over [[createLootTableModifier]],
         * but it's made differently to prevent bugs in bartering logics,
         * because `piglin_barter` loot table has unusual structure:
         * only one pool and one list of items, and as [[createLootTableModifier]]
         * creates new pools, using it here may cause incorrect work.
         * Here is an example:
         * ```js
         * KEX.LootModule.addPiglinBarteringItem()
         *  .describeItem(VanillaItemID.netherite_ingot)
         *  .setCount(32, 64)
         *  .setWeight(1000);
         * ```
         * It's important to notice, that `weight` is mandatory here, otherwise the item
         * will be ignored during the modification. In vanilla piglin bartering list,
         * values from 1 (netherite hoe) to 40 (gravel, leather, nether bricks and other cheap stuff) are used.
         * Based on this, you can understand which `weight` values you should use.
         * @returns [[LootEntry]] object to describe the item
         * @since 1.2
         */
        export function addPiglinBarteringItem(): LootEntry;

        /**
         * Adds a function that will be called right after the list of randomly chosen items from a loot table is created.
         * The function has access to this list and to the loot call circumstances object.
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @param cb function to be called after the items list is chosen by vanilla
         * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
         * @since 1.2
         * @since 4.0 you can use full loot table dir in `tableName` parameter, same as in the rest of the module's methods
         */
        export function addOnDropCallbackFor(tableName: any_string, cb: OnDropCallback, priority?: number): void;

        /**
         * Fills vanilla container on given coords, with items randomly chosen from given loot table.
         * Currently only chest, hopper, dispenser, dropper and barrel are supported, it'll be improved in future.
         * @param region [[BlockSource]] object of the dimension where the block is located
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @param actor entity that will be used as `ThisEntity` in [[LootTableContext]] object created internally.
         * @since 3.0
         */
        export function fillContainer(region: BlockSource, x: number, y: number, z: number, tableName: any_string, actor: Nullable<Actor>): void;

        /**
         * Creates the list of randomly chosen items from given loot table using given circumstances object, and returns it.
         * [[OnDropCallback]]s are also triggered when you use this method.
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @param context [[LootTableContext]] object to add circumstances to the loot event.
         * You have to create a [[LootTableContext.Builder]] and then call its method `create`, that returns the [[LootTableContext]].
         * @returns the resulting [[java.util.List]] of items
         * @since 3.0
         */
        export function getRandomItems(tableName: any_string, context: LootTableContext): java.util.List<ItemInstance>;

        /**
         * Forces the given loot table to be loaded as soon as the player enters the world.
         * 
         * As an element of optimization, the loot tables in Minecraft are not loaded all together at the same time.
         * A single loot table is deserialized from its JSON file when a mob with this loot table is killed or
         * a chest with it is opened for the first time in the current session.
         * 
         * This creates inconveniences for the developers that need the data from a loot table immediately
         * (for example, for a RecipeViewer addon using [[LootModifier]]'s post-modify callbacks).
         * 
         * This method is a solution. It forces loot table's deserialization in `LevelDisplayed` callback.
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @since 3.0
         */
        export function forceLoad(tableName: any_string): void;

        /**
         * Adds new loot pool condition that you can add to `"conditions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * @param conditionName name of the condition that will have to be put in `"condition"` param of condition's JSON object.
         * @param callback function to be called on the loot pool that owns this condition and must return true or false,
         * depending on whether the condition was met or not
         * @since 4.0
         */
        export function registerCustomLootCondition(conditionName: any_string, callback: CustomLootConditionCallback): void;

        /**
         * Adds new loot pool condition that you can add to `"conditions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * 
         * Same as [[registerCustomLootCondition]], but the function's first parameter is a JS object
         * of condition's JSON description instead of [[org.json.JSONObject]].
         * @param conditionName name of the condition that will have to be put in `"condition"` param of condition's JSON object.
         * @param callback function to be called on the loot pool that owns this condition and must return true or false,
         * depending on whether the condition was met or not
         * @since 4.0
         */
        export function registerCustomLootConditionJS(conditionName: any_string, callback: CustomLootConditionCallbackJS): void;

        /**
         * Adds new loot entry function that you can add to `"functions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * @param functionName name of the function that will have to be put in `"function"` param of function's JSON object.
         * @param callback function to be called on the item that owns this function, it provides you with all needed parameters.
         * @since 3.0
         */
        export function registerCustomLootFunction(functionName: any_string, callback: CustomLootFunctionCallback): void;

        /**
         * Adds new loot entry function that you can add to `"functions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * 
         * Same as [[registerCustomLootFunction]], but the function's first parameter is a JS object
         * of function's JSON description instead of [[org.json.JSONObject]].
         * @param functionName name of the function that will have to be put in `"function"` param of function's JSON object.
         * @param callback function to be called on the item that owns this function, it provides you with all needed parameters.
         * @since 3.0
         */
        export function registerCustomLootFunctionJS(functionName: any_string, callback: CustomLootFunctionCallbackJS): void;

        /**
         * Runs the loot pool condition for your internal purposes
         * @param json JSON description of the condition represented as an [[org.json.JSONObject]].
         * You must have the `"condition"` field in it with the string identifier of the condition,
         * in order for the method to determine and validate it.
         * @param context [[LootTableContext]] object with the circumstances of the loot event. You can use
         * a [[LootTableContext]] object provided to you by one of [[LootModule]] callbacks,
         * or create and customize it yourself using [[LootTableContext.Builder]].
         * @returns true or false depending on whether the condition was met or not.
         * Returns false if the condition's JSON description is invalid.
         * @since 4.0
         */
        export function runLootCondition(json: org.json.JSONObject, context: LootTableContext): boolean;

        /**
         * Runs the loot pool condition for your internal purposes
         * @param json JSON description of the condition represented as a JS object.
         * You must have the `"condition"` field in it with the string identifier of the condition,
         * in order for the method to determine and validate it.
         * @param context [[LootTableContext]] object with the circumstances of the loot event. You can use
         * a [[LootTableContext]] object provided to you by one of [[LootModule]] callbacks,
         * or create and customize it yourself using [[LootTableContext.Builder]].
         * @returns true or false depending on whether the condition was met or not.
         * Returns false if the condition's JSON description is invalid.
         * @since 4.0
         */
        export function runLootCondition(json: {
            condition: any_string,
            [key: string]: any
        }, context: LootTableContext): boolean;

        /**
         * Function used in [[LootModule.registerCustomLootCondition]].
         * @param json [[org.json.JSONObject]] representation of loot pool condition's JSON description
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 4.0
         */
        export interface CustomLootConditionCallback {
            (json: org.json.JSONObject, context: LootTableContext): boolean;
        }

        /**
         * Function used in [[LootModule.registerCustomLootConditionJS]].
         * @param json JS object representation of loot pool condition's JSON description.
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 4.0
         */
        export interface CustomLootConditionCallbackJS {
            (json: {
                condition: jstring,
                [key: string]: any
            }, context: LootTableContext): boolean;
        }

        /**
         * Function used in [[LootModule.registerCustomLootFunction]].
         * @param json [[org.json.JSONObject]] representation of loot entry function's JSON description.
         * @param stack item to modify by your function
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 3.0
         */
        export interface CustomLootFunctionCallback {
            (json: org.json.JSONObject, stack: ItemInstance, context: LootTableContext): void;
        }

        /**
         * Function used in [[LootModule.registerCustomLootFunctionJS]].
         * @param json JS object representation of loot entry function's JSON description.
         * @param stack item to modify by your function
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 3.0
         */
        export interface CustomLootFunctionCallbackJS {
            (json: {
                function: jstring,
                [key: string]: any
            }, stack: ItemInstance, context: LootTableContext): void;
        }
        
        /**
         * Function used in [[LootModule.addOnDropCallbackFor]].
         * @param drops list of items randomly chosen by vanilla, which you can modify how you want.
         * Remember to call [[RandomItemsList.markChanged]] method, if you use some its methods
         * except `addItem` and `remove(int index)`.
         * @param context [[LootTableContext]] object to access the information about entity death or chest opening.
         * @since 1.2
         */
        export interface OnDropCallback {
            (drops: RandomItemsList, context: LootTableContext): void;
        }

        /**
         * Object extending [[java.util.ArrayList]] and representing list of randomly chosen items
         * from a loot table, which you can modify in [[OnDropCallback]], also having access
         * to [[KEX.LootTableContext]] object with all information about entity death or chest opening.
         * @since 1.2
         */
        export interface RandomItemsList extends java.util.ArrayList<ItemInstance>, INativeInterface {
            
            /**
             * This method needs to be called when you call something except [[addItem]] and [[remove]],
             * Otherwise your modifications will not affect the loot table's result.
             * This class will be improved in future so you won't have to use it.
             * @since 1.2
             */
            markChanged(): void;
            
            /**
             * Adds new item to the list by given numeric ID, count, data and additionally extra.
             * It's recommended to use exactly this method instead of [[add]] method from [[java.util.ArrayList]]
             * when you're in JS, because the ArrayList actually consists of ItemStack Java objects,
             * not the [[ItemInstance]]s as JS-objects.
             * @since 1.2
             */
            addItem(id: number, count: number, data: number, extra?: Nullable<ItemExtraData>): void;

        }

        /**
         * Object returned by [[LootModule.createLootTableModifier]] method,
         * used to modify a specific loot table in different ways, like adding
         * your custom JSON, adding exactly items or registering a callback
         * called after the modifications listed above, to modify the resulting
         * JSON object one more time, having access to all of its content.
         * 
         * The most weighty feature of [[LootModifier]] is a class system,
         * that repeats Minecraft loot tables JSON format (a `loot table` consists of
         * `pools`, each `pool` has its `conditions`, `tiers` and `entries`, etc.)
         * 
         * Here is an example of using this system - repeating vanilla zombie loot table with it:
         * ```js
         * KEX.LootModule.createLootTableModifier("entities/zombie")
         *  .createNewPool()
         *      .addEntry()
         *          .describeItem("minecraft", "rotten_flesh")
         *          .setWeight(1)
         *          .setCount(0, 2)
         *          .beginFunctions()
         *              .addLootingEnchantFunction(0, 1)
         *          .endFunctions()
         *      .endEntry()
         *  .endPool()
         *  .createNewPool()
         *      .addEntry()
         *          .describeItem("minecraft", "iron_ingot")
         *          .setWeight(1)
         *          .setCount(1)
         *      .endEntry()
         *      .addEntry()
         *          .describeItem("minecraft", "carrot")
         *          .setWeight(1)
         *          .setCount(1)
         *      .endEntry()
         *      .beginConditions()
         *          .addKilledByPlayerCondition()
         *          .addRandomChanceWithLootingCondition(0.025, 0.01)
         *      .endConditions()
         *  .endPool();
         * ```
         * @since 1.0
         */
        export interface LootModifier {

            /**
             * After calling this method, all the further modifications applied to the following [[LootModifier]]
             * (basically all of its methods) will be ignored. Worth noticing that the [[LootModifier]] on which
             * the [[lock]] method was called, **cannot be unlocked**.
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            lock(): LootModifier;

            /**
             * @returns whether the following [[LootModifier]] had the [[lock]] method called on it at least once
             * @since 4.0
             */
            isLocked(): boolean;

            /**
             * Adds new loot pool to the loot table with 1 roll
             * 
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * @returns [[LootPool]] object to describe the created pool
             * @since 1.0
             */
            createNewPool(): LootPool;

            /**
             * Adds new loot pool to the loot table with given number of rolls
             * 
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * @returns [[LootPool]] object to describe the created pool
             * @since 1.0
             */
            createNewPool(rolls: number): LootPool;

            /**
             * Adds new loot pool to the loot table with the number of rolls
             * that is chosen randomly every time between given minimum and maximum value.
             * 
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * @returns [[LootPool]] object to describe the created pool
             * @since 1.0
             */
            createNewPool(minRolls: number, maxRolls: number): LootPool;

            /**
             * You can store loot table modification data as a JSON file of Minecraft loot table format,
             * somewhere in your mod's directory. Here you specify the absolute path to this JSON file
             * and all its contents will be added to the following [[LootModifier]].
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            modifyWithAnotherTable(path: any_string): LootModifier;

            /**
             * Here you can specify loot table modification data represented as a JS object of Minecraft loot table format,
             * and all its contents will be added to the following [[LootModifier]].
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            modifyWithJSON(json: LootTableTypes.JsonFormat): LootModifier;

            /**
             * Adds new item by given numeric ID to the loot table.
             * @param count item count, can be fixed integer or object with minimum and maximum possible values
             * @param chance chance for this item to be dropped, value between 0.0 (0%) and 1.0 (100%)
             * @param rolls number of rolls, defaults to 1
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * 
             * This method is actually a shortcut, which looks like this:
             * ```java
             * LootPool pool = this.createNewPool(rolls)
             *  .addEntry()
             *      .describeItem(id)
             *      .setCount(count)
             *      .setData(data)
             *  .endEntry();
             * if(chance < 1.0f)
             * {
             *  pool.beginConditions()
             *      .addRandomChanceCondition(chance)
             *  .endConditions();
             * }
             * return this;
             * ```
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addItem(id: number, count: number | MinMax, data: number, chance: number, rolls?: number | MinMax): LootModifier;

            /**
             * Adds new item by given string namespace and identifier to the loot table.
             * @param count item count, can be fixed integer or object with minimum and maximum possible values
             * @param chance chance for this item to be dropped, value between 0.0 (0%) and 1.0 (100%)
             * @param rolls number of rolls, defaults to 1
             * This method is actually a shortcut, which looks like this:
             * ```java
             * LootPool pool = this.createNewPool(rolls)
             *  .addEntry()
             *      .describeItem(namespace, identifier)
             *      .setCount(count)
             *      .setData(data)
             *  .endEntry();
             * if(chance < 1.0f)
             * {
             *  pool.beginConditions()
             *      .addRandomChanceCondition(chance)
             *  .endConditions();
             * }
             * return this;
             * ```
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addAddonItem(namespace: any_string, identifier: any_string, count: number | MinMax, data: number, chance: number, rolls?: number | MinMax): LootModifier;

            /**
             * Adds a callback called right after common modifications
             * which you can use to modify the resulting loot table JSON object
             * one more time, having access to all of its content.
             * @param cb function that provides you with loot table JSON object represented as a JS object,
             * which you can modify how you wish
             * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSModifyCallback(cb: JSModifyCallback, priority?: number): LootModifier;

            /**
             * Adds a callback called right after common modifications
             * which you can use to modify the resulting loot table JSON object
             * one more time, having access to all of its content.
             * @param cb function that provides you with loot table JSON object represented as an [[org.json.JSONObject]] instance,
             * which you can modify how you wish
             * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSONModifyCallback(cb: JSONModifyCallback, priority?: number): LootModifier;

            /**
             * Adds a callback called after common modifications and modify callbacks
             * which you can use to read the resulting loot table JSON object
             * after all modifications, in order to, for example, save some data from it for your personal needs
             * @param cb function that provides you with loot table JSON object represented as a JS object.
             * Modifying it doesn't make any effect, because every callback is called using a copy of the loot table JSON object.
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSPostModifyCallback(cb: JSModifyCallback): LootModifier;
            
            /**
             * Adds a callback called after common modifications and modify callbacks
             * which you can use to read the resulting loot table JSON object
             * after all modifications, in order to, for example, save some data from it for your personal needs
             * @param cb function that provides you with loot table JSON object represented as an [[org.json.JSONObject]] instance.
             * Modifying it doesn't make any effect, because every callback is called using a copy of the loot table JSON object.
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSONPostModifyCallback(cb: JSONModifyCallback): LootModifier;

        }

        /**
         * Function used in [[LootModifier.addJSModifyCallback]] and [[LootModifier.addJSPostModifyCallback]].
         * @param obj loot table JSON object represented as a JS object,
         * remember that modifying it makes sense only in [[LootModifier.addJSModifyCallback]].
         * @since 1.2
         */
        export interface JSModifyCallback {
            (obj: LootTableTypes.JsonFormat): void;
        }

        /**
         * Function used in [[LootModifier.addJSONModifyCallback]] and [[LootModifier.addJSONPostModifyCallback]].
         * @param obj loot table JSON object represented as an [[org.json.JSONObject]] instance,
         * remember that modifying it makes sense only in [[LootModifier.addJSModifyCallback]].
         * @since 1.2
         */
        export interface JSONModifyCallback {
            (obj: org.json.JSONObject): void;
        }

        /**
         * Object representing one of the pools of a loot table.
         * Returned by [[LootModifier.createNewPool]].
         * @since 1.0
         */
        export interface LootPool {

            /**
             * @returns [[LootConditions]] object to add new conditions to the following [[LootPool]].
             * See [[LootConditions]] description for more details about these conditions.
             * @since 1.0
             */
            beginConditions(): LootConditions;

            /**
             * @returns [[LootTiers]] object to add some additional properties to the following [[LootPool]].
             * @since 1.0
             */
            beginTiers(): LootTiers;

            /**
             * Creates new entry (item) in the following [[LootPool]].
             * @returns [[LootEntry]] object to describe it
             * @since 1.0
             */
            addEntry(): LootEntry;

            /**
             * @returns [[LootModifier]] that owns the following [[LootPool]].
             * Use this in sequential call when you finish describing the loot pool.
             * @since 1.0
             */
            endPool(): LootModifier;

        }

        /**
         * Object representing the list of conditions of a loot pool.
         * They are used when generating a list of randomly chosen items:
         * the items will be chosen only if all the conditions pass.
         * Returned by [[LootPool.beginConditions]].
         * - If you need to put [[LootConditions]] in loot entry function object,
         * use [[KEX.LootModule.createConditionsList]], which creates
         * an empty [[LootConditions]] object and returns it.
         * @since 1.0
         */
        export interface LootConditions {

            /**
             * Adds a condition checking if the killed entity was on fire (or not if `onFire` parameter is set to false).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEntityOnFireCondition(onFire: boolean): LootConditions;

            /**
             * Adds a condition checking if the killed entity was on ground (or not if `onGround` parameter is set to false).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEntityOnGroundCondition(onGround: boolean): LootConditions;

            /**
             * Adds a condition checking the killed entity being on fire and on ground at the moment of its death.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEntityPropertiesCondition(onFire: boolean, onGround: boolean): LootConditions;

            /**
             * Adds a condition checking the killed entity for a specific mark variant.
             * 
             * Mark variant is a value used to be bound to some entity's visual properties or addon-defined component groups.
             * In vanilla it's used, for example, in villagers' clothes depending on their biome,
             * type of flower that was given to mooshroom, tropical fish skin pattern etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addMarkVariantCondition(markVariant: number): LootConditions;

            /**
             * Adds a condition checking if the entity was killed by a player.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addKilledByPlayerCondition(): LootConditions;

            /**
             * Adds a condition checking if the entity was killed by a player or one of their pets.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addKilledByPlayerOrPetsCondition(): LootConditions;

            /**
             * Adds a condition that passes only with the given chance.
             * The chance can be specified with one fixed or two minimum and maximum values.
             * Values must be between 0.0 (0%) and 1.0 (100%).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomChanceCondition(chance: number, maxChance?: number): LootConditions;

            /**
             * Adds a condition that passes only with the given chance plus
             * additional chance got from looting enchantment.
             * Values must be between 0.0 (0%) and 1.0 (100%).
             * @param chance base chance of condition passing
             * @param lootingMultiplier value that will be added to the chance for each looting level
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomChanceWithLootingCondition(chance: number, lootingMultiplier: number): LootConditions;

            /**
             * Adds a condition that passes only with one of given chances
             * depending on the game difficulty.
             * Values must be between 0.0 (0%) and 1.0 (100%).
             * @param defaultChance mandatory value that is used when some of the chance values for specific difficulty is not specified
             * @param easy chance of condition passing on easy game difficulty
             * @param normal chance of condition passing on normal game difficulty
             * @param hard chance of condition passing on hard game difficulty
             * @param peaceful chance of condition passing on peaceful game difficulty
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomDifficultyChanceCondition(defaultChance: number, easy?: number, normal?: number, hard?: number, peaceful?: number): LootConditions;

            /**
             * Adds a condition that passes only with the given chance
             * multiplied by level's current special modifier,
             * which formula is not known at the moment.
             * The chance's value must be between 0.0 (0%) and 1.0 (100%).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomRegionalDifficultyChanceCondition(maxChance: number): LootConditions;

            /**
             * Adds condition registered using [[LootModule.registerCustomLootCondition]] or [[LootModule.registerCustomLootConditionJS]].
             * 
             * You don't need to specify condition's name in `"condition"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered conditions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootConditions]].
             * @param json condition's JSON description as an [[org.json.JSONObject]]
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addCustomCondition(conditionName: any_string, json: org.json.JSONObject): LootConditions;

            /**
             * Adds condition registered using [[LootModule.registerCustomLootCondition]] or [[LootModule.registerCustomLootConditionJS]].
             * 
             * You don't need to specify condition's name in `"condition"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered conditions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootConditions]].
             * @param json condition's JSON description as a JS object
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addCustomCondition(conditionName: any_string, json: {
                condition: any_string,
                [key: string]: any
            }): LootConditions;

            /**
             * Adds `"and"` condition, the condition that is met only if **all** of its sub-conditions are met
             * @param clauses list of sub-conditions, create it using [[LootModule.createConditionsList]]
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addANDCondition(clauses: LootConditions): LootConditions;

            /**
             * Adds `"or"` condition, the condition that is met if **any** of its sub-conditions is met
             * @param clauses list of sub-conditions, create it using [[LootModule.createConditionsList]]
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addORCondition(clauses: LootConditions): LootConditions;

            /**
             * Adds `"not"` condition, the condition that is met only if its sub-condition is **not** met
             * @param clause the sub-condition. Use [[LootModule.createConditionsList]] to create this object.
             * If you specify more than one condition to this list, the `"not(conditions[0])"` structure
             * will be automatically replaced with `"not(and(...conditions))"`
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addNOTCondition(clause: LootConditions): LootConditions;

            /**
             * @returns [[LootPool]] that owns the following [[LootConditions]].
             * Use this in sequential call when you finish describing loot pool tiers.
             * @since 1.0
             */
            endConditions(): LootPool;

        }

        /**
         * Object representing additional properties of one of the pools of a loot table.
         * Returned by [[LootPool.beginTiers]].
         * @since 1.0
         */
        export interface LootTiers {

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setBonusChance(bonusChance: number): LootTiers;

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setBonusRolls(bonusRolls: number): LootTiers;

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setInitialRange(initialRange: number): LootTiers;

            /**
             * @returns [[LootPool]] that owns the following [[LootTiers]].
             * Use this in sequential call when you finish describing loot pool tiers.
             * @since 1.0
             */
            endTiers(): LootPool;

        }

        /**
         * Object representing one of the entries (items) of the loot table pool.
         * Returned by [[LootPool.addEntry]].
         * @since 1.0
         */
        export interface LootEntry {

            /**
             * Specifies the item by given numeric ID.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            describeItem(numericId: number): LootEntry;

            /**
             * Specifies the item by given namespace and identifier.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            describeItem(namespace: any_string, identifier: any_string): LootEntry;

            /**
             * Specifies the item's count
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setCount(count: number): LootEntry;

            /**
             * Specifies the item's count, in this case it'll be
             * chosen randomly every time between given minimum and maximum value.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setCount(min: number, max: number): LootEntry;

            /**
             * Specifies the item's data.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setData(data: number): LootEntry;

            /**
             * Specifies the item's data, in this case it'll be
             * chosen randomly every time between given minimum and maximum value.
             * It can be used, for example, to put some tool or armor element with random durability.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setData(min: number, max: number): LootEntry;

            /**
             * Specifies the item's damage.
             * Technically the same as [[LootEntry.setData]],
             * but uses `"set_damage"` entry function instead of `"set_data"`.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setDamage(damage: number): LootEntry;

            /**
             * Specifies the item's damage, in this case it'll be
             * chosen randomly every time between given minimum and maximum value.
             * It can be used, for example, to put some tool or armor element with random durability.
             * Technically the same as [[LootEntry.setData]],
             * but uses `"set_damage"` entry function instead of `"set_data"`.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setDamage(min: number, max: number): LootEntry;

            /**
             * Specifies custom name that will be set to item
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setCustomName(name: any_string): LootEntry;

            /**
             * Specifies the weight value, that will be used in weighted random logics
             * when choosing the list of randomly chosen items from a loot table.
             * If there is more than one entry in a pool, the more the item's weight will be,
             * the more likely for this item to be chosen. If you have only one entry,
             * you can skip specifying this parameter. Actually you can skip it anyway,
             * as it defaults to 1.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setWeight(weight: number): LootEntry;

            /**
             * Sets the item's quality.
             * 
             * It's not known reliably where this value is used,
             * but talking about the vanilla loot tables, it's used in fishing tables.
             * 
             * Values are -2 for junk, -1 for fish and 2 for treasure.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setQuality(quality: number): LootEntry;

            /**
             * @returns [[LootEntryFunctions]] object to add new functions to the following [[LootEntry]].
             * See [[LootEntryFunctions]] description for more details about these functions.
             * @since 1.0
             */
            beginFunctions(): LootEntryFunctions;

            /**
             * @returns [[LootPool]] that owns the following [[LootEntry]].
             * Use this in sequential call when you finish describing a loot pool entry.
             * @since 1.0
             */
            endEntry(): LootPool;

        }

        /**
         * Object representing the list of function that are applied to a specific item generated in loot table.
         * Returned by [[LootEntry.beginFunctions]].
         * 
         * These functions are described like JSON objects, there are 22 of them pre-defined in vanilla, however,
         * since Kernel Extension **3.0**, you can create your functions with a behavior without any limits, defined in JS or Java code,
         * using [[KEX.LootModule.registerCustomLootFunction]] or [[KEX.LootModule.registerCustomLootFunctionJS]].
         * @since 1.0
         */
        export interface LootEntryFunctions {

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantBookForTradingFunction(baseCost: number, baseRandomCost: number, perLevelCost: number, perLevelRandomCost: number): LootEntryFunctions;
            
            /**
             * Adds function that enchants the item with random enchantments
             * that are legal for the current item,
             * with given chance (between 0.0 and 1.0).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantRandomGearFunction(chance?: number): LootEntryFunctions;
            
            /**
             * Adds function that applies random enchantments to the item.
             * @param treasure if true, the item is enchanted only with enchantments
             * that are considered as treasures, like frost walking, mending, soul speed etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantRandomlyFunction(treasure?: boolean): LootEntryFunctions;
            
            /**
             * Adds function that enchants the item using given amount of experience levels,
             * similar to how it works in enchantment table.
             * @param treasure if true, the item is enchanted only with enchantments
             * that are considered as treasures, like frost walking, mending, soul speed etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantWithLevelsFunction(levels: number, treasure?: boolean): LootEntryFunctions;
            
            /**
             * Adds function that enchants the item using amount of experience levels,
             * chosen randomly between given minimum and maximum values,
             * similar to how it works in enchantment table.
             * @param treasure if true, the item is enchanted only with enchantments
             * that are considered as treasures, like frost walking, mending, soul speed etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantWithLevelsFunction(minLevels: number, maxLevels: number, treasure?: boolean): LootEntryFunctions;
            
            /**
             * Adds function that turns empty map item into exploration map pointing
             * to the nearest generated structure of given type.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addExplorationMapFunction(destination: FeatureTypes): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addFillContainerFunction(lootTable: any_string): LootEntryFunctions;
            
            /**
             * Adds function that turns the item into its furnace-smelted version, if it's defined.
             * @param conditions list of conditions that must pass to smelt the item.
             * Use [[LootModule.createConditionsList]] here.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addFurnaceSmeltFunction(conditions?: LootConditions): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addLootingEnchantFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addLootingEnchantFunction(minCount: number, maxCount: number): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomAuxValueFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomAuxValueFunction(minValue: number, maxValue: number): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomDyeFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addActorIdFunction(actorId: any_string): LootEntryFunctions;
            
            /**
             * Adds function that applies given contents to the written book item.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addBookContentsFunction(author: any_string, title: any_string, pages: any_string[]): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addDataFromColorIndexFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addLoreFunction(lore: any_string[]): LootEntryFunctions;

            /**
             * Adds function that applies the specified enchantments to the item.
             * @param enchants specific enchantments to apply to the item,
             * represented as a JS object with keys - enchantment string names and values - their levels.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addSpecificEnchantsFunction(enchants: { [key in EnchantTypes]: number }): LootEntryFunctions;
            
            /**
             * Adds function that applies the specified enchantments to the item.
             * @param enchants specific enchantments to apply to the item,
             * represented as a [[java.util.Map]] with keys - enchantment string names and values - their levels.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addSpecificEnchantsFunction(enchants: java.util.Map<jstring, number>): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addTraderMaterialTypeFunction(): LootEntryFunctions;
            
            /**
             * Adds function registered using [[LootModule.registerCustomLootFunction]] or [[LootModule.registerCustomLootFunctionJS]].
             * 
             * You don't need to specify function's name in `"function"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered functions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootEntryFunctions]].
             * @param json function's JSON description as an [[org.json.JSONObject]]
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addCustomFunction(functionName: any_string, json: org.json.JSONObject): LootEntryFunctions;

            /**
             * Adds function registered using [[LootModule.registerCustomLootFunction]] or [[LootModule.registerCustomLootFunctionJS]].
             * 
             * You don't need to specify function's name in `"function"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered functions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootEntryFunctions]].
             * @param json function's JSON description as a JS object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addCustomFunction(functionName: any_string, json: { [key: string]: any }): LootEntryFunctions;
            
            /**
             * @returns [[LootEntry]] that owns the following [[LootEntryFunctions]].
             * Use this in sequential call when you finish describing loot entry functions.
             * @since 1.0
             */
            endFunctions(): LootEntry;

        }

        /**
         * Internal namespace containing everything needed
         * for Minecraft loot tables JSON schema. The interface
         * for it is [[LootTableTypes.JsonFormat]].
         * @since 1.0
         */
        export namespace LootTableTypes {
            export interface JsonFormat {
                pools?: Pool[];
            }
            export interface Pool {
                type?: "item",
                rolls?: number | MinMax,
                tiers?: Conditions[],
                entries?: Entries[];
            }
            export interface Tiers {
                bonus_chance?: number,
                bonus_rolls?: number,
                initial_range?: number;
            }
            export type Conditions =
                ConditionEntityProperties |
                ConditionHasMarkVariant |
                ConditionRandomChance |
                ConditionRandomChanceWithLooting |
                ConditionRandomDifficultyChance |
                ConditionNoParams |
                ConditionAndOr |
                ConditionNot;
            export interface Condition<NAME> {
                condition: NAME;
            }
            export interface ConditionEntityProperties extends Condition<"entity_properties"> {
                entity?: "this",
                properties?: {
                    on_fire?: boolean,
                    on_ground?: boolean;
                };
            }
            export interface ConditionHasMarkVariant extends Condition<"has_mark_variant"> {
                value?: number;
            }
            export interface ConditionRandomChance extends Condition<"random_chance"> {
                chance?: number,
                max_chance?: number;
            }
            export interface ConditionRandomChanceWithLooting extends Condition<"random_chance_with_looting"> {
                chance?: number,
                looting_multiplier?: number;
            }
            export interface ConditionRandomDifficultyChance extends Condition<"random_difficulty_chance" | "random_regional_difficulty_chance"> {
                default_chance?: number,
                easy?: number,
                normal?: number,
                hard?: number,
                peaceful?: number;
            }
            export interface ConditionNoParams extends Condition<"killed_by_player" | "killed_by_player_or_pets"> {}
            export interface ConditionAndOr extends Condition<"and" | "or"> {
                clauses: Conditions[];
            }
            export interface ConditionNot extends Condition<"not"> {
                clause: Conditions;
            }
            export type Entries =
                EntryEmpty |
                EntryLootTable |
                EntryItem;
            export interface Entry<NAME> {
                type: NAME;
            }
            export interface EntryEmpty extends Entry<"empty"> {}
            export interface EntryLootTable extends Entry<"loot_table"> {
                pools?: Pool[];
            }
            export interface EntryItem extends Entry<"item"> {
                name?: any_string,
                count?: number,
                quality?: number,
                weight?: number,
                functions?: EntryFunctions[];
            }
            export type EntryFunctions =
                EntryFunctionEnchantBookForTrading |
                EntryFunctionEnchantRandomGear |
                EntryFunctionEnchantRandomly |
                EntryFunctionEnchantWithLevels |
                EntryFunctionExplorationMap |
                EntryFunctionFillContainer |
                EntryFunctionFurnaceSmelt |
                EntryFunctionLootingEnchant |
                EntryFunctionRandomAuxValue |
                EntryFunctionRandomBlockState |
                EntryFunctionSetActorId |
                EntryFunctionSetBookContents |
                EntryFunctionSetCount |
                EntryFunctionSetDamage |
                EntryFunctionSetData |
                EntryFunctionSetLore |
                EntryFunctionSetName |
                EntryFunctionSpecificEnchants |
                EntryFunctionNoParams;
            export interface EntryFunction<NAME> {
                function: NAME;
            }
            export interface EntryFunctionEnchantBookForTrading extends EntryFunction<"enchant_book_for_trading"> {
                base_cost: number,
                base_random_cost: number,
                per_level_cost: number,
                per_level_random_cost: number;
            }
            export interface EntryFunctionEnchantRandomGear extends EntryFunction<"enchant_random_gear"> {
                chance?: number;
            }
            export interface EntryFunctionEnchantRandomly extends EntryFunction<"enchant_randomly"> {
                treasure?: boolean;
            }
            export interface EntryFunctionEnchantWithLevels extends EntryFunction<"enchant_with_levels"> {
                levels?: number | MinMax,
                treasure?: boolean;
            }
            export interface EntryFunctionExplorationMap extends EntryFunction<"exploration_map"> {
                destination?: FeatureTypes;
            }
            export interface EntryFunctionFillContainer extends EntryFunction<"fill_container"> {
                loot_table?: any_string;
            }
            export interface EntryFunctionFurnaceSmelt extends EntryFunction<"furnace_smelt"> {
                conditions?: Conditions[];
            }
            export interface EntryFunctionLootingEnchant extends EntryFunction<"looting_enchant"> {
                count?: MinMax;
            }
            export interface EntryFunctionRandomAuxValue extends EntryFunction<"random_aux_value"> {
                values?: MinMax;
            }
            export interface EntryFunctionRandomBlockState extends EntryFunction<"random_block_state"> {
                block_state?: any_string,
                values?: MinMax;
            }
            export interface EntryFunctionSetActorId extends EntryFunction<"set_actor_id"> {
                id?: any_string;
            }
            export interface EntryFunctionSetBookContents extends EntryFunction<"set_book_contents"> {
                author: any_string,
                title: any_string,
                pages: any_string[];
            }
            export interface EntryFunctionSetCount extends EntryFunction<"set_count"> {
                count?: number | MinMax;
            }
            export interface EntryFunctionSetDamage extends EntryFunction<"set_damage"> {
                damage?: number | MinMax;
            }
            export interface EntryFunctionSetData extends EntryFunction<"set_data"> {
                data?: number | MinMax;
            }
            export interface EntryFunctionSetLore extends EntryFunction<"set_lore"> {
                lore?: any_string[];
            }
            export interface EntryFunctionSetName extends EntryFunction<"set_name"> {
                name?: any_string;
            }
            export interface EntryFunctionSpecificEnchants extends EntryFunction<"specific_enchants"> {
                enchants?: {
                    id?: EnchantTypes,
                    level?: number;
                }[];
            }
            export interface EntryFunctionNoParams extends EntryFunction<"random_dye" | "set_data_from_color_index" | "trader_material_type"> {}
        }

    }

}