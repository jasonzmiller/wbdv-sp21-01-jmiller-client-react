/*
(function () {
    function createCourse(course){}
    function findAllCourses(){}
    function findCourseById(id){}
    function updateCourse(id, course){}
    function deleteCourse(id){}
})();*/
const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001704833/courses";

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())