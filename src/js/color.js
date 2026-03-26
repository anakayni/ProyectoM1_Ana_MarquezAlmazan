//Usuario elige un número
//Guardar el número en una variable
//Repetir N veces:
//    → Generar un color HEX aleatorio
//    → Guardarlo en una lista
//Mostrar cada color como una caja de color en pantalla

    function saveValue() {
        // 1. Seleccionar un número de colores a generar
        let miSelectColor = document.getElementById("miSelectColor").value; // lee el select y guarda su valor en la variable miSelectColor
        let grid = document.getElementById("grid"); // selecciona el contenedor donde se mostrarán los colores  
        grid.innerHTML = ""; // limpia el contenido del grid para que no se acumulen los colores anteriores
        
        for (let i = 1; i<= miSelectColor; i++) {
            newColor = document.createElement("div"); // crea un nuevo div
            newColor.classList.add('p-4', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 'items-center', 'border', 'border-sky-50/30'); // le agrega la clase card
            grid.appendChild(newColor); // agrega el nuevo div al grid
            newColor.style.backgroundColor = generateNewColor(); // le asigna un color de fondo al nuevo div usando la función generateNewColor
        }
        console.log(miSelectColor);
       
    }
    // Lista de todos los caracteres posibles en un color HEX
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]  
    // Esta función recibe un número y devuelve el caracter en esa posición del array hexCharacters y genera el color HEX aleatorio
    function getCharacter(index) {
            return hexCharacters[index]
        }
        // Esta función genera un color HEX aleatorio como "#A3F2C1"
        function generateNewColor() {
            let hexColorRep = "#"
            // Un color HEX siempre tiene 6 caracteres, por eso repetimos 6 veces
            for (let index = 0; index < 6; index++){
                // Elegimos una posición aleatoria de la lista (0 al 15)
                const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
                // Agarramos el caracter en esa posición y lo agregamos al color
                hexColorRep += getCharacter(randomPosition)
            }
            // Regresamos el color completo, ejemplo: "#A3F2C1"
            return hexColorRep
        
        }