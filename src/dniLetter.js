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

// function getDNIFromUser() {
//     while (true) {
//         let input = prompt("Please enter your DNI number (or cancel to exit):");
//         if (input === null) {
//             break;
//         }
//         let dniNumber = parseInt(input, 10); // Specify base 10
//         if (isNaN(dniNumber)) {
//             alert("The data entered is incorrect");
//         } else {
//             try {
//                 let dni = new DNI(dniNumber);
//                 let letter = dni.calculateDNILetter();
//                 alert(`The letter for DNI ${dniNumber} is ${letter}`);
//             } catch (e) {
//                 alert(e.message);
//             }
//         }
//     }
// }

// getDNIFromUser();

// const dniNumber = 71775872;
// const dni = new DNI(dniNumber);
// const letter = dni.calculateDNILetter();
// console.log(`The letter of DNI ${dniNumber} is ${letter}`);
