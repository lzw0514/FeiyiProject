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
        isFavorite: false  // 新增字段，用来追踪收藏状态
      };
    },
    mounted() {
      const id = Number(this.$route.params.id);
      this.fetchHeritageDetail(id);
      this.checkIfFavorite(id);  // 检查该非遗项目是否已被当前用户收藏
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
            const username = decoded.claims.username;
            const heritageId = this.$route.params.id;
  
            if (this.isFavorite) {
              // 取消收藏
              axios.post('http://localhost:8081/user/favorite/remove', {
                userId,
                username,
                heritageId
             }, {
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
                username,
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
      }
    }
  };
  </script>
  
  <style scoped>
  .heritage-detail {
    background: #f5f5f5;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
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
  </style>
  