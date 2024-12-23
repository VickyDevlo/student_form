import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { StudentForm } from "./components/StudentForm";
import { StudentTable } from "./components/StudentTable";
import { AppContext } from "./context/StudentAppContext";

function App() {
  const { students } = useContext(AppContext);

  return (
    <>
      <Typography
        variant="body1"
        color="textPrimary"
        sx={{ textAlign: "center", fontSize: "2rem", marginY: 2 }}
      >
        Student Form
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          maxWidth: "100%",
          margin: "0 auto",
          padding: 2,
        }}
      >
        <StudentForm />

        <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "70%" } }}>
          {students.length > 0 ? (
            <StudentTable />
          ) : (
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ textAlign: "center", fontSize: "1.2rem", marginY: 2 }}
            >
              No Students Details Available.
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}

export default App;
