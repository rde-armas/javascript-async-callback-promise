const regex = /\b(Apple)+\b/g;

const fruit ='Apple, Banna kiwi, ornage , etc etc asdasd';

for(const match of fruit.matchAll(regex)) {
    console.log(match);
}