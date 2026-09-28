<template>
    <TopCasinoList :posts="top_casinos" />
</template>
<script>
import TopCasinoList from "@/components/top_casino_list/";

export default {
    name: 'blog_page',
    components: [TopCasinoList],
    setup() {
        definePageMeta({
            layout: 'test'
        })
    },
    data() {
        return {
            top_casinos: [
                {
                    thumbnail: 'https://api.casquads.com/public/downloads/rocketplay-210x92-bez-fona-white-6841aeca06746.webp',
                    ref: {
                        "WORLD": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979",
                        "CA": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979",
                        "AU": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=978",
                        "DE": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=980"
                    },
                    bonus_value: '100% + 100FS',
                    title: 'Rocketplay',
                    payout: '1–2 days',
                    win_rate: '98.51%',
                    permalink: '/casino/rocketplay'
                },
                {
                    thumbnail: 'https://api.casquads.com/public/downloads/win-spirit-210x92-6781110e27121-6830187e6cd28.webp',
                    ref: {
                        "WORLD": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979",
                        "CA": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979",
                        "AU": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=978",
                        "DE": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=980"
                    },
                    bonus_value: '+225% on deposit and 70 free spins +225% on deposit and 70 free spins',
                    title: 'WinSpirit',
                    payout: '1–2 days',
                    win_rate: '98.51%',
                    permalink: '/casino/winspirit'
                },
                {
                    thumbnail: 'https://api.casquads.com/public/downloads/golden-star-210x92-1-669bfdd0953b4-68301e5d35ec9.webp',
                    ref: {
                        "WORLD": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979",
                        "CA": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=979",
                        "AU": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=978",
                        "DE": "https://wondrous-paramount-exuberance.space/?sub1=seo&sub3=172&offer_id=980"
                    },
                    bonus_value: '€740,000',
                    title: 'Golden Star Casino',
                    payout: '1–2 days',
                    win_rate: '98.51%',
                    permalink: '/casino/golden-star-casino'
                },
            ]
        }
    }
}
</script>