const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

// app.use('/',(req,res)=>{
// 	res.send("Hello World form NodeJS express.");
// });

// importing routes
const empresaRouters = require('./routes/empresaRoute');
const proveedorRouters = require('./routes/proveedorRoute');
const departamentoRouters = require('./routes/departamentoRoute');
const colorTipoRouters = require('./routes/colorTipoRoute');
const clienteRouters = require('./routes/clienteRoute');
//Route;
app.use('/empresa',empresaRouters);
app.use('/proveedor',proveedorRouters);
app.use('/departamento',departamentoRouters);
app.use('/colorTipo',colorTipoRouters);
app.use('/clientes',clienteRouters);


app.listen(app.get('port'),()=>{
	console.log("Start server on port "+app.get('port'))
})