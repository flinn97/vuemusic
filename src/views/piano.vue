<template>

<div>
		<Pianocomp  :piano_teachers = "piano_teachers"/>
</div>
</template>

<script>
// @ is an alias to /src
import Pianocomp from '@/components/Pianocomp.vue'

export default {
  name: 'piano',
  components: {
	Pianocomp
},

data() {
	return{
}
},
computed: {
	piano_teachers() {
		return this.$root.$data.piano_teachers;
}
}
}


</script>
