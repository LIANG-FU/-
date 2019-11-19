const { Article } = require('../../model/article')
// 导入分页模块
const pagination = require('mongoose-sex-page')

module.exports = async (req,res)=>{

     // 标识 当前用户在首页页面
    req.app.locals.currentLink = 'homeindex'

    const page = req.query.page
    // 从数据库中查询数据
    const result =  await pagination(Article).find().page(page).size(4).display(5).populate('author').exec()
    // res.send(result)
    // 渲染模板并传递数据
    res.render('home/default.art',{
        result:result
    })
}