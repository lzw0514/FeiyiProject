<template>
    <div class="favorite-list-container">
      <h2 class="title">我的收藏</h2>
  
      <div v-if="heritageList.length">
        <table class="heritage-table">
          <thead>
            <tr>
              <th>项目名称</th>
              <th>所属类别</th>
              <th>申报地区</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in heritageList" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.applicationArea }}</td>
              <td>
                <router-link :to="`/heritage/${item.id}`" class="detail-link">查看详情</router-link>
              </td>
            </tr>
          </tbody>
        </table>
  
        <div class="pagination">
          <button :disabled="page === 1" @click="changePage(page - 1)">上一页</button>
          <span>第 {{ page }} / {{ totalPages }} 页</span>
          <button :disabled="page >= totalPages" @click="changePage(page + 1)">下一页</button>
        </div>
      </div>
  
      <div v-else class="empty">
        <p>您还没有收藏任何非遗项目</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { jwtDecode } from 'jwt-decode';
  
  export default {
    name: 'FavoriteList',
    data() {
      return {
        userId: null,
        heritageList: [],
        page: 1,
        pageSize: 10,
        totalPages: 0
      };
    },
    mounted() {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('请先登录');
        this.$router.push('/login');
        return;
      }
  
      try {
        const decoded = jwtDecode(token);
        this.userId = decoded.claims.id;
        this.fetchFavorites();
      } catch (e) {
        console.error('Token解析失败', e);
      }
    },
    methods: {
      fetchFavorites() {
        axios.get('/user/favorite/list', {
          params: {
            userId: this.userId,
            page: this.page,
            pageSize: this.pageSize
          },
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(res => {
          const result = res.data.data;
          this.heritageList = result.records;
          this.totalPages = Math.ceil(result.total / this.pageSize);
        }).catch(err => {
          console.error('获取收藏列表失败', err);
        });
      },
      changePage(newPage) {
        this.page = newPage;
        this.fetchFavorites();
      }
    }
  };
  </script>
  
  <style scoped>
  .favorite-list-container {
    padding: 20px;
    background: #ffffff;
    max-width: 1000px;
    margin: 10px auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }
  
  .title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
    color: #e65a03;
  }
  
  .heritage-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .heritage-table th,
  .heritage-table td {
    padding: 14px 18px;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .heritage-table th {
    background-color: #f9fafc;
    color: #555;
    font-weight: 500;
  }
  
  .heritage-table tr:hover {
    background-color: #f5f7fa;
    transition: background 0.2s ease;
  }
  
  .detail-link {
    color: #409EFF;
    text-decoration: none;
    font-weight: 500;
  }
  .detail-link:hover {
    text-decoration: underline;
  }
  
  .pagination {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .pagination button {
    padding: 8px 16px;
    background-color: #409EFF;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .pagination button:disabled {
    background-color: #dcdfe6;
    cursor: not-allowed;
  }
  
  .empty {
    text-align: center;
    color: #999;
    font-size: 16px;
    margin-top: 50px;
  }
  
  .empty-image {
    width: 120px;
    opacity: 0.6;
    margin-bottom: 16px;
  }
  </style>
  