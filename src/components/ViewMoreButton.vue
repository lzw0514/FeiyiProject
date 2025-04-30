<script>
export default {
  name: "ViewMoreButton",
  props: {
    buttonText: {
      type: String,
      default: '查看更多' // 默认按钮文本
    },
    category: {
      type: String,
      required: true // 传递 category 参数
    }
  },
  methods: {
    goToCategoryPage() {
      // 执行跳转，传递 category 参数
      this.$router.push({
        name: 'Page',
        query: {
          category: this.category
        }
      });
    }
  }
};
</script>

<template>
  <button
      class="view-more-button"
      @click="goToCategoryPage">
    {{ buttonText || '查看更多' }}
  </button>
</template>

<style scoped>
.view-more-button {
  margin-left: 12px;
  padding: 5px 16px;
  font-size: 14px;
  color: #5b3921; /* 深棕色文字 */
  background-color: #f7f3ef; /* 米白底色 */
  border: 1px solid #c4a87a; /* 柔和金棕边框 */
  border-radius: 20px;
  font-family: "Noto Serif SC", serif; /* 国风中文字体 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.view-more-button:hover {
  background-color: #ede4db;
  color: #3d2c1a;
  border-color: #b8905e;
}
</style>