import{_ as e,c as s,o as a,a2 as t}from"./chunks/framework.CVSRuG3h.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/30.docker部署中间件.md","filePath":"yunwei/30.docker部署中间件.md"}'),n={name:"yunwei/30.docker部署中间件.md"},r=t(`<h2 id="elasticsearch-docker-搭建-集群" tabindex="-1">elasticsearch docker 搭建 集群 <a class="header-anchor" href="#elasticsearch-docker-搭建-集群" aria-label="Permalink to &quot;elasticsearch docker 搭建 集群&quot;">​</a></h2><p>version: &#39;3&#39;</p><p>services: elasticsearch1: image: elasticsearch:7.9.3 container_name: elasticsearch1 environment:</p><pre><code>  - cluster.name=es-cluster
  - node.name=es-node1
  - bootstrap.memory_lock=true
  - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
  - discovery.seed_hosts=elasticsearch2,elasticsearch3
  - cluster.initial_master_nodes=elasticsearch1,elasticsearch2,elasticsearch3
  - transport.tcp.port=9300
ulimits:
  memlock:
    soft: -1
    hard: -1
volumes:
  - esdata1:/usr/share/elasticsearch/data
ports:
  - &quot;9200:9200&quot;
  - &quot;9300:9300&quot;
networks:
  - esnet
</code></pre><p>elasticsearch2: image: elasticsearch:7.9.3 container_name: elasticsearch2 environment:</p><pre><code>  - cluster.name=es-cluster
  - node.name=es-node2
  - bootstrap.memory_lock=true
  - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
  - discovery.seed_hosts=elasticsearch1,elasticsearch3
  - cluster.initial_master_nodes=elasticsearch1,elasticsearch2,elasticsearch3
  - transport.tcp.port=9300
ulimits:
  memlock:
    soft: -1
    hard: -1
volumes:
   - esdata2:/usr/share/elasticsearch/data
networks:
  - esnet
</code></pre><p>elasticsearch3: image: elasticsearch:7.9.3 container_name: elasticsearch3 environment:</p><pre><code>  - cluster.name=es-cluster
  - node.name=es-node3
  - bootstrap.memory_lock=true
  - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
  - discovery.seed_hosts=elasticsearch1,elasticsearch2
  - cluster.initial_master_nodes=elasticsearch1,elasticsearch2,elasticsearch3
  - transport.tcp.port=9300
ulimits:
  memlock:
    soft: -1
    hard: -1
volumes:
    - esdata3:/usr/share/elasticsearch/data
networks:
  - esnet
</code></pre><p>volumes: esdata1: driver: local esdata2: driver: local esdata3: driver: local</p><p>networks: esnet: driver: bridge</p><h2 id="docker-搭建-nacos" tabindex="-1">docker 搭建 nacos <a class="header-anchor" href="#docker-搭建-nacos" aria-label="Permalink to &quot;docker  搭建  nacos&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##  单节点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-nacos-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8848:8848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  MODE=standalone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nacos/nacos-server:2.0.2</span></span></code></pre></div><h2 id="containerd" tabindex="-1">containerd <a class="header-anchor" href="#containerd" aria-label="Permalink to &quot;containerd&quot;">​</a></h2><p><a href="https://blog.csdn.net/qq_29709589/article/details/147342838" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_29709589/article/details/147342838</a></p>`,14),i=[r];function c(o,l,h,d,p,k){return a(),s("div",null,i)}const u=e(n,[["render",c]]);export{_ as __pageData,u as default};
