const dotenv=require('dotenv')
const express=require('express')
const app=express()
const body=require('body-parser')

//1.- Variables de entorno
dotenv.config({path:'./env/.env'})
//2.- Rutas estáticas
app.use(express.static('./public'))
//3.- Rutas dinámicas
app.set('view engine', 'ejs')
app.set('views', './vistas')

//4.- Peticiones Post
app.use(body.urlencoded({extended:false}))
app.use(body.json)

//5.- Ruteo
app.use('/', require('./rutas/root'))

//6.- Estados
app.use((req, res, next)=>{
    res.status(404).render('404', {data:''})
})

//7.- Cookies -- requiere sql

//8.-Servicio Web
app.listen()