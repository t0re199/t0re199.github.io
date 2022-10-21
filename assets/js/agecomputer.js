function computeAge(birthday=new Date(1997, 4, 29))
{
    today = new Date()
    years = today.getFullYear() - birthday.getFullYear()
    if(today.getMonth() < birthday.getMonth() || 
       (today.getMonth() == birthday.getMonth() && 
        today.getUTCDate() < birthday.getUTCDate()))
    {
        years--
    }
    return years
}