$(function() {
    function r() {}

    function ht() {
        b(n.objectDraw)
    }

    function o() {
        t.clearRect(0, 0, f.width, f.height), b(n.objectDraw), e && ft(n.objectDraw, e)
    }

    function b(n) {
        e ? k(n, !1) : it(n)
    }

    function it(n) {
        if (t.beginPath(),
            t.globalAlpha = 1,
            //рисуем конуты чехла
            t.moveTo(411, 158),
            t.lineTo(545, 158),
            t.quadraticCurveTo(590, 158, 590, 203),
            t.lineTo(590, 582),
            t.quadraticCurveTo(590, 627, 545, 627),
            t.lineTo(411, 627),
            t.quadraticCurveTo(366, 627, 366, 582),
            t.lineTo(366, 203),
            t.quadraticCurveTo(366, 158, 411, 158),
            t.lineWidth = 1,
            t.strokeStyle = "#f5f5f5",
            t.fillStyle = "#f5f5f5",
            t.fill(), t.stroke(), t.closePath(), n)
            for (i = u.length - 1; i < u.length; i++) {
                var r = u[i];
                r.cx = r.imageX + (r.imageRight - r.imageX) / 2,
                r.cy = r.imageY + (r.imageBottom - r.imageY) / 2,
                t.save(),
                t.translate(r.cx, r.cy),
                t.rotate(r.rotate),
                t.globalCompositeOperation = "source-atop",
                t.globalAlpha = 1,
                t.drawImage(r.img, 0, 0, r.img.width, r.img.height, -r.imageWidth / 2, -r.imageHeight / 2, r.imageRight - r.imageX, r.imageBottom - r.imageY),
                t.restore()
            }
        t.drawImage(w, 278, 111, 400, 563), //рисуем нашку картинку чехла с тенью, которую делали в фотошопе
        t.save(),
        t.beginPath(),
        t.globalAlpha = 1,
        //опять рисую контур чехла для тени
        t.moveTo(411, 158),
        t.lineTo(545, 158),
        t.quadraticCurveTo(590, 158, 590, 203),
        t.lineTo(590, 582),
        t.quadraticCurveTo(590, 627, 545, 627),
        t.lineTo(411, 627),
        t.quadraticCurveTo(366, 627, 366, 582),
        t.lineTo(366, 203),
        t.quadraticCurveTo(366, 158, 411, 158),
        t.shadowColor = "#757677",
        t.shadowBlur = 30,
        t.globalCompositeOperation = "destination-over",
        t.fill(), t.closePath(), t.restore()
    }

    function k(n, r) {
        if (t.beginPath(),
            t.globalAlpha = 1,
            //рисуем синюю оконтовку
            t.moveTo(371, 121),
            t.lineTo(385, 121),
            t.quadraticCurveTo(390, 121, 390, 131),
            t.quadraticCurveTo(390, 146, 405, 146),
            t.lineTo(437, 146),
            t.quadraticCurveTo(452, 146, 452, 131),
            t.quadraticCurveTo(452, 121, 457, 121),
            t.lineTo(585, 121),
            t.quadraticCurveTo(627, 121, 627, 163),
            t.lineTo(627, 188),
            t.quadraticCurveTo(627, 193, 617, 193),
            t.quadraticCurveTo(602, 193, 602, 208),
            t.lineTo(602, 308),
            t.quadraticCurveTo(602, 323, 617, 323),
            t.quadraticCurveTo(627, 323, 627, 328),
            t.lineTo(627, 623),
            t.quadraticCurveTo(627, 665, 585, 665),
            t.lineTo(568, 665),
            t.quadraticCurveTo(563, 665, 563, 655),
            t.quadraticCurveTo(563, 640, 548, 640),
            t.lineTo(408, 640),
            t.quadraticCurveTo(393, 640, 393, 655),
            t.quadraticCurveTo(393, 665, 388, 665),
            t.lineTo(371, 665),
            t.quadraticCurveTo(329, 665, 329, 623),
            t.lineTo(329, 163),
            t.quadraticCurveTo(329, 121, 371, 121),
            t.lineWidth = 1, t.strokeStyle = v, t.stroke(), t.fillStyle = v, t.fill(), t.stroke(), t.closePath(), t.beginPath(), t.lineWidth = 1, t.globalCompositeOperation = "destination-out",
            //рисуем красную оконтовку камеры
            t.moveTo(409, 167),
            t.lineTo(428, 167),
            t.quadraticCurveTo(453, 167, 453, 186),
            t.quadraticCurveTo(453, 205, 428, 205),
            t.lineTo(409, 205),
            t.quadraticCurveTo(383, 205, 383, 186),
            t.quadraticCurveTo(383, 167, 409, 167),
            t.strokeStyle = "#ff00ff", t.stroke(), t.fill(), t.globalAlpha = 1, t.closePath(), n)
            for (i = u.length - 1; i < u.length; i++) {
                var f = u[i];
                f.cx = f.imageX + (f.imageRight - f.imageX) / 2,
                f.cy = f.imageY + (f.imageBottom - f.imageY) / 2,
                t.save(),
                t.translate(f.cx, f.cy),
                t.rotate(f.rotate),
                t.globalCompositeOperation = "source-atop",
                t.globalAlpha = 1,
                t.drawImage(f.img, 0, 0, f.img.width, f.img.height, -f.imageWidth / 2, -f.imageHeight / 2, f.imageRight - f.imageX, f.imageBottom - f.imageY),
                t.restore(),
                r || (t.save(), t.translate(f.cx, f.cy), t.rotate(f.rotate), t.globalCompositeOperation = "destination-over", t.globalAlpha = .2, t.drawImage(f.img, 0, 0, f.img.width, f.img.height, -f.imageWidth / 2, -f.imageHeight / 2, f.imageRight - f.imageX, f.imageBottom - f.imageY), t.restore())
            }
        t.beginPath(), t.globalCompositeOperation = "source-over", t.globalAlpha = 1,
        //рисуем красную оконтовку чехла
        t.moveTo(411, 158),
        t.lineTo(545, 158),
        t.quadraticCurveTo(590, 158, 590, 203),
        t.lineTo(590, 582),
        t.quadraticCurveTo(590, 627, 545, 627),
        t.lineTo(411, 627),
        t.quadraticCurveTo(366, 627, 366, 582),
        t.lineTo(366, 203),
        t.quadraticCurveTo(366, 158, 411, 158),
        t.lineWidth = 2,
        t.strokeStyle = "#ff00ff", t.stroke(), t.closePath(), t.beginPath(), t.globalCompositeOperation = "source-over", t.globalAlpha = 1,
        //рисуем синюю
        t.moveTo(371, 121),
        t.lineTo(385, 121),
        t.quadraticCurveTo(390, 121, 390, 131),
        t.quadraticCurveTo(390, 146, 405, 146),
        t.lineTo(437, 146),
        t.quadraticCurveTo(452, 146, 452, 131),
        t.quadraticCurveTo(452, 121, 457, 121),
        t.lineTo(585, 121),
        t.quadraticCurveTo(627, 121, 627, 163),
        t.lineTo(627, 188),
        t.quadraticCurveTo(627, 193, 617, 193),
        t.quadraticCurveTo(602, 193, 602, 208),
        t.lineTo(602, 308),
        t.quadraticCurveTo(602, 323, 617, 323),
        t.quadraticCurveTo(627, 323, 627, 328),
        t.lineTo(627, 623),
        t.quadraticCurveTo(627, 665, 585, 665),
        t.lineTo(568, 665),
        t.quadraticCurveTo(563, 665, 563, 655),
        t.quadraticCurveTo(563, 640, 548, 640),
        t.lineTo(408, 640),
        t.quadraticCurveTo(393, 640, 393, 655),
        t.quadraticCurveTo(393, 665, 388, 665),
        t.lineTo(371, 665),
        t.quadraticCurveTo(329, 665, 329, 623),
        t.lineTo(329, 163),
        t.quadraticCurveTo(329, 121, 371, 121),
        t.lineWidth = 2, t.strokeStyle = "#0096ff", t.stroke(), t.closePath(), t.beginPath(), t.globalAlpha = 1, t.lineWidth = 2, t.globalCompositeOperation = "source-over",
        //рисем камеру
        t.moveTo(409, 167),
        t.lineTo(428, 167),
        t.quadraticCurveTo(453, 167, 453, 186),
        t.quadraticCurveTo(453, 205, 428, 205),
        t.lineTo(409, 205),
        t.quadraticCurveTo(383, 205, 383, 186),
        t.quadraticCurveTo(383, 167, 409, 167),
        t.strokeStyle = "#ff00ff", t.stroke(), t.closePath()
    }

    function ct(n) {
        if (n)
            for (i = u.length - 1; i < u.length; i++) {
                var r = u[i];
                r.cx = r.imageX + (r.imageRight - r.imageX) / 2, r.cy = r.imageY + (r.imageBottom - r.imageY) / 2, t.save(), t.translate(r.cx, r.cy), t.rotate(r.rotate), t.globalAlpha = 1, t.drawImage(r.img, 0, 0, r.img.width, r.img.height, -r.imageWidth / 2, -r.imageHeight / 2, r.imageRight - r.imageX, r.imageBottom - r.imageY), t.restore()
            }
    }

    function rt(t, i) {
        return t > n.xRect + n.cx && t < n.xRect + n.wRect + n.cx && i > n.yRect + n.cy && i < n.yRect + n.hRect + n.cy
    }

    function ut(n) {
        return n > 360 && (n -= 360, n = ut(n)), n
    }

    function ft(i, r) {
        if (i) {
            var u, f, e;
            r ? (f = "#000000", e = 2) : (f = "#c5c5c5", e = 1), u = n.rotate >= 0 ? n.rotate * 180 / Math.PI : 360 + n.rotate * 180 / Math.PI, u = ut(u), u >= 0 && u <= 90 ? (u = u * Math.PI / 180, n.xRect = Math.round(-n.imageWidth / 2 * Math.cos(u) - n.imageHeight / 2 * Math.sin(u)), n.yRect = Math.round(-n.imageWidth / 2 * Math.sin(u) - n.imageHeight / 2 * Math.cos(u)), n.wRect = Math.round(n.imageWidth / 2 * Math.cos(u) + n.imageHeight / 2 * Math.sin(u) + n.imageWidth / 2 * Math.cos(u) + n.imageHeight / 2 * Math.sin(u)), n.hRect = Math.round(n.imageWidth / 2 * Math.sin(u) + n.imageHeight / 2 * Math.cos(u) + n.imageWidth / 2 * Math.sin(u) + n.imageHeight / 2 * Math.cos(u)), t.save(), t.translate(n.cx, n.cy), t.beginPath(), t.lineWidth = e, t.rect(n.xRect, n.yRect, n.wRect, n.hRect), t.strokeStyle = f, t.stroke(), t.restore()) : u > 90 && u <= 180 ? (u = u * Math.PI / 180, n.xRect = Math.round(n.imageWidth / 2 * Math.cos(u) - n.imageHeight / 2 * Math.sin(u)), n.yRect = Math.round(-n.imageWidth / 2 * Math.sin(u) + n.imageHeight / 2 * Math.cos(u)), n.wRect = Math.round(-n.imageWidth / 2 * Math.cos(u) + n.imageHeight / 2 * Math.sin(u) - n.imageWidth / 2 * Math.cos(u) + n.imageHeight / 2 * Math.sin(u)), n.hRect = Math.round(n.imageWidth / 2 * Math.sin(u) - n.imageHeight / 2 * Math.cos(u) + n.imageWidth / 2 * Math.sin(u) - n.imageHeight / 2 * Math.cos(u)), t.save(), t.translate(n.cx, n.cy), t.beginPath(), t.lineWidth = e, t.rect(n.xRect, n.yRect, n.wRect, n.hRect), t.strokeStyle = f, t.stroke(), t.restore()) : u > 180 && u <= 270 ? (u = u * Math.PI / 180, n.xRect = Math.round(n.imageWidth / 2 * Math.cos(u) + n.imageHeight / 2 * Math.sin(u)), n.yRect = Math.round(n.imageWidth / 2 * Math.sin(u) + n.imageHeight / 2 * Math.cos(u)), n.wRect = Math.round(-n.imageWidth / 2 * Math.cos(u) - n.imageHeight / 2 * Math.sin(u) - n.imageWidth / 2 * Math.cos(u) - n.imageHeight / 2 * Math.sin(u)), n.hRect = Math.round(-n.imageWidth / 2 * Math.sin(u) - n.imageHeight / 2 * Math.cos(u) - n.imageWidth / 2 * Math.sin(u) - n.imageHeight / 2 * Math.cos(u)), t.save(), t.translate(n.cx, n.cy), t.beginPath(), t.lineWidth = e, t.rect(n.xRect, n.yRect, n.wRect, n.hRect), t.strokeStyle = f, t.stroke(), t.restore()) : u > 270 && u <= 360 && (u = u * Math.PI / 180, n.xRect = Math.round(-n.imageWidth / 2 * Math.cos(u) + n.imageHeight / 2 * Math.sin(u)), n.yRect = Math.round(n.imageWidth / 2 * Math.sin(u) - n.imageHeight / 2 * Math.cos(u)), n.wRect = Math.round(n.imageWidth / 2 * Math.cos(u) - n.imageHeight / 2 * Math.sin(u) + n.imageWidth / 2 * Math.cos(u) - n.imageHeight / 2 * Math.sin(u)), n.hRect = Math.round(-n.imageWidth / 2 * Math.sin(u) + n.imageHeight / 2 * Math.cos(u) - n.imageWidth / 2 * Math.sin(u) + n.imageHeight / 2 * Math.cos(u)), t.save(), t.translate(n.cx, n.cy), t.beginPath(), t.lineWidth = e, t.rect(n.xRect, n.yRect, n.wRect, n.hRect), t.strokeStyle = f, t.stroke(), t.restore()), r && (t.drawImage(p, n.xRect - 12 + n.cx, n.yRect - 12 + n.cy), t.drawImage(y, n.xRect - 12 + n.cx + n.wRect, n.yRect - 12 + n.cy), t.drawImage(y, n.xRect - 12 + n.cx, n.yRect - 12 + n.cy + n.hRect), t.drawImage(p, n.xRect - 12 + n.cx + n.wRect, n.yRect - 12 + n.cy + n.hRect), t.drawImage(g, n.xRect - 12 + n.cx + n.wRect / 2, n.yRect - 12 + n.cy - 20), t.drawImage(nt, n.xRect + 16 + n.cx + n.wRect, n.yRect - 12 + n.cy))
        }
    }

    function lt(t, i) {
        var r, u;
        return (r = t - (n.cx + n.xRect - 12), u = i - (n.cy + n.yRect - 12), r >= 0 && r <= 24 && u >= 0 && u <= 24) ? 0 : (r = t - (n.cx + n.xRect - 12) - n.wRect, u = i - (n.cy + n.yRect - 12), r >= 0 && r <= 24 && u >= 0 && u <= 24) ? 1 : (r = t - (n.cx + n.xRect - 12) - n.wRect, u = i - (n.cy + n.yRect - 12) - n.hRect, r >= 0 && r <= 24 && u >= 0 && u <= 24) ? 2 : (r = t - (n.cx + n.xRect - 12), u = i - (n.cy + n.yRect - 12) - n.hRect, r >= 0 && r <= 24 && u >= 0 && u <= 24) ? 3 : (r = t - (n.cx + n.xRect - 12) - n.wRect / 2, u = i - (n.cy + n.yRect - 32), r >= 0 && r <= 24 && u >= 0 && u <= 24) ? 4 : (r = t - (n.cx + n.xRect + 16) - n.wRect, u = i - (n.cy + n.yRect - 12), r >= 0 && r <= 24 && u >= 0 && u <= 24) ? 5 : -1
    }

    function at(t) {
        for (i = 0; i < u.length; i++) u[i].name == t && u.splice(i, 1);
        n.objectDraw = !1
    }

    function vt(t) {
        s = parseInt(t.clientX - f.offsetLeft), h = parseInt(t.clientY - f.offsetTop), n.draggingResizer = e ? lt(s, h) : -1, n.draggingResizer == 5 && at(n.name), n.draggingImage = n.draggingResizer < 0 && rt(s, h), e = n.draggingResizer <= -1 && n.draggingImage == !1 ? !1 : !0, o(), n.clickRotate = n.draggingResizer == 4
    }

    function yt() {
        n.isDown = !1, n.draggingResizer = -1, n.draggingImage = !1
    }

    function pt() {
        n.isDown = !1, n.draggingResizer = -1, n.draggingImage = !1, e = !1, o()
    }

    function wt() {}

    function bt(t) {
        var a, v, y, p, i, r, l, u, c;
        if (mouseX = parseInt(t.clientX - f.offsetLeft), mouseY = parseInt(t.clientY - f.offsetTop), n.draggingResizer > -1) {
            u = mouseX - s, c = mouseY - h;
            switch (n.draggingResizer) {
                case 0:
                    i = n.imageRight - mouseX, r = i * n.ratio, i > 50 && r > 50 * n.ratio || n.imageX > mouseX ? (n.imageWidth = n.imageRight - mouseX, n.imageHeight = n.imageWidth * n.ratio, n.imageX = n.imageRight - n.imageWidth, n.imageY = n.imageBottom - n.imageHeight) : (n.imageWidth = 50, n.imageHeight = 50 * n.ratio, n.imageX = n.imageRight - 50, n.imageY = n.imageBottom - 50 * n.ratio);
                    break;
                case 1:
                    i = mouseX - n.imageX, r = i * n.ratio, i > 50 && r > 50 * n.ratio || n.imageRight < mouseX ? (n.imageWidth = mouseX - n.imageX, n.imageHeight = n.imageWidth * n.ratio, n.imageY = n.imageBottom - n.imageHeight, n.imageX = mouseX - n.imageWidth) : (n.imageWidth = 50, n.imageHeight = 50 * n.ratio, n.imageY = n.imageBottom - 50 * n.ratio);
                    break;
                case 2:
                    i = n.imageRight - n.imageX, r = n.imageBottom - n.imageY, (i > 50 && r > 50 * n.ratio || n.imageRight < mouseX) && (n.imageRight = mouseX, n.imageBottom = n.imageY + n.imageHeight * (n.imageRight - n.imageX) / n.imageWidth, n.imageWidth = n.imageRight - n.imageX, n.imageHeight = n.imageBottom - n.imageY);
                    break;
                case 3:
                    i = n.imageRight - mouseX, r = i * n.ratio, i > 50 && r > 50 * n.ratio || n.imageX > mouseX ? (n.imageWidth = n.imageRight - mouseX, n.imageHeight = i * n.ratio, n.imageX = n.imageRight - n.imageWidth) : (n.imageWidth = 50, n.imageHeight = 50 * n.ratio, n.imageX = n.imageRight - 50);
                    break;
                case 4:
                    u = mouseX - n.cx, c = mouseY - n.cy, l = Math.atan2(c, u), n.clickRotate && (n.clickRotate = !1, n.saveRotate = n.rotate), n.rotate = l + Math.PI / 2 + n.saveRotate
            }
            n.imageWidth < 50 && (n.imageWidth = 50), n.imageHeight < 50 * n.ratio && (n.imageHeight = 50 * n.ratio), n.imageRight = n.imageX + n.imageWidth, n.imageBottom = n.imageY + n.imageHeight, o()
        } else n.draggingImage ? (u = mouseX - s, c = mouseY - h, n.imageX += u, n.imageY += c, n.imageRight += u, n.imageBottom += c, s = mouseX, h = mouseY, o()) : rt(mouseX, mouseY) ? e || ft(n.objectDraw, e) : o()
    }

    function kt(t) {
        if (window.FileReader) {
            var i = new FileReader;
            i.onload = function(t) {
                gt(), n.img = new Image, n.img.onload = function() {
                    n.ratio = n.img.height / n.img.width, n.objectDraw = !0, n.imageWidth = dt(n.img.width, 820), n.imageHeight = n.imageWidth * n.img.height / n.img.width, n.imageX = n.cx - n.imageWidth / 2, n.imageY = n.cy - n.imageHeight / 2 - 10, n.imageRight = n.imageX + n.imageWidth, n.imageBottom = n.imageY + n.imageHeight, n.name = tt(), e = !0, o()
                }, n.img.src = t.target.result
            }, i.readAsDataURL(t.target.files[0])
        } else alert("Ваш браузер не поддерживает нужные технологии для корректной роботы сайта. Пожалуйста, используйте другой браузер.")
    }

    function dt(n, t) {
        return t > n ? n : t
    }

    function gt() {
        u.length == 0 ? (n = new r, u.push(n)) : (u[u.length - 1] = n, n = new r, u.push(n))
    }

    function d(i, r, u) {
        var s, o, e;
        return t.clearRect(0, 0, f.width, f.height), s = null, o = null, r == k ? r(n.objectDraw, !0) : r(n.objectDraw), e = document.createElement("canvas"), e.width = 349, e.height = 568, s = t.getImageData(300, 109, 349, 568), e.getContext("2d").putImageData(s, 0, 0), o = e.toDataURL(), u != null && (document.getElementById(u).src = null, document.getElementById(u).src = o), o.replace("data:image/png;base64,", "")
    }
    var c, l, a, ni, f, t, tt;
    $(":file"), $(".close").click(function() {
        $("#helpInfo").hide(), $("#helpInfo iframe").attr("src", jQuery("#helpInfo iframe").attr("src"))
    }), f = document.getElementById("canvas"), t = f.getContext("2d"), document.getElementById("imageLoader"), imageLoader.addEventListener("change", kt, !1), r.prototype.isDown = !1, r.prototype.draggingImage = !1, r.prototype.clickRotate = !1, r.prototype.objectDraw = !1, r.prototype.cx = f.width / 2, r.prototype.cy = f.height / 2, r.prototype.xRect = 0, r.prototype.yRect = 0, r.prototype.wRect = 0, r.prototype.hRect = 0, r.prototype.imageX = 0, r.prototype.imageY = 0, r.prototype.imageRight = 0, r.prototype.imageWidth = 0, r.prototype.imageBottom = 0, r.prototype.imageHeight = 0, r.prototype.saveRotate = 0, r.prototype.rotate = 0, r.prototype.draggingResizer = NaN, r.prototype.img = NaN, r.prototype.name = NaN, r.prototype.ratio = 0;
    var u = [],
        ti = "your text",
        n = new r,
        ii, s, h, v = "#ffffff",
        ri = "#707070",
        ui = 956,
        fi = 806,
        y = new Image,
        p = new Image,
        g = new Image,
        nt = new Image,
        w = new Image,
        et = new Image,
        ot = new Image,
        st = new Image,
        e = !1;
    w.addEventListener("load", ht, !1), y.src = "images/services/cases/create-case/leftMaxiMize.png", p.src = "images/services/cases/create-case/rightMaxiMize.png", g.src = "images/services/cases/create-case/rotateIcon.png", nt.src = "images/services/cases/create-case/remove.png", w.src = "images/services/cases/create-case/shade_iphone5.png", tt = function() {
        function n() {
            return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
        }
        return function() {
            return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
        }
    }(), $("#canvas").bind("mousedown touchstart", function(n) {
        vt(n)
    }), $("#canvas").bind("mousemove touchmove", function(n) {
        bt(n)
    }), $("#canvas").bind("mouseup touchend", function(n) {
        yt(n)
    }), $("#canvas").mouseout(function(n) {
        pt(n)
    }), $("#canvas").mouseover(function(n) {
        wt(n)
    }), $("#buttonSaveImages").click(function() {
        l = null, a = null, l = d(et, k, "imageDetailsCase"), a = d(ot, it, "imageBigCase"), $("#saveImages").modal("show")
    });
    $("#btnSendImage").one("click", function() {
        var n = $("#sendDrawImage");
        c = null, c = d(st, ct), $("#imageOriginalData").val(c), $("#imageDetailsData").val(l), $("#imageBigData").val(a), o(), n.submit()
    })
})