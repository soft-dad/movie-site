window.onload = function () {
    /* 秒杀倒计时 */
    var hourElement = document.querySelector(".hour"); // 小时的显示元素
    var minuteElement = document.querySelector(".minute"); // 分钟的显示元素
    var secondElement = document.querySelector(".second"); // 秒的显示元素
    var inputTime = new Date('2025-12-10T00:00:00').getTime(); // 倒计时的结束时间，设置为毫秒数

    // 开启定时器
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = new Date().getTime(); // 当前时间的毫秒数
        var times = inputTime > nowTime ? (inputTime - nowTime) / 1000 : 0; // 计算剩余时间（秒）

        var h = parseInt(times / 3600, 10); // 时
        h = h < 10 ? "0" + h : h;
        hourElement.innerHTML = h; // 更新小时显示

        var m = parseInt((times % 3600) / 60, 10); // 分
        m = m < 10 ? "0" + m : m;
        minuteElement.innerHTML = m; // 更新分钟显示

        var s = parseInt(times % 60, 10); // 秒
        s = s < 10 ? "0" + s : s;
        secondElement.innerHTML = s; // 更新秒显示
    }
}