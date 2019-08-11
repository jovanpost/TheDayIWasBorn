// Creating dates for the frontpage
selectMonth = document.getElementById('month');

for (var i = 01; i <= 12; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    selectMonth.appendChild(opt);
}

selectDay = document.getElementById('day');

for (var i = 1; i <= 31; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    selectDay.appendChild(opt);
}



var currentYear = new Date().getFullYear(),
    selectYear = document.getElementById('year');

for (var i = currentYear; i >= 1851; i--) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    selectYear.appendChild(opt);
}

mmLabel = document.createElement("label");
mmLabel.innerHTML = "Month "
ddLabel = document.createElement("label");
ddLabel.innerHTML = "Day "
yyyyLabel = document.createElement("label");
yyyyLabel.innerHTML = "Year "


$("#inputDate").append(mmLabel, selectMonth, ddLabel, selectDay, yyyyLabel, selectYear, button);
