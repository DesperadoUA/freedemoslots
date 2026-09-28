<script setup>
import { VOLATILITY_ROOT_SLUG } from "@/constants";

const { $getLangLink } = useNuxtApp();
await navigateTo($getLangLink(`/${VOLATILITY_ROOT_SLUG}`), { redirectCode: 301 });
</script>
