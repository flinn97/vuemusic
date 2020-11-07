<template>
<div class="content">
			<div class='rcontent'>
				<div class='pic'><img src ="/images/mugs.jpg" width = 100px;></div>
				<div class='about'>
					<h3>Co-Founder:</h3>
					<p>Taylor Davidson</p>
					<h3>Email:</h3>
					<p>taylormdavidson97@gmail.com</p>
					<h3>phone:</h3>
					<p>(801) 771-4064</p>
				</div>{{msg}}
			</div>
</div>
</template>

<script>
export default {
  name: 'Contactinfo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
	padding-left: 5%;
}
.rcontent{
	width:500px;
	display:flex;
	justify-content:start;

	border: 2px solid #ccfff5;
	background-color: #e6fffa;
}
.content {
	padding-top:7.5%;
	display:flex;
	justify-content:center;
	
}
</style>
