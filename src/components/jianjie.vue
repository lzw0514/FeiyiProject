<template>
    <el-card class="box-card profile-card" shadow="hover">
      <div slot="header" class="clearfix profile-header">
        <span>个人资料</span>
      </div>
      <div class="profile-container">
        <el-form :model="form" label-width="80px" label-position="left" class="profile-form">
          <el-form-item label="用户名" class="form-item">
            <el-input v-model="form.username" disabled class="form-input" />
          </el-form-item>
          <el-form-item label="昵称" class="form-item">
            <el-input v-model="form.nickname" class="form-input" />
          </el-form-item>
          <el-form-item label="邮箱" class="form-item">
            <el-input v-model="form.email" class="form-input" />
          </el-form-item>
          <el-form-item label="个人简介" class="form-item">
            <el-input type="textarea" v-model="form.bio" rows="4" class="form-input" />
          </el-form-item>
          <el-form-item class="form-submit">
            <el-button type="primary" @click="submit" class="submit-button">保存修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </template>
  
  <script>
  import axios from 'axios';
  import { jwtDecode } from 'jwt-decode';
  
  export default {
    name: 'UserProfile',
    data() {
      return {
        userId: null,
        form: {
          username: '',
          nickname: '',
          email: '',
          bio: ''
        }
      };
    },
    mounted() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$message.error('请先登录');
        this.$router.push('/login');
        return;
      }
  
      try {
        const decoded = jwtDecode(token);
        this.userId = decoded.claims.id;
        this.fetchProfile();
      } catch (e) {
        console.error('Token解析失败', e);
        this.$message.error('登录状态失效，请重新登录');
        this.$router.push('/login');
      }
    },
    methods: {
      fetchProfile() {
        axios
          .get(`http://localhost:8081/api/user/info`, {
            params: { userId: this.userId }
          })
          .then((res) => {
            this.form = { ...this.form, ...res.data };
          })
          .catch(() => {
            this.$message.error('获取用户信息失败');
          });
      },
      submit() {
        axios
          .post(`http://localhost:8081/api/user/update`, {
            userId: this.userId,
            ...this.form
          })
          .then(() => {
            this.$message.success('资料更新成功');
          })
          .catch(() => {
            this.$message.error('更新失败，请稍后重试');
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-card {
    width: 90%;
    margin: 20px auto;
    background: #fcfdff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .profile-header {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  display: flex;
  justify-content: center;
  width: 100%;
 }
  .profile-container {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
  }
  
  .profile-form {
    margin-top: 20px;
  }
  
  .form-item {
    margin-bottom: 20px;
  }
  
  .form-input {
    width: 100%;
    border-radius: 4px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }
  
  .form-input:focus {
    border-color: #409EFF;
    box-shadow: 0 0 6px rgba(64, 158, 255, 0.6);
  }
  
  .submit-button {
    width: 100%;
    padding: 12px;
    background-color: #409EFF;
    border-color: #409EFF;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
  
  .submit-button:focus {
    background-color: #3388cc;
    border-color: #3388cc;
  }
  </style>
  