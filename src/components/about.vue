<script>
import AppNavbar8 from "@/components/navbar8.vue";
import AppFooter4 from "@/components/footer4.vue";

export default {
  name: "about",
  components: {AppFooter4, AppNavbar8}
}
</script>

<template>
  <div class="home-container">
  <app-navbar8>
  </app-navbar8>
    <div class="about-wrapper">
    <div class="about-page">
      <header class="about-header">
        <h1>关于我们</h1>

      </header>

      <section class="about-section">
        <h2>一、平台名称</h2>
        <p>非遗网（http://121.36.25.11/）是一个立足中华大地、面向世界的非物质文化遗产数字展示平台。</p>
      </section>

      <section class="about-section">
        <h2>二、平台定位</h2>
        <p>
          非遗网秉承“传承·创新·共享”的理念，由厦门大学非遗智晓队打造，致力于打造一个融合数字技术与非遗文化的互动式平台。
        </p>
        <p>
          平台内容涵盖剪纸、刺绣、古琴、戏曲、木作、年画等多个非遗门类，依托数字地图、AI问答、知识问答、制作体验等方式，多维度呈现非遗技艺的魅力。
        </p>
      </section>

      <section class="about-section">
        <h2>三、我们的使命</h2>
        <p>
          我们深信：<strong>文化之根，植于民间；传承之力，源于热爱。</strong>
        </p>
        <p>
          非遗网希望成为非遗传承人与青年一代之间的桥梁，让非遗焕发新的生命力。
        </p>
        <p>
          通过聚合资源、传播理念、开展互动，我们为非遗爱好者、学者、志愿者提供一个共同成长的精神家园。
        </p>
        <p>让古老技艺触手可及，让非遗精神代代相传。</p>
      </section>
    </div>
  </div>
  <app-footer4>

  </app-footer4>
  </div>
</template>

<style scoped>
.about-wrapper {
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  background-image: url('/images/wallpaper.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll; /* 背景随着页面滚动 */
  padding: 60px 0;
}

.about-page {
  max-width: 850px;
  width: 100%;
  font-family: "Noto Serif SC", "KaiTi", serif;
  color: #3b2f2f;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(90, 60, 30, 0.1);
  background-color: #fffdf7;
  padding: 2rem;
  box-sizing: border-box;
}

.about-header {
  text-align: center;
  margin-bottom: 2rem;
}

.about-header h1 {
  font-size: 30px;
  color: #8b2e2e;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 16px;
  color: #a0522d;
  font-style: italic;
}

.about-section {
  margin-bottom: 2rem;
}

.about-section h2 {
  font-size: 22px;
  margin-bottom: 1rem;
  color: #4b2e1d;
  border-left: 4px solid #8b2e2e;
  padding-left: 10px;
}

.about-section p {
  margin-bottom: 0.8rem;
  line-height: 1.8;
}
</style>