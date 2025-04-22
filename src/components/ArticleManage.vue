<template>
    <div class="page-container">
      <el-card class="page-card">
        <div slot="header" class="page-text10">非遗清单</div>
  
        <!-- 查询条件 -->
        <el-form inline label-width="90px" class="filter-form">
          <el-form-item label="类别：" class="page-text11">
            <el-select v-model="filterCategory" placeholder="请选择类别" clearable>
              <el-option
                v-for="item in categoryOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
  
          <el-form-item label="所属地区：" class="page-text11">
            <el-select v-model="filterRegion" placeholder="请选择地区" clearable>
              <el-option
                v-for="region in regionOptions"
                :key="region"
                :label="region"
                :value="region"
              />
            </el-select>
          </el-form-item>
  
          <el-form-item class="page-text12">
            <el-button type="primary" @click="fetchHeritageList" class="search-button">搜索</el-button>
            <el-button @click="resetFilter" class="reset-button">重置</el-button>
          </el-form-item>
        </el-form>
  
        <!-- 表格 -->
        <el-table :data="items" border class="heritage-table">
          <el-table-column type="index" label="序号" width="60" align="center" />
          <!-- <el-table-column prop="name" label="名称" align="center" /> -->
          <el-table-column label="名称" align="center">
            <template slot-scope="scope">
              <router-link
                :to="`/heritage/${scope.row.id}`"
                style="color: #409EFF; text-decoration: none;"
              >
                {{ scope.row.name }}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="category" label="类别" align="center" />
          <el-table-column prop="applicationArea" label="申报地区或单位" align="center" />
          <el-table-column prop="protectionUnit" label="保护单位" align="center" />
        </el-table>
  
        <!-- 分页组件 -->
        <el-pagination
          style="margin-top: 20px; text-align: center;"
          background
          layout="prev, pager, next"
          :total="totalItems"
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="handlePageChange"
        />
      </el-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'HeritageTable',
    data() {
      return {
        filterCategory: '',
        filterRegion: '',
        categoryOptions: ['民间文学', '传统音乐', '传统舞蹈', '传统戏剧','曲艺','传统体育、游艺与杂技','传统美术','传统技艺','传统医药','民俗'],
        regionOptions: [
          '北京市', '天津市', '上海市', '重庆市',
          '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省',
          '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省',
          '河南省', '湖北省', '湖南省', '广东省', '海南省',
          '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省',
          '台湾省',
          '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区',
          '香港', '澳门'
        ],
        items: [],         // 当前页数据
        totalItems: 0,     // 总数据条数
        currentPage: 1,    // 当前页码
        pageSize: 10       // 每页条数
      }
    },
    methods: {
      // 获取数据（含分页 + 筛选）
      fetchHeritageList() {
        axios.get('1/heritage/list', {
          params: {
            page: this.currentPage,
            pageSize: this.pageSize,
            category: this.filterCategory,
            region: this.filterRegion
          }
        }).then(response => {

          this.items = response.data.data.records // 假设返回字段是 records 和 total
          this.totalItems = response.data.data.total
        }).catch(error => {
          console.error('获取非遗列表失败:', error)
        })
      },
  
      // 页码切换
      handlePageChange(newPage) {
        this.currentPage = newPage
        this.fetchHeritageList()
      },
  
      // 重置筛选条件
      resetFilter() {
        this.filterCategory = ''
        this.filterRegion = ''
        this.currentPage = 1
        this.fetchHeritageList()
      }
    },
    created() {
      this.fetchHeritageList()
    }
  }
  </script>
  
  <style scoped>
  /* 和你之前的一样，不变 */
  
  .page-container {
    width: 100%;
    display: flex;
    min-height: 100vh;
    height: auto;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 0px 0;
    flex-direction: column;
  }
  .page-card {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(236, 137, 6, 0.05);
    padding: 20px;
    box-sizing: border-box;
  }
  .page-text10 {
    font-size: 22px;
    font-weight: bold;
    color: #cf4704;
    text-align: center;
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
    margin-bottom: 24px;
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
    margin-top: 20px;
    width: 100%;
  }
  .heritage-table thead {
    background-color: #f5f7fa;
  }
  .heritage-table th {
    font-weight: bold;
    color: #333;
  }
  .heritage-table td,
  .heritage-table th {
    padding: 12px 10px;
    border-color: #ebeef5;
  }
  .heritage-table .el-table__body tr:hover > td {
    background-color: #fff7e6;
  }
  .heritage-table::before {
    display: none;
  }
  </style>
  