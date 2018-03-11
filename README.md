# Web Angular2 - Primeros pasos con Angular 2

## Índice de contenidos

1. Capturas
2. Versiones
3. Mini-manual Angular 2

Proyecto con componentes de Angular2.

* Componentes
* Herencia
* Routing
* ReactiveForms
* Services

------

## 1. Capturas

### Ejemplo de Recetario

Existe herencia entre los siguientes componentes

**RecetarioComponente** : componente padre (imagen 1) con una lista de recetas obtenida mediante un servicio de Angular 2.

![RecetarioComponent](https://github.com/Aingeru72/Angular2-PrimerosPasos/blob/master/capturas/captura-recetario.png)
-- *imagen 1* --

**RecetarioComponente/RecetaDetalle** : componenete hijo para mostrar el detalle de cada receta (imagen2).

![RecetaDetalle](https://github.com/Aingeru72/Angular2-PrimerosPasos/blob/master/capturas/captura-recetaDetalle.png)
-- *imagen 2* --

**RecetarioComponente/FormularioNuevaReceta** : formulario reactivo de Angular2 que se muestra en un modal para añadir nuevas recetas (imagen3).

![FormularioNuevaReceta](https://github.com/Aingeru72/Angular2-PrimerosPasos/blob/master/capturas/captura-formularioNuevaReceta.png)
-- *imagen 3* --

------

## 2. Versiones

* **Tag 0.1** : Receta --> Componente para mostrar una Receta con lista desplegable para los ingredientes.
* **Tag 0.2** : Propiedades --> Ejemplos de uso de las propiedades de Angular.
* **Tag 0.3** : Usuario --> Aprender a usar los modelos de clase en Angular.
* **Tag 0.4** : Concesionario --> Estructura con varios componentes y herencia entre ellos.
* **Tag 0.5** : Recetario --> Ejemplo con todos los componentes anteriores cargados mediante servicios de Angular en /providers en formato JSON ( *Añadida dependencia para jQuery* ).
* **Tag 0.6** : Plantilla --> Ejemplos del componenete Template condicionados.
* **Tag 0.7** : Tareas --> Lista de tareas cargadas desde un servidor creado con [JsonPlaceholder](https://jsonplaceholder.typicode.com/)

------

## 3. Mini-manual para proyectos Angular

### Arrancar el proyecto

1. Descargar el código y abrirlo en tu IDE preferido.
2. Abrir consola de comandos en la carpeta del proyecto y ejecutar las siguientes lineas:
    ⋅⋅1. `npm install` para instalar las dependencias guardadas en `node-modules`.
    ⋅⋅2. Abrir servidor de desarrollo con `ng serve --open`.

### Como generar el proyecto Angular 2

0. Instalar [Node.js](https://nodejs.org/es/) para poder instalar desde linea de comandos con `npm` (En caso de instalar y que la consola no reconozca el comando `npm` comprobar que se ha creado la variable de entorno y reiniciar el ordenador).
1. Instalar Angular CLI (*Comand Line Interface*:  la herramienta de Angular para facilitar tareas), mediante `npm install -g @angular/cli`.
2. Crear estructura de proyecto mediante `ng new NombreDelProyecto` situandonos en la carpeta donde quereremos crear el proyecto.

Este proyecto ha sido generado mediante [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

### Estructura del proyecto Angular2

Ejecutar `ng generate component <<component-name>>` para generar un nuevo componente. También se pueden crear: `ng generate directive|pipe|service|class|guard|interface|enum|module`. Los componenete creados de esta manera, se añadiran al archivo `app.module.ts`.

## Abrir en servidor de desarrollo

Ejecutar `ng serve --open` parar lanzar en el navegador un servidor de desarrollo en `http://localhost:4200/`. La app se actualizará automáticamente cada vez que se guarden los cambios en el area de trabajo.

### Ejecutar test unitarios

Ejecutar `ng test` para ejecutar test unitarios mediante [Karma](https://karma-runner.github.io).

### Ejecutar test extremo-a-extremo (end-to-end)

Ejecutar `ng e2e` para ejecutar test exteremo-a-extremo (end-to-end) mediante [Protractor](http://www.protractortest.org/).

### Más ayuda

Para más información acerca de Angular CLI usar `ng help` o entrar en [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
