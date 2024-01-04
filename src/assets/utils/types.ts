export interface IQuestionObject {
  id: number;
  question: string;
  answers: string[];
  correct_answer: string;
}

export interface IStoredUserType {
  user: string | null;
}

export interface IStoredHighScoreObject {
  user: string | null;
  highscore: number;
}

export interface IHighScoreObject {
  user: string | null;
  highscore: number;
}