// DEFINE YOUR FUNCTION BELOW:
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function returnDay(day)
{
    if(day < 1 || day > 7)
    {
        return null;
    }
    return days[day - 1];
}