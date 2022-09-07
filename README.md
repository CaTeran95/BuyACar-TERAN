# Buy-me-A-Car

Este portal proporciona herramientas sencillas para la adquisición de vehículos de diferentes marcas y categorías, dispone de información acerca de las características principales de los vehículos y posteriormente se aspira incluir también herramientas para administrar agendas para test drives y cálculo de tasas de interés para adquisición por préstamos. Para este proyecto se ha tomado referencia de otros proyectos realizados por estudiantes de Coderhouse, además de los elementos principales de páginas para la exhibición y promoción de vehículos en Colombia, para marcas como Chevrolet, Kia, Honda, Suzuki y Yamaha.

Este proyecto se desarrolla como parte de los desafíos propuestos para el curso de React JS en Coderhouse. Comenzó como un proyecto para renta de vehículos, pero se ha modificado debido a que una tienda virtual presenta un reto más coherente con las herramientas proporcionadas por el plan de estudios.

El principal objetivo es integrar las funcionalidades que se gestionarán desde el lado del cliente para la navegación y disponer las herramientas e interfaces que se requieren para la interacción con el servidor. Aparte de exhibir la información habitual de una landing page, el portal asume independientemente el trabajo de administrar la comercialización de los items dispuestos en el catálogo.

Para el momento de esta entrega (Septiembre 6 de 2022) sólamente se ha implementado el catálogo, correspondiendo a los requerimientos de la primera entrega parcial.

## Catálogo

El catálogo cuenta con 9 vehículos de dos tipos: Automóviles y SUVs. Cada categoría se puede acceder sin problema por medio de los **enlaces en la barra de navegación** dispuesta en la parte superior de la página. Sólo hace falta posar el cursor por encima para desplegar las opciones. Cada enlace se ha configurado por medio de **React-Router-DOM** para actualizar una página de catálogo donde se filtra el contenido correspondiente a la selección.

## Página de detalle

La sección de detalle se accede para cualquier vehículo cuando se selecciona el item en el catálogo. En ella se muestra información que no aparece en las fichas del catálogo debido a su tamaño, además de la opción de agregar cierta cantidad de items al carrito de compras por medio de un componente ItemCounter, desarrollado y perfeccionado en clase.

## Acceso a la base de datos

Por medio de funciones almacenadas en la carpeta **helper** se ha gestionado la carga de los datos requeridos para el correcto funcionamiento del catálogo, en esta carpeta:
1. Se almacena la base de datos principal desde donde se importan también las imágenes de los vehículos.
2. Se simulan las solicitudes a un servidor por medio de **promises** y se suministra la información de la base de datos a los componentes que la requieren para el renderizado.

## Librerías adicionales:

1. React-bootstrap: Se utilizó inicialmente para generar componentes de forma didáctica, pero luego se descartó para crear componentes completamente personalizados.
2. Fort-awesome: Esta librería se utiliza para importar los íconos del proyecto hacia los componentes, tales como los botones para cerrar ventanas emergentes o para implementar funciones en el carrito de compras.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
