var lastName = 'David';

let fruit = 'Apple';
fruit = 'Kiwi';

const animal = 'cat'; //constante

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

console.log(lastName);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins){
        console.log(`${saveCoins}`);
        saveCoins +=coins;
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);




function createPetList() {
    // Tu código aquí 👈
    const petList = [];
    function addList(mypet) {
        if(mypet){
            petList.push(mypet);
            console.log(petList)    

        }
    }
    return addList;
  }

  const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

console.log()

nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; ;




