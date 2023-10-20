const express = require('express');
const users =require('./MOCK_DATA.json');
const app =express();
const PORT= 3000;

app.get("/",(req,res)=>{
  res.send("home page");
});

app.get("/api/users",(req,res)=>{
    res.json(users);
});
app.get("/users",(req,res)=>{
    const html= `
    <ul>
    ${users.map((users)=> `<li>${users.first_name}</li>`).join("")};
    </ul>`;
    res.send(html);
});
 
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user =users.find((user)=> user.id === id); 
     return res.json(user);
});

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})