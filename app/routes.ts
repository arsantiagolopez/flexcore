import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("schedule", "routes/schedule.tsx"),
  route("classes", "routes/classes.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms-and-conditions", "routes/terms-and-conditions.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
] satisfies RouteConfig;
