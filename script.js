const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Botón: Eliminar espacios dobles o múltiples
document.getElementById('btnSpaces').addEventListener('click', () => {
    let text = inputText.value;
    outputText.value = text.replace(/[ \t]+/g, ' ');
});

// Botón: Quitar líneas vacías
document.getElementById('btnLines').addEventListener('click', () => {
    let text = inputText.value;
    outputText.value = text.split('\n').filter(line => line.trim() !== '').join('\n');
});

// Botón: Extraer correos electrónicos
document.getElementById('btnEmails').addEventListener('click', () => {
    let text = inputText.value;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    let matches = text.match(emailRegex);
    outputText.value = matches ? matches.join('\n') : 'No se encontraron correos electrónicos.';
});

// Botón: Limpiar todo
document.getElementById('btnClear').addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
});

// Botón: Copiar al portapapeles
document.getElementById('btnCopy').addEventListener('click', () => {
    if (!outputText.value) return;
    navigator.clipboard.writeText(outputText.value).then(() => {
        alert('¡Texto copiado al portapapeles!');
    });
});
