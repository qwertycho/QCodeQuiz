import { Button } from "@mui/material";
import type { QCodeAnswer } from "../data/QCode";
import { useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
type props = {
    answer: QCodeAnswer;
    disabled: boolean;
    onclick: () => void;
    showAnswer: boolean
}

export default function Question({
    answer,
    disabled,
    onclick,
    showAnswer,
}: props) {

    const [clicked, setClicked] = useState(false);

    const click = () => {
        if (disabled) {
            return;
        }
        setClicked(true);
        onclick();
    }

    useEffect(() => {
        if (!showAnswer) {
            setClicked(false);
        }
    }, [showAnswer])

    return (
        <Button
            fullWidth
            variant="contained"
            startIcon={showAnswer ? (!clicked ? null : answer.correct ? <CheckCircleIcon /> : <CloseIcon />) : null}
            color={!showAnswer ? 'primary' : answer.correct ? 'success' : 'error'}
            onClick={click}
            aria-disabled={disabled}
        >
            {answer.text}
        </Button>
    );
}