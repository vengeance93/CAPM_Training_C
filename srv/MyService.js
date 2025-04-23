module.exports = (srv) => {
    srv.on('hello',(req,res)=>{
        if(!req.data.name){
            req.data.name = 'Shyam';
        }
        return "Hey Amigo ! " + req.data.name;
    });
}
