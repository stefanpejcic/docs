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
                label: "Documentation",
                description: "Everything you need to get started.",
                link: "/docs/",
                icon: DocumentsIcon,
            },
            {
                label: "Tutorial",
                description: "Create your first Refine application.",
                link: "/docs/tutorial/introduction/index/",
                icon: TutorialIcon,
            },
            {
                label: "Awesome Refine",
                description: "Repository of awesome things.",
                link: "https://github.com/refinedev/awesome-refine",
                icon: AwesomeIcon,
            },
            {
                label: "Integrations",
                description: "Discover the Refine ecosystem.",
                link: "/integrations",
                icon: IntegrationsIcon,
            },
            {
                label: "Templates",
                description: "Ready-made examples for your project",
                link: "/templates",
                icon: ExamplesIcon,
            },
            {
                label: "Blog",
                description: "Articles about web development.",
                link: "/blog",
                icon: BlogIcon,
            },
        ],
    },
    {
        isPopover: false,
        label: "BETA",
        href: "/enterprise",
        icon: NewBadgeIcon,
    },
    {
        isPopover: true,
        label: "Community",
        items: [
            {
                label: "Documentation",
                description: "Everything you need to get started.",
                link: "/docs/guides-concepts/contributing/",
                icon: ContributeIcon,
            },
            {
                label: "Forums",
                description: "Join our community and help fellow admins!",
                link: "/week-of-refine",
                icon: RefineWeekIcon,
            },
            {
                label: "Contributing",
                description: "Help us make OpenPanel even better!",
                link: "https://google.rs",
                icon: HackathonsIcon,
            },
        ],
    },
    {
        isPopover: true,
        label: "Company",
        items: [
            {
                label: "About Refine",
                description: "Team & company information.",
                link: "/about",
                icon: AboutUsIcon,
            },
            {
                label: "Become a Partner",
                description: "Offer your clients pre-installed OpenPanel!",
                link: "https://google.rs",
                icon: StoreIcon,
            },
            {
                label: "Meet OpenPanel",
                description: "Call us for any questions",
                link: "https://google.rs",
                icon: MeetIcon,
            },
        ],
    },
];
