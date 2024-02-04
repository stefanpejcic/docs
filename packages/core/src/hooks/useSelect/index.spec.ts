import { renderHook, waitFor } from "@testing-library/react";

import { act, MockJSONServer, mockRouterBindings, TestWrapper } from "@test";

import * as pickResource from "../../definitions/helpers/pick-resource";
import {
    CrudFilters,
    IDataContext,
    IDataMultipleContextProvider,
} from "../../interfaces";
import { useSelect } from "./";

describe("useSelect Hook", () => {
    it("default", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        await waitFor(() => expect(options).toHaveLength(2), { timeout: 2000 });

        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("with nested optionLabel", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    optionLabel: "nested.title",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("defaultValue", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2", "3", "4"],
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer.default,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("defaultValue is not an array", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: "1",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("should success data with resource with optionLabel and optionValue", async () => {
        const { result } = renderHook(
            () =>
                useSelect<{ id: string; slug: string }>({
                    resource: "posts",
                    optionLabel: "slug",
                    optionValue: "id",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            { label: "ut-ad-et", value: "1" },
            { label: "consequatur-molestiae-rerum", value: "2" },
        ]);
    });

    it("should success data with resource with filters", async () => {
        const { result } = renderHook(
            () =>
                useSelect<{ id: string; slug: string }>({
                    resource: "posts",
                    filters: [
                        {
                            field: "slug",
                            operator: "ncontains",
                            value: "test",
                        },
                    ],
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("onSearch debounce with default value (300ms)", async () => {
        const getListMock = jest.fn(() =>
            Promise.resolve({ data: [], total: 0 }),
        );
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    debounce: 300,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default!,
                            getList: getListMock,
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        expect(getListMock).toBeCalledTimes(1);

        const { onSearch } = result.current;

        onSearch("1");

        onSearch("1");

        onSearch("1");

        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(2);
        });

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });
    });

    it("onSearch disabled debounce (0ms)", async () => {
        const getListMock = jest.fn(() => {
            return Promise.resolve({ data: [], total: 0 });
        });
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    debounce: 0,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getList: getListMock,
                        },
                    } as any,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        expect(getListMock).toBeCalledTimes(1);

        const { onSearch } = result.current;

        onSearch("1");
        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(2);
        });

        onSearch("2");
        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(3);
        });

        onSearch("3");
        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(4);
        });

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        onSearch("");
        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(5);
        });

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });
    });

    it("should onSearchFromProp work as expected", async () => {
        const getListMock = jest.fn(() =>
            Promise.resolve({ data: [], total: 0 }),
        );

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    onSearch: (value) => {
                        return [
                            {
                                field: "title",
                                operator: "contains",
                                value,
                            },
                        ];
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default!,
                            getList: getListMock,
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        const { onSearch } = result.current;

        onSearch("1");
        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(2);
        });

        onSearch("");
        await waitFor(() => {
            expect(getListMock).toBeCalledTimes(3);
        });

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });
    });

    it("should invoke queryOptions methods successfully", async () => {
        const mockFunc = jest.fn();

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    queryOptions: {
                        onSuccess: () => {
                            mockFunc();
                        },
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);

        expect(mockFunc).toBeCalled();
    });

    it("should invoke queryOptions methods for defaultValue and default query successfully", async () => {
        const mockFunc = jest.fn();

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    queryOptions: {
                        onSuccess: () => {
                            mockFunc();
                        },
                    },
                    defaultValue: [1],
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);

        // for init call and defaultValue
        expect(mockFunc).toBeCalledTimes(2);
    });

    it("should invoke queryOptions methods for default value successfully", async () => {
        const mockFunc = jest.fn();

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2", "3", "4"],
                    defaultValueQueryOptions: {
                        onSuccess: () => {
                            mockFunc();
                        },
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
        expect(mockFunc).toBeCalled();
    });

    // case: undefined means defaultValueQueryOptions should not provided, queryOptions.enabled should be false
    // case: true, false are inverted in queryOptions.enabled and defaultValueQueryOptions.enabled to test not override each other
    it.each([true, false, undefined])(
        `should use defaultValueQueryOptions as default queryOptions in useMany (case: %p)`,
        async (enabled) => {
            const mockDataProvider = {
                default: {
                    ...MockJSONServer.default,
                    getList: jest.fn(() =>
                        Promise.resolve({ data: [], total: 0 }),
                    ),
                    getMany: jest.fn(() => Promise.resolve({ data: [] })),
                },
            } as IDataMultipleContextProvider;

            renderHook(
                () =>
                    useSelect({
                        resource: "posts",
                        defaultValue: ["1", "2", "3", "4"],
                        ...(typeof enabled === "undefined"
                            ? {}
                            : {
                                  defaultValueQueryOptions: {
                                      enabled: !enabled,
                                  },
                              }),
                        queryOptions: {
                            enabled: !!enabled,
                        },
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: mockDataProvider,
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                if (typeof enabled === "undefined") {
                    expect(mockDataProvider.default?.getList).toBeCalledTimes(
                        0,
                    );
                    expect(mockDataProvider.default?.getMany).toBeCalledTimes(
                        0,
                    );
                    return;
                }

                if (enabled) {
                    expect(mockDataProvider.default?.getList).toBeCalledTimes(
                        1,
                    );
                    expect(mockDataProvider.default?.getMany).toBeCalledTimes(
                        0,
                    );

                    return;
                }

                if (!enabled && typeof enabled !== "undefined") {
                    expect(mockDataProvider.default?.getList).toBeCalledTimes(
                        0,
                    );
                    expect(mockDataProvider.default?.getMany).toBeCalledTimes(
                        1,
                    );
                    return;
                }
            });
        },
    );

    it("should use fetchSize option as pageSize when fetching list", async () => {
        const posts = [
            {
                id: "1",
                title: "Post 1",
            },
            {
                id: "2",
                title: "Post 2",
            },
        ];

        const mockDataProvider = {
            default: {
                ...MockJSONServer.default,
                getList: jest.fn(() =>
                    Promise.resolve({ data: posts, total: 2 }),
                ),
                getMany: jest.fn(() => Promise.resolve({ data: [...posts] })),
            },
        } as IDataMultipleContextProvider;

        renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2"],
                    hasPagination: true,
                    fetchSize: 20,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider as unknown as IDataContext,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await act(() => {});

        expect(mockDataProvider.default?.getList).toHaveBeenCalledWith(
            expect.objectContaining({
                filters: [],
                hasPagination: true,
                pagination: { pageSize: 20, current: 1, mode: "server" },
                resource: "posts",
                meta: {
                    queryContext: {
                        queryKey: [
                            "default",
                            "posts",
                            "list",
                            {
                                filters: [],
                                hasPagination: true,
                                pagination: {
                                    current: 1,
                                    mode: "server",
                                    pageSize: 20,
                                },
                            },
                        ],
                        signal: new AbortController().signal,
                    },
                },
                metaData: {
                    queryContext: {
                        queryKey: [
                            "default",
                            "posts",
                            "list",
                            {
                                filters: [],
                                hasPagination: true,
                                pagination: {
                                    current: 1,
                                    mode: "server",
                                    pageSize: 20,
                                },
                            },
                        ],
                        signal: new AbortController().signal,
                    },
                },
            }),
        );
    });

    it("should use onSearch option to get filters", async () => {
        const posts = [
            {
                id: "1",
                title: "Post 1",
            },
            {
                id: "2",
                title: "Post 2",
            },
        ];

        const mockDataProvider = {
            default: {
                ...MockJSONServer.default,
                getList: jest.fn(() =>
                    Promise.resolve({ data: posts, total: 2 }),
                ),
                getMany: jest.fn(() => Promise.resolve({ data: [...posts] })),
            },
        } as IDataMultipleContextProvider;

        const filters: CrudFilters = [
            {
                field: "field",
                operator: "lt",
                value: "value",
            },
        ];

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2"],
                    onSearch: () => filters,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider:
                        mockDataProvider as unknown as IDataMultipleContextProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        const { onSearch } = result.current;

        expect(mockDataProvider.default?.getList).toHaveBeenCalledWith({
            filters: [],
            hasPagination: false,
            resource: "posts",
            meta: {
                queryContext: {
                    queryKey: [
                        "default",
                        "posts",
                        "list",
                        {
                            hasPagination: false,
                            filters: [],
                        },
                    ],
                    signal: new AbortController().signal,
                },
            },
            metaData: {
                queryContext: {
                    queryKey: [
                        "default",
                        "posts",
                        "list",
                        {
                            hasPagination: false,
                            filters: [],
                        },
                    ],
                    signal: new AbortController().signal,
                },
            },
            pagination: {
                current: 1,
                mode: "off",
                pageSize: 10,
            },
        });

        await act(async () => {
            onSearch("1");
        });

        await waitFor(() => {
            expect(mockDataProvider.default?.getList).toHaveBeenCalledWith({
                filters,
                hasPagination: false,
                resource: "posts",
                meta: {
                    queryContext: {
                        queryKey: [
                            "default",
                            "posts",
                            "list",
                            {
                                hasPagination: false,
                                filters,
                            },
                        ],
                        signal: new AbortController().signal,
                    },
                },
                metaData: {
                    queryContext: {
                        queryKey: [
                            "default",
                            "posts",
                            "list",
                            {
                                hasPagination: false,
                                filters,
                            },
                        ],
                        signal: new AbortController().signal,
                    },
                },
                pagination: {
                    current: 1,
                    mode: "off",
                    pageSize: 10,
                },
            });
        });
    });

    it("should use pagination option as infinite loading when fetching list", async () => {
        const posts = [
            {
                id: "1",
                title: "Post 1",
            },
            {
                id: "2",
                title: "Post 2",
            },
            {
                id: "3",
                title: "Post 3",
            },
        ];

        const mockDataProvider = {
            default: {
                ...MockJSONServer.default,
                getList: jest.fn(() =>
                    Promise.resolve({ data: posts, total: 3 }),
                ),
                getMany: jest.fn(() => Promise.resolve({ data: [...posts] })),
            },
        } as IDataMultipleContextProvider;

        renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2", "3"],
                    hasPagination: true,
                    pagination: {
                        current: 2,
                        pageSize: 1,
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider as unknown as IDataContext,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await act(() => {});

        expect(mockDataProvider.default?.getList).toHaveBeenCalledWith({
            filters: [],
            pagination: { current: 2, mode: "server", pageSize: 1 },
            hasPagination: true,
            resource: "posts",
            meta: {
                queryContext: {
                    queryKey: [
                        "default",
                        "posts",
                        "list",
                        {
                            filters: [],
                            hasPagination: true,
                            pagination: {
                                current: 2,
                                mode: "server",
                                pageSize: 1,
                            },
                        },
                    ],
                    signal: new AbortController().signal,
                },
            },
            metaData: {
                queryContext: {
                    queryKey: [
                        "default",
                        "posts",
                        "list",
                        {
                            filters: [],
                            hasPagination: true,
                            pagination: {
                                current: 2,
                                mode: "server",
                                pageSize: 1,
                            },
                        },
                    ],
                    signal: new AbortController().signal,
                },
            },
        });
    });

    it("should pass meta from resource defination, hook parameter and query parameters to dataProvider", async () => {
        const getListMock = jest.fn();

        renderHook(
            () => useSelect({ resource: "posts", meta: { foo: "bar" } }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getList: getListMock,
                        },
                    },
                    routerProvider: mockRouterBindings({
                        resource: { name: "posts" },
                        params: { baz: "qux" },
                    }),
                    resources: [{ name: "posts", meta: { dip: "dop" } }],
                }),
            },
        );

        await waitFor(() => {
            expect(getListMock).toBeCalled();
        });

        expect(getListMock).toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    foo: "bar",
                    baz: "qux",
                    dip: "dop",
                }),
            }),
        );
    });

    it("two resources with same name, should pass resource meta according to identifier", async () => {
        const getListMock = jest.fn();

        renderHook(() => useSelect({ resource: "recentPosts" }), {
            wrapper: TestWrapper({
                dataProvider: {
                    default: {
                        ...MockJSONServer.default,
                        getList: getListMock,
                    },
                },
                routerProvider: mockRouterBindings({
                    resource: { name: "posts" },
                }),
                resources: [
                    {
                        name: "posts",
                        identifier: "recentPosts",
                        meta: {
                            startDate: "2021-01-01",
                        },
                    },
                    {
                        name: "posts",
                        identifier: "popularPosts",
                        meta: {
                            likes: 100,
                        },
                    },
                ],
            }),
        });

        await waitFor(() => {
            expect(getListMock).toBeCalled();
        });

        expect(getListMock).toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    startDate: "2021-01-01",
                }),
            }),
        );

        expect(getListMock).not.toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    likes: 100,
                }),
            }),
        );
    });

    it("should use resourceFromProps", async () => {
        jest.spyOn(pickResource, "pickResource").mockReturnValue(undefined);

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isSuccess).toBeTruthy();
        });

        const { options } = result.current;

        await waitFor(() => expect(options).toHaveLength(2));

        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("works correctly with `interval` and `onInterval` params", async () => {
        const onInterval = jest.fn();
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    overtimeOptions: {
                        interval: 100,
                        onInterval,
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getList: () => {
                                return new Promise((res) => {
                                    setTimeout(
                                        () =>
                                            res({
                                                data: [],
                                                total: 2,
                                            } as any),
                                        1000,
                                    );
                                });
                            },
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.queryResult.isLoading).toBeTruthy();
            expect(result.current.overtime.elapsedTime).toBe(900);
            expect(onInterval).toBeCalled();
        });

        await waitFor(() => {
            expect(!result.current.queryResult.isLoading).toBeTruthy();
            expect(result.current.overtime.elapsedTime).toBeUndefined();
        });
    });
});
