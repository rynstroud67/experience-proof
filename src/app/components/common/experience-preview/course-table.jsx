import React from 'react';
// import '../../config/style.css';


export default function CourseGrid({courses}) {
    const NUM_COURSES_PER_ROW = 1;

    const createCourseRow = (numCourses) => {
        let components = [];
        let row = [];
        let col = 0;
        let total = 0;

        // Create a number of rows that is equal to the total number of icons divided by the number of icons per row,
        // adding one to account for any remainders
        for (let i = 0; i < courses.length; i++) {
            if (!courses[i]) {
                continue;
            }
            row.push(courses[i]);
            col++;
            total++;
            if (col === numCourses) {
                components.push(<div class="row"> {row} </div>);
                col = 0;
                row = [];
            }
        }

        // Adding placeholders to make sure the icons dont change size when filtered
        if (row.length < numCourses) {
            while (row.length < numCourses) {
                row.push(
                    <div class="col">
                        <div class="course-preview"></div>
                    </div>
                )
            }
            components.push(<div class="row"> {row} </div>);
        }
        return components;
    }
    

    return (
        <div class="flex-grid">
            {createCourseRow(NUM_COURSES_PER_ROW)}
        </div>
    )
}