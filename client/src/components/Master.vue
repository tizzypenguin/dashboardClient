<template>
	<fish-card fluid>
		<div slot="header">계열선택</div>
		<fish-checkboxes v-model="selectedSubjectArr">
			<fish-checkbox :index="index" v-for="(c, index) in subjectArr" :key="index"><span v-html="c"></span></fish-checkbox>
		</fish-checkboxes>
		<div slot="footer">
			<fish-tag index="0" :color="'teal'" class="tag-name">{{masterNo}}</fish-tag>
			<fish-input class="inp-name" v-model="masterName"></fish-input>
			<fish-button class="mgl40" shape="circle"><i class="fa fa-paper-plane"></i></fish-button>
		</div>
	</fish-card>
</template>

<script>
export default {
	name: 'Master',
  data () {
    return {
      subjectArr: ['인문', '사회', '교육', '공학', '자연', '의약', '예체능'],
      selectedSubjectArr: [],
      masterNo: 'masterNo',
      masterName: 'masterName',
    }
	},
	components: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
