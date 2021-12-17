import axios from "axios";
import { useEffect, useState } from "react";
import Course from "../../components/course/course.jsx";
import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store.js";


function Courses() {

  const [list, setList] = useState();

  const [state] = useStore();
  const { user: currentUser } = state;

  const getCourses = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/courses`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        let courseList = [];
        data.forEach(uni => {
          courseList = courseList.concat(...uni.courses)
        });

        console.log(courseList);

        setList(courseList);
      }).catch(err => console.log(err))
  }

  const addToFav = async (course) => {
    await axios.post(`${process.env.REACT_APP_URL}/courses/favourites/add`,{ currentUser, course })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getCourses();
  }, [])
  return (
    <Layout>
      <div className="row m-4">
        <h4>Courses</h4>
        <div className="row mt-2">

          { list ?
            (list.length > 0 ?
              list.map((item) => {

                return(
                  <div
                    key={item.courseCode}
                    className="row mt-4"
                  >
                    <div
                      className="col-12"
                    >
                      <Course
                        courseCode={item.courseCode}
                        university={item.university}
                        name={item.courseName}
                        addToFav={() => addToFav(item)}
                      >
                      </Course>
                    </div>
                  </div>
                  
                );
              }) :<p>No course yet !!!</p>)            :
            <p>Loading...</p>

          }



        </div>
      </div>
    </Layout>
  );
}

export default Courses;
