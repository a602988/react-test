//發布的路徑
const distPath = "./";
//來源路徑-正式
//來源路徑
const comPath = "./src/page/";

//頁面共用設定
const page = {
    inject: 'body',
    minify: {
        collapseWhitespace: false,// 不壓縮html
        removeComments: false, // 不移除註釋
    },
}
//頁面
module.exports = {
    index: {...{
        title: "首頁",
        filename: distPath + 'index.html',
        template: comPath + 'test/index.html',

    }, ...page},

};
