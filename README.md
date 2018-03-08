# Web Angular2 - Primeros pasos para aprender a usar Angular 2

Proyecto con componentes de Angular2.

* Componentes
* Herencia
* Routing
* ReactiveForms
* Services

## Capturas

### Ejemplo de Recetario

Existe herencia entre los siguiente componentes

RecetarioComponente : componente padre (imagen 1) con una lista de recetas obtenida mediante un servicio de Angular 2.

![RecetarioComponent](https://github.com/Aingeru72/Angular2-PrimerosPasos/blob/master/capturas/captura-recetario.png)

RecetarioComponente/RecetaDetalle : componenete hijo para mostrar el detalle de cada receta (imagen2).

![RecetaDetalle](https://github.com/Aingeru72/Angular2-PrimerosPasos/blob/master/capturas/captura-recetaDetalle.png)

RecetarioComponente/FormularioNuevaReceta : formulario reactivo de Angular2 que se muestra en un modal para añadir nuevas recetas (imagen3).

![FormularioNuevaReceta](https://github.com/Aingeru72/Angular2-PrimerosPasos/blob/master/capturas/captura-formularioNuevaReceta.png)

## Arrancar el proyecto

1. Descargar el código y abrirlo en tu IDE preferido.
2. Abrir consola de comandos en la carpeta del proyecto y ejecutar las siguientes lineas:
    2.1. `npm install` para instalar las dependencias guardadas en `node-modules`.
    2.2. Abrir servidor de desarrollo con `ng serve --open`.

## Como generar el proyecto Angular 2

Ejecutar `ng build` para crear un nuevo proyecto. Los archivos de desarrollo se crearan en la carpeta `dist/` y el producto final en `-prod`.

Este proyecto ha sido generado mediante [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Estructura del proyecto Angular2

Ejecutar `ng generate component <<component-name>>` para generar un nuevo componente. También se pueden crear: `ng generate directive|pipe|service|class|guard|interface|enum|module`. Los componenete creados de esta manera, se añadiran al archivo `app.module.ts`.

## Abrir en servidor de desarrollo

Ejecutar `ng serve --open` parar lanzar en el navegador un servidor de desarrollo en `http://localhost:4200/`. La app se actualizará automáticamente cada vez que se guarden los cambios en el area de trabajo.

## Running unit tests

Ejecutar `ng test` para ejecutar test unitarios mediante [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Ejecutar `ng e2e` para ejecutar test exteremo-a-extremo (end-to-end) mediante [Protractor](http://www.protractortest.org/).

## Más ayuda

Para más información acerca de Angular CLI usar `ng help` o entrar en [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
