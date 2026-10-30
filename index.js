import express from "express"; const app=express();
const services=[
{id:1,name:"Track a shipment",description:"Check the progress of a mail or parcel.",url:"https://www.indiapost.gov.in/"},
{id:2,name:"Postal savings schemes",description:"Explore savings products offered through post offices.",url:"https://www.indiapost.gov.in/"},
{id:3,name:"Postal life insurance",description:"Find information about postal life insurance services.",url:"https://www.indiapost.gov.in/"},
{id:4,name:"Register a grievance",description:"Find the official channel for postal service complaints.",url:"https://www.indiapost.gov.in/"}];
app.get("/api/services",(_req,res)=>res.json(services)); app.listen(3000,()=>console.log("API on port 3000"));
