import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CVSRuG3h.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/24.kali启用 root.md","filePath":"yunwei/24.kali启用 root.md"}'),l={name:"yunwei/24.kali启用 root.md"},p=n(`<p>启用 root</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /etc/ssh/sshd_config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  下面这行设置为yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PermitRootLogin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启 ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把 kali  用户添加到 sudo 用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kali</span></span></code></pre></div><h3 id="vim编辑器鼠标右键无法粘贴-而是进入insert-visual模式的解决方法" tabindex="-1">vim编辑器鼠标右键无法粘贴，而是进入insert visual模式的解决方法 <a class="header-anchor" href="#vim编辑器鼠标右键无法粘贴-而是进入insert-visual模式的解决方法" aria-label="Permalink to &quot;vim编辑器鼠标右键无法粘贴，而是进入insert visual模式的解决方法&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim编辑器鼠标右键无法粘贴，而是进入insert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> visual模式的解决方法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">root@localhost:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults.vim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/share/vim/vim90/defaults.vim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">root@localhost:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/vim/vim90/defaults.vim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">·········</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> has(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;mouse&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">term</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;xterm&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mouse=a</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #找到这行，将等号右边的值改为“r”</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> else</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mouse=nvi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span></span></code></pre></div><h2 id="修改apt-镜像源" tabindex="-1">修改apt 镜像源 <a class="header-anchor" href="#修改apt-镜像源" aria-label="Permalink to &quot;修改apt  镜像源&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /etc/apt/sources.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://mirrors.aliyun.com/kali</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kali-rolling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contrib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> non-free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> non-free-firmware</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb-src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://mirrors.aliyun.com/kali</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kali-rolling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contrib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> non-free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> non-free-firmware</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div>`,6),t=[p];function h(e,k,r,F,d,c){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
