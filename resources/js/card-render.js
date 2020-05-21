
// Creating temp data
var ISS = {
    name: "Introduction to Information Systems",
    tags: ["Bekar","Fast","Bekar"],
    rating: "1.0"
}
courses = [];
for (let i = 0 ; i < 3 ; i += 1)
{    
    courses.push(ISS);
}

const smlCardsrc = document.getElementById("card-small").innerHTML;
const template = Handlebars.compile(smlCardsrc);
const dump = document.getElementById('course-cards');
dump.innerHTML = "<div class="
for (let crs of courses)
{
    const context = {
        course : crs,
    }
    const compiled = template(context);
    dump.innerHTML += compiled
}