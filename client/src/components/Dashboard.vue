<template>
  <fish-layout class="dashboard" sider="l">
    <nav slot="header">
      <fish-tag index="0" :color="'teal'" class="tag-name">{{siteNo}}</fish-tag>
      <fish-input :disabled="true" class="inp-name" v-model="siteName"></fish-input>
    </nav>
    <div slot="sider">
      <fish-menu mode="inline" class="left">
        <!-- Treeview -->
        <fish-submenu v-for="(item, index) in testData" :key="index" :index="index+''" mode="inline" :class="'dep1'">
          <template slot="title">{{item.name}}</template>
          <fish-submenu v-for="(subItem, subIndex) in item.arr" :key="subIndex" :index="index+'-'+subIndex" mode="inline" :class="'dep2'">
            <template slot="title">{{subItem.name}}</template>
            <fish-option v-for="(subSubItem, subSubIndex) in subItem.arr" :key="subSubIndex" :index="index+'-'+subIndex+'-'+subSubIndex" :content="subSubItem.name" :class="'dep3'"></fish-option>
            <fish-option :key="index+'-'+subIndex+'-99'" :index="index+'-'+subIndex+'-99'" content="+" :class="'dep3'"></fish-option>
          </fish-submenu>
          <fish-option :key="index+'-'+99" :index="index+'-99'" content="+" :class="'dep2'"></fish-option>
        </fish-submenu>
        <fish-option :key="99+''" :index="99+''" content="+" :class="'dep1'"></fish-option>
        <!-- //Treeview -->
      </fish-menu>
    </div>
    <div slot="content">
      <fish-tabs value="site">
        <!-- Site -->
        <fish-tab-pane label="Site" index="site">
          <Site></Site>
        </fish-tab-pane>
        
        <!-- Master -->
        <fish-tab-pane label="Master" index="master">
          <Master></Master>
        </fish-tab-pane>

        <!-- Detail -->
        <fish-tab-pane label="Detail" index="detail">
          <!-- <fish-card fluid>
            <div slot="header">Card Header</div>
              test
            <div slot="footer">Card Footer</div>
          </fish-card> -->
          <Detail></Detail>
        </fish-tab-pane>
      </fish-tabs>
    </div>
  </fish-layout>
</template>

<script>
import vueCodeDiff from 'vue-code-diff'
import Site from './Site'
import Master from './Master'
import Detail from './Detail'

export default {
  name: 'Dashboard',
  data () {
    return {
      siteNo: 'siteNo',
      siteName: '토익',
      asis: 'SiteAsIs',
      tobe: 'SiteToBe',
      url: 'https://naver.com',
      testData: [
        {
          name: '1',
          seq: 1,
          arr: [
            {
              name: '1-1',
              seq: 1,
              arr: [
                {
                  name: '1-1-1',
                  seq: 1
                },
                {
                  name: '1-1-2',
                  seq: 2
                }
              ]
            },
            {
              name: '1-2',
              seq: 2,
              arr: [
                {
                  name: '1-2-1',
                  seq: 1
                },
                {
                  name: '1-2-2',
                  seq: 2
                }
              ]
            }
          ]
        },
        {
          name: '2',
          seq: 2,
          arr: [
            {
              name: '2-1',
              seq: 1,
              arr: [
                {
                  name: '2-1-1',
                  seq: 1
                },
                {
                  name: '2-1-2',
                  seq: 2
                }
              ]
            },
            {
              name: '2-2',
              seq: 2,
              arr: [
                {
                  name: '2-2-1',
                  seq: 1
                },
                {
                  name: '2-2-2',
                  seq: 2
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    vueCodeDiff,
    Site,
    Master,
    Detail
  },
  computed: {},
  beforeCreate() {},
  created() {
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
  }
}
</script>

<style>
  .fish.layout > .header {
    height: 50px;
    background: #bddff5;
  }
  .header nav {
    position: relative;
    top: 50%;
    margin-top: -18px;
  }
  .inp-name {
    width: 80%;
  }
  .wd100 {
    width: 100%
  }
  .content {
    padding-top: 20px;
  }
  .mgl40 {
	margin-left: 40px;
}
.bdl1 {
	border-left: 1px solid black;
}
.bdr1 {
	border-right: 1px solid black;
}
.mgl40 {
	margin-left: 40px;
}
</style>
