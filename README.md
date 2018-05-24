##API Starter

Maqueta para hacer apis

##ESTRUCTURA

```
/api/controllers //controladores de ruta
```

```
/api/routes //rutas de la aplicacion
```

```
/bootstrap //inicializacion de variables y servicios del server (Middleware)
```

```
/databases //instancias de base de datos (connection.js) //configuracion conexion de db
```

```
/databases/models //modelos o schemas de mongodb (mongoose.schema)
```

```
/helpers  // aqui declara tus funciones o librerias de ayuda (similar a Providers (General Provider))
```

```
/static  //carpeta static donde se estan los elementos staticos (ver documentación express.static())
```

##CONTENIDO

Usuarios, Auth y Log de acciones de usuario (bitacora);

- Sesión: MongoDB
- Compresión de contraseñas bcrypt (Blowfish)
- Server: Express
- Procesamiento de información: BodyParser & Multer
- Utils : moment, rxjs

Dependencies

    mongoose, body-parser, multer, moment, rxjs, bcrypt-nodejs, jsonwebtoken, express

DevDepencies

    nodemon, eslint

##USAGE

1- Clonar el repo
```
git clone https://gitlab.com/tecnoandina/plantilla-api-starter
```
2- Instalar modulos
```
npm install
```
3- Instalar modulos de desarrollo
```
npm install --dev
```
4- Run the script
```
npm start
```

##ESTANDARIZACIÓN

- Para empezar a desarrollar

1- Modificar DB de conexión del mongo /databases/connection.js cambiar apistarter por el nombre de la DB que se relacione con el proyecto a realizar
```
mongodb://127.0.0.1:27017/apistarter
```

- Para empezar a tener un repositorio propio en gitlab para el proyecto (configurar)

1- Crear un repositorio en gitlab

2- Ejecutar comando en consola, en la carpeta del proyecto

```
git remote remove origin
```

3- Setear el nuevo origen con url gitlab del nuevo repositorio

```
git remote add origin https://gitlab.com/tecnoandina/repositorio-nuevo
```

4- Hacer un push desde la consola

```
git add .
git commit -m "First Commit"
git push --set-upstream origin master
```

Nota: El paso realmente importante es setea el upstream a origin master, donde estariamos seteando como punto de subida el nuevo repositorio que deseamos utilizar

```
git push --set-upstream origin master
```

A partir de aqui podemos empezar a utilizar el gestor de git de Visual Studio Code para subir nuestros cambios si queremos.
