function myEvent(n,t,e){
    n.attachEvent?n.attachEvent("on"+t,e):n.addEventListener(t,e,!1)
}
    myEvent(window,"load",function(){
        var t,
        n=document.getElementById("rtt"),
        e=document.documentElement.clientHeight,
        o=null;
        window.onscroll=function(){
            return t=document.documentElement.scrollTop||document.body.scrollTop,n.style.display=e<=t?"block":"none",t},
            n.onclick=function(){
                clearInterval(o),
                o=setInterval(function(){
                    var n=(0-t)/10;
                    n=0<n?Math.ceil(n):Math.floor(n),0==t&&clearInterval(o),
                    document.documentElement.scrollTop=t+n,
                    document.body.scrollTop=t+n},20)
                }
});