// import Vue from "vue";
// import { get, post } from "./service";
let baseUrl = "https://dev.protagonist-one.com"
let $http = '1111'
// jQuery.getScript("./assets/js/api/service.js", function() {
    // console.log(get,222111)
    $http = {
        //获取用户信息
        getuser(json) {
            // return axios({
            //     method:"POST",
            //     url:baseUrl+"/api/user/api/user",
            //     data:{
            //         title:"axios学习",
            //         author:"Yehaocong"
            //     }
            // })
            return get("/api/user", json);
        },
        //获取最新文章
        articleLatest(json) {
            return get("/api/articleLatest", json);
        },
        //项目详情
        projectDetail(json) {
            return get("/api/projectDetail", json);
        },
        //登录签名
        authlogin(json) {
            return post("/api/authLogin", json);
        },
        //点赞
        like(json, token) {
            return post("/api/like", json, token);
        },
        //点赞
        onshare(json, token) {
            return post("/api/share", json, token);
        },

        //发表评论
        writeComment(json, token) {
            return post("/api/writeComment", json, token);
        },
        //写文章
        writeArticle(json, token) {
            return post("/api/writeArticle", json, token);
        },
        //item评论列表
        itemCommentList(json) {
            return get("/api/itemCommentList", json);
        },
        // item列表
        itemList(json) {
            return get("/api/itemList", json);
        },
        //项目列表
        projectList(json) {
            return get("/api/projectList", json);
        },
        // item详情
        itemDetail(json) {
            return get("/api/itemDetail", json);
        },
        //评论列表
        itemCommentList(json) {
            return get("/api/itemCommentList", json);
        },
        //moments列表
        getMomentsList(json) {
            return get("/api/moments", json);
        },
        //moments列表
        getHotItem(json) {
            return get("/api/hotItem", json);
        },
        //认领
        addpot(json, token) {
            return post("/api/adopt", json, token);
        },



    };


    // console.log(111,Axios)
// });

// export default {
//     install() {
//         Vue.prototype.$api = Axios;
//     },
//     Axios,
// };
