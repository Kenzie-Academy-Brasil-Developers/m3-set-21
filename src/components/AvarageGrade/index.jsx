const AvarageGrade = ({ students }) => {
  return (
    <p>
      {students.reduce((acc, student) => acc + student.grade, 0) /
        students.length}
    </p>
  );
};

export default AvarageGrade;
