const esPalindromo = (texto) => {
    texto = texto.toLowerCase();
    let izquierda = 0, derecha = texto.length - 1;

    while (izquierda < derecha) {
        if (!/[a-z0-9]/.test(texto[izquierda])) izquierda++;
        else if (!/[a-z0-9]/.test(texto[derecha])) derecha--;
        else if (texto[izquierda++] !== texto[derecha--]) return false;
    }
    return true;
}

console.log(esPalindromo("Anita lava la tinaa") ? "Es un palindromo" : "No es un palindromo");
