// ==UserScript==
// @name         	SMARTLOG_GOOGLE.JS
// @namespace	    https://smlog.co.kr
// @version      	20230303-01
// @description	    스마트로그 실시간방문자에서 구글쇼핑탭 유입시 상품명으로 치환
// @author	        배서연
// @match	        https://smlog.co.kr/hmisNew/vsl_live.html*
// @icon		    https://www.google.com/s2/favicons?sz=64&domain=smlog.co.kr
// @updateURL	    https://github.com/bsy0317/Cafe24-Utility/raw/main/smartlog_google.js
// @downloadURL	    https://github.com/bsy0317/Cafe24-Utility/raw/main/smartlog_google.js
// @run-at	        document-idle
// ==/UserScript==

let pServer = 'https://krr.kr:6405';
let hostServer = 'chingchanmall.com';

async function codeToName(code){
	let parseCode = code.replace('cafe24_ccnaramall_1_','');
	await $.ajax({
	  method: 'GET',
	  url: pServer+'/'+hostServer+'/product/detail.html?product_no='+parseCode,
	  dataType: 'html',
	  success: (res) => {
	   let product_name = res.split("var product_name = '")[1].split("';")[0];
	   let regexStr = /cafe24_ccnaramall_1_\d+/g;
	   let itemArray = $('[id^="p_row"]').toArray();
	   for(i=0; i<itemArray.length; i++){
		   let priv_html = $(itemArray[i]).html();
		   $(itemArray[i]).html(priv_html.replaceAll(code, product_name));
	   }
	  }
	})
}

async function core(){
	let regexStr = /cafe24_ccnaramall_1_\d+/g;
	$('[id^="p_row"]').each(async function(index, item){
		let matches = $(item).html().match(regexStr);
		if(matches != null && matches.length > 1){
			matches = matches[0];
			await codeToName(matches);
		}
	});
}

setInterval(core,1000);