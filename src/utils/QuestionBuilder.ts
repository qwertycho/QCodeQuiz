import type { codeAnswer } from "../data/codeAnswers";
import type { QCode, QCodeAnswer } from "../data/QCode";
import { shuffle } from "./shuffle";

export default function QuestionsBuilder(codeAnswers: codeAnswer[]) {

    const questions: QCode[] = [];

    codeAnswers.forEach(ca => {

        const wrongAnswers = shuffle(codeAnswers)
            .slice(0, 3) //return 3 as this can contain the original question which we filter out
            .filter(ans => ans.code !== ca.code)
            .map(ans => ({ text: ans.answer, correct: false }));

        const answers: QCodeAnswer[] = [
            { text: ca.answer, correct: true },
            { text: wrongAnswers[0].text, correct: wrongAnswers[0].correct },
            { text: wrongAnswers[1].text, correct: wrongAnswers[1].correct }
        ]

        const question: QCode = {
            code: ca.code,
            answers: shuffle(answers)
        }

        questions.push(question);
    });


    return shuffle(questions);
}