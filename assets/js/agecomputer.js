function computeAge(birthday)
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