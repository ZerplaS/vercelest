const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

export default function handler(req, res) {
  /*------------------------------------------------------------------*/
  const { studentid, firstname, lastname, username, password, status } = req.body;
  if (req.method === "GET") {
    try {
      connection.query(
        "SELECT * FROM `tbl_users`",
        function (err, results, fields) {
          res.status(200).json({ users: results });
        }
      );
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    /*------------------------------------------------------------------*/
  } else if (req.method === "POST") {
    try {
      const results = connection.query("INSERT INTO tbl_users SET ?", {
        studentid ,
        firstname,
        lastname,
        username,
        password,
        status
      });
      return res.status(200).json({ ...req.body, id: results.insertId });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    /*------------------------------------------------------------------*/
  } else if (req.method === "PUT") {
    try {
      const results = connection.query("UPDATE tbl_users SET ? WHERE id = ?", [
        req.body,
        req.body.id,
      ]);
      return res.status(200).json({ ...req.body, id: results.insertId });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    /*------------------------------------------------------------------*/
  } else {
    try {
      const results = connection.query("DELETE FROM tbl_users WHERE id = ?", [req.query.id]);
      return res.status(200).json({ ...req.body, id: results.insertId });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}