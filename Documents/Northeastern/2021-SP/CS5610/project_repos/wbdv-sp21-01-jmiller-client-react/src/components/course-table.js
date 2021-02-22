import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                            />)
                    }
                    {/*<CourseRow title={"CS5493"} owner={"alice"}/>
                    <CourseRow title={"CS3453"} owner={"alice"}/>
                    <CourseRow title={"CS1234"} owner={"alice"}/>
                    <CourseRow title={"CS4321"} owner={"alice"}/>*/}
                    </tbody>
                </table>
            </div>

        )
    }
}