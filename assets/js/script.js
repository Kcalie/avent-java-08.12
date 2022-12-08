$(document).ready(function(){
    // On mets à jour le titre
    $('#title').text(params.title);
    // Au clic sur une case
    $('.day').on('click',function(event){
        // On récupère l'élement
        let element = $(event.target);
        // On récupère la date du jour
        let date = new Date(); // recup la date du jour et on la met dans une variable
        let today_day = date.getDate(); // getDate() donne le num du ojur du mois (8 dec = 8)
        let today_month = date.getMonth();

        // On récupère ensuite le jour de la case
        let day_request = Number(element.text());
        // On récupère le mois renseigné dans les paramètres
        let month_request = params.month;

        // On vérifie que le mois et le jour correspondent
        let show_day = false;
        if(today_month != month_request) {
            show_day = true;
        } else {
            if(day_request == today_day) {
                show_day = true;
            }
        }
        // Affichage des modals
        if(show_day) {
            // On charge le cadeau
            let aleatoire = Math.floor((Math.random()*25));
            $.get(params.data_folder+aleatoire+".html",function(data){
                // On met à jour notre modal avec le code HTML
                $('.day-content').html(data);
                // On ouvre la modal
                $('#day-modal').modal({
                    size:'large',
                    fadeDuration:200,
                    fadeDelay: 0.30
                });
                // Son
                let son3 = document.createElement('audio');
                son3.src = "assets/son/gagne.mp3"
                son3.play()
                return;

            },'text');
        } else {
            // Si on selectionne un jour deja passé
            if(day_request < today_day) {
                $('#pass-day-modal').modal({
                    fadeDuration: 200
                });
                // Son
                let son = document.createElement('audio');
                son.src = "assets/son/perdu.mp3"
                son.play()
            }
            else{
                $('#no-day-modal').modal({
                    fadeDuration: 200
                });
                // Son
                let son2 = document.createElement('audio');
                son2.src = "assets/son/clic.mp3"
                son2.play()
            }                   
        }
        
    });
});

// bonhomme qui bouge sur la page

function papaNoel(){
    let papa = document.getElementById('papanoel');
    let position_top = Math.floor (Math.random()*500);
    let position_bottom = Math.floor (Math.random()*600);
    papa.style.top = position_top+'px';
    papa.style.left = position_bottom+'px';

    let bouger = setTimeout("papaNoel()",1000);
}
papaNoel();








