function updateBookmarks() {
    var courses_id = JSON.parse(localStorage.getItem(SECRET_KEY));
    if (!courses_id)
        courses_id = [];
    var courses = data.filter((obj) => {
        return courses_id.includes(obj.id + ''); // Convert obj.id to string
    })
    const dump = document.getElementById('course-cards-my');
    renderDataToSmallCards(courses, dump, true);
    bookMarkHandle(true);
}

function renderDataToSmallCards(courses, dump, remove_on_disable) {
    var bookmarked_courses = JSON.parse(localStorage.getItem(SECRET_KEY));
    if (!bookmarked_courses)
        bookmarked_courses = [];
    const smlCardsrc = document.getElementById("card-small").innerHTML;
    const template = Handlebars.compile(smlCardsrc);
    let content = '';
    let cnt = 0;
    if(!courses.length){
        content += ` <div class="row">
        <p class="long-copy">
            There are no courses in this section yet!
        </p>
    </div>`;
    }
    else{
        for (let crs of courses) {
            if (cnt == 0) {
                content += '<div class="row2">'
            }
            const context = {
                course: crs,
                status: (bookmarked_courses.includes(crs.id + '') + '')
            }
            const compiled = template(context);
            content += compiled
            cnt++;
            if (cnt == 3) {
                cnt = 0;
                content += "</div>";
            }
        }
        if (cnt != 0) {
            content += '</div>';
        }
        if(remove_on_disable)
            dump.innerHTML = "";
    }
    dump.innerHTML += content;
}

function yearRender(year) {

    // Setting title
    const title = document.getElementById('title')
    if(year == 1)
        title.innerHTML = 'I';
    else if(year == 2)
        title.innerHTML = 'II'
    else if(year == 3)
        title.innerHTML = 'III'
    else
        title.innerHTML = 'IV'
    title.innerHTML += ' YEAR';

    // Setting current year link active
    const links = document.querySelectorAll(".navbar-item");
    links[year-1].className += ' active';
    const yearSrc = document.getElementById('year').innerHTML;
    const template = Handlebars.compile(yearSrc);
    const dump = document.getElementById('year-content');
    dump.innerHTML = template({
        year: year,
    });
    const dumpsm1 = document.getElementById('course-cards-' + year + '-1');
    const dumpsm2 = document.getElementById('course-cards-' + year + '-2');
    const coursessm1 = data.filter(obj => {
        return obj.year == year && obj.semester == 1;
    });
    const coursessm2 = data.filter(obj => {
        return obj.year == year && obj.semester == 2;
    });
    renderDataToSmallCards(coursessm1, dumpsm1, false);
    renderDataToSmallCards(coursessm2, dumpsm2, false);
}

