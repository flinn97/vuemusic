<template>

<div>
		<Drumscomp  :drum_teachers = "drum_teachers"/>
</div>
</template>

<script>
// @ is an alias to /src
import Drumscomp from '@/components/Drumscomp.vue'

export default {
  name: 'drums',
  components: {
	Drumscomp
},

data() {
	return{
}
},
computed: {
	drum_teachers() {
		return this.$root.$data.drum_teachers;
}
}
}


</script>
