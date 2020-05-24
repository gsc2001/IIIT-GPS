function saveAndOpenYear(value)
{
    localStorage.setItem(KEY_YEAR,JSON.stringify(value));
    window.location.href = 'year.html';
}

function saveAndOpenYearIndex(value)
{
    localStorage.setItem(KEY_YEAR,JSON.stringify(value));
    window.location.href = './resources/html/year.html';
}

function saveAndOpenCourse(course_id)
{
    localStorage.setItem(KEY_COURSE,JSON.stringify(course_id));
    window.location.href =  'course.html';
}

function saveAndOpenCourseIndex(course_id)
{
    localStorage.setItem(KEY_COURSE,JSON.stringify(course_id));
    window.location.href =  './resources/html/course.html';
}