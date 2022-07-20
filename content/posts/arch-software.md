---
title: "Arch Linux 常用软件"
date: 2020-07-10T17:36:21+08:00
draft: true
tags: 
    - 软件
    - 推荐
    - linux
    - arch
    - 常用
---

## 目录

* [编辑篇](#编辑篇)
	- [NeoVim](#neovim)
	- [Gedit](#gedit)
* [监视类](#监视类)
	- [Htop](#htop)
	- [BashTop](#bashtop)
* [截图类](#截图类)
	- [Flameshot](#flameshot)
	- [Scrot](#scrot)
* [其它类](#其它类)
	- [Google Chrome](#google-chrome)
	- [Feh](#feh)
	- [mpv](#mpv)
	- [Lazygit](#lazygit)

## 编辑篇

### NeoVim

对于我来说，编辑器 [NeoVim](https://neovim.io)，帮助乌干达儿童，没得选 (滑稽)

说回正题，NeoVim 是一个代码兼文本编辑器，它是 Vim 的衍生版，不过 NeoVim 的启动速度更快，自定义性更高，还有 NeoVim 独占的插件

并且，最重要的是，这个软件在**命令行**下运行，也就是说，我想做一个编辑，只需要输一行命令，也不用打开图形化界面，直接就能开始编辑！

当然，使不使用 NeoVim 是你自己的自由，主要看你的工作环境是不是常在终端下，以及你能否习惯 Vim 家族的逻辑方式 (NORMAL, INSERT, VISUAL 模式等)，如果能，那么你可以尝试一下 NeoVim！

NeoVim 和 Vim 都拥有自己的图形化界面，也就是 GTK/QT 版，但我个人认为特意打开图形化界面，除非 NeoVim 能做到像 Emacs 那样，进入就不用再切出来，否则将会降低工作效率！

### Gedit

gedit 是一款图形化的文本编辑器，是 GNOME 默认的文本编辑器，不过我很少用它。类似产品还有 KDE 自带的 Kate，不用的原因是过于臃肿

![](/images/software/gedit.png)

小声 BB: 其实用它只是因为在 MC 里输入不了中文用它输入在粘贴进去而已 XD

## 监视类

### Htop

Info: 就不说 Top 了，那玩意现在基本没人用了

Htop 是一款全能的系统监视软件，虽然有点丑，但是监视得还是比较全面了，也能做些杀程操作啥的

![](/images/software/htop.png)

### BashTop

BashTop 是一款**非常好看且实用**的监控软件，它不仅能监视 CPU、内存、硬盘等占用情况，还能监控单个进程的运行情况、占用等！

![](/images/software/bashtop.png)

## 截图类

### Flameshot

Flameshot，中文名火焰截图，是一款在 Linux 上使用的截屏工具，在截图后也可以进行编辑操作，可以说是 Linux 版的 Snipaste！

![](/images/software/flameshot.png)

### Scrot

Scrot 是一个命令行独占的万能截图工具，如果不在后面传参的话默认截取全屏，文件格式默认为 png，可以通过 `scrot -h` 或 `man scrot` 获取帮助

([上面 Flameshot 的截图](#flameshot)就是 Scrot 截的)

## 其它类

### Google Chrome

Chrome 浏览器，必备，就是内存占用有点高

![](/images/software/chrome.png)

### Feh

Feh 是一个图片查看软件，当然，也可以用它来指定图片切换壁纸，操作为仅命令行

![](/images/software/feh.png)

### mpv

mpv 是一个音视频播放软件，当然，也可以把它调教好做图片查看器，但是不推荐，操作命令行独占

![](/images/software/mpv.png)

### Lazygit

Lazygit 是一个 Git 的懒人版本，有在终端的 "UI"，支持自定义快捷键

![](/images/software/lazygit.png)

---

以上便是我所有日常使用的软件，[dwm](https://dwm.suckless.org) 与 [st](https://st.suckless.org) 忽略不计

你可以在[我的 GitHub](https://github.com/KiteAB) 上找到以上大多数软件的配置

我的 GitHub 地址可以在本站的右上角找到
