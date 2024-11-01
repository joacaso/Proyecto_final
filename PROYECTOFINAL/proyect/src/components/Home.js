import React, { useState } from 'react';
import './RecetaDetallada.css';




// Datos de las recetas
const recetasDetalladas = {
    PolloALaParrilla: {
        nombre: 'Pollo a la Parrilla',
        imagen: '/img/pollo.jpg', 
        ingredientes: [
            '4 piezas de pollo (piernas o pechugas)',
            '1 cucharadita de sal',
            '1 cucharadita de pimienta',
            '2 cucharadas de aceite de oliva',
            '1 cucharada de jugo de limón',
            '1 diente de ajo picado',
            'Opcional: hierbas frescas como romero o tomillo',
            'Papas para acompañar',
            'Ensalada mixta',
            'Limón para decorar'
        ],
        pasos: [
            'Marinar el pollo con sal, pimienta, aceite de oliva, jugo de limón y ajo. Dejar reposar al menos 30 minutos.',
            'Precalentar la parrilla o asador.',
            'Mientras tanto, preparar las papas: lavarlas, cortarlas en gajos y condimentarlas.',
            'Preparar la ensalada con los vegetales de su preferencia.',
            'Colocar el pollo en la parrilla y cocinar cada lado por 6-8 minutos, o hasta que esté bien cocido.',
            'En la misma parrilla, cocinar las papas hasta que estén doradas.',
            'Servir el pollo con las papas, la ensalada y decorar con rodajas de limón.'
        ]
    },
    SandwichJamonQueso: {
        nombre: 'Sándwich de Jamón y Queso',
        imagen: '/img/sandwich.jpg',
        ingredientes: [
            '2 rebanadas de pan de molde',
            '2 rebanadas de jamón',
            '2 rebanadas de queso',
            '1 cucharada de mantequilla',
            'Tomate en rodajas',
            'Lechuga fresca',
            'Pepinillos en rodajas',
            'Mayonesa al gusto',
            'Mostaza al gusto',
            'Sal y pimienta'
        ],
        pasos: [
            'Untar mantequilla en la parte exterior de las rebanadas de pan.',
            'Untar mayonesa y mostaza en la parte interior del pan.',
            'Colocar una capa de lechuga sobre una rebanada.',
            'Agregar las rodajas de tomate y sazonar con sal y pimienta.',
            'Colocar el jamón y el queso.',
            'Añadir los pepinillos.',
            'Cerrar el sándwich con la otra rebanada.',
            'Calentar una sartén y dorar el sándwich por ambos lados hasta que el queso se derrita.',
            'Cortar en diagonal y servir caliente.'
        ]
    },
    EspaguetisCarbonara: {
        nombre: 'Espaguetis a la Carbonara',
        imagen: '/img/pasta.jpg',
        ingredientes: [
            '400g de espaguetis',
            '200g de panceta o tocino en cubos',
            '4 huevos grandes',
            '100g de queso parmesano rallado',
            '50g de queso pecorino rallado',
            'Sal y pimienta negra recién molida',
            '4 dientes de ajo',
            'Aceite de oliva',
            'Perejil fresco picado',
            'Agua para la pasta'
        ],
        pasos: [
            'Poner a hervir una olla grande con agua salada.',
            'Mientras tanto, dorar la panceta en una sartén grande hasta que esté crujiente.',
            'En un bowl, batir los huevos con los quesos rallados y bastante pimienta negra.',
            'Cocinar los espaguetis en el agua hirviendo hasta que estén al dente.',
            'Reservar una taza del agua de cocción antes de escurrir la pasta.',
            'Agregar la pasta a la sartén con la panceta y remover bien.',
            'Retirar del fuego y agregar la mezcla de huevos y queso, revolviendo rápidamente.',
            'Añadir un poco del agua reservada si es necesario para crear una salsa cremosa.',
            'Servir inmediatamente con más queso rallado y perejil picado por encima.'
        ]
    },
    PizzaCasera: {
        nombre: 'Pizza Casera',
        imagen: '/img/pizza.jpg',
        ingredientes: [
            '500g de harina de trigo',
            '7g de levadura seca',
            '1 cucharadita de sal',
            '1 cucharadita de azúcar',
            '2 cucharadas de aceite de oliva',
            '300ml de agua tibia',
            'Salsa de tomate',
            'Mozzarella rallada',
            'Orégano',
            'Toppings a elección'
        ],
        pasos: [
            'Mezclar la harina y la sal en un bowl grande.',
            'Disolver la levadura y el azúcar en agua tibia, dejar reposar 5 minutos.',
            'Hacer un hueco en el centro de la harina y agregar la mezcla de levadura y el aceite.',
            'Amasar durante 10 minutos hasta obtener una masa suave.',
            'Dejar levar en un lugar cálido por 1 hora o hasta que duplique su tamaño.',
            'Precalentar el horno a temperatura máxima.',
            'Estirar la masa y colocar en una bandeja.',
            'Agregar la salsa, el queso y los toppings.',
            'Hornear hasta que el queso se derrita y la masa esté dorada.'
        ]
    },
    EnsaladaCesar: {
        nombre: 'Ensalada César',
        imagen:'/img/ensalada.jpg',
        ingredientes: [
            '2 lechugas romanas',
            '100g de queso parmesano',
            'Pan para crutones',
            '2 pechugas de pollo',
            '2 huevos',
            '2 dientes de ajo',
            'Aceite de oliva',
            'Mostaza Dijon',
            'Salsa Worcestershire',
            'Jugo de limón'
        ],
        pasos: [
            'Cortar el pan en cubos y tostar con ajo y aceite para hacer los crutones.',
            'Cocinar las pechugas de pollo con sal y pimienta, luego cortarlas en tiras.',
            'Lavar y cortar la lechuga en trozos grandes.',
            'Para la salsa, mezclar yemas de huevo, mostaza, ajo, jugo de limón y salsa Worcestershire.',
            'Agregar aceite de oliva en hilo fino mientras se bate para emulsionar.',
            'En un bowl grande, mezclar la lechuga con la salsa.',
            'Agregar el pollo, los crutones y queso parmesano en láminas.',
            'Terminar con pimienta negra recién molida.',
            'Servir inmediatamente para mantener los crutones crujientes.'
        ]
    },
    TacosAlPastor: {
        nombre: 'Tacos al Pastor',
        imagen: '/img/taco.jpg',
        ingredientes: [
            '1 kg de carne de cerdo en lonchas finas',
            '2 piñas',
            '2 cebollas',
            'Cilantro fresco',
            '10 tortillas de maíz',
            'Para la marinada:',
            '3 chiles guajillo',
            '2 chiles ancho',
            '1/2 taza de jugo de piña',
            '1/4 taza de vinagre',
            '2 dientes de ajo',
            '1 cucharadita de comino',
            'Sal al gusto'
        ],
        pasos: [
            'Remojar los chiles en agua caliente por 20 minutos, luego licuarlos con el jugo de piña, vinagre, ajo, comino y sal.',
            'Marinar la carne con esta mezcla por al menos 4 horas o toda la noche.',
            'Cortar la piña y la cebolla en rodajas finas.',
            'Precalentar la parrilla o sartén a fuego alto.',
            'Cocinar la carne marinada hasta que esté dorada y crujiente en los bordes.',
            'Calentar las tortillas en la misma parrilla.',
            'Servir la carne en las tortillas, topped con piña, cebolla y cilantro picado.',
            'Acompañar con salsa de su preferencia.'
        ]
    },
    CurryDePollo: {
        nombre: 'Curry de Pollo',
        imagen: '/img/curry-pollo.jpg',
        ingredientes: [
            '500g de pechuga de pollo en cubos',
            '1 cebolla grande picada',
            '3 dientes de ajo picados',
            '1 lata de leche de coco',
            '2 cucharadas de pasta de curry rojo',
            '2 cucharadas de aceite vegetal',
            '1 pimiento rojo en tiras',
            '1 zanahoria en rodajas',
            '100g de judías verdes',
            'Cilantro fresco',
            'Arroz jazmín para servir'
        ],
        pasos: [
            'Calentar el aceite en una sartén grande y sofreír la cebolla y el ajo hasta que estén transparentes.',
            'Agregar la pasta de curry y cocinar por 1-2 minutos hasta que esté fragante.',
            'Añadir el pollo y cocinar hasta que esté dorado por fuera.',
            'Incorporar la leche de coco y llevar a ebullición.',
            'Agregar las verduras y cocinar a fuego lento por 15-20 minutos.',
            'Sazonar con sal al gusto y agregar cilantro picado.',
            'Servir caliente sobre arroz jazmín.'
        ]
    },
    LasañaDeCarneYEspinacas: {
        nombre: 'Lasaña de Carne y Espinacas',
        imagen: '/img/lasaña.jpg',
        ingredientes: [
            '12 láminas de pasta para lasaña',
            '500g de carne molida',
            '300g de espinacas frescas',
            '1 cebolla picada',
            '2 dientes de ajo picados',
            '800g de salsa de tomate',
            '500g de queso ricotta',
            '200g de queso mozzarella rallado',
            '100g de queso parmesano rallado',
            '2 huevos',
            'Aceite de oliva',
            'Sal y pimienta'
        ],
        pasos: [
            'Precalentar el horno a 180°C.',
            'En una sartén, cocinar la carne con cebolla y ajo hasta que esté dorada.',
            'Agregar la salsa de tomate y cocinar por 10 minutos. Reservar.',
            'En otra sartén, cocinar las espinacas hasta que se marchiten.',
            'Mezclar la ricotta con los huevos, sal y pimienta.',
            'En un molde, poner una capa de salsa de carne, luego pasta, ricotta, espinacas y mozzarella.',
            'Repetir las capas terminando con mozzarella y parmesano.',
            'Hornear por 40-45 minutos hasta que esté dorada y burbujeante.',
            'Dejar reposar 10 minutos antes de servir.'
        ]
    },
    SalmonAlHorno: {
        nombre: 'Salmón al Horno con Limón y Eneldo',
        imagen: '/img/salmon.jpg',
        ingredientes: [
            '4 filetes de salmón',
            '2 limones',
            '4 cucharadas de mantequilla',
            '4 ramitas de eneldo fresco',
            '2 dientes de ajo picados',
            'Sal y pimienta al gusto',
            'Aceite de oliva',
            'Papas pequeñas para acompañar',
            'Espárragos verdes'
        ],
        pasos: [
            'Precalentar el horno a 200°C.',
            'Colocar los filetes de salmón en una bandeja para horno.',
            'Mezclar la mantequilla derretida con el ajo picado, el jugo de un limón y el eneldo picado.',
            'Verter esta mezcla sobre los filetes de salmón.',
            'Sazonar con sal y pimienta.',
            'Cortar el otro limón en rodajas y colocar sobre el salmón.',
            'Agregar las papas y los espárragos alrededor, rociados con aceite de oliva.',
            'Hornear por 15-20 minutos o hasta que el salmón esté cocido y las verduras tiernas.',
            'Servir inmediatamente, decorando con más eneldo fresco si se desea.'
        ]
    },
    TiramisuClasico: {
        nombre: 'Tiramisú Clásico',
        imagen: '/img/tiramisu.jpg',
        ingredientes: [
            '500g de queso mascarpone',
            '4 huevos (yemas y claras separadas)',
            '100g de azúcar',
            '300ml de café fuerte, enfriado',
            '24-30 bizcochos de soletilla',
            '50ml de licor Marsala o ron (opcional)',
            'Cacao en polvo para espolvorear'
        ],
        pasos: [
            'Batir las yemas con la mitad del azúcar hasta que estén pálidas y espumosas.',
            'Agregar el mascarpone y mezclar hasta obtener una crema suave.',
            'En otro bowl, batir las claras con el resto del azúcar hasta formar picos firmes.',
            'Incorporar suavemente las claras a la mezcla de mascarpone.',
            'Mezclar el café con el licor si se usa.',
            'Sumergir brevemente cada bizcocho en el café y colocar una capa en el fondo de un molde.',
            'Cubrir con una capa de la mezcla de mascarpone.',
            'Repetir las capas, terminando con la crema de mascarpone.',
            'Refrigerar por al menos 4 horas o toda la noche.',
            'Antes de servir, espolvorear generosamente con cacao en polvo.'
        ]
    }
};

const Receta = ({ nombreReceta }) => {
    const receta = recetasDetalladas[nombreReceta];
    if (!receta) return null;

    return (
        <div className="receta-contenido">
            <h2>{receta.nombre}</h2>
                <img src={receta.imagen} alt={receta.nombre} className="imagen-receta" />   
            <div className="seccion-ingredientes">
                <h3>Ingredientes:</h3>
                <ul>
                    {receta.ingredientes.map((ingrediente, index) => (
                        <li  key={index}>{ingrediente}</li>
                    ))}
                </ul>
            </div>
            
            <div className="seccion-pasos">
                <h3>Preparación:</h3>
                <ol>
                    {receta.pasos.map((paso, index) => (
                        <li key={index}>{paso}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

const ListaRecetas = () => {
    const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

    return (
        <div className="contenedor-principal">
            <div className="selector-recetas">
                <h1>Libro de Recetas</h1>
                
                <div className="grid-botones">
                    {Object.entries(recetasDetalladas).map(([key, receta]) => (
                        <button
                            key={key}
                            onClick={() => setRecetaSeleccionada(key)}
                            className={`boton-receta ${recetaSeleccionada === key ? 'seleccionado' : ''}`}
                        >
                            {receta.nombre}
                        </button>
                    ))}
                </div>
            </div>

            {recetaSeleccionada && (
                <Receta nombreReceta={recetaSeleccionada} />
            )}
        </div>
    );
};

export default ListaRecetas;