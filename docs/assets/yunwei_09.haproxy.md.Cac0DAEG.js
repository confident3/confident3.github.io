import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CVSRuG3h.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/09.haproxy.md","filePath":"yunwei/09.haproxy.md"}'),l={name:"yunwei/09.haproxy.md"},p=n(`<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/rsyslog</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  设置如下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SYSLOGD_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-r&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/rsyslog.conf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 去除 下面两行的注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ModLoad imudp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$UDPServerRun 514</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 local7 上面添加如下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">local2.*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                                 /var/log/haproxy.log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsyslog</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> haproxy</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#绑定非本机的IP需要在sysctl.conf文件中配置： net.ipv4.ip_nonlocal_bind=1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   /etc/sysctl.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net.ipv4.ip_nonlocal_bind</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> haproxy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭  关闭selinux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setenforce</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/selinux/config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SELINUX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">disabled</span></span></code></pre></div><p>配置文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Example configuration for a possible web application.  See the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># full configuration options online.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   https://www.haproxy.org/download/1.8/doc/configuration.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Global settings</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">global</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # to have these messages end up in /var/log/haproxy.log you will</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # need to:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 1) configure syslog to accept network log events.  This is done</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    by adding the &#39;-r&#39; o ption to the SYSLOGD_OPTIONS in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    /etc/sysconfig/syslog</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 2) configure local2 events to go to the /var/log/haproxy.log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #   file. A line like the following can be added to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #   /etc/sysconfig/syslog</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    local2.*                       /var/log/haproxy.log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         127.0.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    chroot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      /var/lib/haproxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    pidfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     /var/run/haproxy.pid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxconn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        haproxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       haproxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    daemon</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # turn on stats unix socket</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> socket</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/haproxy/stats</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># common defaults that all the &#39;listen&#39; and &#39;backend&#39; sections will</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># use if not designated in their block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defaults</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     global</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  httplog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  dontlognull</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-server-close</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forwardfor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       except</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.0/8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  redispatch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    retries</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> queue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           1m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          1m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          1m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-keep-alive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxconn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                 3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># main frontend which proxys to the backends</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#---------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  admin_stats</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	bind</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.0.0.0:4001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	stats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dbs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	bind</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :80</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	balance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> roundrobin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:8080</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	bind</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :81</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	balance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> roundrobin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:9000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span></span></code></pre></div>`,3),h=[p];function t(k,e,F,r,d,g){return a(),i("div",null,h)}const o=s(l,[["render",t]]);export{c as __pageData,o as default};
