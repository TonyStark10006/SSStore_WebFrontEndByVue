<template>
    <div>
        <!-- start header -->
        <div class="header_bg">
            <div class="wrap">
                <div class="wrapper">
                    <div class="header">
                        <div class="logo">
                            <a href="index.html"><img src="static/images/index/logo.png" alt=""/> </a>
                        </div>
                        <div class="cssmenu">
                            <ul>
                                <li ><a class="home" href="index.html"></a></li>
                                <li class="active"><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="inspiration.html">Inspiration</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><router-link to="/login">Login</router-link></li>
                                <li><router-link to="/panel">Panel</router-link></li>
                                <div class="clear"></div>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- start sub-header -->
        <div class="header_sub_bg">
            <div class="wrap">
                <div class="wrapper">
                    <div class="hdr-nav">
                        <ul class="sub_nav">
                            <li class="active"><a href="#">Business</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li class="hide"><a href="#">Social Media</a></li>
                            <li><a href="#">Technology</a></li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header-bar'
}
</script>

<style scoped>

</style>
