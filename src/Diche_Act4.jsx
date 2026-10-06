function StudentCard({ name, course, score }){
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
      <p>{score}</p>
      <p>
        Status: {score >= 60 ? 'Pass' : 'Fail'}
      </p>
    </div>
  )
}

function App(){
  const students = [
    { name: "Prince", course: "BSIT", score: 85 },
    { name: "Jeremy", course: "BSCS", score: 55 },
    { name: "Den", course: "BSIS", score: 70 },
  ]
  return(
    <div>
      <h2>Student Records</h2>
      {students.map((student) => (
        <StudentCard
          key={student.name}
          name={student.name}
          course={student.course}
          score={student.score}
        />
      ))}
    </div>
  )
}

export default App;