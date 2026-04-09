# 🎨 Colorfly Studio

> A color palette generator built with vanilla JavaScript, HTML, and CSS.  
> Generador de paletas de colores construido con JavaScript puro, HTML y CSS.

---

## 🌐 Live Demo / Demo en vivo

[Ver en GitHub Pages](https://anakayni.github.io/ProyectoM1_Ana_MarquezAlmazan/)

---

## 📖 Español

### ¿Qué es Colorfly Studio?

Colorfly Studio es una aplicación web que genera paletas de colores aleatorios. El usuario elige cuántos colores quiere (6, 8 o 9), presiona el botón **Generar** y la app crea tarjetas de colores mostrando el código en tres formatos:

- **HEX** — ejemplo: `#A3F2C1`
- **RGB** — ejemplo: `rgb(163, 242, 193)`
- **HSL** — ejemplo: `hsl(145, 70%, 75%)`

---

### 🧠 Mi proceso de aprendizaje

Este proyecto lo construí paso a paso mientras aprendía JavaScript. Estos son los conceptos que fui aprendiendo:

**1. Leer el valor de un `<select>`**
```javascript
let miSelectColor = document.getElementById("miSelectColor").value;
```
Aprendí que `getElementById` selecciona un elemento del HTML, y `.value` lee su valor actual.

**2. Crear elementos HTML con JavaScript**
```javascript
let newColor = document.createElement("div");
grid.appendChild(newColor);
```
Aprendí que JavaScript puede crear etiquetas HTML dinámicamente y agregarlas a la página.

**3. Limpiar el contenedor antes de generar**
```javascript
grid.innerHTML = "";
```
Aprendí que `innerHTML = ""` borra todo el contenido de un elemento, evitando que los colores se acumulen cada vez que presiono el botón.

**4. El ciclo `for` para repetir acciones**
```javascript
for (let i = 1; i <= miSelectColor; i++) {
    // crear una card por cada número
}
```
Aprendí que el `for` repite un bloque de código N veces, en este caso una vez por cada color a generar.

**5. Generar colores HEX aleatorios**
```javascript
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function generateNewColor() {
    let hexColorRep = "#";
    for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += getCharacter(randomPosition);
    }
    return hexColorRep;
}
```
Aprendí que un color HEX siempre tiene 6 caracteres del sistema hexadecimal (base 16), y que `Math.random()` genera números aleatorios entre 0 y 1.

**6. Convertir HEX a RGB**
```javascript
function hexToRGB(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return { r: r, g: g, b: b };
}
```
Aprendí que `substring()` corta partes de un texto, y que `parseInt("A3", 16)` convierte un número hexadecimal a número normal. El `#` está en la posición 0, por eso empezamos en 1.

**7. Convertir RGB a HSL**

Esta fue la parte más difícil. Aprendí que:
- Primero hay que convertir los valores de 0-255 a una escala de 0-1 (dividiendo entre 255)
- `Math.max()` y `Math.min()` ayudan a encontrar el color más brillante y el más oscuro
- La luminosidad (L) es el promedio entre max y min
- La saturación (S) usa una fórmula diferente según si L es mayor o menor a 0.5
- El tono (H) depende de cuál componente (R, G o B) es el máximo, y se multiplica por 60 para convertir a grados (0-360°)

**8. Scope (alcance) de las funciones**

Aprendí que las funciones deben vivir al mismo nivel para poder usarse entre sí. Si una función está dentro de otra, no se puede usar desde afuera.

---

### 🚀 Instrucciones de uso

1. Abre el archivo `index.html` en tu navegador, o visita la demo en GitHub Pages
2. Elige cuántos colores quieres generar: **6**, **8** o **9**
3. Presiona el botón **Generar**
4. Cada tarjeta muestra el color con sus códigos HEX, RGB y HSL

---

### 🛠️ Tecnologías usadas

- HTML5
- JavaScript (Vanilla, sin librerías)
- CSS (estilos)

---

### 📁 Estructura del proyecto

```
colorfly-studio/
├── index.html       ← estructura HTML
├── script.js        ← toda la lógica JavaScript
└── README.md        ← este archivo
```

---

### ▶️ Cómo ejecutar localmente

No necesitas instalar nada. Solo abre `index.html` en tu navegador.

```bash
# O si tienes VS Code, usa la extensión Live Server
# Click derecho en index.html → Open with Live Server
```

---

### 🌍 Cómo desplegar en GitHub Pages

1. Sube tu proyecto a un repositorio en GitHub
2. Ve a **Settings → Pages**
3. En **Source**, selecciona la rama `main` y la carpeta `/root`
4. Haz clic en **Save**
5. En unos minutos tu app estará en: `https://tu-usuario.github.io/nombre-del-repo`

---

---

## 📖 English

### What is Colorfly Studio?

Colorfly Studio is a web app that generates random color palettes. The user picks how many colors they want (6, 8, or 9), clicks the **Generate** button, and the app creates color cards showing each color in three formats:

- **HEX** — example: `#A3F2C1`
- **RGB** — example: `rgb(163, 242, 193)`
- **HSL** — example: `hsl(145, 70%, 75%)`

---

### 🧠 My Learning Process

This project was built step by step while learning JavaScript for the first time. Key concepts learned:

**Reading a `<select>` value**, creating HTML elements dynamically with `createElement` and `appendChild`, clearing a container with `innerHTML = ""`, using `for` loops to repeat actions, generating random HEX colors using `Math.random()` and base-16 character arrays, converting HEX to RGB using `substring()` and `parseInt()`, converting RGB to HSL using math formulas with `Math.max()`, `Math.min()`, and degree conversion, and understanding function scope (functions must be declared at the same level to be accessible to each other).

---

### 🚀 How to Use

1. Open `index.html` in your browser, or visit the GitHub Pages demo
2. Choose how many colors to generate: **6**, **8**, or **9**
3. Click the **Generate** button
4. Each card displays the color with its HEX, RGB, and HSL codes

---

### 🛠️ Technologies

- HTML5
- Vanilla JavaScript (no libraries)
- CSS

---

### ▶️ Run Locally

No installation needed. Just open `index.html` in your browser.

---

### 🌍 Deploy to GitHub Pages

1. Push your project to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select branch `main` and folder `/root`
4. Click **Save**
5. Your app will be live at: `https://your-username.github.io/repo-name`

---

## 👩‍💻 Autora / Author
Ana Márquez
Proyecto construido como parte de mi aprendizaje de JavaScript.  
Project built as part of my JavaScript learning journey.
