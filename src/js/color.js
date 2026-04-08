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
            newColor.classList.add('p-5', 'w-64', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 'items-center', 'border', 'border-sky-50/30'); // le agrega la clase card
            grid.appendChild(newColor); // agrega el nuevo div al grid
            let miColor = generateNewColor(); //genera un color HEX aleatorio y lo guarda en la variable miColor
            let miRGB = hexToRGB(miColor); // convierte el color HEX a RGB y lo guarda en la variable miRGB
            let miHSL = rgbToHSL(miRGB.r, miRGB.g, miRGB.b); // convierte el color RGB a HSL y lo guarda en la variable miHSL
            newColor.style.backgroundColor = miColor; // le asigna un color de fondo al nuevo div usando la función generateNewColor
            newColor.style.color= "#ffffff"; // le asigna un color de texto blanco al nuevo div
            newColor.classList.add('flex', 'flex-col', 'items-center'); // le agrega las clases para centrar el texto dentro del nuevo div
            newColor.innerHTML = `
                <p class="bg-black/30 rounded-lg p-1 mb-1">HEX: ${miColor}</p>
                <p class="bg-black/30 rounded-lg p-1 mb-1">RGB: (${miRGB.r}, ${miRGB.g}, ${miRGB.b})</p>   
                <p class="bg-black/30 rounded-lg p-1 mb-1">HSL: (${miHSL.h}, ${miHSL.s}, ${miHSL.l})</p>
            `;
        }
        console.log(miSelectColor);

        //Temporizador para mostrar el toast de generador de paleta success por 5 segundos
        let toastSuccess = document.getElementById("toast-success");
        //Mostrar el toast (le quitamos 'hidden')
        toastSuccess.classList.remove("hidden");

        setTimeout(function(){
            toastSuccess.classList.add("hidden");
        },2000);//Tiempo de espera en milisegundos (2segundos)
       
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
            return hexColorRep;
        
        }

        function hexToRGB(hex){
            let r = parseInt(hex.substring(1,3),16);
            let g = parseInt(hex.substring(3,5),16);
            let b = parseInt(hex.substring(5,7),16);
            return { r: r, g: g, b: b }
        }

        function rgbToHSL(r, g, b) {
            // Paso 1 - convertir de 0-255 a 0-1
            r = r / 255;
            g = g / 255;
            b = b / 255;

            // Paso 2 - encontrar max y min
            let max = Math.max(r,g,b);
            let min = Math.min(r,g,b);

            // Paso 3 - calcular L
            let l = (max + min) / 2;

            // Paso 4 - calcular S
            let s;
            if (l <= 0.5) {
                s = (max - min) / (max + min);
            } else {
                s = (max - min) / (2 - max -min);
            }

            // Paso 5 - calcular H
            let h;
            if (max === r) {
                h = (g - b) / (max - min);
            } else if (max === g) {
                h = 2 + (b - r) / (max - min);
            } else {
                h = 4 + (r - g) / (max - min);
            }

            // Paso 6 - convertir H a grados y S y L a porcentaje
            h = h * 60;
            //Si h es negativo, le sumamos 360 para que dé la vuelta al círculo 
            if(h<0){
                h = h + 360;
            }

            return { 
                h: Math.round(h),
                s: Math.round(s * 100) + "%", 
                l: Math.round(l * 100) + "%",
            } 
        }

        

       