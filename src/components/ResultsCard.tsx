import { Card, CardContent, Typography, Button, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import { IQuestions } from "../types/quiz.types";

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
  padding: "0 2rem 1.5rem",
});

const TitleContainer = styled(Box)({
  display: "flex",
  color: "#fff",
  borderRadius: "40px",
  alignItems: "center",
  marginBottom: "15px",
  justifyContent: "center",
});

const ScoreContainer = styled(Box)({
  display: "flex",
  color: "#fff",
  borderRadius: "40px",
  alignItems: "center",
  marginBottom: "15px",
  justifyContent: "center",
  fontSize: "50px",
  fontWeight: 700,
  "& span": {
    fontSize: "30px",
    marginLeft: "10px",
  },
});

const StatsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "60px",
  background: "#f8f7fa",
  padding: "1.5rem 2rem",
  borderRadius: "12px",
  marginTop: "1rem",
  textAlign: "center",
});

const OverflowContainer = styled(Box)({
  maxHeight: 550,
  overflow: "auto",
  padding: "1.25rem",
});

const QuestionsContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  marginTop: "1rem",
  background: "#f8f7fa",
  borderRadius: "12px",
  padding: "1.25rem",
});

const IconContainer = styled(Box)<{ isCorrect?: boolean }>(
  ({ theme, isCorrect }) => ({
    width: "32px",
    height: "32px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontWeight: 700,
    fontSize: "1.2rem",
    background: isCorrect
      ? "rgba(40, 199, 111, 0.15)"
      : "rgba(234, 84, 85, 0.15)",
    color: isCorrect ? "#28c76f" : "#ea5455",
  }),
);

interface IResults {
  answers?: string[];
  questions: IQuestions[];
  handlePlayAgain: () => void;
}

const ResultsCard = ({ answers, questions, handlePlayAgain }: IResults) => {
  const total = questions?.length;

  const correct = questions?.filter((question, idx) => {
    return question?.correct_answer === answers?.[idx];
  })?.length;

  const mistakes = total - correct;

  const accuracy = (correct / total) * 100;

  return (
    <StyledCard>
      <StyledCardContent>
        <CardHeader>
          <TitleContainer>
            <Typography variant="h5" fontWeight={600}>
              You Scored
            </Typography>
          </TitleContainer>
          <ScoreContainer>
            {correct}
            <span>/10</span>
          </ScoreContainer>
        </CardHeader>
        <ContentContainer>
          <StatsContainer>
            <Box>
              <Typography variant="h5" fontWeight={700} color="#28c76f">
                {correct}
              </Typography>
              <Typography color="#b9b9c3" fontSize={14}>
                Correct
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={700} color="#ea5455">
                {mistakes}
              </Typography>
              <Typography color="#b9b9c3" fontSize={14}>
                Incorrect
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={700} color="#4b4b4b">
                {accuracy}%
              </Typography>
              <Typography color="#b9b9c3" fontSize={14}>
                Accuracy
              </Typography>
            </Box>
          </StatsContainer>
          <OverflowContainer>
            {questions?.map((question, idx) => {
              const isCorrect = question?.correct_answer === answers?.[idx];
              return (
                <QuestionsContainer>
                  {isCorrect ? (
                    <IconContainer isCorrect={isCorrect}>+</IconContainer>
                  ) : (
                    <IconContainer isCorrect={isCorrect}>-</IconContainer>
                  )}
                  <Box>
                    <Box mb={2}>
                      <Typography
                        dangerouslySetInnerHTML={{ __html: question?.question }}
                      />
                    </Box>
                    <Typography
                      fontSize={14}
                      color={isCorrect ? "#28c76f" : "#ea5455"}
                      fontWeight={500}
                    >
                      Your answer: {answers?.[idx]}
                    </Typography>
                    <Typography fontSize={14} color="#28c76f" fontWeight={500}>
                      Correct answer: {question?.correct_answer}
                    </Typography>
                  </Box>
                </QuestionsContainer>
              );
            })}
          </OverflowContainer>
          <Box mt={6}>
            <Button
              variant="contained"
              fullWidth
              size="medium"
              onClick={handlePlayAgain}
            >
              Play Again?
            </Button>
          </Box>
        </ContentContainer>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ResultsCard;
