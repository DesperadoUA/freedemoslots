<script setup>
import { VOLATILITY_ROOT_SLUG } from "@/constants";

const route = useRoute();
const { $getLangLink } = useNuxtApp();
const page = route.params.page_number;

if (Number(page) === 1) {
  await navigateTo($getLangLink(`/${VOLATILITY_ROOT_SLUG}`), { redirectCode: 301 });
} else {
  await navigateTo($getLangLink(`/${VOLATILITY_ROOT_SLUG}/page/${page}`), {
    redirectCode: 301,
  });
}
</script>
