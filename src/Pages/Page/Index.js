import { React } from "react";
import Layout from "../../Layout/Index";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import NoteContainer from "../../components/Notes/NoteContainer";
import Archives from "../../components/Archives/Archives";
import DeleteNotes from "../../components/Delete/DeleteNotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Index() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Router>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <NoteContainer />
                </Layout>
              }
            />
            <Route
              path="/archive"
              element={
                <Layout>
                  <Archives />
                </Layout>
              }
            />
            <Route
              path="/delete"
              element={
                <Layout>
                  <DeleteNotes />
                </Layout>
              }
            />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
}
