const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'APimple@400601',
    database: 'doctorsappusers'
    
});

app.post("/register", (req, res) => {
    const name = req.body.username;
    const employee_code = req.body.employee_code;
    const org_name = req.body.org_name;
    const div_name = req.body.div_name;
    const designation = req.body.designation;
    const email = req.body.email;
    const city = req.body.city;
    const mobile_no = req.body.mobile_no;
    const password = req.body.password;


    db.query(
        "INSERT INTO salesusers (name, employee_code, org_name, div_name, designation, email, city, mobile_no, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, employee_code, org_name, div_name, designation, email, city, mobile_no, password], (error, result) => {
            console.log(error);
        } 
    )
}) 

app.listen(3001, () => {
    console.log("Running server on localhost:3001");
})
