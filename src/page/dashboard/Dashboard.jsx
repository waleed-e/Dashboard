import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
const Dashboard = () => {
  return (
    <div>
      <Box sx={{ textAlign: "right", mb: 1.3 }}>
      <Button  sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary">
        <DownloadOutlined />
        Download Reports
      </Button>
      </Box>
<Row1/>
<Row2/>
<Row3/>
    </div>
  );
};

export default Dashboard;
