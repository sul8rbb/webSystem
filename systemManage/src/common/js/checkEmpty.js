function ckEmpty(values) {
    var isok = true;
    for (var i in values) {
        if (values[i] == "") {
            isok = false;
            break;
        }
    }
    return isok;
}

//邮箱
function checkEmail(email) {
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return reg.test(email);
}
//电话
function checkTel(tel) {
    var reg = /^(13[0-9]|15[0-9]|18[0-9])([0-9]{8})$/;
    return reg.test(tel);
}
//身份证号
function checkIdx(idx) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(idx);
}
//邮编
function checkPostCode(postcode) {
    var reg = /^([0-9]{6})$/;
    return reg.test(postcode);
}

export default {
    ckEmpty,
    checkEmail,
    checkIdx,
    checkTel,
    checkPostCode
}