let Francesca = {
    age : 20,
}

let Giuseppe = {
    name : 'Giuseppe',
    age : 25,
}
//Oggetto di Simone Paterno//
let Simone = {
    name : 'Simone',
    surname : 'Paterno',
    age : 30,
    city : 'Rome',
    hobby : 'Cinema',
    favoriteFood : 'Lasagne',
    favoritevideoGame :'Mass effect',
    favoriteFilm : 'Blade runner',
    favoriteBook : 'I am Legend',
}


let membersTeamAge=  [ {name: Simone, age :30}, {name : Giuseppe, age :40}]


function ordineEtà (Team) {
    const  ordinamentoTeam = Team.sort ((x, y)=> x.age - y.age);
    ordinamentoTeam.forEach(member => console.log(member.name + ' ' + member.age));
        
    };


ordineEtà (membersTeamAge)