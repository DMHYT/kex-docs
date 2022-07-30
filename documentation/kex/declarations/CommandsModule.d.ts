declare module KEX {

    /**
     * Module to register custom chat commands.
     * @since 3.0
     */
    export module CommandsModule {

        /**
         * Creates an object to describe a new custom chat command.
         * The result must be put in [[CommandsModule.registerCommand]] after specifying everything you need.
         * @param name command's name that will have to be put after a slash
         * @param permissionLevel command's permission level, defaults to 0 (all players can use this command)
         * @returns the object to describe a new custom chat command
         * @since 3.0
         */
        export function newCommand(name: any_string, permissionLevel?: number): CommandOverloadBase;

        /**
         * Registers new custom chat command from given data object returned by [[CommandsModule.newCommand]].
         * You have to call this method with your [[CommandOverloadBase]] only after specifying everything you need
         * for this command.
         *  
         * However, this can be done in a single sequential call, for example:
         * ```js
         * KEX.CommandsModule.registerCommand(KEX.CommandsModule.newCommand("heal", 1)
         *     .then(KEX.CommandsModule.entityArg("target")
         *         .executes(function(ctx) {
         *             heal(ctx.getEntities("target"), 20);
         *         })
         *         .then(KEX.CommandsModule.intArg("amount")
         *             .executes(function(ctx) {
         *                 heal(ctx.getEntities("target"), ctx.getInt("amount"))
         *             })
         *         )
         *     )
         * );
         * 
         * function heal(entities, amount) {
         *     let iter = entities.iterator();
         *     while(iter.hasNext()) iter.next().heal(amount);
         * }
         * ```
         * @since 3.0
         */
        export function registerCommand(base: CommandOverloadBase): void;

        /**
         * Registers new custom chat command with fully custom parser defined by yourself.
         * 
         * Actually it's just a shortcut that looks like this:
         * ```java
         * registerCommand(newCommand(name, permissionLevel)
         *     .then(messageArg("{...}")
         *         .executes(new CommandExecuteCallback() {
         *             public void execute(CommandContext ctx)
         *             {
         *                 callback.execute(ctx.getMessage("{...}"), ctx);
         *             }
         *         })
         *     )
         * );
         * ```
         * @param name command's name that will have to be put after a slash
         * @param callback function defining command's behavior depending on the command message and [[CommandContext]]
         * @param permissionLevel command's permission level, defaults to 0 (all players can use this command)
         * @since 3.0
         */
        export function registerCustomParserCommand(name: any_string, callback: CustomParserCommandExecuteCallback, permissionLevel?: number): void;

        /**
         * @returns object to describe new integer argument for the custom command;
         * if `defaultValue` is not specified, it defaults to 0
         * @since 3.0
         */
        export function intArg(name: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new floating point argument for the custom command;
         * if `defaultValue` is not specified, it defaults to 0.0
         * @since 3.0
         */
        export function floatArg(name: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new boolean argument for the custom command;
         * if `defaultValue` is not specified, it defaults to true
         * @since 3.0
         */
        export function boolArg(name: any_string, defaultValue?: boolean): CommandArgument;

        /**
         * @returns object to describe new relative float
         * (`~VALUE`, where `~` is the center value you choose in your code)
         * argument for the custom command;
         * if `defaultValue` is not specified, it defaults to 0.0
         * @since 3.0
         */
        export function relativeFloatArg(name: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new position argument with integer coordinates for the custom command;
         * In this overload, the default value for the position is {0, 0, 0}
         * @since 3.0
         */
        export function positionArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new position argument with integer coordinates for the custom command
         * @since 3.0
         */
        export function positionArg(name: any_string, defaultX: number, defaultY: number, defaultZ: number): CommandArgument;

        /**
         * @returns object to describe new position argument with floating point coordinates for the custom command;
         * In this overload, the default value for the position is {0.0, 0.0, 0.0}
         * @since 3.0
         */
        export function floatPositionArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new position argument with floating point coordinates for the custom command
         * @since 3.0
         */
        export function floatPositionArg(name: any_string, defaultX: number, defaultY: number, defaultZ: number): CommandArgument;

        /**
         * @returns object to describe new string argument for the custom command;
         * if `defaultValue` is not specified, it defaults to null.
         * @since 3.0
         */
        export function stringArg(name: any_string, defaultValue?: any_string): CommandArgument;

        /**
         * @returns object to describe new message argument for the custom command.
         * This argument type is used to be put as a last argument of the command,
         * so it'll grab all the rest of the command text to its string
         * @since 3.0
         */
        export function messageArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new JSON object argument for the custom command
         * @since 3.0
         */
        export function jsonArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new entity selector argument for the custom command
         * @since 3.0
         */
        export function entityArg(name: any_string): CommandArgument;
        
        /**
         * @returns object to describe new player selector argument for the custom command
         * @since 3.0
         */
        export function playerArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new enum argument for the custom command.
         * The user will have to input a string enum key, which they'll be able to choose from
         * the list of suggestions above the input box, and then internally this key will be converted
         * to the corresponding integer value (you'll be able to get it using [[CommandContext.getInt]]).
         * If `defaultValue` is not specified, it defaults to 0.
         * @since 3.0
         */
        export function enumArg(name: any_string, enumName: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new string enum argument for the custom command.
         * The user will have to input a string enum value, which they'll be able to choose from
         * the list of suggestions above the input box, and then you'll be able to get it using [[CommandContext.getString]].
         * Note that `defaultValue` is required here.
         * @since 3.0
         */
        export function stringEnumArg(name: any_string, enumName: any_string, defaultValue: any_string): CommandArgument;
        
        /**
         * @returns object to describe new literal argument for the custom command.
         * A literal is one specific word that must be written into the chat command line,
         * like `list` in `/tickingarea list` or `clear` in `/effect visualstudiodan clear`
         * @since 3.0
         */
        export function literal(l: any_string): CommandArgument;

        /**
         * Registers an alias (alternative name) for the command with given name,
         * like `tp` for `teleport` and `?` for `help` in vanilla.
         * @param name command's original name
         * @param alias alternative name to assign to the command's name
         * @since 3.0
         */
        export function registerAlias(name: any_string, alias: any_string): void;

        /**
         * Registers a new command enum (set of keys each of which can be used as a command argument
         * and corresponds to a specific integer value, which then can be got using [[CommandContext.getInt]]).
         * @param name enum's name that has to be used in [[CommandsModule.enumArg]] as the `enumName` parameter
         * @param values enum's data set represented as a [[java.util.Map]] with string keys and integer values.
         * Different keys can have same values.
         * @since 3.0
         */
        export function addEnum(name: any_string, values: java.util.Map<any_string, number>): void;
        
        /**
         * Registers a new command enum (set of keys each of which can be used as a command argument
         * and corresponds to a specific integer value, which then can be got using [[CommandContext.getInt]]).
         * @param name enum's name that has to be used in [[CommandsModule.enumArg]] as the `enumName` parameter
         * @param values enum's data set represented as a JS object with string keys and integer values.
         * Different keys can have same values.
         * @since 3.0
         */
        export function addEnum(name: any_string, values: { [key: string]: number }): void;
        
        /**
         * Registers a new string command enum (set of strings each of which can be used as a command argument,
         * which then can be got using [[CommandContext.getString]]).
         * @param name enum's name that has to be used in [[CommandsModule.stringEnumArg]] as the `enumName` parameter
         * @param values enum values represented as a [[java.util.Set]] of unique strings
         * @since 3.0
         */
        export function addStringEnum(name: any_string, values: java.util.Set<any_string>): void;

        /**
         * Registers a new string command enum (set of strings each of which can be used as a command argument,
         * which then can be got using [[CommandContext.getString]]).
         * @param name enum's name that has to be used in [[CommandsModule.stringEnumArg]] as the `enumName` parameter
         * @param values enum values represented as an array of unique strings
         * @since 3.0
         */
        export function addStringEnum(name: any_string, values: any_string[]): void;

        /**
         * Sequential-call-based alternative of [[CommandsModule.addEnum]].
         * @param name enum's name that has to be used in [[CommandsModule.enumArg]] as the `enumName` parameter
         * @returns object to add enum's key-value pairs one by one and then call its `register` method to register the enum itself
         * @since 3.0
         */
        export function newEnum(name: any_string): EnumBuilder;

        /**
         * Sequential-call-based alternative of [[CommandsModule.addStringEnum]].
         * @param name enum's name that has to be used in [[CommandsModule.stringEnumArg]] as the `enumName` parameter
         * @returns object to add enum values one by one and then call its `register` method to register the enum itself
         * @since 3.0
         */
        export function newStringEnum(name: any_string): StringEnumBuilder;

        /**
         * Object returned by [[CommandsModule.newCommand]]
         * used to describe a custom chat command.
         * @since 3.0
         */
        export interface CommandOverloadBase {
            
            /**
             * Adds the first argument of the command.
             * Each call creates a new command overload.
             * To add arguments further than the first, you have
             * to use [[CommandArgument.then]].
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            then(child: CommandArgument): CommandOverloadBase;
            
            /**
             * Specifies the function that will be called for
             * the following command without arguments.
             * If you call [[executes]] in [[CommandOverloadBase]],
             * this will automatically create a command overload without arguments.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            executes(callback: CommandExecuteCallback): CommandOverloadBase;
            
            /**
             * @returns the function that will be called for the following
             * command without arguments or null, if [[executes]] has not been called.
             * @since 3.0
             */
            getCallback(): Nullable<CommandExecuteCallback>;
            
            /**
             * Adds an alias (alternative name) for the following command.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addAlias(alias: any_string): CommandOverloadBase;
            
            /**
             * Adds multiple aliases (alternative names) for the following command.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addAliases(aliases: any_string[]): CommandOverloadBase;
            
            /**
             * Specifies command's description, that will be displayed
             * above the chat input box when writing `/your_command_name`.
             * In this overload, the given description is set as the English localization,
             * which will be used by default if you don't add translations to other languages.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDescription(description: any_string): CommandOverloadBase;
            
            /**
             * Specifies command's description, that will be displayed
             * above the chat input box when writing `/your_command_name`.
             * @param translations object with language codes as keys and translations
             * of the command description to the corresponding language as values
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDescription(translations: { [key: string]: string }): CommandOverloadBase;
            
            /**
             * @returns list of all recursively found overloads of the following chat command,
             * each overload is represented as an ordered [[java.util.List]] of its arguments.
             * @since 3.0
             */
            listOverloads(): java.util.List<java.util.List<CommandArgument>>;

        }

        /**
         * Object representing one of the arguments of the chat command.
         * There are 14 types of arguments, you can get corresponding objects
         * using [[CommandsModule]] methods ending with `Arg`.
         * @since 3.0
         */
        export interface CommandArgument {
            
            /**
             * Adds an argument that will come after the following argument.
             * If you call this multiple times on one [[CommandArgument]],
             * separate overloads will be created.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            then(child: CommandArgument): CommandArgument;
            
            /**
             * Specifies the function that will be called for
             * the following command with the following argument being the last specified by the player.
             * After calling [[executes]] on a [[CommandArgument]],
             * all arguments coming after it become optional.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            executes(callback: CommandExecuteCallback): CommandArgument;
            
            /**
             * @returns the function that will be called for the following
             * command with the following argument being the last specified by the player,
             * or null, if [[executes]] has not been called for this [[CommandArgument]].
             * @since 3.0
             */
            getCallback(): Nullable<CommandExecuteCallback>;

        }

        /**
         * Function used in [[CommandOverloadBase.then]] and [[CommandArgument.then]],
         * to specify the custom command's behavior without arguments and with a
         * specific argument being the last specified by the player, correspondingly.
         * @param ctx object to access the argument values and data about command caller,
         * and to print the command successfull or failed result
         * @since 3.0
         */
        export interface CommandExecuteCallback {
            (ctx: CommandContext): void;
        }

        /**
         * Function used in [[CommandsModule.registerCustomParserCommand]]
         * to manually parse the command text and apply your custom parser chat command's behavior.
         * @param text the whole command text except `/your_command_name `
         * @param ctx object to access the argument values and data about command caller,
         * and to print command's successfull or failed result
         * @since 3.0
         */
        export interface CustomParserCommandExecuteCallback {
            (text: jstring, ctx: CommandContext): void;
        }

        /**
         * Wrapper for `Command`, `CommandOrigin` and `CommandOutput` native classes at the same time
         * used in custom chat command execute callbacks allowing you to access
         * the values of the specified arguments and the entity or another source that called the command,
         * and also to print command's successfull or failed result.
         * @since 3.0
         */
        export interface CommandContext {
            
            /**
             * @returns value of integer argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of integer type
             * @since 3.0
             */
            getInt(name: any_string): number;
            
            /**
             * @returns value of floating point argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of floating point type
             * @since 3.0
             */
            getFloat(name: any_string): number;
            
            /**
             * @returns value of boolean argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of boolean type
             * @since 3.0
             */
            getBool(name: any_string): boolean;
            
            /**
             * @param center the value to add to the specified floating point value,
             * if the caller used `~` token before it
             * @returns value of relative float argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of relative float type
             * @since 3.0
             */
            getRelativeFloat(name: any_string, center: number): number;
            
            /**
             * @returns value of position argument with integer coordinates by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of integer position type
             * @since 3.0
             */
            getPosition(name: any_string): Vector;
            
            /**
             * @returns value of position argument with floating point coordinates by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of float position type
             * @since 3.0
             */
            getFloatPosition(name: any_string): Vector;
            
            /**
             * @returns value of string argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of string type
             * @since 3.0
             */
            getString(name: any_string): jstring;
            
            /**
             * @returns value of message argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of message type
             * @since 3.0
             */
            getMessage(name: any_string): jstring;
            
            /**
             * @returns value of JSON object argument by given name, or null
             * if an exception occured creating a [[org.json.JSONObject]] instance.
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of JSON type
             * @since 3.0
             */
            getJson(name: any_string): Nullable<org.json.JSONObject>;
            
            /**
             * @returns list of entities chosen using entity selector argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of entity selector type
             * @since 3.0
             */
            getEntities(name: any_string): java.util.List<Actor>;
            
            /**
             * @returns list of players chosen using player selector argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of player selector type
             * @since 3.0
             */
            getPlayers(name: any_string): java.util.List<Player>;
            
            /**
             * @returns a single player chosen using player selector argument by given name,
             * or null if there was more than one or no player chosen
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of player selector type
             * @since 3.0
             */
            getPlayer(name: any_string): Nullable<Player>;
            
            /**
             * @returns integer position of the command caller
             * @since 3.0
             */
            getSourceBlockPosition(): Vector;
            
            /**
             * @returns exact floating point position of the command caller
             * @since 3.0
             */
            getSourceWorldPosition(): Vector;
            
            /**
             * @returns command caller's [[Level]],
             * or null if it doesn't have it for some reason
             * @since 3.0
             */
            getSourceLevel(): Nullable<Level>;
            
            /**
             * @returns [[Dimension]] the command caller's in,
             * or null if it doesn't have it for some reason
             * @since 3.0
             */
            getSourceDimension(): Nullable<Dimension>;
            
            /**
             * @returns command caller's entity object,
             * or null if the caller is not an entity (for example, command block)
             * @since 3.0
             */
            getSourceEntity(): Nullable<Actor>;
            
            /**
             * @returns command caller's player object,
             * or null if the caller is not a player
             * @since 3.0
             */
            getSourcePlayer(): Nullable<Player>;
            
            /**
             * Prints the message of successful command call to the chat.
             * You can omit `msg` param if you just want to mark
             * that the command call went without errors.
             * However, calling this method is optional.
             * @since 3.0
             */
            success(msg?: any_string): void;
            
            /**
             * Prints the error (red color) message and marks
             * that the command call has failed.
             * @since 3.0
             */
            error(msg: any_string): void;

        }

        /**
         * Object to register a command enum by specifying its key-value pairs one by one
         * and then calling `register` method to register the enum itself.
         * 
         * Returned by [[CommandsModule.newEnum]].
         * @since 3.0
         */
        export interface EnumBuilder {
            
            /**
             * Adds a key-value pair to the enum data. Different keys can have the same value.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            add(key: any_string, value: number): EnumBuilder;

            /**
             * Registers the enum after specifying all of its key-value pairs.
             * @since 3.0
             */
            register(): void;

        }

        /**
         * Object to register a string command enum by specifying its values one by one
         * and then calling `register` method to register the enum itself.
         * 
         * Returned by [[CommandsModule.newStringEnum]].
         * @since 3.0
         */
        export interface StringEnumBuilder {

            /**
             * Adds a unique value to the enum values list.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            add(value: any_string): StringEnumBuilder;

            /**
             * Registers the enum after specifying all of its values.
             * @since 3.0
             */
            register(): void;

        }

    }

}