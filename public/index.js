//Jc Ghyselinck
//Le 10/10/2022
//Le Gîte du Moulin : carrousel universel
//JQuery

$(function() { 

    function affich(index) { /*Rotation des images du carrousel*/
        let index1 = 0;
        let index2 = 0;
        let index3 = 0;
        let lg = tab.length;

        if(index < lg - 2) {
            index1 = index;
            index2 = index + 1;
            index3 = index + 2;
        }

        if(index == lg - 2) {
            index1 = index;
            index2 = index + 1;
            index3 = 0;
        }

        if(index == lg - 1) {
            index1 = index;
            index2 = 0;
            index3 = 1;
        }

        $('#image_gauche').attr('src', tab[index1][0]);
    
        $('#image_centre').attr('src', tab[index2][0]);
        $('#intitul').text(tab[index2][1]);
        $('.contImageCar a').attr('href', tab[index2][2]);
    
        $('#image_droite').attr('src', tab[index3][0]);         
    }

    //Tableau images / textes / liens : peut en contenir autant que vous en voulez !! 
    var tab = [['./studio.png', 'Hébergements classiques: Les Studios',
                './studios.ejs'],
               ['./gite.jpg', 'Hébergement classique: Le Gîte',
               './legite.ejs'],
               ['./kota.jpg', 'Hébergement insolite: Le Kota',
               './kota.ejs'],
               ['./roulotte.png', 'Hébergement insolite: La Roulotte',
               './roulotte.ejs']]

    var index_img = 0;
    affich(index_img);
    
    // Boutons du carrousel avec gestion des limites d'index
    $('#gauche').click(function() {
        index_img += 1;
        if(index_img > tab.length - 1) {
            index_img = 0;
        }
        affich(index_img);       
    });

    $('#droite').click(function() {
        index_img -= 1;
        if(index_img < 0) {
            index_img = tab.length - 1;
        }
        affich(index_img);
    });


    // Gestion des sous menus hébergement
    $('#hebclas').on('mouseenter', function() {
        $('.menuderclass').css('visibility', 'visible');
    });

    $('#hebclas').on('mouseleave', function() {
        $('.menuderclass').css('visibility', 'hidden');
    });

    $('.menuderclass').on('mouseenter', function() {
        $(this).css('visibility', 'visible');
    });
    
    $('.menuderclass').on('mouseleave', function() {
        $(this).css('visibility', 'hidden');
    });


    $('#hebinsol').on('mouseenter', function() {
        $('.menuderinsol').css('visibility', 'visible');
    });

    $('#hebinsol').on('mouseleave', function() {
        $('.menuderinsol').css('visibility', 'hidden');
    });

    $('.menuderinsol').on('mouseenter', function() {
        $(this).css('visibility', 'visible');
    });
    
    $('.menuderinsol').on('mouseleave', function() {
        $(this).css('visibility', 'hidden');
    });

}); //DOM prêt