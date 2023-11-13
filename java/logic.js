// script.js
const acertijos = [
    { pregunta: "Ingresa el código", respuestas: ["445356532"] },

    { pregunta: "¿300 000 cm cuántos km son?", respuestas: ["3km"] },

    { pregunta: "Frente de este salón con desconocida ubicación se encuentra en reposo un objeto gracias a la tensión. Ingresa el código", respuestas: ["456"] },

    { pregunta: "Lugar frío que congela nuestros huesos, lugar frío que duerme nuestros dedos, lugar frío en donde no usamos cuadernos.", respuestas: ["0.041s"] },

    { pregunta: "Personas vestidas de blanco atraen nuestra atención, con aromas deliciosos roban nuestro corazón.", respuestas: ["54"] },

    { pregunta: ":¿A qué velocidad debe circular un auto de carreras para recorrer 113 km en un cuarto de hora?", respuestas: ["125,555m/s"] },

    { pregunta: "Lugar lleno de líricas invadido de silencio, lugar asombroso que no valoramos, textos polvorientos que al ver nos da asco.", respuestas: ["4,2x10 a la 10km"] },

    { pregunta: "Gigante calvo, gordo y gruñón, gigante ausente, feo y mandón, gigante relacionado con el orden de la institución ¿Qué lugar será?", respuestas: ["Hz"] },

    { pregunta: " Espacio de mandones, gordos, altos, viejos y pequeños, espacio de posibles soluciones en donde se ruega por lo imposible.", respuestas: ["4890HGKRTY67000DFTHJKNM…KL-MALO"] },

    { pregunta: "Un sicario dispara una pistola de la cual sale una bala disparada a 573 m/s, y este mismo lleva un ángulo de elevación de 62° respecto a la horizontal. Calcula la ALTURA máxima que obtuvo la bala", respuestas: ["13513,687m"] },

    { pregunta: "Un sicario dispara una pistola de la cual sale una bala disparada a 573 m/s, y este mismo lleva un ángulo de elevación de 62°, respecto a la horizontal. AHORA CALCULA EL ALCANCE.", respuestas: ["65179,399m"] },

    { pregunta: "Calma nuestra sed en las mañanas activas y llenas de calor.", respuestas: ["f=1/T"] },

    { pregunta: "Fila eterna para pedir fiado ¿Qué será?", respuestas: ["VHGIOTRT"] },

    { pregunta: " Un objeto realiza un movimiento circular uniforme acelerado y describe un diámetro de 0.8 m y efectúa una vuelta completa en 2.0 segundos. Calcula la velocidad Lineal", respuestas: ["12,566m/s"] },

    { pregunta: " Lugar desagradable, lugar en donde pasamos 6 horas sentado, lugar que pintamos y a los dos días despintamos, ¿qué raro no?", respuestas: ["PERDISTE_EL_AÑO_OME_MALO."] },

    { pregunta: "Ingresa el código final 🤩", respuestas: ["MELOSKYS"] },
];

let acertijoActual = 0;

document.getElementById("acertijo-descripcion").innerText = acertijos[acertijoActual].pregunta;

function verificarRespuesta() {
    const respuestaInput = document.getElementById("respuesta-input");
    const resultadoContainer = document.getElementById("resultado-container");

    const respuestaUsuario = respuestaInput.value.trim();
    const respuestasCorrectas = acertijos[acertijoActual].respuestas;

    if (respuestasCorrectas.includes(respuestaUsuario)) {
        if (acertijoActual === acertijos.length - 1) {
            // Es el último acertijo y la respuesta es correcta
            resultadoContainer.innerHTML = "¡Felicitaciones! ¡Has completado todos los acertijos!";
        } else {
            resultadoContainer.innerHTML = "¡Correcto! ¡Pasemos al siguiente acertijo!";
            acertijoActual++;
            mostrarSiguienteAcertijo();
        }
    } else {
        resultadoContainer.innerHTML = "Respuesta incorrecta. Inténtalo de nuevo.";
    }

    // Verificar si la respuesta es el código final
    if (respuestaUsuario.toLowerCase() === "meloskys") {
        resultadoContainer.innerHTML = "¡Felicitaciones! ¡Has completado todos los acertijos, reclama el premio con Juliana!";
    }

    respuestaInput.value = "";
}

function mostrarSiguienteAcertijo() {
    document.getElementById("acertijo-titulo").innerText = `Acertijo ${acertijoActual + 1}`;
    document.getElementById("acertijo-descripcion").innerText = acertijos[acertijoActual].pregunta;
    document.getElementById("resultado-container").innerHTML = "";
}
