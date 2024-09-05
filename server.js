const express = require("express")

const app = express()

let PORT = 7000

app.use(express.json())

app.post("/webhook-event", (req, res)=>{
    let payload = req.body

    console.log(payload)
    console.log("Trying...")
    console.log(JSON.stringify(payload))

    // if(req.body.event.type == "app_mention"){
    //     console.log("Event Confirmed..")
    // }
    
    return res.status(200).json(payload.challenge)
})


app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})