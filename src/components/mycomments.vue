<template>
    <div class="comment-list-container">
      <h2 class="title">我的评论</h2>
  
      <div v-if="commentList.length">
        <table class="comment-table">
          <thead>
            <tr>
              <th>项目名称</th>
              <th>评论内容</th>
              <th>评论时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in commentList" :key="item.id">
              <td>{{ item.heritageName }}</td>
              <td>{{ item.content }}</td>
              <td>{{ formatDate(item.createTime) }}</td>
              <td>
                <router-link :to="`/heritage/${item.heritageId}`" class="detail-link">查看详情</router-link>
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
        <p>您还没有发表任何评论</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { jwtDecode } from 'jwt-decode';
  
  export default {
    name: 'MyComments',
    data() {
      return {
        userId: null,
        commentList: [],
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
        this.fetchComments();
      } catch (e) {
        console.error('Token解析失败', e);
      }
    },
    methods: {
      fetchComments() {
        axios.get('http://localhost:8081/user/comment/list', {
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
          this.commentList = result.records;
          this.totalPages = Math.ceil(result.total / this.pageSize);
        }).catch(err => {
          console.error('获取评论列表失败', err);
        });
      },
      changePage(newPage) {
        this.page = newPage;
        this.fetchComments();
      },
      formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleString();
      }
    }
  };
  </script>
  
  <style scoped>
  .comment-list-container {
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
  
  .comment-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .comment-table th,
  .comment-table td {
    padding: 14px 18px;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .comment-table th {
    background-color: #f9fafc;
    color: #555;
    font-weight: 500;
  }
  
  .comment-table tr:hover {
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
  </style>
  