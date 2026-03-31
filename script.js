function tehtava1() {
    document.getElementById("tulos").innerHTML =
        "Korjattu koodi:<br><pre>function greet(name) {\n  console.log('Hei, ' + name);\n}\n\ngreet('Kimmo');</pre>";
}

function tehtava2() {
    let arr = [4, 8, 15, 16, 23, 42];
    let summa = 0;

    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }

    let keskiarvo = summa / arr.length;

    document.getElementById("tulos").innerHTML =
        "Keskiarvo on: " + keskiarvo;
}

function tehtava3() {
    let arr = [1, 2, 3, 4, 5, 6];
    let parilliset = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            parilliset.push(arr[i]);
        }
    }

    document.getElementById("tulos").innerHTML =
        "Parilliset luvut: " + parilliset.join(', ');
}

function tehtava4() {
    let arr = ["kissa", "koira", "lintu"];
    let maara = 0;

    for (let i = 0; i < arr.length; i++) {
        maara += arr[i].length;
    }

    document.getElementById("tulos").innerHTML =
        "Merkkien kokonaismäärä: " + maara;
}

