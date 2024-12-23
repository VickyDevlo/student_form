import React, { useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { AppContext } from "../context/StudentAppContext";

export const StudentForm = () => {
  const {
    formData,
    initialState,
    setFormData,
    students,
    setStudents,
    editingId,
    setEditingId,
  } = useContext(AppContext);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

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

  const resetForm = () => {
    setFormData(initialState);
    setEditingId(null);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flex: 1,
        maxWidth: { xs: "100%", md: "30%" },
      }}
    >
      <TextField
        label="Full Name"
        variant="outlined"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        required
      />
      <TextField
        label="Date of Birth"
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        value={formData.dob}
        onChange={(e) => handleChange("dob", e.target.value)}
        required
      />
      <TextField
        label="Email Address"
        type="email"
        variant="outlined"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        required
      />
      <TextField
        label="Phone Number"
        type="tel"
        variant="outlined"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        required
      />
      <TextField
        label="Address"
        multiline
        rows={4}
        variant="outlined"
        value={formData.address}
        onChange={(e) => handleChange("address", e.target.value)}
        required
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="contained" color="primary" type="submit">
          {editingId ? "Update" : "Submit"}
        </Button>
        {Object.values(formData).some((value) => value !== "") && (
          <Button
            onClick={resetForm}
            variant="contained"
            color="warning"
            type="button"
          >
            Clear All
          </Button>
        )}
      </Box>
    </Box>
  );
};
