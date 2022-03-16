<template>
  <div>
    <el-row>
      <el-col :span="8" class="center">
        <el-input
            v-model="search"
            @keyup.enter.native="searchHandler"
            placeholder="请输入搜索内容"
        >
          <el-button slot="append" icon="el-icon-search" id="search" @click="searchHandler"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <div class="line"></div>
    <template>
      <el-tabs v-model="activeName" @tab-click="selectHandler">
        <el-tab-pane label="推荐" name="recommend">
          {{answerList}}
        </el-tab-pane>
        <el-tab-pane label="喜欢" name="like">配置管理</el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import {getQuestions} from "@/api/question";
export default {
  data() {
    return {
      search: "", //当前输入框的值
      searchList: ["暂无数据"], //搜索返回数据,
      activeName: 'first',
      answerList: [],
    };
  },
  created() {
    this.selectHandler()
  },
  methods: {
    searchHandler() {
    },
    selectHandler(tab, event) {
      if (this.activeName === 'recommend') {
        getQuestions().then(response => {
          this.answerList = response.data.answers
      })} else if (this.activeName === 'like') {
        getQuestions().then(response => {
            this.answerList = response.data.answers
      })}
      }
  }
};
</script>

<style>
.center {
  margin-top: 15px;
}
#search {
  color: #ffffff;
  background-color: #489ce0;
  border-radius: 0;
}
</style>