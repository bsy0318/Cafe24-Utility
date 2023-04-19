var itemArray = 
['83679','23839'];

var feedStr = "";
for (let Gitem of itemArray) {
	feedStr += "feed#ccnaramall.1."+Gitem+",";
}

io_show_loading('div_contentArea');
var div = 'div_contentArea';
var url = '../fed/fed_inf_upd_0.php';
var par = 'feed_id_str=' + feedStr;

$.post(url, par, function(res) {
	io_hide_loading('div_contentArea');
	hide_asideArea_fedinfupd();
	$('#'+div).html(res);
})