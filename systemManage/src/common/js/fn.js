import qs from 'qs'
import axios from 'axios'
function errCallback(obj, d) {

    obj.$message({
        message: d.data.info,
        type: "warning"
    });
    obj.$router.replace('/login')
    return;
}

function ajax(obj, url, params, method, callback) {
    //声明一个变量接收参数方式（post->data; get->params)
    var paramsname = 'params';
    //如果为post请求，将paramsname改为data
    if (method == 'post' || method.toUpperCase() == 'POST') {
        params = qs.stringify(params);
        paramsname = 'data'
    }
    axios({
        url: url,
        method: method,
        [paramsname]: params
    }).then(d => {
        //掉线处理
        if (d.data.code == -1) {
            errCallback(obj, d);
        }
        if (d.data.isok) {
            callback(d)

        } else {
            obj.$message({
                message: d.data.info,
                type: "warning"
            });
        }
    }).catch(() => {
        console.log('err')
    })
}

export default {
    errCallback,
    ajax
}