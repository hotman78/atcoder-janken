var flag1=false,flag2=false,val1={},val2={};
function player1(e) {
    val1=e;
    if(flag2){
        make_table();
    }else{
        flag1=true;
    }
}
function player2(e) {
    val2=e;
    if(flag1){
        make_table();
    }else{
        flag2=true;
    }
}
function make_table() {
    var tblBody = $("tbody");
    for (const [key, value] of Object.entries(val1)) {
        if(key in val2){
            if(parseInt(value)==parseInt(val2[key])){
                tblBody.append(`<tr><td>${key}</td><td bgcolor="#33FF99">${value}</td><td>${val2[key]}</td bgcolor="#33FF99"></tr>`);
            }else if(parseInt(value)>parseInt(val2[key])){
                tblBody.append(`<tr><td>${key}</td><td>${value}</td><td bgcolor="#33FF99">${val2[key]}</td></tr>`);
            }else{
                tblBody.append(`<tr><td>${key}</td><td bgcolor="#33FF99">${value}</td><td>${val2[key]}</td></tr>`);
            }
        }
    }
}
function vs() {
    flag1=false;flag2=false;
    tblBody.empty();
    {
        var url="https://script.google.com/macros/s/AKfycbzcQl4L4-Z-3DXZyUY2q3UzQx2UaoNy8knJp7J9tlsl52xlLFEU/exec?id=";
        var p=$("input#player1").val();
        var script = document.createElement('script');
        script.src = url+p+'&callback=player1';
        document.body.appendChild(script);
    }
    {
        var url="https://script.google.com/macros/s/AKfycbzcQl4L4-Z-3DXZyUY2q3UzQx2UaoNy8knJp7J9tlsl52xlLFEU/exec?id=";
        var p=$("input#player2").val();
        var script = document.createElement('script');
        script.src = url+p+'&callback=player2';
        document.body.appendChild(script);
    }
}