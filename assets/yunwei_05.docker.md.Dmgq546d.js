import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CVSRuG3h.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/05.docker.md","filePath":"yunwei/05.docker.md"}'),p={name:"yunwei/05.docker.md"},l=n(`<div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dj/demo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">demo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./logs:/logs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      LANG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      JAVA_OPTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-Xmx512m -Xms512m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8082:8081&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>idea 搭建 docker</span></span>
<span class="line"><span>服务器端 idea 开启远程</span></span>
<span class="line"><span>pom.xml 修改如下</span></span>
<span class="line"><span>在 src 目录下 创建 docker 目录</span></span>
<span class="line"><span>编写 Dockerfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM java:8</span></span>
<span class="line"><span>MAINTAINER dj dj@qq.com</span></span>
<span class="line"><span>COPY *.jar /app.jar</span></span>
<span class="line"><span>EXPOSE 8081</span></span>
<span class="line"><span>ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;app.jar&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用插件打包即可发布到测试环境</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;configuration&gt;</span></span>
<span class="line"><span>                    &lt;excludes&gt;</span></span>
<span class="line"><span>                        &lt;exclude&gt;</span></span>
<span class="line"><span>                            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span>                            &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span>                        &lt;/exclude&gt;</span></span>
<span class="line"><span>                    &lt;/excludes&gt;</span></span>
<span class="line"><span>                &lt;/configuration&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;com.spotify&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;docker-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;configuration&gt;</span></span>
<span class="line"><span>                    &lt;!-- 远程Docker的地址 --&gt;</span></span>
<span class="line"><span>                    &lt;dockerHost&gt;http://192.168.83.133:2375&lt;/dockerHost&gt;</span></span>
<span class="line"><span>                    &lt;!-- 镜像名称、前缀、项目名 --&gt;</span></span>
<span class="line"><span>                    &lt;imageName&gt;\${docker.image.prefix}/\${project.artifactId}&lt;/imageName&gt;</span></span>
<span class="line"><span>                    &lt;!-- Dockerfile的位置 --&gt;</span></span>
<span class="line"><span>                    &lt;dockerDirectory&gt;src/docker&lt;/dockerDirectory&gt;</span></span>
<span class="line"><span>                    &lt;resources&gt;</span></span>
<span class="line"><span>                        &lt;resource&gt;</span></span>
<span class="line"><span>                            &lt;targetPath&gt;/&lt;/targetPath&gt;</span></span>
<span class="line"><span>                            &lt;!-- 表示的target文件夹 --&gt;</span></span>
<span class="line"><span>                            &lt;directory&gt;\${project.build.directory}&lt;/directory&gt;</span></span>
<span class="line"><span>                            &lt;!-- 表示打出来的JAR包--&gt;</span></span>
<span class="line"><span>                            &lt;include&gt;\${project.build.finalName}.jar&lt;/include&gt;</span></span>
<span class="line"><span>                        &lt;/resource&gt;</span></span>
<span class="line"><span>                    &lt;/resources&gt;</span></span>
<span class="line"><span>                &lt;/configuration&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span></code></pre></div><p>docker 加速方案</p><p>可信镜像源 <a href="https://hub.atomgit.com/" target="_blank" rel="noreferrer">https://hub.atomgit.com/</a></p><div class="language-plsql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plsql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hub.gog.email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在名称前加入 地址 hub.gog.email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> docker pull hub.gog.email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">skywalking</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">daemon.json </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加一下内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;registry-mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://hub.gog.email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]} </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> systemctl daemon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reload &amp;&amp;  systemctl restart docker </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">github.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmliu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Workers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker.io</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">issues</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span></code></pre></div><p>docker 搭建 mysql 主从 5.7</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  主</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3306:3306</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql-master</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/opt/docker/mysql/data:/var/lib/mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/opt/docker/mysql/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MYSQL_ROOT_PASSWORD=root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql:5.7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3310:3306</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql-slave</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/opt/docker/mysql2/data:/var/lib/mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/opt/docker/mysql2/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MYSQL_ROOT_PASSWORD=root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql:5.7</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 主</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6259b6c58571</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入容器  设置一个复制的账号 并授权</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;slave&#39;@&#39;*&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IDENTIFIED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WITH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;slave&#39;@&#39;%&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IDENTIFIED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GRANT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REPLICATION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SLAVE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;slave&#39;@&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GRANT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REPLICATION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SLAVE,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REPLICATION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CLIENT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;slave&#39;@&#39;%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flush</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> privileges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  记下 pos  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#从</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 343b6bb2bb80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CHANGE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MASTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MASTER_HOST=&#39;192.168.229.128&#39;,MASTER_PORT=3306,MASTER_USER=&#39;slave&#39;,MASTER_PASSWORD=&#39;root&#39;,MASTER_LOG_FILE=&#39;mysql-bin.000003&#39;,MASTER_LOG_POS=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">769</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slave</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\G</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在主库创建 数据库增删改查   在从库上查询记录即可</span></span></code></pre></div><p>docker haproxy mysql 主从</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  haproxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/docker/haproxy:/usr/local/etc/haproxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5000:5000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  haproxy:latest</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#----------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Global settings</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#----------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">global</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127.0.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	maxconn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	daemon</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	defaults</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httplog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dontlognull</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-server-close</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forwardfor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> except</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.0/8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redispatch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	retries</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> queue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-keep-alive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	maxconn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 500</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  mysql</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        bind</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :5000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		mode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  tcp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		balance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  roundrobin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcplog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  master</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.229.128:3306</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  slave</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.229.128:3310</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span></span></code></pre></div>`,9),t=[l];function h(k,e,F,r,d,g){return a(),i("div",null,t)}const c=s(p,[["render",h]]);export{y as __pageData,c as default};
