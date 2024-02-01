import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { openFigma } from "../utils/open-figma";

interface Props {
    className?: string;
}

export const DocRefineLogo = ({ className }: Props) => {
    return (
        <div
            className={clsx(
                "flex",
                "items-center justify-start",
                "gap-2",
                "no-underline",
                className,
            )}
        >
            <Link
                to="/"
                className={clsx("no-underline", "flex items-center gap-2")}
                onContextMenu={openFigma}
            >
                <Logo className="text-refine-cyan dark:text-refine-cyan-alt" />
                <span
                    className={clsx(
                        "text-gray-1000 dark:text-gray-0",
                        "text-base",
                        "font-semibold",
                    )}
                >
                    OpenPanel
                </span>
            </Link>
            <span
                className={clsx(
                    "block",
                    "h-6",
                    "w-px",
                    "mx-1",
                    "bg-gray-300 dark:bg-gray-600",
                )}
            />
            <Link to="/docs" className={clsx("no-underline")}>
                <span
                    className={clsx(
                        "text-gray-1000 dark:text-gray-0",
                        "text-base font-normal",
                    )}
                >
                    Documentation
                </span>
            </Link>
        </div>
    );
};

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <g fill="currentColor">
	  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	  <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
	  <path d="M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12" />
	  <path d="M7 8v.01" />
	  <path d="M7 16v.01" />
	  <path d="M20 15l-2 3h3l-2 3" />
        </g>
    </svg>
);
