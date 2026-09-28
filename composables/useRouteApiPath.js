import { SITE_LANGS } from '@/constants'

/** Путь для API: всё после домена без языкового префикса (inout-games/chicken-road) */
export function useRouteApiPath() {
  const route = useRoute();

  const apiPath = computed(() => {
    const segments = route.path.split("/").filter(Boolean);
    if (segments[0] && SITE_LANGS.has(segments[0])) {
      segments.shift();
    }
    return segments.join("/");
  });

  return { apiPath };
}
