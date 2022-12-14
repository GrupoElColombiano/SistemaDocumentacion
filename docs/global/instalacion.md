---
title: Instalación
---

# Instalación

## Requerimientos

Para hacer la Instalación del sistema de migracion Piano - Hey! se deben cumplir los siguientes requisitos:

- Poseer un sistema operativo Linux (Centos 7 o posterior LTS)
- Tener instalado Node, MongoDB y PM2
- Tener abiertos los puertos 80 y 443 para el endpoint de la API
- Tener un cuenta en la plataforma Piano y obtener un token de autenticación.
- Tener una conexión a internet estable.
- Tener un usuario y contraseña de Hey! y obtener un token de autenticación.
- Acceso al repositorio [de este proyecto](https://github.com/GrupoElColombiano/integracion_hey) en el GitHub de El Colombiano.

## Pasos para la instalación

1. Clonar el repositorio de GitHub

```bash
git clone https://github.com/GrupoElColombiano/integracion_hey
```

2. Entrar a la carpeta del repositorio
```bash
cd integracion_hey
```

3. Pasar a la rama 'produccion' del repositorio
```bash
git checkout produccion
```

4. Descarga rama produccion
```bash
git pull origin produccion
```

5. Ejecutar la instalación de dependencias
```bash
npm install
```

6. Crear la tarea PM2 para el servicio
```bash
pm2 start npm --name Hey -- start
```

7. Salvar la tarea PM2

```bash
pm2 save
```

8. Reiniciar el sistema

```bash
reboot
```






