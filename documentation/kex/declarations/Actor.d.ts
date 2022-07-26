declare module KEX {

    /**
     * Wrapper for the native `Actor` class to get access
     * to the wide variety of the methods of any entity in the game.
     * @since 1.0
     */
    export class Actor extends java.lang.Object implements INativeInterface {

        /**
         * @returns pointer to the native object wrapped by the following [[Actor]] object,
         * represented by a signed 64-bit integer
         */
        getPointer(): number;

        /**
         * @returns whether the entity with given unique ID currently exists in the world.
         * Use it when you construct [[Actor]] and its subclasses, otherwise
         * you will get a [[java.lang.IllegalArgumentException]] telling you
         * there is no entity with given id.
         * @since 1.0
         */
        static isValid(entityUID: number): boolean;

        /**
         * Constructs new [[Actor]] object from given entity unique ID.
         * Use [[Actor.isValid]] first, to check if entity with this ID exists,
         * or a [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(entity: number);

        /**
         * @since 1.0
         */
        isBreakingObstruction(): boolean;
        
        /**
         * @since 1.0
         */
        setBreakingObstruction(breaking: boolean): void;
        
        /**
         * @since 1.0
         */
        isDancing(): boolean;
        
        /**
         * @since 1.0
         */
        setDancing(dancing: boolean): void;
        
        /**
         * @since 1.0
         */
        healEffects(value: number): void;
        
        /**
         * @since 1.0
         */
        getColor(): number;
        
        /**
         * @since 1.0
         */
        setColor(color: number): void;
        
        /**
         * @since 1.0
         */
        getColor2(): number;
        
        /**
         * @since 1.0
         */
        setColor2(color: number): void;
        
        /**
         * @since 1.0
         */
        isInClouds(): boolean;
        
        /**
         * @since 1.0
         */
        hasUniqueID(): boolean;
        
        /**
         * @since 1.0
         */
        getUniqueID(): number;
        
        /**
         * @since 1.0
         */
        getHurtDir(): number;
        
        /**
         * @since 1.0
         */
        setHurtDir(hurtDir: number): void;
        
        /**
         * @since 1.0
         */
        isEnchanted(): boolean;
        
        /**
         * @since 1.0
         */
        setEnchanted(enchanted: boolean): void;
        
        /**
         * @since 1.0
         */
        getMarkVariant(): number;
        
        /**
         * @since 1.0
         */
        setMarkVariant(variant: number): void;
        
        /**
         * @since 1.0
         */
        hasDimension(): boolean;
        
        /**
         * @since 1.0
         */
        canChangeDimensions(): boolean;
        
        /**
         * @since 1.0
         */
        getDimensionId(): number;
        
        /**
         * @since 1.0
         */
        getDimension(): Nullable<Dimension>;
        
        /**
         * @since 1.0
         */
        wasLastHitByPlayer(): boolean;
        
        /**
         * @since 1.0
         */
        isDelayedAttacking(): boolean;
        
        /**
         * @since 1.0
         */
        setDelayedAttacking(delayed: boolean): void;
        
        /**
         * @since 1.0
         */
        canBeginOrContinueClimbingLadder(): boolean;
        
        /**
         * @since 1.0
         */
        getStructuralIntegrity(): number;
        
        /**
         * @since 1.0
         */
        setStructuralIntegrity(integrity: number): void;
        
        /**
         * @since 1.0
         */
        hasLevel(): boolean;
        
        /**
         * @since 1.0
         */
        getLevel(): Nullable<Level>;
        
        /**
         * @since 1.0
         */
        getCameraDistance(): number;
        
        /**
         * @since 1.0
         */
        setCameraDistance(distance: number): void;
        
        /**
         * @since 1.0
         */
        isDoorOpener(): boolean;
        
        /**
         * @since 1.0
         */
        setDoorOpener(opener: boolean): void;
        
        /**
         * @since 1.0
         */
        hasType(type: number): boolean;
        
        /**
         * @since 1.0
         */
        isType(type: number): boolean;
        
        /**
         * @since 1.0
         */
        removeEffectNoUpdate(id: number): void;
        
        /**
         * @since 1.0
         */
        getEffect(effect: MobEffect): Nullable<MobEffectInstance>;
        
        /**
         * @since 1.0
         */
        getEffect(effectId: number): Nullable<MobEffectInstance>;
        
        /**
         * @since 1.0
         */
        getActiveEffectCount(): number;
        
        /**
         * @since 1.0
         */
        hasEffect(effect: MobEffect): boolean;
        
        /**
         * @since 1.0
         */
        hasEffect(effectId: number): boolean;
        
        /**
         * @since 1.0
         */
        hasAnyVisibleEffects(): boolean;
        
        /**
         * @since 1.0
         */
        removeEffect(id: number): void;
        
        /**
         * @since 1.0
         */
        hasAnyEffects(): boolean;
        
        /**
         * @since 1.0
         */
        removeAllEffects(): void;
        
        /**
         * @since 3.0
         */
        addEffect(effectInstance: MobEffectInstance): void;
        
        /**
         * @since 2.0
         */
        removeEffects(harmful: boolean, harmless: boolean): void;
        
        /**
         * @since 1.0
         */
        isInSnow(): boolean;
        
        /**
         * @since 1.0
         */
        canMate(mate: Actor): boolean;
        
        /**
         * @since 1.0
         */
        hasTickingArea(): boolean;
        
        /**
         * @since 1.0
         */
        getIsOnScreen(): boolean;
        
        /**
         * @since 1.0
         */
        setIsOnScreen(onScreen: boolean): void;
        
        /**
         * @since 1.0
         */
        isOverScaffolding(): boolean;
        
        /**
         * @since 1.0
         */
        isInScaffolding(): boolean;
        
        /**
         * @since 1.0
         */
        shouldOrphan(world: BlockSource): boolean;
        
        /**
         * @since 1.0
         */
        isOrphan(): boolean;
        
        /**
         * @since 1.0
         */
        isPredictedMovementEnabled(): boolean;
        
        /**
         * @since 1.0
         */
        isInRain(): boolean;
        
        /**
         * @since 1.0
         */
        isWASDControlled(): boolean;
        
        /**
         * @since 1.0
         */
        setWASDControlled(wasd: boolean): void;
        
        /**
         * @since 1.0
         */
        hasPriorityAmmunition(): boolean;
        
        /**
         * @since 1.0
         */
        hasRuntimeID(): boolean;
        
        /**
         * @since 1.0
         */
        getVariant(): number;
        
        /**
         * @since 1.0
         */
        setVariant(variant: number): void;
        
        /**
         * @since 1.0
         */
        isRiding(ridden: Actor): boolean;
        
        /**
         * @since 1.0
         */
        isRider(rider: Actor): boolean;
        
        /**
         * @since 1.0
         */
        removeAllRiders(b1: boolean, b2: boolean): void;
        
        /**
         * @since 1.0
         */
        hasPlayerRider(): boolean;
        
        /**
         * @since 1.0
         */
        isRiding(): boolean;
        
        /**
         * @since 1.0
         */
        getRide(): Nullable<Actor>;
        
        /**
         * @since 1.0
         */
        hasRider(): boolean;
        
        /**
         * @since 1.0
         */
        getStatusFlag(flag: number): boolean;
        
        /**
         * @since 1.0
         */
        isChested(): boolean;
        
        /**
         * @since 1.0
         */
        isStackable(): boolean;
        
        /**
         * @since 1.0
         */
        isResting(): boolean;
        
        /**
         * @since 1.0
         */
        setResting(resting: boolean): void;
        
        /**
         * @since 1.0
         */
        getHealth(): number;
        
        /**
         * @since 1.0
         */
        getMaxHealth(): number;
        
        /**
         * @since 1.0
         */
        getControllingSeat(): number;
        
        /**
         * @since 1.0
         */
        setControllingSeat(seat: number): void;
        
        /**
         * @since 1.0
         */
        isInsidePortal(): boolean;
        
        /**
         * @since 1.0
         */
        hasTeleported(): boolean;
        
        /**
         * @since 1.0
         */
        moveRelative(strafe: number, up: number, forward: number, friction: number): void;
        
        /**
         * @since 1.0 [[BlockSource]] is returned
         * @since 3.0 [[KEX.BlockSource]] is returned
         */
        getRegion(): Nullable<KEX.BlockSource>;
        
        /**
         * @since 1.0
         */
        isTame(): boolean;
        
        /**
         * @since 1.0
         */
        isLeashed(): boolean;
        
        /**
         * @since 1.0
         */
        isLeashableType(): boolean;
        
        /**
         * @since 1.0
         */
        isMoving(): boolean;
        
        /**
         * @since 1.0
         */
        setMoving(moving: boolean): void;
        
        /**
         * @since 1.0
         */
        hasTotemEquipped(): boolean;
        
        /**
         * @since 1.0
         */
        isAutonomous(): boolean;
        
        /**
         * @since 1.0
         */
        setAutonomous(auto: boolean): void;
        
        /**
         * @since 1.0
         */
        isPersistent(): boolean;
        
        /**
         * @since 1.0
         */
        removeEntity(): void;
        
        /**
         * @since 1.0
         */
        setCollidableMob(collidable: boolean): void;
        
        /**
         * @since 1.0
         */
        getCollidableMobNear(): boolean;
        
        /**
         * @since 1.0
         */
        setCollidableMobNear(collidable: boolean): void;
        
        /**
         * @since 1.0
         */
        hasFishingHook(): boolean;
        
        /**
         * @since 1.0
         */
        getChainedDamageEffects(): boolean;
        
        /**
         * @since 1.0
         */
        setChainedDamageEffects(chained: boolean): void;
        
        /**
         * @since 1.0
         */
        isPacified(): boolean;
        
        /**
         * @since 1.0
         */
        distanceTo(actor: Actor): number;
        
        /**
         * @since 1.0
         */
        distanceTo(x: number, y: number, z: number): number;
        
        /**
         * @since 1.0
         */
        canCurrentlySwim(): boolean;
        
        /**
         * @since 1.0
         */
        isSwimming(): boolean;
        
        /**
         * @since 1.0
         */
        isSwimmer(): boolean;
        
        /**
         * @since 1.0
         */
        setSwimmer(swimmer: boolean): void;
        
        /**
         * @since 1.0
         */
        hasFamily(family: any_string): boolean;
        
        /**
         * @since 1.0
         */
        hasAttributeBuff(buffType: number): boolean;
        
        /**
         * @since 1.0
         */
        isClientSide(): boolean;
        
        /**
         * @since 1.0
         */
        isControlledByLocalInstance(): boolean;
        
        /**
         * @since 1.0
         */
        isClimbing(): boolean;
        
        /**
         * @since 1.0
         */
        setClimbing(climbing: boolean): void;
        
        /**
         * @since 1.0
         */
        canClimb(): boolean;
        
        /**
         * @since 1.0
         */
        setCanClimb(canClimb: boolean): void;
        
        /**
         * @since 1.0
         */
        getSkinID(): number;
        
        /**
         * @since 1.0
         */
        setSkinID(id: number): void;
        
        /**
         * @since 1.0
         */
        getSpeedInMetersPerSecond(): number;
        
        /**
         * @since 1.0
         */
        getStrength(): number;
        
        /**
         * @since 1.0
         */
        setStrength(strength: number): void;
        
        /**
         * @since 1.0
         */
        getStrengthMax(): number;
        
        /**
         * @since 1.0
         */
        setStrengthMax(strength: number): void;
        
        /**
         * @since 1.0
         */
        getDamageNearbyMobs(): boolean;
        
        /**
         * @since 1.0
         */
        setDamageNearbyMobs(damage: boolean): void;
        
        /**
         * @since 1.0
         */
        isLayingDown(): boolean;
        
        /**
         * @since 1.0
         */
        setLayingDown(laying: boolean): void;
        
        /**
         * @since 1.0
         */
        getTempted(): boolean;
        
        /**
         * @since 1.0
         */
        setTempted(tempted: boolean): void;
        
        /**
         * @since 3.0
         */
        dropTowards(x: number, y: number, z: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        isTrading(): boolean;
        
        /**
         * @since 1.0
         */
        inDownwardFlowingLiquid(): boolean;
        
        /**
         * @since 1.0
         */
        getJumpDuration(): number;
        
        /**
         * @since 1.0
         */
        setJumpDuration(dur: number): void;
        
        /**
         * @since 1.0
         */
        isScared(): boolean;
        
        /**
         * @since 1.0
         */
        setScared(scared: boolean): void;
        
        /**
         * @since 1.0
         */
        isSitting(): boolean;
        
        /**
         * @since 1.0
         */
        setSitting(sitting: boolean): void;
        
        /**
         * @since 1.0
         */
        isBaby(): boolean;
        
        /**
         * @since 1.0
         */
        isIgnited(): boolean;
        
        /**
         * @since 1.0
         */
        getLifeSpan(): number;
        
        /**
         * @since 1.0
         */
        setLimitedLife(life: number): void;
        
        /**
         * @since 1.0
         */
        isInvisible(): boolean;
        
        /**
         * @since 1.0
         */
        setInvisible(invisible: boolean): void;
        
        /**
         * @since 1.0
         */
        isInWorld(): boolean;
        
        /**
         * @since 1.0
         */
        isInLove(): boolean;
        
        /**
         * @since 1.0
         */
        setInLove(lover: Actor): void;
        
        /**
         * @since 1.0
         */
        isDoorBreaker(): boolean;
        
        /**
         * @since 1.0
         */
        setDoorBreaker(breaker: boolean): void;
        
        /**
         * @since 1.0
         */
        isWalker(): boolean;
        
        /**
         * @since 1.0
         */
        setWalker(walker: boolean): void;
        
        /**
         * @since 1.0
         */
        isCharged(): boolean;
        
        /**
         * @since 1.0
         */
        setCharged(charged: boolean): void;
        
        /**
         * @since 1.0
         */
        canFly(): boolean;
        
        /**
         * @since 1.0
         */
        setCanFly(canFly: boolean): void;
        
        /**
         * @since 1.0
         */
        isInPrecipitation(): boolean;
        
        /**
         * @since 1.0
         */
        setAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
        
        /**
         * @since 1.0
         */
        isSafeToSleepNear(): boolean;
        
        /**
         * @since 1.0
         */
        setBlockTarget(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        isAngry(): boolean;
        
        /**
         * @since 1.0
         */
        isPowered(): boolean;
        
        /**
         * @since 1.0
         */
        setPowered(powered: boolean): void;
        
        /**
         * @since 1.0
         */
        isSheared(): boolean;
        
        /**
         * @since 1.0
         */
        isOutOfControl(): boolean;
        
        /**
         * @since 1.0
         */
        isSneaking(): boolean;
        
        /**
         * @since 1.0
         */
        setSneaking(sneaking: boolean): void;
        
        /**
         * @since 1.0
         */
        getTarget(): Nullable<Actor>;
        
        /**
         * @since 1.0
         */
        setTarget(target: Actor): void;
        
        /**
         * @since 1.0
         */
        setStunned(stunned: boolean): void;
        
        /**
         * @since 1.0
         */
        getTotalAirSupply(): number;
        
        /**
         * @since 1.0
         */
        getAirSupply(): number;
        
        /**
         * @since 1.0
         */
        isInThunderstorm(): boolean;
        
        /**
         * @since 1.0
         */
        isBribed(): boolean;
        
        /**
         * @since 1.0
         */
        isStanding(): boolean;
        
        /**
         * @since 1.0
         */
        setStanding(standing: boolean): void;
        
        /**
         * @since 1.0
         */
        getShakeTime(): number;
        
        /**
         * @since 1.0
         */
        setShakeTime(time: number): void;
        
        /**
         * @since 1.0
         */
        hasCategory(category: number): boolean;
        
        /**
         * @since 1.0
         */
        getVerticalSpeedInMetersPerSecond(): number;
        
        /**
         * @since 1.0
         */
        isTrusting(): boolean;
        
        /**
         * @since 1.0
         */
        getRadius(): number;
        
        /**
         * @since 1.0
         */
        hasComponent(component: any_string): boolean;
        
        /**
         * @since 1.0
         */
        getOnDeathExperience(): number;
        
        /**
         * @since 1.0
         */
        getInterpolatedBodyYaw(partialTicks: number): number;
        
        /**
         * @since 1.0
         */
        getYawSpeedInDegreesPerSecond(): number;
        
        /**
         * @since 1.0
         */
        getInterpolatedWalkAnimSpeed(partialTicks: number): number;
        
        /**
         * @since 1.0
         */
        isFireImmune(): boolean;
        
        /**
         * @since 1.0
         */
        breaksFallingBlocks(): boolean;
        
        /**
         * @since 1.0
         */
        chorusFruitTeleport(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        lerpTo(x: number, y: number, z: number, rotX: number, rotY: number): void;
        
        /**
         * @since 1.0
         */
        lerpMotion(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        getRidingHeight(): number;
        
        /**
         * @since 1.0
         */
        startRiding(ridden: Actor): void;
        
        /**
         * @since 1.0
         */
        addRider(rider: Actor): void;
        
        /**
         * @since 1.0
         */
        intersects(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        
        /**
         * @since 1.0
         */
        isFree(x: number, y: number, z: number): boolean;
        
        /**
         * @since 1.0
         */
        isFree(x: number, y: number, z: number, someFloat: number): boolean;
        
        /**
         * @since 1.0
         */
        isInWall(): boolean;
        
        /**
         * @since 1.0
         */
        canShowNameTag(): boolean;
        
        /**
         * @since 1.0
         */
        canExistInPeaceful(): boolean;
        
        /**
         * @since 1.0
         */
        setNameTagVisible(visible: boolean): void;
        
        /**
         * @since 1.0
         */
        getAlwaysShowNameTag(): boolean;
        
        /**
         * @since 1.0
         */
        isInWater(): boolean;
        
        /**
         * @since 1.0
         */
        hasEnteredWater(): boolean;
        
        /**
         * @since 1.0
         */
        isImmersedInWater(): boolean;
        
        /**
         * @since 1.0
         */
        isInWaterOrRain(): boolean;
        
        /**
         * @since 1.0
         */
        isInLava(): boolean;
        
        /**
         * @since 1.0
         */
        isUnderLiquid(materialType: number): boolean;
        
        /**
         * @since 1.0
         */
        isOverWater(): boolean;
        
        /**
         * @since 1.0
         */
        getShadowRadius(): number;
        
        /**
         * @since 1.0
         */
        canSeeInvisible(): boolean;
        
        /**
         * @since 1.0
         */
        canSee(actor: Actor): boolean;
        
        /**
         * @since 1.0
         */
        canSee(x: number, y: number, z: number): boolean;
        
        /**
         * @since 1.0
         */
        isImmobile(): boolean;
        
        /**
         * @since 1.0
         */
        isSilent(): boolean;
        
        /**
         * @since 1.0
         */
        isPickable(): boolean;
        
        /**
         * @since 1.0
         */
        isFishable(): boolean;
        
        /**
         * @since 1.0
         */
        isSleeping(): boolean;
        
        /**
         * @since 1.0
         */
        isShootable(): boolean;
        
        /**
         * @since 1.0
         */
        isBlocking(): boolean;
        
        /**
         * @since 1.0
         */
        isAlive(): boolean;
        
        /**
         * @since 1.0
         */
        isOnFire(): boolean;
        
        /**
         * @since 1.0
         */
        setOnFire(fireTicks: number): void;
        
        /**
         * @since 1.0
         */
        isOnHotBlock(): boolean;
        
        /**
         * @since 1.0
         */
        isCreativeModeAllowed(): boolean;
        
        /**
         * @since 1.0
         */
        isSurfaceMob(): boolean;
        
        /**
         * @since 1.0
         */
        isTargetable(): boolean;
        
        /**
         * @since 1.0
         */
        isLocalPlayer(): boolean;
        
        /**
         * @since 1.0
         */
        isPlayer(): boolean;
        
        /**
         * @since 1.0
         */
        canAttack(victim: Actor, someBool: boolean): boolean;
        
        /**
         * @since 1.0
         */
        isValidTarget(potentialTarget: Actor): boolean;
        
        /**
         * @since 1.0
         */
        attack(victim: Actor): void;
        
        /**
         * @since 1.0
         */
        performRangedAttack(victim: Actor, distanceFactor: number): void;
        
        /**
         * @since 1.0
         */
        getEquipmentCount(): number;
        
        /**
         * @since 1.0
         */
        getInventorySize(): number;
        
        /**
         * @since 1.0
         */
        getEquipSlots(): number;
        
        /**
         * @since 1.0
         */
        getChestSlots(): number;
        
        /**
         * @since 1.0
         */
        canPowerJump(): boolean;
        
        /**
         * @since 1.0
         */
        setCanPowerJump(canPowerJump: boolean): void;
        
        /**
         * @since 1.0
         */
        isJumping(): boolean;
        
        /**
         * @since 1.0
         */
        doFireHurt(amount: number): void;
        
        /**
         * @since 1.0
         */
        onLightningHit(): void;
        
        /**
         * @since 1.0
         */
        feed(amount: number): void;
        
        /**
         * @since 1.0
         */
        getPickRadius(): number;
        
        /**
         * @since 1.0
         */
        getArmor(slot: number): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setArmor(slot: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        getArmorMaterialTypeInSlot(slot: number): number;
        
        /**
         * @since 1.0
         */
        getArmorMaterialTextureTypeInSlot(slot: number): number;
        
        /**
         * @since 1.0
         */
        getEquippedSlot(slot: number): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setEquippedSlot(slot: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        getCarriedItem(): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setCarriedItem(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 3.0
         */
        setOffhandSlot(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        consumeTotem(): void;
        
        /**
         * @since 1.0
         */
        getPortalCooldown(): number;
        
        /**
         * @since 1.0
         */
        getPortalWaitTime(): number;
        
        /**
         * @since 1.0
         */
        canBePulledIntoVehicle(): boolean;
        
        /**
         * @since 1.0
         */
        inCaravan(): boolean;
        
        /**
         * @since 1.0
         */
        heal(amount: number): void;
        
        /**
         * @since 1.0
         */
        isInvertedHealAndHarm(): boolean;
        
        /**
         * @since 1.0
         */
        canBeAffected(effectId: number): boolean;
        
        /**
         * @since 3.0
         */
        canBeAffected(effect: MobEffectInstance): boolean;
        
        /**
         * @since 3.0
         */
        canBeAffectedByArrow(effect: MobEffectInstance): boolean;
        
        /**
         * @since 1.0
         */
        swing(): void;
        
        /**
         * @since 1.0
         */
        hasOutputSignal(signal: number): boolean;
        
        /**
         * @since 1.0
         */
        getOutputSignal(): number;
        
        /**
         * @since 1.0
         */
        getRiderYRotation(rider: Actor): number;
        
        /**
         * @since 1.0
         */
        isWorldBuilder(): boolean;
        
        /**
         * @since 1.0
         */
        isCreative(): boolean;
        
        /**
         * @since 1.0
         */
        isAdventure(): boolean;
        
        /**
         * @since 3.0
         */
        add(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 3.0
         */
        drop(id: number, count: number, data: number, extra: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>, someBool: boolean): void;
        
        /**
         * @since 1.0
         */
        setAuxValue(aux: number): void;
        
        /**
         * @since 1.0
         */
        wobble(): void;
        
        /**
         * @since 1.0
         */
        hasHurt(): boolean;
        
        /**
         * @since 1.0
         */
        startSpinAttack(): void;
        
        /**
         * @since 1.0
         */
        stopSpinAttack(): void;
        
        /**
         * @since 1.0
         */
        kill(): void;
        
        /**
         * @since 1.0
         */
        shouldTryMakeStepSound(): boolean;
        
        /**
         * @since 1.0
         */
        canMakeStepSound(): boolean;
        
        /**
         * @since 1.0
         */
        outOfWorld(): boolean;
        
        /**
         * @since 1.0
         */
        pushOutOfBlocks(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        doWaterSplashEffect(): void;
        
        /**
         * @since 1.0
         */
        spawnTrailBubbles(): void;
        
        /**
         * @since 2.0
         */
        isOnGround(): boolean;
        
        /**
         * @since 3.0
         */
        calculateAttackDamage(victim: number | Actor): number;
        
        /**
         * @since 3.0
         */
        calculateAttackDamage(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>, victim?: number | Actor): number;
        
        /**
         * @since 2.0
         */
        canBreatheAir(): boolean;
        
        /**
         * @since 2.0
         */
        canBreatheWater(): boolean;
        
        /**
         * @since 2.0
         */
        canBreatheLava(): boolean;
        
        /**
         * @since 2.0
         */
        canBreatheSolids(): boolean;
        
        /**
         * @since 2.0
         */
        generatesBubbles(): boolean;
        
        /**
         * @since 2.0
         */
        getInhaleTime(): number;
        
        /**
         * @since 2.0
         */
        getSuffocateTime(): number;
        
        /**
         * @since 2.0
         */
        setAirSupply(supply: number): void;
        
        /**
         * @since 2.0
         */
        getMaxAirSupply(): number;
        
        /**
         * @since 2.0
         */
        setMaxAirSupply(supply: number): void;
        
        /**
         * @since 2.0
         */
        getAirRegenPerTick(): number;
        
        /**
         * @since 1.4
         */
        isElytraFlying(): boolean;
        
        /**
         * @since 1.0
         */
        isMob(): boolean;
        
        /**
         * @since 1.0
         */
        asMob(): Nullable<Mob>;

        /**
         * @since 2.0
         */
        asPlayer(): Nullable<Player>;

        /**
         * @since 2.0
         */
        asLocalPlayer(): Nullable<LocalPlayer>;

    }

}