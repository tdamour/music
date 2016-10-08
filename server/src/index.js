
import express from 'express';



const app = express();


const PORT = 3000;



app.get('/', function(req, res){
  res.send("got it");
});


console.log(`server is being hosted on port ${PORT}`);
app.listen(PORT);


