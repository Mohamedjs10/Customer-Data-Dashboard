import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { textFixer } from "../contents/utils/general-utils";
export default function InsightsCard({ insights }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 3,
        mt: 3,
        mb: 5,
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
              height: 180,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#5b6470",
                textAlign: "center",
              }}
            >
              {textFixer(item.name)}
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
