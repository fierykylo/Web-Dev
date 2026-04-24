let input = prompt("What would you like to do ?");
const todos = ["study js"]

while(input !== "quit")
{
    input = prompt("What would you like to do ?");
    if(input === "list")
    {
        console.log("*****************");
        for(let i = 0; i < todos.length; i++)
        {
            console.log(`${i}:${todos[i]}`);
        }
        console.log("*****************");
    }
    else if (input == "new")
    {
        let newtodo = prompt("Enter the task");
        todos.push(newtodo);
        console.log(`Added ${newtodo} to the list`);
    }
    else if (input == "delete")
    {
        let deleteindex = parseInt(prompt("Enter which task to delete : "));
        if(!Number.isNaN(deleteindex))
        {        
            const deleted = todos.splice(deleteindex,1);
            console.log(`Deleted ${deleted}`);
        }
        else
        {
            console.log("Enter a valid index");
        }
    }
    

}
console.log("You've quit the app");