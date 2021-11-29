const mysql = require('mysql');

const con = mysql.createConnection({
    host: "pepe.rdb.superhosting.bg",
    user: "yorgovan_ivayorgova",
    password: "noahnoah7777",
    database: "yorgovan_yorgovaDB"
});


con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM `Templates`", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});