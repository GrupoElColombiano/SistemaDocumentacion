# Documentacion El Colombiano

[![N|Solid](https://docs.elcolombiano.com/especial/cabezote/LogoEC.svg)](https://nodesource.com/products/nsolid)

Repositorio que contiene la base para iniciar con documentacioón documentada para los productos desarrollados en El Colombiano. Se creo con vitepress https://vitepress.vuejs.org/ y se recomienda siempre referirse directamente a este sitio web. En este repositorio simplemente se encuentra ya la configuracion inicial para que sea mas sencillo iniciar.

## Instrucciones
1. Tener instalado previamente Node
2. Clonar el repositorio
    ```bash
    git clone https://github.com/GrupoElColombiano/SistemaDocumentacion.git
    ```
3. En la consola ingresar:
    ```bash
    cd SistemaDocumentacion
    npm install
    ```
4. Iniciar VS Code o su IDE favorito y abrir el directorio ./SistemaDocumentacion:
    - En el archivo ubicado en la ruta ./docs/.vitepress/config.js se encuentra la configuracion general de la interfaz de usuario como el menu, menu lateral, logo y temas (estilos)
5. El sistema soportaa MD y HTML. El enerutamiento es basado en archivos.
6. Para publicar la documentacion primero ingresar a consola:
    ```bash
    npm run build
    ```
    Este comando genera un directorio ./ build. Este directorio contiene todos los recursos estaticos del sistema de documentación. Copiarlos a un directorio estático en el servidor HTTP de su predileccion como Apache o Nginx
