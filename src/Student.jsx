import Score from "./Score"

const Student = (props) => {
  return (
    <div className="student" id={`student-${props.idx}`}>
      <h2>Student: {props.student.name}</h2>
      <p>Bio: {props.student.bio}</p>
      <h3>Scores:</h3>
      <div className="scores">
        {props.student.scores.map((score, idx) =>
          <Score key={idx} score={score}/>
        )}
      </div>
    </div>
  )
}

export default Student