<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 620px;
  margin: 0 auto;
  /* margin-right: 40%; */
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="md-home"></Icon>
                            功能介绍
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="md-git-network"></Icon>
                            路由介绍
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="md-person"></Icon>
                            <router-link to="/panel">会员中心</router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="md-settings"></Icon>
                            <router-link to="/panel" target="_blank">控制面板</router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <h2 class="style list"><a href="#">Our favourite Task Management App! </a></h2>
                    <h3 class="style">posted on march 28, 2013</h3>
                    <div class="list_img">
                        <img src="static/images/index/pic1.jpg" alt="" align=""/>
                    </div>
                    <p class="para"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <a href="blog.html" class="btn">Read More</a>
                    <h2 class="style list"><a href="#">Our favourite Task Management App! </a></h2>
                    <h3 class="style">posted on march 28, 2013</h3>
                    <div class="list_img">
                        <img src="static/images/index/pic1.jpg" alt="" align=""/>
                    </div>
                    <p class="para"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <a href="blog.html" class="btn">Read More</a>
                    <h2 class="style list"><a href="#">Our favourite Task Management App! </a></h2>
                    <h3 class="style">posted on march 28, 2013</h3>
                    <div class="list_img">
                        <img src="static/images/index/pic1.jpg" alt="" align=""/>
                    </div>
                    <p class="para"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <a href="blog.html" class="btn">Read More</a>
                    <h2 class="style list"><a href="#">Our favourite Task Management App! </a></h2>
                    <h3 class="style">posted on march 28, 2013</h3>
                    <div class="list_img">
                        <img src="static/images/index/pic1.jpg" alt="" align=""/>
                    </div>
                    <p class="para"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <a href="blog.html" class="btn">Read More</a>
                    <h2 class="style list"><a href="#">Our favourite Task Management App! </a></h2>
                    <h3 class="style">posted on march 28, 2013</h3>
                    <div class="list_img">
                        <img src="static/images/index/pic1.jpg" alt="" align=""/>
                    </div>
                    <p class="para"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <a href="blog.html" class="btn">Read More</a>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
export default {
  
};
</script>