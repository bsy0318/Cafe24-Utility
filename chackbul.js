//basket.html 착불 배송비 0원 지워버리는 스크립트
if($($('.orderListArea')[0]).html().includes('고정/착불') && ($('.total_delv_price_front').text()==="0")){
	$('.box.shipping.txt16').html("<b>(착불 배송비 별도)</b>");
}
$('.orderListArea').each(function (index, item) {
    $(item).html($(item).html().replace('배송비 0 (착불 배송비 별도)','배송비 <b>착불</b>'));
});

//orderform.html 착불 배송비 0원 지워버리는 스크립트
var chackbulHeader = $('#frm_order_act > div > div:nth-child(3) > div:nth-child(3) > table > tfoot');
if(chackbulHeader.length > 0){
	var isChakbul = $(chackbulHeader).html().includes('배송비 0 (착불)');
	if($($('.orderListArea')[0]).html().includes('고정/착불') && isChakbul){
		$(chackbulHeader).html($(chackbulHeader).html().replace('배송비 0 (착불)','배송비 <b>착불</b>'));
	}
}