import { RESERVED_ROUTE_SLUGS, SITE_LANGS } from "@/constants";

function parsePath(path) {
  const segments = path.split("/").filter(Boolean);
  let langPrefix = "";
  if (segments[0] && SITE_LANGS.has(segments[0])) {
    langPrefix = segments[0];
    segments.shift();
  }
  return { langPrefix, segments };
}

export default defineNuxtRouteMiddleware(async (to) => {
  const { langPrefix, segments } = parsePath(to.path);
  const nuxtApp = useNuxtApp();
  const lang = langPrefix || useLang().value;
  const apiUrl = useRuntimeConfig().public.apiUrl;
  const prefix = langPrefix ? `/${langPrefix}` : "";

  if (segments.length === 2 && !RESERVED_ROUTE_SLUGS.includes(segments[0])) {
    return;
  }

  if (segments.length !== 1 || RESERVED_ROUTE_SLUGS.includes(segments[0])) {
    return;
  }

  const gameSlug = segments[0];

  try {
    const pageRes = await $fetch(`${apiUrl}/${lang}/page/${gameSlug}`);
    if (pageRes?.status === "ok") return;
  } catch {
    /* not a CMS page */
  }

  const providersToTry = ["pragmatic-play", "inout-games", "ka-gaming"];

  for (const providerSlug of providersToTry) {
    try {
      const slotRes = await $fetch(
        `${apiUrl}/${lang}/${providerSlug}/${gameSlug}?limit=1`
      );
      if (slotRes?.status === "ok") {
        return navigateTo(`${prefix}/${providerSlug}/${gameSlug}`, {
          redirectCode: 301,
        });
      }
    } catch {
      /* try next */
    }
  }
});
