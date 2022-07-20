---
title: "Arch 上的备份还原"
date: 2020-08-21T18:09:40+08:00
draft: true
tags: 
    - 备份
    - 还原
    - arch
    - linux
    - archlinux
    - 转载
---

入坑Arch，主要方便自己查询和刚入坑经常玩挂的朋友，其他发行版应该大同小异

Linux上主要的备份方式 我知道的有 dd 和 tar

相比来说 tar打包显得比较灵活，可以用于本机备份恢复，也可以恢复到其他计算机，打包的目录可以完全按自己需要。这里主要介绍tar打包以及本机的恢复。

tar打包 可以只打包不压缩，速度会比较快，但是你可能会面对一个 好几十G的系统备份包，并不推荐。

压缩 可以用gzip或者Bzip2 （好像还有其他的，不熟悉，就不做介绍了） 二者相比，gzip速度相对较快，但压缩比率比Bzip2略低。

我这里并不用这两个软件打包，因为两个都是单线程，打包速度会非常慢。。。曾经用bzip2打包等到天荒地老都没好。。。

那么重头戏来了！ 偶然的机会知道了一个叫pigz的多线程压缩软件，采用与gzip相同的压缩方式，默认以逻辑CPU的个数的线程进行压缩，具体线程还可以自定义，速度飞快，详细可以百度 pigz。

那么 tar能不能调用pigz进行压缩呢？ 答案是肯定的！

看一下tar的man手册

```
-I, --use-compress-program=COMMAND

Filter data through COMMAND. It must accept the -d option,

for decompression. The argument can contain command line

Options.
```

发现tar是可以指定其他压缩程序进行压缩的。

于是直接 `sudo pacman -S pigz` 安装（arch官方源就有）下面就可以开始打包了！

进入根目录 然后执行：

`sudo tar --use-compress-program=pigz -cvpf arch-backup.tgz --exclude=/proc --exclude=/lost+found --exclude=/arch-backup.tgz --exclude=/mnt --exclude=/sys --exclude=/run/media /`


简单介绍一下命令，--use-compress-program=pigz 是用pigz压缩，arch-backup.tgz是打包之后的文件名，--exclude=/xxx是打包时排除的目录，这里简单的排除了一些不需要的目录，具体排除的内容可以根据自己的发行版和需要设定，--exclude=/arch-backup.tgz 是排除根目录下的自身，因为我是在根目录下进行的操作，如果不排除自身的话，打包可能会进入一个死循环。。。你可能会打出一个巨型包。



这样就开始进行压缩打包了

用htop 可以看到 CPU满载，大概3-5分钟左右完成，比起单线程10%多的占用 速度快了不知道多少倍！



完成候可以看到 28G左右的分区 打包完 是一个15G的压缩包，个头还是很大。。。也算可以接受。。不知道有没有其他办法能够再小点


打包完成后，你可能会看到一条错误信息，具体原因小白不懂，不过并没有什么影响。然后将备份的包放到一个你觉得安全的地方。

至此，所有备份工作都已经完成，系统挂了可以用下面的方法恢复

---------------------------------------------------------------------------------------------------------------

首先需要准备一个能够引导的liveCD的U盘



进入liveCD之后 先用wifi-menu联网，因为liveCD上没有pigz，如果不想解压恢复的时候用半年的话就联网装上再解压吧


Ping一下百度看看是否联网成功，之后简单配置下源 就可以安装pigz了



sudo nano /etc/pacman.d/mirrorlist 配置源

安装pigz


要用到的pigz准备好之后就可以挂载磁盘 进行恢复了。

lsblk简单看下各个分区情况


我这里sdc1是boot分区 sdc2是/分区 sdb3是保存备份的分区

直接新建了一个目录挂载 sdb3

mkdir /f

mount /dev/sdb3 /f


然后挂载 目标linux根分区到/mnt目录， 我的arch只分了 boot和/分区，并且备份的时候 忘记排除boot目录了，所以这里索性都挂载上干掉。挂载之后如图


现在就可以干掉已经损坏的系统了

`rm -rf /mnt/*`

命令很危险，一定要看清楚，想清楚了之后再执行，我真是怕小手一抖就把不想干掉的分区干掉了

这里zsh提示是否确定干掉/mnt上的所有文件 直接y
boot目录因为是分区挂载点提示设备忙，这个目录并没有被删掉，不过ls一下可以看见/mnt下只剩boot目录，/mnt/boot下所有的引导文件也都没有了

万事俱备，下面进行解压恢复 还是使用pigz进行多线程解压

#tar --use-compress-program=pigz -xvpf /f/sysbackup/arch-backup-20160331.tgz -C /mnt

这里自行把备份路径替换掉。接下来就是解压过程如图：



用不了多久 也就2-3分钟 解压完成！(ssd)

ls看看 干掉的文件是不是都回来了呢


OK，問題ない！

到这里，恢复工作已经接近尾声，还记得备份的时候排除掉的目录么，重建排除的目录


然后直接reboot重启

前面干掉了 / 分区所有文件真的 大丈夫？

重启之后 可爱的grub菜单出现了！
因为我之前把boot一起干掉了，所以看到这里就表面恢复成功了！

所有备份恢复工作全部完成！

总结起来，主要是利用了 pigz 的多线程提高 压缩解压的效率，比普通的gzip或者bzip2快很多！缺点还是比较明显，就是备份的包个头略大，不知道怎么能够再小点

而且我只涉及了本机恢复，如果恢复到其他机子，还涉及到fstab修改之类的一些收尾工作。

抛砖引玉，如果有其他好的方法 欢迎交流！

```
作者：baby_blue_
链接：https://www.jianshu.com/p/b03a51c682a5
来源：简书
```
