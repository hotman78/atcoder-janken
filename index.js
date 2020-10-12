function callback(e) {
    console.log(e["AtCoder Regular Contest 105"]);
}
function vs() {
    var url="https://script.google.com/macros/s/AKfycbzcQl4L4-Z-3DXZyUY2q3UzQx2UaoNy8knJp7J9tlsl52xlLFEU/exec?id=";
    {
        var p=$("input#player1").val();
        var script = document.createElement('script');
        script.src = 'url'+p+'&callback=true';
        document.body.appendChild(script);
    }
    {
        var p=$("input#player2").val();
        var script = document.createElement('script');
        script.src = 'url'+p+'&callback=true';
        document.body.appendChild(script);
    }
}