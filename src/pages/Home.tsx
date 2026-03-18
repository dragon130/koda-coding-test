import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import WelcomeCard from "../components/WelcomeCard";
import QuizCard from "../components/QuizCard";
import ResultsCard from "../components/ResultsCard";
import { styled } from "@mui/material/styles";

import useAxios from "axios-hooks";

import { IQuestions } from "../types/quiz.types";
import { Typography } from "@mui/material";

const Container = styled(Box)({
  background: "#667eea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  minHeight: "100vh",
  padding: "1rem",
});

const Home = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean",
  );

  const [begin, setIsBegin] = useState<boolean>(false);
  const [results, setResults] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (data?.results?.length > 0) {
      setQuestions(data?.results);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setDisplayError(true);
    }
  }, [error]);

  const handlePlayAgain = () => {
    setResults(false);
    setIndex(0);
    setAnswers([]);
    refetch();
  };

  const handleBegin = () => {
    setIsBegin(true);
  };
  const handleAnswer = (answer: string) => {
    const tempAnswers = [...answers];
    tempAnswers[index] = answer;

    const currentIndex = index + 1;

    setAnswers(tempAnswers);
    if (currentIndex === questions?.length) {
      setResults(true);
    } else {
      setIndex(index + 1);
    }
  };

  const maxQuestions = questions?.length;

  if (displayError) {
    return (
      <Container>
        <Box
          sx={{
            borderRadius: "12px",
            padding: "2rem",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            gap: "40px",
          }}
        >
          <Typography variant="h5">
            Oops! Looks like you made too many requests...
          </Typography>
          <Typography variant="h5">Please refresh the page</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      {!begin && <WelcomeCard handleBegin={handleBegin} />}
      {begin && !results && (
        <>
          {loading ? (
            <div>
              <CircularProgress sx={{ color: "#fff" }} />
            </div>
          ) : (
            <QuizCard
              question={questions[index]}
              progress={index + 1}
              handleAnswer={handleAnswer}
              maxQuestions={maxQuestions}
            />
          )}
        </>
      )}
      {results && (
        <ResultsCard
          questions={questions}
          answers={answers}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </Container>
  );
};

export default Home;
