<template>
    <div class="w-full min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-teal-100 via-red-100 to-yellow-200">
      <div class="w-full max-w-5xl bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl backdrop-blur-md">
        <div class="quiz-container">
          <h1 class="text-4xl font-bold text-center text-red-700 mb-8 flex justify-center items-center">
            🏮 <span>非遗知识问答排行榜</span> 🏮
          </h1>
  
          <!-- 排行榜卡片 -->
          <div class="card p-6 rounded-2xl shadow-lg bg-white bg-opacity-90 backdrop-blur-md">
            <table class="w-full text-center border-collapse shadow-md rounded-lg">
              <thead class="bg-red-300 border-b-2 border-red-500 rounded-t-lg">
                <tr class="text-white">
                  <th class="p-4 text-lg">排名</th>
                  <th class="p-4 text-lg">用户名</th>
                  <th class="p-4 text-lg">积分</th>
                  <th class="p-4 text-lg">阶梯称谓</th>
                </tr>
              </thead>
              <tbody class="bg-white text-gray-800">
                <tr
                  v-for="(user, index) in top10Users"
                  :key="user.userId"
                  :class="{ highlight: user.userId === userId }"
                  class="border-b border-red-200 hover:bg-red-50 transition-all ease-in-out duration-200"
                >
                  <td class="py-4">{{ index + 1 }}</td>
                  <td>{{ user.userName }}</td>
                  <td>{{ user.points }}</td>
                  <td class="text-red-600">{{ getTitle(user.level) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 排行榜卡片结束 -->
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
 /* 表格行加载动画 */
 tr {
  opacity: 1; /* 不使用透明度动画 */
  transform: translateY(0); /* 去掉位移动画 */
}


@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px); /* 初始位置偏下 */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* 最终位置恢复正常 */
  }
}

/* 高亮用户行动画
tr.highlight {
  background-color: #ffefe0; /* 高亮行背景色为浅黄色 
  animation: highlight 0.5s ease-in-out;
} */

@keyframes highlight {
  0% {
    background-color: #fff8e1;
  }
  50% {
    background-color: #ffdf77;
  }
  100% {
    background-color: #fff8e1;
  }
}

/* 为表格头添加渐变背景 */
thead {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 确保没有隐藏内容 */
tbody {
  animation: fadeInTable 1s ease-in-out;
}

@keyframes fadeInTable {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 鼠标悬停时增加微微放大的效果 */
tr:hover {
  background-color: #ffe0e0;
  transform: scale(1.02);
  transition: transform 0.2s ease-in-out;
}

/* 卡片背景渐变 */
.bg-gradient-to-r {
  background: linear-gradient(90deg, #ffffff, #fee9e9);
}

/* 卡片阴影和大小变化 */
.card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); /* 更强的阴影效果 */
  backdrop-filter: blur(10px); /* 模糊背景效果 */
  border: 1px solid #e5e5e5;
  padding: 40px;
  margin-top: 30px; /* 卡片顶部间距 */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05); /* 鼠标悬停时轻微放大 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* 增加阴影 */
}

/* 高亮行背景 */
.highlight {
  background-color: #ffdf77; /* 高亮行背景色为浅黄色 */
}

/* 表格头部样式 */
th {
  background-color: #f8d7da;
  color: #721c24;
  border-bottom: 2px solid #f5c6cb;
}

td {
  border-bottom: 1px solid #f5c6cb;
}

h1 span {
  margin: 0 10px;
}

table {
  width: 100%;
  min-width: 600px; /* 防止列太窄 */
  border-spacing: 0;
  border-radius: 12px;
}

th, td {
  padding: 12px 16px;
}

tr:hover {
  background-color: #ffe0e0;
}

tr.highlight {
  background-color: #fff8e1; /* 高亮行的背景色 */
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:nth-child(odd) {
  background-color: #fff;
}

tr:last-child td {
  border-bottom: none;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 20px; /* 设置下边距为 20px */
}

table th {
  font-size: 1.1rem;
}

table td {
  font-size: 1rem;
}

.bg-gradient-to-r {
  background: linear-gradient(90deg, #ffffff, #fee9e9);
}

.quiz-container {
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  backdrop-filter: none;
}

/* 卡片样式 */
.card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); /* 更强的阴影效果 */
  backdrop-filter: blur(10px); /* 模糊背景效果 */
  border: 1px solid #e5e5e5;
  padding: 40px;
  margin-top: 30px; /* 卡片顶部间距 */
}

/* 调整卡片宽度 */
.card {
  max-width: 80%; /* 最大宽度100% */
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

  </style>
  
  <script>
  import { jwtDecode } from "jwt-decode";
  import axios from 'axios';
  
  export default {
    name: 'Ranking',
    data() {
      return {
        userName: null,
        top10Users: [],
        bgImage: 'https://img.zcool.cn/community/01b7e55bcd93f8a8012062e04b84d6.jpg'
      };
    },
    mounted() {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("请先登录");
        this.$router.push("/login");
        return;
      }
  
      try {
        const decoded = jwtDecode(token);
        this.userId = decoded.claims.id;
        this.fetchRanking();
      } catch (e) {
        console.error("Token解析失败", e);
      }
    },
    methods: {
      fetchRanking() {
        axios.get('/user/top10', {
          params: { userId: this.userId },
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(res => {
          const result = res.data.data;
          this.top10Users = result.top10Users;
        }).catch(err => {
          console.error("获取排行榜失败:", err);
        });
      },
      getTitle(rank) {
        if (rank == 5) return "非遗宗师";
        if (rank == 4) return "非遗名家";
        if (rank == 3) return "非遗学者";
        if (rank == 2) return "非遗达人";
        return "非遗学徒";
      }
    }
  };
  </script>
  