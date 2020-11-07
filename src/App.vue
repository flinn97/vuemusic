<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<router-link class ="navbar-brand" to ="/">Flinnapps Music!</router-link>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<router-link class = "nav-link" to= "/contact">Contact</router-link>
			</li>
			<li class="nav-item">
				<router-link class = "nav-link" to="/login">Login</router-link>
			</li>
			<li class="nav-item dropdown">
				<router-link class="nav-link dropdown-toggle" to = "#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Teachers</router-link>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<router-link class="dropdown-item" to="/violin">Violin</router-link>
					<router-link class="dropdown-item" to="/piano">Piano</router-link>
					<router-link class="dropdown-item" to="/drums">Drums</router-link>
					<router-link class="dropdown-item" to="/studentList">List of Students</router-link>
				</div>
			</li>
		</ul>
		<form class="form-inline my-2 my-lg-0">
			<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</div>
</nav>
    
  <router-view />
</div>
</template>

<style>
 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	height: 600px;
	background-image: url('2bif_whl9_180111.jpg');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size:cover;
	
}

</style>
