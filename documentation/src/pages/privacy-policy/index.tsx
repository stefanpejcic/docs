import React from "react";
import Head from "@docusaurus/Head";
import { BlogFooter } from "@site/src/refine-theme/blog-footer";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import clsx from "clsx";

const PrivacyPolicy: React.FC = () => {
    return (
        <CommonLayout>
            <Head title="Privacy Policy | OpenPanel">
                <html data-page="privacy_policy" data-customized="true" />
            </Head>
            <div className="refine-prose">
                <CommonHeader hasSticky={true} />

                <div className="flex-1 flex flex-col pt-8 lg:pt-16 pb-32 max-w-[800px] w-full mx-auto px-2">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: April 04, 2023</p>
                    <p>
                      <h1>Contact Us</h1>
                    <p>
                        If you have any questions about this Privacy Policy, You
                        can contact us:
                    </p>
                    <ul>
                        <li>By email: info@openpanel.co</li>
                    </ul>
                </div>
                <BlogFooter />
            </div>
        </CommonLayout>
    );
};

export default PrivacyPolicy;
