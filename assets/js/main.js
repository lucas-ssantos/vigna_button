var count = 0;

// ADD COUNT 
$('#vigna_button').on('click', function()
{
    //add counts
    count++;
    $('#counts').html(count);

    //animation
    const element = $(this);
    element.addClass('tilt');
});