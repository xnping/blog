# Docker

## 使用 yum 安装

执行以下命令安装依赖包：

```shell
yum install -y yum-utils device-mapper-persistent-data lvm2 #docker依赖的工具
```

## **设置yml源，采用阿里的仓库下载docker**

```cobol
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## 拉取最新的docker版本

```undefined
yum install docker-ce
```

## 如果想下载指定版本，可以使用命令查看版本

```
yum list docker-ce --showduplicates | sort -r
```

## 然后使用命令下载指定版本

```
yum -y install docker-ce-24.0.6
```

## 启动docker

```
systemctl start docker
```

# docker命令大全

```
docker version #查看Docker版本信息

docker info #显示Docker的系统信息，包括镜像和容器的数量 

docker 命令 --help #查看所有的命令

systemctl status docker  #查看docker运行状态

docker images #查看所有的镜像
镜像基本命令
查看全部镜像
查看全部镜像

docker images #查看所有的镜像
测试

[root@test docker]# docker images
REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
docker.io/hello-world   latest              feb5d9fea6a5        19 months ago       13.3 kB
docker.io/centos        latest              5d0da3dc9764        19 months ago       231 MB
 
解释：
repository 镜像的仓库源
tag        镜像的标签
image id   镜像的id
created    镜像创建时间
size       镜像大小
可选项

-a, --all  #列出所有的镜像
-q,--quiet #只显示镜像的id
搜索镜像
搜索镜像

docker search 镜像
测试

[root@test docker]# docker search mysql

可选项

-f,--filter #根据提供的条件过滤输出
[root@test docker]#  docker search mysql -f 

下载镜像
1、常规下载

docker pull 镜像名
测试

[root@test ~]# docker pull mysql
Using default tag: latest #如果不写tag，默认就是最新的

2、指定版本下载

docker pull 镜像名:版本号
测试

[root@test ~]# docker pull mysql:5.7

删除镜像
1、根据镜像ID删除对应的镜像

docker rmi -f 镜像ID
测试

[root@test ~]# docker images

[root@test ~]# docker rmi -f dd6675b5cfea #删除mysql5.7版本

[root@test ~]# docker images
REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
docker.io/mysql         latest              8189e588b0e8        5 days ago          564 MB
docker.io/hello-world   latest              feb5d9fea6a5        19 months ago       13.3 kB
docker.io/centos        latest              5d0da3dc9764        19 months ago       231 MB
2、删除多个的镜像

docker rmi -f 镜像ID 镜像ID 镜像ID ......
3、删除全部的镜像

docker rmi -f $(docker images -aq) 
构建镜像
docker build -f dockerfile文件 -t 镜像名:版本号 .  
 
#-f file的意思，后面加要执行的dockerfile文件
#-t tagged的意思，后面加镜像的名称
查看镜像的构建过程
docker history 镜像ID
通过这个命令，我们可以查看到某个镜像暴露的端口号，以及追溯他们的构建过程，便于我们学习！
run 新建容器并启动
注意：如果Docker中没有这个镜像，那么这个run命令会先下载镜像，再创建容器并启动！！！

docker run [可选参数] image(镜像名):版本号（默认是最新版本，想要指定版本需要加上版本号！）
 
可选参数：
--name="name" 容器名字，通过一个镜像可以创建多个容器实例，命名可以区分不同的容器
 
-d  以后台的方式运行 （使用-d命令常见的坑：
比如我们想启动以下Nginx服务，只让他在后台运行，但是没有前台的服务可以交互，那么系统就会默认把这个服务关掉！不提供服务！）
 
-it 使用交互方式运行，进入容器查看内容
 
-p  指定容器的端口
    有四种方式
        -p ip:主机端口:容器端口
        -p 主机端口:容器内部端口(常用，主机端口映射某个容器内部的端口号，访问主机的端口，即可访问容器)
        -p 容器端口
        容器端口
-P(大写)  随机指定端口
 
--rm  容器关闭后就被删除掉，一般用于测试！
                         
```

