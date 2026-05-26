import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.CVSRuG3h.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/12.MariaDB.md","filePath":"yunwei/12.MariaDB.md"}'),p={name:"yunwei/12.MariaDB.md"},e=n(`<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/MariaDB.repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[mariadb]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MariaDB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">baseurl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.aliyun.com/mariadb/yum/10.6.18/centos7-amd64/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpgkey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  http://mirrors.aliyun.com/mariadb/yum/RPM-GPG-KEY-MariaDB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpgcheck</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makecache</span></span></code></pre></div>`,1),t=[e];function l(h,k,r,c,F,d){return i(),a("div",null,t)}const g=s(p,[["render",l]]);export{y as __pageData,g as default};
