---
title: "记一次系统出错及备份过程"
date: 2020-08-21T17:41:24+08:00
tags: 
    - 备份
    - linux
    - arch
    - archlinux
---

不知道哪天把 Arch 玩炸了写的

<!--more-->

## 出现错误

一个愉快的下午, 我正在玩游戏, 然后我的 Linux 愉快地内存溢出了, 然后内核挺正常地 Crash 掉了, 然后当我重启之后, 我发现我的 Arch Linux 进入了 rootfs 恢复模式, 我当时的心情就好像以前有一次在实机上执行了 `sudo rm -rf /*` 一样, 一句 fuck 就要脱口而出

## 解决错误

还是同一个不怎么愉快的下午, 我看到屏幕上显示的错误信息貌似是 `ERROR: Can't read /dev/sda2 filesystem, use fsck may can fix it. Good Luck!`, 意思差不多就是: 不能读取 /dev/sda2 (我的根目录) 的文件系统, 用 `fsck` 这个工具可能可以修复这个错误, 祝 你 好 运

那么试试执行 `fsck` ?

(PS: `fsck` 是一个检查与修复 Linux 文件系统的工具)

然后出现信息让我输入 y/n 来确定是否修复一个块, 这样的信息连着显示了三四个 tty 的整屏……

修复完成, 重启电脑, 修复完成!

## 备份系统

经过这么一次事件, 心里还是凉的, 准备整个双内核, 但是麻烦, 于是准备开启定时备份的策略

在网上搜到了[这么一篇文章](https://www.jianshu.com/p/b03a51c682a5), 正好可以满足我的需求, Done!

## 最后

大家真的一定要定时备份系统, 这样即使遇到故障, 也只需要插上备份盘然后恢复就好了, 指不定哪天你的硬盘就坏了呢?
