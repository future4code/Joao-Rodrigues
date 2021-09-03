import app from "./app"
import createProduct from "./endpoints/product/createProduct"
import getAllProducts from "./endpoints/product/getAllProducts"
import createUser from "./endpoints/user/createUser"
import getAllUsers from "./endpoints/user/getAllUsers"
// import createCharacter from "./endpoints/createCharacter"
// import deleteCharacter from "./endpoints/deleteCharacter"
// import getAllCharacters from "./endpoints/getAllCharacters"

// app.get("/character", getAllCharacters)
// app.post("/character", createCharacter)
// app.delete("/character/:id", deleteCharacter)

app.get('/user', getAllUsers)
app.post('/user', createUser)

app.get('/product', getAllProducts)
app.post('/product', createProduct)


app.listen(3003, ()=>{
    console.log("Server ready!")
})