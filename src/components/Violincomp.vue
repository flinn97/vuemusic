<template>
 <div class="content">
	<div class='rcontent' v-for="teacher in Violin_teachers" :key="teacher.id">

		<div class='pic'>
			<img :src ="'images/'+teacher.image" width = 100px;>
		</div>
			<div class='about'>
				<h3>Violin Teacher:</h3>
					<p>{{teacher.description}}</p>
					<h3>Email:</h3>
					<p>{{teacher.email}}</p>
					<h3>phone:</h3>
					<p>{{teacher.phone}}</p>
			
		</div> 
		
	</div>

</div> 
</template>

<script>
export default {
  name: 'Violincomp',
  props: {
    Violin_teachers: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
	padding-top:7.5%;
	display:flex;
	justify-content:center;
	
}
.rcontent{
	width:500px;
	display:flex;
	justify-content:start;

	border: 2px solid #ccfff5;
	background-color: #e6fffa;
}
.about {
	padding-left: 5%;
}
</style>
