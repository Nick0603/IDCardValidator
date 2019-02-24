function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}
function fillData(col_name, fill_in_value) {
    window.document.querySelector('[name="' + col_name + '"]').value = fill_in_value;
}


// using input name to match query_param name
// 'idnum', 'applyTWY', 'applyMM', 'applyDD', 'applyReason'
data_obj = getQueryParams(window.document.location.search);
console.log(data_obj);
Object.keys(data_obj).map(function (col_name) {
    fill_in_value = data_obj[col_name];
    fillData(col_name, fill_in_value);
})