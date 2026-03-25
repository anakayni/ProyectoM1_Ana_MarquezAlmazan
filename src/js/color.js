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
            
        }
        console.log(miSelectColor);

        // 2. Generar colores HEX aleatorios
        //Guardarlo en una lista
        // Mostrar cada color como una caja
    }