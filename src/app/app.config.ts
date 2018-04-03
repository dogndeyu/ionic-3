export class AppConfig {
    //测试环境URL
    public static getDebugUrl() {
        return "http://localhost:8080";
    }
    //生产环境URL
    public static getProdUrl() {
        return "http://service:8080";
    }
    //获取设备高度
    public static getWindowHeight() {
        return window.screen.height;
    }
    //获取设备宽度
    public static getWindowWidth() {
        return window.screen.width;
    }
    public static appUrl() {
        return 'http://60.173.222.38:8211/web?action= '
    }
    //加密
    public static Bt_encrypt(n) {
        var ts = "8ABC7DLO5MN6Z9EFGdeJfghijkHIVrstuvwWSTUXYabclmnopqKPQRxyz01234";
        var nl = n.length, t = [], a, b, c, x, m = function (y) { t[t.length] = ts.charAt(y) }, N = ts.length, N2 = N * N, N5 = N * 5;
        for (x = 0; x < nl; x++) {
            a = n.charCodeAt(x);
            if (a < N5) m(Math.floor(a / N)), m(a % N);
            else m(Math.floor(a / N2) + 5), m(Math.floor(a / N) % N), m(a % N);
        }
        var s = t.join("");
        return String(s.length).length + String(s.length) + s;
    }
    //解密
    public static Bt_decrypt(n) {
        var ts = "8ABC7DLO5MN6Z9EFGdeJfghijkHIVrstuvwWSTUXYabclmnopqKPQRxyz01234";
        var c = n.charAt(0) * 1;
        if (isNaN(c)) return "";
        c = n.substr(1, c) * 1;
        if (isNaN(c)) return "";
        var nl = n.length, t = [], a, f, b, x = String(c).length + 1, m = function (y) { return ts.indexOf(n.charAt(y)) }, N = ts.length;
        if (nl != x + c) return "";
        while (x < nl) {
            a = m(x++);
            if (a < 5) f = a * N + m(x);
            else f = (a - 5) * N * N + m(x) * N + m(x += 1);
            t[t.length] = String.fromCharCode(f);
            x++;
        }
        return t.join("");
    }
}

