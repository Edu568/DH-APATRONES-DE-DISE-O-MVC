const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Enrutadores

const indexRouter = require('./routes');
const productRouter = require('./routes/producto');
const userRouter = require('./routes/usuario');

// Rutas

app.use(express.static(path.resolve(__dirname, "public")));

app.use('/', indexRouter);
app.use('/producto', productRouter);
app.use('/usuario', userRouter);


app.listen(PORT, console.log("server listen on port 3000"));



