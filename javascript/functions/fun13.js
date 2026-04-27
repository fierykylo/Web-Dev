const canBuy = (price, taxrate, balance) =>{
    let total = price + (price * taxrate);
    if((balance - total) !== 0)
    {
        alert("YES");
    }
    else
    {
        alert("NO");
    }
}

canBuy(100,10,120);