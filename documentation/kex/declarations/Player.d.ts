declare module KEX {

    /**
     * Wrapper for the native `Player` class extending [[Mob]]
     * and giving access to methods associated specifically with the player entity.
     * 
     * For convenience, it duplicates all the methods from InnerCore's [[PlayerActor]],
     * and of course adds bunch of new ones.
     * 
     * You can construct new [[Player]] from an existing [[Actor]] or [[Mob]],
     * or call [[Actor.asPlayer]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]] or [[Mob]] is not a [[Player]].
     * @since 2.0
     */
    export class Player extends Mob {

        /**
         * Constructs new [[Player]] object from given entity unique ID.
         * Use [[Actor.isValid]] and [[Actor.isPlayer]] first, to check if entity with
         * this ID exists and it's a [[Player]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 2.0
         */
        constructor(entity: number);
        
        /**
         * Constructs new [[Player]] object from an existing [[Mob]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Mob]] is not a [[Player]].
         * You should better use [[Actor.asPlayer]], that will return null in case your [[Mob]] is not a [[Player]].
         * @since 2.0
         */
        constructor(mob: Mob);
        
        /**
         * Constructs new [[Player]] object from an existing [[Actor]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Actor]] is not a [[Player]].
         * You should better use [[Actor.asPlayer]], that will return null in case your [[Actor]] is not a [[Player]].
         * @since 2.0
         */
        constructor(actor: Actor);
        
        /**
         * Copy of [[PlayerActor.addExperience]].
         * Adds experience to the player.
         * @since 2.0
         */
        addExperience(exp: number): void;
        
        /**
         * Copy of [[PlayerActor.addItemToInventory]].
         * Adds item to player's inventory.
         * @param dropRemaining if true, surplus will be dropped near player
         * @since 2.0
         */
        addItemToInventory(id: number, count: number, data: number, extra?: com.zhekasmirnov.innercore.api.NativeItemInstanceExtra, dropRemaining?: boolean): void;
        
        /**
         * Copy of [[PlayerActor.getExhaustion]]
         * @returns player's exhaustion
         * @since 2.0
         */
        getExhaustion(): number;
        
        /**
         * Copy of [[PlayerActor.getExperience]].
         * @returns player's experience.
         * @since 2.0
         */
        getExperience(): number;
        
        /**
         * Copy of [[PlayerActor.getGameMode]].
         * @returns player's gamemode.
         * @since 2.0
         */
        getGameMode(): number;
        
        /**
         * Copy of [[PlayerActor.getHunger]].
         * @returns player's hunger
         * @since 2.0
         */
        getHunger(): number;
        
        /**
         * Copy of [[PlayerActor.getInventorySlot]].
         * @returns inventory slot's contents.
         * @since 2.0
         */
        getInventorySlot(slot: number): ItemInstance;
        
        /**
         * Copy of [[PlayerActor.getLevel]].
         * @returns player's experience level.
         * @since 2.0
         */
        getExpLevel(): number;
        
        /**
         * Copy of [[PlayerActor.getSaturation]].
         * @returns player's saturation
         * @since 2.0
         */
        getSaturation(): number;
        
        /**
         * Copy of [[PlayerActor.getScore]].
         * @returns player's score
         * @since 2.0
         */
        getScore(): number;
        
        /**
         * Copy of [[PlayerActor.getSelectedSlot]].
         * @returns player's selected slot.
         * @since 2.0
         */
        getSelectedSlot(): number;
        
        /**
         * @since 2.0
         */
        invokeUseItemNoTarget(id: number, count: number, data: number, extra: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * Copy of [[PlayerActor.setExhaustion]]
         * Sets player exhaustion.
         * @since 2.0
         */
        setExhaustion(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setExperience]].
         * Sets player's experience.
         * @since 2.0
         */
        setExperience(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setHunger]]
         * Sets player's hunger.
         * @since 2.0
         */
        setHunger(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setInventorySlot]].
         * Sets inventory slot's contents.
         * @since 2.0
         */
        setInventorySlot(slot: number, id: number, count: number, data: number, extra: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 2.0
         */
        setExpLevel(level: number): void;
        
        /**
         * Copy of [[PlayerActor.setRespawnCoords]].
         * Sets respawn coords for the player.
         * @since 2.0
         */
        setRespawnCoords(x: number, y: number, z: number): void;
        
        /**
         * Copy of [[PlayerActor.setSaturation]].
         * Sets player's saturation.
         * @since 2.0
         */
        setSaturation(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setSelectedSlot]].
         * Sets player's selected slot.
         * @since 2.0
         */
        setSelectedSlot(slot: number): void;
        
        /**
         * Copy of [[PlayerActor.spawnExpOrbs]].
         * Spawns experience orbs on coords.
         * @param value experience points value
         * @since 2.0
         */
        spawnExpOrbs(x: number, y: number, z: number, value: number): void;
        
        /**
         * @since 2.0
         */
        isAutoJumpEnabled(): boolean;
        
        /**
         * @since 2.0
         */
        getCommandPermissionLevel(): number;
        
        /**
         * @since 2.0
         */
        setPermissions(level: number): void;
        
        /**
         * @since 2.0
         */
        getPlayerPermissionLevel(): number;
        
        /**
         * @since 2.0
         */
        displayChatMessage(prefix: any_string, message: any_string): void;
        
        /**
         * @since 2.0
         */
        displayClientMessage(message: any_string): void;
        
        /**
         * @since 2.0
         */
        displayWhisperMessage(s1: any_string, s2: any_string, s3: any_string, s4: any_string): void;
        
        /**
         * @since 2.0
         */
        startSleepInBed(x: number, y: number, z: number): void;
        
        /**
         * @since 2.0
         */
        stopSleepInBed(b1: boolean, b2: boolean): void;
        
        /**
         * @since 2.0
         */
        canStartSleepInBed(): boolean;
        
        /**
         * @since 2.0
         */
        getSleepTimer(): number;
        
        /**
         * @since 2.0
         */
        getPreviousTickSleepTimer(): number;
        
        /**
         * @since 2.0
         */
        openSign(x: number, y: number, z: number): void;
        
        /**
         * @since 2.0
         */
        playEmote(emote: any_string): void;
        
        /**
         * @since 2.0
         */
        isHostingPlayer(): boolean;
        
        /**
         * @since 2.0
         */
        setGameMode(mode: number): void;
        
        /**
         * @since 2.0
         */
        addLevels(levels: number): void;
        
        /**
         * @since 2.0
         */
        setFieldOfViewModifier(modifier: number): void;
        
        /**
         * @since 2.0
         */
        startCooldown(id: number): void;
        
        /**
         * @since 2.0
         */
        startGliding(): void;
        
        /**
         * @since 2.0
         */
        stopGliding(): void;
        
        /**
         * @since 2.0
         */
        isChatAllowed(): boolean;
        
        /**
         * @since 2.0
         */
        getHasSeenCredits(): boolean;
        
        /**
         * @since 2.0
         */
        setHasSeenCredits(seen: boolean): void;
        
        /**
         * @since 2.0
         */
        shouldShowCredits(): boolean;
        
        /**
         * @since 2.0
         */
        getLuck(): number;
        
        /**
         * @since 2.0
         */
        forceAllowEating(): boolean;
        
        /**
         * @since 2.0
         */
        eat(nutrition: number, saturation: number): void;
        
        /**
         * @since 2.0
         */
        eat2(nutrition: number, saturationModifier: number): void;
        
        /**
         * @since 2.0
         */
        causeFoodExhaustion(exhaustion: number): void;
        
        /**
         * @since 2.0
         */
        isBouncing(): boolean;
        
        /**
         * @since 2.0
         */
        isForcedRespawn(): boolean;
        
        /**
         * @since 2.0
         */
        getEnchantmentSeed(): number;
        
        /**
         * @since 2.0
         */
        setEnchantmentSeed(seed: number): void;
        
        /**
         * @since 2.0
         */
        getNewEnchantmentSeed(): number;
        
        /**
         * @since 2.0
         */
        getTicksUsingItem(): number;
        
        /**
         * @since 2.0
         */
        canUseOperatorBlocks(): boolean;
        
        /**
         * @since 2.0
         */
        isOperator(): boolean;
        
        /**
         * @since 2.0
         */
        isViewer(): boolean;
        
        /**
         * @since 2.0
         */
        getXpNeededForNextLevel(): number;
        
        /**
         * @since 2.0
         */
        getXpNeededForLevelRange(min: number, max: number): number;
        
        /**
         * @since 2.0
         */
        isEmoting(): boolean;
        
        /**
         * @since 2.0
         */
        getLevelProgress(): number;
        
        /**
         * @since 2.0
         */
        getMapIndex(): number;
        
        /**
         * @since 2.0
         */
        setMapIndex(index: number): void;
        
        /**
         * @since 2.0
         */
        getAttackDamage(): number;
        
        /**
         * @since 2.0
         */
        isHungry(): boolean;
        
        /**
         * @since 2.0
         */
        isInRaid(): boolean;
        
        /**
         * @since 2.0
         */
        hasOpenContainer(): boolean;
        
        /**
         * @since 2.0
         */
        isUsingItem(): boolean;
        
        /**
         * @since 2.0
         */
        getUnderwaterLightLevel(): number;
        
        /**
         * @since 2.0
         */
        setUnderwaterLightLevel(level: number): void;
        
        /**
         * @since 2.0
         */
        canBeSeenOnMap(): boolean;

    }

}