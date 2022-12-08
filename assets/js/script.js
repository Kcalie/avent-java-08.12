$(document).ready(function(){
    // On mets à jour le titre
    $('#title').text(params.title);
    // Au clic sur une case
    $('.day').on('click',function(event){
        // On récupère l'élement
        let element = $(event.target);
        // On récupère la date du jour
        let date = new Date();
        let today_day = date.getDate();
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
            if(day_request <= today_day) {
                show_day = true;
            }
        }
        // Affichage des modals
        if(show_day) {
            // On charge le cadeau
            $.get(params.data_folder+day_request+".html",function(data){
                // On met à jour notre modal avec le code HTML
                $('.day-content').html(data);
                // On ouvre la modal
                $('#day-modal').modal({
                    size:'large',
                    fadeDuration:200,
                    fadeDelay: 0.30
                });
            },'text');
        } else {
            // Si on est pas sur le bon jour on ouvre la modal erreur
            $('#no-day-modal').modal({
                fadeDuration: 200
            });
        }
    });
});