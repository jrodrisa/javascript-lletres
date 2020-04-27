let firstName = ['J','U','L','I','A','A'];

let letters = {}

function count(letter){
    if (!letters[letter]){
        letters[letter] = 1;    
    } else {
        letters[letter]++;
    }
}

firstName.map(count);
 
console.log(letters);
