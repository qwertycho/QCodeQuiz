export type QCode = {
    code : string;
    answers : Array<QCodeAnswer>;
}


export type QCodeAnswer = {
    text: string;
    correct: boolean;
}