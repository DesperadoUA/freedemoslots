<template>
        <div class="casino-container">
            <div class="container casino-grid">
                <div class="item" v-for="(post, index) in posts" :key="post.title">
                    <CasinoCard :item="post" :counter="index" />
                </div>
            </div>
        </div>
</template>

<script>
import CasinoCard from '@/components/top_casino_list/card'
export default {
    name: "top_casino_list",
    components: {CasinoCard},
    props: {
        posts: {
            type: Array,
            default: []
        }
    }
}
</script>
<style scoped>
.casino-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    position: relative;
    padding-top: 50px;
}
.item {
    width: calc(33.3% - 16px);
}
.item:nth-child(1) {
    order: 2;
}
.item:nth-child(2) {
    order: 1;
}
.item:nth-child(3) {
    order: 3;
}

/* Планшеты */
@media (max-width: 1024px) {
    .item {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .item:nth-child(1), .item:nth-child(2), .item:nth-child(3) {
        order: 0;
    }
}
</style>