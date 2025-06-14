var count = 0;

const voices = [
    //apointed as assistant 
    'https://arknights.wiki.gg/images/f/fa/Vigna-001.ogg?a3895f',
    //idle
    'https://arknights.wiki.gg/images/d/d1/Vigna-010.ogg?b72eb7',
    //depart
    'https://arknights.wiki.gg/images/b/b2/Vigna-017.ogg?a5aa70',
    //begin operation
    'https://arknights.wiki.gg/images/5/53/Vigna-018.ogg?a23ae7',
    //select op1
    'https://arknights.wiki.gg/images/0/05/Vigna-019.ogg?ad85d5',
    //select op2
    'https://arknights.wiki.gg/images/c/c3/Vigna-020.ogg?252640',
    //deploy1
    'https://arknights.wiki.gg/images/1/1f/Vigna-021.ogg?c67949',
    //deploy2
    'https://arknights.wiki.gg/images/f/f5/Vigna-022.ogg?f14b71',
    //battle1
    'https://arknights.wiki.gg/images/6/60/Vigna-023.ogg?72f3d4',
    //battle2
    'https://arknights.wiki.gg/images/c/cd/Vigna-024.ogg?35338b',
    //battle3
    'https://arknights.wiki.gg/images/6/69/Vigna-025.ogg?dc3c6c',
    //battle4
    'https://arknights.wiki.gg/images/f/fb/Vigna-026.ogg?b31af0',
    //add facility
    'https://arknights.wiki.gg/images/b/ba/Vigna-031.ogg?fb51e4',
    //tap
    'https://arknights.wiki.gg/images/5/58/Vigna-032.ogg?fea9f2',
    //trsuted tap
    'https://arknights.wiki.gg/images/b/ba/Vigna-033.ogg?910bd2',
    //greetings
    'https://arknights.wiki.gg/images/c/cd/Vigna-034.ogg?98553a',
    //arknights
    'https://arknights.wiki.gg/images/b/b6/Vigna-035.ogg?17f486'
];

//CLICK FUNCTION 
$('#vigna_button').on('click', function()
{
    const element = $(this);
    this.style.pointerEvents = "none";

    //add counts
    count++;
    $('#counts').html(count);

    //sound
    var random = Math.floor(Math.random() * voices.length);
    $('#audio-source').attr('src', voices[random]);
    //gets the first source of the audio tag and plays it
    var audio = $('#audio-player')[0];
    audio.load();
    audio.play();

    var animation = 'tilt';
    if(count%10==0)
    {
        animation = 'rotate';
    }

    //animation
    element.addClass('playing');
    element.addClass(animation);

    //removes the animation class when audio stops
    audio.onended = function (){
        element.removeClass(animation);
        element.removeClass('playing');
        document.getElementById('vigna_button').style.pointerEvents = "auto";
    };
});