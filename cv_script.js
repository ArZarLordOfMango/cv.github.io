function get_current_age(date) {
    var d = date.split('.'); if (typeof d[2] !== "undefined") {
        date = d[2]+'.'+d[1]+'.'+d[0]; return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    } return 0;
}


let current_age = "(" + (get_current_age("15.10.2006")).toString() + " y.o)"
let elem = document.getElementById('age')
elem.innerHTML = current_age