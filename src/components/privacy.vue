<script>
import AppFooter4 from "@/components/footer4.vue";
import AppNavbar8 from "@/components/navbar8.vue";

export default {
  name: "privacy",
  components: {AppNavbar8, AppFooter4}
}
</script>

<template>
  <div class="home-container">
    <app-navbar8>
    </app-navbar8>
    <div class="about-wrapper">
      <div class="about-page">
        <header class="about-header">
          <h1>隐私与政策</h1>

        </header>

        <section class="about-section">
          <h2>1. 数据来源与使用</h2>
          <p>
            <p>我们从 <a href="https://www.ihchina.cn" target="_blank" rel="noreferrer noopener">www.ihchina.cn</a> 网站获取非遗项目信息。这些信息包括但不限于各地的非遗项目的介绍、历史背景、传承人等。我们会将这些数据整合并在本网站中展示，以便您能够获取最新的非遗项目资讯。</p>
          </p>
        </section>
        <section class="about-section">
          <h2>2. 用户数据的收集与使用</h2>
          <p>
            <p>我们收集用户数据是为了提升您的使用体验并为您提供个性化的服务。我们不会将您的个人数据出售给第三方。</p>
          </p>
        </section>
        <section class="about-section">
          <h2>3. 数据安全</h2>
          <p>
            <p>我们采取合理的技术和管理措施，确保您的个人数据安全。我们会定期更新系统并进行安全审查，以防止数据泄露。</p>
          </p>
        </section>
        <section class="about-section">
          <h2>4. 更新和变更</h2>
          <p>
            <p>我们保留随时更新隐私政策的权利。任何更新将会发布在本页面上，更新内容立即生效。</p>

            <p>如有任何疑问或建议，欢迎联系我们。</p>
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
  background-image: url('/images/wallpaper.jpg'); /* 放在 public/images 里 */
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