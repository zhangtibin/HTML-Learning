/**
 * Created by zhangtibin on 2018/6/13.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//将获取的内容显示在页面上
function ShowKeyWord() {
    var strTmp = "<b>您输入的查询关键字是：</b>";
    strTmp = strTmp + $$('txtKeyWord').value;
    $$('pTip').innerHTML = strTmp;
    return false;
}