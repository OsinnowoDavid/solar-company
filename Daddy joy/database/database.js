const mangodb = reqiure ('mongodb');

const mongoclient = mongodb.mongoclient ;

let database;
async function connect (){ 
    
 const client = await mongoclient.connect('mogodb://localhost:27017');
 database = client.db('ELUTECH GLOBAL SERVICES LIMITED')

}
function getdb ( ){
    if (!database) throw{ message : 'database nojy found '};
}
return datebase ;

module.exports={
    connecttodatabase:connect,
    getdb:getdb
}