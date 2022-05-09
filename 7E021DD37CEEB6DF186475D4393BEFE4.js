function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = function() {
    function t(t, e) {
        var a = [], n = !0, o = !1, r = void 0;
        try {
            for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (a.push(i.value), 
            !e || a.length !== e); n = !0) ;
        } catch (t) {
            o = !0, r = t;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (o) throw r;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n = {
    Div: function(t, e) {
        t = parseFloat(t), e = parseFloat(e);
        var a, n, o = 0, r = 0;
        try {
            o = t.toString().split(".")[1].length;
        } catch (t) {}
        try {
            r = e.toString().split(".")[1].length;
        } catch (t) {}
        return a = Number(t.toString().replace(".", "")), n = Number(e.toString().replace(".", "")), 
        a / n * Math.pow(10, r - o);
    },
    Add: function(t, e) {
        e = parseFloat(e);
        var a, n, o;
        try {
            a = t.toString().split(".")[1].length;
        } catch (t) {
            a = 0;
        }
        try {
            n = e.toString().split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        return o = Math.pow(100, Math.max(a, n)), (this.Mul(t, o) + this.Mul(e, o)) / o;
    },
    Sub: function(t, e) {
        t = parseFloat(t), e = parseFloat(e);
        var a, n, o, r;
        try {
            a = t.toString().split(".")[1].length;
        } catch (t) {
            a = 0;
        }
        try {
            n = e.toString().split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        return o = Math.pow(10, Math.max(a, n)), r = a >= n ? a : n, ((this.Mul(t, o) - this.Mul(e, o)) / o).toFixed(r);
    },
    Mul: function(t, e) {
        t = parseFloat(t), e = parseFloat(e);
        var a = 0, n = t.toString(), o = e.toString();
        try {
            a += n.split(".")[1].length;
        } catch (t) {}
        try {
            a += o.split(".")[1].length;
        } catch (t) {}
        return Number(n.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, a);
    }
}, o = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, r = function(t, e) {
    var a = t.m || "ebapi", n = t.c || "auth_api", o = t.a || "index", r = t.q || "", i = t.p || {}, u = "", c = "";
    return void 0 == e && (e = getApp().globalData.url), u = Object.keys(i).map(function(t) {
        return t + "/" + i[t];
    }).join("/"), c = Object.keys(r).map(function(t) {
        return t + "=" + r[t];
    }).join("&"), e + "/" + a + "/" + n + "/" + o + ("" == u ? "" : "/" + u) + ".html" + ("" == c ? "" : "?" + c);
}, i = function(t, e) {
    "string" == typeof t && (e = t, t = {});
    var n = t.title || "", o = t.icon || "none", r = t.endtime || 2e3;
    if (n && wx.showToast({
        title: n,
        icon: o,
        duration: r
    }), void 0 != e) if ("object" == (void 0 === e ? "undefined" : a(e))) {
        var i = e.tab || 1, u = e.url || "";
        switch (i) {
          case 1:
            setTimeout(function() {
                wx.switchTab({
                    url: u
                });
            }, r);
            break;

          case 2:
            setTimeout(function() {
                wx.navigateTo({
                    url: u
                });
            }, r);
            break;

          case 3:
            setTimeout(function() {
                wx.navigateBack({
                    delta: parseInt(u)
                });
            }, r);
            break;

          case 4:
            setTimeout(function() {
                wx.reLaunch({
                    url: u
                });
            }, r);
            break;

          case 5:
            setTimeout(function() {
                wx.redirectTo({
                    url: u
                });
            }, r);
        }
    } else "function" == typeof e ? setTimeout(function() {
        e && e();
    }, r) : setTimeout(function() {
        wx.navigateTo({
            url: e
        });
    }, n ? r : 0);
}, u = function(t, e) {
    for (var a = 0, n = 1, o = 0, r = [], i = 0; i < t.length; i++) t.charCodeAt(i) > 255 ? (a += 2) > n * e && (a++, 
    r.push(t.slice(o, i)), o = i, n++) : ++a > n * e && (r.push(t.slice(o, i)), o = i, 
    n++);
    return r.push(t.slice(o, t.length)), [ a, r, n ];
};

module.exports = {
    formatTime: function(t) {
        var e = t.getFullYear(), a = t.getMonth() + 1, n = t.getDate(), r = t.getHours(), i = t.getMinutes(), u = t.getSeconds();
        return [ e, a, n ].map(o).join("/") + " " + [ r, i, u ].map(o).join(":");
    },
    $h: n,
    Tips: i,
    uploadImageOne: function(t, e, a) {
        if ("string" == typeof t) {
            var n = t;
            (t = {}).url = n;
        }
        var o = t.count || 1, r = t.sizeType || [ "compressed" ], u = t.sourceType || [ "album", "camera" ], c = (t.is_load, 
        t.url || ""), l = t.name || "pics";
        wx.chooseImage({
            count: o,
            sizeType: r,
            sourceType: u,
            success: function(t) {
                wx.showLoading({
                    title: "图片上传中"
                }), wx.uploadFile({
                    url: c,
                    filePath: t.tempFilePaths[0],
                    name: l,
                    formData: {
                        filename: l
                    },
                    header: {
                        "Content-Type": "multipart/form-data",
                        token: getApp().globalData.token
                    },
                    success: function(t) {
                        if (wx.hideLoading(), 403 == t.statusCode) i({
                            title: t.data
                        }); else {
                            var n = t.data ? JSON.parse(t.data) : {};
                            200 == n.code ? e && e(n) : (a && a(n), i({
                                title: n.msg
                            }));
                        }
                    },
                    fail: function(t) {
                        wx.hideLoading(), i({
                            title: "上传图片失败"
                        });
                    }
                });
            }
        });
    },
    basePost: function(t, e, n, o, u) {
        "object" == (void 0 === t ? "undefined" : a(t)) && (t = r(t)), wx.request({
            url: t,
            data: e,
            dataType: "json",
            method: "POST",
            header: u,
            success: function(t) {
                try {
                    if (200 == t.data.code) n && n(t.data); else {
                        if (402 == t.data.code && (getApp().globalData.token = "", getApp().globalData.isLog = !1), 
                        401 == t.data.code) return i({
                            title: t.data.msg
                        });
                        o && o(t.data);
                    }
                } catch (t) {
                    console.log(t);
                }
            },
            fail: function(t) {
                o && o(t);
            },
            complete: function(t) {}
        });
    },
    SplitArray: function(t, e) {
        if ("object" != (void 0 === t ? "undefined" : a(t))) return [];
        void 0 === e && (e = []);
        for (var n = 0; n < t.length; n++) e.push(t[n]);
        return e;
    },
    U: r,
    baseGet: function(t, e, n, o, u) {
        "object" == (void 0 === t ? "undefined" : a(t)) && (t = r(t)), wx.request({
            url: t,
            dataType: "json",
            method: "GET",
            header: u,
            success: function(t) {
                try {
                    if (200 == t.data.code) e && e(t.data); else {
                        if (402 == t.data.code && (getApp().globalData.token = "", getApp().globalData.isLog = !1), 
                        401 == t.data.code) return i({
                            title: t.data.msg
                        });
                        n && n(t.data), o || i({
                            title: t.data.msg
                        });
                    }
                } catch (t) {
                    console.log(t);
                }
            },
            fail: function(t) {
                console.log("submit fail");
            },
            complete: function(t) {}
        });
    },
    ArrayRemove: function(t, e, a) {
        var n = [];
        if (t instanceof Array) for (var o = 0; o < t.length; o++) "number" == typeof e && t[e] != o ? n.push(t[o]) : "string" == typeof e && t[o][e] != a && n.push(t[o]);
        return n;
    },
    PosterCanvas: function(t, a, n, o) {
        wx.showLoading({
            title: "海报生成中",
            mask: !0
        });
        var r = wx.createCanvasContext("myCanvas");
        r.clearRect(0, 0, 0, 0), wx.getImageInfo({
            src: t[0],
            success: function(i) {
                console.log(i);
                var c = i.width, l = i.height;
                r.drawImage(t[0], 0, 0, c, l), r.drawImage(t[1], 0, 0, c, c), r.save(), r.arc(130, 1080, 90, 0, 2 * Math.PI), 
                r.clip(), r.drawImage(t[2], 40, 990, 180, 180), r.restore();
                var s = u(a, 40), f = e(s, 3), d = (f[0], f[1]);
                f[2], r.setTextAlign("center"), r.setFontSize(32);
                for (var p = 0; p < d.length; p++) r.fillText(d[p], c / 2, 820 + 41.6 * p);
                r.setTextAlign("center"), r.setFontSize(48), r.setFillStyle("red"), r.fillText("￥" + n, c / 2, 901.6), 
                r.draw(!0, function() {
                    wx.canvasToTempFilePath({
                        canvasId: "myCanvas",
                        fileType: "png",
                        destWidth: c,
                        destHeight: l,
                        success: function(t) {
                            wx.hideLoading(), o && o(t.tempFilePath);
                        }
                    });
                });
            },
            fail: function() {
                wx.hideLoading(), i({
                    title: "无法获取图片信息"
                });
            }
        });
    },
    AnimationNumber: function(e, a, o, r) {
        for (var i = n.Sub(a, e), u = Math.abs(i), c = u < 6 ? u : 6, l = u < 6 ? 1 : Math.floor(i / 6), s = 0; s < c; s += 1) !function(a) {
            setTimeout(function() {
                o.setData(t({}, r, n.Add(e, l))), a == c - 1 && o.setData(t({}, r, n.Add(e, i)));
            }, 100 * (a + 1));
        }(s);
    },
    getUrlParams: function(t, e, a) {
        if ("string" != typeof t) return {};
        e = e || "&", a = a || "=";
        var n = {};
        if (-1 !== t.indexOf(e)) {
            t = t.split(e);
            for (var o in t) -1 !== t[o].indexOf(a) && (n[(r = t[o].split(a))[0]] = r[1]);
        } else {
            var r = t.split(a);
            n[r[0]] = r[1];
        }
        return n;
    }
};