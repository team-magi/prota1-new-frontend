// import axios from "axios";
// import { Message } from "element-ui";

// Vue.use(ViewUI)
axios.defaults.timeout = 50000;
axios.defaults.baseURL = ''//process.env.VUE_APP_API_ROOT;
axios.defaults.headers.get["content-type"] = "application/json";
function $Ms(e, msg) {
    console.log(msg);
    switch (e) {
        default:
            Message.error(msg || "network error");
    }
}

// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        // if(config)

        return config;
    },
    function (error) {
        // 对请求错误做些什么

        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        //一些统一code的返回处理
        if (response.status === 200) {
            if (response.data.code == 200) {
                return {
                    code: true,
                    data: response.data.data
                        ? response.data.data
                        : response.data,
                };
            } else {
                $Ms(
                    response.Code,
                    response.Msg ? response.Msg : "network error"
                );
                return false;

                //  {code : false , data : response.data.Msg};
            }
        }

        return response;
    },
    (error) => {
        //关闭loading
        console.log(error, 22222);
        $Ms(
            error.response.data.Code ||
                error.response.status ||
                error.response.data.Msg
        );
        // return Promise.reject({code : false , data : error.response.data.Msg})
        // return
    }
);

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        let idToken = localStorage.getItem("token") || "";
        axios.defaults.headers.get["Authorization"] = `Bearer ${idToken}`;
        axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                // console.log(response)
                //返回成功处理  这里传的啥 后续调用的时候 res就是啥
                resolve(response); //我们后台所有数据都是放在返回的data里所以这里统一处理了
            })
            .catch((err) => {
                resolve(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, token) {
    // alert(data)
    return new Promise((resolve, reject) => {
        let idToken = token ? token : "";
        axios.defaults.headers.post["Authorization"] = `Bearer ${idToken}`;
        axios.post(url, data).then(
            (response) => {
                console.log(response);
                resolve(response);
            },
            (err) => {
                resolve(err);
            }
        );
    });
}
/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        let token = sessionStorage.getItem("Token");
        let idToken = token ? token : "";
        axios.defaults.headers.patch["Authorization"] = `Bearer ${idToken}`;
        axios.patch(url, data).then(
            (response) => {
                resolve(response);
            },
            (err) => {
                resolve(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response);
            },
            (err) => {
                resolve(err);
            }
        );
    });
}

export function del(url, data = {}) {
    return new Promise((resolve, reject) => {
        let token = sessionStorage.getItem("Token");
        let idToken = token ? token : "";
        axios.defaults.headers.delete["Authorization"] = `Bearer ${idToken}`;

        axios
            .delete(url, {
                params: data,
            })
            .then((response) => {
                console.log(response);
                //返回成功处理  这里传的啥 后续调用的时候 res就是啥
                resolve(response); //我们后台所有数据都是放在返回的data里所以这里统一处理了
            })
            .catch((err) => {
                resolve(err);
            });

        // axios.delete(url, data)
        //     .then(response => {

        //         resolve(response);

        //     }, err => {
        //         resolve(err);
        //     })
    });
}
