---
title: "IRC 使用教程 (Freenode + Weechat)"
date: 2020-07-27T16:44:50+08:00
draft: true
tags: 
    - irc
    - freenode
    - linux
---

#### 这篇博文简单地讲述了 IRC 聊天室的使用方法

<!--more-->

## 客户端

IRC 聊天室需要任意一种支持 IRC 服务的客户端，这边推荐在 CLI 中可以运行的 Weechat

### 安装

#### Arch Linux

```shell
sudo pacman -S weechat
```

#### Debian Linux

```shell
sudo apt install weechat
```


## 使用

### 添加服务器

在终端输入 `weechat` 以打开 Weechat 客户端，在命令框输入:

```shell
/server add <服务器名称> chat.freenode.net/<一个没有被占用的本地端口>
```

例:

```shell
/server add freenode8001 chat.freenode.net/8001
```

其它 IRC 服务平台同理添加地址，使用 `/server` 指令可以添加服务器

### 连接服务器

确保执行了上一步并且上述地址不会出现连接超时的问题，输入:

```shell
/connect <你在上一步设置的服务器名称>
```

例:

```shell
/connect freenode8001
```

当输出 `User mode [+i] by <计算机名>` 时，则代表连接成功

### 修改用户名

有时计算机名并不是我们想要的用户名，你可以使用如下指令来进行用户名的更改:

```shell
/nick <用户名>
```

### 加入/创建聊天室

你需要一个聊天室的代码，聊天室代码均以井号开头，以 `#LinuxComu` 为例 (群员 @SpringHan 创建的官群聊天室)

输入:

```shell
/join #LinuxComu
```

当出现以下信息时，则代表连接聊天室成功，你可以畅快的聊天了

```shell
xxx (xxx@你的ip) has joined <频道代码>
Topic set by xxx (xxx@xxx.xxx.xxx.xxx) on <时间>
Channel <频道代码>: xxx nicks (xxx op, xxx voices, xxx normals)
Channel created on <时间>
```

### 退出

你可以通过 `/quit` 命令来退出 Weechat 客户端

---

注: 你可以通过 `<M-1>` `<M-2>` 等键来切换已经加入的聊天室

