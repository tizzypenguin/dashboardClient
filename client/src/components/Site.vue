<template>
	<div>
    <!-- Site -->
		<fish-row>
		<fish-col span="24">
			<div>
				<vueCodeDiff :old-string="asis" :new-string="tobe" :context="10" outputFormat="side-by-side" />
			</div>
		</fish-col>
		</fish-row>
		<fish-row>
		<fish-col span="22">
			<fish-input class="inp-url wd100" v-model="url"></fish-input>
		</fish-col>
		<fish-col span="2">
			<fish-button shape="circle" v-on:click="getSite"><i class="fa fa-paper-plane"></i></fish-button>
		</fish-col>
		</fish-row>
		</div>
</template>

<script>
import vueCodeDiff from 'vue-code-diff'

export default {
	name: 'Site',
  data () {
    return {
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
      ],
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
      // this.$http.get('/api/list').then((res) => {
        // console.log(res)
        // this.testData = res.data;
      // });
    },

    getSite: function () {
      // let params = {url: this.url}
      // this.$http.get('/api/get', params).then((res) => {
        // console.log(res)
      // });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
