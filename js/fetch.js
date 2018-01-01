 function boom(x){
    if(x)
        {   
        //url = "http://" + addr + "/cgi-bin/lol.cgi?target=" + document.forms.one[0].value ;
        url = "http://" + addr + "/cgi-bin/lol.cgi?target=" + x ;
            console.log(url);
            alert(url)
            boom2(url); }}
            
 function boom2(url){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();
    ajax.onreadystatechange = (function() {boom3(ajax)});}
    
 function boom3(ajax){
   if (ajax.readyState == 4) {
      if (ajax.status == 200 || ajax.status == 0) {
        try {
    
            var data = JSON.parse(ajax.responseText);
            if(data.status=="online"){
                console.log(data);
                alert(data);
                navigator.notification.beep(1);
                
            }}
        catch(err) {
            console.log(ajax.responseText);
}
            }}}