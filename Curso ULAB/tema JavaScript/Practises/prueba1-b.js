let number1 = prompt("dime el 1º número");
            let number2 = prompt("dime el 2º número");
            let littleNumber;
            let bigNumber;
            let contador = 1;
            let contadorDePares = 0;

            if (number1 > number2) {
                littleNumber = number2;
                bigNumber = number1;
                console.log(littleNumber + " are smaller than " + bigNumber);
            }
            else if (number1 == number2) {
                console.log(number1 + " and " + number2 + " are equals");
            }
            else {
                littleNumber = number1;
                bigNumber = number2;
                console.log(littleNumber + " are smaller than " + bigNumber);
            }
            if (number1 % 2 == 0) {
                contadorDePares = contadorDePares + 1;

            }
            if (number2 % 2 == 0) {
                contadorDePares = contadorDePares + 1;
            }
            
            console.log("Hay " + contadorDePares + " números Pares y " + (2 - contadorDePares) + " de números Impares")
            number1=+number1;
            number2=+number2;
            let result=number1+number2;
            alert("La suma total da " + result);