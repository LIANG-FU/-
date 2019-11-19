const { Article } = require('../../model/article')



module.exports = async (req,res,next)=>{
   
    // 即将要修改的文章id
    const id = req.query.id

    // res.send(id)
    let article = await Article.findOne({_id:id}).populate('author')
  
    // res.send(article)
    res.render('admin/article-edit',{
        article:article
    })


}