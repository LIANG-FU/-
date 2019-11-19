// 
const {User} = require('../../model/user')
// 引入加密模块
const bcrypt = require('bcrypt')

module.exports = async (req,res,next)=>{
    const {username,email,password} = req.body

    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({email:email})
    // 如果用户已经存在，邮箱地址已经被别人占用
    if(user){
        // 重定向回添加页面
        // return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`)
        return next(JSON.stringify({path:'/admin/register',message:'邮箱地址已经被占用'}))
    }
    // 对密码进行加密处理
    // 生成随机字符串
    const salt = await bcrypt.genSalt(10)
    // 加密
    const newpassword = await bcrypt.hash(password,salt)
    // password = newpassword
    // 将用户信息添加到数据库中
    await User.create({
        username:username,
        email:email,
        password:newpassword,
        role:'normal',
        state:0
    })
    // 将页面重定向到登录页面
    res.redirect('/admin/login')
    
    
}