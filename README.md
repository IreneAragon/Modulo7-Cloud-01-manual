# Ejercicio 1 - Github Pages - Manual

He tomado el último ejercicio del máster y he realizado en él los cambios necesarios para subir el proyecto a Github Pages de forma manual. 

## Pasos que he seguido: 
1. Configurar el fichero de webpack para compilar a producción: `prod.js`
2. Crear y configurar el fichero de variables de entorno para producción: `prod.env` 
3. Configurar en el fichero `prod.js` la librería `DotEnv`, la importo y la agrego como plugin.
4. Crear el comando `build:prod` para arrancar la compilación en el fichero de `package.json`
5. Ejecutar el comando `npm run build` para que se genere la carpeta dist
```bash
npm run build
```
6. Crear la nueva rama `gh-pages`
7. Eliminar todos los archivos excepto los de la carpeta `dist`
8. Subir los cambios al repo.