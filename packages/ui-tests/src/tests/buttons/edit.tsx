import React from "react";
import {
    RefineEditButtonProps,
    RefineButtonTestIds,
} from "@refinedev/ui-types";

import { act, fireEvent, render, TestWrapper, waitFor } from "@test";
import { Route, Routes } from "react-router-dom";

export const buttonEditTests = function (
    EditButton: React.ComponentType<RefineEditButtonProps<any, any>>,
): void {
    describe("[@refinedev/ui-tests] Common Tests / Edit Button", () => {
        const edit = jest.fn();

        beforeAll(() => {
            jest.spyOn(console, "warn").mockImplementation(jest.fn());
        });

        it("should render button successfuly", async () => {
            const { container, getByText } = render(<EditButton />, {
                wrapper: TestWrapper({}),
            });

            expect(container).toBeTruthy();

            expect(getByText("Edit").closest("button")).not.toBeDisabled();
        });

        it("should have the correct test-id", async () => {
            const { queryByTestId } = render(<EditButton />, {
                wrapper: TestWrapper({}),
            });

            expect(queryByTestId(RefineButtonTestIds.EditButton)).toBeTruthy();
        });

        it("should render text by children", async () => {
            const { container, getByText } = render(
                <EditButton>refine</EditButton>,
                {
                    wrapper: TestWrapper({}),
                },
            );

            expect(container).toBeTruthy();

            getByText("refine");
        });

        it("should render without text show only icon", async () => {
            const { container, queryByText } = render(<EditButton hideText />, {
                wrapper: TestWrapper({}),
            });

            expect(container).toBeTruthy();

            expect(queryByText("Edit")).not.toBeInTheDocument();
        });

        describe("access control", () => {
            describe("with global access control only", () => {
                describe("with default behaviour", () => {
                    describe("when user not have access", () => {
                        it("should render disabled button with reason text", async () => {
                            const { container, getByText } = render(
                                <EditButton recordItemId="1">Edit</EditButton>,
                                {
                                    wrapper: TestWrapper({
                                        accessControlProvider: {
                                            can: async ({ params, action }) => {
                                                if (
                                                    action === "edit" &&
                                                    params?.id === "1"
                                                ) {
                                                    return {
                                                        can: false,
                                                        reason: "Access Denied",
                                                    };
                                                }
                                                return {
                                                    can: true,
                                                };
                                            },
                                        },
                                    }),
                                },
                            );

                            expect(container).toBeTruthy();

                            await waitFor(() =>
                                expect(
                                    getByText("Edit").closest("button"),
                                ).toBeDisabled(),
                            );

                            waitFor(() =>
                                expect(
                                    getByText("Edit")
                                        .closest("button")
                                        ?.getAttribute("title"),
                                ).toBe("Access Denied"),
                            );
                        });
                    });

                    describe("when user have access", () => {
                        it("should render enabled button", async () => {
                            const { container, getByText } = render(
                                <EditButton recordItemId="2">Edit</EditButton>,
                                {
                                    wrapper: TestWrapper({
                                        accessControlProvider: {
                                            can: async ({ params, action }) => {
                                                if (
                                                    action === "edit" &&
                                                    params?.id === "1"
                                                ) {
                                                    return {
                                                        can: false,
                                                    };
                                                }
                                                return {
                                                    can: true,
                                                };
                                            },
                                        },
                                    }),
                                },
                            );

                            expect(container).toBeTruthy();

                            await waitFor(() =>
                                expect(
                                    getByText("Edit").closest("button"),
                                ).not.toBeDisabled(),
                            );
                        });
                    });
                });

                describe("when hideIfUnauthorized is true", () => {
                    it("should not render button", async () => {
                        const { container, queryByText } = render(
                            <EditButton>Edit</EditButton>,
                            {
                                wrapper: TestWrapper({
                                    accessControlProvider: {
                                        can: async () => ({ can: false }),
                                        options: {
                                            buttons: {
                                                hideIfUnauthorized: true,
                                            },
                                        },
                                    },
                                }),
                            },
                        );

                        expect(container).toBeTruthy();

                        expect(queryByText("Edit")).not.toBeInTheDocument();
                    });
                });

                describe("when access control is disabled explicitly", () => {
                    it("should render enabled button", async () => {
                        const { container, getByText } = render(
                            <EditButton>Edit</EditButton>,
                            {
                                wrapper: TestWrapper({
                                    accessControlProvider: {
                                        can: async () => ({ can: false }),
                                        options: {
                                            buttons: {
                                                enableAccessControl: false,
                                                hideIfUnauthorized: true,
                                            },
                                        },
                                    },
                                }),
                            },
                        );

                        expect(container).toBeTruthy();

                        expect(
                            getByText("Edit").closest("button"),
                        ).not.toBeDisabled();
                    });
                });
            });

            describe("with global config and accessControl prop", () => {
                describe("when access control enabled globally", () => {
                    describe("when access control is disabled with prop", () => {
                        it("should render enabled button", async () => {
                            const { container, getByText } = render(
                                <EditButton accessControl={{ enabled: false }}>
                                    Edit
                                </EditButton>,
                                {
                                    wrapper: TestWrapper({
                                        accessControlProvider: {
                                            can: async () => {
                                                return {
                                                    can: false,
                                                };
                                            },
                                            options: {
                                                buttons: {
                                                    enableAccessControl: true,
                                                    hideIfUnauthorized: true,
                                                },
                                            },
                                        },
                                    }),
                                },
                            );

                            expect(container).toBeTruthy();

                            await waitFor(() =>
                                expect(
                                    getByText("Edit").closest("button"),
                                ).not.toBeDisabled(),
                            );
                        });
                    });

                    describe("when hideIfUnauthorized false globally", () => {
                        describe("when hideIfUnauthorized enabled with prop", () => {
                            it("should not render button", async () => {
                                const { container, queryByText } = render(
                                    <EditButton
                                        accessControl={{
                                            hideIfUnauthorized: true,
                                        }}
                                    >
                                        Edit
                                    </EditButton>,
                                    {
                                        wrapper: TestWrapper({
                                            accessControlProvider: {
                                                can: async () => ({
                                                    can: false,
                                                }),
                                                options: {
                                                    buttons: {
                                                        hideIfUnauthorized:
                                                            false,
                                                    },
                                                },
                                            },
                                        }),
                                    },
                                );

                                expect(container).toBeTruthy();

                                expect(
                                    queryByText("Edit"),
                                ).not.toBeInTheDocument();
                            });
                        });
                    });
                });

                describe("when access control disabled globally", () => {
                    describe("when access control enabled with prop", () => {
                        it("should render disabled button with reason text", async () => {
                            const { container, getByText } = render(
                                <EditButton accessControl={{ enabled: true }}>
                                    Edit
                                </EditButton>,
                                {
                                    wrapper: TestWrapper({
                                        accessControlProvider: {
                                            can: async () => {
                                                return {
                                                    can: false,
                                                    reason: "Access Denied",
                                                };
                                            },
                                        },
                                    }),
                                },
                            );

                            expect(container).toBeTruthy();

                            await waitFor(() =>
                                expect(
                                    getByText("Edit").closest("button"),
                                ).toBeDisabled(),
                            );

                            waitFor(() =>
                                expect(
                                    getByText("Edit")
                                        .closest("button")
                                        ?.getAttribute("title"),
                                ).toBe("Access Denied"),
                            );
                        });
                    });
                });

                describe("when hideIfUnauthorized enabled globally", () => {
                    describe("when hideIfUnauthorized disabled with prop", () => {
                        it("should render button", async () => {
                            const { container, queryByText } = render(
                                <EditButton
                                    accessControl={{
                                        hideIfUnauthorized: false,
                                    }}
                                >
                                    Edit
                                </EditButton>,
                                {
                                    wrapper: TestWrapper({
                                        accessControlProvider: {
                                            can: async () => ({
                                                can: false,
                                            }),
                                            options: {
                                                buttons: {
                                                    hideIfUnauthorized: true,
                                                },
                                            },
                                        },
                                    }),
                                },
                            );

                            expect(container).toBeTruthy();

                            expect(queryByText("Edit")).toBeInTheDocument();
                        });
                    });
                });
            });
        });

        it("should render called function successfully if click the button", async () => {
            const { getByText } = render(
                <EditButton onClick={() => edit()} />,
                {
                    wrapper: TestWrapper({}),
                },
            );

            await act(async () => {
                fireEvent.click(getByText("Edit"));
            });

            expect(edit).toHaveBeenCalledTimes(1);
        });

        it("should custom resource and recordItemId redirect show route called function successfully if click the button", async () => {
            const { getByText } = render(
                <Routes>
                    <Route
                        path="/:resource"
                        element={
                            <EditButton
                                resourceNameOrRouteName="categories"
                                recordItemId="1"
                            />
                        }
                    />
                </Routes>,
                {
                    wrapper: TestWrapper({
                        resources: [{ name: "posts" }, { name: "categories" }],
                        routerInitialEntries: ["/posts"],
                    }),
                },
            );

            await act(async () => {
                fireEvent.click(getByText("Edit"));
            });

            expect(window.location.pathname).toBe("/categories/edit/1");
        });

        it("should redirect with custom route called function successfully if click the button", async () => {
            const { getByText } = render(
                <Routes>
                    <Route
                        path="/:resource"
                        element={
                            <EditButton
                                resourceNameOrRouteName="custom-route-posts"
                                recordItemId={1}
                            />
                        }
                    />
                </Routes>,
                {
                    wrapper: TestWrapper({
                        resources: [
                            {
                                name: "posts",
                                meta: { route: "custom-route-posts" },
                            },
                            { name: "posts" },
                        ],
                        routerInitialEntries: ["/posts"],
                    }),
                },
            );

            await act(async () => {
                fireEvent.click(getByText("Edit"));
            });

            expect(window.location.pathname).toBe("/custom-route-posts/edit/1");
        });
    });
};
