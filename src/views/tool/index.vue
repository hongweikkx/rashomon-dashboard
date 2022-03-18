<template>
  <div style="height: 20px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>下载工具</span>
      </div>
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col v-for="(web,index) in downloads" :key="index" :span="4" :xs="12" class="bg"
                style="min-height: 120px !important;">
          <el-link :href="web.url" target="_blank" style="padding: 12px;text-decoration : none">
            <div style="display: -webkit-box;">
              <img style="width: 25px; height: 25px;border-radius: 100%;" :src="web.image">
              <span style="margin: 5px 5px;font-size: large;display: block;">
                        {{web.name}}</span>
            </div>
            <div>
              <span style="font-size: small;min-height: 40px;">{{ web.desc }}</span>
            </div>
          </el-link>
        </el-col>

      </el-row>
    </el-card>
  </div>
</template>

<script>
import {getTools} from "@/api/tools";
export default {
  data() {
    return {
      downloads: [],
    };
  },
  created() {
    this.getToolList()
  },
  methods: {
    getToolList() {
      getTools().then(response => {
        this.downloads = response.data.downloads
      })
    }
  }
};
</script>
