// ==UserScript==
// @name		copy_id.js
// @namespace	https://ads.google.com
// @version		20230517-1
// @description	Google Shopping Advertisement ID Grabber
// @author		BaeSeoyeon
// @match		*://ads.google.com/aw/products*
// @icon		https://www.google.com/s2/favicons?sz=64&domain=ads.google.com
// @grant		none
// @license		CC BY-NC-ND
// ==/UserScript==

var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

function start_copy(){
	let ID_Array=[];
	$(".link._ngcontent-awn-SHOPPING-35").each(function(index, element){
		let text = element.innerText;
		if(text.search('cafe24_ccnaramall_1_') != -1){
			ID_Array.push(text.replace('cafe24_ccnaramall_1_',''));
		}
	});
	let txt = $('<button type="button" id="getID">').html('고유번호 복사');
	let clip = $('<input type="hidden" id="hiddenInput">').html('');
	$(".left-panel._ngcontent-awn-SHOPPING-17 > div").append(txt);
	$(".left-panel._ngcontent-awn-SHOPPING-17 > div").append(clip);
	$("#getID").click(function() {
		$('#hiddenInput').prop('type', 'text');
		for(let i=0; i<ID_Array.length; i++){
			let val = $('#hiddenInput').prop('value');
			$('#hiddenInput').prop('value',"'"+val+','+ID_Array[i]+"'");
		}
		$('#hiddenInput').select();
		var copy = document.execCommand('copy');
		$('#hiddenInput').prop('type', 'hidden');
		if(copy){
			alert("데이터가 복사되었습니다.");
		}
	});
	console.log(ID_Array);
}

setTimeout(start_copy, 8000);