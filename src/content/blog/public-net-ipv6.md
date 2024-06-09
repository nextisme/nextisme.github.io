---
author: Jay Zhou
pubDatetime: 2024-06-08T09:30:41.816Z
title: 公网ipv6和istoreOS
slug: "public-net-ipv6"
featured: true
tags:
  - blog
description: "n1安装istoreOS并且使用ipv6使用日志"
---

# IPV6 使用体验

## 2024.6.2

获取到公网地址，使用ipv6公网地址远程控制电脑
光猫桥接，路由器拨号（最简单方法）

## 2024.6.3

使用ipv6地址，访问家中的Alist服务
ipv6访问端口的格式 http://[ ]:5678

## 2024.6.4

给N1设备重新安装了istoreOS系统，相对op更加的轻巧，可扩展
用公网访问时访问不了好像访问的端口是443的端口但是443屏蔽了，明天解决，很简单

## 2024.6.5

istoreOS IPV6 ddns解析，实现公网域名+端口访问
还没有实现https的访问，有点难

## 2024.6.6

终于实现了https的外网访问，对端口有了更深刻的认知
