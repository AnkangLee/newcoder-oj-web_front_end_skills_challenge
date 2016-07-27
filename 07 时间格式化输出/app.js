function formatDate(oDate, sFormation) {
    function format(num) {
        if (num < 10)
            return "0" + num;
        else
            return num;

    }

    function getWeek(day) {
        var days = ["日", "一", "二", "三", "四", "五", "六"];
        return days[day];
    }
    var date = {
        "yyyy": oDate.getFullYear(),
        "yy": oDate.getFullYear() % 100,
        "MM": format(oDate.getMonth() + 1),
        "M": oDate.getMonth() + 1,
        "dd": format(oDate.getDate()),
        "d": oDate.getDate(),
        "HH": format(oDate.getHours()),
        "H": oDate.getHours(),
        "hh": format(oDate.getHours() % 12),
        "h": oDate.getHours() % 12,
        "mm": format(oDate.getMinutes()),
        "m": oDate.getMinutes(),
        "ss": format(oDate.getSeconds()),
        "s": oDate.getSeconds(),
        "w": getWeek(oDate.getDay()),
    }
    console.log(date);
    for (var prop in date) {
        sFormation = sFormation.replace(prop, date[prop]);
    }
    return sFormation;
}
