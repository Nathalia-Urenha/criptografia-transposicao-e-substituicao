const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];

const key = 1;

let result = '';

function checkText(text) {
    if (text == "") {
        alert("Por favor, insira um texto!");
        return false;
    }
    return true;
}


function reset(value) {
    document.getElementById('result').setAttribute('value', value);
    result = '';
}

function exit() {
    window.close();
}


function encryptReplacement() {
    const value = document.getElementById('input-replacement').value.toLowerCase();

    if (checkText(value)) {
        for (let i = 0; i < value.length; i++) {
            const char = value.charAt(i)
            for (let i = 0; i < letters.length; i++) {
                if (char === 'z') {
                    result = `${result}${letters[key - 1]}`
                    break
                } else {
                    if (char == letters[i]) {
                        result = `${result}${letters[i + key]}`
                        break
                    }
                }
            }
        }
        reset(result)
    }
}

function decryptReplacement() {

    const value = document.getElementById('result').value !== ''
        ? document.getElementById('result').value.toLowerCase()
        : document.getElementById('input-replacement').value.toLowerCase();

    if (checkText(value)) {
        for (let i = 0; i < value.length; i++) {
            const char = value.charAt(i)

            for (let i = 0; i < letters.length; i++) {
                if (char === "a") {
                    result = `${result}${letters[letters.length - key]}`
                    break
                }
                if (char == letters[i]) {
                    result = `${result}${letters[i - key]}`
                    break
                }
            }

        }
        reset(result)
    }
}

function decryptTransposition() {

    const value = document.getElementById('result').value !== ''
        ? document.getElementById('result').value.toLowerCase()
        : document.getElementById('input-transposition').value.toLowerCase();

    const over = value.length % 2;

    for (let i = 0; i < value.length - over; i = i + 2) {
        const current = value.charAt(i);
        const next = value.charAt(i + 1);

        result = `${result}${next}`;
        result = `${result}${current}`;
    }
    if (over !== 0)
        result = `${result}${value.charAt(value.length - 1)}`;

    reset(result);
}

function encryptTransposition() {
    const value = document.getElementById('input-transposition').value;
    const over = value.length % 2;

    for (let i = 0; i < value.length - over; i = i + 2) {
        const current = value.charAt(i);
        const next = value.charAt(i + 1);

        result = `${result}${next}`;
        result = `${result}${current}`;
    }
    if (over !== 0)
        result = `${result}${value.charAt(value.length - 1)}`;

    reset(result);
}
