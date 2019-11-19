module.exports = (req,res)=>{
    console.log(req.app.locals.userInfo.username)
    // 删除session
    req.session.destroy(function(){
        // 删除cookie
        res.clearCookie('connect.sid');
        
        // 判断原来登录的用户角色
        // 如果是管理员，返回登录状态
        // 如果是普通用户，返回home主页
        if(req.app.locals.userInfo.role == 'admin')
        {
            // 重定向到登录页面
            res.redirect('/admin/login')
        } else{
            res.redirect('/home')
        }
    
        // 清除模板中的用户信息
        req.app.locals.userInfo = null
    })
}