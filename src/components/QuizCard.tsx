import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

import { IQuestions } from "../types/quiz.types";

import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  borderRadius: "20px",
  background: "#fff",
  width: 500,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const StyledCardContent = styled(CardContent)({
  padding: 0,
});

const CardHeader = styled(Box)({
  background: "linear-gradient(135deg, #7367f0, #9e95f5)",
  padding: "2rem 2rem 1.5rem",
});

const ContentContainer = styled(Box)({
  padding: "2rem 2rem 1.5rem",
});

const CategoryContainer = styled(Box)({
  background: "rgba(255,255,255,0.2)",
  display: "inline-flex",
  gap: "0.5rem",
  color: "#fff",
  padding: "0.3rem 1.5rem",
  borderRadius: "40px",
  alignItems: "center",
  marginBottom: "15px",
  "& span": {
    marginTop: "2px",
  },
});

const StyledLinear = styled(LinearProgress)({
  marginTop: "0.5rem",
  background: "rgba(255,255,255,0.2)",
  "& .MuiLinearProgress-bar": {
    background: "#fff",
  },
});

const QuestionContainer = styled(Box)({
  background: "#f8f7fa",
  border: "2px solid #ebe9f1",
  borderRadius: "16px",
  padding: "2.5rem 2rem",
  minHeight: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "2rem",
  position: "relative",
  overflow: "hidden",
  color: "#4b4b4b",
  fontFamily: "Public Sans",
  fontWeight: 600,
  fontSize: 18,
});

interface IQuizCardProps {
  question: IQuestions;
  handleAnswer: (answer: string) => void;
  progress: number;
  maxQuestions: number;
}

const QuizCard = ({
  question,
  handleAnswer,
  progress,
  maxQuestions,
}: IQuizCardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <CardHeader>
          <CategoryContainer>
            <span>
              <ViewInArIcon />
            </span>
            <div
              style={{ color: "#fff", fontFamily: "Public Sans" }}
              dangerouslySetInnerHTML={{ __html: question?.category }}
            />
          </CategoryContainer>
          <Box>
            <Typography color="#fff">
              Question {progress} of {maxQuestions}
            </Typography>
            <StyledLinear
              variant="determinate"
              value={progress * 10}
              sx={{ height: 6, borderRadius: 5, color: "#fff" }}
            />
          </Box>
        </CardHeader>
        <ContentContainer>
          <QuestionContainer
            dangerouslySetInnerHTML={{ __html: question?.question }}
          />

          <Box sx={{ display: "flex", gap: 2, mt: 6 }}>
            <Button
              fullWidth
              variant="outlined"
              color="success"
              startIcon={<CheckCircleOutlineIcon />}
              onClick={() => handleAnswer("True")}
            >
              True
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              startIcon={<HighlightOffIcon />}
              onClick={() => handleAnswer("False")}
            >
              False
            </Button>
          </Box>
        </ContentContainer>
      </StyledCardContent>
    </StyledCard>
  );
};

export default QuizCard;
