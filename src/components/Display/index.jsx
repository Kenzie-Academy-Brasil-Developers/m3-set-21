import StudentCard from "../StudentCard";
import AvarageGrade from "../AvarageGrade";

const Display = ({ students }) => {
  return (
    <div>
      <h3>Todos alunos</h3>
      <ul>
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </ul>

      <h3>Todos alunos aprovados</h3>
      {students
        .filter((student) => student.grade >= 7)
        .map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}

      <h3>Média da turma</h3>
      <AvarageGrade students={students} />
    </div>
  );
};

export default Display;
