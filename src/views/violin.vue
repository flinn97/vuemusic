<template>

<div>
		<Violincomp  :Violin_teachers = "Violin_teachers"/>
</div>
</template>

<script>
// @ is an alias to /src
import Violincomp from '@/components/Violincomp.vue'

export default {
  name: 'violin',
  components: {
	Violincomp
},

data() {
	return{
}
},
computed: {
	Violin_teachers() {
		return this.$root.$data.Violin_teachers;
}
}
}


</script>
