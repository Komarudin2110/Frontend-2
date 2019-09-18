
/*
    Variable Scope

    Dari mana sebuah variable dapat di akses

    var: (di batasi)

        - function

    let: (di batasi)

        - function
        - Kurung kurawal

    const: (di batas)

        - function
        - kurung kurawal
*/
for (var i = 3; i < 5; i++){

}

for (let j = 5; j < 10; j++){

}

{
    const pi = 3.14
}



console.log(pi)