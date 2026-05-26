import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.CVSRuG3h.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/10.mysql数据恢复.md","filePath":"yunwei/10.mysql数据恢复.md"}'),p={name:"yunwei/10.mysql数据恢复.md"},l=n(`<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">统计</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 表占据的空间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE_SCHEMA,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ROUND</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(((DATA_LENGTH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> INDEX_LENGTH) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FROM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    INFORMATION_SCHEMA.TABLES</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE_SCHEMA=&#39;test&#39;</span></span></code></pre></div><p>数据恢复</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql 5.7</span></span>
<span class="line"><span>通过dbsake</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dbsake frmdump   frm文件路径 &gt; db.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导出表结构文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过ibd文件进行恢复</span></span>
<span class="line"><span>1， 在目标数据库执行建表语句</span></span>
<span class="line"><span>脱离表空间  sys_user  表名</span></span>
<span class="line"><span>2，alter table   sys_user  表名 discard tablespace;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3，  把ibd文件放入  服务器指定数据目录下</span></span>
<span class="line"><span>如果是linux系统 注意权限</span></span>
<span class="line"><span>chown -R mysql:mysql ./ry</span></span>
<span class="line"><span>--  最后一步 执行命令后查询表数据是否导入</span></span>
<span class="line"><span> 4. alter table sys_user import tablespace;</span></span>
<span class="line"><span>5.--  通过 ibd 文件 获取 表结构信息</span></span>
<span class="line"><span> ibd2sdi  -d sys_user /var/lib/mysql/ry/sys_user.ibd</span></span></code></pre></div><p>通过 binlog 恢复 mysql数据</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ##   将 binlog 解析为可识别的文本 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mysqlbinlog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/mysql/mysql-bin.000001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> back.sql</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ## 找到 删除操作的语句  找到 binlog的position</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ## 执行如下命令  做数据恢复</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mysqlbinlog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/mysql/mysql-bin.000001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --start-position=525</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stop-position=661</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -uroot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre></div>`,5),t=[l];function e(h,k,d,r,c,y){return i(),a("div",null,t)}const F=s(p,[["render",e]]);export{o as __pageData,F as default};
