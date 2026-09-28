/** Ссылка на игру: /{provider}/{slug} — как путь после домена */
export function useSlotPermalink() {
  const { $getLangLink } = useNuxtApp();

  const getSlotPermalink = (post) => {
    const providerSlug =
      post?.vendor?.permalink || post?.provider?.permalink || "";
    const gameSlug = post?.permalink || "";
    if (!providerSlug || !gameSlug) return "";
    return $getLangLink(`/${providerSlug}/${gameSlug}`);
  };

  return { getSlotPermalink };
}
