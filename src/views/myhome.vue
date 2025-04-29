<template>
  <div class="common-layout">
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header height="88px">
        <navbar></navbar>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="220px" class="aside">
          <div class="user-menu">
            <div class="user-info">
              <img src="images/touxiang.png" alt="头像" class="avatar" />
              <div class="user-name">Hello{{ userName }}</div>
            </div>
            <!-- 分割线 -->
            <div class="divider"></div>
            <el-menu
              :default-active="activeMenu"
              class="el-menu-vertical"
              @select="handleMenuSelect"
            >
              <el-menu-item index="settings">
                <span slot="title" class="menu-item-title">个人资料</span>
              </el-menu-item>
              <el-menu-item index="favorites">
                <span slot="title" class="menu-item-title">我的收藏</span>
              </el-menu-item>
              <el-menu-item index="comments">
                <span slot="title" class="menu-item-title">我的评论</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>

        <!-- 主体内容区域 -->
        <el-main class="main">
          <div v-if="activeMenu === 'favorites'">
            <myfavorites></myfavorites>
            <!-- 收藏内容组件或内容 -->
          </div>
          <div v-else-if="activeMenu === 'comments'">
            <mycomments></mycomments>
            <!-- 评论内容组件或内容 -->
          </div>
          <div v-else-if="activeMenu === 'settings'">
            <jianjie></jianjie>
            <!-- 个人资料内容组件 -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navbar from "@/components/navbar8.vue"; // 顶部导航组件路径
import myfavorites from "../components/myfavorites.vue";
import mycomments from "../components/mycomments.vue";
import jianjie from "../components/jianjie.vue";
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
export default {
  name: "ProfileLayout",
  components: {
    navbar,
    myfavorites,
    mycomments,
    jianjie
  },
  data() {
    return {
      userName: "",
      activeMenu: "settings",  // 默认选中 "个人资料"
    };
  },
  methods: {
    handleMenuSelect(key) {
      this.activeMenu = key;
    },
  },
};
</script>

<style scoped>
.common-layout {
  height: 100vh;
  overflow: hidden;
}

.header {
  background-color: #ffffff;
  color: white;
  height: 100px;
  line-height: 100px;
  padding-left: 0px;
  padding-right: 0px;
}

.el-main {
  padding: 20px;
  background: #f9f9f9;
  min-height: calc(100vh - 100px);
  overflow-y: auto;
}

.aside {
  background-color: #fff;
  border-right: 1px solid #eee;
  padding: 20px;
}

.user-menu .user-info {
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 10px;
  display: block;
}

.user-menu .user-name {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

/* 分割线样式 */
.divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
}

.el-menu-vertical {
  border-right: none;
}
.menu-item-title {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  padding: 20px;
  background: #f9f9f9;
  min-height: 600px;
}
</style>
