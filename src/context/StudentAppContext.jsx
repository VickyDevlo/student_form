import { createContext, useState } from "react";

export const initialState = {
  fullName: "",
  dob: "",
  email: "",
  phone: "",
  address: "",
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialState);
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  const value = {
    formData,
    initialState,
    setFormData,
    students,
    setStudents,
    editingId,
    setEditingId,
    handleDelete,
    handleEdit,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
