declare module KEX {

    /**
     * Wrapper for the native `Mob` class extending [[Actor]]
     * and giving access to more methods of entities of this class.
     * 
     * You can construct new [[Mob]] from an existing [[Actor]],
     * or call [[Actor.asMob]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]] is not a [[Mob]].
     * @since 1.0
     */
    export class Mob extends Actor {
        
        /**
         * Constructs new [[Mob]] object from given entity unique ID.
         * Use [[Actor.isValid]] and [[Actor.isMob]] first, to check if entity with
         * this ID exists and it's a [[Mob]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(entity: number);
        
        /**
         * Constructs new [[Mob]] object from an existing [[Actor]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Actor]] is not a [[Mob]].
         * You should better use [[Actor.asMob]], that will return null in case your [[Actor]] is not a [[Mob]].
         * @since 1.0
         */
        constructor(actor: Actor);
        
        /**
         * @since 1.0
         */
        setSleeping(sleeping: boolean): void;
        
        /**
         * @since 1.0
         */
        setSprinting(sprinting: boolean): void;
        
        /**
         * @since 1.0
         */
        getSpeed(): number;
        
        /**
         * @since 1.0
         */
        setSpeed(speed: number): void;
        
        /**
         * @since 1.0
         */
        getJumpPower(): number;
        
        /**
         * @since 1.0
         */
        getMeleeWeaponDamageBonus(mob: Mob): number;
        
        /**
         * @since 1.0
         */
        getMeleeKnockbackBonus(): number;
        
        /**
         * @since 1.0
         */
        travel(strafe: number, vertical: number, forward: number): void;
        
        /**
         * @since 1.0
         */
        applyFinalFriction(friction: number, discardFriction: boolean): void;
        
        /**
         * @since 1.0
         */
        isLookingAtAnEntity(): boolean;
        
        /**
         * @since 1.0
         */
        getItemUseDuration(): number;
        
        /**
         * @since 1.0
         */
        getItemUseStartupProgress(): number;
        
        /**
         * @since 1.0
         */
        getItemUseIntervalProgress(): number;
        
        /**
         * @since 1.0
         */
        getMaxHeadXRot(): number;
        
        /**
         * @since 1.0
         */
        getLastHurtByMob(): Nullable<Mob>;
        
        /**
         * @since 1.0
         */
        setLastHurtByMob(mob: Mob): void;
        
        /**
         * @since 1.0
         */
        getLastHurtMob(): Nullable<Actor>;
        
        /**
         * @since 1.0
         */
        setLastHurtMob(actor: Actor): void;
        
        /**
         * @since 1.0
         */
        isAlliedTo(mob: Mob): boolean;
        
        /**
         * @since 1.0
         */
        canBeControlledByRider(): boolean;
        
        /**
         * @since 1.0
         */
        leaveCaravan(): void;
        
        /**
         * @since 1.0
         */
        joinCaravan(caravanHead: Mob): void;
        
        /**
         * @since 1.0
         */
        hasCaravanTail(): boolean;
        
        /**
         * @since 1.0
         */
        getCaravanHead(): Nullable<Mob>;
        
        /**
         * @since 1.0
         */
        getArmorValue(): number;
        
        /**
         * @since 1.0
         */
        getArmorCoverPercentage(): number;
        
        /**
         * @since 1.0
         */
        getItemSlot(slot: number): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setItemSlot(slot: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        isTransitioningSitting(): boolean;
        
        /**
         * @since 1.0
         */
        setTransitioningSitting(transitioningSitting: boolean): void;
        
        /**
         * @since 1.0
         */
        canExistWhenDisallowMob(): boolean;
        
        /**
         * @since 1.0
         */
        jumpFromGround(): void;
        
        /**
         * @since 1.0
         */
        getNoActionTime(): number;
        
        /**
         * @since 1.0
         */
        resetNoActionTime(): void;
        
        /**
         * @since 1.0
         */
        wantsToBeJockey(): boolean;
        
        /**
         * @since 1.0
         */
        setWantsToBeJockey(wantsToBeJockey: boolean): void;
        
        /**
         * @since 1.0
         */
        isLayingEgg(): boolean;
        
        /**
         * @since 1.0
         */
        setIsLayingEgg(laying: boolean): void;
        
        /**
         * @since 1.0
         */
        getGlidingTicks(): number;
        
        /**
         * @since 1.0
         */
        getFrictionModifier(): number;
        
        /**
         * @since 1.0
         */
        setFrictionModifier(frictionModifier: number): void;
        
        /**
         * @since 1.0
         */
        snapToYBodyRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        snapToYHeadRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        incrementArrowCount(increment: number): void;
        
        /**
         * @since 3.0
         */
        canPickUpLoot(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): boolean;
        
        /**
         * @since 1.0
         */
        getJumpMultiplier(): number;
        
        /**
         * @since 1.0
         */
        hasBeenHurtByMobInLastTicks(ticks: number): boolean;
        
        /**
         * @since 1.0
         */
        isHeadInWater(): boolean;
        
        /**
         * @since 1.0
         */
        getMovementComponentCurrentSpeed(): number;
        
        /**
         * @since 1.0
         */
        setMovementComponentCurrentSpeed(speed: number): void;
        
        /**
         * @since 1.0
         */
        getFlightSpeed(): number;
        
        /**
         * @since 1.0
         */
        setFlightSpeed(speed: number): void;
        
        /**
         * @since 1.0
         */
        isInterpolationActive(): boolean;
        
        /**
         * @since 1.0
         */
        setInterpolationActive(interpolationActive: boolean): void;
        
        /**
         * @since 1.0
         */
        setYHeadRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        getRiderRotLimit(): number;
        
        /**
         * @since 1.0
         */
        setRiderRotLimit(lim: number): void;
        
        /**
         * @since 1.0
         */
        getRollCounter(): number;
        
        /**
         * @since 1.0
         */
        isRolling(): boolean;
        
        /**
         * @since 1.0
         */
        setRolling(rolling: boolean): void;
        
        /**
         * @since 1.0
         */
        getSpawnMethod(): number;
        
        /**
         * @since 1.0
         */
        setSpawnMethod(method: number): void;
        
        /**
         * @since 1.0
         */
        getXxa(): number;
        
        /**
         * @since 1.0
         */
        setXxa(xxa: number): void;
        
        /**
         * @since 1.0
         */
        getYya(): number;
        
        /**
         * @since 1.0
         */
        setYya(yya: number): void;
        
        /**
         * @since 1.0
         */
        getZza(): number;
        
        /**
         * @since 1.0
         */
        setZza(yya: number): void;
        
        /**
         * @since 1.0
         */
        getTravelType(): number;
        
        /**
         * @since 1.0
         */
        setSurfaceMob(isSurfaceMob: boolean): void;
        
        /**
         * @since 1.0
         */
        isPregnant(): boolean;
        
        /**
         * @since 1.0
         */
        setIsPregnant(pregnant: boolean): void;
        
        /**
         * @since 1.0
         */
        isNaturallySpawned(): boolean;
        
        /**
         * @since 1.0
         */
        setNaturallySpawned(naturallySpawned: boolean): void;
        
        /**
         * @since 1.0
         */
        getRiderLockedBodyRot(): number;
        
        /**
         * @since 1.0
         */
        setRiderLockedBodyRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        isFrostWalking(): boolean;
        
        /**
         * @since 1.0
         */
        setJumpVelRedux(redux: number): void;
        
        /**
         * @since 1.0
         */
        calcMoveRelativeSpeed(travelType: number): number;
        
        /**
         * @since 1.0
         */
        isEating(): boolean;
        
        /**
         * @since 1.0
         */
        setEating(eating: boolean): void;
        
        /**
         * @since 1.0
         */
        getEatCounter(): number;
        
        /**
         * @since 1.0
         */
        setEatCounter(counter: number): void;
        
        /**
         * @since 1.0
         */
        hasBoundOrigin(): boolean;
        
        /**
         * @since 1.0
         */
        getCaravanSize(): number;
        
        /**
         * @since 1.0
         */
        shouldApplyWaterGravity(): boolean;
        
        /**
         * @since 1.0
         */
        isGliding(): boolean;
        
        /**
         * @since 1.0
         */
        getFirstCaravanHead(): Nullable<Mob>;
        
        /**
         * @since 1.0
         */
        getYRotA(): number;
        
        /**
         * @since 1.0
         */
        setYRotA(yrota: number): void;
        
        /**
         * @since 1.0
         */
        setJumping(jumping: boolean): void;
        
        /**
         * @since 1.0
         */
        setSpeedModifier(speedModifier: number): void;
        
        /**
         * @since 1.0
         */
        getCurrentSwingDuration(): number;
        
        /**
         * @since 1.0
         */
        isSwinging(): boolean;
        
        /**
         * @since 1.0
         */
        calculateJumpImpulse(): number;
        
        /**
         * @since 1.0
         */
        isSlime(): boolean;
        
        /**
         * @since 1.0
         */
        asSlime(): Nullable<Slime>;

    }

}