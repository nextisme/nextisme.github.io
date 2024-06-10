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



## 一次完整的git提交

1. **配置 Git**（如果是首次使用 Git，或者尚未配置用户信息）：

```bash
git config --global user.name "Your Name"  
git config --global user.email "your.email@example.com"
```

2. **初始化 Git 仓库**（如果尚未初始化）：

```bash
bash复制代码

git init
```

3. **查看仓库状态**（可选，但有助于了解当前工作区的状态）：

```bash
bash复制代码

git status
```

4. **添加到暂存区**（将修改的文件添加到 Git 暂存区）：

```bash
git add <file_name>  # 添加特定文件  
# 或者  
git add .  # 添加所有修改过的文件
```

5. **提交更改**（将暂存区的更改提交到 Git 仓库）：

```bash
git commit -m "Commit message"
```

6. **推送到远程仓库**（如果已经与远程仓库关联，并且想要将本地提交推送到远程）：

```bash
git push origin <branch_name>
```

请注意，`<file_name>` 应替换为你想要添加的文件名，`<branch_name>` 应替换为你想要推送的分支名。如果你是首次推送到一个新的远程仓库，你可能需要先设置远程仓库的 URL：

```bash
git remote add origin <repository_url>
```
