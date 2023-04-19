// ==UserScript==
// @name         	CCNARA_ITEM_BLOCK
// @namespace	    https://chingchanmall.com/
// @version      	20230113-2
// @description	    '기타사이즈 현수막' 상품에 단독으로 접근할 수 없도록 차단
// @author	        배서연
// @run-at	        document-idle
// ==/UserScript==

function itemBlock(){
	let blockName = "현수막 기타 사이즈 선택";
	let productName = product_name;
	if(productName.includes(blockName)){
		alert("해당 페이지는 단독으로 접근할 수 없는 상품입니다.\n현수막 상세페이지 하단 추가구성상품에서 선택바랍니다.");
		if(history.length > 1){	//이전페이지가 존재 할 경우
			history.back();	//뒤로보냄
		}else{	//이전페이지가 없을경우
			window.close(); //창닫음
		}
	}
}
setTimeout(function(){
	itemBlock();
},500);