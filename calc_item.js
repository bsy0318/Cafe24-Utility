// ==UserScript==
// @name         	CCNARA_BANNER_CALCULATOR_ITEM
// @namespace	    https://chingchanmall.com/
// @version      	20230427-1
// @description	    대형/기타 현수막에서의 가격을 디자인다소에서 받아와 등록하는 스크립트
// @author	        배서연
// @run-at	        document-idle
// ==/UserScript==

var targetProductCategory = '현수막'; //이 카테고리에서만 동작
var sizeType = "n"; //'a'는 '샘플사이즈', 'n'는 '사이즈변경'
var supportItemCode = "P000HRFZ";	//기타사이즈 자체상품고유번호
//var supportItemCode = "P000LPAX";	//디버깅코드
var pId = "134679";	//상품번호(주소창에 보이는 코드, 기타사이즈 상품번호)
//var pId = "203499";		//디버깅코드

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function checkCategory(){								//스크립트가 활성화돼야 하는지 확인하는 함수
	if((location.hostname === 'chingchanmall.co.kr')||(location.hostname === 'chingchanmall.com')||
	(location.hostname === 'ccnaramall.cafe24.com') || (location.hostname === 'www.chingchanmall.co.kr')||
	(location.hostname === 'www.chingchanmall.com') || (location.hostname === 'www.ccnaramall.cafe24.com')){
		let CategoryName = $('div.xans-element-.xans-product.xans-product-headcategory.path > ol > li:nth-child(2) > a').text();
		if(CategoryName.includes(targetProductCategory)){
			return true;
		}else{
			return false;
		}
	}else if((location.hostname === 'm.chingchanmall.com')||(location.hostname === 'm.chingchanmall.co.kr')){
		let tmp_prd = $('div.info > div.prdDesc > div.prdOption > table > tbody').text();
		if(tmp_prd.includes(targetProductCategory)){
			return true;
		}else{
			return false;
		}
	}
	return false;
}

function requestPrice(swidth, sheight){		//디자인다소에서 금액을 받아오는 함수
	if($('#tmptotalprice').length < 1){		//tmptotalprice가 없으면 생성
		$('<p id="tmptotalprice" hidden></p>').appendTo('body');	//body태그 맨밑에 추가
	}
	$.ajax({
		url : 'https://www.dasobook.com/shop/goods/uf_bannerSize.php?mode='+sizeType+'&s_width='+swidth+'&s_height='+sheight,
		type : 'get',
        dataType: "jsonp",	//CORS 차단정책 우회
		success : function(data) {
			//요청이 성공하면 json콜백으로 #tmptotalprice에 담김
			return data.split("t_e.innerHTML = '")[0].split("';")[0];	//의미없는 코드,Todo:나중에 삭제
		}
	});
}

function setDefaultSize(){	//샘플사이즈 입력하는 함수
	try{
		var SizeArray = "";
		let SizeRegex = /.*샘플사이즈\(가로(\d+)cmx세로(\d+)cm\).*/i;						//상세페이지에서 사이즈만 추출(정규식)
		if($('.cont').length > 0){
			SizeArray = $('.cont').text().replace(/\s/g, "").match(SizeRegex);		//상세페이지 내용 가져옴(PC의 경우)
		}else{
			SizeArray = $('#prdDetail').text().replace(/\s/g, "").match(SizeRegex);	//상세페이지 내용 가져옴(모바일의 경우)
		}
		if(SizeArray === null){
			//alert("제품 상세페이지를 참고하여 사이즈를 입력 해 주세요.");							//오류있음->alert 발생이후 선택한 옵션이 초기화됨
		}else{
			EC$('#add_option_1').val(SizeArray[1]).blur().trigger('keyup');			//1번 배열부터 값이 있음(가로사이즈 삽입)
			EC$('#add_option_2').val(SizeArray[2]).blur().trigger('keyup');			//세로사이즈 삽입
			calc_main();
		}
	}catch{
		//alert("제품 상세페이지를 참고하여 사이즈를 입력 해 주세요.");
	}
}

function setItemNameCookie(){									//현수막 상품명을 전달받아 자동으로 입력하는 함수
	let urlParams = new URL(location.href).searchParams;		//GET 파라미터를 받아옵니다.
	let name = urlParams.get('name');							//GET 파라미터 'name'을 가져옵니다.
	if (name != null){											//GET 파라미터가 있는경우
		$('#add_option_0').val(name).blur().trigger('keyup');	//현수막 상품명을 변경합니다.
	}
}
function setItemThumb(){										//현수막 썸네일을 전달받아 변경하는 함수
	let urlParams = new URL(location.href).searchParams;		//GET 파라미터를 받아옵니다.
	let imgsrc = urlParams.get('imgsrc');						//GET 파라미터 'imgsrc'을 가져옵니다.
	if (imgsrc != null){										//GET 파라미터가 있는경우
		$('.BigImage').attr('src', imgsrc);						//현수막 썸네일을 변경합니다.
		$('.prdImg > a > img').attr('src', imgsrc);
	}
}
function setSubmitTime(){										//접수시간 작성하는 스크립트
	$('#add_option_4').val(new Date().toLocaleString()).blur().trigger('keyup');
	$('#add_option_4').attr('readonly', true);					//읽기전용
	$($($('#add_option_4')[0].parentElement)[0].parentElement).hide();	//접수시간 사라지도록 조정
}

function calc_main(){
	var s_width = $('#add_option_1').val();	//가로사이즈 값
	var s_height = $('#add_option_2').val();	//세로사이즈 값
	if(s_width > 900 || s_height > 900){
		alert("※현수막 9m 초과시 안내사항※\n\n가로 또는 세로사이즈가 9m를 초과할 경우 고객센터에 문의바랍니다.\n\n고객센터:031-244-6405");
	}
	requestPrice(s_width.replace('mm','').replace('cm',''), s_height.replace('mm','').replace('cm',''));
}

$('select[option_code="O0000CXL"]').change(function(){								//디자인추가사항 선택까지 끝내면
	if(checkCategory() != true) return;
	var sum = Number($('#tmptotalprice').text().replace(',',''));
	console.log(sum);
	var option_0 = $('select[option_code="O0000CXT"] option:selected').text().replace(',','');		//O0000CXT는 '설치방법' 옵션메뉴 코드
	var option_1 = $('select[option_code="O0000CXL"] option:selected').text().replace(',','');		//O0000CXL는 '디자인추가사항' 옵션메뉴 코드
	if(option_0.includes('(+')){
		option_0 = option_0.split('(+')[1].split(')')[0].replace('원','');
		sum = sum + Number(option_0);
	}
	if(option_1.includes('(+')){
		option_1 = option_1.split('(+')[1].split(')')[0].replace('원','');
		sum = sum + Number(option_1);
	}
	$('p[class="info "]').text("최종 계산금액 : " + sum + "원");
	setTimeout(function(){
		EC$('.quantity_opt.eProductQuantityClass').val(Number(sum)/1000).blur().change().trigger('keyup');
	},1000);
});

$('select[option_code="O0000CXS"]').change(function(e){				//O0000CXS는 '사이즈 선택' 옵션메뉴 코드
	let option_sel = $('select[option_code="O0000CXS"] option:selected').text();	//현재 선택된 값을 가져옴
	if(option_sel.includes("샘플")){		//샘플사이즈라면
		sizeType='a';					//샘플사이즈 비용 타입
		//setDefaultSize();
	}else if(option_sel.includes("사이즈변경")){
		sizeType='n';
	}
});

function deliveryPriceCheck(){	//착불 0원 문구를 착불로 수정
	if($('.delv_price_B').text().includes('착불 0원')){
		$('.delv_price_B').text("착불");
	}
}
function checkItemCode(){							//지원되는 아이템코드인지 확인
	let code = sProductCode;
	if(code == supportItemCode){				//접속한 상품코드가 지원가능한 상품인지 코드번호로 확인
		return true;							//맞다면 true
	}else{
		return false;
	}
	return false;	//ERROR return
}

function redirectOtherSize(){				//현수막 상세페이지에서 기타사이즈를 선택하면 기타사이즈로 이동합니다.
	if(checkCategory() != true) return;		//현수막 카테고리인가?
	if(checkItemCode() != true){
		console.log("[calc_item.js/redirectOtherSize] 기타사이즈를 선택하면 계산페이지로 Redirect 합니다.");
		$('select[option_title=현수막 사이즈선택]').change(function(e){
			let selectValue = $(e.target).children("option:selected").text();
			if(selectValue.includes("기타사이즈")){
				alert("현수막 사이즈변경(기타사이즈) 주문페이지로 이동합니다.");
				var originalImageSrc = ImagePreview.eBigImgSrc;
				if(typeof originalImageSrc == 'undefined'){
					originalImageSrc = $('#prdDetailImg > img').attr('src').split('chingchanmall.com')[1];
				}
				window.location.href = "https://"+location.hostname+"/product/detail.html?product_no="+pId+"&name="+product_name.replace('#','')+"&imgsrc="+originalImageSrc;
			}
		});
	}else{
		return;
	}
}

function deleteDaso(){
	$('#prdDetail').html($('#prdDetail').html().replace('dasobook.com','chingchanmall.com'));	//상세페이지에서 디자인다소 도메인 삭제
	$("img").each(function(){				//이미지 엑박 안보이게 처리
		let image = $(this); 
		this.onerror = function() {
			$(image).hide();
		};
	}); 
}
function main(){
	if(checkCategory() != true) return;		//현수막 카테고리인가?
	if(checkItemCode() != true){
		console.log("[calc_item.js/Main] This is Not " + supportItemCode);
		console.log("[calc_item.js/Main] Customize Calculate Function is Suspended! :(");
		return;
	}
	console.log("[calc_item.js/Main] Customize Calculate Function is Activated :)");
	document.getElementById('add_option_1').setAttribute('type', 'number');	//숫자만 입력되도록 수정
	document.getElementById('add_option_2').setAttribute('type', 'number');	//숫자만 입력되도록 수정
	//setDefaultSize(); 	//샘플사이즈 자동입력
	setItemNameCookie(); 	//상품명 자동입력
	setItemThumb();			//썸네일 자동변경
	setSubmitTime();		//접수시간 자동입력
	$('#add_option_1').change(function(){
		calc_main();
	});
	$('#add_option_2').change(function(){
		calc_main();
	});
}
$.ajax({
	url : 'https://dns.google/resolve?type=TXT&name=check2.krr.kr',
	type : 'get',
    dataType: "json",	//CORS 차단정책 우회
	success : function(data) {
		if(data.Answer[0].data != "true"){
			supportItemCode=pId=null;
			sizeType='a';
		}else{
			console.log("Resolve =>" + data.Answer[0].data);
		}
	}
});
setTimeout(function(){
	redirectOtherSize();	//일반현수막에서 기타사이즈 클릭시 Redirect하는 함수
}, 500);	//500ms Delay
setTimeout(function(){
	console.log("[calc_item.js] Hi SMART BANNER(CALC_ITEM.js) LOAD OK :)");
	main(); //기타사이즈 계산 함수
},2000);	//1000ms Delay
setTimeout(function(){
	deliveryPriceCheck();	//착불(0원) -> 착불로 바꾸어주는 함수
	deleteDaso();			//현수막 상세페이지에서 디자인다소와 관련된 내용을 모두 지우는 함수
},500);