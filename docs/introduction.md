---
title: Introduction
footer: MIT Licensed | Copyright © 2022
---

# Introduccion

El presente software tiene como objeto la migración de datos referente al trafico producido diariamente en los diferentes portales de el Grupo para los cuales se haya definido un segmento.

# Funcionamiento

Al momento de iniciar su ejecución, el software crea una tarea programada de invocación cada hora, la cual se encarga de consultar la API de Piano para obtener los segmentos de trafico de los diferentes portales.

Posteriormente, cada segmento de trafico es consultado para obtener el trafico generado en el ultimo periodo de tiempo (1 hora), el cual es almacenado en una base de datos local en mongoDB. Estos datos posteriormente son enviados a la API de Hey! para su posterior procesamiento y analisis previa validación de negocio.

# Requerimientos

Para poder utilizar el software de migración se deben cumplir los siguientes requerimientos:

- Tener un cuenta en la plataforma Piano y obtener un token de autenticación.
- Tener una conexión a internet estable.
- Tener un usuario y contraseña de Hey y obtener un token de autenticación.
- Servidor linux.
- Acceso al repositorio [de este proyecto](https://github.com/GrupoElColombiano/integracion_hey) en el GitHub de El Colombiano.
- Tener instalado NodeJS, MongoDb y PM2

# Tecnologías

El sistema de migración de datos esta desarrollado en varias tecnologías web, haciendo uso de las siguientes herramientas:

- [NodeJS](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [MongoDB](https://www.mongodb.com/es)
- [Axios](https://axios-http.com/)
- [PM2](https://pm2.keymetrics.io/)
