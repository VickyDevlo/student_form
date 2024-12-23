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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setStudents(
        students.map((student) =>
          student.id === editingId ? { ...formData, id: editingId } : student
        )
      );
      setEditingId(null);
    } else {
      setStudents([...students, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  const resetForm = () => {
    setFormData(initialState);
    setEditingId(null);
  };
  const value = {
    formData,
    handleSubmit,
    initialState,
    setFormData,
    students,
    setStudents,
    editingId,
    resetForm,
    setEditingId,
    handleChange,
    handleDelete,
    handleEdit,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
