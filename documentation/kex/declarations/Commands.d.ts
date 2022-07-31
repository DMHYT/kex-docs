/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/modules/Commands.html" target="_blank">Commands</a>
 * module adding custom chat commands registration API,
 * alternative to [[KEX.CommandsModule]], having the structure
 * which is more convenient for JavaScript development.
 * @since 3.0
 */
export namespace Commands {

    /**
     * Same as [[KEX.CommandsModule.newEnum]].
     * @returns object to add enum's key-value pairs one by one and then call its `register` method to register the enum itself
     * @since 3.0
     */
    export function newEnum(enumName: string): KEX.CommandsModule.EnumBuilder;

    /**
     * Same as [[KEX.CommandsModule.newStringEnum]].
     * @returns object to add enum values one by one and then call its `register` method to register the enum itself
     * @since 3.0
     */
    export function newStringEnum(enumName: string): KEX.CommandsModule.StringEnumBuilder;
    
    /**
     * Initializes new custom chat command.
     * @param commandName command's name that will have to be put after a slash
     * @param permissionLevel command's permission level, defaults to 0 (all players can use this command)
     * @returns object to describe your custom chat command, and then call its `register` method to register the command
     * @since 3.0
     */
    export function create(commandName: string, permissionLevel?: number): CustomCommandBuilder;

    /**
     * Object returned by [[Commands.create]] used to describe a custom chat command,
     * and then call its `register` method to register the command.
     * @since 3.0
     */
    export interface CustomCommandBuilder {

        /**
         * Adds new overload of the following command.
         * @param args list of argument descriptions of this overload
         * @param callback function that will be called for the following command with given arguments
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        addOverload(args: Arguments[], callback: ExecuteCallback): CustomCommandBuilder;

        /**
         * Specifies command's description, that will be displayed
         * above the chat input box when writing `/your_command_name`.
         * In this overload, the given description is set as the English localization,
         * which will be used by default if you don't add translations to other languages.
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setDescription(desc: string): CustomCommandBuilder;

        /**
         * Specifies command's description, that will be displayed
         * above the chat input box when writing `/your_command_name`.
         * @param translations object with language codes as keys and translations
         * of the command description to the corresponding language as values
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setDescription(translations: { [key: string]: string }): CustomCommandBuilder;

        /**
         * Registers the command after specifying all its needed data
         * (overloads, description translations etc.)
         * @since 3.0
         */
        register(): void;

    }

    /**
     * Template interface to simplify declarations of each command argument type.
     * 
     * `T` typename is used for string name of the argument type,
     * `I` is for integer ID of the argument type,
     * and `D` is for the type of default value, it's set to `never` (doesn't need to be specified),
     * if the argument of the following type doesn't take default values.
     * @since 3.0
     */
    export interface Argument<T, I, D> {

        /**
         * Argument's name that will be displayed in command syntax hint text,
         * and also will be used to access its value on command call.
         */
        label: string,

        /**
         * Integer or string type of the following argument.
         */
        type: T | I,
        
        /**
         * Default value for the following argument,
         * sometimes doesn't need to be specified, if the type of argument
         * doesn't take default values.
         */
        default?: D,

        /**
         * Whether the following argument is optional, defaults to false.
         * If you at least once set this property to true, then all
         * the arguments coming after the following one will become optional too.
         */
        optional?: boolean;

    }

    /**
     * Type alias declaring a description object template for the command argument of integer type.
     * @since 3.0
     */
    export type IntArgument = Argument<"int" | "integer", KEX.EArgumentType.INT, number>;

    /**
     * Type alias declaring a description object template for the command argument of floating point type.
     * @since 3.0
     */
    export type FloatArgument = Argument<"float", KEX.EArgumentType.FLOAT, number>;

    /**
     * Type alias declaring a description object template for the command argument of boolean type.
     * @since 3.0
     */
    export type BoolArgument = Argument<"bool" | "boolean", KEX.EArgumentType.BOOL, boolean>;

    /**
     * Type alias declaring a description object template for the command argument of relative float type
     * (`~VALUE`, where `~` is the center value you choose in your code).
     * @since 3.0
     */
    export type RelativeFloatArgument = Argument<"relfloat" | "relativefloat", KEX.EArgumentType.RELATIVE_FLOAT, number>;

    /**
     * Type alias declaring a description object template for the command argument of integer coordinates position type.
     * @since 3.0
     */
    export type PositionArgument = Argument<"pos" | "position", KEX.EArgumentType.POSITION, Vector>;

    /**
     * Type alias declaring a description object template for the command argument of floating point coordinates position type.
     * @since 3.0
     */
    export type FloatPositionArgument = Argument<"floatpos" | "floatposition", KEX.EArgumentType.FLOAT_POSITION, Vector>;

    /**
     * Type alias declaring a description object template for the command argument of string type.
     * @since 3.0
     */
    export type StringArgument = Argument<"str" | "string", KEX.EArgumentType.STRING, string>;

    /**
     * Type alias declaring a description object template for the command argument of message type.
     * Same as [[StringArgument]], but must be put as a last argument of the command overload,
     * as it'll grab all the rest of the command text to its string value.
     * @since 3.0
     */
    export type MessageArgument = Argument<"msg" | "message", KEX.EArgumentType.MESSAGE, never>;

    /**
     * Type alias declaring a description object template for the command argument of JSON object type.
     * @since 3.0
     */
    export type JsonArgument = Argument<"json", KEX.EArgumentType.JSON, never>;

    /**
     * Type alias declaring a description object template for the command argument of entity selector type.
     * @since 3.0
     */
    export type EntityArgument = Argument<"entity", KEX.EArgumentType.ENTITY, never>;

    /**
     * Type alias declaring a description object template for the command argument of player selector type.
     * @since 3.0
     */
    export type PlayerArgument = Argument<"player", KEX.EArgumentType.PLAYER, never>;

    /**
     * Interface declaring a description object template for the command argument of integer enum type.
     * @since 3.0
     */
    export interface EnumArgument extends Argument<"enum", KEX.EArgumentType.ENUM, number> {

        /**
         * String name of the enum used to convert
         * string enum keys written by the player to corresponding integer enum values,
         * and to suggest the enum's keys to the player above the chat input box.
         */
        name: string;

    }
    
    /**
     * Interface declaring a description object template for the command argument of string enum type.
     * @since 3.0
     */
    export interface StringEnumArgument extends Argument<"strenum" | "stringenum", KEX.EArgumentType.STRING_ENUM, string> {

        /**
         * String name of the enum used to validate
         * the string value written by the player, and to suggest the enum's values
         * to the player above the chat input box.
         */
        name: string;

        /**
         * Only in the argument of string enum type, default value is required.
         */
        default: string;

    }

    /**
     * Type alias declaring a description object template for the command argument of literal type.
     * 
     * A literal is one specific word that must be written into the chat command line,
     * like `list` in `/tickingarea list` or `clear` in `/effect visualstudiodan clear`
     * @since 3.0
     */
    export type LiteralArgument = Argument<"literal", KEX.EArgumentType.LITERAL, never>;

    /**
     * Type alias listing all types of command argument description objects,
     * that can be put into the `args` array in [[CustomCommandBuilder.addOverload]].
     * @since 3.0
     */
    export type Arguments =
        IntArgument |
        FloatArgument |
        BoolArgument |
        RelativeFloatArgument |
        PositionArgument |
        FloatPositionArgument |
        StringArgument |
        MessageArgument |
        JsonArgument |
        EntityArgument |
        PlayerArgument |
        EnumArgument |
        StringEnumArgument |
        LiteralArgument;

    /**
     * Representation of relative float argument in `args` parameter
     * of [[ExecuteCallback]].
     * It's a function that optionally takes a `center` value
     * to add it to the specified floating point value,
     * if the caller used `~` token before it.
     * @since 3.0
     */
    export type RelativeFloat = (center?: number) => number;

    /**
     * Function used in [[CustomCommandBuilder.addOverload]].
     * @param args object containing the values of all the arguments of the
     * following command overload specified by the command caller,
     * corresponding to the arguments' string names
     * @param context object to access the argument values and data about command caller,
     * and to print the command successfull or failed result
     * @since 3.0
     */
    export interface ExecuteCallback {
        (args: {
            [key: string]:
                number |
                boolean |
                RelativeFloat |
                Vector |
                string |
                Nullable<{ [key: string]: any }> |
                KEX.Actor[] |
                KEX.Player[]
        }, context: KEX.CommandsModule.CommandContext): void;
    }
    
}