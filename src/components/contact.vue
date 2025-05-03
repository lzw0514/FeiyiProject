<script>
import AppFooter4 from "@/components/footer4.vue";
import AppNavbar8 from "@/components/navbar8.vue";

export default {
  name: "contact",
  components: {AppNavbar8, AppFooter4},
  methods: {
    copyEmail1() {
      navigator.clipboard.writeText('971510268@qq.com')
      alert('邮箱地址已复制到剪贴板')
    },
    copyEmail2() {
      navigator.clipboard.writeText('971510268@qq.com')
      alert('邮箱地址已复制到剪贴板')
    }
  }
}

</script>

<template>
  <div class="home-container">
    <app-navbar8>
    </app-navbar8>
    <div class="about-wrapper">
      <div class="about-page">
        <header class="about-header">
          <h1>联系我们</h1>

        </header>

        <section class="about-section">
          <h2>联系方式</h2>
          <p>📧 电子邮箱:  <a  @click.prevent="copyEmail1">support1@feiyinet.cn</a></p>
          <p>📧 电子邮箱:  <a  @click.prevent="copyEmail2">support2@feiyinet.cn</a></p>
          <p>📮 联系地址：福建省厦门市厦门大学翔安校区</p>
        </section>

        <section class="about-section">
          <h2>加入我们</h2>
          <p>
            我们欢迎有兴趣的爱好者、学者、志愿者加入我们的团队。
          </p>
          <p>
            如果你对非遗有兴趣，并且想为我们的平台贡献力量，欢迎联系我们。
          </p>
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