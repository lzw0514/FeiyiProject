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
  padding: 6px 14px;
  font-size: 14px;
  color: white;
  background: linear-gradient(135deg, #4CAF50, #81C784);
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}
.view-more-button:hover {
  background: linear-gradient(135deg, #388E3C, #66BB6A);
}
</style>