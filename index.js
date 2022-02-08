import express from "express";
import cors from "cors";
import mysql from "mysql";

import { DBCONFIG } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(DBCONFIG);

app.post("/create", (req, res) => {
  console.log("");
  const name = req.body.name;
  const age = req.body.age;
  const qualification = req.body.qualification;
  const salary = req.body.salary;

  db.query(
    "INSERT INTO employees (name,age,qualification,salary) VALUES(?,?,?,?)",
    [name, age, qualification, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("value stored");
      }
    }
  );
});

app.get("/show", (req, res) => {
  db.query("SELECT * from employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ? ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(5000, () => {
  console.log("your server starting on : port5000");
});
