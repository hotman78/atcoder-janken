function vs() {
    var url="https://script.google.com/macros/s/AKfycbzcQl4L4-Z-3DXZyUY2q3UzQx2UaoNy8knJp7J9tlsl52xlLFEU/exec?id=";
    var p1=$("input#player1").text;
    var p2=$("input#player2").text;
    var request1 = new XMLHttpRequest();
    var request2 = new XMLHttpRequest();
    request1.open('GET',url+p1,true);
    request2.open('GET',url+p2,true);
    var b1=false,b2=false;
    request1.onload = function () {
        b1=true;
        $("body").append(this.response);
    }
    request2.onload = function () {
        b2=true;
        $("body").append(this.response);
    }
    request1.send();
    request2.send();
}