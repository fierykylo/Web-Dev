const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:

const allSpans = document.querySelectorAll('span');

for(let i = 0; i < 7; i++)
{
    allSpans[i].style.color = colors[i];
}