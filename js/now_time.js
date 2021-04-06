function now_time() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = now.getDay();
    let arr = ['日', '一', '二', '三', '四', '五', '六'];
    day = '星期' + arr[day];
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (month < 10) {
        month = '&nbsp' + month;
    }
    if (date < 10) {
        date = '&nbsp' + date;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    let time = year + '.' + month + '.' + date + '&nbsp' + day + '&nbsp' + hour + ':' + minute + ':' + second;
    document.getElementById("time").innerHTML = time;
}
setInterval('now_time()', 1000);