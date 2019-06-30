<template>
  <fish-layout class="dashboard" sider="l">
    <nav slot="header">
      <fish-tag index="0" :color="'teal'" class="tag-name">{{no}}</fish-tag>
      <fish-input :disabled="true" class="inp-name" v-model="name"></fish-input>
    </nav>
    <div slot="sider">
      <fish-menu mode="inline" class="left">

        <!-- <fish-option index="0" content="Content"></fish-option>
        <fish-submenu index="1" mode="inline">
          <template slot="title">User</template>
          <fish-option index="1-0" content="Jack"></fish-option>
          <fish-option index="1-1" content="Lucy"></fish-option>
          <fish-option index="1-2" content="Active"></fish-option>
        </fish-submenu>
        <fish-option index="2" content="Tongji"></fish-option>
        <fish-submenu index="3" mode="inline">
          <template slot="title">submenu</template>
          <fish-option index="3-0" content="Jack"></fish-option>
          <fish-option index="3-1" content="Lucy"></fish-option>
          <fish-option index="3-2" content="Active"></fish-option>
          <fish-submenu index="3-3" mode="inline">
            <template slot="title">submenu-3</template>
            <fish-option index="3-3-0" content="Jack"></fish-option>
            <fish-option index="3-3-1" content="Lucy"></fish-option>
            <fish-option index="3-3-2" content="Active"></fish-option>
          </fish-submenu>
        </fish-submenu> -->

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
      </fish-menu>
    </div>
    <div slot="content">
      <fish-tabs value="site">
        <!-- Site -->
        <fish-tab-pane label="Site" index="site">
          <fish-row>
            <fish-col span="24">
              <div>
                <vueCodeDiff :old-string="asis" :new-string="tobe" :context="10" outputFormat="side-by-side" />
              </div>
            </fish-col>
          </fish-row>
          <fish-row>
            <fish-col span="24">
              <fish-input :disabled="true" class="inp-url wd100" :value="url"></fish-input>
            </fish-col>
          </fish-row>
        </fish-tab-pane>

        <!-- Master -->
        <fish-tab-pane label="Master" index="master">
          <fish-card fluid>
            <div slot="header">Card Header</div>
              test
            <div slot="footer">Card Footer</div>
          </fish-card>
        </fish-tab-pane>

        <!-- Detail -->
        <fish-tab-pane label="Detail" index="detail">
          <fish-card fluid>
            <div slot="header">Card Header</div>
              test
            <div slot="footer">Card Footer</div>
          </fish-card>
        </fish-tab-pane>
      </fish-tabs>
    </div>
  </fish-layout>
</template>

<script>
import vueCodeDiff from 'vue-code-diff'

export default {
  name: 'Dashboard',
  data () {
    return {
      no: 'no',
      name: '토익',
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
    vueCodeDiff
  },
  computed: {},
  beforeCreate() {},
  created() {
    this.selectSite();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    //공통영역
    setData: function(data) {
      for(var idx in data) {
        if(this[idx]) {
          this[idx] = data[idx];
        }
      }
    },

    //사이트
    selectSite: function() {
      this.$http.get('/api/list').then((res) => {
        console.log(res)
        // const data = res.data[0];
        // this.setData(data);
        this.testData = res.data;
      });
    }
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
</style>
