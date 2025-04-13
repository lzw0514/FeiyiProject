<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-teal-100 via-red-100 to-yellow-200">
    <div class="w-full max-w-5xl rounded-xl shadow-2xl bg-white p-8">
      <div class="quiz-container">
      <h1 class="text-4xl font-bold text-center text-red-700 mb-8 flex justify-center items-center">
        🏮 <span>非遗知识问答排行榜</span> 🏮
      </h1>

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
          <td>{{ user.userId }}</td>
          <td>{{ user.points }}</td>
          <td class="text-red-600">{{ getTitle(user.level) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<style scoped>
.bg-overlay {
  background-color: rgba(255, 255, 255, 0.9);
}

.highlight {
  background-color: #ffdf77; /* 高亮行背景色为浅黄色 */
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

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
  border-spacing: 0;
  width: 100%;
  border-radius: 10px;
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
}

table th {
  font-size: 1.1rem;
}

table td {
  font-size: 1rem;
}

.bg-gradient-to-r {
  background: linear-gradient(90deg, #f5f7fa, #c3cfe2);
}

.quiz-container {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* 半透明白色背景 */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* 模糊背景 */
}
</style>

<script>
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

export default {
  name: 'Rank',
  data() {
    return {
      userId: null,
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
      axios.get('http://localhost:8081/user/top10', {
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