import Axios from "axios";
import API from "./API";
Axios.defaults.timeout = 12000;
Axios.defaults.responsetype = 'json';


// Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
// Axios.defaults.headers['Accept'] = '*/*';
// Axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

// console.log(Axios.defaults, 'Axios *')

// 拦截器
Axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
});

export default {
    ajax({
        type = 'post',
        url = '',
        params = {

		},
		formData = false, // 以form data 形势传参
        idUrlParams = false, // id参数直接进入链接后面
        urlParmas = false, // 参数带入链接后面
        success = (() => {}),
        error = (() => {}),
    }){
        url = API[url];

        // 参数带入链接后面
        if(urlParmas){
            url = this.urlAfterToParmas(params,url);
            params = {};
        }

        // id参数直接进入链接后面
        if(idUrlParams){
            url += idUrlParams;
		}

		// 以form data 形势传参
		if(formData) {
			params = this.getParams(params).slice(1);
		}

		Axios[type](url, params).then((resp)=>{
            resp = resp.data;
            if(resp.code === 0){
                success(resp);
                return;
            }
            if(!resp.msg && resp.data){
                resp.msg = resp.data;
            }

            error(resp)
        }).catch((err)=>{
            if(err.message.indexOf("timeout of") > -1){
				error({
					msg: '请求超时了'
				});
                return console.log('请求超时了');
            }
            console.error("错误信息：" + JSON.stringify(err));
            error(err);
        })
    },

    // 参数带入链接后面
    urlAfterToParmas(params,url){
        url = url + this.getParams(params);
        return url;
    },

    // 获取字符串参数
    getParams(params = {}, query = {}){
        let str = "";
        for(let a in params){
            str += "&" + a + "=" + params[a];
        }
        for(let a in query){
        str += "&" + a + "="+query[a];
        }
        str = str.replace("&","?");
        return str;
    }

};
