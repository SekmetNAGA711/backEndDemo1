const express = require('express')
const cors  = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const inventory = ['greeting card','wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

/*------------Endpoint-----------------------------------------*/
// app.get('/',(req, res)=>{
//     let welcome = "welcome!"
//     console.log('Inside and endpoint')
//     res.status(200).send(welcome)
   
// })

app.get('/api/inventory', (req, res)=>{
  if(req.query.item){
    const filteredItems = inventory.filter((product)=>{
        return product.toLowerCase().includes(req.query.item.toLowerCase())
    })
    res.status(200).send(filteredItems)
  } else {
    res.status(200).send(inventory)
  }

})

app.get('/api/inventory/:index', (req, res)=>{

    let {index} = req.params// can do it like this

    let item = inventory[req.params.index]
    res.status(200).send(item)
    
    console.log(req.params.index)
    
})


app.listen(5050, ()=> console.log('server is running on port 5050!'))


