var flag1=false,flag2=false,val1={},val2={};
var p1="",p2="";
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
    tblBody.empty();
    var s=0,t=0,u=0;
    for (const [key, value] of Object.entries(val1)) {
        if(key in val2){
            if(parseInt(value)==parseInt(val2[key])){
                u++;
            }else if(parseInt(value)>parseInt(val2[key])){
                t++;
            }else{
                s++;
            }
        }
    }
    tblBody.append(`<tr><td colspan="3" align="center"><strong>${s<t?`${t}勝${s}負${u}引き分けで${p2}の勝利です！！`:`${s}勝${t}負${u}引き分けで${p1}の勝利です！！`}</strong><a href="https://twitter.com/share" class="twitter-share-button" data-text="【AtCoderじゃんけん】\n${p1} vs ${p2}\n${s}対${t}で${s==t?"引き分けです！！":(s<t?`${p2}の勝利です！！`:`${p1}の勝利です！！`)}\nhttps://hotman78.github.io/atcoder-janken/\n" data-related="hotmanww" data-hashtags="Atcoderじゃんけん">Tweet</a></td></tr><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>`);
    tblBody.append("<tr><td>コンテスト名</td><td>順位(プレイヤー1)</td><td>順位(プレイヤー2)</td></tr>")
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
    {
        var url="https://script.google.com/macros/s/AKfycbzcQl4L4-Z-3DXZyUY2q3UzQx2UaoNy8knJp7J9tlsl52xlLFEU/exec?id=";
        p1=$("input#player1").val();
        var script = document.createElement('script');
        script.src = url+p1+'&callback=player1';
        document.body.appendChild(script);
    }
    {
        var url="https://script.google.com/macros/s/AKfycbzcQl4L4-Z-3DXZyUY2q3UzQx2UaoNy8knJp7J9tlsl52xlLFEU/exec?id=";
        p2=$("input#player2").val();
        var script = document.createElement('script');
        script.src = url+p2+'&callback=player2';
        document.body.appendChild(script);
    }
}