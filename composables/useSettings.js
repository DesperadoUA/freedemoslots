/** Один запрос settings для header/footer */
export function useSettings() {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl
  const lang = useLang()

  return useFetch(
    () => `${apiUrl}/${lang.value}/settings`,
    { key: () => `settings-${lang.value}` }
  )
}
