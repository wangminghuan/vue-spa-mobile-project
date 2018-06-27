/*
 取窗口可视范围的高度 
*/
export
var getClientHeight=function()
{
    var clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight)
    {
        var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }
    else
    {
        var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
    }
    return parseFloat(clientHeight);
};
/*
 取窗口可视范围的高度 
*/
export
var getClientWidth=function()
{
    var clientWidth=0;
    if(document.body.clientWidth&&document.documentElement.clientWidth)
    {
        var clientWidth = (document.body.clientWidth<document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;        
    }
    else
    {
        var clientWidth = (document.body.clientWidth>document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;    
    }
    return parseFloat(clientWidth);
};
/*
    取窗口滚动条高度 
*/
export 
var getScrollTop=function(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return parseFloat(scrollTop);
};
export 
var setScrollTop=function(height){
    if(document.documentElement&&document.documentElement.scrollTop){
        document.documentElement.scrollTop=height;
    }else if(document.body){
        document.body.scrollTop=height;
    }
};
/*
    取文档高度 
*/
export 
var getDocumentHeight= function ()
{
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}
export
var getUrlArgs=function() {
    var argStr = window.location.search ? window.location.search.substring(1) : "";
    var argObj = {},
        item = null,
        value = null,
        key = null,
        argArr = argStr.length > 0 ? argStr.split("&") : [];
    for (var i = 0, len = argArr.length; i < len; i++) {
        item = argArr[i].split("=");
        key = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        argObj[key] = value;
    }
    return argObj
}