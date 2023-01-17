// ==UserScript==
// @name         	Cafe24_AutoDeliveryCheck
// @namespace	    http://*.cafe24.com/
// @version      	20230117-2
// @description	    Cafe24에서 배송 중에 있는 상품들을 자동으로 완료 처리 합니다.
// @author	        Seoyeon Bae
// @match	        https://*.cafe24.com/admin/php/shop1/s/shipped_end_list.php*
// @icon		    https://www.google.com/s2/favicons?sz=64&domain=cafe24.com
// @updateURL	    https://github.com/bsy0317/Cafe24-Utility/raw/main/addon.user.js
// @downloadURL	    https://github.com/bsy0317/Cafe24-Utility/raw/main/addon.user.js
// @run-at	        document-idle
// ==/UserScript==

var ignore_count=0;
var Carrier_list = Start();
var checkbox_array = new Array();
$('#searchResultList > tbody > tr > td.cellMerge.eCellHeight > div > table > tbody > tr > td:nth-child(1) > input.chkbox').each(function(index, item) {
    checkbox_array.push(item);
});

function checkStatus() {
    $('[id*="eDlvrTrace"]').closest("td").each(function(index, item) {
        let user_carr = $(item).text().trim().split(' ').join('').split('\n');

        if(typeof getCarrierByCode(user_carr[0])[0] == 'undefined'){
            $(item).append('<br><span style="color: rgb(153, 0, 204); font-weight: bold;">미지원 택배사</span>');
            //ignore_count = ignore_count+1;
            return true;
        }
        let req_carr_id = getCarrierByCode(user_carr[0])[0].id;
        let url = 'https://apis.tracker.delivery/carriers/' + req_carr_id + '/tracks/' + user_carr[3].replaceAll('-','');
        console.log(url);
        let apixhr = new XMLHttpRequest();
        apixhr.open('GET', url);
        apixhr.onload = function() {
            if (apixhr.status === 200) {
                let json = JSON.parse(apixhr.responseText);
                if (typeof json['message'] != "undefined") {
                    $(item).append('<br><span style="color: rgb(166, 0, 0); font-weight: bold;">' + '운송장오류' + '</span>');
                } else {
                    console.log(user_carr[3] + json['state']['text']);
                    if (json['state']['text'].search("완료") != -1) {
                        $(item).append('<br><span style="color: rgb(0, 124, 14); font-weight: bold;">' + json['state']['text'] + '</span>');
                        $(checkbox_array[index+ignore_count]).attr('checked', 'true');
                    } else {
                        $(item).append('<br><span style="color: rgb(255, 152, 0); font-weight: bold;">' + json['state']['text'] + '</span>');
                    }
                }
            } else {
                $(item).append('<br><span style="color: rgb(166, 0, 0); font-weight: bold;">' + '조회내역 없음' + '</span>');
            }
        };
        apixhr.send();
    });
}

function Start() {
    let url = 'https://apis.tracker.delivery/carriers';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    // 응답 처리
    xhr.onload = function() {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            Carrier_list = json;
            checkStatus();
        } else {
            return "200 But Error";
        }
    };
    // 요청 실패 처리
    xhr.onerror = function() {
        return "REQ Error";
    };
    xhr.send();
}

function getCarrierByCode(name) {
    return Carrier_list.filter(
        function(Carrier_list) {
            return Carrier_list.name.replaceAll(' ','').search(name) != -1
        }
    );
}

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
