# Xah Fly Keys 与 Magit 的组合方案 (Deprecated)


虽然说没几个人把 [Xah Fly Keys](https://github.com/xahlee/xah-fly-keys) 和 [Magit](https://github.com/magit/magit) 放在一起用, 不过还是想讲讲解决一些问题的思路.

<!--more-->

## 遇到问题

最近开始尝试使用 `Xah Fly Keys`, Emacs 的默认键位虽然很好记, 但是还是有点费手, 一只手价格还是不菲的 (大雾)

然后当我配置完 `Xah Fly Keys` 的基础部分并准备用 `Magit` 做一个提交的时候, 我发现 `Xah Fly Keys` 的键位完美地把 `Magit` 的键位整个覆盖了.

## 解决方案

**(包含了完全解决不了和有副作用的方案)**

### 加钩子函数

嗯, 看起来确实管用, 对吧. 我具体是这样写的:

```emacs-lisp
(add-hook 'magit-mode-hook #'(lambda () (interactive) (xah-fly-keys -1)))
```

但是当你开心地退出 `Magit` 之后, 你会开心地发现, `Xah Fly Keys` ~~不爱你了~~没有被重新开启, 于是就有了下面一种解决方案...

### 加钩子函数 + Mini-buffer 钩子函数

看起来完全没问题了吧? 不, 我把 Mini-buffer 的钩子函数加在了 `Magit` 的后面:

```emacs-lisp
(add-hook 'magit-mode-hook #'(lambda () (interactive) (xah-fly-keys -1)))
(add-hook 'minibuffer-inactive-hook #'(lambda () (interactive) (xah-fly-keys 1)))
```

(我也不知道怎么写出这么一段的)

总之这个钩子会在每次使用 Mini-buffer 时触发, 但还是想得太天真了, 毫无用处, 因为这个钩子按理来说就不应该加在这儿...

### 加钩子函数 + 改 Magit 函数

这时候就应该换一个方面想解决方案了...

然后我发现我 `Magit` 的退出函数是绑定到我自己的自定义函数上面的 (你以为是要覆盖 `Magit` 的自带函数?)

函数内容如下:

```emacs-lisp
(defun kiteab/kill-magit (&optional dir)
  "Kill the buffer about Magit"
  (interactive)
  (magit-mode-bury-buffer)
  (unless (null (magit-mode-get-buffers))
    (dolist (buffer (magit-mode-get-buffers))
      (kill-buffer buffer))))
(define-key magit-mode-map "q" #'kiteab/kill-magit) ;; Use a sharp quote when quoting functions
```

意思是关闭所有 `Magit` 的相关 buffer.

那么直接在关闭后重新打开 `Xah Fly Keys` 不就好了?

```emacs-lisp
(defun kiteab/kill-magit (&optional dir)
  "Kill the buffer about Magit"
  (interactive)
  (magit-mode-bury-buffer)
  (unless (null (magit-mode-get-buffers))
    (dolist (buffer (magit-mode-get-buffers))
      (kill-buffer buffer)))
  (xah-fly-keys 1))
(define-key magit-mode-map "q" #'kiteab/kill-magit)
```

解决!

