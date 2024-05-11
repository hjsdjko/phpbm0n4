const base = {
    get() {
        return {
            url : "http://localhost:8080/phpbm0n4/",
            name: "phpbm0n4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpbm0n4/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的社区门诊管理系统"
        } 
    }
}
export default base
