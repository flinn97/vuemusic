<template>

<div>
	<Calendar :Students = "Students"/>
</div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'list',
  components: {
	Calendar
},
 data() {
    return {
    }
  },
  computed: {
    Students() {
      return this.$root.$data.Students;
    }
  },
}
</script>
