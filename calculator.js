let num1 = '', num2 = '', op = '', end = '';
const display = document.querySelector(".display");

function add() {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract() {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply() {
    return parseFloat(num1) * parseFloat(num2);
}

function divide() {
    return parseFloat(num1) / parseFloat(num2);
}

function operate() {
    if (op === '+') {
        end = add();
    } else if (op === '-') {
        end = subtract();
    } else if (op === '*') {
        end = multiply();
    } else if (op === '/') {
        end = divide();
    }
    end= parseFloat(end.toFixed(5));
    display.textContent = end;
    num1 = end;
    end = '';
}

function populateDisplay() {
    const numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
        number.addEventListener("click", (e) => {
            end += e.target.textContent;
            display.textContent = end;
        });
    });

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => {
        operator.addEventListener("click", (e) => {
            if (end) {
                num1 = end;
                end = '';
            }
            op = e.target.textContent;
        });
    });

    const equals = document.querySelector(".equals");
    equals.addEventListener("click", () => {
        if (num1 && end) { 
            num2 = end;
            operate();
        }
    });
    const clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
        num1 = '';
        num2 = '';
        op = '';
        end = '';
        display.textContent='0';
    });


}

populateDisplay();
