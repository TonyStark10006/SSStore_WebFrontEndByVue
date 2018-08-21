<template>
    <div id="login-box">
        <h1>欢迎登陆SSStore</h1>
        <div class="app-timer">
            <div class="timer"><img src="static/images/login/timer.png" class="img-responsive" alt="" /></div>
            <form>
                <ul>
                    <li>
                        <a href="#" class=" icon email"></a>
                        <input type="text" class="text" value="Email address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email address';}" >
                    </li>
                    <li>
                        <a href="#" class=" icon lock"></a>
                        <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}">
                    </li>
                    <div class="clear"></div>

                    <div class="submit"><input type="submit" onclick="myFunction()" value="Sign in" ></div>
                    <div class="clear"></div>
                    <p><router-link to="/reset-password">Forgot Password ?</router-link></p>
                </ul>
            </form>
            <div class="whyt">
                <p>New here ?<router-link to="/register"> Sign Up</router-link></p>
            </div>
        </div>
        <!--start-copyright-->
        <div class="copy-right">
            <p>Copyright &copy; 2018  All rights Reserved.</p>
        </div>
        <!--//end-copyright-->
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  beforeCreate: function () {
    console.log('创建之前')
  },
  created: function () {
    console.log('创建之后')
    axios({
      method: 'get',
      baseURL: '/api',
      url: 'getWeatherMsg?city=北京'
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  },
  beforeMount: function () {
    console.log('挂载之前')
  },
  mounted: function () {
    console.log('挂载之后')
  },
  beforeUpdate: function () {
    console.log('更新之前')
  },
  updated: function () {
    console.log('更新之后')
  },
  beforeDestroy: function () {
    console.log('销毁之前')
  },
  destroyed: function () {
    console.log('销毁之后')
  }
}
</script>

<style scoped>
@import "../../assets/login/style.css";
/*@import "../../assets/login/fonts.googleapis.com.css";*/
#login-box {
    background: #9392e7;
    font-family: 'Open Sans', sans-serif;
}
</style>
