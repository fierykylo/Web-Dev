// DEFINE YOUR FUNCTION BELOW:
function capitalize(str)
{
    if(str.length === 0)
    {
        return "";
    }
    else
    {
        return str[1].toUpperCase() + str.splice(1);
    }
}