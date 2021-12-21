export interface IQuiz {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: string[]
  options: string[],
}