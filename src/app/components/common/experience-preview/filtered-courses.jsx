import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


export default function CourseTableFilter({courses, setFilteredCourses}) {
    const [searchStr, setSearchStr] = useState("");

    // creates the course preview box html
    function coursePreview(_course) {      
        return (
            <div class="col preview list">
                <Link to="/login" class="card link-txt">
                    <div class="course-preview">
                        <div class="text subtitle card-subtitle">{_course.title}</div>
                        <div class="text">{_course.name}</div>
                    </div>
                </Link>
            </div>
        )
    }

    useEffect(() => {

        //Filtering to include any icons whose fields contain the search text
        if (searchStr !== "") {
            let filtered = courses.filter((__course) => {
                const alt = __course.name + " " + __course.title;
                return (alt.toLowerCase().includes(searchStr.toLowerCase()));
            });
            setFilteredCourses(filtered.map(_course => coursePreview(_course)));
        } else {
            setFilteredCourses(courses.map(_course => coursePreview(_course)));
        }
    }, [searchStr]);


    return (
        <div class="search-box">
            <div class="input-box">
                <input
                    class="input-form"
                    type="text"
                    onChange={({target}) => setSearchStr(target.value)}
                    placeholder="Search"
                />
            </div>
        </div>
    )
}