let firstname = ['J','U','L','3','I', 'A'];
let vocals = ['A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < firstname.length; i++) {
    if (vocals.includes(firstname[i])){
        console.log("He trobat la VOCAL: " + firstname[i])
    } else if (isNaN(firstname[i]) === false){
        console.log("Els noms de persones no contenen el número: " + firstname[i])
    } else [
        console.log("He trobat la CONSONTANT: " + firstname[i])
    ]
}