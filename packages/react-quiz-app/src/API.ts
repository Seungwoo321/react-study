import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum Type {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty, type: string) => {
  const endpoint = `/api/v1/questions?amount=${amount}&difficulty=${difficulty}&type=${type}`
  const data = await (await fetch(endpoint)).json()
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer
      ])
    }
  ))
}