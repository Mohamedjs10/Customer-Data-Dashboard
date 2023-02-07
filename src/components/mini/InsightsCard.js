import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function InsightsCard({ insights }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        mt: 2,
        mb: 2,
      }}
    >
      {insights?.map((item, index) => (
        <Card
          key={index}
          raised
          sx={{
            width: 150,
          }}
        >
          <CardContent
            sx={{
              height: 150,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              {item.name}
            </Typography>

            <Typography
              sx={{ fontWeight: "bold", fontSize: 30, color: "#009be5" }}
            >
              {item.count}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
