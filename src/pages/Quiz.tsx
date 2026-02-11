import { useMemo, useState } from 'react'
import QuestionsBuilder from '../utils/QuestionBuilder'
import Question from '../components/Question';
import { Button, Grid, Typography } from '@mui/material';
import SetQuestionStatistic from '../utils/Statistics';
import { useTranslation } from 'react-i18next';

export default function Quiz() {

    const { t } = useTranslation();


    const questions = useMemo(() => {
        return QuestionsBuilder();
    }, []);

    const [index, setIndex] = useState(0);
    const [submitResult, setSubmitResult] = useState<null | string>(null);
    const [showAnswers, setShowAnswers] = useState(false);

    const nextQuestion = () => {
        setSubmitResult(null);
        setShowAnswers(false);
        setIndex(prev => {
            if (prev === questions.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    }

    const submitAnswer = (i: number) => {
        setShowAnswers(true);
        const question = questions[index];
        SetQuestionStatistic(question.code, question.answers[i].correct);
    }

    return (
        <>
            <Typography
                align='center'
                variant='h2'
                paddingTop={10}>
                {questions[index].code}
            </Typography>

            <Grid
                container
                direction='column'
                padding={{ xs: 2, md: 10 }}
                size={4}

                alignItems='stretch'>
                {
                    questions[index].answers.map((a, i) => {
                        return (
                            <Grid key={i} padding={1}>
                                <Question
                                    key={i}
                                    answer={t(a.text)}
                                    correct={a.correct}
                                    disabled={!!submitResult}
                                    onclick={() => { submitAnswer(i) }}
                                    showAnswer={showAnswers}
                                /></Grid>)
                    })
                }
            </Grid>

            {showAnswers && (
                <Grid container justifyContent='right' padding={2}>

                    <Grid>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={nextQuestion}>
                            next question
                        </Button>
                    </Grid>

                </Grid>

            )}

        </>
    )
}
