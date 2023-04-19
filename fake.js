function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
  sessionStorage.clear();
  localStorage.clear();
  gtag('event', 'conversion', {
      'send_to': 'AW-1059404225/DvI1CKDvsIYYEMHzlPkD',
      'value': "192000",
      'currency': 'KRW',
      'transaction_id': makeid('15')
  });
  location.reload(true);