function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}
function chunk(data = [], size = 1) {
  const arr = [];
    
  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}

//▼ 지워야하는 상품ID
var itemArray = 
['194091','163642','197332','163534','163437','163492','199731','163679','163709','184754','194066','196974','163382','163129','200034','183920','163782','163409','163797','164333','193158','193152','163766','194289','199624','187896','198937','197975','163942','187901','163149','199891','185089','199727','199929'];
itemArray = chunk(itemArray,10);

for (i = 0; i < itemArray.length; i++) {
	fetch("https://ccnaramall.cafe24.com/exec/admin/product/ProductManageDelete", {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
		"content-type": "application/x-www-form-urlencoded",
		"sec-ch-ua": "\"Whale\";v=\"3\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"110\"",
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": "\"Windows\"",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"x-requested-with": "XMLHttpRequest"
	  },
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "product_no[]="+itemArray[i],
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	});
	console.log("[성공] 요청 전송완료.");
	sleep(1000);
}