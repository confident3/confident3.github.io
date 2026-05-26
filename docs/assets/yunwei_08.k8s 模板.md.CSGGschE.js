import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CVSRuG3h.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yunwei/08.k8s 模板.md","filePath":"yunwei/08.k8s 模板.md"}'),p={name:"yunwei/08.k8s 模板.md"},l=n(`<div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Namespace</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">idms</span></span></code></pre></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Pod</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  pod 的名字</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   指定命名空间   可选</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">idms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  containers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    kubectl run  mynginx  --image=nginx --port=80</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     kubectl describe pod mynginx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     kubectl describe pod mynginx  -n  idms</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  kubectl delete -f pod.yml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  kubectl logs  mynginx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  kubectl  exec -it mynginx -n idms -- /bin/bash  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  curl 10.244.2.51:80</span></span></code></pre></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">apps/v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">idms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx-deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  selector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    matchLabels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      containers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span></code></pre></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx-svc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">idms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx-svc</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      targetPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TCP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #name: mynginx-service</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #   nodePort: 30001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NodePort</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ClusterIP   NodePort  ClusterIP</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  selector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mynginx</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apiVersion: v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kind: Namespace</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: idms</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: idms</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apiVersion: v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kind: Pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  namespace: idms</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app: mynginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spec:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      image: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ports:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> containerPort: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          protocol: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mountPath: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mountPath: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mountPath: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">share</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  volumes:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      hostPath:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        path: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">opt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k8s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: DirectoryOrCreate</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      hostPath:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        path: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">opt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k8s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: DirectoryOrCreate</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      hostPath:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        path: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">opt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k8s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: DirectoryOrCreate</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apiVersion: apps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kind: ReplicaSet</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spec:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  replicas: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  selector:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    matchLabels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      app: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       labels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          app: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     spec:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       containers:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           image: nginx</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apiVersion: v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kind: Pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spec:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  affinity:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    反 亲和性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    podAntiAffinity:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#      硬限制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      requiredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#        调度到 和  nginx-pod 不同的机器上</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> topologyKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kubernetes.io/hostname&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          labelSelector:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            matchExpressions:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">              -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key: app</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                operator: In</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                values:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#      preferredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#        - weight: 100</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#          podAffinityTerm:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#            labelSelector:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#              matchExpressions:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                - key: app</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                  operator: In</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                  values:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                    - nginx-pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      image: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ports:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> containerPort: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          protocol: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TCP</span></span></code></pre></div><p>nfs pod</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apiVersion: v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kind: Namespace</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: idms</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: idms</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apiVersion: v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kind: Pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  namespace: idms</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app: mynginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">spec:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      image: nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ports:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> containerPort: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          protocol: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TCP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      volumeMounts:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mountPath: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  volumes:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      nfs:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.83.134</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        path: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nfs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">idms</span></span></code></pre></div><p>configmap</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apiVersion:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kind:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ConfigMap</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-config</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  namespace:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> redis.host:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> redis.port:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6379</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  使用 | 符号表示值是多行文本，这种格式可以保持文本的格式不变。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Pod</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: pod-nginx</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>#  command: [&quot;sh&quot;, &quot;-c&quot;, &quot;touch /configmap/redis.conf&quot;]&quot;, ]</span></span>
<span class="line"><span>  containers:</span></span>
<span class="line"><span>    - name: nginx</span></span>
<span class="line"><span>      image: nginx</span></span>
<span class="line"><span>      ports:</span></span>
<span class="line"><span>        - containerPort: 80</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>      volumeMounts:</span></span>
<span class="line"><span>        - name: nginx-conf</span></span>
<span class="line"><span>          mountPath: /configmap/redis.conf</span></span>
<span class="line"><span>  volumes:</span></span>
<span class="line"><span>    - name: nginx-conf</span></span>
<span class="line"><span>      configMap:</span></span>
<span class="line"><span>        name: nginx-conf</span></span></code></pre></div><p>secret</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apiVersion:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kind:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Secret</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mynginx-secret</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Opaque</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  username:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bXlhZG1pbg==</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  password:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> YWRtaW4=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apiVersion:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kind:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pod</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod-nginx2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spec:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      ports:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerPort:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          protocol:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TCP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          mountPath:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /secret/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          readOnly:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  volumes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      secret:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        secretName:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mynginx-secret</span></span></code></pre></div>`,14),h=[l];function k(t,e,E,d,r,g){return a(),i("div",null,h)}const F=s(p,[["render",k]]);export{c as __pageData,F as default};
