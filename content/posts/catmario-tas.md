---
title: Catmario TAS 教程
date: 2019-04-07 20:12:26
tags: 
    - tas
    - catmario
    - 猫里奥
---

#### 今天为大家带来一些Catmario TAS（或者说叫NAS）的教程，希望大家也能使用TAS的方法打出让人惊讶的视频与记录！
<!--more-->


### 本文章转自@快乐mario的百度贴吧账号

---

首先，打一个TAS至少要具备以下几点要求
- 有充足的时间
- 有对电脑操作的基本技巧
- 有对TAS是什么的认识
- 有对Catmario的理解与热爱
- 有一定耐心与恒心
- 有一个XP系统
具备这一些，打一个TAS就是很简单的事情了。

**【注意】这里的几点都是很重要的！最重要的是必须有 [XP] 系统！**


首先，我们要下载一个工具，名字叫Hourglass。这里提供给大家的是Hourglass-r71的汉化版本，我们就用这个来做Catmario的TAS。我们还需要Catmario的游戏文件。请点击下面的地址下载Hourglass模拟器和Catmario游戏，解压缩到合适的地方。
[点我下载模拟器以及游戏文件](https://pan.baidu.com/share/link?shareid=3242248356&amp;uk=3120686554)

解压缩后可以看到TAS的文件夹，打开后里面有两个文件夹，一个是Catmario，一个是Hourglass。我们要打开的是Hourglass文件夹里的“模拟器”文件。
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas1.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas2.jpg)

打开以后看到这样的画面，按图示操作
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas3.jpg)

然后Hourglass会自动在Hourglass文件夹内创造同名的wtf录像文件，这个录像文件是纪录按键用的，也就是等下你打TAS时每一帧记录按键的文件。

下面以【最速】TAS为例，给大家介绍TAS教程，首先要进行一系列的设置：
选择好“游戏可执行程序”为我们的Catmario游戏以后，点击【运行库】→【区码模拟】→【强制日文区码】，这样可以解决TAS黑屏的问题。

点击【运行库】→【信息同步模式】→【同步】，这样可以解决一些突然退出的问题，但是有时退出也是难免的。
在【每秒帧数】栏中，把【60】帧改为【30】帧，这样可以防止延迟帧（Lag）的出现。
在【系统时间】栏中，把【6000】改为【0】，这样可以方便系统时间的校对。
点击【输入】→【配置快捷键】，找到并点击【单帧步进（第2个）】，查看是否为Space，如果不是Space，点击【设定...】然后按下【空格键】。

这样差不多就可以了，但是如果你在游戏途中（倒着的飞鱼出现时）崩溃（Crash）了，请再选择【声音】→【禁止DirectSound创建】，这样可以解决Crash的问题。（一般情况下不要选择，不然会没有声音）
接下来就是开始录制TAS录像的时候了，先来试验一下，点击【运行并录制新录像】，你会看到Catmario游戏窗口跳出，像往常一样先玩一会吧！

【注意】有时候腾讯等软件会误报注入信息，请点击更多操作→允许此程序所有操作，如果不注入按键怎么玩游戏啊，这种低级的误报真是奇怪！

玩的差不多了，点击【停止运行】，然后点击【运行并播放现有录像】，你会发现，你刚刚的所有操作都像是被录下来了一样又回放了一遍！而且是在真正的游戏窗口中回放的哦，这就是因为模拟器把你刚刚所有的按键全部记录到【录像文件】里面去了，而且时间非常的精确，不会有差错哦~

**注意，每次打开Hourglass都要重新设定上面的内容**

其实这个软件何止只有这么点功能，他还有很多强大的功能，我们来体验一下。

按【运行并录制新录像】重新录制，一般他会提示是否重复录制[record over]该录像？意思就是你现在重新录制的话，会把之前的按键操作覆盖掉，如果你不希望被覆盖掉，就点击取消，然后给录像文件换一个名字（本来是...\しょぼんのアクション.wtf，你可以换成速通.wtf或者其他）然后运行并录制新录像。

这时，你可以在任何时候，点击模拟器右边的“暂停”，你会发现，游戏居然停住了！然后，你可以敲击一下空格键，你又会发现，整个游戏只动了一点点！这是因为模拟器把游戏一秒钟的操作分配到了30帧，所以你就可以做很精确的操作了！

比如这样~
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas4.jpg)

比如这样~
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas5.jpg)

厉害吧！还有更厉害的呢，你可以在任何时候按 Shift + 1 来保存一个存档，然后当你玩着玩着突然死了以后，按下 1 ，你会发现：游戏又从你保存的地方开始了！

**【注意】一共有20个存档，0-9 和 F1-F10 ，存档要加Shift，读档不用，9的存档对应F10的读档**

【温馨提示】如果你一个录像要录制很多天的话，你可以在任何时候，按【运行并播放现有录像】，按【shift+数字】存档，再点击Hourglass窗口的【读写权限】，然后按【数字】读档就可以继续录制！

前面展示的就是Hourglass的基本功能：按键记录、加速（快进）与减速、暂停、即时存档与读档（S\L 大法）而这些基本是普通的游戏不能做到的。

接下来说明一下按键文件转AVI录像的功能，选择【AVI】→【捕捉视频+音频】，然后点击【运行并播放现有录像】，会提示保存AVI录像文件在哪里，选择好以后就开始播放录像，在合适的时候停止运行，你会发现AVI录像文件已经保存好了，帧率都不变，非常高清！但是文件大小比较大，推荐用岛国的软件 TMPGEnc 4.0 压缩，也可以用Winrar或者2345好压打成压缩包~

前面已经把Hourglass大部分基础的内容讲完了，但是实际上这款模拟器还有一个强大又是必备的功能：内存搜索与监视！内存搜索就不教大家了，这里我把我亲自搜索整理出来的内存值分享给大家。首先点击Hourglass的【工具】→【内存监视】，跳出这样一个框框
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas6.jpg)

在这个框框中按【添加】
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas7.jpg)

打开的窗口中按上图输入地址、注释，选择数据大小后确定
用同样的方法添加以下内容
0060331C 横坐标
00603320 纵坐标
00603330 横速度（-800~800）
00603334 纵速度（-1600~1600）
00603336 上升判定1，下降判定
000603364 踩地判定1，跳起判定0

其实真正打速通的话，我们要用的仅仅是第3个和第4个，有时会用到第6个！添加好这6个内存值后，点击文件→保存，这样下次用模拟器就可以直接打开！

然后不要关这个内存监视，你再去录一下看看~是不是感觉非常高级！

好，有了这两个，我们就开始速通录像的录制吧！
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas8.jpg)

首先当然是调整好帧数和系统时间及其他设置，然后先点击【暂停】，按下【运行并录制新录像】后马上按住Enter！如果你第8帧就进入了黑屏画面，说明一开始你的速度是最快的！
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas9.jpg)

这时候你就要按住右，然后用空格键步进，确保你开始你就在加速！
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas10.jpg)

可以看到画面刚出现，你的横速度已经达到了80，这就是TAS方法之一：黑屏加速法！

TAS方法之二：边缘起跳与边缘落脚法如果我们想要让TAS变得更快，那么我们就要让它多加速一会，所以当然要加速到最边缘再起跳！值得一提的是，Catmario的【起跳判定】特别坑，它是计算你z按键的次数，如果是双数的话就可以起跳，如果是单数的话就不能起跳- -
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas11.jpg)
（前一帧已经按下z，单数不起跳）

![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas12.jpg)
（又按了一帧z，双数起跳）

边缘落脚：即使你没有真正踩到地板，由于边缘判定的bug，也会上去！

![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas13.jpg)
（啊我要掉下去了~~~）

![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas14.jpg)
（哇，我竟然跳上来了喵！）

TAS方法之三：二段跳、斜角穿墙、纵向穿墙

这应该是Catmario TAS 中最吸引人的部分了！让人无法理解的是，穿墙的判定条件真是奇怪得让人无语：不需要速度快（纵向穿墙），也不需要准确的按键，甚至你根本就不知道哪一个点可以卡墙！！所以，卡墙与穿墙真的是靠运气的事情，下面给大家截取几个样本图：

① 横速度 -709，猫与墙距离4像素，斜角穿墙
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas15.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas16.jpg)

② 横速度 734，猫与墙距离3像素，二段跳
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas17.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas18.jpg)

③ 横速度 717，猫与墙距离4像素，斜角穿墙
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas19.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas20.jpg)

④ 横速度 761，猫与墙距离6像素，斜角穿（隐形砖）墙
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas21.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas22.jpg)

⑤ 横速度 717，猫与墙距离4像素，二段跳
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas23.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas24.jpg)

⑥ 横速度 634，猫与墙距离4像素，二段跳
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas25.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas26.jpg)

⑦ 横速度-534，纵速度800，猫与墙距离4像素，二段跳
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas27.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas28.jpg)

⑧ 横速度800，纵速度633，猫与墙距离4像素，斜角穿墙
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas29.jpg)
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas30.jpg)

（由于博客再放例子会原地爆炸，所以直接放总结图了）
![image](https://blog.kiteab.me/images/blog/catmariotas/catmariotas31.jpg)


二段跳和斜角穿墙一般要求与墙距离4像素，横速度的绝对值≥520
纵向穿墙要求猫的手在墙中，横速度在0左右即可。
如果各位录制视频时有更大的发现，请私信快乐mario

TEHH_083：补充一点,纵向穿墙要求速度不能为0，否则会被墙挤出，若要穿右边的墙，速度必须是负的，也不能太大，否则会脱离墙内状态。左边的反之
总而言之有半个身子左右进入墙内就可以了

TAS知识【加速规则】
{横向速度加速规则}
横向加速分为两种，落地加速和（跳起）空中加速

落地加速：0~659 速度时，按方向键1帧 速度+40，如659→699
--------- 660~700→705
--------- 705~793 速度时，按方向键1帧，速度+4，如793→797
--------- 797→800

空中加速：0~500 速度是，按方向键1帧，速度+40，如500→540,速度≥501不再加速。

{横向速度减速规则}
横向减速分为三种，落地空减速，空中减速，落地回撤减速

落地减速（什么也不按）：40~800 速度时，减速-60/帧，可以减速到变方向
----------------------- 0~20 速度是，一帧减速到0

落地回撤减速（落地按反方向键）：141~800 减速-100/帧
-------------- 0~140 减速-40/帧，变方向以后就视为加速

空中减速（空中按反方向键）：141~800 减速-66/帧
-------------- 0~140 减速-40/帧，变方向以后就视为加速

很明显，撞墙减速是最最最快的！800→0也是很简单的

小结：这里我们看到当速度很快时落地回撤加速是最快的，相当于落地减速+反方向落地加速


TAS知识【加速规则】
{纵向速度加速规则}
g=100/帧，大家懂了吧~
纵向速度的取值范围为-1600~1600，默认正为下
普通跳起，第1帧纵速度-1100，然后用g减速直到落地，比如第二帧纵速度就是-1000
普通跳起（小跳）的第三帧为判定帧，如果这帧按下了跳，不管第三帧纵速度如何，第四帧纵速度自动改为……
第三帧横速度为 0~199，第四帧纵速度改为-1200
第三帧横速度为 200~599，第四帧纵速度改为-1300
第四帧横速度为 600~800，第四帧纵速度改为-1400
如果这帧没有按下跳，则继续用g减速直到落地。

小结：所以跳起第3帧横速度决定跳的高低，一般可以控制横速度达到少/多跳高一点以节省时间；所以空跳的原因就是顶砖块在跳起4帧之内。

当你要踩怪时，不管何时，如果前一帧按下了跳，踩怪后纵速度改为-1600，如果这帧没有按下跳，则纵速度改为-1000。

撞墙前后速度值变化（不一定准）
-100 0
-200 66
-300 133
-400 200
-500 266
-600 333 
-700 400 
-900 533 
-1000 600 
-1100 666 
-1200 733 
-1300 800 
-1400 866 
规律就是撞前+100，撞后+66，所以通过控制纵速度可以达到更快

---

#### 其他的所有吧友问题可以[访问网页](https://tieba.baidu.com/p/2433434207)！

**WARNING:本文章转自@快乐mario的百度贴吧账号，如有二次转载会告知原作者！！！**


博客随缘更新嗷qwq