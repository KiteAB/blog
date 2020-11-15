/**
 *
 * Present by Zapic @ 2020
 * https://github.com/KawaiiZapic/Present/
 *
 * Please DO NOT remove this copyright message, as the basic respect for origin author.
 *
 */

NodeList.prototype.forEach = NodeList.prototype.forEach || function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback.call(this[i], this[i], i)
    }
};

function qSlt(selector) {
    return document.querySelector(selector);
}

function qSltAll(selector) {
    return document.querySelectorAll(selector);
}

function setArtTip(content) {
    qSlt(".article-content").classList.add("empty");
    qSlt(".article-content").innerHTML = content;
}

function randomSet(set) {
    for (var i = 0; i < set.length; i++) {
        var r = Math.floor(Math.random() * (set.length - i));
        var p = set[r];
        set[r] = set[i];
        set[i] = p;
    }
}

var feed = new XMLHttpRequest();
feed.open("GET", feedPath, true);
feed.addEventListener("load", function () {
    qSlt(".article-container").classList.add("loaded");
    try {
        var data = JSON.parse(feed.responseText);
    } catch (e) {
    }
    if (feed.status !== 200 || !data || data.status === -1) {
        setArtTip('<i class="fa fa-warning"></i><p class="article-empty-tip">暂时无法连接到博客</p>');
        return;
    }
    data = data.data;
    if (data.length === 0) {
        setArtTip('<i class="fa fa-inbox"></i><p class="article-empty-tip">暂时没有文章</p>');
        return;
    }
    for (var i = 0; i < data.length; i++) {
        qSlt(".article-content").innerHTML += '<p class="article-item"><a target="_blank" class="article-title" href="' + data[i].link + '">' + data[i].title + '</a><span class="article-time">' + data[i].timestamp + '</span></p>';
    }
});
feed.addEventListener("error", function () {
    qSlt(".article-container").classList.add("loaded");
    setArtTip('<i class="fa fa-warning"></i><p class="article-empty-tip">暂时无法连接到博客</p>');
});
feed.send();
var sBg = bgArr[Math.floor(Math.random() * bgArr.length)];
qSlt(".background-layer").style.backgroundImage = "url(" + sBg.thumb + ")";
var bgLoader = new Image();
bgLoader.src = sBg.url;
var bgTimeout = -1;

function bgHandler() {
    bgTimeout === -1 ? 0 : clearTimeout(bgTimeout);
    qSlt(".background-layer").style.backgroundImage = "url(" + sBg.url + ")";
    qSlt(".background-layer").classList.remove("loading");
}

bgLoader.complete ? bgHandler() : (function () {
    bgLoader.addEventListener("load", bgHandler);
    bgTimeout = setTimeout(function () {
        qSlt(".background-layer").classList.add("loading");
    }, 1000);
})();
var doki = new Typinyin();
randomSet(senArr);
doki.setOptions({
    sentences: senArr,
    startDelay: 1000,
    typeSpeed: 100,
    pause: 3000,
    backSpeed: 60,
    cursorChar: "|",
    loop: true,
});
window.addEventListener("DOMContentLoaded", function () {
    qSlt(".circle-line").addEventListener("animationiteration", function () {
        doki.attach(".dokidoki-text");
        qSlt(".self-avatar").classList.add("finished");
        qSlt(".content-layer").classList.add("finished");
        setTimeout(function () {
            document.body.classList.remove("locked");
            qSlt(".content-layer").classList.remove("finished");
            qSlt(".self-avatar").classList.add("no-delay");
            doki.init();
        }, 1500);
        qSltAll(".switcher-btn").forEach(function (v) {
            var id = v.id.substr(-1);
            v.addEventListener("click", function () {
                qSlt(".self-wrapper").style.transform = "translateX(-" + 33.3 * (parseInt(id) - 1) + "%)";
                qSlt(".btn-select-indicator").style.left = "" + 33.3 * (parseInt(id) - 1) + "%";
                qSlt(".selected").classList.remove("selected");
                v.classList.add("selected");
            });
        });
    }, {once: true});
});
console.log("\n %c Present %c By Zapic \n\n", "color: #fff; background: #fb7299; padding:5px 0;", "background: #efefef; padding:5px 0;");