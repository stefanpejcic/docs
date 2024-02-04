import React, { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import {
    AuthenticationIcon,
    ChartsIcon,
    DataTablesIcon,
    FormsIcon,
    ListIcon,
    WizardsIcon,
} from "../components/landing/icons";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Props = {
    className?: string;
};

export const LandingSweetSpot: FC<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    const isBrowser = useIsBrowser();

    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === "dark";

    const [activeIndex, setActiveIndex] = useState(0);
    const activeListItem = list[activeIndex];

    const [shouldIncrement, setShouldIncrement] = useState(true);

    useEffect(() => {
        if (!shouldIncrement) {
            return;
        }

        let interval: NodeJS.Timeout;
        if (inView) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % list.length);
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [shouldIncrement, inView]);

    return (
        <div ref={ref} className={clsx(className, "w-full")}>
            <div
                className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
            >
                <h2
                    className={clsx(
                        "text-2xl landing-sm:text-[32px]",
                        "tracking-tight",
                        "text-start",
                        "p-0",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    The{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        sweet spot
                    </span>{" "}
                    between shared hosting and VPS.
                </h2>
                <p
                    className={clsx(
                        "mt-4 landing-sm:mt-6",
                        "max-w-md",
                        "text-base",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    Every OpenPanel user enjoys a dedicated and isolated environment where they can install services, define PHP limits, install new versions, and configure various components such as Redis and Elasticsearch.
                </p>
            </div>

            <div className={clsx("mt-8 landing-sm:mt-12 landing-lg:mt-20")}>
                <div
                    className={clsx(
                        "select-none",
                        "relative",
                        "h-[752px] landing-sm:h-[874px] landing-md:h-[984px] landing-lg:h-[688px]",
                        "not-prose",
                        "pt-4 landing-sm:pt-10 landing-lg:pt-20",
                        "pb-4 landing-lg:pb-0",
                        "pl-4 landing-sm:pl-10",
                        "dark:bg-gray-800 bg-gray-50",
                        "rounded-2xl landing-sm:rounded-3xl",
                        "overflow-hidden",
                        "dark:bg-noise",
                    )}
                >
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            key={activeIndex}
                            className={clsx(
                                "absolute",
                                "inset-0",
                                "z-0",
                                "landing-xs:bg-landing-sweet-spot-glow-position-xs",
                                "landing-lg:bg-landing-sweet-spot-glow-position-lg",
                                "landing-md:bg-landing-sweet-spot-glow-position-md",
                                "landing-xs:bg-landing-sweet-spot-glow-size-xs",
                                "landing-lg:bg-landing-sweet-spot-glow-size-lg",
                                activeListItem.backgroundImage,
                            )}
                            style={{
                                backgroundRepeat: "repeat, no-repeat",
                            }}
                        />
                    </AnimatePresence>
                    <div
                        className={clsx(
                            "relative",
                            "z-[1]",
                            "h-full w-full",
                            "flex flex-col landing-lg:grid landing-lg:grid-cols-12",
                        )}
                    >
                        <div
                            className={clsx(
                                "not-prose",
                                "pr-6 landing-sm:pr-0",
                                "landing-sm:max-w-[540px] landing-md:max-w-[760px] landing-lg:max-w-[416px]",
                                "landing-lg:col-span-5",
                                "landing-lg:mt-16",
                            )}
                        >
                            <h3
                                className={clsx(
                                    "text-base landing-sm:text-xl font-semibold",
                                    "dark:text-gray-300 text-gray-700",
                                )}
                            >
                                {activeListItem.title}
                            </h3>
                            <p
                                className={clsx(
                                    "mt-6",
                                    "text-base",
                                    "dark:text-gray-400 text-gray-600",
                                )}
                            >
                                {activeListItem.description}
                            </p>
                            <div
                                className={clsx(
                                    "mt-4 landing-sm:mt-10",
                                    "w-max",
                                    "grid",
                                    "grid-cols-2 landing-sm:grid-cols-3 landing-lg:grid-cols-2",
                                    "landing-sm:gap-x-2 gap-y-4",
                                    "not-prose",
                                )}
                            >
                                {list.map((item, index) => {
                                    const active = index === activeIndex;
                                    const Icon = item.icon;

                                    return (
                                        <button
                                            key={item.iconText}
                                            onClick={() => {
                                                setShouldIncrement(false);
                                                setActiveIndex(index);
                                            }}
                                            className={clsx(
                                                "appearance-none",
                                                "focus:outline-none",
                                                "cursor-pointer",
                                                active
                                                    ? "dark:bg-gray-900 bg-gray-0"
                                                    : "dark:bg-gray-900/50 bg-gray-0/50",

                                                "w-max",
                                                "flex",
                                                "items-center",
                                                "justify-start",
                                                "gap-1",
                                                "px-4 py-2",
                                                "rounded-full",
                                                "text-sm landing-sm:text-base",
                                            )}
                                        >
                                            <div>
                                                <Icon active={active} />
                                            </div>
                                            <div
                                                className={clsx(
                                                    active
                                                        ? "dark:text-gray-0 text-gray-900"
                                                        : "dark:text-gray-400 text-gray-600",
                                                )}
                                            >
                                                {item.iconText}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        {isBrowser && (
                            <div
                                className={clsx(
                                    "relative",
                                    "h-full",
                                    "mt-4 landing-sm:mt-[72px] landing-lg:mt-0",
                                    "flex",
                                    "landing-lg:col-start-7 landing-lg:col-end-13",
                                )}
                            >
                                <div
                                    className={clsx(
                                        "w-full",
                                        "h-full",
                                        "landing-sweet-spot-mask",
                                        "z-[1]",
                                        "landing-lg:absolute",
                                        "top-0 right-0",
                                    )}
                                >
                                    {list.map((item, index) => {
                                        const active = index === activeIndex;

                                        return (
                                            <img
                                                key={index}
                                                src={
                                                    isDarkTheme
                                                        ? item.image1Dark
                                                        : item.image1Light
                                                }
                                                alt="UI of refine"
                                                className={clsx(
                                                    "block",
                                                    "object-cover",
                                                    "object-left-top",
                                                    "w-full landing-md:w-[874px] landing-lg:w-full",
                                                    "h-full landing-lg:h-[464px]",
                                                    "landing-md:pl-20 landing-lg:pl-0",
                                                    "absolute",
                                                    "top-0 right-0",
                                                    active && "delay-300",
                                                    active
                                                        ? "translate-x-0"
                                                        : "translate-x-full",
                                                    active
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                    "transition-[transform,opacity] duration-500 ease-in-out",
                                                )}
                                            />
                                        );
                                    })}
                                </div>

                                {list.map((item, index) => {
                                    const active = index === activeIndex;

                                    return (
                                        <div
                                            key={index}
                                            className={clsx(
                                                "block",
                                                "z-[2]",
                                                "w-[328px] landing-sm:w-[488px]",
                                                "absolute",
                                                "bottom-0 landing-sm:bottom-[4px] landing-lg:bottom-[78px]",
                                                "-left-2 landing-lg:-left-20",
                                                "rounded-xl",
                                                "dark:bg-gray-900 bg-gray-0",
                                                "dark:shadow-landing-sweet-spot-code-dark",
                                                "shadow-landing-sweet-spot-code-light",
                                                active && "delay-300",
                                                active
                                                    ? "translate-y-0"
                                                    : "translate-y-full",
                                                active
                                                    ? "opacity-100"
                                                    : "opacity-0",
                                                "transition-[transform,opacity] duration-500 ease-in-out",
                                            )}
                                        >
                                            <img
                                                src={
                                                    isDarkTheme
                                                        ? item.image2Dark
                                                        : item.image2Light
                                                }
                                                alt="Code of OpenPanel"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const list = [
    {
        title: "A Technology Stack for the modern Web",
        description: `We use modern, lightweight, proven technologies to deliver high-performance.`,
        icon: (props: { active: boolean }) => (
        <svg width="24" height="24" viewBox="-17.5 0 291 291" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
            <g>
                        <path d="M2.05386819,218.186819 C3.37421203,220.534097 5.28137536,222.294556 7.6286533,223.6149 L120.591404,288.751862 L120.591404,288.751862 C125.28596,291.539255 131.00745,291.539255 135.555301,288.751862 L248.518052,223.6149 C253.212607,220.974212 256,215.986246 256,210.558166 L256,80.2842407 L256,80.2842407 C256,74.8561605 253.212607,69.8681948 248.518052,67.2275072 L135.555301,2.09054441 L135.555301,2.09054441 C130.860745,-0.696848138 125.139255,-0.696848138 120.591404,2.09054441 L120.591404,2.09054441 L7.6286533,67.2275072 C2.78739255,69.8681948 0,74.8561605 0,80.2842407 L0,80.2842407 L0,210.704871 C0,213.345559 0.586819484,215.839542 2.05386819,218.186819" fill="#009639">

        </path>
                        <path d="M91.8372493,195.154155 C91.8372493,203.222923 85.382235,209.677937 77.313467,209.677937 C69.2446991,209.677937 62.7896848,203.222923 62.7896848,195.154155 L62.7896848,195.154155 L62.7896848,95.5415473 C62.7896848,87.7661891 69.6848138,81.4578797 79.2206304,81.4578797 C86.1157593,81.4578797 94.1845272,84.2452722 99.025788,90.2601719 L103.426934,95.5415473 L164.162751,168.160458 L164.162751,95.834957 L164.162751,95.834957 C164.162751,87.7661891 170.617765,81.3111748 178.686533,81.3111748 C186.755301,81.3111748 193.210315,87.7661891 193.210315,95.834957 L193.210315,95.834957 L193.210315,195.447564 C193.210315,203.222923 186.315186,209.531232 176.77937,209.531232 C169.884241,209.531232 161.815473,206.74384 156.974212,200.72894 L91.8372493,122.975358 L91.8372493,195.154155 L91.8372493,195.154155 Z" fill="#FFFFFF">

        </path>
            </g>
        </svg>
        ),
        iconText: "Nginx",
        image1Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-ui-dark.png",
        image1Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-ui-light.png",
        image2Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-code-dark.png",
        image2Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-code.png",
        backgroundImage:
            "dark:bg-landing-sweet-spot-glow-red-dark bg-landing-sweet-spot-glow-red-light",
    },
    {
        title: "A Technology Stack for the modern Web",
        description: `We use modern, lightweight, proven technologies to deliver high-performance.`,
        icon: (props: { active: boolean }) => (
            <ListIcon
                className={clsx(
                    props.active
                        ? "dark:text-[#F98C1F] text-[#F46A25]"
                        : "text-gray-500",
                )}
            />
        ),
        iconText: "Docker",
        image1Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-ui-dark.png",
        image1Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-ui-light.png",
        image2Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-code-dark.png",
        image2Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-code.png",
        backgroundImage:
            "dark:bg-landing-sweet-spot-glow-orange-dark bg-landing-sweet-spot-glow-orange-light",
    },
    {
        title: "A Technology Stack for the modern Web",
        description: `We use modern, lightweight, proven technologies to deliver high-performance.`,
        icon: (props: { active: boolean }) => (
            <ChartsIcon
                className={clsx(
                    props.active
                        ? "dark:text-[#F9D51F] text-[#FF9F1A]"
                        : "text-gray-500",
                )}
            />
        ),
        iconText: "MySQL",
        image1Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-ui-dark.png",
        image1Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-ui-light.png",
        image2Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-code-dark.png",
        image2Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-code.png",
        backgroundImage:
            "dark:bg-landing-sweet-spot-glow-yellow-dark bg-landing-sweet-spot-glow-yellow-light",
    },
    {
        title: "A Technology Stack for the modern Web",
        description: `We use modern, lightweight, proven technologies to deliver high-performance.`,
        icon: (props: { active: boolean }) => (
            <FormsIcon
                className={clsx(
                    props.active
                        ? "dark:text-[#47D1BF] text-[#089191]"
                        : "text-gray-500",
                )}
            />
        ),
        iconText: "REDIS",
        image1Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-ui-dark.png",
        image1Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-ui-light.png",
        image2Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-code-dark.png",
        image2Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-code.png",
        backgroundImage:
            "dark:bg-landing-sweet-spot-glow-cyan-dark bg-landing-sweet-spot-glow-cyan-light",
    },
    {
        title: "A Technology Stack for the modern Web",
        description: `We use modern, lightweight, proven technologies to deliver high-performance.`,
        icon: (props: { active: boolean }) => (
            <WizardsIcon
                className={clsx(
                    props.active
                        ? "dark:text-[#3DB8F5] text-[#1F80E0]"
                        : "text-gray-500",
                )}
            />
        ),
        iconText: "Python",
        image1Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-ui-dark.png",
        image1Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-ui-light.png",
        image2Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-code-dark.png",
        image2Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-code.png",
        backgroundImage:
            "dark:bg-landing-sweet-spot-glow-blue-dark bg-landing-sweet-spot-glow-blue-light",
    },
    {
        title: "A Technology Stack for the modern Web",
        description: `We use modern, lightweight, proven technologies to deliver high-performance.`,
        icon: (props: { active: boolean }) => (
            <AuthenticationIcon
                className={clsx(
                    props.active
                        ? "dark:text-[#5959FF] text-[#693BC6]"
                        : "text-gray-500",
                )}
            />
        ),
        iconText: "UFW",
        image1Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-ui.png",
        image1Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-ui-light.png",
        image2Dark:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-code-dark.png",
        image2Light:
            "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-code.png",
        backgroundImage:
            "dark:bg-landing-sweet-spot-glow-indigo-dark bg-landing-sweet-spot-glow-indigo-light",
    },
];
