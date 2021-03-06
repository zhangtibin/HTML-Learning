/**
 * Created by zhangtibin on 2018/6/21.
 */
function $$(id) {
    return document.getElementById(id);
}
var intI, intJ, intX;
//自定义加载页面函数
function pageload() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");

}
//调用自定义函数绘制笑脸
function drawFace(cxt) {
    drawCirc(cxt,"#666",30,80,30,2,true);
    drawCirc(cxt,"#fff",20,70,5,2,true);
    drawCirc(cxt,"#fff",40,70,5,2,true);
    drawCirc(cxt,"#fff",30,80,18,1,false);
}
//根据参数绘制各类图形
function drawCirc(cxt,strColor,intX,intY,intR,intH,blnFill) {
    cxt.beginPath();
    cxt.arc(intX, intY, intR, 0, Math.PI*intH, blnFill);
    if (blnFill) {
        cxt.fillStyle = strColor;
        cxt.fill();
    }
    else {
        cxt.lineWidth = 2;
        cxt.strokeStyle = strColor;
        cxt.stroke();
    }
    cxt.closePath();
}
//实现往返移动笑脸功能
function moveFace() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    cxt.clearRect(0,0,280,190);
    if (intI < 20) {
        intI += 1;
        intX = intI;
    }
    else {
        if (intJ > 0) {
            intJ -= 1;
            intX = -intJ;
        }
    }
    cxt.translate(intX, 0);
    drawFace(cxt);
}