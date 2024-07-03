---
author: Jay Zhou
pubDatetime: 2024-06-15T14:13:38.571Z
title: "VM上linux密码忘记修改指南"
slug: "password"
featured: false
tags:
  - vmware
description: "VMWare虚拟机Linux系统忘记登录密码"
---

**一、问题：linux用户登录密码忘记**

**二、解决方式：修改用户密码**

**三、修改的步骤：**

**1.将虚拟机重启，在重启页面按【e】，进入命令编辑页面**



**2.进入命令编辑页面后，利用箭头键，找到linux16,在最后的一行结尾处加上【init=/bin/sh】 ，按住【ctrl+x】**


**3.在页面加载成功后，输入【ls】命令，点击回车**

**4.输入【mount -o remount,rw /】命令，点击回车**

**5.输入【passwd】命令，修改密码，需要输入两次密码，后面一次作为确认密码**

**6.输入【touch / .autorelabel】命令，让系统自动修改密码**

**7.输入【exec /sbin/init】命令，退出修改编辑页面，并且系统修改完成后自动重启**

切记：一定要切换到sh-4.2# 目录才可以更改密码，否则passwd命令无法识别。

**8.启动成功后，输入新修改的密码，就可以正常登陆了。**

文章       https://blog.csdn.net/weixin_46038915/article/details/125255539