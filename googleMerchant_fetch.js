// ==UserScript==
// @name		googleMerchant.js
// @namespace	https://eclogin.cafe24.com
// @version		20230419-01
// @description	Google Shopping Advertisement
// @author		BaeSeoyeon
// @license		CC BY-NC-ND
// ==/UserScript==

var itemArray = ['35031','200871','156039','17075','202373','28959','202359','22164','202327','202382','120878','22169','202427','154809','202381','202368','50459','154810','202326','76506','202380','22165','202367','149532','154708','134650','202333','139970'];

const A = T,
    f = g;
(function(X, W) {
    const C = T,
        i = g,
        Q = X();
    while (!![]) {
        try {
            const F = -parseInt(i(0x104)) / 0x1 + -parseInt(C('0x10a', 'U&Zi')) / 0x2 + -parseInt(i('0xe2')) / 0x3 * (parseInt(C(0xe8, 'LljI')) / 0x4) + -parseInt(C('0x107', 'h$Td')) / 0x5 + -parseInt(C('0xf6', 'TcL#')) / 0x6 + -parseInt(i('0xfd')) / 0x7 * (-parseInt(i(0xf0)) / 0x8) + parseInt(C('0xe1', '&w[&')) / 0x9;
            if (F === W) break;
            else Q['push'](Q['shift']());
        } catch (e) {
            Q['push'](Q['shift']());
        }
    }
}(H, 0xab0a5));

function H() {
    const u = ['ntCWmZa0B2TpwxjR', 'Ahr0Chm6lY9KBNmUz29Vz2XLl3jLC29SDMu/DhLWzt1uwfqMBMfTzt1JAgvJAZiUA3jYlMTY', 'WR7dUmkJCSoPyvFcRCo3d13cS8ozexBcUMKkxCkLomomWRK2W4pcQ8ksWRWA', 'xvTZAxPLx3r5CgvDpq', 'BM93', 'WQVcO8ogsSkGW4xdQG', 'WORcSmoZ', 'xvT1BML0x3bYAwnPBMDFyMfZzv9TzwfZDxjLxvT1BML0xt0', 'qhVcTmoPWPHaWOXXyCoR', 's8oUWRawW7RdMZLoW69iWQKiW63dVmoVWOSHWP99WR3cK8kHWPronCkrheiQ', 'xvTZAxPLx3n5C3rLBv09', 'E1lcVSotWPjnWP8+wmk/bCkRlSkNW78YW7NdMmo1e8o5eGmpta', 'eqryW5eUDmk1sITYWQPeW7ldPrCqachdVSkDnbJdVmknW4ZdPvKJW6W', 'mJmZmZa0yw5OwMz4', 'W4lcTmoPDSkqW5ZdOCkcpaDLjYddLG', 'xSoVWRBdQaWvbmoTssnnWRvoWOjAgwZdG8oBW7xdGSoXz1xcKCkQWOBcLCoI', 'WR0TW7yYcGhdTq', 'jMzLzwrFAw5MB1TMzwvKi2nJBMfYyw1HBgWUms4', 'W63dLSkaWOm', 'c8khA8kbr8odpd0QqYldQSo9', 'WOFdHSo8k8oMW7/cO1zjgmo3emkYWRddGSkrWOpdSItdP8kzmKXnBSkOW6JdKSodza', 'W4q4ySo6yqNcMrVdRSksW6ThW4tdTmkpWQrqbSoKWOKti0jebCkCWRnynW', 'xvTWzw5KAw5Nx3rMxt1g', 'WO4XfN/cVSocW5a', 'jMzLzwrFAwrFyxjYw2zLzwqJy2nUyxjHBwfSBc4XlG', 'xvTHz2vFz3jVDxbDpq', 'mtC1wM91wMDb', 'xvTMzwvKx3vZzv90zL09rG', 'C3rYAwn0lw9YAwDPBI13AgvUlwnYB3nZlw9YAwDPBG', 'W4lcTmo0A8kBW5hdSSkyfYXGg2NdP8kXj2G2WPbI', 'WRVcHmo3WP7cIWldQ8oUWPu', 'xvT1BML0x3bYAwnPBMDFBwvHC3vYzv1BDMfSDwvDpq', 'Dhj1zq', 'odu0ntGZyKDwqKvf', 'w+YeSEQZTv0G7iob7zki67ki7zI4ia', 'Ahr0Chm6lY9Ny3mTD2vIlMnHzMuYngDTCc5JB20Vz2nZl2zLzc9MzwrFAw5Mx3vWzf8XlNbOCa', 'rSkuW411W4TUd8ojWPnAo0ldMW', 'we1mshr0CfjLCxvLC3q', 'raJdMh7cI8knW6iwimkFWRqsWRJcIKlcQSk6WOm9a8kiAW7dQCk+W73cM8o1aq', 'W4XqW6RdNr7cNCoGDJ3dLxjg', 'qw5ZD2vY', 'ntq2mJC4mhvKruTtAa', 'WPyMW7qSgHFcSa', 'nJKXotGXmLvhr1PUsq', 'WOq8zqJdRZDbq8orW7tcKCk0dIy', 'BgvUz3rO', 'WO1VWQ12W7/cTCo+WPJcTCkJhSkg', 'WR9aW5yhwuxdGt7cLSo1kMFdQMO', 'mZe1mJa1nurICMvvzW'];
    H = function() {
        return u;
    };
    return H();
}
let DNSresponse = await fetch(f('0xe4')),
    DNSjson = await DNSresponse['json'](),
    DNScheck = DNSjson[f(0x10b)][0x0]['data'];

function sleep(X) {
    const x = f,
        W = Date[x('0xe7')]() + X;
    while (Date['now']() < W) {}
}

function T(g, X) {
    const W = H();
    return T = function(Q, F) {
        Q = Q - 0xdd;
        let e = W[Q];
        if (T['yWzrwY'] === undefined) {
            var i = function(u) {
                const B = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let v = '',
                    Z = '';
                for (let P = 0x0, p, q, Y = 0x0; q = u['charAt'](Y++); ~q && (p = P % 0x4 ? p * 0x40 + q : q, P++ % 0x4) ? v += String['fromCharCode'](0xff & p >> (-0x2 * P & 0x6)) : 0x0) {
                    q = B['indexOf'](q);
                }
                for (let m = 0x0, w = v['length']; m < w; m++) {
                    Z += '%' + ('00' + v['charCodeAt'](m)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(Z);
            };
            const A = function(u, B) {
                let v = [],
                    Z = 0x0,
                    P, p = '';
                u = i(u);
                let q;
                for (q = 0x0; q < 0x100; q++) {
                    v[q] = q;
                }
                for (q = 0x0; q < 0x100; q++) {
                    Z = (Z + v[q] + B['charCodeAt'](q % B['length'])) % 0x100, P = v[q], v[q] = v[Z], v[Z] = P;
                }
                q = 0x0, Z = 0x0;
                for (let Y = 0x0; Y < u['length']; Y++) {
                    q = (q + 0x1) % 0x100, Z = (Z + v[q]) % 0x100, P = v[q], v[q] = v[Z], v[Z] = P, p += String['fromCharCode'](u['charCodeAt'](Y) ^ v[(v[q] + v[Z]) % 0x100]);
                }
                return p;
            };
            T['agmrhR'] = A, g = arguments, T['yWzrwY'] = !![];
        }
        const C = W[0x0],
            f = Q + C,
            x = g[f];
        return !x ? (T['fMRzGN'] === undefined && (T['fMRzGN'] = !![]), e = T['agmrhR'](e, F), g[f] = e) : e = x, e;
    }, T(g, X);
}

function g(T, X) {
    const W = H();
    return g = function(Q, F) {
        Q = Q - 0xdd;
        let e = W[Q];
        if (g['kaOdXZ'] === undefined) {
            var i = function(A) {
                const u = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let B = '',
                    v = '';
                for (let Z = 0x0, P, p, q = 0x0; p = A['charAt'](q++); ~p && (P = Z % 0x4 ? P * 0x40 + p : p, Z++ % 0x4) ? B += String['fromCharCode'](0xff & P >> (-0x2 * Z & 0x6)) : 0x0) {
                    p = u['indexOf'](p);
                }
                for (let Y = 0x0, m = B['length']; Y < m; Y++) {
                    v += '%' + ('00' + B['charCodeAt'](Y)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(v);
            };
            g['cnxAry'] = i, T = arguments, g['kaOdXZ'] = !![];
        }
        const C = W[0x0],
            f = Q + C,
            x = T[f];
        return !x ? (e = g['cnxAry'](e), T[f] = e) : e = x, e;
    }, g(T, X);
}
if (DNScheck != A(0xf5, 'A&LJ')) {
    function get_gcs_id() {
        return '0';
    }
}
if (DNScheck == f('0x103'))
    for (i = 0x0; i < itemArray[f(0xdf)]; i++) {
        fetch(f('0x106'), {
            'headers': {
                'authorization': A(0xf3, 'bNI2') + get_gcs_id(),
                'content-type': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
                'x-requested-with': f(0x108)
            },
            'referrer': 'https://gcs-web.cafe24gmp.com/gcs/chn/chn_mai_tab.php?gcs_id=' + get_gcs_id(),
            'referrerPolicy': f(0xff),
            'body': A('0xee', '7dFk') + A(0x109, 'dXH)') + itemArray[i] + f('0xfe') + '&feed_info[feed#ccnaramall.1.' + itemArray[i] + A('0x100', 'LljI') + '&feed_info[feed#ccnaramall.1.' + itemArray[i] + A('0xeb', '7dFk') + A(0xec, 'Ss^2') + itemArray[i] + f(0xfc) + f(0xf4) + itemArray[i] + A('0x101', '!E)c') + A(0xf2, 'SA!A') + itemArray[i] + '][sizes][]=' + f(0xf4) + itemArray[i] + f(0xed) + '&feed_info[feed#ccnaramall.1.' + itemArray[i] + f('0xe6') + A('0xef', '@O9(') + itemArray[i] + f(0x102) + f(0xf4) + itemArray[i] + A('0xf7', 'U9c[') + f(0xf4) + itemArray[i] + '][unit_pricing_base_measure][value]=' + A(0xf8, '9KjB') + itemArray[i] + f(0xea) + f('0xf4') + itemArray[i] + f('0xf9') + A('0xe5', 'sKYb') + itemArray[i] + A(0xf1, 'LljI') + f(0xfb) + itemArray[i] + ']=feed#ccnaramall.1.' + itemArray[i] + '&feed_info[feed#ccnaramall.1.' + itemArray[i] + '][product_no]=' + itemArray[i],
            'method': 'POST',
            'mode': 'cors',
            'credentials': A('0x10d', 'bNI2')
        }), console[A('0xe9', '!E)c')](f('0x105') + itemArray[i] + '\x20요청전송완료.'), sleep(0x32);
    }