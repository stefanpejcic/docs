import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";

import { CommonLayout } from "../refine-theme/common-layout";
import { LandingFooter } from "../refine-theme/landing-footer";
import { LandingEnterpriseDevelopers } from "../refine-theme/landing-enterprise-developers";
import { LandingPackages } from "../refine-theme/landing-packages";
import { LandingAlreadyInvented } from "../refine-theme/landing-already-invented";
import { LandingPureReactCode } from "../refine-theme/landing-pure-react-code";
import { LandingSweetSpot } from "../refine-theme/landing-sweet-spot";
import { LandingHeroSection } from "../refine-theme/landing-hero-section";
import { LandingTryItSection } from "../refine-theme/landing-try-it-section";
import { CommonHeader } from "../refine-theme/common-header";

function Home() {
    const title = "OpenPanel | Next Generation Web Hosting Panel";
    return (
        <>
            <Head>
                <html data-active-page="index" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <link
                    rel="preload"
                    href="https://refine.new/embed-form"
                    as="document"
                />
            </Head>
            <CommonLayout description="Web Hosting panel powered by Docker">
                <div className={clsx()}>
                    <CommonHeader />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-16 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40",
                            "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]",
                            "px-2 landing-sm:px-0",
                            "pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40",
                            "mx-auto",
                        )}
                    >
                        <div
                            className={clsx(
                                "mt-0",
                                "landing-sm:mt-8",
                                "landing-lg:mt-20",
                            )}
                        >
                            <LandingHeroSection />
                        </div>
                        <LandingSweetSpot />
                        <div
                            className={clsx(
                                "flex flex-col",
                                "gap-12 landing-md:gap-6",
                            )}
                        >
                            <LandingPackages />
                            <div
                                className={clsx(
                                    "flex flex-col landing-md:flex-row",
                                    "gap-12 landing-md:gap-6",
                                )}
                            >
                                <LandingAlreadyInvented
                                    className={clsx(
                                        "w-full landing-md:w-[50%] landing-lg:w-[538px]",
                                    )}
                                />
                                <LandingPureReactCode
                                    className={clsx(
                                        "w-full landing-md:w-[50%] landing-lg:w-[640px]",
                                    )}
                                />
                            </div>
                        </div>
                        <LandingEnterpriseDevelopers />
                       <LandingTryItSection />
                    </div>
                    <LandingFooter />
                </div>
            </CommonLayout>
        </>
    );
}

export default Home;
