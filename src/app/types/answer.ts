export interface ISurveyAnswer {
    surveyAnswerId?: number;
    surveySubmissionId: number;
    surveyQuestionId: number;
    answer: Record<string, any>;
    type: number;
    time: number;
    file?: string | null;
}