import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  borderRadius: "20px",
  background: "#fff",
  width: 500,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});
const StyledCardContent = styled(CardContent)({
  padding: "3rem 2rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  gap: "20px",
});

const StyledTypography = styled(Typography)({
  color: "#4b4b4b",
});

const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  background: "#7367f0",
  borderRadius: "50%",
  height: "80px",
  width: "80px",
});

interface WelcomeCardProps {
  handleBegin: () => void;
}

const WelcomeCard = ({ handleBegin }: WelcomeCardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <IconContainer>
          <HelpOutlineIcon sx={{ width: 40, height: 40 }} />
        </IconContainer>
        <Box textAlign="center">
          <StyledTypography variant="h2" sx={{ fontSize: "2rem" }}>
            Welcome to the
          </StyledTypography>

          <StyledTypography variant="h2" sx={{ fontSize: "2rem" }}>
            Trivia Challenge!
          </StyledTypography>
        </Box>

        <StyledTypography>
          You will be presented with 10 True or False questions.
        </StyledTypography>

        <StyledTypography variant="h5" sx={{ color: "#7367f0" }}>
          Can you score 100%?
        </StyledTypography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleBegin}
          fullWidth
          sx={{ fontSize: "1.1rem" }}
        >
          Begin
        </Button>
      </StyledCardContent>
    </StyledCard>
  );
};

export default WelcomeCard;
