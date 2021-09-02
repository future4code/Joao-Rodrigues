import app from "./app"
import createUser from "./endpoints/user/createUser"
import getAllUsers from "./endpoints/user/getAllUsers"
// import createCharacter from "./endpoints/createCharacter"
// import deleteCharacter from "./endpoints/deleteCharacter"
// import getAllCharacters from "./endpoints/getAllCharacters"

// app.get("/character", getAllCharacters)
// app.post("/character", createCharacter)
// app.delete("/character/:id", deleteCharacter)

app.get('/user/getAll', getAllUsers)
app.post('/user/create', createUser)


app.listen(3003, ()=>{
    console.log("Server ready!")
})