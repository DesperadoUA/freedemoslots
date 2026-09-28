<template>
    <div>
        <slot />
    </div>
</template>
<style lang="scss">
@font-face {
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/unbounded/v8/Yq6W-LOTXCb04q32xlpwu8Zf.woff2) format('woff2');
  unicode-range:
          U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC,
          U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/unbounded/v8/Yq6W-LOTXCb04q32xlpwu8Zf.woff2) format('woff2');
  unicode-range:
          U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC,
          U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/unbounded/v8/Yq6W-LOTXCb04q32xlpwu8Zf.woff2) format('woff2');
  unicode-range:
          U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC,
          U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
:root {
  /* container width */
  --container-width: 1230px;
  --container--cms: 960px;

  /* Theme color */
  --cairo: #fff;
  --calgary: #00ea17;
  --cordoba: #b3b6c8;
  --callao: rgba(206, 210, 226, 0.2);
  --cucuta: #1b1831;
  --colombo: #08051a;
  --cancun: #232036;
  --cochin: #323234;
  --cardiff: rgba(0, 0, 0, 0.26);
  --cleveland: #5e40b5;
  --chicago: #da00ed;
  --caracas: rgba(255, 255, 255, 0.06);
  --coruna: #28263d;
  --xxs: 2px;
  --xs: 4px;
  --s: 8px;
  --m: 16px;
  --l: 32px;
  --xl: 64px;
  --container-width: 1230px;
  --container--cms: 960px;
  --side-gutters: 0px;
  --gap-components: 40px;

  /* Fonts */
  --base-line-height: 1.7;

  @media (max-width: 767px) {
    --base-font-size: 15px;
    --side-gutters: 20px;
    --gap-components: 30px;
  }
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
  color: var(--theme-cr-txt);
  background-color: var(--theme-bg-4);
  position: relative;
  font-family: 'Unbounded', Arial, sans-serif;
  overflow-x: hidden;
  max-width: 100%;
  font-size-adjust: 0.5;
  font-display: swap;
  background: var(--colombo);
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}
video,
iframe {
  vertical-align: top;
}
strong,
b {
  font-weight: 700;
}
.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: var(--side-gutters);
  padding-right: var(--side-gutters);
  max-width: var(--container-width);

  &--cms {
    @extend .container;
    max-width: var(--container--cms);
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
  padding: 0px;
}
.mt-15 {
  margin-top: 15px;
}
.pt-3 {
  padding-top: 3px !important;
}
.alignLeft {
  @media (min-width: 992px) {
    float: left;
    margin-right: 25px;
    margin-bottom: 20px;
  }
}
.alignRight {
  @media (min-width: 992px) {
    float: right;
    margin-left: 25px;
    margin-bottom: 20px;
  }
}
.text_color_cairo {
  color: var(--cairo);
}
.text_color_calgary {
  color: var(--calgary);
}
.text_color_cordoba {
  color: var(--cordoba);
}
.text_color_callao {
  color: var(--callao);
}
.text_color_cucuta {
  color: var(--cucuta);
}
.text_color_colombo {
  color: var(--colombo);
}
.text_color_cancun {
  color: var(--cancun);
}
.text_color_cochin {
  color: var(--cochin);
}
.text_color_cardiff {
  color: var(--cardiff);
}
.text_color_cleveland {
  color: var(--cleveland);
}
.text_decoration_underline {
  text-decoration: underline;
}
.text_decoration_overline {
  text-decoration: overline;
}
.text_decoration_line-through {
  text-decoration: line-through;
}
.text_decoration_blink {
  text-decoration: blink;
}
.text_decoration_solid {
  text-decoration: solid;
}
.text_decoration_wavy {
  text-decoration: wavy;
}
.text_decoration_dotted {
  text-decoration: dotted;
}
.text_decoration_dashed {
  text-decoration: dashed;
}
.text_decoration_double {
  text-decoration: double;
}
.text_decoration_none {
  text-decoration: none;
}
.text_size_small {
  font-size: 12px;
}
.text_size_medium {
  font-size: 14px;
}
.text_size_large {
  font-size: 16px;
}
.text_size_x-large {
  font-size: 24px;
}
.text_size_2x-large {
  font-size: 50px;
}
.text_weight_thin {
  font-weight: 100;
}
.text_weight_extra-light {
  font-weight: 200;
}
.text_weight_light {
  font-weight: 300;
}
.text_weight_regular {
  font-weight: 400;
}
.text_weight_medium {
  font-weight: 500;
}
.text_weight_semi-bold {
  font-weight: 600;
}
.text_weight_bold {
  font-weight: 700;
}
.text_weight_extra-bold {
  font-weight: 800;
}
.text_weight_black {
  font-weight: 900;
}
.text_align_left {
  text-align: left;
}
.text_align_right {
  text-align: right;
}
.text_align_center {
  text-align: center;
}
.text_align_justify {
  text-align: justify;
}
.p_xxs {
  padding: var(--xxs);
}
.p_xs {
  padding: var(--xs);
}
.p_s {
  padding: var(--s);
}
.p_m {
  padding: var(--m);
}
.p_l {
  padding: var(--l);
}
.p_xl {
  padding: var(--xl);
}
.p_t_xxs {
  padding-top: var(--xxs);
}
.p_t_xs {
  padding-top: var(--xs);
}
.p_t_s {
  padding-top: var(--s);
}
.p_t_m {
  padding-top: var(--m);
}
.p_t_l {
  padding-top: var(--l);
}
.p_t_xl {
  padding-top: var(--xl);
}
.p_b_xxs {
  padding-bottom: var(--xxs);
}
.p_b_xs {
  padding-bottom: var(--xs);
}
.p_b_s {
  padding-bottom: var(--s);
}
.p_b_m {
  padding-bottom: var(--m);
}
.p_b_l {
  padding-bottom: var(--l);
}
.p_b_xl {
  padding-bottom: var(--xl);
}
.p_l_xxs {
  padding-left: var(--xxs);
}
.p_l_xs {
  padding-left: var(--xs);
}
.p_l_s {
  padding-left: var(--s);
}
.p_l_m {
  padding-left: var(--m);
}
.p_l_l {
  padding-left: var(--l);
}
.p_l_xl {
  padding-left: var(--xl);
}
.p_r_xxs {
  padding-right: var(--xxs);
}
.p_r_xs {
  padding-right: var(--xs);
}
.p_r_s {
  padding-right: var(--s);
}
.p_r_m {
  padding-right: var(--m);
}
.p_r_l {
  padding-right: var(--l);
}
.p_r_xl {
  padding-right: var(--xl);
}
.m_xxs {
  margin: var(--xxs);
}
.m_xs {
  margin: var(--xs);
}
.m_s {
  margin: var(--s);
}
.m_m {
  margin: var(--m);
}
.m_l {
  margin: var(--l);
}
.m_xl {
  margin: var(--xl);
}
.m_t_xxs {
  margin-top: var(--xxs);
}
.m_t_xs {
  margin-top: var(--xs);
}
.m_t_s {
  margin-top: var(--s);
}
.m_t_m {
  margin-top: var(--m);
}
.m_t_l {
  margin-top: var(--l);
}
.m_t_xl {
  margin-top: var(--xl);
}
.m_b_xxs {
  margin-bottom: var(--xxs);
}
.m_b_xs {
  margin-bottom: var(--xs);
}
.m_b_s {
  margin-bottom: var(--s);
}
.m_b_m {
  margin-bottom: var(--m);
}
.m_b_l {
  margin-bottom: var(--l);
}
.m_b_xl {
  margin-bottom: var(--xl);
}
.m_l_xxs {
  margin-left: var(--xxs);
}
.m_l_xs {
  margin-left: var(--xs);
}
.m_l_s {
  margin-left: var(--s);
}
.m_l_m {
  margin-left: var(--m);
}
.m_l_l {
  margin-left: var(--l);
}
.m_l_xl {
  margin-left: var(--xl);
}
.m_r_xxs {
  margin-right: var(--xxs);
}
.m_r_xs {
  margin-right: var(--xs);
}
.m_r_s {
  margin-right: var(--s);
}
.m_r_m {
  margin-right: var(--m);
}
.m_r_l {
  margin-right: var(--l);
}
.m_r_xl {
  margin-right: var(--xl);
}
.object_fit_cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.border_radius_xxs {
  border-radius: var(--xxs);
}
.border_radius_xs {
  border-radius: var(--xs);
}
.border_radius_s {
  border-radius: var(--s);
}
.border_radius_m {
  border-radius: var(--m);
}
.border_radius_l {
  border-radius: var(--l);
}
.border_radius_xl {
  border-radius: var(--xl);
}
.border_radius_50 {
  border-radius: 50%;
}
.bg_color_cairo {
  background: var(--cairo);
}
.bg_color_caracas {
  background: var(--caracas);
}
.bg_color_calgary {
  background: var(--calgary);
}
.bg_color_cordoba {
  background: var(--cordoba);
}
.bg_color_callao {
  background: var(--callao);
}
.bg_color_cucuta {
  background: var(--cucuta);
}
.bg_color_colombo {
  background: var(--colombo);
}
.bg_color_cancun {
  background: var(--cancun);
}
.bg_color_cochin {
  background: var(--cochin);
}
.bg_color_cardiff {
  background: var(--cardiff);
}
.bg_color_cleveland {
  background: var(--cleveland);
}
.text_transform_uppercase {
  text-transform: uppercase;
}
.text_transform_lowercase {
  text-transform: lowercase;
}
.text_transform_capitalize {
  text-transform: capitalize;
}
.text_transform_none {
  text-transform: none;
}
.z-index-3 {
  position: relative;
  z-index: 3;
}
/* */
.faq_container {
  max-width: 820px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 0px;
  padding-right: 0px;
}
/*
Common styles*/
.full-width {
  width: 100% !important;
  flex-basis: 100% !important;
  max-width: 100% !important;
}
.hidden-sm {
  @media (max-width: 991px) {
    display: none;
  }
}
.contentEnd {
  display: flex;
  justify-content: flex-end;
}
/* Content */

.cms {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 24px;
    color: var(--cairo);
    margin-bottom: 15px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 14px;
  }
  h6 {
    font-size: 12px;
  }
  p,
  li {
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 15px;
  }
  ul {
    padding-left: 0px;
    list-style: none;
  }
  ul li {
    padding-left: 30px;
    position: relative;
  }
  ol {
    padding-left: 25px;
    position: relative;
  }
  ol li {
    padding-left: 5px;
  }
  ul li::before {
    content: '';
    width: 24px;
    height: 24px;
    background: url('/img/success.svg') center center no-repeat;
    position: absolute;
    top: 3px;
    left: 0;
  }
  ul,
  ol {
    margin-bottom: 15px;
  }
  a {
    color: #00ea17;
  }
}
.load_more {
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--s);
  border: rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
/* Content */
.content_container {
  padding: 40px 20px 20px 20px;
  background: #232036;
  border-radius: var(--m);
}
.main_container {
  padding-bottom: 60px;
}
#cookies a {
  color: var(--cairo);
}
.h1_wrapper {
  margin-bottom: 40px;
}
@media (max-width: 767px) {
  .content_container {
    padding: 20px 0px;
    margin-left: var(--side-gutters);
    margin-right: var(--side-gutters);
    width: calc(100% - var(--side-gutters) - var(--side-gutters));
  }
  .h1_wrapper {
    margin-bottom: 30px;
  }
  .main_container {
    padding-bottom: 40px;
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .container {
    max-width: 90%;
  }
  .content_container {
    padding: 20px 0px;
  }
  .content_container .container {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0 20px;
    max-width: 100%;
  }
}
</style>