const isAdmin = (req, res, next) => {
    if (req.user.role == "administrateur") {
      next();
    } else {
      res.status(401).send({ msg: "you are not auth/aut" });
    }
   
    
    
  };
  
  module.exports=isAdmin