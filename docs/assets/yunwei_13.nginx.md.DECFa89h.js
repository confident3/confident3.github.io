import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CVSRuG3h.js";const l="/assets/rtmp1.BWwjAYe2.png",p="/assets/rtmp.DFlQbPGJ.png",h="/assets/ffmpeg1.D_88Zpwc.png",C=JSON.parse('{"title":"上传相关：","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/13.nginx.md","filePath":"yunwei/13.nginx.md"}'),k={name:"yunwei/13.nginx.md"},t=n(`<h1 id="上传相关" tabindex="-1">上传相关： <a class="header-anchor" href="#上传相关" aria-label="Permalink to &quot;上传相关：&quot;">​</a></h1><p>默认上传文件大小 1m<br> 413 Request Entity Too Large 需要将其修改至合适大小 client_max_body_size 200m   ;</p><h2 id="windows-操作命令" tabindex="-1">windows 操作命令 <a class="header-anchor" href="#windows-操作命令" aria-label="Permalink to &quot;windows  操作命令&quot;">​</a></h2><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">启动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">start nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">停止  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">重载 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s  reload</span></span></code></pre></div><h2 id="keepalived" tabindex="-1">keepalived <a class="header-anchor" href="#keepalived" aria-label="Permalink to &quot;keepalived&quot;">​</a></h2><table tabindex="0"><thead><tr><th>机器</th><th>安装软件</th><th></th></tr></thead><tbody><tr><td>192.168,83.128</td><td>nginx</td><td>keepalived</td></tr><tr><td>192.168,83.129</td><td>nginx</td><td>keepalived</td></tr><tr><td>虚拟ip</td><td></td><td></td></tr><tr><td>192.168.83.130</td><td></td><td></td></tr></tbody></table><h3 id="安装-keepalived" tabindex="-1">安装 keepalived <a class="header-anchor" href="#安装-keepalived" aria-label="Permalink to &quot;安装 keepalived&quot;">​</a></h3><p>yum install -y keepalived</p><h3 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to &quot;安装nginx&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libtool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl-devel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-1.12.2.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-1.12.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./configure</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入 /usr/local/nginx/sbin/nginx 启动服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 相关命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看 nginx verison</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 启动nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 停止nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 重新加载</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   /usr/local/bin/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##安装额外的模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-http_stub_status_module</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## make  make  install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###  关闭版本提示</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  关闭版本提示</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 客户端上传文件控制大小</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client_max_body_size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 200m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   ;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">关闭版本提示</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server_tokens</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h3 id="配置-keepalived" tabindex="-1">配置 keepalived <a class="header-anchor" href="#配置-keepalived" aria-label="Permalink to &quot;配置 keepalived&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/keepalived/keepalived.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Configuration</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> File</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 主机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">global_defs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   notification_email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     acassen@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     failover@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     sysadmin@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   notification_email_from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   smtp_server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.200.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   smtp_connect_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   router_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LVS_DEVEL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   vrrp_skip_check_adv_addr</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   vrrp_garp_interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   vrrp_gna_interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vrrp_instance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VI_1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  主机  MASTER  备机 BACKUP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MASTER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 网卡</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ens33</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 主备机保持一致</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    virtual_router_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    priority</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    advert_int</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    authentication</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        auth_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PASS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        auth_pass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1111</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    virtual_ipaddress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 虚拟ip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        192.168.83.130/24</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">备机</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Configuration</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> File</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">global_defs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   notification_email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     acassen@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     failover@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     sysadmin@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   notification_email_from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Alexandre.Cassen@firewall.loc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   smtp_server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.200.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   smtp_connect_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   router_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LVS_DEVEL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   vrrp_skip_check_adv_addr</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   vrrp_garp_interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   vrrp_gna_interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vrrp_instance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VI_1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BACKUP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ens33</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    virtual_router_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #  备机 需要小于 主机的</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    priority</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 90</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    advert_int</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    authentication</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        auth_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PASS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        auth_pass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1111</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    virtual_ipaddress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        192.168.83.130/24</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动主机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keepalived</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/messages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  查看是否绑定了虚拟ip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  192.168.83.130</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-----</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止  按照进程名称杀死进程   最有效果  用来修改配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pkill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  keepalived</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  主机停止后 虚拟ip 会漂移到 备机  当主机恢复后自动漂移到主机</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  重启网络  之后 再重启 keepalived，否则失败</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network.service</span></span></code></pre></div><h2 id="open-registy-https" tabindex="-1">open registy https <a class="header-anchor" href="#open-registy-https" aria-label="Permalink to &quot;open registy  https&quot;">​</a></h2><p><a href="https://www.cnblogs.com/liuxm2017/p/10921512.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/liuxm2017/p/10921512.html</a><a href="https://blog.csdn.net/qq_27575627/article/details/126724230" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_27575627/article/details/126724230</a> letsencrypt 实现 https <a href="https://letsencrypt.org/zh-cn/" target="_blank" rel="noreferrer">https://letsencrypt.org/zh-cn/</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装  certbot </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行命令  -w  root  -d  域名      -m  邮箱</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --webroot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/projects/XXXXX/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mt.xxx.cn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> XXX@qq.com</span></span></code></pre></div><p>配置文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www.xxx.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/xxx/xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.htm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www.xxx.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ^/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)$  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.xxx.com/</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www.xxx.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_prefer_server_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HIGH:!ADH:!MD5:!aNULL:!eNULL:!MEDIUM:!LOW:!EXP:!kEDH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_protocols</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_session_timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_session_cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shared:SSL:50m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_stapling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_stapling_verify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Strict-Transport-Security</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15768000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/letsencrypt/live/www.xxx.com/fullchain.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssl_certificate_key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/letsencrypt/live/www.xxx.com/privkey.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/xxx/xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.htm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        error_page</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   500</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 502</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 503</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 504</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /50x.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /50x.html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 打开定时任务配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> crontab</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 增加定时刷新的配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">30</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> renew</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --quiet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/cerbot.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">注意</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 反向代理</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 内部必须是http</span></span></code></pre></div><h2 id="日志配置" tabindex="-1">日志配置： <a class="header-anchor" href="#日志配置" aria-label="Permalink to &quot;日志配置：&quot;">​</a></h2><p><a href="https://blog.csdn.net/qq_34399969/article/details/120308446" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_34399969/article/details/120308446</a><a href="https://blog.csdn.net/Yue_zuozuo/article/details/136044779" target="_blank" rel="noreferrer">https://blog.csdn.net/Yue_zuozuo/article/details/136044779</a></p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	log_format </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">year</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	                   &#39;-$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">month</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					   &#39;-$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">day</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hour</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">minutes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">seconds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					   &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					   &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					   &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					  &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> logs/access.log  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;	</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  logs/error.log  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($time_iso8601 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$year $1;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$month $2;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$day $3;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$hour $4;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$minutes $5;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$seconds $6;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #access_log  logs/access.log  main;	</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #  请求头携带 请求ip      </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">real-host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">real-ip $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://localhost:8081/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="搭建文件服务器" tabindex="-1">搭建文件服务器 <a class="header-anchor" href="#搭建文件服务器" aria-label="Permalink to &quot;搭建文件服务器&quot;">​</a></h2><p><a href="https://cloud.tencent.com/developer/article/1498209" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1498209</a></p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localhost;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/usr/local/static/;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            autoindex </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启索引功能</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            autoindex_exact_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭计算文件确切大小（单位bytes），只显示大概大小（单位kb、mb、gb）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            autoindex_localtime </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示本机时间而非 GMT 时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            charset </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf-8; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 避免中文乱码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #root   html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #index  index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">｝</span></span></code></pre></div><h2 id="nginx-rtmp-实现-视频推流拉流" tabindex="-1">nginx rtmp 实现 视频推流拉流 <a class="header-anchor" href="#nginx-rtmp-实现-视频推流拉流" aria-label="Permalink to &quot;nginx rtmp 实现 视频推流拉流&quot;">​</a></h2><p><a href="https://www.cnblogs.com/ydqblogs/p/17970146" target="_blank" rel="noreferrer">https://www.cnblogs.com/ydqblogs/p/17970146</a> 建议使用 openresty openresty 自带了很多插件 需要 nginx-rtmp-module</p><p><img src="`+l+'" alt="rtmp1.png"><img src="'+p+`" alt="rtmp.png"></p><p>nginx 配置</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rtmp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1935</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	chunk_size</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4096</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  直播推流</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> live{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	    live</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # hls 推流</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hls1{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		live</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		hls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		hls_path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /usr/local/nginx/html/hls1/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##  静态资源文件   MP4 格式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vod{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		play</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/nginx/html/vod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>前端</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://vjs.zencdn.net/8.10.0/video-js.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://vjs.zencdn.net/8.10.0/video.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">video</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-video&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;video-js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    controls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    preload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;640&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;264&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data-setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- http://192.168.83.137/vod/1.mp4 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://192.168.83.137/hls1/1.m3u8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vjs-no-js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      To view this video please enable JavaScript, and consider upgrading to a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      web browser that</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://videojs.com/html5-video-support/&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_blank&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &gt;supports HTML5 video&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="ffmpeg-推流" tabindex="-1">ffmpeg 推流 <a class="header-anchor" href="#ffmpeg-推流" aria-label="Permalink to &quot;ffmpeg 推流&quot;">​</a></h2><p><img src="`+h+`" alt="ffmpeg1"></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -re</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  1.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vcodec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libx264</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -acodec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  aac</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   flv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   rtmp://192.168.83.137:1935/hls1/1</span></span></code></pre></div><h2 id="goaccess-监控-nginx" tabindex="-1">goaccess 监控 nginx <a class="header-anchor" href="#goaccess-监控-nginx" aria-label="Permalink to &quot;goaccess  监控 nginx&quot;">​</a></h2><p><a href="https://www.goaccess.cc/?mod=man" target="_blank" rel="noreferrer">https://www.goaccess.cc/?mod=man</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> goaccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##  输出  监控报告 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">goaccess</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> access.log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report.html</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --log-format=COMBINED</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 中文 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LANG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh_CN.UTF-8&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> goaccess</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> access.log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --log-format=COMBINED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report.html</span></span></code></pre></div><h2 id="nginx-的用途" tabindex="-1">nginx 的用途： <a class="header-anchor" href="#nginx-的用途" aria-label="Permalink to &quot;nginx 的用途：&quot;">​</a></h2><h3 id="根据-header-的host-路由到不同的机房" tabindex="-1">根据 header 的host 路由到不同的机房 <a class="header-anchor" href="#根据-header-的host-路由到不同的机房" aria-label="Permalink to &quot;根据 header 的host 路由到不同的机房&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">admin.test.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">admin.prod.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:8086;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="灰度发布" tabindex="-1">灰度发布 <a class="header-anchor" href="#灰度发布" aria-label="Permalink to &quot;灰度发布&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案一：基于权重的灰度（最常用）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 按比例将流量分配到新旧版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backend </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8080 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 旧版本，90% 流量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server 127.0.0.1:8086 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新版本，10% 流量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://backend;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案二：基于请求头的灰度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求头带 X-Gray: true 的用户访问新版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prod </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gray </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8086;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 默认走旧版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend prod;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 匹配灰度条件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($http_x_gray </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend gray;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://$backend;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案三：基于 Cookie 的灰度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 带 cookie gray=1 的用户访问新版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend prod;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($cookie_gray </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend gray;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://$backend;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案四：基于 IP 的灰度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定 IP 访问新版本（内测用户）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend prod;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 灰度 IP 白名单</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($remote_addr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;192.168.1.100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend gray;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($remote_addr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;192.168.1.101&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$backend gray;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://$backend;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="蓝绿发布" tabindex="-1">蓝绿发布 <a class="header-anchor" href="#蓝绿发布" aria-label="Permalink to &quot;蓝绿发布&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 蓝绿发布配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># blue = 当前生产环境（旧版本）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># green = 新版本环境</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换只需改一行 upstream 地址，nginx reload 即可</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义蓝绿两组后端</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> blue </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> green </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8086;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当前活跃环境（切换时只改这一行）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 改成 @green 即切到新版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> active </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8080;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># blue</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # server 127.0.0.1:8086;  # green</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">admin.test.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://active;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 可选：健康检查页面，确认新版本是否就绪</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /health </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://active/actuator/health;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案二：通过变量切换（更灵活，支持文件 include）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 /etc/nginx/conf.d/env.conf 中维护当前环境</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 内容只有一行：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   set $current_env &quot;blue&quot;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   set $current_env &quot;green&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># include /etc/nginx/conf.d/env.conf;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># server {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     listen 80;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     server_name admin.test.com;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     location / {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         if ($current_env = &quot;blue&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             proxy_pass http://blue;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         if ($current_env = &quot;green&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#             proxy_pass http://green;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         proxy_set_header Host $host;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># }</span></span></code></pre></div><h3 id="流量复制-生产的流量导入到测试" tabindex="-1">流量复制 生产的流量导入到测试 <a class="header-anchor" href="#流量复制-生产的流量导入到测试" aria-label="Permalink to &quot;流量复制 生产的流量导入到测试&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx 流量镜像配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 功能：将线上流量复制一份到测试环境，不影响正式响应</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ============================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 正式环境</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prod </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试环境（镜像目标）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 127.0.0.1:8086;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 全量镜像：所有请求都复制一份到测试环境</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        mirror </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/mirror;                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启镜像，指定镜像接口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        mirror_request_body </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 镜像请求体（POST/PUT 等）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://prod;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host              $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP         $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For   $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 镜像接收端（internal 表示外部无法直接访问）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /mirror </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        internal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://test$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host              $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP         $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For   $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 可选：只镜像 GET 请求（写操作不镜像，避免数据污染）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # location /api/ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     if ($request_method = GET) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #         mirror /mirror;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     mirror_request_body on;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     proxy_pass http://prod;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 可选：只镜像特定路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # location /api/order/ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     mirror /mirror;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     mirror_request_body on;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     proxy_pass http://prod;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # location /api/user/ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     mirror /mirror;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     mirror_request_body on;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     proxy_pass http://prod;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # location /api/ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #     proxy_pass http://prod;   # 其他接口不镜像</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,45),e=[t];function r(d,E,g,y,F,c){return a(),i("div",null,e)}const A=s(k,[["render",r]]);export{C as __pageData,A as default};
