
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Subtopic
 * 
 */
export type Subtopic = $Result.DefaultSelection<Prisma.$SubtopicPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model UserCourseProgress
 * 
 */
export type UserCourseProgress = $Result.DefaultSelection<Prisma.$UserCourseProgressPayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model RevisionHub
 * 
 */
export type RevisionHub = $Result.DefaultSelection<Prisma.$RevisionHubPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  public: 'public',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtopic`: Exposes CRUD operations for the **Subtopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtopics
    * const subtopics = await prisma.subtopic.findMany()
    * ```
    */
  get subtopic(): Prisma.SubtopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCourseProgress`: Exposes CRUD operations for the **UserCourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourseProgresses
    * const userCourseProgresses = await prisma.userCourseProgress.findMany()
    * ```
    */
  get userCourseProgress(): Prisma.UserCourseProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revisionHub`: Exposes CRUD operations for the **RevisionHub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevisionHubs
    * const revisionHubs = await prisma.revisionHub.findMany()
    * ```
    */
  get revisionHub(): Prisma.RevisionHubDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Subtopic: 'Subtopic',
    Quiz: 'Quiz',
    Subscription: 'Subscription',
    UserCourseProgress: 'UserCourseProgress',
    QuizAttempt: 'QuizAttempt',
    RevisionHub: 'RevisionHub'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "subtopic" | "quiz" | "subscription" | "userCourseProgress" | "quizAttempt" | "revisionHub"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CourseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CourseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Subtopic: {
        payload: Prisma.$SubtopicPayload<ExtArgs>
        fields: Prisma.SubtopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          findFirst: {
            args: Prisma.SubtopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          findMany: {
            args: Prisma.SubtopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          create: {
            args: Prisma.SubtopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          createMany: {
            args: Prisma.SubtopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubtopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          update: {
            args: Prisma.SubtopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          deleteMany: {
            args: Prisma.SubtopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubtopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          aggregate: {
            args: Prisma.SubtopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtopic>
          }
          groupBy: {
            args: Prisma.SubtopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtopicGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubtopicFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubtopicAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubtopicCountArgs<ExtArgs>
            result: $Utils.Optional<SubtopicCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuizFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuizAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscriptionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscriptionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      UserCourseProgress: {
        payload: Prisma.$UserCourseProgressPayload<ExtArgs>
        fields: Prisma.UserCourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          findMany: {
            args: Prisma.UserCourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>[]
          }
          create: {
            args: Prisma.UserCourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          createMany: {
            args: Prisma.UserCourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          update: {
            args: Prisma.UserCourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourseProgress>
          }
          groupBy: {
            args: Prisma.UserCourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserCourseProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserCourseProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseProgressCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuizAttemptFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuizAttemptAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      RevisionHub: {
        payload: Prisma.$RevisionHubPayload<ExtArgs>
        fields: Prisma.RevisionHubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevisionHubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevisionHubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>
          }
          findFirst: {
            args: Prisma.RevisionHubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevisionHubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>
          }
          findMany: {
            args: Prisma.RevisionHubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>[]
          }
          create: {
            args: Prisma.RevisionHubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>
          }
          createMany: {
            args: Prisma.RevisionHubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RevisionHubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>
          }
          update: {
            args: Prisma.RevisionHubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>
          }
          deleteMany: {
            args: Prisma.RevisionHubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevisionHubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevisionHubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHubPayload>
          }
          aggregate: {
            args: Prisma.RevisionHubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevisionHub>
          }
          groupBy: {
            args: Prisma.RevisionHubGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisionHubGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RevisionHubFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RevisionHubAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RevisionHubCountArgs<ExtArgs>
            result: $Utils.Optional<RevisionHubCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    subtopic?: SubtopicOmit
    quiz?: QuizOmit
    subscription?: SubscriptionOmit
    userCourseProgress?: UserCourseProgressOmit
    quizAttempt?: QuizAttemptOmit
    revisionHub?: RevisionHubOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subscriptions: number
    progress: number
    quizAttempts: number
    revisionHub: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    quizAttempts?: boolean | UserCountOutputTypeCountQuizAttemptsArgs
    revisionHub?: boolean | UserCountOutputTypeCountRevisionHubArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRevisionHubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionHubWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    subtopics: number
    subscriptions: number
    progress: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopics?: boolean | CourseCountOutputTypeCountSubtopicsArgs
    subscriptions?: boolean | CourseCountOutputTypeCountSubscriptionsArgs
    progress?: boolean | CourseCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSubtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtopicWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }


  /**
   * Count Type SubtopicCountOutputType
   */

  export type SubtopicCountOutputType = {
    quizzes: number
    progress: number
    revisionHub: number
  }

  export type SubtopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | SubtopicCountOutputTypeCountQuizzesArgs
    progress?: boolean | SubtopicCountOutputTypeCountProgressArgs
    revisionHub?: boolean | SubtopicCountOutputTypeCountRevisionHubArgs
  }

  // Custom InputTypes
  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtopicCountOutputType
     */
    select?: SubtopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountRevisionHubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionHubWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    attempts: number
    revisionHub: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | QuizCountOutputTypeCountAttemptsArgs
    revisionHub?: boolean | QuizCountOutputTypeCountRevisionHubArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountRevisionHubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionHubWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    revisionHub?: boolean | User$revisionHubArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    revisionHub?: boolean | User$revisionHubArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      progress: Prisma.$UserCourseProgressPayload<ExtArgs>[]
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      revisionHub: Prisma.$RevisionHubPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizAttempts<T extends User$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revisionHub<T extends User$revisionHubArgs<ExtArgs> = {}>(args?: Subset<T, User$revisionHubArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * User.quizAttempts
   */
  export type User$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * User.revisionHub
   */
  export type User$revisionHubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    where?: RevisionHubWhereInput
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    cursor?: RevisionHubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionHubScalarFieldEnum | RevisionHubScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    price: number | null
    category: string | null
    difficulty: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    price: number | null
    category: string | null
    difficulty: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    price: number
    category: number
    difficulty: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    price?: true
    category?: true
    difficulty?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    price?: true
    category?: true
    difficulty?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    price?: true
    category?: true
    difficulty?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    thumbnail: string | null
    price: number
    category: string | null
    difficulty: string | null
    duration: number | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    price?: boolean
    category?: boolean
    difficulty?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subtopics?: boolean | Course$subtopicsArgs<ExtArgs>
    subscriptions?: boolean | Course$subscriptionsArgs<ExtArgs>
    progress?: boolean | Course$progressArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    price?: boolean
    category?: boolean
    difficulty?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "thumbnail" | "price" | "category" | "difficulty" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopics?: boolean | Course$subtopicsArgs<ExtArgs>
    subscriptions?: boolean | Course$subscriptionsArgs<ExtArgs>
    progress?: boolean | Course$progressArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      subtopics: Prisma.$SubtopicPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      progress: Prisma.$UserCourseProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      thumbnail: string | null
      price: number
      category: string | null
      difficulty: string | null
      duration: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * @param {CourseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const course = await prisma.course.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CourseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Course.
     * @param {CourseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const course = await prisma.course.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CourseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtopics<T extends Course$subtopicsArgs<ExtArgs> = {}>(args?: Subset<T, Course$subtopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Course$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends Course$progressArgs<ExtArgs> = {}>(args?: Subset<T, Course$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly thumbnail: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly category: FieldRef<"Course", 'String'>
    readonly difficulty: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course findRaw
   */
  export type CourseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Course aggregateRaw
   */
  export type CourseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Course.subtopics
   */
  export type Course$subtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    cursor?: SubtopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Course.subscriptions
   */
  export type Course$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Course.progress
   */
  export type Course$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Subtopic
   */

  export type AggregateSubtopic = {
    _count: SubtopicCountAggregateOutputType | null
    _min: SubtopicMinAggregateOutputType | null
    _max: SubtopicMaxAggregateOutputType | null
  }

  export type SubtopicMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    description: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtopicMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    description: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtopicCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    description: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubtopicMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    description?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtopicMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    description?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtopicCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    description?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubtopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtopic to aggregate.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtopics
    **/
    _count?: true | SubtopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtopicMaxAggregateInputType
  }

  export type GetSubtopicAggregateType<T extends SubtopicAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtopic[P]>
      : GetScalarType<T[P], AggregateSubtopic[P]>
  }




  export type SubtopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtopicWhereInput
    orderBy?: SubtopicOrderByWithAggregationInput | SubtopicOrderByWithAggregationInput[]
    by: SubtopicScalarFieldEnum[] | SubtopicScalarFieldEnum
    having?: SubtopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtopicCountAggregateInputType | true
    _min?: SubtopicMinAggregateInputType
    _max?: SubtopicMaxAggregateInputType
  }

  export type SubtopicGroupByOutputType = {
    id: string
    courseId: string
    title: string
    description: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubtopicCountAggregateOutputType | null
    _min: SubtopicMinAggregateOutputType | null
    _max: SubtopicMaxAggregateOutputType | null
  }

  type GetSubtopicGroupByPayload<T extends SubtopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtopicGroupByOutputType[P]>
            : GetScalarType<T[P], SubtopicGroupByOutputType[P]>
        }
      >
    >


  export type SubtopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    description?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    quizzes?: boolean | Subtopic$quizzesArgs<ExtArgs>
    progress?: boolean | Subtopic$progressArgs<ExtArgs>
    revisionHub?: boolean | Subtopic$revisionHubArgs<ExtArgs>
    _count?: boolean | SubtopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>



  export type SubtopicSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    description?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubtopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "description" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["subtopic"]>
  export type SubtopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    quizzes?: boolean | Subtopic$quizzesArgs<ExtArgs>
    progress?: boolean | Subtopic$progressArgs<ExtArgs>
    revisionHub?: boolean | Subtopic$revisionHubArgs<ExtArgs>
    _count?: boolean | SubtopicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubtopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subtopic"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      progress: Prisma.$UserCourseProgressPayload<ExtArgs>[]
      revisionHub: Prisma.$RevisionHubPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      title: string
      description: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subtopic"]>
    composites: {}
  }

  type SubtopicGetPayload<S extends boolean | null | undefined | SubtopicDefaultArgs> = $Result.GetResult<Prisma.$SubtopicPayload, S>

  type SubtopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubtopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtopicCountAggregateInputType | true
    }

  export interface SubtopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtopic'], meta: { name: 'Subtopic' } }
    /**
     * Find zero or one Subtopic that matches the filter.
     * @param {SubtopicFindUniqueArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtopicFindUniqueArgs>(args: SelectSubset<T, SubtopicFindUniqueArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subtopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubtopicFindUniqueOrThrowArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtopicFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindFirstArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtopicFindFirstArgs>(args?: SelectSubset<T, SubtopicFindFirstArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindFirstOrThrowArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtopicFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtopics
     * const subtopics = await prisma.subtopic.findMany()
     * 
     * // Get first 10 Subtopics
     * const subtopics = await prisma.subtopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubtopicFindManyArgs>(args?: SelectSubset<T, SubtopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subtopic.
     * @param {SubtopicCreateArgs} args - Arguments to create a Subtopic.
     * @example
     * // Create one Subtopic
     * const Subtopic = await prisma.subtopic.create({
     *   data: {
     *     // ... data to create a Subtopic
     *   }
     * })
     * 
     */
    create<T extends SubtopicCreateArgs>(args: SelectSubset<T, SubtopicCreateArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subtopics.
     * @param {SubtopicCreateManyArgs} args - Arguments to create many Subtopics.
     * @example
     * // Create many Subtopics
     * const subtopic = await prisma.subtopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtopicCreateManyArgs>(args?: SelectSubset<T, SubtopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subtopic.
     * @param {SubtopicDeleteArgs} args - Arguments to delete one Subtopic.
     * @example
     * // Delete one Subtopic
     * const Subtopic = await prisma.subtopic.delete({
     *   where: {
     *     // ... filter to delete one Subtopic
     *   }
     * })
     * 
     */
    delete<T extends SubtopicDeleteArgs>(args: SelectSubset<T, SubtopicDeleteArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subtopic.
     * @param {SubtopicUpdateArgs} args - Arguments to update one Subtopic.
     * @example
     * // Update one Subtopic
     * const subtopic = await prisma.subtopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtopicUpdateArgs>(args: SelectSubset<T, SubtopicUpdateArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subtopics.
     * @param {SubtopicDeleteManyArgs} args - Arguments to filter Subtopics to delete.
     * @example
     * // Delete a few Subtopics
     * const { count } = await prisma.subtopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtopicDeleteManyArgs>(args?: SelectSubset<T, SubtopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtopics
     * const subtopic = await prisma.subtopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtopicUpdateManyArgs>(args: SelectSubset<T, SubtopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtopic.
     * @param {SubtopicUpsertArgs} args - Arguments to update or create a Subtopic.
     * @example
     * // Update or create a Subtopic
     * const subtopic = await prisma.subtopic.upsert({
     *   create: {
     *     // ... data to create a Subtopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtopic we want to update
     *   }
     * })
     */
    upsert<T extends SubtopicUpsertArgs>(args: SelectSubset<T, SubtopicUpsertArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtopics that matches the filter.
     * @param {SubtopicFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subtopic = await prisma.subtopic.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubtopicFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subtopic.
     * @param {SubtopicAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subtopic = await prisma.subtopic.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubtopicAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicCountArgs} args - Arguments to filter Subtopics to count.
     * @example
     * // Count the number of Subtopics
     * const count = await prisma.subtopic.count({
     *   where: {
     *     // ... the filter for the Subtopics we want to count
     *   }
     * })
    **/
    count<T extends SubtopicCountArgs>(
      args?: Subset<T, SubtopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubtopicAggregateArgs>(args: Subset<T, SubtopicAggregateArgs>): Prisma.PrismaPromise<GetSubtopicAggregateType<T>>

    /**
     * Group by Subtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubtopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtopicGroupByArgs['orderBy'] }
        : { orderBy?: SubtopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubtopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subtopic model
   */
  readonly fields: SubtopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizzes<T extends Subtopic$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends Subtopic$progressArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revisionHub<T extends Subtopic$revisionHubArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$revisionHubArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subtopic model
   */
  interface SubtopicFieldRefs {
    readonly id: FieldRef<"Subtopic", 'String'>
    readonly courseId: FieldRef<"Subtopic", 'String'>
    readonly title: FieldRef<"Subtopic", 'String'>
    readonly description: FieldRef<"Subtopic", 'String'>
    readonly notes: FieldRef<"Subtopic", 'String'>
    readonly createdAt: FieldRef<"Subtopic", 'DateTime'>
    readonly updatedAt: FieldRef<"Subtopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subtopic findUnique
   */
  export type SubtopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic findUniqueOrThrow
   */
  export type SubtopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic findFirst
   */
  export type SubtopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtopics.
     */
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic findFirstOrThrow
   */
  export type SubtopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtopics.
     */
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic findMany
   */
  export type SubtopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopics to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic create
   */
  export type SubtopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtopic.
     */
    data: XOR<SubtopicCreateInput, SubtopicUncheckedCreateInput>
  }

  /**
   * Subtopic createMany
   */
  export type SubtopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtopics.
     */
    data: SubtopicCreateManyInput | SubtopicCreateManyInput[]
  }

  /**
   * Subtopic update
   */
  export type SubtopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtopic.
     */
    data: XOR<SubtopicUpdateInput, SubtopicUncheckedUpdateInput>
    /**
     * Choose, which Subtopic to update.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic updateMany
   */
  export type SubtopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtopics.
     */
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyInput>
    /**
     * Filter which Subtopics to update
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to update.
     */
    limit?: number
  }

  /**
   * Subtopic upsert
   */
  export type SubtopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtopic to update in case it exists.
     */
    where: SubtopicWhereUniqueInput
    /**
     * In case the Subtopic found by the `where` argument doesn't exist, create a new Subtopic with this data.
     */
    create: XOR<SubtopicCreateInput, SubtopicUncheckedCreateInput>
    /**
     * In case the Subtopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtopicUpdateInput, SubtopicUncheckedUpdateInput>
  }

  /**
   * Subtopic delete
   */
  export type SubtopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter which Subtopic to delete.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic deleteMany
   */
  export type SubtopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtopics to delete
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to delete.
     */
    limit?: number
  }

  /**
   * Subtopic findRaw
   */
  export type SubtopicFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subtopic aggregateRaw
   */
  export type SubtopicAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subtopic.quizzes
   */
  export type Subtopic$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Subtopic.progress
   */
  export type Subtopic$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * Subtopic.revisionHub
   */
  export type Subtopic$revisionHubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    where?: RevisionHubWhereInput
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    cursor?: RevisionHubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionHubScalarFieldEnum | RevisionHubScalarFieldEnum[]
  }

  /**
   * Subtopic without action
   */
  export type SubtopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    duration: number | null
  }

  export type QuizSumAggregateOutputType = {
    duration: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    subtopicId: string | null
    title: string | null
    duration: number | null
    isPreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    subtopicId: string | null
    title: string | null
    duration: number | null
    isPreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    subtopicId: number
    title: number
    questions: number
    duration: number
    isPreview: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    duration?: true
  }

  export type QuizSumAggregateInputType = {
    duration?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    subtopicId?: true
    title?: true
    duration?: true
    isPreview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    subtopicId?: true
    title?: true
    duration?: true
    isPreview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    subtopicId?: true
    title?: true
    questions?: true
    duration?: true
    isPreview?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    subtopicId: string
    title: string
    questions: JsonValue
    duration: number | null
    isPreview: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtopicId?: boolean
    title?: boolean
    questions?: boolean
    duration?: boolean
    isPreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    attempts?: boolean | Quiz$attemptsArgs<ExtArgs>
    revisionHub?: boolean | Quiz$revisionHubArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    subtopicId?: boolean
    title?: boolean
    questions?: boolean
    duration?: boolean
    isPreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subtopicId" | "title" | "questions" | "duration" | "isPreview" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtopic?: boolean | SubtopicDefaultArgs<ExtArgs>
    attempts?: boolean | Quiz$attemptsArgs<ExtArgs>
    revisionHub?: boolean | Quiz$revisionHubArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      subtopic: Prisma.$SubtopicPayload<ExtArgs>
      attempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      revisionHub: Prisma.$RevisionHubPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subtopicId: string
      title: string
      questions: Prisma.JsonValue
      duration: number | null
      isPreview: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * @param {QuizFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const quiz = await prisma.quiz.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuizFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Quiz.
     * @param {QuizAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const quiz = await prisma.quiz.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuizAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtopic<T extends SubtopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubtopicDefaultArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends Quiz$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revisionHub<T extends Quiz$revisionHubArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$revisionHubArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly subtopicId: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly questions: FieldRef<"Quiz", 'Json'>
    readonly duration: FieldRef<"Quiz", 'Int'>
    readonly isPreview: FieldRef<"Quiz", 'Boolean'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz findRaw
   */
  export type QuizFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Quiz aggregateRaw
   */
  export type QuizAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Quiz.attempts
   */
  export type Quiz$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * Quiz.revisionHub
   */
  export type Quiz$revisionHubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    where?: RevisionHubWhereInput
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    cursor?: RevisionHubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionHubScalarFieldEnum | RevisionHubScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    paymentId: string | null
    orderId: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    paymentId: string | null
    orderId: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    paymentId: number
    orderId: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    paymentId?: true
    orderId?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    paymentId?: true
    orderId?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    paymentId?: true
    orderId?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    paymentId: string | null
    orderId: string | null
    status: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    paymentId?: boolean
    orderId?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    paymentId?: boolean
    orderId?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "paymentId" | "orderId" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      paymentId: string | null
      orderId: string | null
      status: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * @param {SubscriptionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscription = await prisma.subscription.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscriptionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subscription.
     * @param {SubscriptionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscription = await prisma.subscription.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscriptionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly courseId: FieldRef<"Subscription", 'String'>
    readonly paymentId: FieldRef<"Subscription", 'String'>
    readonly orderId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly expiresAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription findRaw
   */
  export type SubscriptionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription aggregateRaw
   */
  export type SubscriptionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model UserCourseProgress
   */

  export type AggregateUserCourseProgress = {
    _count: UserCourseProgressCountAggregateOutputType | null
    _avg: UserCourseProgressAvgAggregateOutputType | null
    _sum: UserCourseProgressSumAggregateOutputType | null
    _min: UserCourseProgressMinAggregateOutputType | null
    _max: UserCourseProgressMaxAggregateOutputType | null
  }

  export type UserCourseProgressAvgAggregateOutputType = {
    progress: number | null
    quizzesCompleted: number | null
  }

  export type UserCourseProgressSumAggregateOutputType = {
    progress: number | null
    quizzesCompleted: number | null
  }

  export type UserCourseProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    subtopicId: string | null
    progress: number | null
    quizzesCompleted: number | null
    lastAccessed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCourseProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    subtopicId: string | null
    progress: number | null
    quizzesCompleted: number | null
    lastAccessed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCourseProgressCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    subtopicId: number
    progress: number
    quizzesCompleted: number
    lastAccessed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCourseProgressAvgAggregateInputType = {
    progress?: true
    quizzesCompleted?: true
  }

  export type UserCourseProgressSumAggregateInputType = {
    progress?: true
    quizzesCompleted?: true
  }

  export type UserCourseProgressMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    subtopicId?: true
    progress?: true
    quizzesCompleted?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCourseProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    subtopicId?: true
    progress?: true
    quizzesCompleted?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCourseProgressCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    subtopicId?: true
    progress?: true
    quizzesCompleted?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseProgress to aggregate.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourseProgresses
    **/
    _count?: true | UserCourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseProgressMaxAggregateInputType
  }

  export type GetUserCourseProgressAggregateType<T extends UserCourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourseProgress[P]>
      : GetScalarType<T[P], AggregateUserCourseProgress[P]>
  }




  export type UserCourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithAggregationInput | UserCourseProgressOrderByWithAggregationInput[]
    by: UserCourseProgressScalarFieldEnum[] | UserCourseProgressScalarFieldEnum
    having?: UserCourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseProgressCountAggregateInputType | true
    _avg?: UserCourseProgressAvgAggregateInputType
    _sum?: UserCourseProgressSumAggregateInputType
    _min?: UserCourseProgressMinAggregateInputType
    _max?: UserCourseProgressMaxAggregateInputType
  }

  export type UserCourseProgressGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    subtopicId: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCourseProgressCountAggregateOutputType | null
    _avg: UserCourseProgressAvgAggregateOutputType | null
    _sum: UserCourseProgressSumAggregateOutputType | null
    _min: UserCourseProgressMinAggregateOutputType | null
    _max: UserCourseProgressMaxAggregateOutputType | null
  }

  type GetUserCourseProgressGroupByPayload<T extends UserCourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    subtopicId?: boolean
    progress?: boolean
    quizzesCompleted?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    subtopic?: boolean | UserCourseProgress$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseProgress"]>



  export type UserCourseProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    subtopicId?: boolean
    progress?: boolean
    quizzesCompleted?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "subtopicId" | "progress" | "quizzesCompleted" | "lastAccessed" | "createdAt" | "updatedAt", ExtArgs["result"]["userCourseProgress"]>
  export type UserCourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    subtopic?: boolean | UserCourseProgress$subtopicArgs<ExtArgs>
  }

  export type $UserCourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourseProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      subtopic: Prisma.$SubtopicPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      subtopicId: string | null
      progress: number
      quizzesCompleted: number
      lastAccessed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCourseProgress"]>
    composites: {}
  }

  type UserCourseProgressGetPayload<S extends boolean | null | undefined | UserCourseProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCourseProgressPayload, S>

  type UserCourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseProgressCountAggregateInputType | true
    }

  export interface UserCourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourseProgress'], meta: { name: 'UserCourseProgress' } }
    /**
     * Find zero or one UserCourseProgress that matches the filter.
     * @param {UserCourseProgressFindUniqueArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseProgressFindUniqueArgs>(args: SelectSubset<T, UserCourseProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindFirstArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseProgressFindFirstArgs>(args?: SelectSubset<T, UserCourseProgressFindFirstArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindFirstOrThrowArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourseProgresses
     * const userCourseProgresses = await prisma.userCourseProgress.findMany()
     * 
     * // Get first 10 UserCourseProgresses
     * const userCourseProgresses = await prisma.userCourseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCourseProgressWithIdOnly = await prisma.userCourseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCourseProgressFindManyArgs>(args?: SelectSubset<T, UserCourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourseProgress.
     * @param {UserCourseProgressCreateArgs} args - Arguments to create a UserCourseProgress.
     * @example
     * // Create one UserCourseProgress
     * const UserCourseProgress = await prisma.userCourseProgress.create({
     *   data: {
     *     // ... data to create a UserCourseProgress
     *   }
     * })
     * 
     */
    create<T extends UserCourseProgressCreateArgs>(args: SelectSubset<T, UserCourseProgressCreateArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourseProgresses.
     * @param {UserCourseProgressCreateManyArgs} args - Arguments to create many UserCourseProgresses.
     * @example
     * // Create many UserCourseProgresses
     * const userCourseProgress = await prisma.userCourseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseProgressCreateManyArgs>(args?: SelectSubset<T, UserCourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCourseProgress.
     * @param {UserCourseProgressDeleteArgs} args - Arguments to delete one UserCourseProgress.
     * @example
     * // Delete one UserCourseProgress
     * const UserCourseProgress = await prisma.userCourseProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCourseProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCourseProgressDeleteArgs>(args: SelectSubset<T, UserCourseProgressDeleteArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourseProgress.
     * @param {UserCourseProgressUpdateArgs} args - Arguments to update one UserCourseProgress.
     * @example
     * // Update one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseProgressUpdateArgs>(args: SelectSubset<T, UserCourseProgressUpdateArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourseProgresses.
     * @param {UserCourseProgressDeleteManyArgs} args - Arguments to filter UserCourseProgresses to delete.
     * @example
     * // Delete a few UserCourseProgresses
     * const { count } = await prisma.userCourseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseProgressDeleteManyArgs>(args?: SelectSubset<T, UserCourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourseProgresses
     * const userCourseProgress = await prisma.userCourseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseProgressUpdateManyArgs>(args: SelectSubset<T, UserCourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCourseProgress.
     * @param {UserCourseProgressUpsertArgs} args - Arguments to update or create a UserCourseProgress.
     * @example
     * // Update or create a UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.upsert({
     *   create: {
     *     // ... data to create a UserCourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseProgressUpsertArgs>(args: SelectSubset<T, UserCourseProgressUpsertArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseProgresses that matches the filter.
     * @param {UserCourseProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userCourseProgress = await prisma.userCourseProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserCourseProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserCourseProgress.
     * @param {UserCourseProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userCourseProgress = await prisma.userCourseProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserCourseProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressCountArgs} args - Arguments to filter UserCourseProgresses to count.
     * @example
     * // Count the number of UserCourseProgresses
     * const count = await prisma.userCourseProgress.count({
     *   where: {
     *     // ... the filter for the UserCourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseProgressCountArgs>(
      args?: Subset<T, UserCourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCourseProgressAggregateArgs>(args: Subset<T, UserCourseProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCourseProgressAggregateType<T>>

    /**
     * Group by UserCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourseProgress model
   */
  readonly fields: UserCourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subtopic<T extends UserCourseProgress$subtopicArgs<ExtArgs> = {}>(args?: Subset<T, UserCourseProgress$subtopicArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCourseProgress model
   */
  interface UserCourseProgressFieldRefs {
    readonly id: FieldRef<"UserCourseProgress", 'String'>
    readonly userId: FieldRef<"UserCourseProgress", 'String'>
    readonly courseId: FieldRef<"UserCourseProgress", 'String'>
    readonly subtopicId: FieldRef<"UserCourseProgress", 'String'>
    readonly progress: FieldRef<"UserCourseProgress", 'Float'>
    readonly quizzesCompleted: FieldRef<"UserCourseProgress", 'Int'>
    readonly lastAccessed: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly createdAt: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCourseProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCourseProgress findUnique
   */
  export type UserCourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress findUniqueOrThrow
   */
  export type UserCourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress findFirst
   */
  export type UserCourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseProgresses.
     */
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress findFirstOrThrow
   */
  export type UserCourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseProgresses.
     */
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress findMany
   */
  export type UserCourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgresses to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress create
   */
  export type UserCourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourseProgress.
     */
    data: XOR<UserCourseProgressCreateInput, UserCourseProgressUncheckedCreateInput>
  }

  /**
   * UserCourseProgress createMany
   */
  export type UserCourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourseProgresses.
     */
    data: UserCourseProgressCreateManyInput | UserCourseProgressCreateManyInput[]
  }

  /**
   * UserCourseProgress update
   */
  export type UserCourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourseProgress.
     */
    data: XOR<UserCourseProgressUpdateInput, UserCourseProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCourseProgress to update.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress updateMany
   */
  export type UserCourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourseProgresses.
     */
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseProgresses to update
     */
    where?: UserCourseProgressWhereInput
    /**
     * Limit how many UserCourseProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCourseProgress upsert
   */
  export type UserCourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourseProgress to update in case it exists.
     */
    where: UserCourseProgressWhereUniqueInput
    /**
     * In case the UserCourseProgress found by the `where` argument doesn't exist, create a new UserCourseProgress with this data.
     */
    create: XOR<UserCourseProgressCreateInput, UserCourseProgressUncheckedCreateInput>
    /**
     * In case the UserCourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseProgressUpdateInput, UserCourseProgressUncheckedUpdateInput>
  }

  /**
   * UserCourseProgress delete
   */
  export type UserCourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCourseProgress to delete.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress deleteMany
   */
  export type UserCourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseProgresses to delete
     */
    where?: UserCourseProgressWhereInput
    /**
     * Limit how many UserCourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCourseProgress findRaw
   */
  export type UserCourseProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseProgress aggregateRaw
   */
  export type UserCourseProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserCourseProgress.subtopic
   */
  export type UserCourseProgress$subtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
  }

  /**
   * UserCourseProgress without action
   */
  export type UserCourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    score: number | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    score: number | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    score: number | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    score: number | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    answers: number
    score: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    score?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    score?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    answers?: true
    score?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    answers: JsonValue
    score: number
    completedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    answers?: boolean
    score?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>



  export type QuizAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    answers?: boolean
    score?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "answers" | "score" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["quizAttempt"]>
  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      answers: Prisma.JsonValue
      score: number
      completedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }

  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAttemptFindManyArgs>(args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptCreateArgs>(args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttempts.
     * @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptCreateManyArgs>(args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptDeleteArgs>(args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptUpdateArgs>(args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptUpsertArgs>(args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * @param {QuizAttemptFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const quizAttempt = await prisma.quizAttempt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuizAttemptFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a QuizAttempt.
     * @param {QuizAttemptAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const quizAttempt = await prisma.quizAttempt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuizAttemptAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizAttempt model
   */
  interface QuizAttemptFieldRefs {
    readonly id: FieldRef<"QuizAttempt", 'String'>
    readonly userId: FieldRef<"QuizAttempt", 'String'>
    readonly quizId: FieldRef<"QuizAttempt", 'String'>
    readonly answers: FieldRef<"QuizAttempt", 'Json'>
    readonly score: FieldRef<"QuizAttempt", 'Float'>
    readonly completedAt: FieldRef<"QuizAttempt", 'DateTime'>
    readonly createdAt: FieldRef<"QuizAttempt", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }

  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
  }

  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
  }

  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }

  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * QuizAttempt findRaw
   */
  export type QuizAttemptFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * QuizAttempt aggregateRaw
   */
  export type QuizAttemptAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model RevisionHub
   */

  export type AggregateRevisionHub = {
    _count: RevisionHubCountAggregateOutputType | null
    _min: RevisionHubMinAggregateOutputType | null
    _max: RevisionHubMaxAggregateOutputType | null
  }

  export type RevisionHubMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    subtopicId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RevisionHubMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    subtopicId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RevisionHubCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    subtopicId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RevisionHubMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    subtopicId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RevisionHubMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    subtopicId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RevisionHubCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    subtopicId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RevisionHubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevisionHub to aggregate.
     */
    where?: RevisionHubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHubs to fetch.
     */
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevisionHubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevisionHubs
    **/
    _count?: true | RevisionHubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisionHubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisionHubMaxAggregateInputType
  }

  export type GetRevisionHubAggregateType<T extends RevisionHubAggregateArgs> = {
        [P in keyof T & keyof AggregateRevisionHub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevisionHub[P]>
      : GetScalarType<T[P], AggregateRevisionHub[P]>
  }




  export type RevisionHubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionHubWhereInput
    orderBy?: RevisionHubOrderByWithAggregationInput | RevisionHubOrderByWithAggregationInput[]
    by: RevisionHubScalarFieldEnum[] | RevisionHubScalarFieldEnum
    having?: RevisionHubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisionHubCountAggregateInputType | true
    _min?: RevisionHubMinAggregateInputType
    _max?: RevisionHubMaxAggregateInputType
  }

  export type RevisionHubGroupByOutputType = {
    id: string
    userId: string
    quizId: string | null
    subtopicId: string | null
    type: string
    createdAt: Date
    updatedAt: Date
    _count: RevisionHubCountAggregateOutputType | null
    _min: RevisionHubMinAggregateOutputType | null
    _max: RevisionHubMaxAggregateOutputType | null
  }

  type GetRevisionHubGroupByPayload<T extends RevisionHubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisionHubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisionHubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisionHubGroupByOutputType[P]>
            : GetScalarType<T[P], RevisionHubGroupByOutputType[P]>
        }
      >
    >


  export type RevisionHubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    subtopicId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | RevisionHub$quizArgs<ExtArgs>
    subtopic?: boolean | RevisionHub$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["revisionHub"]>



  export type RevisionHubSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    subtopicId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RevisionHubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "subtopicId" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["revisionHub"]>
  export type RevisionHubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | RevisionHub$quizArgs<ExtArgs>
    subtopic?: boolean | RevisionHub$subtopicArgs<ExtArgs>
  }

  export type $RevisionHubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevisionHub"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs> | null
      subtopic: Prisma.$SubtopicPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string | null
      subtopicId: string | null
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["revisionHub"]>
    composites: {}
  }

  type RevisionHubGetPayload<S extends boolean | null | undefined | RevisionHubDefaultArgs> = $Result.GetResult<Prisma.$RevisionHubPayload, S>

  type RevisionHubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevisionHubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisionHubCountAggregateInputType | true
    }

  export interface RevisionHubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevisionHub'], meta: { name: 'RevisionHub' } }
    /**
     * Find zero or one RevisionHub that matches the filter.
     * @param {RevisionHubFindUniqueArgs} args - Arguments to find a RevisionHub
     * @example
     * // Get one RevisionHub
     * const revisionHub = await prisma.revisionHub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevisionHubFindUniqueArgs>(args: SelectSubset<T, RevisionHubFindUniqueArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevisionHub that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevisionHubFindUniqueOrThrowArgs} args - Arguments to find a RevisionHub
     * @example
     * // Get one RevisionHub
     * const revisionHub = await prisma.revisionHub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevisionHubFindUniqueOrThrowArgs>(args: SelectSubset<T, RevisionHubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevisionHub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubFindFirstArgs} args - Arguments to find a RevisionHub
     * @example
     * // Get one RevisionHub
     * const revisionHub = await prisma.revisionHub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevisionHubFindFirstArgs>(args?: SelectSubset<T, RevisionHubFindFirstArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevisionHub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubFindFirstOrThrowArgs} args - Arguments to find a RevisionHub
     * @example
     * // Get one RevisionHub
     * const revisionHub = await prisma.revisionHub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevisionHubFindFirstOrThrowArgs>(args?: SelectSubset<T, RevisionHubFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevisionHubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevisionHubs
     * const revisionHubs = await prisma.revisionHub.findMany()
     * 
     * // Get first 10 RevisionHubs
     * const revisionHubs = await prisma.revisionHub.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revisionHubWithIdOnly = await prisma.revisionHub.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevisionHubFindManyArgs>(args?: SelectSubset<T, RevisionHubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevisionHub.
     * @param {RevisionHubCreateArgs} args - Arguments to create a RevisionHub.
     * @example
     * // Create one RevisionHub
     * const RevisionHub = await prisma.revisionHub.create({
     *   data: {
     *     // ... data to create a RevisionHub
     *   }
     * })
     * 
     */
    create<T extends RevisionHubCreateArgs>(args: SelectSubset<T, RevisionHubCreateArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevisionHubs.
     * @param {RevisionHubCreateManyArgs} args - Arguments to create many RevisionHubs.
     * @example
     * // Create many RevisionHubs
     * const revisionHub = await prisma.revisionHub.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevisionHubCreateManyArgs>(args?: SelectSubset<T, RevisionHubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RevisionHub.
     * @param {RevisionHubDeleteArgs} args - Arguments to delete one RevisionHub.
     * @example
     * // Delete one RevisionHub
     * const RevisionHub = await prisma.revisionHub.delete({
     *   where: {
     *     // ... filter to delete one RevisionHub
     *   }
     * })
     * 
     */
    delete<T extends RevisionHubDeleteArgs>(args: SelectSubset<T, RevisionHubDeleteArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevisionHub.
     * @param {RevisionHubUpdateArgs} args - Arguments to update one RevisionHub.
     * @example
     * // Update one RevisionHub
     * const revisionHub = await prisma.revisionHub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevisionHubUpdateArgs>(args: SelectSubset<T, RevisionHubUpdateArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevisionHubs.
     * @param {RevisionHubDeleteManyArgs} args - Arguments to filter RevisionHubs to delete.
     * @example
     * // Delete a few RevisionHubs
     * const { count } = await prisma.revisionHub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevisionHubDeleteManyArgs>(args?: SelectSubset<T, RevisionHubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevisionHubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevisionHubs
     * const revisionHub = await prisma.revisionHub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevisionHubUpdateManyArgs>(args: SelectSubset<T, RevisionHubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RevisionHub.
     * @param {RevisionHubUpsertArgs} args - Arguments to update or create a RevisionHub.
     * @example
     * // Update or create a RevisionHub
     * const revisionHub = await prisma.revisionHub.upsert({
     *   create: {
     *     // ... data to create a RevisionHub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevisionHub we want to update
     *   }
     * })
     */
    upsert<T extends RevisionHubUpsertArgs>(args: SelectSubset<T, RevisionHubUpsertArgs<ExtArgs>>): Prisma__RevisionHubClient<$Result.GetResult<Prisma.$RevisionHubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevisionHubs that matches the filter.
     * @param {RevisionHubFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const revisionHub = await prisma.revisionHub.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RevisionHubFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RevisionHub.
     * @param {RevisionHubAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const revisionHub = await prisma.revisionHub.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RevisionHubAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RevisionHubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubCountArgs} args - Arguments to filter RevisionHubs to count.
     * @example
     * // Count the number of RevisionHubs
     * const count = await prisma.revisionHub.count({
     *   where: {
     *     // ... the filter for the RevisionHubs we want to count
     *   }
     * })
    **/
    count<T extends RevisionHubCountArgs>(
      args?: Subset<T, RevisionHubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisionHubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevisionHub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevisionHubAggregateArgs>(args: Subset<T, RevisionHubAggregateArgs>): Prisma.PrismaPromise<GetRevisionHubAggregateType<T>>

    /**
     * Group by RevisionHub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevisionHubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevisionHubGroupByArgs['orderBy'] }
        : { orderBy?: RevisionHubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevisionHubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionHubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevisionHub model
   */
  readonly fields: RevisionHubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevisionHub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevisionHubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends RevisionHub$quizArgs<ExtArgs> = {}>(args?: Subset<T, RevisionHub$quizArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subtopic<T extends RevisionHub$subtopicArgs<ExtArgs> = {}>(args?: Subset<T, RevisionHub$subtopicArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevisionHub model
   */
  interface RevisionHubFieldRefs {
    readonly id: FieldRef<"RevisionHub", 'String'>
    readonly userId: FieldRef<"RevisionHub", 'String'>
    readonly quizId: FieldRef<"RevisionHub", 'String'>
    readonly subtopicId: FieldRef<"RevisionHub", 'String'>
    readonly type: FieldRef<"RevisionHub", 'String'>
    readonly createdAt: FieldRef<"RevisionHub", 'DateTime'>
    readonly updatedAt: FieldRef<"RevisionHub", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevisionHub findUnique
   */
  export type RevisionHubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHub to fetch.
     */
    where: RevisionHubWhereUniqueInput
  }

  /**
   * RevisionHub findUniqueOrThrow
   */
  export type RevisionHubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHub to fetch.
     */
    where: RevisionHubWhereUniqueInput
  }

  /**
   * RevisionHub findFirst
   */
  export type RevisionHubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHub to fetch.
     */
    where?: RevisionHubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHubs to fetch.
     */
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevisionHubs.
     */
    cursor?: RevisionHubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionHubs.
     */
    distinct?: RevisionHubScalarFieldEnum | RevisionHubScalarFieldEnum[]
  }

  /**
   * RevisionHub findFirstOrThrow
   */
  export type RevisionHubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHub to fetch.
     */
    where?: RevisionHubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHubs to fetch.
     */
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevisionHubs.
     */
    cursor?: RevisionHubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionHubs.
     */
    distinct?: RevisionHubScalarFieldEnum | RevisionHubScalarFieldEnum[]
  }

  /**
   * RevisionHub findMany
   */
  export type RevisionHubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHubs to fetch.
     */
    where?: RevisionHubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHubs to fetch.
     */
    orderBy?: RevisionHubOrderByWithRelationInput | RevisionHubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevisionHubs.
     */
    cursor?: RevisionHubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHubs.
     */
    skip?: number
    distinct?: RevisionHubScalarFieldEnum | RevisionHubScalarFieldEnum[]
  }

  /**
   * RevisionHub create
   */
  export type RevisionHubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * The data needed to create a RevisionHub.
     */
    data: XOR<RevisionHubCreateInput, RevisionHubUncheckedCreateInput>
  }

  /**
   * RevisionHub createMany
   */
  export type RevisionHubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevisionHubs.
     */
    data: RevisionHubCreateManyInput | RevisionHubCreateManyInput[]
  }

  /**
   * RevisionHub update
   */
  export type RevisionHubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * The data needed to update a RevisionHub.
     */
    data: XOR<RevisionHubUpdateInput, RevisionHubUncheckedUpdateInput>
    /**
     * Choose, which RevisionHub to update.
     */
    where: RevisionHubWhereUniqueInput
  }

  /**
   * RevisionHub updateMany
   */
  export type RevisionHubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevisionHubs.
     */
    data: XOR<RevisionHubUpdateManyMutationInput, RevisionHubUncheckedUpdateManyInput>
    /**
     * Filter which RevisionHubs to update
     */
    where?: RevisionHubWhereInput
    /**
     * Limit how many RevisionHubs to update.
     */
    limit?: number
  }

  /**
   * RevisionHub upsert
   */
  export type RevisionHubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * The filter to search for the RevisionHub to update in case it exists.
     */
    where: RevisionHubWhereUniqueInput
    /**
     * In case the RevisionHub found by the `where` argument doesn't exist, create a new RevisionHub with this data.
     */
    create: XOR<RevisionHubCreateInput, RevisionHubUncheckedCreateInput>
    /**
     * In case the RevisionHub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevisionHubUpdateInput, RevisionHubUncheckedUpdateInput>
  }

  /**
   * RevisionHub delete
   */
  export type RevisionHubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
    /**
     * Filter which RevisionHub to delete.
     */
    where: RevisionHubWhereUniqueInput
  }

  /**
   * RevisionHub deleteMany
   */
  export type RevisionHubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevisionHubs to delete
     */
    where?: RevisionHubWhereInput
    /**
     * Limit how many RevisionHubs to delete.
     */
    limit?: number
  }

  /**
   * RevisionHub findRaw
   */
  export type RevisionHubFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RevisionHub aggregateRaw
   */
  export type RevisionHubAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RevisionHub.quiz
   */
  export type RevisionHub$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
  }

  /**
   * RevisionHub.subtopic
   */
  export type RevisionHub$subtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
  }

  /**
   * RevisionHub without action
   */
  export type RevisionHubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHub
     */
    select?: RevisionHubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHub
     */
    omit?: RevisionHubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHubInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    price: 'price',
    category: 'category',
    difficulty: 'difficulty',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const SubtopicScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    description: 'description',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubtopicScalarFieldEnum = (typeof SubtopicScalarFieldEnum)[keyof typeof SubtopicScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    subtopicId: 'subtopicId',
    title: 'title',
    questions: 'questions',
    duration: 'duration',
    isPreview: 'isPreview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    paymentId: 'paymentId',
    orderId: 'orderId',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const UserCourseProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    subtopicId: 'subtopicId',
    progress: 'progress',
    quizzesCompleted: 'quizzesCompleted',
    lastAccessed: 'lastAccessed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCourseProgressScalarFieldEnum = (typeof UserCourseProgressScalarFieldEnum)[keyof typeof UserCourseProgressScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    answers: 'answers',
    score: 'score',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const RevisionHubScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    subtopicId: 'subtopicId',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RevisionHubScalarFieldEnum = (typeof RevisionHubScalarFieldEnum)[keyof typeof RevisionHubScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    subscriptions?: SubscriptionListRelationFilter
    progress?: UserCourseProgressListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
    revisionHub?: RevisionHubListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    progress?: UserCourseProgressOrderByRelationAggregateInput
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
    revisionHub?: RevisionHubOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    subscriptions?: SubscriptionListRelationFilter
    progress?: UserCourseProgressListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
    revisionHub?: RevisionHubListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    thumbnail?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    category?: StringNullableFilter<"Course"> | string | null
    difficulty?: StringNullableFilter<"Course"> | string | null
    duration?: IntNullableFilter<"Course"> | number | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    subtopics?: SubtopicListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    progress?: UserCourseProgressListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    price?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subtopics?: SubtopicOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    progress?: UserCourseProgressOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    thumbnail?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    category?: StringNullableFilter<"Course"> | string | null
    difficulty?: StringNullableFilter<"Course"> | string | null
    duration?: IntNullableFilter<"Course"> | number | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    subtopics?: SubtopicListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    progress?: UserCourseProgressListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    price?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Course"> | string | null
    price?: FloatWithAggregatesFilter<"Course"> | number
    category?: StringNullableWithAggregatesFilter<"Course"> | string | null
    difficulty?: StringNullableWithAggregatesFilter<"Course"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Course"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type SubtopicWhereInput = {
    AND?: SubtopicWhereInput | SubtopicWhereInput[]
    OR?: SubtopicWhereInput[]
    NOT?: SubtopicWhereInput | SubtopicWhereInput[]
    id?: StringFilter<"Subtopic"> | string
    courseId?: StringFilter<"Subtopic"> | string
    title?: StringFilter<"Subtopic"> | string
    description?: StringNullableFilter<"Subtopic"> | string | null
    notes?: StringNullableFilter<"Subtopic"> | string | null
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    quizzes?: QuizListRelationFilter
    progress?: UserCourseProgressListRelationFilter
    revisionHub?: RevisionHubListRelationFilter
  }

  export type SubtopicOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    quizzes?: QuizOrderByRelationAggregateInput
    progress?: UserCourseProgressOrderByRelationAggregateInput
    revisionHub?: RevisionHubOrderByRelationAggregateInput
  }

  export type SubtopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubtopicWhereInput | SubtopicWhereInput[]
    OR?: SubtopicWhereInput[]
    NOT?: SubtopicWhereInput | SubtopicWhereInput[]
    courseId?: StringFilter<"Subtopic"> | string
    title?: StringFilter<"Subtopic"> | string
    description?: StringNullableFilter<"Subtopic"> | string | null
    notes?: StringNullableFilter<"Subtopic"> | string | null
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    quizzes?: QuizListRelationFilter
    progress?: UserCourseProgressListRelationFilter
    revisionHub?: RevisionHubListRelationFilter
  }, "id">

  export type SubtopicOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubtopicCountOrderByAggregateInput
    _max?: SubtopicMaxOrderByAggregateInput
    _min?: SubtopicMinOrderByAggregateInput
  }

  export type SubtopicScalarWhereWithAggregatesInput = {
    AND?: SubtopicScalarWhereWithAggregatesInput | SubtopicScalarWhereWithAggregatesInput[]
    OR?: SubtopicScalarWhereWithAggregatesInput[]
    NOT?: SubtopicScalarWhereWithAggregatesInput | SubtopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subtopic"> | string
    courseId?: StringWithAggregatesFilter<"Subtopic"> | string
    title?: StringWithAggregatesFilter<"Subtopic"> | string
    description?: StringNullableWithAggregatesFilter<"Subtopic"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Subtopic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subtopic"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    subtopicId?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questions?: JsonFilter<"Quiz">
    duration?: IntNullableFilter<"Quiz"> | number | null
    isPreview?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    subtopic?: XOR<SubtopicScalarRelationFilter, SubtopicWhereInput>
    attempts?: QuizAttemptListRelationFilter
    revisionHub?: RevisionHubListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    duration?: SortOrder
    isPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subtopic?: SubtopicOrderByWithRelationInput
    attempts?: QuizAttemptOrderByRelationAggregateInput
    revisionHub?: RevisionHubOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    subtopicId?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questions?: JsonFilter<"Quiz">
    duration?: IntNullableFilter<"Quiz"> | number | null
    isPreview?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    subtopic?: XOR<SubtopicScalarRelationFilter, SubtopicWhereInput>
    attempts?: QuizAttemptListRelationFilter
    revisionHub?: RevisionHubListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    duration?: SortOrder
    isPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    subtopicId?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    questions?: JsonWithAggregatesFilter<"Quiz">
    duration?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    isPreview?: BoolWithAggregatesFilter<"Quiz"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    courseId?: StringFilter<"Subscription"> | string
    paymentId?: StringNullableFilter<"Subscription"> | string | null
    orderId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    expiresAt?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    courseId?: StringFilter<"Subscription"> | string
    paymentId?: StringNullableFilter<"Subscription"> | string | null
    orderId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    expiresAt?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    courseId?: StringWithAggregatesFilter<"Subscription"> | string
    paymentId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: StringWithAggregatesFilter<"Subscription"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserCourseProgressWhereInput = {
    AND?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    OR?: UserCourseProgressWhereInput[]
    NOT?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    id?: StringFilter<"UserCourseProgress"> | string
    userId?: StringFilter<"UserCourseProgress"> | string
    courseId?: StringFilter<"UserCourseProgress"> | string
    subtopicId?: StringNullableFilter<"UserCourseProgress"> | string | null
    progress?: FloatFilter<"UserCourseProgress"> | number
    quizzesCompleted?: IntFilter<"UserCourseProgress"> | number
    lastAccessed?: DateTimeFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
  }

  export type UserCourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subtopicId?: SortOrder
    progress?: SortOrder
    quizzesCompleted?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    subtopic?: SubtopicOrderByWithRelationInput
  }

  export type UserCourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    OR?: UserCourseProgressWhereInput[]
    NOT?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    userId?: StringFilter<"UserCourseProgress"> | string
    courseId?: StringFilter<"UserCourseProgress"> | string
    subtopicId?: StringNullableFilter<"UserCourseProgress"> | string | null
    progress?: FloatFilter<"UserCourseProgress"> | number
    quizzesCompleted?: IntFilter<"UserCourseProgress"> | number
    lastAccessed?: DateTimeFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
  }, "id">

  export type UserCourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subtopicId?: SortOrder
    progress?: SortOrder
    quizzesCompleted?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCourseProgressCountOrderByAggregateInput
    _avg?: UserCourseProgressAvgOrderByAggregateInput
    _max?: UserCourseProgressMaxOrderByAggregateInput
    _min?: UserCourseProgressMinOrderByAggregateInput
    _sum?: UserCourseProgressSumOrderByAggregateInput
  }

  export type UserCourseProgressScalarWhereWithAggregatesInput = {
    AND?: UserCourseProgressScalarWhereWithAggregatesInput | UserCourseProgressScalarWhereWithAggregatesInput[]
    OR?: UserCourseProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCourseProgressScalarWhereWithAggregatesInput | UserCourseProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCourseProgress"> | string
    userId?: StringWithAggregatesFilter<"UserCourseProgress"> | string
    courseId?: StringWithAggregatesFilter<"UserCourseProgress"> | string
    subtopicId?: StringNullableWithAggregatesFilter<"UserCourseProgress"> | string | null
    progress?: FloatWithAggregatesFilter<"UserCourseProgress"> | number
    quizzesCompleted?: IntWithAggregatesFilter<"UserCourseProgress"> | number
    lastAccessed?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    answers?: JsonFilter<"QuizAttempt">
    score?: FloatFilter<"QuizAttempt"> | number
    completedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    answers?: JsonFilter<"QuizAttempt">
    score?: FloatFilter<"QuizAttempt"> | number
    completedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id">

  export type QuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizAttempt"> | string
    userId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    quizId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    answers?: JsonWithAggregatesFilter<"QuizAttempt">
    score?: FloatWithAggregatesFilter<"QuizAttempt"> | number
    completedAt?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
  }

  export type RevisionHubWhereInput = {
    AND?: RevisionHubWhereInput | RevisionHubWhereInput[]
    OR?: RevisionHubWhereInput[]
    NOT?: RevisionHubWhereInput | RevisionHubWhereInput[]
    id?: StringFilter<"RevisionHub"> | string
    userId?: StringFilter<"RevisionHub"> | string
    quizId?: StringNullableFilter<"RevisionHub"> | string | null
    subtopicId?: StringNullableFilter<"RevisionHub"> | string | null
    type?: StringFilter<"RevisionHub"> | string
    createdAt?: DateTimeFilter<"RevisionHub"> | Date | string
    updatedAt?: DateTimeFilter<"RevisionHub"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
  }

  export type RevisionHubOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    subtopicId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    subtopic?: SubtopicOrderByWithRelationInput
  }

  export type RevisionHubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RevisionHubWhereInput | RevisionHubWhereInput[]
    OR?: RevisionHubWhereInput[]
    NOT?: RevisionHubWhereInput | RevisionHubWhereInput[]
    userId?: StringFilter<"RevisionHub"> | string
    quizId?: StringNullableFilter<"RevisionHub"> | string | null
    subtopicId?: StringNullableFilter<"RevisionHub"> | string | null
    type?: StringFilter<"RevisionHub"> | string
    createdAt?: DateTimeFilter<"RevisionHub"> | Date | string
    updatedAt?: DateTimeFilter<"RevisionHub"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
  }, "id">

  export type RevisionHubOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    subtopicId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RevisionHubCountOrderByAggregateInput
    _max?: RevisionHubMaxOrderByAggregateInput
    _min?: RevisionHubMinOrderByAggregateInput
  }

  export type RevisionHubScalarWhereWithAggregatesInput = {
    AND?: RevisionHubScalarWhereWithAggregatesInput | RevisionHubScalarWhereWithAggregatesInput[]
    OR?: RevisionHubScalarWhereWithAggregatesInput[]
    NOT?: RevisionHubScalarWhereWithAggregatesInput | RevisionHubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RevisionHub"> | string
    userId?: StringWithAggregatesFilter<"RevisionHub"> | string
    quizId?: StringNullableWithAggregatesFilter<"RevisionHub"> | string | null
    subtopicId?: StringNullableWithAggregatesFilter<"RevisionHub"> | string | null
    type?: StringWithAggregatesFilter<"RevisionHub"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RevisionHub"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RevisionHub"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicCreateNestedManyWithoutCourseInput
    subscriptions?: SubscriptionCreateNestedManyWithoutCourseInput
    progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicUncheckedCreateNestedManyWithoutCourseInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCourseInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUpdateManyWithoutCourseNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutCourseNestedInput
    progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUncheckedUpdateManyWithoutCourseNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCourseNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicCreateInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSubtopicsInput
    quizzes?: QuizCreateNestedManyWithoutSubtopicInput
    progress?: UserCourseProgressCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateInput = {
    id?: string
    courseId: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutSubtopicInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSubtopicsNestedInput
    quizzes?: QuizUpdateManyWithoutSubtopicNestedInput
    progress?: UserCourseProgressUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutSubtopicNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicCreateManyInput = {
    id?: string
    courseId: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopic: SubtopicCreateNestedOneWithoutQuizzesInput
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
    revisionHub?: RevisionHubCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    subtopicId: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUpdateOneRequiredWithoutQuizzesNestedInput
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    subtopicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    subtopicId: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    subtopicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
    course: CourseCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    course?: CourseUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressCreateInput = {
    id?: string
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    course: CourseCreateNestedOneWithoutProgressInput
    subtopic?: SubtopicCreateNestedOneWithoutProgressInput
  }

  export type UserCourseProgressUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    subtopicId?: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressUpdateInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutProgressNestedInput
    subtopic?: SubtopicUpdateOneWithoutProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    subtopicId?: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressUpdateManyMutationInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateInput = {
    id?: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    quiz: QuizCreateNestedOneWithoutAttemptsInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizAttemptUpdateInput = {
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizAttemptUpdateManyMutationInput = {
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubCreateInput = {
    id?: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRevisionHubInput
    quiz?: QuizCreateNestedOneWithoutRevisionHubInput
    subtopic?: SubtopicCreateNestedOneWithoutRevisionHubInput
  }

  export type RevisionHubUncheckedCreateInput = {
    id?: string
    userId: string
    quizId?: string | null
    subtopicId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRevisionHubNestedInput
    quiz?: QuizUpdateOneWithoutRevisionHubNestedInput
    subtopic?: SubtopicUpdateOneWithoutRevisionHubNestedInput
  }

  export type RevisionHubUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubCreateManyInput = {
    id?: string
    userId: string
    quizId?: string | null
    subtopicId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type UserCourseProgressListRelationFilter = {
    every?: UserCourseProgressWhereInput
    some?: UserCourseProgressWhereInput
    none?: UserCourseProgressWhereInput
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }

  export type RevisionHubListRelationFilter = {
    every?: RevisionHubWhereInput
    some?: RevisionHubWhereInput
    none?: RevisionHubWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCourseProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevisionHubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type SubtopicListRelationFilter = {
    every?: SubtopicWhereInput
    some?: SubtopicWhereInput
    none?: SubtopicWhereInput
  }

  export type SubtopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    price?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    price?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    price?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubtopicCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubtopicScalarRelationFilter = {
    is?: SubtopicWhereInput
    isNot?: SubtopicWhereInput
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    duration?: SortOrder
    isPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    isPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    subtopicId?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    isPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    duration?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubtopicNullableScalarRelationFilter = {
    is?: SubtopicWhereInput | null
    isNot?: SubtopicWhereInput | null
  }

  export type UserCourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subtopicId?: SortOrder
    progress?: SortOrder
    quizzesCompleted?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCourseProgressAvgOrderByAggregateInput = {
    progress?: SortOrder
    quizzesCompleted?: SortOrder
  }

  export type UserCourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subtopicId?: SortOrder
    progress?: SortOrder
    quizzesCompleted?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    subtopicId?: SortOrder
    progress?: SortOrder
    quizzesCompleted?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCourseProgressSumOrderByAggregateInput = {
    progress?: SortOrder
    quizzesCompleted?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type QuizNullableScalarRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type RevisionHubCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    subtopicId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevisionHubMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    subtopicId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevisionHubMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    subtopicId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type RevisionHubCreateNestedManyWithoutUserInput = {
    create?: XOR<RevisionHubCreateWithoutUserInput, RevisionHubUncheckedCreateWithoutUserInput> | RevisionHubCreateWithoutUserInput[] | RevisionHubUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutUserInput | RevisionHubCreateOrConnectWithoutUserInput[]
    createMany?: RevisionHubCreateManyUserInputEnvelope
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type RevisionHubUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RevisionHubCreateWithoutUserInput, RevisionHubUncheckedCreateWithoutUserInput> | RevisionHubCreateWithoutUserInput[] | RevisionHubUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutUserInput | RevisionHubCreateOrConnectWithoutUserInput[]
    createMany?: RevisionHubCreateManyUserInputEnvelope
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutUserInput | UserCourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutUserInput | UserCourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutUserInput | UserCourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type RevisionHubUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevisionHubCreateWithoutUserInput, RevisionHubUncheckedCreateWithoutUserInput> | RevisionHubCreateWithoutUserInput[] | RevisionHubUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutUserInput | RevisionHubCreateOrConnectWithoutUserInput[]
    upsert?: RevisionHubUpsertWithWhereUniqueWithoutUserInput | RevisionHubUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevisionHubCreateManyUserInputEnvelope
    set?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    disconnect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    delete?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    update?: RevisionHubUpdateWithWhereUniqueWithoutUserInput | RevisionHubUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevisionHubUpdateManyWithWhereWithoutUserInput | RevisionHubUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutUserInput | UserCourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutUserInput | UserCourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutUserInput | UserCourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type RevisionHubUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevisionHubCreateWithoutUserInput, RevisionHubUncheckedCreateWithoutUserInput> | RevisionHubCreateWithoutUserInput[] | RevisionHubUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutUserInput | RevisionHubCreateOrConnectWithoutUserInput[]
    upsert?: RevisionHubUpsertWithWhereUniqueWithoutUserInput | RevisionHubUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevisionHubCreateManyUserInputEnvelope
    set?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    disconnect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    delete?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    update?: RevisionHubUpdateWithWhereUniqueWithoutUserInput | RevisionHubUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevisionHubUpdateManyWithWhereWithoutUserInput | RevisionHubUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
  }

  export type SubtopicCreateNestedManyWithoutCourseInput = {
    create?: XOR<SubtopicCreateWithoutCourseInput, SubtopicUncheckedCreateWithoutCourseInput> | SubtopicCreateWithoutCourseInput[] | SubtopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutCourseInput | SubtopicCreateOrConnectWithoutCourseInput[]
    createMany?: SubtopicCreateManyCourseInputEnvelope
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutCourseInput = {
    create?: XOR<SubscriptionCreateWithoutCourseInput, SubscriptionUncheckedCreateWithoutCourseInput> | SubscriptionCreateWithoutCourseInput[] | SubscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCourseInput | SubscriptionCreateOrConnectWithoutCourseInput[]
    createMany?: SubscriptionCreateManyCourseInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type SubtopicUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SubtopicCreateWithoutCourseInput, SubtopicUncheckedCreateWithoutCourseInput> | SubtopicCreateWithoutCourseInput[] | SubtopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutCourseInput | SubtopicCreateOrConnectWithoutCourseInput[]
    createMany?: SubtopicCreateManyCourseInputEnvelope
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SubscriptionCreateWithoutCourseInput, SubscriptionUncheckedCreateWithoutCourseInput> | SubscriptionCreateWithoutCourseInput[] | SubscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCourseInput | SubscriptionCreateOrConnectWithoutCourseInput[]
    createMany?: SubscriptionCreateManyCourseInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type SubtopicUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SubtopicCreateWithoutCourseInput, SubtopicUncheckedCreateWithoutCourseInput> | SubtopicCreateWithoutCourseInput[] | SubtopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutCourseInput | SubtopicCreateOrConnectWithoutCourseInput[]
    upsert?: SubtopicUpsertWithWhereUniqueWithoutCourseInput | SubtopicUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SubtopicCreateManyCourseInputEnvelope
    set?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    disconnect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    delete?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    update?: SubtopicUpdateWithWhereUniqueWithoutCourseInput | SubtopicUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SubtopicUpdateManyWithWhereWithoutCourseInput | SubtopicUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCourseInput, SubscriptionUncheckedCreateWithoutCourseInput> | SubscriptionCreateWithoutCourseInput[] | SubscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCourseInput | SubscriptionCreateOrConnectWithoutCourseInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCourseInput | SubscriptionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SubscriptionCreateManyCourseInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCourseInput | SubscriptionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCourseInput | SubscriptionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput | UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput | UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutCourseInput | UserCourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type SubtopicUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SubtopicCreateWithoutCourseInput, SubtopicUncheckedCreateWithoutCourseInput> | SubtopicCreateWithoutCourseInput[] | SubtopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutCourseInput | SubtopicCreateOrConnectWithoutCourseInput[]
    upsert?: SubtopicUpsertWithWhereUniqueWithoutCourseInput | SubtopicUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SubtopicCreateManyCourseInputEnvelope
    set?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    disconnect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    delete?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    update?: SubtopicUpdateWithWhereUniqueWithoutCourseInput | SubtopicUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SubtopicUpdateManyWithWhereWithoutCourseInput | SubtopicUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCourseInput, SubscriptionUncheckedCreateWithoutCourseInput> | SubscriptionCreateWithoutCourseInput[] | SubscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCourseInput | SubscriptionCreateOrConnectWithoutCourseInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCourseInput | SubscriptionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SubscriptionCreateManyCourseInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCourseInput | SubscriptionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCourseInput | SubscriptionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput | UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput | UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutCourseInput | UserCourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutSubtopicsInput = {
    create?: XOR<CourseCreateWithoutSubtopicsInput, CourseUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSubtopicsInput
    connect?: CourseWhereUniqueInput
  }

  export type QuizCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<QuizCreateWithoutSubtopicInput, QuizUncheckedCreateWithoutSubtopicInput> | QuizCreateWithoutSubtopicInput[] | QuizUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubtopicInput | QuizCreateOrConnectWithoutSubtopicInput[]
    createMany?: QuizCreateManySubtopicInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<UserCourseProgressCreateWithoutSubtopicInput, UserCourseProgressUncheckedCreateWithoutSubtopicInput> | UserCourseProgressCreateWithoutSubtopicInput[] | UserCourseProgressUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutSubtopicInput | UserCourseProgressCreateOrConnectWithoutSubtopicInput[]
    createMany?: UserCourseProgressCreateManySubtopicInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type RevisionHubCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<RevisionHubCreateWithoutSubtopicInput, RevisionHubUncheckedCreateWithoutSubtopicInput> | RevisionHubCreateWithoutSubtopicInput[] | RevisionHubUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutSubtopicInput | RevisionHubCreateOrConnectWithoutSubtopicInput[]
    createMany?: RevisionHubCreateManySubtopicInputEnvelope
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<QuizCreateWithoutSubtopicInput, QuizUncheckedCreateWithoutSubtopicInput> | QuizCreateWithoutSubtopicInput[] | QuizUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubtopicInput | QuizCreateOrConnectWithoutSubtopicInput[]
    createMany?: QuizCreateManySubtopicInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<UserCourseProgressCreateWithoutSubtopicInput, UserCourseProgressUncheckedCreateWithoutSubtopicInput> | UserCourseProgressCreateWithoutSubtopicInput[] | UserCourseProgressUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutSubtopicInput | UserCourseProgressCreateOrConnectWithoutSubtopicInput[]
    createMany?: UserCourseProgressCreateManySubtopicInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type RevisionHubUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<RevisionHubCreateWithoutSubtopicInput, RevisionHubUncheckedCreateWithoutSubtopicInput> | RevisionHubCreateWithoutSubtopicInput[] | RevisionHubUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutSubtopicInput | RevisionHubCreateOrConnectWithoutSubtopicInput[]
    createMany?: RevisionHubCreateManySubtopicInputEnvelope
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutSubtopicsNestedInput = {
    create?: XOR<CourseCreateWithoutSubtopicsInput, CourseUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSubtopicsInput
    upsert?: CourseUpsertWithoutSubtopicsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSubtopicsInput, CourseUpdateWithoutSubtopicsInput>, CourseUncheckedUpdateWithoutSubtopicsInput>
  }

  export type QuizUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<QuizCreateWithoutSubtopicInput, QuizUncheckedCreateWithoutSubtopicInput> | QuizCreateWithoutSubtopicInput[] | QuizUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubtopicInput | QuizCreateOrConnectWithoutSubtopicInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutSubtopicInput | QuizUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: QuizCreateManySubtopicInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutSubtopicInput | QuizUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutSubtopicInput | QuizUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutSubtopicInput, UserCourseProgressUncheckedCreateWithoutSubtopicInput> | UserCourseProgressCreateWithoutSubtopicInput[] | UserCourseProgressUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutSubtopicInput | UserCourseProgressCreateOrConnectWithoutSubtopicInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutSubtopicInput | UserCourseProgressUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: UserCourseProgressCreateManySubtopicInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutSubtopicInput | UserCourseProgressUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutSubtopicInput | UserCourseProgressUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type RevisionHubUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<RevisionHubCreateWithoutSubtopicInput, RevisionHubUncheckedCreateWithoutSubtopicInput> | RevisionHubCreateWithoutSubtopicInput[] | RevisionHubUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutSubtopicInput | RevisionHubCreateOrConnectWithoutSubtopicInput[]
    upsert?: RevisionHubUpsertWithWhereUniqueWithoutSubtopicInput | RevisionHubUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: RevisionHubCreateManySubtopicInputEnvelope
    set?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    disconnect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    delete?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    update?: RevisionHubUpdateWithWhereUniqueWithoutSubtopicInput | RevisionHubUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: RevisionHubUpdateManyWithWhereWithoutSubtopicInput | RevisionHubUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<QuizCreateWithoutSubtopicInput, QuizUncheckedCreateWithoutSubtopicInput> | QuizCreateWithoutSubtopicInput[] | QuizUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutSubtopicInput | QuizCreateOrConnectWithoutSubtopicInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutSubtopicInput | QuizUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: QuizCreateManySubtopicInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutSubtopicInput | QuizUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutSubtopicInput | QuizUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutSubtopicInput, UserCourseProgressUncheckedCreateWithoutSubtopicInput> | UserCourseProgressCreateWithoutSubtopicInput[] | UserCourseProgressUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutSubtopicInput | UserCourseProgressCreateOrConnectWithoutSubtopicInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutSubtopicInput | UserCourseProgressUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: UserCourseProgressCreateManySubtopicInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutSubtopicInput | UserCourseProgressUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutSubtopicInput | UserCourseProgressUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type RevisionHubUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<RevisionHubCreateWithoutSubtopicInput, RevisionHubUncheckedCreateWithoutSubtopicInput> | RevisionHubCreateWithoutSubtopicInput[] | RevisionHubUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutSubtopicInput | RevisionHubCreateOrConnectWithoutSubtopicInput[]
    upsert?: RevisionHubUpsertWithWhereUniqueWithoutSubtopicInput | RevisionHubUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: RevisionHubCreateManySubtopicInputEnvelope
    set?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    disconnect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    delete?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    update?: RevisionHubUpdateWithWhereUniqueWithoutSubtopicInput | RevisionHubUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: RevisionHubUpdateManyWithWhereWithoutSubtopicInput | RevisionHubUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
  }

  export type SubtopicCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<SubtopicCreateWithoutQuizzesInput, SubtopicUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutQuizzesInput
    connect?: SubtopicWhereUniqueInput
  }

  export type QuizAttemptCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type RevisionHubCreateNestedManyWithoutQuizInput = {
    create?: XOR<RevisionHubCreateWithoutQuizInput, RevisionHubUncheckedCreateWithoutQuizInput> | RevisionHubCreateWithoutQuizInput[] | RevisionHubUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutQuizInput | RevisionHubCreateOrConnectWithoutQuizInput[]
    createMany?: RevisionHubCreateManyQuizInputEnvelope
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type RevisionHubUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<RevisionHubCreateWithoutQuizInput, RevisionHubUncheckedCreateWithoutQuizInput> | RevisionHubCreateWithoutQuizInput[] | RevisionHubUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutQuizInput | RevisionHubCreateOrConnectWithoutQuizInput[]
    createMany?: RevisionHubCreateManyQuizInputEnvelope
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubtopicUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<SubtopicCreateWithoutQuizzesInput, SubtopicUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutQuizzesInput
    upsert?: SubtopicUpsertWithoutQuizzesInput
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutQuizzesInput, SubtopicUpdateWithoutQuizzesInput>, SubtopicUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizAttemptUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type RevisionHubUpdateManyWithoutQuizNestedInput = {
    create?: XOR<RevisionHubCreateWithoutQuizInput, RevisionHubUncheckedCreateWithoutQuizInput> | RevisionHubCreateWithoutQuizInput[] | RevisionHubUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutQuizInput | RevisionHubCreateOrConnectWithoutQuizInput[]
    upsert?: RevisionHubUpsertWithWhereUniqueWithoutQuizInput | RevisionHubUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: RevisionHubCreateManyQuizInputEnvelope
    set?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    disconnect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    delete?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    update?: RevisionHubUpdateWithWhereUniqueWithoutQuizInput | RevisionHubUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: RevisionHubUpdateManyWithWhereWithoutQuizInput | RevisionHubUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type RevisionHubUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<RevisionHubCreateWithoutQuizInput, RevisionHubUncheckedCreateWithoutQuizInput> | RevisionHubCreateWithoutQuizInput[] | RevisionHubUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: RevisionHubCreateOrConnectWithoutQuizInput | RevisionHubCreateOrConnectWithoutQuizInput[]
    upsert?: RevisionHubUpsertWithWhereUniqueWithoutQuizInput | RevisionHubUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: RevisionHubCreateManyQuizInputEnvelope
    set?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    disconnect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    delete?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    connect?: RevisionHubWhereUniqueInput | RevisionHubWhereUniqueInput[]
    update?: RevisionHubUpdateWithWhereUniqueWithoutQuizInput | RevisionHubUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: RevisionHubUpdateManyWithWhereWithoutQuizInput | RevisionHubUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<CourseCreateWithoutSubscriptionsInput, CourseUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSubscriptionsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CourseUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<CourseCreateWithoutSubscriptionsInput, CourseUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSubscriptionsInput
    upsert?: CourseUpsertWithoutSubscriptionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSubscriptionsInput, CourseUpdateWithoutSubscriptionsInput>, CourseUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutProgressInput = {
    create?: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutProgressInput
    connect?: CourseWhereUniqueInput
  }

  export type SubtopicCreateNestedOneWithoutProgressInput = {
    create?: XOR<SubtopicCreateWithoutProgressInput, SubtopicUncheckedCreateWithoutProgressInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutProgressInput
    connect?: SubtopicWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type CourseUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutProgressInput
    upsert?: CourseUpsertWithoutProgressInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutProgressInput, CourseUpdateWithoutProgressInput>, CourseUncheckedUpdateWithoutProgressInput>
  }

  export type SubtopicUpdateOneWithoutProgressNestedInput = {
    create?: XOR<SubtopicCreateWithoutProgressInput, SubtopicUncheckedCreateWithoutProgressInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutProgressInput
    upsert?: SubtopicUpsertWithoutProgressInput
    disconnect?: boolean
    delete?: SubtopicWhereInput | boolean
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutProgressInput, SubtopicUpdateWithoutProgressInput>, SubtopicUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAttemptsInput
    connect?: QuizWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    upsert?: UserUpsertWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizAttemptsInput, UserUpdateWithoutQuizAttemptsInput>, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type QuizUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAttemptsInput
    upsert?: QuizUpsertWithoutAttemptsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutAttemptsInput, QuizUpdateWithoutAttemptsInput>, QuizUncheckedUpdateWithoutAttemptsInput>
  }

  export type UserCreateNestedOneWithoutRevisionHubInput = {
    create?: XOR<UserCreateWithoutRevisionHubInput, UserUncheckedCreateWithoutRevisionHubInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevisionHubInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutRevisionHubInput = {
    create?: XOR<QuizCreateWithoutRevisionHubInput, QuizUncheckedCreateWithoutRevisionHubInput>
    connectOrCreate?: QuizCreateOrConnectWithoutRevisionHubInput
    connect?: QuizWhereUniqueInput
  }

  export type SubtopicCreateNestedOneWithoutRevisionHubInput = {
    create?: XOR<SubtopicCreateWithoutRevisionHubInput, SubtopicUncheckedCreateWithoutRevisionHubInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutRevisionHubInput
    connect?: SubtopicWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRevisionHubNestedInput = {
    create?: XOR<UserCreateWithoutRevisionHubInput, UserUncheckedCreateWithoutRevisionHubInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevisionHubInput
    upsert?: UserUpsertWithoutRevisionHubInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRevisionHubInput, UserUpdateWithoutRevisionHubInput>, UserUncheckedUpdateWithoutRevisionHubInput>
  }

  export type QuizUpdateOneWithoutRevisionHubNestedInput = {
    create?: XOR<QuizCreateWithoutRevisionHubInput, QuizUncheckedCreateWithoutRevisionHubInput>
    connectOrCreate?: QuizCreateOrConnectWithoutRevisionHubInput
    upsert?: QuizUpsertWithoutRevisionHubInput
    disconnect?: boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutRevisionHubInput, QuizUpdateWithoutRevisionHubInput>, QuizUncheckedUpdateWithoutRevisionHubInput>
  }

  export type SubtopicUpdateOneWithoutRevisionHubNestedInput = {
    create?: XOR<SubtopicCreateWithoutRevisionHubInput, SubtopicUncheckedCreateWithoutRevisionHubInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutRevisionHubInput
    upsert?: SubtopicUpsertWithoutRevisionHubInput
    disconnect?: boolean
    delete?: SubtopicWhereInput | boolean
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutRevisionHubInput, SubtopicUpdateWithoutRevisionHubInput>, SubtopicUncheckedUpdateWithoutRevisionHubInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
  }

  export type UserCourseProgressCreateWithoutUserInput = {
    id?: string
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutProgressInput
    subtopic?: SubtopicCreateNestedOneWithoutProgressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    subtopicId?: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressCreateOrConnectWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCourseProgressCreateManyUserInputEnvelope = {
    data: UserCourseProgressCreateManyUserInput | UserCourseProgressCreateManyUserInput[]
  }

  export type QuizAttemptCreateWithoutUserInput = {
    id?: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptCreateManyUserInputEnvelope = {
    data: QuizAttemptCreateManyUserInput | QuizAttemptCreateManyUserInput[]
  }

  export type RevisionHubCreateWithoutUserInput = {
    id?: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizCreateNestedOneWithoutRevisionHubInput
    subtopic?: SubtopicCreateNestedOneWithoutRevisionHubInput
  }

  export type RevisionHubUncheckedCreateWithoutUserInput = {
    id?: string
    quizId?: string | null
    subtopicId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubCreateOrConnectWithoutUserInput = {
    where: RevisionHubWhereUniqueInput
    create: XOR<RevisionHubCreateWithoutUserInput, RevisionHubUncheckedCreateWithoutUserInput>
  }

  export type RevisionHubCreateManyUserInputEnvelope = {
    data: RevisionHubCreateManyUserInput | RevisionHubCreateManyUserInput[]
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    courseId?: StringFilter<"Subscription"> | string
    paymentId?: StringNullableFilter<"Subscription"> | string | null
    orderId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    expiresAt?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutUserInput, UserCourseProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutUserInput, UserCourseProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCourseProgressScalarWhereInput = {
    AND?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
    OR?: UserCourseProgressScalarWhereInput[]
    NOT?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
    id?: StringFilter<"UserCourseProgress"> | string
    userId?: StringFilter<"UserCourseProgress"> | string
    courseId?: StringFilter<"UserCourseProgress"> | string
    subtopicId?: StringNullableFilter<"UserCourseProgress"> | string | null
    progress?: FloatFilter<"UserCourseProgress"> | number
    quizzesCompleted?: IntFilter<"UserCourseProgress"> | number
    lastAccessed?: DateTimeFilter<"UserCourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCourseProgress"> | Date | string
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    answers?: JsonFilter<"QuizAttempt">
    score?: FloatFilter<"QuizAttempt"> | number
    completedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
  }

  export type RevisionHubUpsertWithWhereUniqueWithoutUserInput = {
    where: RevisionHubWhereUniqueInput
    update: XOR<RevisionHubUpdateWithoutUserInput, RevisionHubUncheckedUpdateWithoutUserInput>
    create: XOR<RevisionHubCreateWithoutUserInput, RevisionHubUncheckedCreateWithoutUserInput>
  }

  export type RevisionHubUpdateWithWhereUniqueWithoutUserInput = {
    where: RevisionHubWhereUniqueInput
    data: XOR<RevisionHubUpdateWithoutUserInput, RevisionHubUncheckedUpdateWithoutUserInput>
  }

  export type RevisionHubUpdateManyWithWhereWithoutUserInput = {
    where: RevisionHubScalarWhereInput
    data: XOR<RevisionHubUpdateManyMutationInput, RevisionHubUncheckedUpdateManyWithoutUserInput>
  }

  export type RevisionHubScalarWhereInput = {
    AND?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
    OR?: RevisionHubScalarWhereInput[]
    NOT?: RevisionHubScalarWhereInput | RevisionHubScalarWhereInput[]
    id?: StringFilter<"RevisionHub"> | string
    userId?: StringFilter<"RevisionHub"> | string
    quizId?: StringNullableFilter<"RevisionHub"> | string | null
    subtopicId?: StringNullableFilter<"RevisionHub"> | string | null
    type?: StringFilter<"RevisionHub"> | string
    createdAt?: DateTimeFilter<"RevisionHub"> | Date | string
    updatedAt?: DateTimeFilter<"RevisionHub"> | Date | string
  }

  export type SubtopicCreateWithoutCourseInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutSubtopicInput
    progress?: UserCourseProgressCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutSubtopicInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutCourseInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutCourseInput, SubtopicUncheckedCreateWithoutCourseInput>
  }

  export type SubtopicCreateManyCourseInputEnvelope = {
    data: SubtopicCreateManyCourseInput | SubtopicCreateManyCourseInput[]
  }

  export type SubscriptionCreateWithoutCourseInput = {
    id?: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutCourseInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCourseInput, SubscriptionUncheckedCreateWithoutCourseInput>
  }

  export type SubscriptionCreateManyCourseInputEnvelope = {
    data: SubscriptionCreateManyCourseInput | SubscriptionCreateManyCourseInput[]
  }

  export type UserCourseProgressCreateWithoutCourseInput = {
    id?: string
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    subtopic?: SubtopicCreateNestedOneWithoutProgressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressCreateOrConnectWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseProgressCreateManyCourseInputEnvelope = {
    data: UserCourseProgressCreateManyCourseInput | UserCourseProgressCreateManyCourseInput[]
  }

  export type SubtopicUpsertWithWhereUniqueWithoutCourseInput = {
    where: SubtopicWhereUniqueInput
    update: XOR<SubtopicUpdateWithoutCourseInput, SubtopicUncheckedUpdateWithoutCourseInput>
    create: XOR<SubtopicCreateWithoutCourseInput, SubtopicUncheckedCreateWithoutCourseInput>
  }

  export type SubtopicUpdateWithWhereUniqueWithoutCourseInput = {
    where: SubtopicWhereUniqueInput
    data: XOR<SubtopicUpdateWithoutCourseInput, SubtopicUncheckedUpdateWithoutCourseInput>
  }

  export type SubtopicUpdateManyWithWhereWithoutCourseInput = {
    where: SubtopicScalarWhereInput
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyWithoutCourseInput>
  }

  export type SubtopicScalarWhereInput = {
    AND?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
    OR?: SubtopicScalarWhereInput[]
    NOT?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
    id?: StringFilter<"Subtopic"> | string
    courseId?: StringFilter<"Subtopic"> | string
    title?: StringFilter<"Subtopic"> | string
    description?: StringNullableFilter<"Subtopic"> | string | null
    notes?: StringNullableFilter<"Subtopic"> | string | null
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutCourseInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutCourseInput, SubscriptionUncheckedUpdateWithoutCourseInput>
    create: XOR<SubscriptionCreateWithoutCourseInput, SubscriptionUncheckedCreateWithoutCourseInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutCourseInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutCourseInput, SubscriptionUncheckedUpdateWithoutCourseInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutCourseInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutCourseInput, UserCourseProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutCourseInput, UserCourseProgressUncheckedUpdateWithoutCourseInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutCourseInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutSubtopicsInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCourseInput
    progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSubtopicsInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCourseInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSubtopicsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSubtopicsInput, CourseUncheckedCreateWithoutSubtopicsInput>
  }

  export type QuizCreateWithoutSubtopicInput = {
    id?: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
    revisionHub?: RevisionHubCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutSubtopicInput = {
    id?: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutSubtopicInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSubtopicInput, QuizUncheckedCreateWithoutSubtopicInput>
  }

  export type QuizCreateManySubtopicInputEnvelope = {
    data: QuizCreateManySubtopicInput | QuizCreateManySubtopicInput[]
  }

  export type UserCourseProgressCreateWithoutSubtopicInput = {
    id?: string
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    course: CourseCreateNestedOneWithoutProgressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutSubtopicInput = {
    id?: string
    userId: string
    courseId: string
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressCreateOrConnectWithoutSubtopicInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutSubtopicInput, UserCourseProgressUncheckedCreateWithoutSubtopicInput>
  }

  export type UserCourseProgressCreateManySubtopicInputEnvelope = {
    data: UserCourseProgressCreateManySubtopicInput | UserCourseProgressCreateManySubtopicInput[]
  }

  export type RevisionHubCreateWithoutSubtopicInput = {
    id?: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRevisionHubInput
    quiz?: QuizCreateNestedOneWithoutRevisionHubInput
  }

  export type RevisionHubUncheckedCreateWithoutSubtopicInput = {
    id?: string
    userId: string
    quizId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubCreateOrConnectWithoutSubtopicInput = {
    where: RevisionHubWhereUniqueInput
    create: XOR<RevisionHubCreateWithoutSubtopicInput, RevisionHubUncheckedCreateWithoutSubtopicInput>
  }

  export type RevisionHubCreateManySubtopicInputEnvelope = {
    data: RevisionHubCreateManySubtopicInput | RevisionHubCreateManySubtopicInput[]
  }

  export type CourseUpsertWithoutSubtopicsInput = {
    update: XOR<CourseUpdateWithoutSubtopicsInput, CourseUncheckedUpdateWithoutSubtopicsInput>
    create: XOR<CourseCreateWithoutSubtopicsInput, CourseUncheckedCreateWithoutSubtopicsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSubtopicsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSubtopicsInput, CourseUncheckedUpdateWithoutSubtopicsInput>
  }

  export type CourseUpdateWithoutSubtopicsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCourseNestedInput
    progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSubtopicsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCourseNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type QuizUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutSubtopicInput, QuizUncheckedUpdateWithoutSubtopicInput>
    create: XOR<QuizCreateWithoutSubtopicInput, QuizUncheckedCreateWithoutSubtopicInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutSubtopicInput, QuizUncheckedUpdateWithoutSubtopicInput>
  }

  export type QuizUpdateManyWithWhereWithoutSubtopicInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    subtopicId?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questions?: JsonFilter<"Quiz">
    duration?: IntNullableFilter<"Quiz"> | number | null
    isPreview?: BoolFilter<"Quiz"> | boolean
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutSubtopicInput, UserCourseProgressUncheckedUpdateWithoutSubtopicInput>
    create: XOR<UserCourseProgressCreateWithoutSubtopicInput, UserCourseProgressUncheckedCreateWithoutSubtopicInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutSubtopicInput, UserCourseProgressUncheckedUpdateWithoutSubtopicInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutSubtopicInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type RevisionHubUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: RevisionHubWhereUniqueInput
    update: XOR<RevisionHubUpdateWithoutSubtopicInput, RevisionHubUncheckedUpdateWithoutSubtopicInput>
    create: XOR<RevisionHubCreateWithoutSubtopicInput, RevisionHubUncheckedCreateWithoutSubtopicInput>
  }

  export type RevisionHubUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: RevisionHubWhereUniqueInput
    data: XOR<RevisionHubUpdateWithoutSubtopicInput, RevisionHubUncheckedUpdateWithoutSubtopicInput>
  }

  export type RevisionHubUpdateManyWithWhereWithoutSubtopicInput = {
    where: RevisionHubScalarWhereInput
    data: XOR<RevisionHubUpdateManyMutationInput, RevisionHubUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type SubtopicCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSubtopicsInput
    progress?: UserCourseProgressCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutQuizzesInput = {
    id?: string
    courseId: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutQuizzesInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutQuizzesInput, SubtopicUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizAttemptCreateWithoutQuizInput = {
    id?: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizAttemptCreateOrConnectWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptCreateManyQuizInputEnvelope = {
    data: QuizAttemptCreateManyQuizInput | QuizAttemptCreateManyQuizInput[]
  }

  export type RevisionHubCreateWithoutQuizInput = {
    id?: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRevisionHubInput
    subtopic?: SubtopicCreateNestedOneWithoutRevisionHubInput
  }

  export type RevisionHubUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubCreateOrConnectWithoutQuizInput = {
    where: RevisionHubWhereUniqueInput
    create: XOR<RevisionHubCreateWithoutQuizInput, RevisionHubUncheckedCreateWithoutQuizInput>
  }

  export type RevisionHubCreateManyQuizInputEnvelope = {
    data: RevisionHubCreateManyQuizInput | RevisionHubCreateManyQuizInput[]
  }

  export type SubtopicUpsertWithoutQuizzesInput = {
    update: XOR<SubtopicUpdateWithoutQuizzesInput, SubtopicUncheckedUpdateWithoutQuizzesInput>
    create: XOR<SubtopicCreateWithoutQuizzesInput, SubtopicUncheckedCreateWithoutQuizzesInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutQuizzesInput, SubtopicUncheckedUpdateWithoutQuizzesInput>
  }

  export type SubtopicUpdateWithoutQuizzesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSubtopicsNestedInput
    progress?: UserCourseProgressUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutQuizzesInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: UserCourseProgressUncheckedUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutQuizInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutQuizInput>
  }

  export type RevisionHubUpsertWithWhereUniqueWithoutQuizInput = {
    where: RevisionHubWhereUniqueInput
    update: XOR<RevisionHubUpdateWithoutQuizInput, RevisionHubUncheckedUpdateWithoutQuizInput>
    create: XOR<RevisionHubCreateWithoutQuizInput, RevisionHubUncheckedCreateWithoutQuizInput>
  }

  export type RevisionHubUpdateWithWhereUniqueWithoutQuizInput = {
    where: RevisionHubWhereUniqueInput
    data: XOR<RevisionHubUpdateWithoutQuizInput, RevisionHubUncheckedUpdateWithoutQuizInput>
  }

  export type RevisionHubUpdateManyWithWhereWithoutQuizInput = {
    where: RevisionHubScalarWhereInput
    data: XOR<RevisionHubUpdateManyMutationInput, RevisionHubUncheckedUpdateManyWithoutQuizInput>
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type CourseCreateWithoutSubscriptionsInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicCreateNestedManyWithoutCourseInput
    progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicUncheckedCreateNestedManyWithoutCourseInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSubscriptionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSubscriptionsInput, CourseUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutSubscriptionsInput = {
    update: XOR<CourseUpdateWithoutSubscriptionsInput, CourseUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<CourseCreateWithoutSubscriptionsInput, CourseUncheckedCreateWithoutSubscriptionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSubscriptionsInput, CourseUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CourseUpdateWithoutSubscriptionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUpdateManyWithoutCourseNestedInput
    progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSubscriptionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUncheckedUpdateManyWithoutCourseNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type CourseCreateWithoutProgressInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicCreateNestedManyWithoutCourseInput
    subscriptions?: SubscriptionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutProgressInput = {
    id?: string
    title: string
    description: string
    thumbnail?: string | null
    price: number
    category?: string | null
    difficulty?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopics?: SubtopicUncheckedCreateNestedManyWithoutCourseInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutProgressInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
  }

  export type SubtopicCreateWithoutProgressInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSubtopicsInput
    quizzes?: QuizCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutProgressInput = {
    id?: string
    courseId: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutSubtopicInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutProgressInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutProgressInput, SubtopicUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutProgressInput = {
    update: XOR<CourseUpdateWithoutProgressInput, CourseUncheckedUpdateWithoutProgressInput>
    create: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutProgressInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutProgressInput, CourseUncheckedUpdateWithoutProgressInput>
  }

  export type CourseUpdateWithoutProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUpdateManyWithoutCourseNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopics?: SubtopicUncheckedUpdateManyWithoutCourseNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubtopicUpsertWithoutProgressInput = {
    update: XOR<SubtopicUpdateWithoutProgressInput, SubtopicUncheckedUpdateWithoutProgressInput>
    create: XOR<SubtopicCreateWithoutProgressInput, SubtopicUncheckedCreateWithoutProgressInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutProgressInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutProgressInput, SubtopicUncheckedUpdateWithoutProgressInput>
  }

  export type SubtopicUpdateWithoutProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSubtopicsNestedInput
    quizzes?: QuizUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutProgressInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type UserCreateWithoutQuizAttemptsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizAttemptsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type QuizCreateWithoutAttemptsInput = {
    id?: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopic: SubtopicCreateNestedOneWithoutQuizzesInput
    revisionHub?: RevisionHubCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutAttemptsInput = {
    id?: string
    subtopicId: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    revisionHub?: RevisionHubUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutAttemptsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
  }

  export type UserUpsertWithoutQuizAttemptsInput = {
    update: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserUpdateWithoutQuizAttemptsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizAttemptsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutAttemptsInput = {
    update: XOR<QuizUpdateWithoutAttemptsInput, QuizUncheckedUpdateWithoutAttemptsInput>
    create: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutAttemptsInput, QuizUncheckedUpdateWithoutAttemptsInput>
  }

  export type QuizUpdateWithoutAttemptsInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUpdateOneRequiredWithoutQuizzesNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutAttemptsInput = {
    subtopicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserCreateWithoutRevisionHubInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRevisionHubInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRevisionHubInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRevisionHubInput, UserUncheckedCreateWithoutRevisionHubInput>
  }

  export type QuizCreateWithoutRevisionHubInput = {
    id?: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopic: SubtopicCreateNestedOneWithoutQuizzesInput
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutRevisionHubInput = {
    id?: string
    subtopicId: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutRevisionHubInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutRevisionHubInput, QuizUncheckedCreateWithoutRevisionHubInput>
  }

  export type SubtopicCreateWithoutRevisionHubInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSubtopicsInput
    quizzes?: QuizCreateNestedManyWithoutSubtopicInput
    progress?: UserCourseProgressCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutRevisionHubInput = {
    id?: string
    courseId: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutSubtopicInput
    progress?: UserCourseProgressUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutRevisionHubInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutRevisionHubInput, SubtopicUncheckedCreateWithoutRevisionHubInput>
  }

  export type UserUpsertWithoutRevisionHubInput = {
    update: XOR<UserUpdateWithoutRevisionHubInput, UserUncheckedUpdateWithoutRevisionHubInput>
    create: XOR<UserCreateWithoutRevisionHubInput, UserUncheckedCreateWithoutRevisionHubInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRevisionHubInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRevisionHubInput, UserUncheckedUpdateWithoutRevisionHubInput>
  }

  export type UserUpdateWithoutRevisionHubInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRevisionHubInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutRevisionHubInput = {
    update: XOR<QuizUpdateWithoutRevisionHubInput, QuizUncheckedUpdateWithoutRevisionHubInput>
    create: XOR<QuizCreateWithoutRevisionHubInput, QuizUncheckedCreateWithoutRevisionHubInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutRevisionHubInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutRevisionHubInput, QuizUncheckedUpdateWithoutRevisionHubInput>
  }

  export type QuizUpdateWithoutRevisionHubInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUpdateOneRequiredWithoutQuizzesNestedInput
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutRevisionHubInput = {
    subtopicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type SubtopicUpsertWithoutRevisionHubInput = {
    update: XOR<SubtopicUpdateWithoutRevisionHubInput, SubtopicUncheckedUpdateWithoutRevisionHubInput>
    create: XOR<SubtopicCreateWithoutRevisionHubInput, SubtopicUncheckedCreateWithoutRevisionHubInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutRevisionHubInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutRevisionHubInput, SubtopicUncheckedUpdateWithoutRevisionHubInput>
  }

  export type SubtopicUpdateWithoutRevisionHubInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSubtopicsNestedInput
    quizzes?: QuizUpdateManyWithoutSubtopicNestedInput
    progress?: UserCourseProgressUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutRevisionHubInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutSubtopicNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    courseId: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressCreateManyUserInput = {
    id?: string
    courseId: string
    subtopicId?: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizAttemptCreateManyUserInput = {
    id?: string
    quizId: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubCreateManyUserInput = {
    id?: string
    quizId?: string | null
    subtopicId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUpdateWithoutUserInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutProgressNestedInput
    subtopic?: SubtopicUpdateOneWithoutProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUpdateWithoutUserInput = {
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    quizId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    quizId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneWithoutRevisionHubNestedInput
    subtopic?: SubtopicUpdateOneWithoutRevisionHubNestedInput
  }

  export type RevisionHubUncheckedUpdateWithoutUserInput = {
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUncheckedUpdateManyWithoutUserInput = {
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicCreateManyCourseInput = {
    id?: string
    title: string
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyCourseInput = {
    id?: string
    userId: string
    paymentId?: string | null
    orderId?: string | null
    status: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressCreateManyCourseInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutSubtopicNestedInput
    progress?: UserCourseProgressUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutSubtopicNestedInput
    progress?: UserCourseProgressUncheckedUpdateManyWithoutSubtopicNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateManyWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutCourseInput = {
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUpdateWithoutCourseInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    subtopic?: SubtopicUpdateOneWithoutProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManySubtopicInput = {
    id?: string
    title: string
    questions: InputJsonValue
    duration?: number | null
    isPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCourseProgressCreateManySubtopicInput = {
    id?: string
    userId: string
    courseId: string
    progress: number
    quizzesCompleted: number
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubCreateManySubtopicInput = {
    id?: string
    userId: string
    quizId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateWithoutSubtopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
    revisionHub?: RevisionHubUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutSubtopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
    revisionHub?: RevisionHubUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutSubtopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    questions?: InputJsonValue | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUpdateWithoutSubtopicInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutSubtopicInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutSubtopicInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    quizzesCompleted?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUpdateWithoutSubtopicInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRevisionHubNestedInput
    quiz?: QuizUpdateOneWithoutRevisionHubNestedInput
  }

  export type RevisionHubUncheckedUpdateWithoutSubtopicInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUncheckedUpdateManyWithoutSubtopicInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyQuizInput = {
    id?: string
    userId: string
    answers: InputJsonValue
    score: number
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionHubCreateManyQuizInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizAttemptUpdateWithoutQuizInput = {
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutQuizInput = {
    userId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizInput = {
    userId?: StringFieldUpdateOperationsInput | string
    answers?: InputJsonValue | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUpdateWithoutQuizInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRevisionHubNestedInput
    subtopic?: SubtopicUpdateOneWithoutRevisionHubNestedInput
  }

  export type RevisionHubUncheckedUpdateWithoutQuizInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHubUncheckedUpdateManyWithoutQuizInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}