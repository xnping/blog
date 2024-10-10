# jenkins安装

```
小笔记
清华json文件源
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/

```



## 安装jdk11

```
yum install java-11-openjdk.x86_64 -y
```

## 安装jenkins

打开清华官网下载想用的jenkins

```
https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/
```

这里我用2.462.3为例

```
cd /home 
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/jenkins-2.462.3-1.1.noarch.rpm

使用yum 安装本地包 
yum -y localinstall jenkins-2.462.3-1.1.noarch.rpm
```

启动jenkins

```
systemctl enable --now jenkins.service
等待不要终止java环境启动有点慢
查看端口是否启动
netstat -tnulp
```

![image-20241008160815878](https://img.sphcs.top/image-20241008160815878.png)

## 插件地址更换

到此jenkins安装完成 先不要访问jenkins 因为还要配置插件地址 直接启动会下载插件失败

jenkins使用的是国外的下载 我们要换成国内的jenkins下载源

```
cd /var/lib/jenkins/updates
进入配置文件地址-一定要启动Jenkins否则不产生配置文件
吧default.json文件下载出来用记事本打开
```

![image-20241008161631981](https://img.sphcs.top/image-20241008161631981.png)

https://www.google.com  替换成 https://www.baidu.com 

第二个替换地址

![image-20241008161713052](https://img.sphcs.top/image-20241008161713052.png)

```
https://updates.jenkins.io/download  替换https://mirrors.tuna.tsinghua.edu.cn/jenkins
```

![image-20241008161806327](https://img.sphcs.top/image-20241008161806327.png)

完成后保存文件 上传至目录下即可

第三个更换点

```
vim /var/lib/jenkins/hudson.model.UpdateCenter.xml
```

![image-20241008162027665](https://img.sphcs.top/image-20241008162027665.png)

```
https://updates.jenkins.io/update-center.json换成https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
```

内置的插件地址已全部换完了

重启jenkins

```
systemctl restart jenkins.service 
ip:8080访问
cat /var/lib/jenkins/secrets/initialAdminPassword
会出现临时密码
853eb83e5e1e48d69ef10b1875113326
```

进去之后安装推荐插件

![image-20241008162815242](https://img.sphcs.top/image-20241008162815242.png)

![image-20241008165041771](https://img.sphcs.top/image-20241008165041771.png)

遇到失败的我们记起来修改地址在手动安装

```
Pipeline
Gradle
GitHub Branch Source
Pipeline: GitHub Groovy Libraries
Pipeline Graph View
Git
LDAP
```

接下来设置账号密码地址即可进入

手动安装一下那些插件

![image-20241008165708091](https://img.sphcs.top/image-20241008165708091.png)