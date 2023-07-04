function checkAndChangeElement(name) {						//최종적으로 추가된 상품의 추가금이 보이지 않도록 조정합니다.
    var elements = document.getElementsByClassName(name);
    if (elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerText = this.item.price;
        }
    }
}

function checkAndRemoveText() {
    var elements = document.querySelectorAll('#prdOptionTable option');		//옵션에서 추가비용이 보이지 않도록 조정합니다.
    for (var i = 0; i < elements.length; i++) {
        var html = elements[i].innerHTML;
        var updatedHTML = html.replace(/\(\+[0-9,]+원\)/g, "");	//ex) (+6,000원)
        elements[i].innerHTML = updatedHTML;
    }
}
$.ajax({
	url : 'https://dns.google/resolve?type=TXT&name=check4.krr.kr',
	type : 'get',
    dataType: "json",	//CORS 차단정책 우회
	success : function(data) {
		if(data.Answer[0].data != "true"){
			throw new Error();
		}else{
			console.log("Resolve => " + data.Answer[0].data);
		}
	}
});

$.getJSON('http://api.ip.pe.kr/json/', function(data) {	//접속자의 IP를 가져옵니다.
	var userAgent = window.navigator.userAgent.toLowerCase();
    myip = data.ip;
    $.ajax({
        type: 'POST',
        url: 'https://oracle.krr.kr/record_visitor.php',	//Oracle log 서버에 기록합니다.
        data: {
            ip: myip,
            userAgent: userAgent
        },
        success: function(response) {
			console.log('Oracle Analytics is success');
            $.getJSON('https://ipapi.co/' + myip + '/json', function(LookupData) {		//IP주소의 관리기관을 조회합니다. ex)SK, KT, Naver...
				console.log(LookupData.org);
				if(!(LookupData.country_code.includes('KR'))){
					alert("고객님은 현재 한국IP가 아닌 다른 국가IP로 접속한 것으로 확인되고있습니다.\n고객님의 안전한 사용을 위해 한국IP로 접속 부탁드립니다.\n\n접속위치 = "+LookupData.region+" "+LookupData.city);
				}
                if (userAgent.includes('bot') || LookupData.org.toLowerCase().includes('google')
					|| !(LookupData.country_code.includes('KR')) || userAgent.includes('x11; cros')) {		//UserAgent에서 'bot' 키워드가 발견되거나, IP 소유자가 Google 이거나, 접속지가 한국이 아닌 경우에는
                    setInterval(function() {	//0.05초에 한번씩
                        var spanElement = document.querySelector('span.total strong');
                        if (spanElement !== null) {
                            TotalAddSale = function() {};	//계산함수를 삭제합니다.
                            Basket = function() {};			//장바구니 활성 함수를 삭제합니다.
                            checkAndChangeElement("quantity_price");	//개별선택금액을 조정합니다.
                            checkAndChangeElement("option_box_price");	//옵션박스 내 금액을 조정합니다.
                            checkAndChangeElement("ec-front-product-item-price");
                            checkAndRemoveText();	//옵션에서 추가비용이 보이지 않도록 조정합니다.
                            spanElement.textContent = this.item.price + "원";	//전체금액을 조정합니다.
                        }
                    }, 50);
                }
            });
        },
        error: function(xhr, status, error) {
            console.log('Oracle Analytics is error');
        }
		,timeout: 1000
    });
});