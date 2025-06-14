var count = 0;

// ADD COUNT 
$('#vigna_button').on('click', function()
{
    count++;
    $('#counts').html(count);
});