import { useState } from "react";

const Register = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);

  const handleAddNewStudent = () => {
    setStudents([...students, { name, grade }]);
  };

  return (
    <div>
      <input
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={grade}
        placeholder="grade"
        onChange={(e) => setGrade(Number(e.target.value))}
      />
      <button onClick={handleAddNewStudent}>Registrar</button>
    </div>
  );
};

export default Register;
