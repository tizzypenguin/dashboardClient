<template>
	<div>
		<fish-row>
			<fish-col class="bdl1">
				<fish-calendar :value="startDt" @select="startSelectHandler"></fish-calendar>
			</fish-col>
			<fish-col class="bdl1">
				<fish-calendar :value="endDt" @select="endSelectHandler"></fish-calendar>
			</fish-col>
			<fish-col class="bdl1 bdr1">
				<fish-calendar :value="dueDt" @select="dueSelectHandler"></fish-calendar>
			</fish-col>
		</fish-row>
		<fish-row>
			<fish-col span="24">
				<fish-tag index="0" :color="'teal'" class="tag-name">{{detailNo}}</fish-tag>
				<fish-input class="inp-name" v-model="detailName"></fish-input>
				<fish-button class="mgl40" shape="circle"><i class="fa fa-paper-plane"></i></fish-button>
			</fish-col>
		</fish-row>
	</div>
</template>

<script>
export default {
	name: 'Detail',
  data () {
    return {
			detailNo: 'detailNo',
			detailName: 'detailName',
			startDt: this.getTodayStr(),
			endDt: this.getTodayStr(),
			dueDt: this.getTodayStr()
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
		getTodayStr: function() {
			var date = new Date();
			var yyyy = date.getFullYear();
			var mm = date.getMonth()+1;
			if(mm < 10) mm = "0"+mm;
			else mm = "" + mm;
			var dd = date.getDate();
			if(dd < 10) dd = "0"+dd;
			else dd = "" + dd;
			var today = yyyy + ""+ mm + "" + dd;
			return today;
		},
		getCurrentStr: function(current) {
			var yyyy = current.year;
			var mm = current.month+1;
			if(mm < 10) mm = "0"+mm;
			else mm = "" + mm;
			var dd = current.day;
			if(dd < 10) dd = "0"+dd;
			else dd = "" + dd;
			var day = yyyy + ""+ mm + "" + dd;
			return day;
		},
		startSelectHandler: function(current) { // 선택 시 
			console.log(current);
			this.startDt = this.getCurrentStr(current);
		},
		endSelectHandler: function(current) { // 선택 시 
			console.log(current);
			this.endDt = this.getCurrentStr(current);
		},
		dueSelectHandler: function(current) { // 선택 시 
			console.log(current);
			this.dueDt = this.getCurrentStr(current);
		},
		// changeHandler: function(state, arrays, current) { // 달력 년, 월, 일 변경
			// console.log(state, arrays, current);
		// }
  }
}
</script>

<style>

</style>
