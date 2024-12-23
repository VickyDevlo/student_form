import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { AppContext } from "../context/StudentAppContext";

const tableCellStyles = {
  fontWeight: "bold",
  backgroundColor: "#f5f5f5",
};

const tableRowStyles = {
  "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
  "&:hover": { backgroundColor: "#f1f1f1" },
};

export const StudentTable = () => {
  const { students, handleDelete, handleEdit } = useContext(AppContext);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4, boxShadow: 3 }}>
      <Table aria-label="student table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableCellStyles}>No.</TableCell>
            <TableCell sx={tableCellStyles}>Full Name</TableCell>
            <TableCell sx={tableCellStyles}>Date of Birth</TableCell>
            <TableCell sx={tableCellStyles}>Email</TableCell>
            <TableCell sx={tableCellStyles}>Phone</TableCell>
            <TableCell sx={tableCellStyles}>Address</TableCell>
            <TableCell sx={{ ...tableCellStyles, textAlign: "center" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={student.id} sx={tableRowStyles}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.fullName}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Box display="flex" justifyContent="center" gap={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
