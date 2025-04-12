<template>
    <div class="profile-page">
      <!-- 个人信息区域 -->
      <div class="profile-info">
        <div class="avatar">
          <img :src="user.avatarUrl" alt="头像" />
        </div>
        <div class="user-details">
          <h2>{{ user.userName }}</h2>
          <p>Email: {{ user.email }}</p>
          <button @click="editProfile">编辑资料</button>
        </div>
      </div>
  
      <!-- 用户评论区域 -->
      <div class="comments-section">
        <h3>我的评论</h3>
        <div v-if="comments.length">
          <div v-for="comment in comments" :key="comment.commentId" class="comment-card">
            <div class="comment-header">
              <span>{{ comment.heritageName }}</span>
              <div class="timestamp">{{ formatTimestamp(comment.createTime) }}</div>
            </div>
            <div class="comment-content">{{ comment.content }}</div>
          </div>
        </div>
        <div v-else>您还没有评论。</div>
      </div>
  
      <!-- 用户收藏区域 -->
      <div class="favorites-section">
        <h3>我的收藏</h3>
        <div v-if="favorites.length">
          <div v-for="favorite in favorites" :key="favorite.heritageId" class="favorite-item">
            <img :src="favorite.imageUrl" alt="非遗图片" />
            <div class="favorite-info">
              <h4>{{ favorite.name }}</h4>
              <p>{{ favorite.category }}</p>
            </div>
          </div>
        </div>
        <div v-else>您还没有收藏任何非遗项目。</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfilePage',
    data() {
      return {
        // 模拟的用户数据
        user: {
          userName: '张三',
          email: 'zhangsan@example.com',
          avatarUrl: '/images/default-avatar.png',
        },
        // 模拟的评论数据
        comments: [
          {
            commentId: 1,
            heritageName: '京剧',
            content: '京剧是中国传统艺术的瑰宝，丰富多彩。',
            createTime: 1678210000000, // 时间戳
          },
          {
            commentId: 2,
            heritageName: '皮影戏',
            content: '皮影戏是中国非物质文化遗产，承载着悠久的历史。',
            createTime: 1678235000000,
          },
        ],
        // 模拟的收藏数据
        favorites: [
          {
            heritageId: 1,
            name: '京剧',
            category: '戏曲',
            imageUrl: '/images/heritage1.jpg',
          },
          {
            heritageId: 2,
            name: '皮影戏',
            category: '民间艺术',
            imageUrl: '/images/heritage2.jpg',
          },
        ],
      };
    },
    methods: {
      // 编辑个人资料的方法
      editProfile() {
        alert('跳转到编辑个人资料页面');
      },
      // 格式化时间戳为年月日 时分
      formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-page {
    background-color: #f5f5f5;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-info {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 40px;
  }
  
  .profile-info .avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  .profile-info .user-details h2 {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .profile-info button {
    margin-top: 15px;
    padding: 8px 20px;
    background-color: #d33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .profile-info button:hover {
    background-color: #c22;
  }
  
  .comments-section,
  .favorites-section {
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .comments-section h3,
  .favorites-section h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  
  .comment-card {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .comment-card .comment-header {
    font-weight: bold;
  }
  
  .favorite-item {
    display: flex;
    margin-bottom: 15px;
  }
  
  .favorite-item img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 15px;
  }
  
  .favorite-info h4 {
    font-size: 18px;
  }
  
  .favorite-info p {
    color: #666;
    font-size: 14px;
  }
  </style>
  