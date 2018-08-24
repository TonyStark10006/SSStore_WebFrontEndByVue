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

                    <div class="submit">
                        <input type="submit" onclick="myFunction()" value="Sign in" >
                        <button>token: {{ getCookie11('token') }}</button>
                    </div>
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
import { loginUrl } from '../../libs/config.js'

export default {
  name: 'login',
  beforeCreate: function () {
    console.log('创建之前')
  },
  created: function () {
    console.log('创建之后')
    if (this.getCookie11('token') !== '') {
      console.log(this.getCookie11('token'))
    } else {
      axios({
        method: 'get',
        baseURL: '/api',
        url: loginUrl
      }).then(function (response) {
        console.log(response)
        document.cookie = 'token=' + response.data.token
      }).catch(function (error) {
        console.log(error)
      })
    }
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
  },
  methods: {
    getCookie11 (cname) {
      let name = cname + '='
      let ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim()
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
      }
      return ''
    }
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
