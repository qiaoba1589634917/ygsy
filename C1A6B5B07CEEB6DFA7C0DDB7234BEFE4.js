module.exports = {
    carmin: function(t) {
        var n = t.data.num;
        n > 1 && n--;
        var a = n <= 1 ? "disabled" : "normal";
        t.setData({
            num: n,
            minusStatus: a
        });
    },
    carjia: function(t) {
        var n = t.data.num, a = ++n < 1 ? "disabled" : "normal";
        t.setData({
            num: n,
            minusStatus: a
        });
    },
    time: function(t, n) {
        var a = null, o = t - Date.parse(new Date()) / 1e3;
        a = setInterval(function() {
            var t = o, e = Math.floor(t / 3600), r = e.toString();
            1 == r.length && (r = "0" + r);
            var u = Math.floor((t - 3600 * e) / 60), i = u.toString();
            1 == i.length && (i = "0" + i);
            var s = (t - 3600 * e - 60 * u).toString();
            1 == s.length && (s = "0" + s), n.setData({
                countDownHour: r,
                countDownMinute: i,
                countDownSecond: s
            }), --o <= 0 && (clearInterval(a), wx.showToast({
                title: "活动已结束",
                icon: "none",
                duration: 1e3,
                mask: !0
            }), n.setData({
                countDownHour: "00",
                countDownMinute: "00",
                countDownSecond: "00"
            }));
        }.bind(n), 1e3), n.setData({
            interval: a
        });
    },
    footan: function(t) {
        t.setData({
            prostatus: !0,
            show: !1
        });
    },
    tapsize: function(t, n) {
        var a = n.target.dataset.indexs, o = n.target.dataset.index;
        t.setData({
            taberindexs: a,
            taberindex: o
        });
    },
    home: function(t, n) {
        n.touches[0].clientY < 500 && n.touches[0].clientY > 0 && t.setData({
            top: n.touches[0].clientY
        });
    },
    time2: function(t, n) {
        var a = t - Date.parse(new Date()) / 1e3, o = setInterval(function() {
            var t = a, e = Math.floor(t / 3600 / 24), r = e.toString();
            1 == r.length && (r = "0" + r);
            var u = Math.floor((t - 3600 * e * 24) / 3600), i = u.toString();
            1 == i.length && (i = "0" + i);
            var s = Math.floor((t - 3600 * e * 24 - 3600 * u) / 60), c = s.toString();
            1 == c.length && (c = "0" + c);
            var l = Math.floor(t - 3600 * e * 24 - 3600 * u - 60 * s).toString();
            1 == l.length && (l = "0" + l), n.setData({
                countDownDay: r,
                countDownHour: i,
                countDownMinute: c,
                countDownSecond: l
            }), --a <= 0 && (clearInterval(o), wx.showToast({
                title: "活动已结束"
            }), n.setData({
                countDownDay: "00",
                countDownHour: "00",
                countDownMinute: "00",
                countDownSecond: "00"
            }));
        }.bind(n), 1e3);
        n.setData({
            interval: o
        });
    }
};