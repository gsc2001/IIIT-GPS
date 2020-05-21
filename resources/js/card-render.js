
// Creating temp data
var ISS = {
    name: "Introduction to Information Systems",
    tags: ["Bekar","Fast","Bekar"],
    rating: "1.0"
}
console.log(data);
courses = data;

//  Adding small cards 
const smlCardsrc = document.getElementById("card-small").innerHTML;
const template = Handlebars.compile(smlCardsrc);
const dump = document.getElementById('course-cards');
let content = '';
let cnt = 0;
for (let crs of courses)
{
    if(cnt == 0)
    {
        content += '<div class="row2">'
    }
    const context = {
        course : crs,
    }
    const compiled = template(context);
    content += compiled
    cnt ++;
    if(cnt == 3)
    {
        cnt = 0;
        content += "</div>";
    }
}
if(cnt != 0)
{
        content += '</div>';
}
dump.innerHTML = content;

// end adding small cards