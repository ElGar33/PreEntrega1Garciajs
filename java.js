function simuladorMixto() {
    console.log("¡Bienvenido al Simulador de Compras de Videojuegos!");

    let saldo = parseFloat(prompt("Por favor, introduce tu saldo inicial: $"));
    const juegos = {
        "FIFA 25": 60.0,
        "Call of Duty 12": 50.0,
        "Minecraft": 25.0
    };

    while (true) {
        console.log("Juegos disponibles para comprar:");
        for (let juego in juegos) {
            console.log(`- ${juego} ($${juegos[juego]})`);
        }

        const seleccion = prompt("Selecciona un juego para comprar (o escribe 'salir' para salir): ");

        if (seleccion.toLowerCase() === "salir") {
            break;
        }

        if (juegos.hasOwnProperty(seleccion)) {
            const precio = juegos[seleccion];
            if (saldo >= precio) {
                saldo -= precio;
                console.log(`¡Felicidades! Has comprado ${seleccion}. Tu saldo restante es: $${saldo}.`);
            } else {
                console.log("Lo siento, no tienes suficiente saldo para comprar este juego.");
            }
        } else {
            console.log("Lo siento, el juego seleccionado no está disponible.");
        }
        
        const continuar = prompt("¿Deseas seguir comprando? (s/n): ");
        if (continuar.toLowerCase() !== "s") {
            break;
        }
    }
}

simuladorMixto();