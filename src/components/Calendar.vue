<template>
<div class='page'>
	<div class = 'header'><h1>List of Students</h1></div>
	<div class = 'content' v-for="student in Students" :key="student.id">
	<div class = 'student'>
		<div class = 'item'>{{student.id}}</div>
		<div class = 'item'>{{student.name}}</div>
		<div class= 'item'>{{student.progress}}</div>
		<div class = 'item'>{{student.day}}</div>
		<div class = 'item'>{{student.homework}}</div>
	</div>	
	</div>
</div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    Students: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	display: flex;
	justify-content: center;
	padding-top: 4%;
	padding-bottom: 4%;
	width: 55%;
}
.item {
	padding-right: 5%;
	padding-left: 5%;
	width: 25%;
}
.student {
	padding: 4px 2px 4px 2px;
	border: 1px solid black;
	background-color: #fff;
	display: flex;
	width: 75%
}
.content {
	padding-top: 1px;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
</style>
