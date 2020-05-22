function bookMarkHandle() {
    let bookmarks = document.querySelectorAll('#bookmark-holder');
    for (let bookmark of bookmarks) {
        bookmark.addEventListener('click', function () {
            this.classList.toggle('bookmark-false');
            this.classList.toggle('bookmark-true');
            let value = this.getAttribute("value");
            if (this.classList.contains('bookmark-true')) {
                addCourse(value);
                updateBookmarks();
            }
            else {
                removeCourse(value);
                $(this).parent().closest("div").fadeOut(500, updateBookmarks);
            }
        });
    };
};
function addCourse(value) {
    if (!JSON.parse(localStorage.getItem(SECRET_KEY)))
        localStorage.setItem(SECRET_KEY, "[]");
    let courses = JSON.parse(localStorage.getItem(SECRET_KEY));
    courses.push(value);
    localStorage.setItem(SECRET_KEY, JSON.stringify(courses));
};
function removeCourse(value) {
    let courses = JSON.parse(localStorage.getItem(SECRET_KEY));
    courses.splice(courses.indexOf(value), 1);
    localStorage.setItem(SECRET_KEY, JSON.stringify(courses));
}