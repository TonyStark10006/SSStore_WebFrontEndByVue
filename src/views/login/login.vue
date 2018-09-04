<template>
    <div id="login-box">
        <h1>欢迎登陆SSStore</h1>
        <div class="app-timer">
            <div class="timer"><img src="static/images/login/timer.png" class="img-responsive" alt="" /></div>
            <form>
                <ul>
                    <li>
                        <a href="#" class=" icon email"></a>
                        <input type="text" class="text" v-model.trim="account" placeholder="Email">
                    </li>
                    <li>
                        <a href="#" class=" icon lock"></a>
                        <input type="password" v-model.trim="password" placeholder="Password">
                    </li>
                    <div class="clear"></div>

                    <div class="submit">
                        <input type="submit" value="Sign in"/>
                    </div>
                    <div class="clear"></div>
                    <p><router-link to="/reset-password">Forgot Password ?</router-link></p>
                </ul>
            </form>
            <div class="whyt">
                <p>New here ?<router-link to="/register"> Sign Up</router-link>{{ account }}</p>
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
import { axios } from '../../libs/axios.js'
import { loginUrl } from '../../libs/config.js'
import { getCookieValue } from '../../libs/tools.js'

export default {
  name: 'login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  beforeCreate: function () {
    console.log('创建之前')
  },
  created: function () {
    console.log('创建之后')
    if (getCookieValue('token') !== '') {
      console.log('token值：' + getCookieValue('token'))
    } else {
      axios('get', loginUrl, '/api').then(function (response) {
        console.log(response)
        document.cookie = 'token=' + response.data.token + ''
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
    console.log(this.account)
  },
  beforeDestroy: function () {
    console.log('销毁之前')
  },
  destroyed: function () {
    console.log('销毁之后')
  },
  methods: {
    submitForm () {
      this.account = 1
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
