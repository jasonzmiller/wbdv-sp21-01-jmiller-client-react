import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

export default class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS5483", owner: "frank"},
            {title: "CS3453", owner: "alice"},
            {title: "CS1234", owner: "bob"},
            {title: "CS4321", owner: "stevie"}
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        const newCourses = this.state.courses.filter(course => course !== courseToDelete)
        this.setState({
            courses: newCourses
        })
    }


    render() {
        return (
            <div>
                <h1>Course manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse}
                             courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                <CourseEditor/>
            </div>
        )
    }
}