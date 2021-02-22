import React from 'react'

const CourseRow = ({deleteCourse, course, title, owner}) =>

    <tr>
        <td>{title}</td>
        <td>{owner}</td>
        <td>1/1/2021</td>
        <td>
            <i className="fas fa-check"></i>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            <i className="fas fa-edit"></i>
        </td>
    </tr>

export default CourseRow