function mostrarNombre() {
    // Crear una cadena con los gatitos por edad de menor a mayor
    gatos.sort((a, b) => a.edad - b.edad);
    let cadena = "Los gatitos esperando adopción son:\n\n";
    for (let i = 0; i < gatos.length; i++) {
        cadena += `${i + 1}. ${gatos[i].nombre}\n`;
    }

    alert(cadena);
}

function verCaracteristicas() {
    const nombreGato = prompt("Ingrese el nombre del gatito:");
    // Buscar el gatito en el array
    const gato = gatos.find(gato => gato.nombre === nombreGato);
    if (gato) {
        alert(`Nombre: ${gato.nombre}\nSexo: ${gato.sexo}\nColor: ${gato.color} \nEdad: ${gato.edad}\nPersonalidad: ${gato.personalidad}\nPasatiempo: ${gato.pasatiempo}`);
    } else {
        alert("No se ha encontrado el gatito ingresado :(");
    }
}

function seleccionarGato() {
    let nombreGato = prompt("Ingrese el nombre del gatito que deseas adoptar:");
    let gatoSeleccionado = gatos.find(gato => gato.nombre === nombreGato);
    if (!gatoSeleccionado) {
        alert("Lo siento, no encontramos un gatito con ese nombre");
        return;
    }
    let confirmacion = confirm(`Has seleccionado a ${gatoSeleccionado.nombre}, es correcto?`); 
    if (confirmacion) {
        alert(`¡Has seleccionado a ${gatoSeleccionado.nombre}! Pronto estará listo para ir a su nuevo hogar :)`);
    }
}

function agregarGato() {
    var nombre = prompt("Ingrese el nombre del gato:");
    var sexo = prompt("Ingrese el sexo del gato (macho o hembra):");
    var color = prompt("Ingrese el color del gato:");
    var personalidad = prompt("Ingrese la personalidad del gato:");
    var edad = prompt("Ingrese la edad del gato:");
    var pasatiempo = prompt("Ingrese el pasatiempo del gato:");

    // Validar que el usuario haya ingresado una edad real
    if (!edad || isNaN(edad) || edad < 0 || edad > 30) {
        alert("La edad debe ser un valor posible.");
        return;
    }

        // Crear un objeto que represente al gato con la información ingresada
        var gato = {
            nombre: nombre,
            sexo: sexo,
            color: color,
            personalidad: personalidad,
            edad: edad,
            pasatiempo: pasatiempo
        };
        gatos.push(gato);
        alert('¡El gato' + nombre + "ha sido agregado a la lista! Pronto conseguirá un hogar");
    }

    while (true) {
        const opcion = prompt(
            "Bienvenido!! Un michiamigo te está esperando!! Elige una opción:\n\n" +
            "1. Ver gatitos esperando adopción\n" +
            "2. Ver características\n" +
            "3. Seleccionar gatito para adoptar\n" +
            "4. Queres dejar un gatito en adopción?\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                mostrarNombre();
                break;
            case "2":
                verCaracteristicas();
                break;
            case "3":
                seleccionarGato();
                break;
            case "4":
                agregarGato();
                break;
            case "5":
                alert("¡Adiós, esperamos qué vuelvas pronto! :3");
                break;
            default:
                alert("La opción no es válida, por favor ingresa una opción válida.");
                break;
        }
    }
