function saveAndOpenYear(value)
{
    localStorage.setItem(KEY_YEAR,JSON.stringify(value));
    window.location.href = 'year.html';
}