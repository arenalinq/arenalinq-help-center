/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  helpCenterSidebar: [
    {
      type: "doc",
      id: "welcome",
      label: "1. Welcome to Arenalinq",
    },
    {
      type: "category",
      label: "2. Getting Started",
      collapsed: false,
      items: [
        "getting-started/signing-in",
        "getting-started/navigating-the-dashboard",
        "getting-started/understanding-plans",
      ],
    },
    {
      type: "category",
      label: "3. Importing Players",
      collapsed: false,
      items: [
        "importing-players/preparing-your-file",
        "importing-players/uploading-and-mapping",
        "importing-players/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "4. Managing Your Pipeline",
      collapsed: false,
      items: [
        "managing-your-pipeline/backlog-and-pipeline",
        "managing-your-pipeline/pipeline-stages",
        "managing-your-pipeline/moving-players",
        "managing-your-pipeline/player-details",
      ],
    },
    {
      type: "category",
      label: "5. Filtering & Search",
      collapsed: false,
      items: [
        "filtering-and-search/using-filters",
        "filtering-and-search/available-filters",
      ],
    },
    {
      type: "category",
      label: "6. Workspace & Team",
      collapsed: false,
      items: [
        "workspace-and-team/workspace-settings",
        "workspace-and-team/inviting-staff",
        "workspace-and-team/managing-your-team",
      ],
    },
    {
      type: "category",
      label: "7. Billing & Subscription",
      collapsed: false,
      items: [
        "billing/scout-vs-program",
        "billing/upgrading",
        "billing/managing-your-subscription",
      ],
    },
    {
      type: "doc",
      id: "faq",
      label: "8. FAQ & Support",
    },
  ],
};

export default sidebars;
