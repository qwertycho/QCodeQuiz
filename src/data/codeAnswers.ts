export type codeAnswer = {
    code: string,
    answer: string
}

const codeAnswers : codeAnswer[] = [
    {
        code: 'QRA?',
        answer: 'what is the name of the station?'
    },
    {
        code: 'QRB?',
        answer: 'what is the distance between our stations?'
    },
    {
        code: 'QRG?',
        answer: 'what is my frequency?'
    },
    {
        code: 'QRL?',
        answer: 'is this frequency in use?'
    },
    {
        code: 'QRM?',
        answer: 'do you suffer from interference?'
    },
    {
        code: 'QRN?',
        answer: 'do you suffer from static?'
    },
    {
        code: 'QRO?',
        answer: 'shall I increase power?'
    },
    {
        code: 'QRP?',
        answer: 'shall I decrease power?'
    },
    {
        code: 'QRQ?',
        answer: 'shall I send faster?'
    },
    {
        code: 'QRS?',
        answer: 'shall I send slower?'
    },
    {
        code: 'QRT?',
        answer: 'shall I stop sending?'
    },
    {
        code: 'QRU?',
        answer: 'have you anything for me?'
    },
    {
        code: 'QRV?',
        answer: 'are you ready?'
    },
    {
        code: 'QRX?',
        answer: 'when will you call me again?'
    },
    {
        code: 'QRZ?',
        answer: 'who is calling me?'
    },
    {
        code: 'QSA?',
        answer: 'what is the strength of my signal?'
    },
    {
        code: 'QSB?',
        answer: 'do you experience fading?'
    },
    {
        code: 'QSL?',
        answer: 'can you confirm receipt of my signal?'
    },
    {
        code: 'QSO?',
        answer: 'can you communicate with me?'
    },
    {
        code: 'QSP?',
        answer: 'will you relay to ...?'
    },
    {
        code: 'QSQ?',
        answer: 'shall I send a message for you?'
    },
    {
        code: 'QSY?',
        answer: 'shall I change to frequency ...?'
    },
    {
        code: 'QTH?',
        answer: 'what is your location?'
    }
]

export default codeAnswers as codeAnswer[];