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
    <div class="line" style="max-width: 1200px;margin-top: 20px;margin-bottom: 0px;margin-left: auto;margin-right: auto;"></div>
    <template>
      <el-tabs v-model="activeName" @tab-click="selectHandler">
        <el-tab-pane label="推荐" name="recommend">
          <el-row>
            <el-col :span="8" v-for="(ans, index) in answerList" :key="ans" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <a :href="ans.originUrl">{{ans.title}}</a>
                  <div v-on:click="changeFoldState">
                    <p v-if="brandFold">{{ans.content}}</p>
                    <p v-else>
                      {{ans.content.slice(0,240)}}
                      <el-button type="text" icon="el-icon-more-outline">展开全文</el-button>
                    </p>
                  </div>
                  <el-button v-if="ans.isLike==='0'" slot="append" style="float:right" icon="el-icon-caret-top" @click="likeHandler(ans.id, '1')">{{ans.voteUp}}</el-button>
                  <el-button v-if="ans.isLike==='1'" slot="append" type="primary" style="float:right" icon="el-icon-caret-top" @click="likeHandler(ans.id, '0')">{{ans.voteUp}}</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="喜欢" name="like">
          <el-row>
            <el-col :span="8" v-for="(ans, index) in likeList" :key="ans" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <a :href="ans.originUrl">{{ans.title}}</a>
                  <div v-if="ans.content.length > 200" v-on:click="changeFoldState">
                    <p v-if="brandFold">{{ans.content}}</p>
                    <p v-else>
                      {{ans.content.slice(0,240)}}
                      <el-button type="text" icon="el-icon-more-outline">展开全文</el-button>
                    </p>
                  </div>
                  <el-button v-if="ans.isLike==='0'" slot="append" style="float:right" icon="el-icon-caret-top" @click="likeHandler(ans.id, '1')">{{ans.voteUp}}</el-button>
                  <el-button v-if="ans.isLike==='1'" slot="append" type="primary" style="float:right" icon="el-icon-caret-top" @click="likeHandler(ans.id, '0')">{{ans.voteUp}}</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane v-if="searchList.length > 0" label="搜索" name="search">
          <el-row>
            <el-col :span="8" v-for="(ans, index) in searchList" :key="ans" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <a :href="ans.originUrl">{{ans.title}}</a>
                  <div v-if="ans.content.length > 200" v-on:click="changeFoldState">
                    <p v-if="brandFold">{{ans.content}}</p>
                    <p v-else>
                      {{ans.content.slice(0,240)}}
                      <el-button type="text" icon="el-icon-more-outline">展开全文</el-button>
                    </p>
                  </div>
                  <el-button v-if="ans.isLike==='0'" slot="append" style="float:right" icon="el-icon-caret-top" @click="likeHandler(ans.id, '1')">{{ans.voteUp}}</el-button>
                  <el-button v-if="ans.isLike==='1'" slot="append" type="primary" style="float:right" icon="el-icon-caret-top" @click="likeHandler(ans.id, '0')">{{ans.voteUp}}</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import {getQuestions, likeAnswer, getlikelist, searchAnswer} from "@/api/question";
export default {
  data() {
    return {
      search: "", //当前输入框的值
      searchList: [], //搜索返回数据,
      activeName: 'recommend',
      answerList: [],
      likeList: [],
      brandFold: false
    };
  },
  created() {
    this.selectHandler()
  },
  methods: {
    clearSerch() {
      this.searchList = []
      this.search = ""
    },
    changeFoldState() {
      this.brandFold = !this.brandFold
    },
    searchHandler() {
      searchAnswer().then(response => {
        this.searchList = response.data.answers
      })
      this.activeName = 'search'
    },
    selectHandler() {
      if (this.activeName === 'recommend') {
        this.clearSerch()
        getQuestions().then(response => {
          this.answerList = response.data.answers
      })} else if (this.activeName === 'like') {
        this.clearSerch()
        getlikelist().then(response => {
           this.likeList = response.data.likelist
      })}
    },
    likeHandler(id, op) {
      likeAnswer({ id: id, op: op})
      if (this.activeName === 'recommend') {
        this.answerList.forEach((item, index, array) => {
              if (item.id === id) {
                item.isLike = op
              }
            }
        )
      } else if (this.activeName === 'like') {
        this.likeList.forEach((item, index, array) => {
              if (item.id === id) {
                item.isLike = op
              }
            }
        )
      }
    },
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

a{color:#00F;
  text-decoration: none;
}

a:hover{
  color:#00F;
  text-decoration:underline;
}

</style>