// ==UserScript==
// @name         	CCNARA_BANNER_CALCULATOR
// @namespace	    https://chingchanmall.com/
// @version      	0.1
// @description	    대형/기타 현수막에서의 가격을 디자인다소에서 받아와 등록하는 스크립트
// @author	        배서연
// @run-at	        document-idle
// ==/UserScript==

var targetProductID = 'P000JIWV'; //이 상품코드에서만 동작

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function checkCategory(sname) {	//카테고리 이름을 가져옴(홈 다음)
    let category_1 = $($('div.xans-element-.xans-product.xans-product-headcategory.path > ol > li > a')[1]).text();
	return category_1.includes(sname);
}
function requestPrice(swidth, sheight){
	if($('#tmptotalprice').length < 1){
		$('<p id="tmptotalprice" hidden></p>').appendTo('body');	//tmptotalprice가 없으면 생성
	}
	$.ajax({
		url : 'https://www.dasobook.com/shop/goods/uf_bannerSize.php?mode=n&s_width='+swidth+'&s_height='+sheight,
		type : 'get',
        dataType: "jsonp",
		success : function(data) {
			return data.split("t_e.innerHTML = '")[0].split("';")[0];
		}
	});
}

function calc_main(){
	//var item_check = sProductCode.includes(targetProductID);	//지정된 상품코드인지 확인
	//if(item_check != true) return;	//아니라면 종료
	var s_width = $('#add_option_1').val();	//가로사이즈 값
	var s_height = $('#add_option_2').val();	//세로사이즈 값
	requestPrice(s_width.replace('mm','').replace('cm',''), s_height.replace('mm','').replace('cm',''));
}

$('select[option_code="O00000RS"]').click(function(){
	var sum = Number($('#tmptotalprice').text().replace(',',''));
	var option_0 = $('select[option_code="O00000RR"] option:selected').text();
	var option_1 = $('select[option_code="O00000RS"] option:selected').text();
	if(option_0.includes('(+')){
		option_0 = option_0.split('(+')[1].split(')')[0];
		sum = sum + Number(option_0);
	}
	if(option_1.includes('(+')){
		option_1 = option_1.split('(+')[1].split(')')[0];
		sum = sum + Number(option_1);
	}
	$('p[class="info "]').text("최종 계산금액 : " + sum + "원");
	const timeoutId = setTimeout(function(){
		EC$('.quantity_opt.eProductQuantityClass').val(Number(sum)/1000).blur();
		EC$('.quantity_opt.eProductQuantityClass').change();
	},1000);
});

function main(){
	var item_check = sProductCode.includes(targetProductID);	//지정된 상품코드인지 확인
	if(item_check != true) return;								//아니라면 종료
	console.log("Item HIT");
	document.getElementById('add_option_1').setAttribute('type', 'number');	//숫자만 입력되도록 수정
	document.getElementById('add_option_2').setAttribute('type', 'number');	//숫자만 입력되도록 수정
	$('#add_option_1').change(function(){
		calc_main();
	});
	$('#add_option_2').change(function(){
		calc_main();
	});
}

const timeoutId = setTimeout(function(){
	console.log("Hi :)");
	main(); //실행
},2000);