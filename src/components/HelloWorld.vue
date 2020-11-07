<template>
 <div class='music'>
                <div id= 'welcome' class='text'><h1>{{msg}} Welcome to the wonderful World of teaching Music! Sign up for a 30 day free trial to have unlimited access to teachers across the US. &#8594;</h1></div>
                <div class = 'form'>
                        <div id = 'forms' class='color'>
                        <form   id = 'welcome'>
                                <label for="fname"><h3>First Name:</h3></label><br>
                                <input type="text" id='fname' name= 'fname' ><br>
                                <label for="lname"><h3>Last name:</h3></label><br>
                                <input type="text" id="lname" name="lname" ><br>
                                <label for='email'><h3>Email:</h3></label><br>
                                <input type="text" id="email" name="email" ><br><br>
                                <input type= "submit" id = "submits" value = "Sign Up!">
                        </form>
                        </div>
                </div>
</div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.music {
        display: flex;
        justify-content: space-between;
}
 .text{
        width: 40%;
        padding-left: 5%;
        padding-top: 5%;
}
.color {
        padding: 2px 2px 2px 2px;
        border: 3px solid #ccfff5;
        background-color: #e6fffa;
}
.form {
        padding-right: 5%;
        padding-top: 5%;
}
</style>
