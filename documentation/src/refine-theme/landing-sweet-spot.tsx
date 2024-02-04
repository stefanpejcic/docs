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
        <svg width="24" height="24" viewBox="0 -2 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
            <path d="M235.648276,194.211632 C221.729851,193.864559 210.942872,195.257272 201.895604,199.083964 C199.285899,200.127406 195.109927,200.128498 194.761767,203.433458 C196.154498,204.826189 196.328034,207.087716 197.546096,209.001055 C199.635192,212.479551 203.287247,217.178343 206.593317,219.614507 C210.246461,222.397748 213.900691,225.180989 217.727416,227.617153 C224.513092,231.793125 232.168625,234.22817 238.779677,238.404123 C242.608577,240.838067 246.434123,243.971711 250.261934,246.581411 C252.176407,247.971926 253.393381,250.234545 255.829549,251.104446 L255.829549,250.582732 C254.611442,249.016479 254.263282,246.754952 253.046308,245.015144 C251.307592,243.275341 249.566702,241.709083 247.826899,239.96928 C242.781025,233.1847 236.518133,227.268984 229.732547,222.397748 C224.166065,218.56995 211.986355,213.35055 209.724764,206.913051 C209.724764,206.913051 209.55014,206.73951 209.376604,206.56597 C213.204371,206.217787 217.727416,204.82618 221.381691,203.781623 C227.297466,202.215374 232.690457,202.563548 238.779677,200.998382 C241.562919,200.30203 244.347292,199.432129 247.130533,198.562222 L247.130533,196.997075 C244.00022,193.864532 241.737588,189.689684 238.431517,186.731778 C229.558965,179.075113 219.815379,171.595269 209.724764,165.332394 C204.330685,161.852792 197.371472,159.590151 191.630412,156.633369 C189.543536,155.587729 186.062797,155.06712 184.845823,153.327299 C181.713302,149.499523 179.973499,144.45476 177.711982,139.930579 C172.668329,130.360605 167.794863,119.749306 163.44541,109.658665 C160.315096,102.872993 158.400651,96.0872892 154.572862,89.8245233 C136.653166,60.2479054 117.167095,42.3281102 87.242308,24.7554574 C80.8048232,21.1023052 73.1503779,19.5360541 64.9730628,17.6227124 C60.6246649,17.4480683 56.2740469,17.1009966 51.9245072,16.9263525 C49.1412661,15.7082579 46.3569195,12.4033092 43.9207465,10.8370441 C34.0058755,4.5730961 8.42942301,-8.99607108 1.1220548,8.92370237 C-3.57563582,20.2324516 8.08126754,31.366477 12.0825475,37.1086812 C15.041536,41.1100178 18.8682195,45.6330512 20.9562053,50.1572463 C22.1742941,53.1129226 22.5213621,56.2465484 23.7394509,59.3779766 C26.523793,67.031339 29.1323922,75.5578744 32.7866404,82.691806 C34.7010855,86.3449577 36.7879657,90.1727422 39.2241297,93.477666 C40.6157457,95.3910055 43.0508086,96.2620126 43.5736286,99.3934363 C41.1385747,102.873029 40.9639284,108.092452 39.5711977,112.441992 C33.3083548,132.101492 35.7445143,156.4588 44.617071,170.89889 C47.4003121,175.247297 54.0124069,184.818421 62.8850316,181.164182 C70.7141415,178.032744 68.9743337,168.115626 71.2358604,159.41661 C71.7586894,157.327523 71.4105022,155.937017 72.4539446,154.545383 C72.4548508,154.718924 72.4539446,154.893561 72.4539446,154.893561 C74.8901041,159.764788 77.3251715,164.46251 79.5866891,169.333656 C84.980736,177.858025 94.3750434,186.731674 102.204103,192.647503 C106.381181,195.777808 109.686136,201.171877 114.905523,203.086313 L114.905523,202.563484 L114.557345,202.563484 C113.512801,200.997231 111.947645,200.301958 110.55602,199.083892 C107.424591,195.952463 103.943884,192.124665 101.50883,188.645081 C94.2025447,178.901486 87.7639408,168.115635 82.0228486,156.980496 C79.2396075,151.587555 76.8034481,145.671734 74.5419214,140.278811 C73.497378,138.189729 73.497378,135.059406 71.7575748,134.015973 C69.1478745,137.842647 65.3211911,141.148717 63.4067461,145.846417 C60.1028916,153.327344 59.7536034,162.548097 58.5355192,172.116947 C57.8402503,172.291598 58.187332,172.116947 57.8391493,172.465138 C52.2726627,171.072408 50.3582176,165.332394 48.2701955,160.460052 C43.0507905,148.107926 42.1808935,128.273684 46.7050387,114.008236 C47.923123,110.353988 53.142528,98.8717128 51.0545422,95.3921019 C50.0110998,92.0860273 46.5303924,90.1726969 44.6170529,87.5629967 C42.3555262,84.2569266 39.9193668,80.082065 38.35421,76.4278576 C34.1782383,66.6853811 32.0902615,55.898411 27.5672354,46.1548154 C25.4792496,41.6306665 21.8261069,36.9340837 18.8682195,32.7592063 C15.563264,28.0615284 11.9090067,24.7554574 9.29927023,19.1878506 C8.43046966,17.2745089 7.21128439,14.1430915 8.60290945,12.0550966 C8.95109211,10.6634847 9.64634733,10.1417599 11.0390689,9.79357497 C13.3005955,7.87912949 19.7380848,10.3152907 21.9995616,11.3587363 C28.4370509,13.9673251 33.8300058,16.4046087 39.2240527,20.0577513 C41.6591111,21.7975523 44.2688113,25.1036232 47.4002396,25.9735239 L51.0544833,25.9735239 C56.6220709,27.1905053 62.8849274,26.3216898 68.1043279,27.8868652 C77.3261638,30.843648 85.6758644,35.1942543 93.1579696,39.8919512 C115.95003,54.332049 134.738553,74.8626147 147.440063,99.3934454 C149.528049,103.39367 150.396845,107.04901 152.31129,111.22389 C155.965538,119.749365 160.488578,128.448376 164.14173,136.799218 C167.794872,144.975401 171.274474,153.327362 176.493861,160.113048 C179.104667,163.765094 189.542403,165.67953 194.240026,167.593975 C197.719632,169.159141 203.113711,170.551871 206.245112,172.465206 C212.159801,176.117243 218.075576,180.29433 223.643145,184.295646 C226.427474,186.382535 235.125402,190.733144 235.648231,194.21165 L235.648276,194.211632 L235.648276,194.211632 Z" fill="#00546B"></path>
            <path d="M58.1864892,43.0222644 C55.2286063,43.0222644 53.1417305,43.3715526 51.0537447,43.8932806 C51.0537447,43.8923744 51.0537447,44.0679225 51.0537447,44.2414633 L51.4019319,44.2414633 C52.794658,47.0247034 55.2286154,48.9391485 56.968414,51.3741978 C58.3611446,54.1574389 59.5781143,56.9417945 60.9708449,59.7261412 C61.1443766,59.5514948 61.3179175,59.3779585 61.3179175,59.3779585 C63.7551915,57.6370498 64.9721657,54.8538087 64.9721657,50.6789426 C63.9276177,49.4608583 63.7540769,48.2427786 62.8841798,47.0246944 C61.8407374,45.283782 59.5781052,44.414995 58.1864892,43.0222644 L58.1864892,43.0222644 L58.1864892,43.0222644 Z" fill="#00546B"></path>
        </svg>
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
