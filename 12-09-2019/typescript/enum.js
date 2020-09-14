var Days;
(function (Days) {
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tues"] = 2] = "tues";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thurs"] = 4] = "thurs";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
    Days[Days["sun"] = 7] = "sun";
})(Days || (Days = {}));
function whichDay(Day) {
    return Day;
}
//whichDay=Days.mon
console.log(Days.sun);
