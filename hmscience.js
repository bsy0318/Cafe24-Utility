// ==UserScript==
// @name         	hmscience_item_parse
// @namespace	    https://hmscience.co.kr
// @version      	20230403-1
// @description	    향앤미과학에서 상품목록을 가져옴(이름|가격|고유번호)
// @author	        배서연
// @run-at	        document-idle
// ==/UserScript==

var saveText = "";
var categoryName = $('.fleft.gsf-category-title')[0].innerText+".txt";
function saveAsFile(str, filename) {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
    hiddenElement.target = '_blank';
    hiddenElement.download = filename;
    hiddenElement.click();
}
$('.goodsDisplayItemWrap').each(function (index, item) {
    let docText = item.innerText.trim().replace("\n\n","|");
    let productCode = $(item.children[0].children[0].children[0].children[0].children[0]).attr('href').split('=')[1];
    let final_Text = docText + "|" + productCode;
	saveText = saveText+"\n"+final_Text;
    console.log(final_Text);
});
saveAsFile(saveText, categoryName);