import React from "react";
import parseHtml from "html-react-parser";
import type { RefineProps } from "@refinedev/core";
import { RefineCommonScope } from "./common";
import * as RefineChakra from "@refinedev/chakra-ui";
import * as ChakraUI from "@chakra-ui/react";
import * as ReactHookForm from "react-hook-form";
import axios from "axios";

const SIMPLE_REST_API_URL = "https://api.fake-rest.refine.dev";

const RefineChakraDemo: React.FC<
    Partial<RefineProps> & {
        initialRoutes?: string[];
    }
> = ({ initialRoutes, ...rest }) => {
    if (initialRoutes) {
        RefineCommonScope.setInitialRoutes(initialRoutes);
    }

    return (
        <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>
            <RefineCommonScope.RefineCore.Refine
                legacyRouterProvider={
                    RefineCommonScope.LegacyRefineReactRouterV6.default
                }
                dataProvider={RefineCommonScope.RefineSimpleRest.default(
                    SIMPLE_REST_API_URL,
                )}
                notificationProvider={RefineChakra.notificationProvider}
                Layout={RefineChakra.Layout}
                Sider={() => null}
                catchAll={<RefineChakra.ErrorComponent />}
                options={{
                    disableTelemetry: true,
                    reactQuery: {
                        devtoolConfig: false,
                    },
                }}
                {...rest}
            />
        </ChakraUI.ChakraProvider>
    );
};

const ThemedTitleV2: typeof RefineChakra.ThemedTitleV2 = ({
    collapsed,
    wrapperStyles,
    text: textFromProps,
    icon: iconFromProps,
}) => {
    const [svgContent, setSvgContent] = React.useState<string | undefined>(
        window.__refineIconSVGContent || undefined,
    );
    const [title, setTitle] = React.useState<string | undefined>(
        window.__refineTitleContent || undefined,
    );

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const messageListener = (event: MessageEvent) => {
                if (event.data.type === "UPDATE_DYNAMIC_VALUES") {
                    if (event.data.payload?.title) {
                        setTitle(event.data.payload?.title);

                        if (typeof window !== "undefined") {
                            window.__refineTitleContent =
                                event.data.payload?.title;
                        }
                    }

                    if (event.data.payload?.icon) {
                        try {
                            axios
                                .get(`/assets/icons/${event.data.payload.icon}`)
                                .then((res) => {
                                    const content = res.data
                                        .replace(
                                            /fill\=\"white\"/g,
                                            `fill="currentColor"`,
                                        )
                                        .replace(
                                            /stroke\=\"white\"/g,
                                            `stroke="currentColor"`,
                                        );

                                    setSvgContent(content);

                                    if (typeof window !== "undefined") {
                                        window.__refineIconSVGContent = content;
                                    }
                                });
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            };

            window.addEventListener("message", messageListener);

            return () => {
                window.removeEventListener("message", messageListener);
            };
        }

        return () => undefined;
    }, []);

    return (
        <RefineChakra.ThemedTitleV2
            collapsed={collapsed}
            wrapperStyles={wrapperStyles}
            text={title || textFromProps}
            icon={svgContent ? parseHtml(svgContent) : iconFromProps}
        />
    );
};

const ChakraProvider = ({
    children,
    theme,
}: {
    children?: React.ReactNode;
    theme: any;
}) => {
    const [themeFromWindow, setThemeFromWindow] = React.useState<
        undefined | string
    >(undefined);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const messageListener = (event: MessageEvent) => {
                if (event.data.type === "UPDATE_DYNAMIC_VALUES") {
                    if (event.data.payload.theme) {
                        setThemeFromWindow(event.data.payload.theme);
                    }
                }
            };

            window.addEventListener("message", messageListener);

            return () => {
                window.removeEventListener("message", messageListener);
            };
        }

        return () => undefined;
    }, []);

    return (
        <ChakraUI.ChakraProvider
            theme={
                themeFromWindow && themeFromWindow in RefineChakra.RefineThemes
                    ? RefineChakra.RefineThemes[
                          themeFromWindow as keyof typeof RefineChakra.RefineThemes
                      ]
                    : theme
            }
        >
            {children}
        </ChakraUI.ChakraProvider>
    );
};

const AntdScope = {
    // ...RefineCommonScope,
    // RefineAntdDemo,
    // RefineAntd,
    // RefineMuiDemo,
    // RefineMui,
    // RefineMantine,
    // RefineMantineDemo,
    RefineChakra: {
        ...RefineChakra,
        ThemedTitleV2,
    },
    RefineChakraDemo,
    ChakraUI: {
        ...ChakraUI,
        ChakraProvider,
    },
    ReactHookForm,
    // // Other Packages
    // RefineReactHookForm,
    // RefineReactTable,
};

export default AntdScope;
