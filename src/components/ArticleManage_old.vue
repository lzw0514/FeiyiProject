<template>
    <div class="page-container">
        <el-card class="page-card">
          <div slot="header" class="page-text10">
            非遗清单
          </div>
  
          <!-- 查询条件 -->
         
        <!-- 查询条件 -->
        <el-form inline label-width="90px" class="filter-form">
        <el-form-item label="类别：" class="page-text11">
            <el-select v-model="filterCategory" placeholder="请选择类别" clearable>
            <el-option v-for="item in categoryOptions" :key="item" :label="item" :value="item" />
            </el-select>
        </el-form-item>

        <el-form-item label="所属地区：" class="page-text11">
            <el-select v-model="filterRegion" placeholder="请选择地区" clearable>
            <el-option v-for="region in regionOptions" :key="region" :label="region" :value="region" />
            </el-select>
        </el-form-item>

        <el-form-item class="page-text12">
            <el-button type="primary" @click="filterList" class="search-button">搜索</el-button>
            <el-button @click="resetFilter" class="reset-button">重置</el-button>
        </el-form-item>
        </el-form>

       
  
          <!-- 表格 -->
       
        <el-table
            :data="filteredItems"
            border
            class="heritage-table"
        >
            <el-table-column type="index" label="序号" width="60" align="center" />
            <el-table-column prop="name" label="名称" align="center" />
            <el-table-column prop="category" label="类别" align="center" />
            <el-table-column prop="applicant" label="申报地区或单位" align="center" />
            <el-table-column prop="protector" label="保护单位" align="center" />
            </el-table>
       
        </el-card>
      </div>

</template>

<script>
export default {
  name: 'HeritageTable',
  data() {
    return {
      filterCategory: '',
      filterRegion: '',
      categoryOptions: ['传统技艺', '传统音乐', '传统舞蹈', '民间文学'],
      regionOptions: ['河北省', '贵州省', '广东省'],
      items: [
        {
          id: 1,
          name: '剪纸艺术',
          category: '传统技艺',
          applicant: '河北省民间文艺协会',
          protector: '河北省文化馆'
        },
        {
          id: 2,
          name: '侗族大歌',
          category: '传统音乐',
          applicant: '贵州省从江县',
          protector: '贵州省民族文化中心'
        },
        {
          id: 3,
          name: '舞狮',
          category: '传统舞蹈',
          applicant: '广东省佛山市',
          protector: '佛山市非遗保护中心'
        }
      ],
      filteredItems: []
    }
  },
  methods: {
    filterList() {
      this.filteredItems = this.items.filter(item => {
        const matchCategory = this.filterCategory ? item.category === this.filterCategory : true
        const matchRegion = this.filterRegion ? item.applicant.includes(this.filterRegion) : true
        return matchCategory && matchRegion
      })
    },
    resetFilter() {
      this.filterCategory = ''
      this.filterRegion = ''
      this.filteredItems = this.items
    }
  },
  created() {
    this.filteredItems = this.items
  }
}
</script>

<style scoped>

.page-container {
  width: 100%;
  display: flex;
  min-height: 100vh; 
  height: 100vh; /* 新增：确保容器本身就是整屏高 */
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 0px 0;
  flex-direction: column;
}

.page-card {
  width: 100%;
  max-width: 1200px;
  height: 100%; /* 新增：让卡片和容器等高 */
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(236, 137, 6, 0.05);
  padding: 20px;
  box-sizing: border-box; /* 避免 padding 导致高度溢出 */

}
.page-text10 {
  font-size: 22px;
  font-weight: bold;
  color: #cf4704;
  text-align: center; /* ✅ 新增：居中 */
}

.page-fragment11 {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.page-fragment13 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.page-fragment13 .el-table {
  width: 100%;
  border-radius: 8px;
}

.page-text11,
.page-text12 {
    
   display: inline-block; 
   font-weight: bold;
   
 
}

.filter-form {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 24px; /* ✅ 新增这一行：下方缝隙 */
}

.page-fragment11 .el-form-item {
  margin-right: 20px;
}

.search-button,
.reset-button {
  font-size: 14px;
  padding: 8px 16px;
}

.search-button {
  background-color: #e06106;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #e07c4d;
}

.reset-button {
  background-color: #f0f2f5;
  border: 1px solid #ccc;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
}

.reset-button:hover {
  background-color: #f5f7fa;
}

.el-select {
  width: 200px;
}

.el-form-item {
  margin-bottom: 0;
}
.heritage-table {
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
  background-color: #fff;
  margin-top: 20px; /* 与上方表单区隔 */
  width: 100%;
}

/* 表头样式 */
.heritage-table thead {
  background-color: #f5f7fa;
}

.heritage-table th {
  font-weight: bold;
  color: #333;
}

/* 行样式 */
.heritage-table td,
.heritage-table th {
  padding: 12px 10px;
  border-color: #ebeef5;
}

/* 鼠标悬浮行高亮 */
.heritage-table .el-table__body tr:hover > td {
  background-color: #fff7e6; /* 淡黄色 */
}

/* 去除默认上边框线 */
.heritage-table::before {
  display: none;
}

</style>  