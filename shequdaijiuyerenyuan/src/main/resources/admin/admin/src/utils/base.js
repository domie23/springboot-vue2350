const base = {
    get() {
        return {
            url : "http://localhost:8080/shequdaijiuyerenyuan/",
            name: "shequdaijiuyerenyuan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequdaijiuyerenyuan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区待就业人员信息管理系统"
        } 
    }
}
export default base
