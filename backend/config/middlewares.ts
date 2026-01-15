export default [
  "strapi::logger", "strapi::errors", "strapi::security",
  { name: "strapi::cors", config: { origin: ["*"], methods: ["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"], headers: ["*"], keepHeaderOnError: true } },
  "strapi::poweredBy", "strapi::session", "strapi::favicon", "strapi::public", "strapi::body", "strapi::query",
];
