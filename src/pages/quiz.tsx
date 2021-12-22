import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IQuiz } from "entities/quiz.entity";
import { nanoid } from "nanoid";

const Quiz: NextPage = () => {
  const [quiz, setQuiz] = useState<IQuiz[]>([]);

  async function fetchQuestions() {
    const res = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await res.json();

    const quiz = data.results.map((question: any) => {
      return {
        ...question,
        correctAnswer: question.correct_answer,
        incorrectAnswer: question.incorrect_answers,
        options: [...question.incorrect_answers, question.correct_answer],
        answer: "",
        id: nanoid(),
        result: false,
      };
    });

    setQuiz(quiz);
  }

  function selectAnswer(answer: string, id: string) {
    setQuiz((prevQuiz) =>
      prevQuiz.map((question) => {
        if (question.id === id) {
          return {
            ...question,
            answer,
          };
        } else {
          return question;
        }
      })
    );
  }

  const styles = {
    backgroundColor: "#D6DBF5",
    borderColor: "#D6DBF5",
  };

  const correctStyles = {
    backgroundColor: "#94D7A2",
    borderColor: "#94D7A2",
  };

  const incorrectStyles = {
    backgroundColor: "#F8BCBC",
    borderColor: "#F8BCBC",
  };

  const [haveBeenCheck, setHaveBeenCheck] = useState(false);

  function checkAnswer() {
    setQuiz((prevQuiz) =>
      prevQuiz.map((question) => {
        if (question.answer === question.correctAnswer) {
          return {
            ...question,
            result: true,
          };
        } else {
          return {
            ...question,
            result: false,
          };
        }
      })
    );

    setHaveBeenCheck(true);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="bg-smoke">
      <Head>
        <title>Lets do your best | Quizzical Trivia</title>
        <meta name="description" content="Lets do your best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-full p-16 w-full">
        <div className="w-2/4 flex flex-col">
          {quiz.length !== 0 ? (
            quiz.map((question, index) => (
              <div key={index} className="w-full">
                <h3 className="text-lavender-500 text-2xl font-bold">
                  {question.question}
                </h3>
                <div className="flex flex-row gap-4 mt-4">
                  {question.options.map((option, index) => (
                    <span
                      key={`option-${index}`}
                      onClick={() => selectAnswer(option, question.id)}
                      style={
                        haveBeenCheck && question.result && option === question.answer
                          ? correctStyles
                          : haveBeenCheck && !question.result && option === question.answer
                          ? incorrectStyles
                          : option === question.answer
                          ? styles
                          : {}
                      }
                      className="text-lavender-600 border-lavender-500 border rounded-full px-3 py-1 text-sm font-semibold hover:bg-lavender-100 hover:border-lavender-100 text-center"
                    >
                      {option}
                    </span>
                  ))}
                </div>
                <hr className="border-lavender-100 border w-full my-4" />
              </div>
            ))
          ) : (
            <div>...loading</div>
          )}

          <button
            className="bg-lavender-600 py-3 px-6 text-xl font-semibold text-smoke rounded-lg mt-6"
            onClick={checkAnswer}
          >
            Check Answer
          </button>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
