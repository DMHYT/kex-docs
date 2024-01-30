# Kernel Extension mod updates changelog

## **RELEASE 5.0**

### LAST MAJOR UPDATE, NEW FEATURES DEVELOPMENT DISCONTINUED

### _**Additions:**_

- **Block states API overhaul:**
  - New `BlockState` class containing methods similar to those from Forge
  - `BlockStates` namespace containing **functions to register custom block properties** and integer enum definitions for some of vanilla block properties
  - `VanillaStates` namespace containing all of the vanilla block properties as `Property` objects
  - InnerCore's `BlockState` replaced with KEX's `BlockState` everywhere it was used
  - New method `BlocksModule.registerStateForBlock(id, property)`
  - New `BlockSource` methods: `getBlockState`, `setBlockState`, `setBlockStateNoUpdate`
- **Forge-like mod configurations** based on Android-adapted `night-config` library, more planned to be done with this
- Added some internal vector math classes to shared API. See `KEX.Math` module in docs. As a result:
  - New method `BlocksModule.registerComparatorSignalCallback` with other type of callback function using `BlockPos` and `Direction` classes instead of `Callback.ItemUseCoordinates` object
  - New overload of `BlockSource.getCustomBlockEntity` with `BlockPos` instead of three coordinates
  - `TileEntityCreationCallback`'s third parameter changed from `Vector` to `BlockPos`
  - `BlockActor.getBlockPos` returns `BlockPos` instead of `Vector`
  - New method `BlockActor.onNeighborChanged(blockPos)`
  - Third parameter of method `BlockActor.onUse` changed from `Vector` to `Vec3d`
- **New `KEX.BiomesModule`** with **accessors to properties of all the registered biomes**, and some new useful features for modded biomes
  - Human-readable names for all vanilla biomes in 23 languages (ported from Java Edition)
  - `BiomesModule.setBiomeTranslationKey`: Custom translation keys for custom biomes' names
  - `BiomesModule.setModNameForBiome`: Specify the name of the mod adding a custom biome
  - New methods `BlockSource.getBiome` and `BlockSource.getBiomeFast`, which allow to get the biome on any coordinates, even when the needed chunk is not loaded
  - Added `BiomesInitialized` callback
- Added `attacker` and `victim` parameters to custom tool parameters object's `getAttackDamageBonus` method

### _**Bug fixes and improvements:**_

- Fixed `Actor.removeEffects` method crashing
- Fixed `ItemsModule`'s tooltip not fully functioning
- Fixed 4 important `ToolAPI` bugs, many thanks to [Nikujagajaga](https://github.com/Nikujagajaga) for reporting all the issues and testing their fixes with Tinker's Construct mod. KEX's `ToolAPI` is now considered 99% correctly functional.

## **RELEASE 4.0**

### _**Additions:**_

- **Java blocks and items class system and registry**
- Ability to create a new `kex-config.json` file in your mod directory and specify path to the KEX resource directory, relative to your mod directory path
- Internal tools to parse JSON block and item models from KEX resource directories in mods
- **Custom native block entity API for Java developers**: new `TileEntityModule`, `BlockActor` abstract Java class, new `KEX.BlockSource.getCustomBlockEntity` method
- New **internal** `fixes module`:
  - Brought back the ability to create custom block sound types and level sound event types in addons, broken by Mojang themselves
- New `KEX.BlocksModule` with several new features for custom blocks:
  - `registerComparatorSignalCallback(blockID, callback, isCallbackForced?)` - registers the block with given ID as a comparator signal emitter
  - `setLightEmission(id, data, lightLevel)` and `getLightEmission(id, data)` - allow to specify separate light level values for different data values of the block with the same ID
  - `registerOnStepOffCallback(blockID, callback)` - registers the function that will be called when an entity steps off a block with given ID
  - `registerOnStepOnCallback(blockID, callback)` - patch for the InnerCore's `Block.registerEntityStepOnFunction`, which is broken as of `InnerCore 2.3.1b115`
  - **All the listed methods have their duplicates in InnerCore's `Block` module:**
    - `KEX.BlocksModule.registerComparatorSignalCallback` &rarr; `Block.registerComparatorSignalFunction`
    - `KEX.BlocksModule.[set/get]LightEmission` &rarr; `Block.[set/get]LightLevel`
    - `KEX.BlocksModule.registerOnStep[On/Off]Callback` &rarr; `Block.registerEntityStep[On/Off]Function`
- New features in `KEX.LootModule`:
  - `createLootTableModifier` and `addOnDropCallbackFor` methods now support full loot table dir, same as the rest of the module's methods
  - Added method `LootModifier.lock`, which allows to prevent any further modifications of a certain loot table
  - `registerCustomLootCondition[JS](conditionName, callback)` - adds new loot pool condition that you can add to `"conditions"` array in your loot table's JSON, and specify its behavior without any limits in your code.
  - New `"and"`, `"or"` and `"not"` loot conditions
  - `runLootCondition(json, context)` - allows you to get the result of a loot pool condition by given JSON description for your own purposes
- `AddonUtils.getNumericIdFromIdentifier` can now take the string identifier **with** `"minecraft:"` prefix, automatically filtering it out internally
- Added method `Mob.isSprinting`, which was by mistake not added far back in `RELEASE 1.0`
- Added method `Level.isClientSide`

### _**Bug fixes and improvements:**_

- Updated mod toolchain and refactored a bunch of code fragments using Java 8 features
- Made a major rework in `AddonUtils`, now you can use `getNumericIdFromIdentifier` not after `"LevelDisplayed"`, but after `"ModsLoaded"`
- Fixed a major defect in `ItemsModule` item tooltip feature: item's aux value (data) previously wasn't used to form the caching key, so you could see many cases like granite, andesite, diorite etc. named "Stone".

## **RELEASE 3.0**

### _**Additions:**_

- Added method `Actor.calculateAttackDamage`
- Added `TickingAreasManager` and `ActorDamageSource` native classes
- Added `KEX.BlockSource` class extending InnerCore's `BlockSource` and adding some new methods, currently there are only two of them: `getLevel()` and `getDimensionObject()`.
- Added `EntitySneakChanged` and `ItemTooltip` callbacks
- `ReachDistanceModifier` class to change player's reach distance (maximum distance from which the player can reach blocks or mobs and interact with them).
- `CameraRollModifier` class to change player's camera roll angle
- Added methods `getDimensionId()` and `getLevel()` to `Dimension` native interface.
- Added method `getTickingAreasManager()` to `Level` native interface.
- Added `KEX.FoodItemComponent.Builder` class
- Added method `KEX.GlobalContext.getLevel()`
- Added bunch of new methods to `KEX.MobEffectInstance` class
- Added `TextureWorker` and `ItemAnimHelper` modules - successors to libraries with same names
- New methods in InnerCore's `Recipes` module:
  - `addSmithingTableRecipe(baseID, additionID, resultID)` - adds new custom smithing table recipe
  - `removeSmithingTableRecipe(baseID, additionID)` - removes smithing table recipe by given two ingredients' numeric IDs, if the recipe with this ingredients exists.
  - `getSmithingTableRecipesByResult(resultID)` - returns list of all registered smithing table recipes having the item with given numeric ID as a result
  - `getSmithingTableRecipesByBase(baseID)` - returns list of all registered smithing table recipes having the item with given numeric ID as a first ingredient
  - `getAllSmithingTableRecipes()` - returns list of all registered smithing table recipes, both vanilla and custom
- New methods in `KEX.ItemsModule`:
  - `addTooltip(id, callback, priority?, isCallbackForced?)` - adds custom modification to the item tooltip. It is better than InnerCore's `Item.registerNameOverrideFunction`, because exactly the hover text and not the item name is being modified.
  - `setDynamicFoodValues(id, callback)` - sets dynamic food properties for the item with given ID, depending on the contents of the item instance.
  - `registerReachDistanceModifierFor(id, modifier)` - sets the given `ReachDistanceModifier` object to be enabled when the player is holding the item with given ID in their hand.
- New methods in `KEX.LootModule`:
  - `fillContainer(world, x, y, z, tableName, actor)` - fills vanilla container on given coords, with items randomly chosen from given loot table.
  - `getRandomItems(tableName, context)` - creates the list of randomly chosen items from given loot table using given circumstances object, and returns it.
  - `forceLoad(tableName)` - forces the given loot table to be loaded as soon as the player enters the world. Read more about this [here](https://dmhyt.github.io/kex-docs/api/modules/KEX.LootModule.html#forceLoad)
  - `registerCustomLootFunction[JS](functionName, callback)` - adds new loot entry function that you can add to `"functions"` array in your loot table's JSON, and specify its behavior without any limits in your code.
- New module `KEX.I18n` to get and add vanilla localizations.
- New module `KEX.ChunksModule` to work with loaded areas in the world.
- New module `KEX.DamageModule` to register new entity damage sources and death causes, also containing new method to deal damage to the entity, with wider parameters object than in InnerCore's `Entity.damageEntity` method.
- New module `KEX.CommandsModule` to register custom chat commands, and additions to InnerCore's `Commands` module containing an alternative chat command registry API, which is more convenient for JavaScript development.
- Additions to enums:
  - Made InnerCore's `ETileEntityType` enum full, added 29 missing vanilla tile entity numeric types.
  - `KEX.EDamageCause` enum listing all entity damage cause numeric IDs defined by vanilla.
  - `KEX.EArgumentType` enum to specify integer command argument types in custom command registry.

### _**Bug fixes:**_

- Removed magic damage support for `EntityHurt` callback, because it was causing multiple callback calls on one **common** damage event
- Fixed a **huge** bunch of bugs in `ToolAPI` patches, many thanks to [Maxim Pomazuev](https://github.com/pomazuevmaksim) for testing.
- Fixed `Actor` and `Mob` methods using `ItemInstance` and `MobEffectInstance` as arguments.

## **BETA 2.2.3**

- Fixed custom parameters in tool materials object, thus fixed conflict with `RedPowerPE` mod
- Fixed vanilla tools not breaking blocks with appropriate speed, caused by `VtableHelper` in `ProjectE` and `Item Information` mods

## **BETA 2.2.2**

- Fixed custom tools not breaking
- Added callback `"ChangeCarriedItem"`

## **BETA 2.2.1**

- Fixed custom tools crashing on last InnerCore Test pack update
- Fixed `ToolAPI.getDestroyTimeViaTool` method patch
- Some more `ToolAPI` backward compatibility fixes

## **BETA 2.2**

- Added method `ItemsModule.setMaxUseDurationDynamic`
- Made InnerCore-defined `EItemAnimation` enum full, added `DRINK`, `BLOCK`, `CAMERA`, `SPEAR`, `CROSSBOW`
- Fixed conflict with very old versions of `ToolLib` library (tested with `ToolLib V14` in `Nocube's Wilderness` mod)
- Fixed conflict with `HarvestCraft` mod
- Added new tool types to the `ToolsModule` - shears and flint-and-steel
- Adapted one internal feature to the future version of InnerCore pack

## **BETA 2.1**

- Useful additions to the `Callback` module (by [80LK](https://github.com/80LK))
  - `Callback.on(name, handler, priority?)` - analogue of `Callback.addCallback`
  - `Callback.once(name, handler, priority?)` - same as `on`, but the event handler will be called only once
  - `Callback.off(name, handler)` - removes the given event handler

## **BETA 2.0.4**

- Some important fixes in tools logics

## **BETA 2.0.3**

- Small fix in tool levels logics

## **BETA 2.0.2**

- Fixed `Player.openSign` method crashing, and reworked it, for it to create sign GUI screen with the text that had already been written on the sign before.

## **BETA 2.0.1**

- Fixed some of `ToolAPI` method patches returning Java strings instead of JS ones, improved TypeScript declarations in terms of string types.

## **RELEASE 2.0**

- Now `ToolsModule.destroyBlockHook` function is completely universal and can take any JS objects containing id and data fields, not only `FullBlock` instances.
- Small fix in food saturation logics.
- Added `ESaturationModifier` enum.
- Added `Player`, `LocalPlayer`, `MoveInputHandler` and `LootTableContext` native classes.
- Added `GlobalContext` module, currently has only one method, `getLocalPlayer()`.
- Added callbacks module.
  - First new callbacks are `PlayerJump` and `GameModeChanged`.
  - Pre-defined `EntityHurt` callback is now also fired at magic damage.
- Added new methods to the `Actor` class:
  - `void removeEffects(boolean harmful, boolean harmless)`
  - `boolean isOnGround()`
  - A bunch of methods connected with breathable component
- Added method `LootModule.addOnDropCallbackFor` to modify the list of items every time they are being chosen randomly, to be dropped from the mob or to be put into the chest. Function interface for the callback provides you with the list of items itself, and the `LootTableContext` object, to get additional data about the entity death / chest filling moment.

## **BETA 1.4**

- Fixed food creation method patch
- Food parameters API.
  - Food parameters object can be accessed by `ItemsModule.getFood(id)`, returns null if given item is not a food.
  - There is also `ItemsModule.isFood(id)` method, to check if the item is edible or not.
  - Added method `ItemsModule.newFoodSaturationModifier(name, value)`, to register custom string food saturation modifiers, that are specified in JSON components. Vanilla has only 6 pre-defined modifiers: `poor`, `low`, `normal`, `good`, `max` and `supernatural`.
  - Added method `ItemsModule.saturationModifierFromString(name)`, which returns the numeric saturation modifier value defined by the given name, or 0.6 if the saturation modifier with given name does not exist (0.6 is the value for normal modifier).
- Added method `Actor.isElytraFlying()`.
- Fixed `destroyBlockHook` function in `ToolsModule` not taking `BlockState` as a block object. Now this function and other ones using the block objects are universal for both `FullBlock` and `BlockState` objects.

## **BETA 1.3**

- `AddonUtils` class is now exported by the shared API.
- Added function `getKEXVersionCode()`, which can be used for more convenient version checks.
- Added callback `"KEX-InnerCoreIdsCached"`, provides no parameters.
- Fixed `LootModifier` methods `addJSModifyCallback`, `addJSPostModifyCallback` crashing.

## **BETA 1.2**

- Added methods to the `LootModifier` class: `addJSModifyCallback`, `addJSONModifyCallback`, `addJSPostModifyCallback`, `addJSONPostModifyCallback`.
  - The first pair is used to change the JSON object of the loot table directly after all programmatical modifications.
  - The other pair is used to work with the JSON object of the loot table after all types of modifications. In these callbacks all the provided objects are copies and shouldn't be modified.
- Added method `LootModule.addPiglinBarteringItem` to add new items to the piglin bartering list. This method takes no parameters and returns `LootEntry` interface.
- Added function `getKEXVersion()`, returns array containing three integers of the current mod version (now it's `[1, 2, 0]`).

## **BETA 1.1**

- Small fix in `Item.createFoodItem` patch
- Fixed all errors called by tools logics
- Restructured and refactored `LootModule`

## **RELEASE 1.0 (EARLY ALPHA)**

- `Item.createFoodItem` method patch to specify lots of new params (all listed in declarations)
- `ToolAPI` module fully rewritten to native code and vanilla tool classes. You can still use `ToolAPI` to register tools, but in order not to make KEX use a little crutch many times, consider using `ToolsModule.register[Sword/Axe/Pickaxe/Shovel/Hoe/CustomTool]` or `Item.create[([Sword/Axe/Pickaxe/Shovel/Hoe]Item)/CustomTool]` (instead of normal `Item.createItem`).
  - `ToolAPI.ToolParams` interface now has new method `int getAttackDamageBonus(ItemInstance item)`, to override default damage to be applied to item depending on the stack contents (example of use: `Nano Saber` from `IC2`)
- `ItemsModule` with 8 new methods for items (will increase in future updates)
- `LootModule` to modify vanilla loot tables (dungeon chests, entities drops and fishing loot, NOT trading)
- `Actor`, `Mob`, `Slime`, `MobEffect`, `MobEffectInstance` API (experimental, not tested)
