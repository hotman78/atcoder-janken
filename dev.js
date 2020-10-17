function vs() {
    var val1={},val2={};
    var p1="",p2="";
    {
        var url="https://asia-northeast1-atcoder-janken-api.cloudfunctions.net/api?id=";
        p1=$("input#player1").val();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url+p1,false);
        xhr.onload = () => {
            let responseJson = JSON.parse(xhr.response);
            val1=responseJson;
        }
        xhr.send();
    }
    {
        var url="https://asia-northeast1-atcoder-janken-api.cloudfunctions.net/api?id=";
        p2=$("input#player2").val();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url+p2,false);
        xhr.onload = () => {
            let responseJson = JSON.parse(xhr.response);
            val2=responseJson;
        }
        xhr.send();
    }
    var st=new Date();
    var ed=new Date();
    {
        switch($("#select1").val()){
            case "0":
                st.setDate(st.getDate()-$("#start_time").val());
                break;
            case "1":
                st.setDate(st.getDate()-$("#start_time").val()*7);
                break;
            case "2":
                st.setMonth(st.getMonth()-$("#start_time").val());
                break;
            case "3":
                st.setFullYear(st.getFullYear()-$("#start_time").val());
                break;
            default:
        }
        switch($("#select2").val()){
            case "0":
                ed.setDate(ed.getDate()-$("#end_time").val());
                break;
            case "1":
                ed.setDate(ed.getDate()-$("#end_time").val()*7);
                break;
            case "2":
                ed.setMonth(ed.getMonth()-$("#end_time").val());
                break;
            case "3":
                ed.setFullYear(ed.getFullYear()-$("#end_time").val());
                break;
            default:
        }
    }
    {
        var tblBody = $("tbody");
        tblBody.empty();
        var s=0,t=0,u=0;
        for (const [key, value1] of Object.entries(val1)) {
            var date=new Date(value1["time"].slice(0,10));
            console.log(st.toUTCString());
            console.log(date.toUTCString());
            console.log(ed.toUTCString());
            if(date<st||ed<date)continue;
            if(key in val2){
                var value2=val2[key];
                if(parseInt(value1["rank"])==parseInt(value2["rank"])){
                    u++;
                }else if(parseInt(value1["rank"])>parseInt(value2["rank"])){
                    t++;
                }else{
                    s++;
                }
            }
        }
        tblBody.append(`<tr><td colspan="4" align="center"><strong>${s<t?`${t}勝${s}負${u}引き分けで${p2}の勝利です！！`:`${s}勝${t}負${u}引き分けで${p1}の勝利です！！`}</strong><a href="https://twitter.com/share" class="twitter-share-button" data-text="【AtCoderじゃんけん】\n${p1} vs ${p2}\n${s}対${t}で${s==t?"引き分けです！！":(s<t?`${p2}の勝利です！！`:`${p1}の勝利です！！`)}\n#Atcoderじゃんけん" data-url="https://hotman78.github.io/atcoder-janken/" data-related="hotmanww">Tweet</a></td></tr>`);
        tblBody.append(`<tr><td>日時</td><td>コンテスト名</td><td>順位(${p1})</td><td>順位(${p2})</td></tr>`)
        for (const [key, value1] of Object.entries(val1)) {
            var date=new Date(value1["time"].slice(0,10));
            if(date<st||ed<date)continue;
            if(key in val2){
                var value2=val2[key];
                if(parseInt(value1["rank"])==parseInt(value2["rank"])){
                    tblBody.append(`<tr><td>${value1["time"]}</td><td>${value1["name"]}</td><td bgcolor="#33FF99">${value1["rank"]}</td><td>${value2["rank"]}</td bgcolor="#33FF99"></tr>`);
                }else if(parseInt(value1["rank"])>parseInt(value2["rank"])){
                    tblBody.append(`<tr><td>${value1["time"]}</td><td>${value1["name"]}</td><td>${value1["rank"]}</td><td bgcolor="#33FF99">${value2["rank"]}</td></tr>`);
                }else{
                    tblBody.append(`<tr><td>${value1["time"]}</td><td>${value1["name"]}</td><td bgcolor="#33FF99">${value1["rank"]}</td><td>${value2["rank"]}</td></tr>`);
                }
            }
        }
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}else{twttr.widgets.load();}}(document, 'script', 'twitter-wjs');
    }
}
