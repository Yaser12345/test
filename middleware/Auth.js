const Auth = async(req,res,next) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)
    next()
}

export default Auth