const dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

export class DNI {
    constructor(number) {
        if (!Number.isInteger(number) || number < 0 || number > 99999999) {
            throw new Error("The data entered is incorrect");
        }
        this.number = number;
    }

    calculateDNILetter() {
        const remainder = this.number % 23;
        return dniLetters[remainder];
    }
}


const dniNumber = 71775872;
const dni = new DNI(dniNumber);
const letter = dni.calculateDNILetter();
console.log(`The letter of DNI ${dniNumber} is ${letter}`);
