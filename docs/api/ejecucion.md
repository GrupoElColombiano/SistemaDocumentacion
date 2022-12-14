---
title: Ejecución
---

# Ejecución

La ejecucion del proceso de migración se realiza de manera automáticas cada 60 minutos. Esta tarea se programa de manera automática al momento de iniciar el servicio. Si se requiere cambiar el tiempo del intervalo de ejecucion, se debe modificar el archivo `index.js` en la linea 116.

## Consideraciones

Una opción de mejora para el presente software es contar con un modelo en Mongo que permita registar los parámetros de configuracion que parametrice el funcionamiento del proceso, de esta manera se podria modificar el tiempo de ejecucion del proceso sin necesidad de modificar el codigo fuente.

## Solución de errores

```bash
reboot
```

Eso es todo

