export interface IQuestionInput {
  title: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  creatorName: string;
  coachingId?: string | null;
}
