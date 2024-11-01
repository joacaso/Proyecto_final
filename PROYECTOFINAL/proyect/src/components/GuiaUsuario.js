import './manual.css';

export default function Component() {
    return (
        <div>
            <section className="recetas">
    <section id="guia-usuario" className="guia-usuario">
        <h2>Guía para el Usuario</h2>
        <p>Esta guía te explicará cómo aprovechar al máximo la página web <strong>Black Kitchen</strong>.</p>
        <h3>¿Qué es Black Kitchen?</h3>
        <p>Black Kitchen es una plataforma diseñada para facilitar la decisión de qué cocinar hoy, ofreciendo un paso a paso detallado para cada receta.</p>
        <h3>¿Cómo Utilizarla?</h3>
        <ul>
            <li><b>Explora Recetas:</b> Encuentra una variedad de recetas que se ajustan a tus preferencias y requerimientos.</li>
            <li><b>Detalles de Recetas:</b> Cada receta incluye una lista de ingredientes, instrucciones detalladas y tips para obtener los mejores resultados.</li>
        </ul>
    </section>
    <a href="#top" className="volver-arriba">Regresar al inicio</a>

    <div className="separador"></div>

    <section id="barra-superior" className="barra-superior">
        <h2>Menú Superior</h2>
        <p>En el menú superior encontrarás cuatro opciones para navegar por el sitio:</p>

        <h3>Opciones de Navegación</h3>
        <ul>
            <li>
                <b>Inicio:</b>
                <p>Te dirige a la página principal, donde puedes ver recetas destacadas y novedades.</p>
            </li>
            <li>
                <b>Iniciar Sesión:</b>
                <p>Permite acceder a tu cuenta o registrarte si aún no tienes una.</p>
            </li>
            <li>
                <b>Manual:</b>
                <p>Accede a este manual del usuario, donde se explican los detalles de uso del sitio.</p>
            </li>
        </ul>
    </section>
    <a href="#top" className="volver-arriba">Regresar al inicio</a>

    <div className="separador"></div>

    <section id="iniciar-sesion" className="iniciar-sesion">
        <h2>Iniciar Sesión</h2>
        <p>Sigue estos pasos para iniciar sesión:</p>
        <ul>
            <li><b>1. Accede a la página de inicio de sesión:</b> Desde la página principal, selecciona "Iniciar Sesión".</li>
            <li><b>2. Ingresa tus datos:</b> Introduce tu usuario y contraseña en los campos indicados si ya tienes cuenta.</li>
            <li><b>3. Pulsa "Entrar":</b> Si los datos son correctos, se abrirá la página principal.</li>
        </ul>
        <h3>Problemas Comunes</h3>
        <ul>
            <li><b>Usuario o contraseña incorrectos:</b> Verifica tus datos e intenta nuevamente.</li>
            <li><b>Campos vacíos:</b> Asegúrate de completar ambos campos antes de iniciar sesión.</li>
        </ul>
    </section>

    <a href="#top" className="volver-arriba">Regresar al inicio</a>

    <div className="separador"></div>

    <section id="registro" className="registro">
        <h2>Registro</h2>
        <p>Para registrarte en la plataforma, sigue estos pasos:</p>
        <ul>
            <li><b>1. Selecciona "Registrar":</b> Desde la pantalla de inicio de sesión, selecciona "Registrar".</li>
            <li><b>2. Completa los campos:</b> Ingresa tu nombre de usuario, correo, contraseña y confírmala.</li>
            <li><b>3. Confirma que las contraseñas coincidan:</b> Si no coinciden, verás un mensaje de error.</li>
            <li><b>4. Pulsa "Registrarse":</b> Si los datos son válidos, podrás iniciar sesión con tu nueva cuenta.</li>
        </ul>
        <h3>Errores Comunes</h3>
        <ul>
            <li><b>Campos incompletos:</b> Llena todos los campos para continuar.</li>
            <li><b>Contraseñas distintas:</b> Asegúrate de que coincidan.</li>
            <li><b>Email no válido:</b> Verifica que el formato sea correcto.</li>
        </ul>
    </section>

    <a href="#top" className="volver-arriba">Regresar al inicio</a>

    <div className="separador"></div>

    <section id="inicio-pagina" className="inicio-pagina">
        <h2>Inicio de la Página</h2>
        <p>En esta sección encontrarás recetas organizadas según tus necesidades. Al seleccionar una, podrás ver sus detalles.</p>

        <h3>Recetas por Categoría</h3>
        <p>Las recetas están organizadas por tipo de alimentación:</p>
        <ul>
            <li><b>General:</b> Recetas comunes, ideales para toda la familia.</li>
            <li><b>Celiacos:</b> Platos sin gluten, como pastas de arroz o pizza de garbanzos.</li>
            <li><b>Sin Lácteos:</b> Opciones sin productos lácteos, como risotto de champiñones.</li>
            <li><b>Veganos:</b> Recetas sin productos de origen animal, como hamburguesas de lentejas.</li>
            <li><b>Diabéticos:</b> Opciones bajas en azúcar, como ensaladas con pollo.</li>
            <li><b>Vegetarianos:</b> Comidas sin carne, como lasaña de verduras.</li>
        </ul>

        <h3>Navegar por las Recetas</h3>
        <ul>
            <li>Desplázate para ver las recetas.</li>
            <li>Selecciona la que te interese para ver detalles.</li>
            <li>Puedes regresar al inicio usando el logo o el botón "Regresar al Inicio".</li>
        </ul>
    </section>

    <a href="#top" className="volver-arriba">Regresar al inicio</a>

    <div className="separador"></div>

    <section id="uso-recetas" className="uso-recetas">
        <h2>Uso de las Recetas</h2>
        <p>Cada receta incluye ingredientes, instrucciones detalladas y un tiempo estimado. Consulta el video, si está disponible, para ver una guía visual.</p>

        <h3>Elementos de una Receta</h3>
        <ul>
            <li><b>Ingredientes:</b> Lista clara de los ingredientes necesarios.</li>
            <li><b>Instrucciones:</b> Indicaciones paso a paso para preparar el platillo.</li>
            <li><b>Tiempo de Preparación:</b> Estimado de tiempo para cocinar.</li>
            <li><b>Porciones:</b> Cantidad de porciones que produce la receta.</li>
            <li><b>Dificultad:</b> Nivel de dificultad indicado en algunas recetas.</li>
            <li><b>Consejos:</b> Recomendaciones adicionales.</li>
            <li><b>Videos:</b> Videos tutoriales, si están disponibles.</li>
        </ul>
    </section>
    <a href="#top" className="volver-arriba">Regresar al inicio</a>

    <div className="separador"></div>

    <section id="consejos-cocina" className="consejos-cocina">
        <h2>Consejos para Cocinar</h2>
        <p>Algunos tips para mejorar tus habilidades culinarias:</p>

        <ul>
            <li><b>Lee toda la receta antes de empezar:</b> Asegúrate de tener todo lo necesario.</li>
            <li><b>Mise en Place:</b> Prepara los ingredientes con anticipación.</li>
            <li><b>Adapta a tu gusto:</b> Modifica recetas a tu preferencia.</li>
        </ul>
    </section>
</section>


            <a href="#top" className="volver-arriba">Volver al inicio</a>
        </div>
    );
}