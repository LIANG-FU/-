module.exports = (req,res)=>{
    const {message} = req.query
    console.log(message)
    res.render('admin/register',{
        message:message
    })
}