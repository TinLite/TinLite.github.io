let api = "https://api.mcsrvstat.us/2/play.3fmc.com"
let request = new XMLHttpRequest();
request.open("GET", api);
request.responseType = 'json';
request.send();
request.onload = function() {
    setPlaying(request.response['players']['online'])
}

function setPlaying(num) {
    document.getElementsByClassName("joinmsg")[0].textContent = "Tham gia ngay cùng với " + num + " người chơi khác";
}

function copyIP() {
    navigator.clipboard.writeText("play.3fmc.com:25565");
    document.getElementById('ip').innerText = 'Đã sao chép IP';
}

function mouseOver() {
    document.getElementById('ip').innerText = 'Click để sao chép IP';
}

function mouseLeave() {
    document.getElementById('ip').innerText = 'play.3fmc.com'
}