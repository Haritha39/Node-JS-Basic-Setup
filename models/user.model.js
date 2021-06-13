let query="";
const create=(connection,data,callback)=>{
    query="INSERT INTO users SET ?"
    connection.query(query,[data],callback);
};

const getAll=(connection,callback)=>{
    query="SELECT *,'' as password FROM users"
    connection.query(query,callback);
};

const getOne=(connection,id,callback)=>{
    query="SELECT *,'' as password FROM users where ?"
    connection.query(query,[{id}],callback);
};

const updateUser=(connection,id,data,callback)=>{
    query="UPDATE users SET ? WHERE ?"
    connection.query(query,[data,{id}],callback);
};

const deleteUser=(connection,id,callback)=>{
    query="DELETE FROM users WHERE ?"
    connection.query(query,[{id}],callback);
};

module.exports={
    create,getAll,getOne,updateUser,deleteUser
}