import { app } from "./app.js";
import "dotenv/config"
import { ConnectDB } from "./db/index.js";
const port = process.env.PORT || 3000;
ConnectDB()
.then(
app.listen(port, ()=>{
    console.log(` Server is listening on port: ${port}`)
})
)
.catch((err) => {
    console.log("Mongodb connection error : " + err.message)
})
