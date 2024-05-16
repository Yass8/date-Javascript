function calculeAge(){
    //recuperer la date du jour
   let td = new Date(); 
   //recuperer la date saisie
   let dt = document.getElementById("date").value;
   //recuperer l'année
   let an = dt.substr(0,4);
   //recuperer le mois
   let mois = dt.substr(5,2);
   //recuperer le jour
    let day = dt.substr(8,2);

    //l'age

    let age = td.getFullYear() - an;
     
    //nombre de jour

    let nbrjour = td.getDate() - day;
    // nombre de mois
    let nbrMois = td.getMonth() - mois;
    //si le nombre de jour est strictement inferieur a 0 , on enleve 1 du mois
    if(nbrjour < 0){
        nbrMois = nbrMois - 1;
        nbrjour = (td.getDate() + 30) - day;
    }
    
    //on calcule la difference entre le mois de la date et le mois de naissance
    let lesMois = nbrMois - mois;

    if( lesMois <= 0){ // s'il est inferieur ou egale à zero
        lesMois = (nbrMois + 12) - mois;
        age = age - 1; // on enleve 1 an de l'age
    }

    // date complet

    let dateComplet;

    if(nbrjour === 0 && lesMois === 0){

        dateComplet = age + " ans ";
    }else if( nbrjour === 0 && lesMois !== 0){

        dateComplet = age + " ans " + lesMois + " mois ";


    }else if(nbrjour !== 0 && lesMois === 0){
        dateComplet = age + " ans " + nbrjour+ " jours";

    }else if(nbrjour !== 0 && lesMois !== 0){
         dateComplet = age+ " ans " + lesMois + ' mois ' + nbrjour + " jours";
    }else if(nbrjour !== 0 && lesMois === 12){

        age = age + 1;
        dateComplet = age + " ans " + nbrjour+ " jours";

    }else if(nbrjour == 0 && lesMois === 12){
        age = age + 1;
        dateComplet = age + " ans"
    } else {

        dateComplet = "date incorrect";

    }

    document.getElementById("monage").value = age;
    document.getElementById("agecomplet").value = dateComplet;






}