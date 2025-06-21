export const routes = [
  {
    id: "home",
    to: "/",
    label: "Home",
    defaultColor: "white" as const,
    enableScrollEffect: true,
  },
  {
    id: "pricing",
    to: "/pricing",
    label: "Pricing",
    defaultColor: "black" as const,
  },
  {
    id: "schedule",
    to: "/schedule",
    label: "Schedule",
    defaultColor: "black" as const,
  },
  {
    id: "classes",
    to: "/classes",
    label: "Classes",
    defaultColor: "black" as const,
  },
  {
    id: "contact",
    label: "Contact",
    defaultColor: "white" as const,
    enableScrollEffect: true,
    isDropdown: true,
    items: [
      {
        id: "contact-us",
        to: "/contact",
        label: "Contact us",
        defaultColor: "white" as const,
      },
      {
        id: "careers",
        to: "/careers",
        label: "Careers",
        defaultColor: "black" as const,
      },
    ],
  },
  { id: "join", to: "#", label: "Join now", defaultColor: "black" as const },
];
