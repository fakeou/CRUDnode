var sql = require("mssql");

 var sqlserve = function(sqlstr) {
  return new Promise((res, rej) => {
    sql
      .connect("mssql://sa:qq1091926828http://127.0.0.0:1433/osdb")
      .then(() => {
        var sqltql = new sql.Request()
          .query(sqlstr)
          .then((recordset) => {
            res(recordset);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(() => {
        console.log(err);
      });
  });
}

async function database() {
  var data = await sqlserve("select * from Student");
  return data
}

database();

module.exports = sqlserve