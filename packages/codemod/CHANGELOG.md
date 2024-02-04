# @refinedev/codemod

## 4.1.6

### Patch Changes

-   [#4454](https://github.com/refinedev/refine/pull/4454) [`4bae8add99f`](https://github.com/refinedev/refine/commit/4bae8add99fa4717fb205263a5550cc0fcfe30c0) Thanks [@aliemir](https://github.com/aliemir)! - The latest major update in `@refinedev/mui` to support `@mui/x-data-grid@6` has been released. This update introduces some changes to the existing codebases that `refine-v3-to-v4` codemod cannot cover or has no relation to. We've updated the codemod to install the `v4` version of `@refinedev/mui` to avoid any issues.

## 4.1.5

### Patch Changes

-   [#4454](https://github.com/refinedev/refine/pull/4454) [`4bae8add99f`](https://github.com/refinedev/refine/commit/4bae8add99fa4717fb205263a5550cc0fcfe30c0) Thanks [@aliemir](https://github.com/aliemir)! - The latest major update in `@refinedev/mui` to support `@mui/x-data-grid@6` has been released. This update introduces some changes to the existing codebases that `refine-v3-to-v4` codemod cannot cover or has no relation to. We've updated the codemod to install the `v4` version of `@refinedev/mui` to avoid any issues.

## 4.1.4

### Patch Changes

-   [#4423](https://github.com/refinedev/refine/pull/4423) [`c3b00b20e84`](https://github.com/refinedev/refine/commit/c3b00b20e84d00fb5c9184362ad28e1094f91e5f) Thanks [@BatuhanW](https://github.com/BatuhanW)! - fix: babel transformation error

## 4.1.3

### Patch Changes

-   [#4423](https://github.com/refinedev/refine/pull/4423) [`c3b00b20e84`](https://github.com/refinedev/refine/commit/c3b00b20e84d00fb5c9184362ad28e1094f91e5f) Thanks [@BatuhanW](https://github.com/BatuhanW)! - fix: babel transformation error

## 4.1.2

### Patch Changes

-   [#3929](https://github.com/refinedev/refine/pull/3929) [`c682cfe5cf8`](https://github.com/refinedev/refine/commit/c682cfe5cf8f056d8773e2f23481d0d6d5488c4b) Thanks [@BatuhanW](https://github.com/BatuhanW)! - fix: LoadingButton is still imported from @refinedev/mui

## 4.1.1

### Patch Changes

-   [#3929](https://github.com/refinedev/refine/pull/3929) [`c682cfe5cf8`](https://github.com/refinedev/refine/commit/c682cfe5cf8f056d8773e2f23481d0d6d5488c4b) Thanks [@BatuhanW](https://github.com/BatuhanW)! - fix: LoadingButton is still imported from @refinedev/mui

## 4.1.0

### Minor Changes

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Added transform function to change `metaData` to `meta`.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Added `move-to-new-org` transform to move **refine** packages to their new scope `@refinedev`.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    `Antd` components exported by `@refinedev/antd` have been removed. This codemode will help you move these components into `antd`.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Added transform function to change `useMenu` imports to `"@refinedev/core"`.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Added transform function to change `resourceNameOrRouteName` prop to `resource` in buttons.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!

    -   Added transformation function to renamed `AuthProvider` to `LegacyAuthProvider`.

    -   Added transformation function to add `v3LegacyAuthProviderCompatible: true` to all auth hooks.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    **Moving to the `@refinedev` scope 🎉🎉**

    Moved to the `@refinedev` scope and updated our packages to use the new scope. From now on, all packages will be published under the `@refinedev` scope with their new names.

    Now, we're also removing the `refine` prefix from all packages. So, the `@pankod/refine-core` package is now `@refinedev/core`, `@pankod/refine-antd` is now `@refinedev/antd`, and so on.

### Patch Changes

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    fix: semver dependency

## 3.31.0

### Minor Changes

-   [#3822](https://github.com/refinedev/refine/pull/3822) [`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb) Thanks [@BatuhanW](https://github.com/BatuhanW)! - - refine v4 release announcement added to "postinstall". - refine v4 is released 🎉 The new version is 100% backward compatible. You can upgrade to v4 with a single command! See the migration guide here: https://refine.dev/docs/migration-guide/3x-to-4x

## 3.30.0

### Minor Changes

-   [#3822](https://github.com/refinedev/refine/pull/3822) [`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb) Thanks [@BatuhanW](https://github.com/BatuhanW)! - - refine v4 release announcement added to "postinstall". - refine v4 is released 🎉 The new version is 100% backward compatible. You can upgrade to v4 with a single command! See the migration guide here: https://refine.dev/docs/migration-guide/3x-to-4x

## 3.29.0

### Minor Changes

-   [#3169](https://github.com/refinedev/refine/pull/3169) [`76b0e932a60`](https://github.com/refinedev/refine/commit/76b0e932a60fbbade409a26118098ffe85da6ed6) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Added Ant design v4 to v5 codemod support.

## 3.28.0

### Minor Changes

-   [#3169](https://github.com/refinedev/refine/pull/3169) [`76b0e932a60`](https://github.com/refinedev/refine/commit/76b0e932a60fbbade409a26118098ffe85da6ed6) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Added Ant design v4 to v5 codemod support.

## 3.27.2

### Patch Changes

-   Fixed `@pankod/refine-codemod` build issue

## 3.27.1

### Patch Changes

-   [`031e15e797`](https://github.com/refinedev/refine/commit/031e15e79731c3394623969829e5474b947371c8) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed `@pankod/refine-codemod` build issue

## 3.27.0

### Minor Changes

-   Add Codemod support for changed `columns` usage of `useDataGrid` hook. [#2072](https://github.com/refinedev/refine/pull/2072).

    ```diff
    export const PostsList: React.FC = () => {
    -    const { dataGridProps } = useDataGrid<IPost>({
    -        columns,
    -    });
    +    const { dataGridProps } = useDataGrid<IPost>();
        return (
            <List>
    -            <DataGrid {...dataGridProps} autoHeight />
    +            <DataGrid {...dataGridProps} columns={columns} autoHeight />
            </List>
        );
    };
    ```

## 3.26.0

### Minor Changes

-   [#2072](https://github.com/refinedev/refine/pull/2072) [`bbca622ede`](https://github.com/refinedev/refine/commit/bbca622eded117271350aa178b3e757c890c5bc4) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Add Codemod support for changed `columns` usage of `useDataGrid` hook. [#2072](https://github.com/refinedev/refine/pull/2072).

    ```diff
    export const PostsList: React.FC = () => {
    -    const { dataGridProps } = useDataGrid<IPost>({
    -        columns,
    -    });
    +    const { dataGridProps } = useDataGrid<IPost>();
        return (
            <List>
    -            <DataGrid {...dataGridProps} autoHeight />
    +            <DataGrid {...dataGridProps} columns={columns} autoHeight />
            </List>
        );
    };
    ```
