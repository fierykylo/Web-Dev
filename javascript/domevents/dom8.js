// WRITE YOUR CODE IN HERE:
const container = document.querySelector('div');

for (let i = 0; i < 100; i++)
{
    const newbutton = document.createElement("button");
    newbutton.innerText = `button ${i}`;
    container.append(newbutton);
}