function getHtmlFontsize(){
    var designWidth=750;
    var designFontsize=200;
    var nowWidth=document.documentElement.clientWidth;
    var nowFontsize= nowWidth/(designWidth/designFontsize);
    document.documentElement.style.fontSize=nowFontsize+'px';
}
getHtmlFontsize();
window.addEventListener('resize',getHtmlFontsize);