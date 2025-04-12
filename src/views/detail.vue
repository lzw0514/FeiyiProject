<template>
  <div class="heritage-detail">
    <!-- 左右背景花 -->
    <img class="bg-flower left" src="/images/flower.png" alt="左侧背景花" />
    <img class="bg-flower right" src="/images/flower.png" alt="右侧背景花" />
    
    <div class="detail-container">
      <h2 class="title">
        {{ heritage?.name || '非遗项目详情' }}
        <!-- 爱心按钮 -->
        <button v-if="isLoggedIn()" @click="toggleFavorite" class="favorite-button">
          <span :class="{'heart-icon': true, 'favorited': isFavorite}">&#10084;</span>
        </button>
        <!-- 评论按钮 -->
        <button v-if="isLoggedIn()" @click="openCommentSection" class="comment-button">
          <i class="fa fa-comment"></i>
        </button>
        <span v-else class="not-logged-in">请先登录</span>
      </h2>
    
      <div v-if="heritage">
        <div class="info-section">
          <div class="info-row">
            <span class="label">所属种类：</span>
            <span class="value">{{ heritage.category }}</span>
          </div>
          <div class="info-row">
            <span class="label">申报地区：</span>
            <span class="value">{{ heritage.applicationArea }}</span>
          </div>
          <div class="info-row">
            <span class="label">保护单位：</span>
            <span class="value">{{ heritage.protectionUnit }}</span>
          </div>
        </div>
    
        <div class="desc-section">
          <h3 class="section-title">项目简介</h3>
          <p class="desc-text">{{ heritage.projectDescription }}</p>
        </div>
      </div>
      <div v-else class="loading">加载中...</div>
    </div>
    <div v-if="showComment" class="comment-section">
      <h3 class="comment-title">评论区</h3>

      <!-- 新增评论输入框 -->
      <div v-if="isLoggedIn()" style="margin-bottom: 16px;">
        <textarea v-model="newComment" placeholder="写下你的评论..." rows="3"
                  style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ccc;"></textarea>
        <button @click="submitComment" 
                style="margin-top: 8px; padding: 6px 16px; background: cornflowerblue; color: white; border: none; border-radius: 4px; cursor: pointer;">
          发布评论
        </button>
      </div>

      <div v-else class="not-logged-in">请先登录以发表评论</div>

      <!-- 评论列表展示 -->
      <div v-if="comments.length > 0">
        <!-- <div v-for="comment in comments" :key="comment.commentId" style="margin-bottom: 12px; padding: 10px; border-bottom: 1px solid #eee;">
          <strong>ID: {{ comment.userId }} ｜ {{ comment.userName }}</strong>
          <p style="margin: 6px 0 0; color: #444;">{{ comment.content }}</p>
        </div> -->
        <div v-for="comment in comments" :key="comment.commentId" class="comment-card">
          <!-- 删除按钮：只对当前用户显示 -->
          <button 
            v-if="comment.userId === currentUserId" 
            @click="deleteComment(comment.id)" 
            class="delete-button"
          >
          删除
          </button>
          <div class="comment-header">
            <div class="avatar-placeholder">👤</div>
            <div class="user-info">
              <div class="username">
                {{ comment.userName }}（ID: {{ comment.userId }}）

              </div>
              <div class="timestamp">{{ formatTimestamp(comment.createTime) }}</div>
            </div>
          </div>
          <div class="comment-content">{{ comment.content }}</div>
        </div>

      </div>
      <div v-else class="comment-placeholder">暂无评论，快来抢沙发吧！</div>
    </div>
    

    
  </div>
</template>

<script>
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default {
  name: 'HeritageDetail',
  data() {
    return {
      heritage: null,
      isFavorite: false,  // 新增字段，用来追踪收藏状态
      showComment: true,
      comments: [],
      newComment: '',
      currentUserId: null // 当前登录用户ID

    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.fetchHeritageDetail(id);
    this.checkIfFavorite(id);  // 检查该非遗项目是否已被当前用户收藏
    this.fetchComments();



    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        this.currentUserId = decoded.claims.id;
      } catch (err) {
        console.error('解析token失败', err);
      }
  }

  },
  methods: {
    // 获取非遗项目详情
    fetchHeritageDetail(id) {
      axios.get(`http://localhost:8081/heritage/details/${id}`)
        .then(response => {
          this.heritage = response.data.data;
        })
        .catch(error => {
          console.error('获取非遗详情失败：', error);
        });
    },
    
    // 判断用户是否登录
    isLoggedIn() {
      return !!localStorage.getItem('token'); // 如果存在 token 表示已登录
    },
    
    // 查询用户是否已经收藏该非遗项目
    checkIfFavorite(id) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token); // 解码 token
          const userId = decoded.claims.id;
          
          // 发送请求检查该用户是否收藏了该非遗项目
          axios.get('http://localhost:8081/user/favorite/status', {
          params: { userId, heritageId: id },
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}` // 将 token 加入请求头
          }
          })
          .then(response => {
            this.isFavorite = response.data.data; // 设置是否已收藏
          })
          .catch(error => {
            console.error('查询收藏状态失败：', error);
          });
        } catch (error) {
          console.error('Invalid token:', error);
        }
      }
    },
    openCommentSection() {
      this.showComment = !this.showComment;
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString(); // 格式如：2025/4/13 下午3:28:00
    },
    // 收藏或取消收藏功能
    toggleFavorite() {
      if (!this.isLoggedIn()) {
        alert('请先登录才能收藏');
        return;
      }
      
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token); // 解码 token
          const userId = decoded.claims.id;
          const userName = decoded.claims.userName;
          const heritageId = this.$route.params.id;

          if (this.isFavorite) {
            // 取消收藏
            axios.delete('http://localhost:8081/user/favorite/remove', {
              params: {
                userId,
                heritageId
              },
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(response => {
              if (response.data.code==1) {
                this.isFavorite = false; // 取消收藏成功后更新按钮状态
                alert('取消收藏成功');
              } else {
                alert('取消收藏失败，请稍后再试');
              }
            })
            .catch(error => {
              console.error('取消收藏失败：', error);
            });
          } else {
            // 添加收藏
          axios.post('http://localhost:8081/user/favorite/add', {
              userId,
              userName,
              heritageId
          }, {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
          })
            .then(response => {
              if (response.data.code==1) {
                this.isFavorite = true; // 收藏成功后更新按钮状态
                alert('收藏成功');
              } else {
                alert('收藏失败，请稍后再试');
              }
            })
            .catch(error => {
              console.error('收藏失败：', error);
            });
          }
        } catch (error) {
          console.error('Invalid token:', error);
        }
      }
    },

        // 获取评论列表
    fetchComments() {
      const id = Number(this.$route.params.id);
      axios.get(`http://localhost:8081/comment/getAll/heritageId/${id}`, {
        params: {
          page: 1,
          pageSize: 20
        }
      })
      .then(response => {
        this.comments = response.data.data || [];
      })
      .catch(error => {
        console.error('获取评论失败：', error);
      });
    },

    // 发表新评论
    submitComment() {
      if (!this.newComment.trim()) {
        alert("评论内容不能为空！");
        return;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        alert("请先登录！");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const userId = decoded.claims.id;
        const userName = decoded.claims.userName;
        const heritageId = Number(this.$route.params.id);

        axios.post('http://localhost:8081/comment/add', {
          userId,
          userName,
          heritageId,
          content: this.newComment
        })
        .then(res => {
          if (res.data.code === 1) {
            this.newComment = '';
            this.fetchComments(); // 刷新评论
            alert("评论成功！");
          } else {
            alert("评论失败！");
          }
        })
        .catch(error => {
          console.error("提交评论失败：", error);
        });
      } catch (error) {
        console.error("token 错误：", error);
      }
    },
    deleteComment(commentId) {
      if (!confirm('确定要删除这条评论吗？')) return;

      axios.delete(`http://localhost:8081/comment/delete/${commentId}/${this.currentUserId}`)
        .then(res => {
          if (res.data.code === 1) {
            this.comments = this.comments.filter(c => c.id !== commentId);
            alert('评论已删除');
          } else {
            alert('删除失败：' + res.data.msg);
          }
        })
        .catch(err => {
          console.error('删除评论失败', err);
          alert('删除失败，请稍后再试');
        });
    }

  }
};
</script>

<style scoped>
.heritage-detail {
  background: #f5f5f5;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative;
  overflow: hidden; */
}

.detail-container {
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  position: relative;
  z-index: 2;
}

.bg-flower {
  position: absolute;
  top: 0;
  height: calc(100vh + 100px);
  width: auto;
  opacity: 0.08;
  z-index: 1;
  animation: rotateFlower 60s linear infinite;
  pointer-events: none;
}

.bg-flower.left {
  left: 0;
  transform: translateY(0);
}

.bg-flower.right {
  right: 0;
  transform: translateY(0);
}

/* 旋转动效 */
@keyframes rotateFlower {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 标题及按钮 */
.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #222;
  border-left: 4px solid #d33;
  padding-left: 12px;
}

.favorite-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 20px;
}

.favorite-button:hover .heart-icon {
  color: #c33;
}
.comment-button i {
  font-size: 21px;
  margin-right: 8px;
  color: cornflowerblue;
}
.comment-button:hover i {
  color: rgb(64, 92, 249);
}
/* 收藏前灰色 */
.heart-icon {
  color: #888; /* 收藏之前为灰色 */
}

/* 收藏后红色 */
.heart-icon.favorited {
  color: #d33; /* 收藏之后为红色 */
}

.not-logged-in {
  color: #888;
  font-size: 14px;
  margin-left: 20px;
}

/* 以下保留已有内容样式 */
.info-section {
  margin-bottom: 36px;
}

.info-row {
  display: flex;
  margin-bottom: 12px;
  font-size: 16px;
  color: #444;
}

.label {
  width: 100px;
  color: #888;
  font-weight: 500;
}

.value {
  flex: 1;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #222;
}

.desc-text {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
}

.loading {
  font-size: 16px;
  color: #999;
  text-align: center;
}
.comment-section {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  max-width: 800px;
  width: 100%;
}
.comment-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}
.comment-placeholder {
  color: #666;
  font-size: 14px;
}
.comment-card {
  background-color: #fafafa;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.comment-card:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 12px;
}

.user-info .username {
  font-weight: 600;
  color: #333;
}

.user-info .timestamp {
  font-size: 12px;
  color: #999;
}

.comment-content {
  font-size: 15px;
  color: #444;
  line-height: 1.6;
}
.comment-card {
  position: relative;
  background-color: #fdfdfd;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* 删除按钮右上角定位 */
.delete-button {
  position: absolute;
  top: 8px;
  right: 10px;
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 13px;
  cursor: pointer;
}

.delete-button:hover {
  color: #666;
  text-decoration: underline;
}


</style>
