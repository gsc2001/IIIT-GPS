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
    if (remove_on_disable)
        dump.innerHTML = "";
    dump.innerHTML += content;
}

function yearRender(year) {
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

