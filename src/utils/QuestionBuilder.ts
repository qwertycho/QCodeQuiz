import { qCodes } from "../data/codeAnswers";
import type { QCode, QCodeAnswer } from "../data/QCode";
import { shuffle } from "./shuffle";

export default function QuestionsBuilder() {

    const codes = shuffle(qCodes);

    const questions: QCode[] = [];

    codes.forEach(code => {

        const wrongAnswers = shuffle(qCodes)
            .slice(0, 3) //return 3 as this can contain the original question which we filter out
            .filter(ans => ans != code)
            .map(ans => ({ text: ans, correct: false }));

        const answers: QCodeAnswer[] = [
            { text: code, correct: true },
            { text: wrongAnswers[0].text, correct: wrongAnswers[0].correct },
            { text: wrongAnswers[1].text, correct: wrongAnswers[1].correct }
        ]

        const question: QCode = {
            code: code,
            answers: shuffle(answers)
        }

        questions.push(question);
    });


    return shuffle(questions);
}