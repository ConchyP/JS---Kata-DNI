// Funcion JS sin orientación a objetos

function calculateDNIletter(dni) {
   
    if (!Number.isInteger(dni)) {
        return 'The dni must be an integer number';
    }

    if (dni < 0 || dni > 99999999) {
        return 'The dni must be a number between 0 and 99999999';
    }

    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; 
    
    const resto = dni % 23;

    return letters[resto];
}

const dni = 71775872;  
const letter = calculateDNIletter(dni); // Should be W
console.log(`The letter of dni ${dni} is ${letter}`);