import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.Bwo9zaPt.js";const k=JSON.parse('{"title":"Docker","description":"","frontmatter":{},"headers":[],"relativePath":"page/Docker.md","filePath":"page/Docker.md","lastUpdated":1728498416000}'),l={name:"page/Docker.md"};function i(c,s,t,o,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h1><h2 id="使用-yum-安装" tabindex="-1">使用 yum 安装 <a class="header-anchor" href="#使用-yum-安装" aria-label="Permalink to &quot;使用 yum 安装&quot;">​</a></h2><p>执行以下命令安装依赖包：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device-mapper-persistent-data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lvm2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #docker依赖的工具</span></span></code></pre></div><h2 id="设置yml源-采用阿里的仓库下载docker" tabindex="-1"><strong>设置yml源，采用阿里的仓库下载docker</strong> <a class="header-anchor" href="#设置yml源-采用阿里的仓库下载docker" aria-label="Permalink to &quot;**设置yml源，采用阿里的仓库下载docker**&quot;">​</a></h2><div class="language-cobol vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cobol</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yum-config-manager </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">add-repo http:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mirrors.aliyun.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker-ce</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">centos</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker-ce.repo</span></span></code></pre></div><h2 id="拉取最新的docker版本" tabindex="-1">拉取最新的docker版本 <a class="header-anchor" href="#拉取最新的docker版本" aria-label="Permalink to &quot;拉取最新的docker版本&quot;">​</a></h2><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install docker-ce</span></span></code></pre></div><h2 id="如果想下载指定版本-可以使用命令查看版本" tabindex="-1">如果想下载指定版本，可以使用命令查看版本 <a class="header-anchor" href="#如果想下载指定版本-可以使用命令查看版本" aria-label="Permalink to &quot;如果想下载指定版本，可以使用命令查看版本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum list docker-ce --showduplicates | sort -r</span></span></code></pre></div><h2 id="然后使用命令下载指定版本" tabindex="-1">然后使用命令下载指定版本 <a class="header-anchor" href="#然后使用命令下载指定版本" aria-label="Permalink to &quot;然后使用命令下载指定版本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install docker-ce-24.0.6</span></span></code></pre></div><h2 id="启动docker" tabindex="-1">启动docker <a class="header-anchor" href="#启动docker" aria-label="Permalink to &quot;启动docker&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl start docker</span></span></code></pre></div><h1 id="docker命令大全" tabindex="-1">docker命令大全 <a class="header-anchor" href="#docker命令大全" aria-label="Permalink to &quot;docker命令大全&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker version #查看Docker版本信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker info #显示Docker的系统信息，包括镜像和容器的数量 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker 命令 --help #查看所有的命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl status docker  #查看docker运行状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker images #查看所有的镜像</span></span>
<span class="line"><span>镜像基本命令</span></span>
<span class="line"><span>查看全部镜像</span></span>
<span class="line"><span>查看全部镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker images #查看所有的镜像</span></span>
<span class="line"><span>测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test docker]# docker images</span></span>
<span class="line"><span>REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE</span></span>
<span class="line"><span>docker.io/hello-world   latest              feb5d9fea6a5        19 months ago       13.3 kB</span></span>
<span class="line"><span>docker.io/centos        latest              5d0da3dc9764        19 months ago       231 MB</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>repository 镜像的仓库源</span></span>
<span class="line"><span>tag        镜像的标签</span></span>
<span class="line"><span>image id   镜像的id</span></span>
<span class="line"><span>created    镜像创建时间</span></span>
<span class="line"><span>size       镜像大小</span></span>
<span class="line"><span>可选项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-a, --all  #列出所有的镜像</span></span>
<span class="line"><span>-q,--quiet #只显示镜像的id</span></span>
<span class="line"><span>搜索镜像</span></span>
<span class="line"><span>搜索镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker search 镜像</span></span>
<span class="line"><span>测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test docker]# docker search mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可选项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-f,--filter #根据提供的条件过滤输出</span></span>
<span class="line"><span>[root@test docker]#  docker search mysql -f </span></span>
<span class="line"><span></span></span>
<span class="line"><span>下载镜像</span></span>
<span class="line"><span>1、常规下载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull 镜像名</span></span>
<span class="line"><span>测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test ~]# docker pull mysql</span></span>
<span class="line"><span>Using default tag: latest #如果不写tag，默认就是最新的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、指定版本下载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull 镜像名:版本号</span></span>
<span class="line"><span>测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test ~]# docker pull mysql:5.7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除镜像</span></span>
<span class="line"><span>1、根据镜像ID删除对应的镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker rmi -f 镜像ID</span></span>
<span class="line"><span>测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test ~]# docker images</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test ~]# docker rmi -f dd6675b5cfea #删除mysql5.7版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@test ~]# docker images</span></span>
<span class="line"><span>REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE</span></span>
<span class="line"><span>docker.io/mysql         latest              8189e588b0e8        5 days ago          564 MB</span></span>
<span class="line"><span>docker.io/hello-world   latest              feb5d9fea6a5        19 months ago       13.3 kB</span></span>
<span class="line"><span>docker.io/centos        latest              5d0da3dc9764        19 months ago       231 MB</span></span>
<span class="line"><span>2、删除多个的镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker rmi -f 镜像ID 镜像ID 镜像ID ......</span></span>
<span class="line"><span>3、删除全部的镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker rmi -f $(docker images -aq) </span></span>
<span class="line"><span>构建镜像</span></span>
<span class="line"><span>docker build -f dockerfile文件 -t 镜像名:版本号 .  </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#-f file的意思，后面加要执行的dockerfile文件</span></span>
<span class="line"><span>#-t tagged的意思，后面加镜像的名称</span></span>
<span class="line"><span>查看镜像的构建过程</span></span>
<span class="line"><span>docker history 镜像ID</span></span>
<span class="line"><span>通过这个命令，我们可以查看到某个镜像暴露的端口号，以及追溯他们的构建过程，便于我们学习！</span></span>
<span class="line"><span>run 新建容器并启动</span></span>
<span class="line"><span>注意：如果Docker中没有这个镜像，那么这个run命令会先下载镜像，再创建容器并启动！！！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run [可选参数] image(镜像名):版本号（默认是最新版本，想要指定版本需要加上版本号！）</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>可选参数：</span></span>
<span class="line"><span>--name=&quot;name&quot; 容器名字，通过一个镜像可以创建多个容器实例，命名可以区分不同的容器</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>-d  以后台的方式运行 （使用-d命令常见的坑：</span></span>
<span class="line"><span>比如我们想启动以下Nginx服务，只让他在后台运行，但是没有前台的服务可以交互，那么系统就会默认把这个服务关掉！不提供服务！）</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>-it 使用交互方式运行，进入容器查看内容</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>-p  指定容器的端口</span></span>
<span class="line"><span>    有四种方式</span></span>
<span class="line"><span>        -p ip:主机端口:容器端口</span></span>
<span class="line"><span>        -p 主机端口:容器内部端口(常用，主机端口映射某个容器内部的端口号，访问主机的端口，即可访问容器)</span></span>
<span class="line"><span>        -p 容器端口</span></span>
<span class="line"><span>        容器端口</span></span>
<span class="line"><span>-P(大写)  随机指定端口</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>--rm  容器关闭后就被删除掉，一般用于测试！</span></span></code></pre></div>`,16)]))}const g=a(l,[["render",i]]);export{k as __pageData,g as default};
