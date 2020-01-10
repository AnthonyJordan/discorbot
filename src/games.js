let games = function (){
    let gameSelection = Math.floor(Math.random() * 10);

    switch (gameSelection) {

        case 0:
            return 'Hatoful Boyfriend';
        case 1:
            return 'Genital Jousting';
        case 2:
            return 'Hentai vs Furries';
        case 3:
            return 'HuniePop';
        case 4:
            return 'Hentai Sheriff';
        case 5:
            return 'Deep Space Waifu';
        case 6:
            return 'Breeders of the Nephelym';
        case 7:
            return 'Dream Daddy';
        case 8:
            return 'Husk';
        case 9:
            return 'Haydee';

    }
};
module.exports = games;