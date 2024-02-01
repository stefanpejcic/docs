import {
    DocumentsIcon,
    IntegrationsIcon,
    TutorialIcon,
    ExamplesIcon,
    AwesomeIcon,
    ContributeIcon,
    RefineWeekIcon,
    HackathonsIcon,
    AboutUsIcon,
    StoreIcon,
    MeetIcon,
    BlogIcon,
    NewBadgeIcon,
} from "../icons/popover";

export type NavbarPopoverItemType = {
    isPopover: true;
    label: string;
    items: {
        label: string;
        description: string;
        link: string;
        icon: React.FC;
    }[];
};

export type NavbarItemType = {
    isPopover?: false;
    label: string;
    icon?: React.FC;
    href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
    {
        isPopover: true,
        label: "Products",
        items: [
            {
                label: "OpenPanel",
                description: "End-user interface for hosting websites and domains.",
                link: "/docs/panel/intro",
                icon: ExamplesIcon,
            },
            {
                label: "OpenAdmin",
                description: "Admin-level interface for managing users and servers.",
                link: "/docs/admin/intro/",
                icon: IntegrationsIcon,
            },
        ],
    },
    {
        isPopover: false,
        label: "BETA",
        href: "/beta",
        icon: NewBadgeIcon,
    },
    {
        isPopover: true,
        label: "Community",
        items: [
            {
                label: "Documentation",
                description: "Everything you need to get started.",
                link: "/docs/",
                icon: DocumentsIcon,
            },
            {
                label: "Forums",
                description: "Join our community and help fellow admins!",
                link: "https://community.openpanel.co/",
                icon: ContributeIcon,
            },
            {
                label: "Contributing",
                description: "Help us make OpenPanel even better!",
                link: "https://github.com/stefanpejcic/openpanel-translations",
                icon: HackathonsIcon,
            },
        ],
    },
    {
        isPopover: true,
        label: "Company",
        items: [
            {
                label: "About Us",
                description: "Team & company information.",
                link: "/about",
                icon: AboutUsIcon,
            },
            {
                label: "Become a Partner",
                description: "Offer your clients pre-installed OpenPanel!",
                link: "#",
                icon: StoreIcon,
            },
            {
                label: "Meet OpenPanel",
                description: "Call us for any questions",
                link: "#",
                icon: MeetIcon,
            },
        ],
    },
];
