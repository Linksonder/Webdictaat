export class QuestionAnswer {
    Awnser: string;
    IsCorrect: Boolean = false;
    Toggle(): void {
        this.IsCorrect = !this.IsCorrect;
    }
}

export class Question {

    Id: number;
    Question: string;
    Answers: QuestionAnswer[] = [];

    AddAnswer(): void {
        this.Answers.push(new QuestionAnswer());
    };

    RemoveAnswer(answer: QuestionAnswer): void {
        var index = this.Answers.indexOf(answer);
        this.Answers.splice(index, 1) 
    }
}