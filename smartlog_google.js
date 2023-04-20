// ==UserScript==
// @name		SMARTLOG_GOOGLE.JS
// @namespace	https://smlog.co.kr
// @version		20230420.02
// @description	스마트로그 실시간방문자에서 구글쇼핑탭 유입시 상품명으로 치환
// @author		Seoyeon Bae
// @match		*://smlog.co.kr/hmisNew/vsl_live.html*
// @icon		https://www.google.com/s2/favicons?sz=64&domain=smlog.co.kr
// @updateURL	https://github.com/bsy0317/Cafe24-Utility/raw/main/smartlog_google.js
// @downloadURL	https://github.com/bsy0317/Cafe24-Utility/raw/main/smartlog_google.js
// @run-at		document-idle
// ==/UserScript==

let pServer = 'https://krr.kr:6405';
let hostServer = 'm.chingchanmall.com';
var acceessableCount = 1;

function codeToName(code) {
    let parseCode = code.replace('cafe24_ccnaramall_1_', '');
    $.ajax({
        method: 'GET',
        url: pServer + '/' + hostServer + '/amp/product/detail.html?product_no=' + parseCode,
        dataType: 'html',
        async: true, //비동기 여부
		timeout: 1000,
        success: function(res) {
			console.log("ajax success");
            let product_name = res.split("<h1 class=\"name\">")[1].split("</h1>")[0];
            let regexStr = /cafe24_ccnaramall_1_\d+/g;
            let itemArray = $('[id^="p_row"]').toArray();
            for (let i = 0; i < itemArray.length; i++) {
				if($(itemArray[i]).text().search(code) != -1){
					let priv_html = $(itemArray[i]).html();
					$(itemArray[i]).html(priv_html.replaceAll(code, product_name));
					break;
				}
            }
        }
    })
}

function core() {
	console.log("START");
	let regexStr = /cafe24_ccnaramall_1_\d+/g;
	$('[id^="p_row"]').each(function(index, item) {
		let matches = $(item).html().match(regexStr);
		if (matches != null && matches.length > 1) {
			matches = matches[0];
			codeToName(matches);
		}
	});
	console.log("OK");
}

setInterval(function(){
	if(acceessableCount > 0){
		acceessableCount = acceessableCount - 1;
		core();
		acceessableCount = acceessableCount + 1;
	}
}, 1000);