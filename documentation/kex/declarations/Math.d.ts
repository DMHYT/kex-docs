declare module KEX {

    /**
     * Module containing different vector classes for various operations
     * @since 5.0
     */
    export module Math {

        /**
         * Vector of two floating point numbers
         * @since 5.0
         */
        export class Vec2f extends java.lang.Object {

            /**
             * ```java
             * new Vec2f(0.0f, 0.0f);
             * ```
             * @since 5.0
             */
            static readonly ZERO: Vec2f;

            /**
             * ```java
             * new Vec2f(1.0f, 1.0f);
             * ```
             * @since 5.0
             */
            static readonly ONE: Vec2f;

            /**
             * ```java
             * new Vec2f(1.0f, 0.0f);
             * ```
             * @since 5.0
             */
            static readonly UNIT_X: Vec2f;

            /**
             * ```java
             * new Vec2f(-1.0f, 0.0f);
             * ```
             * @since 5.0
             */
            static readonly NEGATIVE_UNIT_X: Vec2f;

            /**
             * ```java
             * new Vec2f(0.0f, 1.0f);
             * ```
             * @since 5.0
             */
            static readonly UNIT_Y: Vec2f;

            /**
             * ```java
             * new Vec2f(0.0f, -1.0f);
             * ```
             * @since 5.0
             */
            static readonly NEGATIVE_UNIT_Y: Vec2f;

            /**
             * ```java
             * new Vec2f(Float.MAX_VALUE, Float.MAX_VALUE);
             * ```
             * @since 5.0
             */
            static readonly MAX: Vec2f;

            /**
             * ```java
             * new Vec2f(Float.MIN_VALUE, Float.MIN_VALUE);
             * ```
             * @since 5.0
             */
            static readonly MIN: Vec2f;

            readonly x: number;
            readonly y: number;

            /**
             * Constructs a new [[Vec2f]] instance from two given coordinates
             * @since 5.0
             */
            constructor(x: number, y: number);

        }

        /**
         * Vector of three floating point numbers
         * @since 5.0
         */
        export class Vec3d extends java.lang.Object {

            /**
             * ```java
             * new Vec3d(0.0d, 0.0d, 0.0d);
             * ```
             * @since 5.0
             */
            static readonly ZERO: Vec3d;

            readonly x: number;
            readonly y: number;
            readonly z: number;

            /**
             * Constructs a new [[Vec3d]] instance from three given coordinates
             * @since 5.0
             */
            constructor(x: number, y: number, z: number);

            /**
             * Constructs a copy of given [[Vec3d]]
             * @since 5.0
             */
            constructor(vector: Vec3d);

            /**
             * @returns [[Vec3d]] which is a difference of `vec` and following [[Vec3d]]
             * @since 5.0
             */
            subtractReverse(vec: Vec3d): Vec3d;

            /**
             * @since 5.0
             */
            normalize(): Vec3d;

            /**
             * @returns sum of products of corresponding coordinates of the following vector and the given vector
             * @since 5.0
             */
            dotProduct(vec: Vec3d): number;

            /**
             * @since 5.0
             */
            crossProduct(vec: Vec3d): Vec3d;

            /**
             * @returns new vector, which as coordinates has differences of the corresponding coordinates of the following vector and the given vector
             * @since 5.0
             */
            subtract(vec: Vec3d): Vec3d;

            /**
             * Same as `subtract(vec: Vec3d)`, but with three coordinates instead of another vector
             * @since 5.0
             */
            subtract(x: number, y: number, z: number): Vec3d;

            /**
             * @returns new vector, which as coordinates has sums of the corresponding coordinates of the following vector and the given vector
             * @since 5.0
             */
            add(vec: Vec3d): Vec3d;

            /**
             * Same as `add(vec: Vec3d)`, but with three coordinates instead of another vector
             * @since 5.0
             */
            addVector(x: number, y: number, z: number): Vec3d;

            /**
             * @since 5.0
             */
            distanceTo(vec: Vec3d): number;

            /**
             * @since 5.0
             */
            squareDistanceTo(vec: Vec3d): number;

            /**
             * @since 5.0
             */
            squareDistanceTo(x: number, y: number, z: number): number;

            /**
             * @returns new vector with coordinates of the following vector multiplied by given factor 
             * @since 5.0
             */
            scale(factor: number): Vec3d;

            /**
             * @since 5.0
             */
            lengthVector(): number;

            /**
             * @since 5.0
             */
            lengthSquared(): number;

            /**
             * @since 5.0
             */
            getIntermediateWithXValue(vec: Vec3d, x: number): Nullable<Vec3d>;
            
            /**
             * @since 5.0
             */
            getIntermediateWithYValue(vec: Vec3d, x: number): Nullable<Vec3d>;
            
            /**
             * @since 5.0
             */
            getIntermediateWithZValue(vec: Vec3d, x: number): Nullable<Vec3d>;

            /**
             * @since 5.0
             */
            rotatePitch(pitch: number): Vec3d;

            /**
             * @since 5.0
             */
            rotateYaw(yaw: number): Vec3d;

            /**
             * @since 5.0
             */
            static fromPitchYawVector(pitchYawVec: Vec2f): Vec3d;

            /**
             * @since 5.0
             */
            static fromPitchYaw(pitch: number, yaw: number): Vec3d;

        }

        /**
         * Vector of three integer numbers
         * @since 5.0
         */
        export class Vec3i extends java.lang.Object implements java.lang.Comparable<Vec3i> {

            /**
             * ```java
             * new Vec3i(0, 0, 0);
             * ```
             * @since 5.0
             */
            static readonly NULL_VECTOR: Vec3i;

            readonly x: number;
            readonly y: number;
            readonly z: number;

            /**
             * Constructs a new [[Vec3i]] instance of given three **integer** coordinates
             * @since 5.0
             */
            constructor(x: number, y: number, z: number);

            /**
             * Implementation of [[java.lang.Comparable]]'s `compareTo` method
             * @since 5.0
             */
            compareTo(otherVec: Vec3i): number;

            /**
             * @returns X coordinate of the following vector
             * @since 5.0
             */
            getX(): number;

            /**
             * @returns Y coordinate of the following vector
             * @since 5.0
             */
            getY(): number;

            /**
             * @returns Z coordinate of the following vector
             * @since 5.0
             */
            getZ(): number;

            /**
             * @since 5.0
             */
            crossProduct(vec: Vec3i): Vec3i;

            /**
             * @since 5.0
             */
            getDistance(x: number, y: number, z: number): number;

            /**
             * @since 5.0
             */
            distanceSq(x: number, y: number, z: number): number;

            /**
             * @since 5.0
             */
            distanceSqToCenter(x: number, y: number, z: number): number;

            /**
             * @since 5.0
             */
            distanceSq(to: Vec3i): number;

        }

        /**
         * Class containing different useful operations to apply to coordinates set with a side
         * @since 5.0
         */
        export class Direction extends java.lang.Object {

            /**
             * ```java
             * new Direction(0, 1, -1, "down", AxisDirection.NEGATIVE, Axis.Y, new Vec3i(0, -1, 0));
             * ```
             * @since 5.0
             */
            static readonly DOWN: Direction;

            /**
             * ```java
             * new Direction(1, 0, -1, "up", AxisDirection.POSITIVE, Axis.Y, new Vec3i(0, 1, 0));
             * ```
             * @since 5.0
             */
            static readonly UP: Direction;

            /**
             * ```java
             * new Direction(2, 3, 2, "north", AxisDirection.NEGATIVE, Axis.Z, new Vec3i(0, 0, -1));
             * ```
             * @since 5.0
             */
            static readonly NORTH: Direction;
            
            /**
             * ```java
             * new Direction(3, 2, 0, "south", AxisDirection.POSITIVE, Axis.Z, new Vec3i(0, 0, 1));
             * ```
             * @since 5.0
             */
            static readonly SOUTH: Direction;

            /**
             * ```java
             * new Direction(4, 5, 1, "west", AxisDirection.NEGATIVE, Axis.X, new Vec3i(-1, 0, 0));
             * ```
             * @since 5.0
             */
            static readonly WEST: Direction;

            /**
             * ```java
             * new Direction(5, 4, 3, "east", AxisDirection.POSITIVE, Axis.X, new Vec3i(1, 0, 0));
             * ```
             * @since 5.0
             */
            static readonly EAST: Direction;

            /**
             * Since [[Direction]] is originally a Java enum, new instances cannot be constructed
             * @since 5.0
             */
            private constructor(index: number, opposite: number, horizontalIndex: number, name: any_string, axisDirection: Direction.AxisDirection, axis: Direction.Axis, directionVec: Vec3i);

            /**
             * @returns following [[Direction]]'s index from 0 to 5, which matches with
             * the values of the `side` field in [[Callback.ItemUseCoordinates]]
             * @since 5.0
             */
            getIndex(): number;

            /**
             * @since 5.0
             */
            getAxisDirection(): Direction.AxisDirection;

            /**
             * @returns [[Direction]] opposite to the following one
             * (north <=> south, east <=> west, up <=> down)
             * @since 5.0
             */
            getOpposite(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the given axis.
             * Throws [[java.lang.IllegalStateException]] if axis is invalid.
             * @since 5.0
             */
            rotateAround(axis: Direction.Axis): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the Y axis.
             * Throws [[java.lang.IllegalStateException]] for `UP` and `DOWN` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateY(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the X axis.
             * Throws [[java.lang.IllegalStateException]] for `EAST` and `WEST` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateX(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the Z axis.
             * Throws [[java.lang.IllegalStateException]] for `NORTH` and `SOUTH` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateZ(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] counterclockwise around the Y axis.
             * Throws [[java.lang.IllegalStateException]] for `UP` and `DOWN` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateYCCW(): Direction;

            /**
             * @returns value added to the X coordinate of a vector,
             * if the offset with the following [[Direction]] is applied to it. Can be 0 or 1.
             * @since 5.0
             */
            getFrontOffsetX(): number;

            /**
             * @returns value added to the Y coordinate of a vector,
             * if the offset with the following [[Direction]] is applied to it. Can be 0 or 1.
             * @since 5.0
             */
            getFrontOffsetY(): number;

            /**
             * @returns value added to the Z coordinate of a vector,
             * if the offset with the following [[Direction]] is applied to it. Can be 0 or 1.
             * @since 5.0
             */
            getFrontOffsetZ(): number;

            /**
             * @since 5.0
             */
            getAxis(): Direction.Axis;

            /**
             * @returns [[Direction]] instance by given name or null if
             * a [[Direction]] with given name does not exist
             * @since 5.0
             */
            static byName(name: any_string): Nullable<Direction>;

            /**
             * @since 5.0
             */
            static getFront(index: number): Direction;

            /**
             * @since 5.0
             */
            static getHorizontal(index: number): Direction;

            /**
             * @returns one of four horizontal [[Direction]]s
             * best matching to the given angle in **degrees**
             * @since 5.0
             */
            static fromAngle(angle: number): Direction;

            /**
             * @since 5.0
             */
            getHorizontalAngle(): number;

            /**
             * @returns one of six [[Direction]]s randomly chosen
             * using given [[java.util.Random]] object
             * @since 5.0
             */
            static random(rand: java.util.Random): Direction;

            /**
             * @since 5.0
             */
            static getFacingFromVector(x: number, y: number, z: number): Direction;

            /**
             * @returns [[Direction]] with matching axis and axis direction.
             * Throws [[java.lang.IllegalArgumentException]] if given axis and axis direction
             * don't have a corresponding [[Direction]] instance.
             * @since 5.0
             */
            static getFacingFromAxis(axisDir: Direction.AxisDirection, axis: Direction.Axis): Direction;

            /**
             * @since 5.0
             */
            getDirectionVec(): Vec3i;

            /**
             * Same as [[rotateAround]], but just returns the following [[Direction]] unchanged
             * instead of throwing a [[java.lang.IllegalStateException]] for the [[Direction]]s
             * incompatible for rotation around the given axis.
             * However, throws [[java.lang.IncompatibleClassChangeError]] if the given axis is invalid.
             * @since 5.0
             */
            getClockWise(axis: Direction.Axis): Direction;

            /**
             * Same as [[getClockWise]], but counterclockwise (unexpected?)
             * @since 5.0
             */
            getCounterClockWise(axis: Direction.Axis): Direction;

            /**
             * Same as [[rotateY]]
             * @since 5.0
             */
            getClockWise(): Direction;

            /**
             * Counterclockwise variant of [[getClockWise]] / [[rotateY]]
             * @since 5.0
             */
            getCounterClockWise(): Direction;

            /**
             * Same as [[rotateX]]
             * @since 5.0
             */
            getClockWiseX(): Direction;

            /**
             * Counterclockwise variant of [[getClockWiseX]] / [[rotateX]]
             * @since 5.0
             */
            getCounterClockWiseX(): Direction;

            /**
             * Same as [[rotateZ]]
             * @since 5.0
             */
            getClockWiseZ(): Direction;

            /**
             * Counterclockwise variant of [[getClockWiseZ]] / [[rotateZ]]
             * @since 5.0
             */
            getCounterClockWiseZ(): Direction;

        }

        /**
         * Helping classes of the [[Direction]] class
         * @since 5.0
         */
        export module Direction {

            /**
             * Class representing the axis, which the
             * [[Direction]]'s plane is perpendicular to.
             * @since 5.0
             */
            export class Axis extends java.lang.Object {

                /**
                 * ```java
                 * new Axis("x", Plane.HORIZONTAL);
                 * ```
                 * @since 5.0
                 */
                static readonly X: Axis;

                /**
                 * ```java
                 * new Axis("y", Plane.VERTICAL);
                 * ```
                 * @since 5.0
                 */
                static readonly Y: Axis;

                /**
                 * ```java
                 * new Axis("z", Plane.HORIZONTAL);
                 * ```
                 * @since 5.0
                 */
                static readonly Z: Axis;

                /**
                 * Since [[Axis]] is originally a Java enum, new instances cannot be constructed
                 * @since 5.0
                 */
                private constructor(name: any_string, plane: Plane);

                /**
                 * @returns [[Axis]] instance by given name or null if
                 * a [[Axis]] with given name does not exist
                 * @since 5.0
                 */
                static byName(name: any_string): Nullable<Axis>;

                /**
                 * @since 5.0
                 */
                isVertical(): boolean;

                /**
                 * @since 5.0
                 */
                isHorizontal(): boolean;

                /**
                 * @returns true if the following [[Axis]] matches with the
                 * given [[Direction]]'s [[Axis]], false otherwise or if given [[Direction]] is null
                 * @since 5.0
                 */
                apply(to: Nullable<Direction>): boolean;

                /**
                 * @since 5.0
                 */
                getPlane(): Plane;

            }

            /**
             * Class representing the direction of the [[Direction]]'s axis.
             * Basically whether the coordinate offset of a [[Direction]] is positive or negative.
             * @since 5.0
             */
            export class AxisDirection extends java.lang.Object {

                /**
                 * ```java
                 * new AxisDirection(1, "Towards positive");
                 * ```
                 * @since 5.0
                 */
                static readonly POSITIVE: AxisDirection;

                /**
                 * ```java
                 * new AxisDirection(-1, "Towards negative");
                 * ```
                 * @since 5.0
                 */
                static readonly NEGATIVE: AxisDirection;

                /**
                 * Since [[AxisDirection]] is originally a Java enum, new instances cannot be constructed
                 * @since 5.0
                 */
                private constructor(offset: number, description: any_string);

                /**
                 * @returns coordinate offset for the following [[AxisDirection]],
                 * 1 for `POSITIVE` and -1 for `NEGATIVE`
                 * @since 5.0
                 */
                getOffset(): number;

            }

            /**
             * Class representing the plane on which a certain [[Direction]] lays
             * @since 5.0
             */
            export class Plane extends java.lang.Object {

                /**@since 5.0 */
                static readonly HORIZONTAL: Plane;
                /**@since 5.0 */
                static readonly VERTICAL: Plane;

                /**
                 * Since [[Plane]] is originally a Java enum, new instances cannot be constructed
                 * @since 5.0
                 */
                private constructor();

                /**
                 * @returns array of [[Direction]]s laying on the following [[Plane]]
                 * @since 5.0
                 */
                facings(): Direction[];

                /**
                 * @returns one of [[Direction]]s laying on the following [[Plane]],
                 * randomly chosen using given [[java.util.Random]] object
                 * @since 5.0
                 */
                random(rand: java.util.Random): Direction;

                /**
                 * @returns true if the given [[Direction]] lays on the following [[Plane]],
                 * false otherwise or if the given [[Direction]] is null
                 * @since 5.0
                 */
                apply(dir: Nullable<Direction>): boolean;

                /**
                 * @returns iterator for the list of [[Direction]]s laying on the following [[Plane]]
                 * @since 5.0
                 */
                iterator(): java.util.Iterator<Direction>;

            }

        }

        /**
         * Extension of [[Vec3i]] more frequently used when
         * a vector represents the position of a certain block in the world
         * @since 5.0
         */
        export class BlockPos extends Vec3i {

            /**
             * ```java
             * new BlockPos(0, 0, 0);
             * ```
             * @since 5.0
             */
            static readonly ORIGIN: BlockPos;

            /**
             * Constructs a new [[BlockPos]] instance from three given coordinates
             * @since 5.0
             */
            constructor(x: number, y: number, z: number);

            /**
             * Constructs a new [[BlockPos]] instance from floored coordinates of the given [[Vec3d]]
             * @since 5.0
             */
            constructor(vec: Vec3d);
            
            /**
             * Constructs a new [[BlockPos]] instance from coordinates of the given [[Vec3i]]
             * @since 5.0
             */
            constructor(vec: Vec3i);

            /**
             * @returns new [[BlockPos]] instance from the following one with given offsets
             * @since 5.0
             */
            add(x: number, y: number, z: number): BlockPos;

            /**
             * @returns new [[BlockPos]] instance from the following one with given offsets as a vector
             * @since 5.0
             */
            add(vec: Vec3i): BlockPos;

            /**
             * @returns new [[BlockPos]] instance, which as coordinates has differences
             * of corresponding coordinates of the following [[BlockPos]] and given [[Vec3i]]
             * @since 5.0
             */
            subtract(vec: Vec3i): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            up(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            down(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            north(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            south(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            west(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            east(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @returns new [[BlockPos]] with given offset to given [[Direction]]
             * @since 5.0
             */
            offset(facing: Direction, n?: number): BlockPos;

            /**
             * @since 5.0
             */
            crossProduct(vec: Vec3i): BlockPos;

            /**
             * @returns coordinates of the following [[BlockPos]]
             * packed into a signed 64-bit integer
             * @since 5.0
             */
            toLong(): number;

            /**
             * @returns [[BlockPos]] from given 64-bit integer representation
             * @since 5.0
             */
            static fromLong(serialized: number): BlockPos;

        }

        /**
         * Class primarily used to apply rotation to block states
         * @since 5.0
         */
        export class Rotation extends java.lang.Object {

            /**@since 5.0 */
            static readonly NONE: Rotation;
            /**@since 5.0 */
            static readonly CLOCKWISE_90: Rotation;
            /**@since 5.0 */
            static readonly CLOCKWISE_180: Rotation;
            /**@since 5.0 */
            static readonly COUNTERCLOCKWISE_90: Rotation;

            /**
             * Since [[Rotation]] is originally a Java enum, new instances cannot be constructed
             * @since 5.0
             */
            private constructor();

            /**
             * @returns the following [[Rotation]] with another one applied
             * @since 5.0
             */
            getRotated(rot: Rotation): Rotation;

            /**
             * @returns given [[Direction]] rotated the way the following [[Rotation]] defines
             * @since 5.0
             */
            rotate(dir: Direction): Direction;

            /**
             * @returns one of [[Rotation]]s randomly chosen
             * using given [[java.util.Random]] object
             * @since 5.0
             */
            getRandom(rand: java.util.Random): Rotation;

            /**
             * @returns list of all [[Rotation]]s shuffled randomly
             * using given [[java.util.Random]] object
             * @since 5.0
             */
            getShuffled(rand: java.util.Random): java.util.List<Rotation>;

        }

        /**
         * Class primarily used to apply mirroring to block states
         * @since 5.0
         */
        export class Mirror extends java.lang.Object {

            /**@since 5.0 */
            static readonly NONE: Mirror;
            /**@since 5.0 */
            static readonly LEFT_RIGHT: Mirror;
            /**@since 5.0 */
            static readonly FRONT_BACK: Mirror;

            /**
             * Since [[Mirror]] is originally a Java enum, new instances cannot be constructed
             * @since 5.0
             */
            private constructor();

            /**
             * @since 5.0
             */
            getRotation(dir: Direction): Rotation;

            /**
             * @returns given [[Direction]] mirrored the way the following [[Mirror]] defines
             * @since 5.0
             */
            mirror(dir: Direction): Direction;

        }

    }

}