var t = "https://water.gzwysh.com", e = require("7E021DD37CEEB6DF186475D4393BEFE4.js");

App({
    onLaunch: function(t) {
        var e = this, a = this;
        if (t.query.hasOwnProperty("scene")) switch (t.scene) {
          case 1047:
          case 1048:
          case 1049:
            a.globalData.code = t.query.scene;
            break;

          case 1001:
            a.globalData.spid = t.query.scene;
        }
        this.getMyMenus(), wx.getSystemInfo({
            success: function(t) {
                e.globalData.navHeight = t.statusBarHeight * (750 / t.windowWidth) + 97;
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    globalData: {
        navHeight: 0,
        routineStyle: "#ffffff",
        openPages: "",
        spid: 0,
        code: 0,
        urlImages: "",
        url: t,
        token: "",
        isLog: !1,
        MyMenus: [],
        header: {
            "content-type": "application/json",
            token: ""
        }
    },
    getMyMenus: function() {
        var t = this;
        t.globalData.MyMenus.legnth || t.baseGet(t.U({
            c: "public_api",
            a: "get_my_naviga"
        }, t.globalData.url), function(e) {
            t.globalData.MyMenus = e.data.routine_my_menus;
        });
    },
    basePost: function(t, a, n, s, o) {
        void 0 == o && (o = this.globalData.header), o.token = this.globalData.token, e.basePost(t, a, n, s, o);
    },
    baseGet: function(t, a, n, s, o) {
        void 0 == o && (o = this.globalData.header), o.token = this.globalData.token, e.baseGet(t, a, n, s, o);
    },
    Tips: function(t, a) {
        return e.Tips(t, a);
    },
    U: function(t, a) {
        return e.U(t, a);
    },
    help: function() {
        return e.$h;
    },
    SplitArray: function(t, a) {
        return e.SplitArray(t, a);
    }
});