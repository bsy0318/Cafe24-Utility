// ==ScriptInfo==
// @name         	LunchNotification
// @namespace	    http://*.cafe24.com/
// @version      	20230130-2
// @description	    점심시간에는 고객센터 번호를 숨겨놓았다가, 점심시간이 끝나면 돌려놓는 스크립트
// @author	        Seoyeon Bae
// ==/ScriptInfo==

let backup_call = $('.phone').text();	//전화번호 항목을 백업함
let backup_color = $('#footer > div.oper_time._section > ul > li:nth-child(9)').css("color");	//색 백업

let now = new Date();
let lunchStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30, 0, 0) - now;	//점심시간 사적까지 남은 ms를 구함
let lunchEndTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 30, 0, 0) - now;		//점심시간 종료까지 남은 ms를 구함
if (lunchStartTime < 0) {
	$('.phone').text("지금은 점심시간!");	//점심시간 안내 시작
	$('#footer > div.oper_time._section > ul > li:nth-child(9)').css("color", '#c53800');
}
if (lunchEndTime < 0) {
	$('.phone').text(backup_call);	//끝나면 전화번호 정상노출
	$('#footer > div.oper_time._section > ul > li:nth-child(9)').css("color", back);
}
setTimeout(function(){
	$('.phone').text("지금은 점심시간!");	//점심시간 안내 시작
	$('#footer > div.oper_time._section > ul > li:nth-child(9)').css("color", '#c53800');
}, lunchStartTime);
setTimeout(function(){
	$('.phone').text(backup_call);	//끝나면 전화번호 정상노출
	$('#footer > div.oper_time._section > ul > li:nth-child(9)').css("color", back);
}, lunchEndTime);