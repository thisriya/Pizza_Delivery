function auth_controller(){
    return {
       login(req,res){
           res.render('auth/login')
       },
       register(req,res){
        res.render('auth/register')
    }
    } 
}

module.exports=auth_controller