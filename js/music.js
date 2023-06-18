const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "Behind Bloue Eyes",
            artist: "Limp Bizikit",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/Behind%C2%A0Blue%C2%A0Eyes-%E3%80%8A%E6%84%A4%E6%80%92%E7%9A%84%E5%B0%8F%E9%B8%9F%E3%80%8B%E7%94%B5%E5%BD%B1%E6%8F%92%E6%9B%B2%20-%20Limp%C2%A0Bizkit.flac?sign=I-liggddhCrv9DDybfCbbgTCEm84yHPJGJi5j6UHVzQ=:0",
            theme: "#171513"
        },
        {
            name: "Iridescent",
            artist: "Linkin Park",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/Iridescent-%E3%80%8A%E5%8F%98%E5%BD%A2%E9%87%91%E5%88%9A3%E3%80%8B%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2%20-%20Linkin%C2%A0Park.flac?sign=_-tZqu81JAduJGhjKVvkbXlgEugBh7O_Cf48-A2s5Ps=:0",
            theme: "#0057a7"
        },
        {
            name: "Nothing In The World",
            artist: "Atomic Kitten",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/Nothing%C2%A0In%C2%A0The%C2%A0World%20-%20Atomic%C2%A0Kitten.flac?sign=TZ1JPKsfAgoXcVoEGgKwRlOS7bra5M12k7GwBeuU8NY=:0",
            theme: "#0057a7"
        },
        {
            name: "C U Again",
            artist: "Cartoon&Futuristik&Mikk Mäe",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/C%C2%A0U%C2%A0Again%20-%20Cartoon%26Futuristik%26Mikk%C2%A0Ma%CC%88e.flac?sign=rQPKxuyf2GUElY7jE5mRsu52UqrWIPJkz7_84omvb3c=:0",
            theme: "#0057a7"
        },
        {
            name: "The Spectre",
            artist: "Alan Walker",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/Alan%20Walker%20-%20The%20Spectre.flac?sign=LDEmRZRCHs6_jU8-9aFn1Wdbk5A_h-O_kyjvPWsiKIg=:0",
            theme: "#0057a7"
        },
        {
            name: "Faded",
            artist: "Alan Walker、Iselin Solheim",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/Alan%20Walker%E3%80%81Iselin%20Solheim%20-%20Faded.flac?sign=mkcuVdmQGOkypHKIA6kxwkkw9QLDEtzH1sLz2gLfCB4=:0",
            theme: "#0057a7"
        },
        {
            name: "Way Back",
            artist: "Vicetone、Cozi Zuehlsdorff",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/Vicetone%E3%80%81Cozi%20Zuehlsdorff%20-%20Way%20Back.flac?sign=JjvEpNrtPrsT8nRMCTtQpp49TQBzNGUJiSlTxAo7DEs=:0",
            theme: "#0057a7"
        },
        {
            name: "Unity",
            artist: "TheFatRat",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/%E7%89%B9%E6%AE%8A/TheFatRat%20-%20Unity.flac?sign=bK8URWkBqam7lcEfZ1b784YR_Rza6H19j2p7Su5n_yI=:0",
            theme: "#0057a7"
        },
        {
            name: "Turn All the Lights On",
            artist: "T-Pain、Ne-Yo",
            url: "http://101.201.81.237:5244/d/Onedrive_Workstation/Music/Music/%E7%89%B9%E6%AE%8A/Turn%20All%20the%20Lights%20On%20-%20T-Pain%E3%80%81Ne-Yo.flac?sign=aQNdFUGhPPlt6E8PB4pxNsMbrZ-W16dE6Z7sp5M31Tk=:0",
            theme: "#0057a7"
        },
/*
        {
            name: "The Saltwater Room",
            artist: "Owl City",
            url: "https://drive.imsyy.top/api?path=%2F%E9%9F%B3%E4%B9%90%2F%E6%96%87%E4%BB%B6%E5%BC%95%E7%94%A8%2FOwl%20City-The%20Saltwater%20Room.mp3&raw=true",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002FEF7L03Cv7T_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2FOwl%20City-The%20Saltwater%20Room.lrc",
            theme: "#33658d"
        }
*/
    ]
});

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});