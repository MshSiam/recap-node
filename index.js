// step one . import express and cors
const express = require("express")
const cors = require("cors")
// step 2. create app
const app = express()
// step 3 . declare a port
const port = process.env.PORT || 3080

app.use(cors())
app.use(express.json())

// step 4 . get request
app.get("/", (req, res) => {
  res.send("hello from node")
})

const users = [
  { id: 0, name: "siam", email: "siyamkenway@gmail.com" },
  { id: 1, name: "sifat", email: "sifat@gmail.com" },
  { id: 2, name: "sohan", email: "sohan@gmail.com" },
  { id: 3, name: "saif", email: "saif@gmail.com" }
]

// using query parameters //
app.get("/users", (req, res) => {
  const search = req.query.search
  //   console.log(search)
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    )
    res.send(searchResult)
  } else {
    res.send(users)
  }
})

// app methode
app.post("/users", (req, res) => {
  const newUser = req.body
  newUser.id = users.length
  users.push(newUser)
  console.log("hitting the post", req.body)
  res.json(newUser)
})

// dynamic api //
app.get("/users/:id", (req, res) => {
  const id = req.params.id
  const user = users[id]
  res.send(user)
})

app.get("/fruits", (req, res) => {
  res.send(["mango", "orange", "banana"])
})

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("fazli am")
})

app.listen(port, (req) => {
  console.log("listening to port", port)
})
