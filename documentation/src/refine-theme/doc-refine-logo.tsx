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
                        "font-bold",
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
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="24" height="24" viewBox="0 0 213.000000 215.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,215.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
<path d="M990 2071 c-39 -13 -141 -66 -248 -129 -53 -32 -176 -103 -272 -158
-206 -117 -276 -177 -306 -264 -17 -50 -19 -88 -19 -460 0 -476 0 -474 94
-568 55 -56 124 -98 604 -369 169 -95 256 -104 384 -37 104 54 532 303 608
353 76 50 126 113 147 184 8 30 12 160 12 447 0 395 -1 406 -22 461 -34 85
-98 138 -317 264 -104 59 -237 136 -295 170 -153 90 -194 107 -275 111 -38 2
-81 0 -95 -5z m205 -561 c66 -38 166 -95 223 -127 l102 -58 0 -262 c0 -262 0
-263 -22 -276 -13 -8 -52 -31 -88 -51 -36 -21 -126 -72 -200 -115 l-135 -78
-3 261 -3 261 -166 95 c-91 52 -190 109 -219 125 -30 17 -52 34 -51 39 3 9
424 256 437 255 3 0 59 -31 125 -69z"/>
</g>
</svg>
);
