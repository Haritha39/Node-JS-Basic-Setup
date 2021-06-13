let query="";
const create=(connection,data,callback)=>{
    query="INSERT INTO topics SET ?"
    connection.query(query,[data],callback);
};

const getAll=(connection,callback)=>{
    query="SELECT * FROM topics"
    connection.query(query,callback);
};

const getOne=(connection,id,callback)=>{
    query="SELECT * FROM topics where ?"
    connection.query(query,[{id}],callback);
};

const updateTopics=(connection,id,data,callback)=>{
    query="UPDATE topics SET ? WHERE ?"
    connection.query(query,[data,{id}],callback);
};

const deleteTopic=(connection,id,callback)=>{
    query="DELETE FROM topics WHERE ?"
    connection.query(query,[{id}],callback);
};

module.exports={
    create,getAll,getOne,updateTopics,deleteTopic
}