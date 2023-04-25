const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./mock.db",sqlite3.OPEN_READWRITE,(err)=> {
    if (err) return console.log("connection failed");

    console.log("connection successfull");

});


//db.run('CREATE TABLE user(id,email,password)');
//const sql = 'INSERT INTO user(id,email,password) VALUES(?,?,?)';
//db.run(sql,[1,'usha@gmail.com','usha123']);
function auth(){
    var email=document.getElementById("ema").value;
    var password=document.getElementById("pass").value;

    const sqlg = 'SELECT * FROM user WHERE email = ?';
    const ele =  db.run(sqlg,email);
    if(ele==" "){
    const sql = 'INSERT INTO user(id,email,password) VALUES(?,?,?)';
    db.run(sql,[1,email,password],(err) => {
        if(!err){
            alert("Login Successfull");
            
        }
        else{
            alert("Login Failed");
        }
    });
}
else{
    alert("Login failed");
}
    
     }


db.close((err)=>{
    if(err) return console.log(err.message);
})