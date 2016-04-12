var free = 0;

function calculate()
{
    var n = document.getElementById('n').value;
    var b = document.getElementById('b').value;
    var m = document.getElementById('m').value;

    var initCaps = parseInt( n / b);
    free = Math.floor(getFreeBeer(initCaps, m));

    var output = document.getElementById('output');
    output.innerHTML = free.toString();
}

function getFreeBeer(caps, needed)
{
    //more bottles
    var newCaps = parseInt((caps / needed));
    var leftover = parseInt(caps - (newCaps * needed));

    var plusLeftover = newCaps + leftover;
    if (plusLeftover >= needed)
    {
        newCaps = newCaps + getFreeBeer(plusLeftover, needed);
    }

    return newCaps;

}