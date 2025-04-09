import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send(
    '<h2 style="color: blue;">Hola Mundo! 🌐</h2><hr><p>Nombre: David De Jesus</p><hr><p>Apellido: Rodriguez Guirados</p><hr><p>Cedula: 30.836.689<p/><hr><p>Seccion: 4<p/>'
  );
}); 

app.get("/estudiante", (request: Request, response: Response) => { 
  response.status(200).json({
    mensaje: 'Hola Mundo! 🌐',
    nombre: 'David De Jesus',
    apellido: 'Rodriguez Guirados',
    cedula: '30.836.589',
    seccion: '4'

  });
}); 

app.listen(3000, () => { 
  console.log("Server running at PORT: ", 3000); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});