/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  helpCenterSidebar: [
    {
      type: "doc",
      id: "welcome",
      label: "Welcome to Arenalinq",
    },
    {
      type: "category",
      label: "For Coaches & Scouts",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Getting Started",
          items: [
            "getting-started/signing-in",
            "getting-started/navigating-the-dashboard",
            "getting-started/understanding-plans",
          ],
        },
        {
          type: "category",
          label: "Importing Players",
          items: [
            "importing-players/preparing-your-file",
            "importing-players/uploading-and-mapping",
            "importing-players/troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Managing Your Pipeline",
          items: [
            "managing-your-pipeline/backlog-and-pipeline",
            "managing-your-pipeline/pipeline-stages",
            "managing-your-pipeline/moving-players",
            "managing-your-pipeline/player-details",
          ],
        },
        {
          type: "category",
          label: "Filtering & Search",
          items: [
            "filtering-and-search/using-filters",
            "filtering-and-search/available-filters",
          ],
        },
        {
          type: "category",
          label: "Workspace & Team",
          items: [
            "workspace-and-team/workspace-settings",
            "workspace-and-team/inviting-staff",
            "workspace-and-team/managing-your-team",
          ],
        },
        {
          type: "category",
          label: "Billing & Subscription",
          items: [
            "billing/scout-vs-program",
            "billing/upgrading",
            "billing/managing-your-subscription",
          ],
        },
        "faq",
      ],
    },
    {
      type: "category",
      label: "For Athletes & Parents",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Getting Started",
          items: [
            "athlete-getting-started/creating-your-profile",
            "athlete-getting-started/profile-editor",
            "athlete-getting-started/your-public-card",
          ],
        },
        {
          type: "category",
          label: "Privacy & Visibility",
          items: [
            "privacy-and-visibility/visibility-settings",
            "privacy-and-visibility/contact-info-on-card",
            "privacy-and-visibility/share-links",
          ],
        },
        {
          type: "category",
          label: "Family & Parents",
          items: [
            "family-and-parents/parent-account",
            "family-and-parents/claim-codes",
            "family-and-parents/billing-for-families",
          ],
        },
        {
          type: "category",
          label: "Billing",
          items: [
            "athlete-billing/plans-and-pricing",
            "athlete-billing/managing-subscription",
          ],
        },
        "athlete-faq",
      ],
    },
  ],
};

export default sidebars;
