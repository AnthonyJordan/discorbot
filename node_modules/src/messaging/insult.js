let insult = function () {
    let min = 1;
    let max = 2;
    let insult = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(insult) {
        case 1:
            return "Your mother was a murloc!";
        case 2:
            return "You smell like a leper gnome!";
     }
};

module.exports = insult;