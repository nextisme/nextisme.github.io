---
author: Jay Zhou
pubDatetime: 2024-06-09T14:45:04.472Z
title: "Git使用指南"
slug: "git"
featured: false
tags:
  - Git
description: "使用git时遇到的问题"
---
# Git

[TOC]



## 为Git配置代理

当开启[Clash](https://so.csdn.net/so/search?q=Clash&spm=1001.2101.3001.7020)后，本机网络会被代理  代理IP地址为127.0.0.1:7890

[git](https://so.csdn.net/so/search?q=git&spm=1001.2101.3001.7020) push 失败的原因就是本机开启了代理，而git没有设置代理，导致443端口转发不过去

```
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

取消和查看代理

```
取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

查看代理
git config --global --get http.proxy
git config --global --get https.proxy
git  config --list
```

## 常用命令

```
git init         # 初始化本地git仓库（创建新仓库）
git clone git+ssh://git@192.168.53.168/VT.git
git add .        # 增加当前子目录下所有更改过的文件至index
git branch -a    # 显示所有分支
git push origin master  # 将当前分支push到远程master分支
```

[更多请见](https://developer.aliyun.com/article/948081)

