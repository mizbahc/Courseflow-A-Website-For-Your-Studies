
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import "../university/university.scss";


function University({ universityName, courseNumber }) {

  const navigate = useNavigate();
  let clearUniversityName = universityName.replace("_", " ");
  const goToUniversity = (e) => {
    if(universityName !== "unknown" && courseNumber !== 0){
      e.preventDefault();
      e.stopPropagation();
      navigate(`/universities/${universityName}`)
    }

  }

  return (
    <div>
      <button className="col-12 mb-1 btn btn-block btn-outline-success university-button">
        <div className="row justify-content-between">
          <div
            className="col-6 universityName"
            onClick={(e) => goToUniversity(e)}
          >
            <h4
              className="text-start"

            >{`${clearUniversityName}`}
            </h4>
          </div>
          <div className="col-4">
            <p className="text-end text-xsm" >Number of Courses: {courseNumber}</p>
          </div>
        </div>

        {/* <div className="row mt-4">
          <div
            className="col-6" 
            onClick={addToFav}
          >
            <p
              className="text-start course-note-text"
            >Add to Favourites
            </p>
          </div>
        </div> */}
        {/*
        <div className="row">
          <div className="col-6">
            <a
              href="#1"
              className="course-link"
            >
              <p className="text-start course-note-text">Software Engineering (CS308)</p>
            </a>
          </div>
          <div className="col-6">
            <a
              href="#1"
              className="course-link"
            >
              <p className="text-start course-note-text">Software Engineering (CS308)</p>
            </a>
          </div>

        </div> */}


      </button>
    </div>
  );
}



University.propTypes = {
  universityName:PropTypes.string,
  courseNumber:PropTypes.number,
}

University.defaultProps = {
  
  universityName: "unknown",
  courseNumber: 0,
}
export default University;
