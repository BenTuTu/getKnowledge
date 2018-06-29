<template>
    <body>
		<header>注册</header>
		<div class="logo">
			<img src="..\images\l_.png" width="100%" height="100%"/>
		</div>
		<form name="form1" action="#" method="post">
			<div class="div_f">
				<div class="div_col" id="me">
					<div class="div_c_l"><span>手机号</span></div>
					<div class="div_c_r"><input type="text" name="phoe" id="phoe" placeholder="请输入手机号">
						
					</div>
				</div>
				<div style="clear:both"></div>
			</div>
			<div class="div_f">
					<div class="div_col" id="me">
						<div class="div_c_l"><span style="width:70px;">验证码</span>
						</div>
						<div class="div_c_r">
							<input type="tel" name="code" id="code" placeholder="请输入验证码">
							<input class="yuying" id="dynamic" value="发送语音验证码" type="button">
						</div>
					</div>
					<div style="clear:both"></div>
			</div>
			<div class="div_f">
				<div class="div_col" id="me">
					<div class="div_c_l"><span style="width:70px;">登录密码</span>
					</div>
					<div class="div_c_r"><input type="password" name="password" id="password" value="" placeholder="登录密码至少8位">
						
					</div>
				</div>
				<div style="clear:both"></div>
			</div>
			<div class="div_f">
				<div class="div_col" id="me">
					<div class="div_c_l"><span style="width:70px;">安全密码</span>
					</div>
					<div class="div_c_r"><input type="password" id="password" name="password"  value="" placeholder="安全密码至少8位">
						
					</div>
				</div>
				<div style="clear:both"></div>
			</div>
            
            <div class="div_f">
				<div class="div_col" id="me">
					<div class="div_c_l"><span>确认安全密码</span></div>
					<div class="div_c_r"><input type="password" name="password" id="password_qr" value="" placeholder="确认安全密码">
						
					</div>
				</div>
				<div style="clear:both"></div>
		    </div>
			 <div class="div_f">
				<div class="div_col" id="me">
					<div class="div_c_l"><span>邀请人</span></div>
					<div class="div_c_r"><input type="text" name="yq" id="yq" value="" placeholder="请输入邀请人">
						
					</div>
				</div>
				<div style="clear:both"></div>
		    </div>
	        <button id="submit" class="btn_1">注册</button>
        </form>
	</body>
</template>
<script type="text/javascript" src="server/jquery-2.1.1.js" ></script>
 <script type="text/javascript" src="server/layer.js" ></script>
<script type="text/javascript" src="server/333.js" ></script>
<script >  

	
</script>  
<style scoped>
html {
	font-size: 125%; /* 20梅16=125% min-font-size:12px bug*/
}
@media only screen and (min-width: 481px) {
html {
	font-size: 188%!important; /* 30.08梅16=188% */
}
}
@media only screen and (min-width: 561px) {
html {
	font-size: 218%!important; /* 38.88梅16=218% */
}
}
@media only screen and (min-width: 641px) {
html {
	font-size: 250%!important; /* 40梅16=250% */
}
}
body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 1em;
	font: inherit;
	vertical-align: baseline;
	font-family: "Microsoft YaHei"
}
body {
	font-family: "Microsoft YaHei";
	font-size: 0.7rem;
	color: #333;
	line-height: 0.7rem;
	width: 100%;
}
em {
	font-style: normal
}
li {
	list-style: none
}
a {
	text-decoration: none;
	outline: 0;
	color: #333;
}
img {
	border: none;
	vertical-align: top;
}
table {
	border-collapse: collapse;
}
input, textarea {
	font-family: "Microsoft YaHei";
	padding: 0;
}
textarea {
	resize: none;
	overflow: auto;
}
textarea:focus {
	outline: none;
}
input:focus {
	outline: none;
}
.clear {
	zoom: 1
}
.clear:after {
	content: "";
	display: block;
	clear: both;
}
.fl {
	float: left
}
.fr {
	float: right
}
/**/
header{
	padding: 0.7rem 0px;
	text-align: center;
	font-size: 0.9rem;
	border-bottom: 1px solid #f5f5f5;
}
.logo{
	width: 30%;
	margin: 2rem auto 1rem auto;
}
.div_f {
    border-bottom: 1px solid #E8E8E8;
    background-color: #fff;
}
.div_c_l {
    float: left;
    padding: 5px;
    font-size: 15px;
    font-weight: 500;
}
.div_c_l span {
    line-height: 38px;
    padding: 0 5px;
    width: 60px;
}
.div_c_r {
    float: right;
   /* padding: 5px;*/
  /*  width: calc(100% - 100px);*/
}
.yuying{
	float:right;
	text-align:center;
	font-size:12px;
	padding:0px 9px;
	background:#007f41;
	color:#fff;
	border:0;
	height:48px;
	margin: 0px !important;
}
.div_c_r input {
    border: 0px;
    margin: 5px;
    float: left;
    line-height: 28px;
    font-size: 15px;
    text-align: right;
    padding-right: 5px;
    /*width: 100%;*/
    outline: none;
    text-align: right;
    padding: 5px;
}
.btn_1 {
    border: none;
    margin: 40px 0 0px 0;
    width: 100%;
    height: 3em;
    background-color: #007f41;
    border-radius: 0px;
    font-size: 0.8rem;
    color: #FFFFFF;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}
.layui-m-layercont{
	padding:15px 30px !important;
}
.layui-m-layer0 .layui-m-layerchild{
	width: 50% !important;
}

</style>
