<template>
<div class='page'>
		<div class = 'form'>
			<div class='color'>
			<form>
				<label for="fname"><h3>Username:</h3></label><br>
				<input type="text" id='fname' name= 'fname' ><br>
				<label for="pwd"><h3>Password:</h3></label><br>
				<input type="password" id="pwd" name="pwd" ><br><br>
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in!</button>
			</form>
			</div>
		
		</div>{{msg}}
		</div>
</template>

<script>
export default {
  name: 'Logcomp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
	padding-right: 5%;
	padding-top: 5%;
}
.color {
	padding: 2px 2px 2px 2px;
	border: 3px solid #ccfff5;
	background-color: #e6fffa;
}
.page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center;
}
</style>
