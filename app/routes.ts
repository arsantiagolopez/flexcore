import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("classes", "routes/classes.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms-and-conditions", "routes/terms-and-conditions.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("careers", "routes/careers.tsx"),
  route(
    "job-applicant-privacy-notice",
    "routes/job-applicant-privacy-notice.tsx"
  ),
  // Mariana Tek iframe routes
  route("schedule", "routes/schedule.tsx"),
  route("join", "routes/join.tsx"),
  route("account", "routes/account.tsx"),
] satisfies RouteConfig;
