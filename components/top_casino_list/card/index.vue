<template>
    <article class="casino-card" :class="counter === 0 ? 'casino-card-top' : ''">
            <div class="badge badge-blue" v-if="counter === 1">№2</div>
            <div class="top-label" v-else-if="counter === 0">#1 TOP RATED CASINO</div>
            <div class="badge badge-purple" v-else>№3</div>
            <div class="logo-container">
                <img :src="item.thumbnail" :alt="`logo ${item.title}`" class="logo" />
            </div>
            <div class="content_wrapper">
                <div class="bonus-section">
                    <div class="bonus-label">Bonus</div>
                    <div class="bonus_wrapper">
                        <div class="bonus-value">{{item.bonus_value}}</div>
                    </div>
                </div>
                    <div class="button_wrapper">
                        <button class="play-button"
                                :title="`Goes to ${title}`"
                                @onClick="refActivate(refLinks, geo)">
                            Play Now
                        </button>
                    </div>
                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-icon">
                            <img src="/img/stopwatch.svg" width="24" height="24" alt="watch" />
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Payout</div>
                            <div class="stat-value">{{item.payout}}</div>
                        </div>
                    </div>

                    <div class="stat-item">
                        <div class="stat-icon">
                            <img src="/img/bolt.svg" width="24" height="24" alt="watch" />
                        </div>
                        <div class="stat-content">
                            <div class="stat-label">Win Rate</div>
                            <div class="stat-value winrate">{{item.win_rate}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <NuxtLink :to="item.permalink" class="more-details">
                More details <img src="https://casquad.com/img/arrowGreen.svg" class="green_arrow" alt="green arrow" />
            </NuxtLink>
    </article>
</template>
<script>
export default {
    name: "top_casino_card",
    props: {
        item: {
            type: Object,
            default: []
        },
        counter: {
          type: Number,
          default: 1
        }
    }
}
</script>
<style scoped>
.casino-card {
    background: linear-gradient(145deg, #2a2f3d 0%, #1f232e 100%);
    border-radius: 16px;
    padding: 5px;
    position: relative;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
    flex: 1 1 calc(33.333% - 20px);
    min-width: 300px;
    max-width: 420px;
}
.casino-card.casino-card-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.casino-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
}
.top-label {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    background: linear-gradient(135deg, #ff0066, #ff3385);
    color: white;
    padding: 12px 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    letter-spacing: 0.5px;
    text-align: center;
}

.badge {
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 10px 22px;
    border-radius: 14px;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    color: white;
}

.badge-blue {
    background: linear-gradient(135deg, #00a8ff, #0077cc);
}

.badge-purple {
    background: linear-gradient(135deg, #b000ff, #8800cc);
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin: 30px 0 25px;
}

.logo {
    max-width: 220px;
    max-height: 60px;
    object-fit: contain;
}

.bonus-section {
    text-align: center;
    margin: 10px 0 25px 0;
    min-height: 85px;
}

.bonus-label {
    color: var(--cairo);
    font-size: 14px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.bonus-value {
    color: var(--calgary);
    font-size: 22px;
    font-weight: bold;
    line-height: 1.4;
    text-shadow: 0 2px 8px rgba(0, 255, 136, 0.3);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bonus_wrapper {
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button_wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
}
.play-button {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #6b4ce6, #8b6cf6);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    max-width: 196px;
}
.content_wrapper {
    background: #232036;
    border-radius: 12px;
    padding: 12px;
}

.play-button:hover {
    background: linear-gradient(135deg, #7b5cf6, #9b7cff);
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(107, 76, 230, 0.5);
}

.stats {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0 5px;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 calc(50% - 10px);
    min-width: 120px;
    flex-wrap: wrap;
}

.stat-icon {
    font-size: 24px;
    opacity: 0.6;
    width: 100%;
    display: flex;
    justify-content: center;
}

.stat-content {
    flex: 1;
}

.stat-label {
    color: var(--cairo);
    font-size: 12px;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
}

.stat-value {
    color: var(--cairo);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

.stat-value.winrate {
    color: #00ff88;
    text-shadow: 0 2px 8px rgba(0, 255, 136, 0.2);
}

.more-details {
    display: flex;
    align-items: center;
    color: var(--cairo);
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    padding: 15px 0 10px;
    transition: color 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    gap: 5px;
}
.green_arrow {
    transform: translateY(-1px);
}
@media (max-width: 1024px) {
  .casino-card {
      max-width: 60%;
  }
}
@media (max-width: 568px) {
    .logo-container {
        margin: 30px 0 10px;
    }
}
</style>