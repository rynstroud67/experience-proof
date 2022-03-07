import React, {useState, useEffect} from 'react';
import '../../config/style.css';
import CourseTableFilter from '../common/experience-preview/filtered-courses';
import CourseGrid from '../common/experience-preview/course-table';
import { courses } from '../../config/courses/course-service';

export default function ProgrammingComponent() {
    const [filteredCourses, setFilteredCourses] = useState([]);


    return (
        <div>
            <div class="title text margin-3">
                proof of experience by course
            </div>
            <CourseTableFilter setFilteredCourses={setFilteredCourses} courses={courses}></CourseTableFilter>
            <CourseGrid courses={filteredCourses}></CourseGrid>
        </div>
    )
}