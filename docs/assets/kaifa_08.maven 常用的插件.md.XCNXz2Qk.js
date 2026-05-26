import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.CVSRuG3h.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"kaifa/08.maven 常用的插件.md","filePath":"kaifa/08.maven 常用的插件.md"}'),p={name:"kaifa/08.maven 常用的插件.md"},t=i(`<p>maven 常用的插件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>  &lt;finalName&gt;demowar&lt;/finalName&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>      &lt;plugin&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;configuration&gt;</span></span>
<span class="line"><span>          &lt;port&gt;80&lt;/port&gt;</span></span>
<span class="line"><span>        &lt;/configuration&gt;</span></span>
<span class="line"><span>      &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/build&gt;</span></span></code></pre></div><p>maven-jar-plugin 打包 不会 把依赖包打包 <a href="https://blog.csdn.net/qq_40708942/article/details/124579623" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_40708942/article/details/124579623</a><a href="https://j3q80mf3ig.feishu.cn/docx/GYyWd6T9AoUnFBxKhTocRmlrnqb" target="_blank" rel="noreferrer">https://j3q80mf3ig.feishu.cn/docx/GYyWd6T9AoUnFBxKhTocRmlrnqb</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;plugin&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;configuration&gt;</span></span>
<span class="line"><span>        &lt;archive&gt;</span></span>
<span class="line"><span>            &lt;manifest&gt;</span></span>
<span class="line"><span>                &lt;useUniqueVersions&gt;true&lt;/useUniqueVersions&gt;</span></span>
<span class="line"><span>                &lt;addClasspath&gt;true&lt;/addClasspath&gt;</span></span>
<span class="line"><span>                &lt;classpathPrefix&gt;lib&lt;/classpathPrefix&gt;</span></span>
<span class="line"><span>                &lt;!--     main 所在路径        --&gt;</span></span>
<span class="line"><span>                &lt;mainClass&gt;com.me.demo.DemoApplication&lt;/mainClass&gt;</span></span>
<span class="line"><span>            &lt;/manifest&gt;</span></span>
<span class="line"><span>        &lt;/archive&gt;</span></span>
<span class="line"><span>        &lt;outputDirectory&gt;./dist&lt;/outputDirectory&gt;</span></span>
<span class="line"><span>    &lt;/configuration&gt;</span></span>
<span class="line"><span>&lt;/plugin&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;plugin&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;maven-dependency-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;executions&gt;</span></span>
<span class="line"><span>        &lt;execution&gt;</span></span>
<span class="line"><span>            &lt;id&gt;copy-dependencies&lt;/id&gt;</span></span>
<span class="line"><span>            &lt;phase&gt;package&lt;/phase&gt;</span></span>
<span class="line"><span>            &lt;goals&gt;</span></span>
<span class="line"><span>                &lt;goal&gt;copy-dependencies&lt;/goal&gt;</span></span>
<span class="line"><span>            &lt;/goals&gt;</span></span>
<span class="line"><span>            &lt;configuration&gt;</span></span>
<span class="line"><span>                &lt;outputDirectory&gt;./dist/lib&lt;/outputDirectory&gt;</span></span>
<span class="line"><span>            &lt;/configuration&gt;</span></span>
<span class="line"><span>        &lt;/execution&gt;</span></span>
<span class="line"><span>    &lt;/executions&gt;</span></span>
<span class="line"><span>&lt;/plugin&gt;</span></span></code></pre></div><p>指定依赖包从 外部环境加载 java -Dloader.path=/app/lib2 -jar demo-0.0.1-SNAPSHOT.jar</p><p>springboot maven profile 实现打包 <a href="https://blog.csdn.net/aofengdaxia/article/details/122796184" target="_blank" rel="noreferrer">https://blog.csdn.net/aofengdaxia/article/details/122796184</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;profiles&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>        &lt;id&gt;dev&lt;/id&gt;</span></span>
<span class="line"><span>        &lt;properties&gt;</span></span>
<span class="line"><span>            &lt;profiles.active&gt;dev&lt;/profiles.active&gt;</span></span>
<span class="line"><span>        &lt;/properties&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>        &lt;id&gt;test&lt;/id&gt;</span></span>
<span class="line"><span>        &lt;properties&gt;</span></span>
<span class="line"><span>            &lt;profiles.active&gt;test&lt;/profiles.active&gt;</span></span>
<span class="line"><span>        &lt;/properties&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>        &lt;id&gt;prod&lt;/id&gt;</span></span>
<span class="line"><span>        &lt;properties&gt;</span></span>
<span class="line"><span>            &lt;profiles.active&gt;prod&lt;/profiles.active&gt;</span></span>
<span class="line"><span>        &lt;/properties&gt;</span></span>
<span class="line"><span>        &lt;activation&gt;</span></span>
<span class="line"><span>            &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;</span></span>
<span class="line"><span>        &lt;/activation&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>&lt;/profiles&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">maven-assembly-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/artifactId&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3.3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/version&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">archive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                            &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mainClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">com.me.fluxdemo.FluxDemoApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/mainClass&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/archive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">descriptorRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">descriptorRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jar-with-dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/descriptorRef&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/descriptorRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                   &lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   默认</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 打出来的jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  flux-demo-0.0.1-SNAPSHOT-jar-with-dependencies</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  表示去掉后缀</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                      --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendAssemblyId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/appendAssemblyId&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">finalName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${project.build.finalName}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-single.jar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/finalName&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">executions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">make-assembly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/id&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> used</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inheritance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merges</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">phase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/phase&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bind</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packaging</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">goals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                            &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">goal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">single</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/goal&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/goals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/execution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/executions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,8),l=[t];function e(h,k,g,r,d,c){return n(),a("div",null,l)}const E=s(p,[["render",e]]);export{F as __pageData,E as default};
