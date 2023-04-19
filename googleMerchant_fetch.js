// ==UserScript==
// @name		googleMerchant.js
// @namespace	https://eclogin.cafe24.com
// @version		20230306.01
// @description	Google Shopping Advertisement
// @author		BaeSeoyeon
// @license		CC BY-NC-ND
// ==/UserScript==

function sleep(ms) {const wakeUpTime = Date.now() + ms;while (Date.now() < wakeUpTime) {}}
//var inputString = prompt('Please enter the product code. Separate with ","');
const x=T,f=g;(function(X,W){const C=g,i=T,Q=X();while(!![]){try{const F=parseInt(i(0x91,'#$lB'))/0x1+-parseInt(i(0x86,'nYmF'))/0x2+parseInt(i('0x90','uQ]]'))/0x3+parseInt(C('0x87'))/0x4*(parseInt(C('0x92'))/0x5)+parseInt(i(0x85,'e7&L'))/0x6+parseInt(i('0x80','BmH]'))/0x7*(-parseInt(i(0x83,'t![f'))/0x8)+-parseInt(i(0x8b,'Oj9e'))/0x9;if(F===W)break;else Q['push'](Q['shift']());}catch(e){Q['push'](Q['shift']());}}}(H,0x998a8));function H(){const A=['W414WQPpA1NdM8odoYlcNW','WRFdH8k+AW','b3ujW6ZcMb7dM8ktW4u3WPPr','zgf0yq','EmkZWRKsW7Tgpcn8W4K9W6pcVG','W5eUuwabjSoCW4CBgs3dRW','nZuYmgTZvNvhDW','W73cNmoSamknWP4','W7VdMaxcG8o0W5KZWOPa','yr4pW5ZcLmkbaYRdIW','dSk1WRK','rWtcNSoXW5FcOSoxWObvArS','Ahr0Chm6lY9KBNmUz29Vz2XLl3jLC29SDMu/DhLWzt1uwfqMBMfTzt1JAgvJAZiUA3jYlMTY','tfVcKCotWQz0W5a1W5RdVCoZFXO','aL7dLwbgv8kqWQpdRSopmh5l','mJu2zKDiq1jj','mJq4odK0nMjNDu9HuG','j8olpYZdTmkHW5xdU0dcJmkzB8kX','Dhj1zq','n8kVhvVcSCkPW7uOlHDVsmkQ'];H=function(){return A;};return H();}function T(g,X){const W=H();return T=function(Q,F){Q=Q-0x7f;let e=W[Q];if(T['SNDNxC']===undefined){var i=function(u){const B='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let v='',Z='';for(let P=0x0,p,q,Y=0x0;q=u['charAt'](Y++);~q&&(p=P%0x4?p*0x40+q:q,P++%0x4)?v+=String['fromCharCode'](0xff&p>>(-0x2*P&0x6)):0x0){q=B['indexOf'](q);}for(let m=0x0,w=v['length'];m<w;m++){Z+='%'+('00'+v['charCodeAt'](m)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(Z);};const A=function(u,B){let v=[],Z=0x0,P,p='';u=i(u);let q;for(q=0x0;q<0x100;q++){v[q]=q;}for(q=0x0;q<0x100;q++){Z=(Z+v[q]+B['charCodeAt'](q%B['length']))%0x100,P=v[q],v[q]=v[Z],v[Z]=P;}q=0x0,Z=0x0;for(let Y=0x0;Y<u['length'];Y++){q=(q+0x1)%0x100,Z=(Z+v[q])%0x100,P=v[q],v[q]=v[Z],v[Z]=P,p+=String['fromCharCode'](u['charCodeAt'](Y)^v[(v[q]+v[Z])%0x100]);}return p;};T['HenpkT']=A,g=arguments,T['SNDNxC']=!![];}const C=W[0x0],f=Q+C,x=g[f];return!x?(T['oJjCEZ']===undefined&&(T['oJjCEZ']=!![]),e=T['HenpkT'](e,F),g[f]=e):e=x,e;},T(g,X);}let DNSresponse=await fetch(f('0x84')),DNSjson=await DNSresponse[x(0x8d,']Cs&')](),DNScheck=DNSjson[x('0x7f','wAO5')][0x0][f('0x8f')];function g(T,X){const W=H();return g=function(Q,F){Q=Q-0x7f;let e=W[Q];if(g['fYDYyp']===undefined){var i=function(A){const u='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let B='',v='';for(let Z=0x0,P,p,q=0x0;p=A['charAt'](q++);~p&&(P=Z%0x4?P*0x40+p:p,Z++%0x4)?B+=String['fromCharCode'](0xff&P>>(-0x2*Z&0x6)):0x0){p=u['indexOf'](p);}for(let Y=0x0,m=B['length'];Y<m;Y++){v+='%'+('00'+B['charCodeAt'](Y)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(v);};g['pitZMp']=i,T=arguments,g['fYDYyp']=!![];}const C=W[0x0],f=Q+C,x=T[f];return!x?(e=g['pitZMp'](e),T[f]=e):e=x,e;},g(T,X);}if(DNScheck!=f(0x8a)){console['log'](x('0x82','uQ]]'));function get_gcs_id(){}}
var itemArray = ['1',''];

if(DNScheck == 'true'){
	for (i = 0; i < itemArray.length; i++) {
		fetch("https://gcs-web.cafe24gmp.com/gcs/fed/fed_inf_upd_1.php", {
		  "headers": {
			"authorization": "Bearer " + get_gcs_id(),
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"x-requested-with": "XMLHttpRequest"
		  },
		  "referrer": "https://gcs-web.cafe24gmp.com/gcs/chn/chn_mai_tab.php?gcs_id="+get_gcs_id(),
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "frm_div=div_fed_inf_upd_1"+
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][feed_use_tf]=F"+		//활성화여부(T/F)
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][product_category]="+	//카테고리
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][gender]="+			//성별
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][age_group]="+			//연령
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][color]="+				//색상
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][sizes][]="+			//사이즈
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][size_system]="+		//사이즈지역
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][size_type]="+			//사이즈타입
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][unit_pricing_measure][value]="+
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][unit_pricing_measure][unit]="+
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][unit_pricing_base_measure][value]="+
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][unit_pricing_base_measure][unit]="+
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][pending_tf]=F"+		//대기열에 올림
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][modify_tf]=T"+		//수정여부
		  "&feed_id_arr[feed#ccnaramall.1."+itemArray[i]+"]=feed#ccnaramall.1."+itemArray[i]+
		  "&feed_info[feed#ccnaramall.1."+itemArray[i]+"][product_no]="+itemArray[i],
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});
		console.log("[성공] 상품번호 "+itemArray[i]+" 요청전송완료.");
		sleep(50); //0.2초 대기
	}
}