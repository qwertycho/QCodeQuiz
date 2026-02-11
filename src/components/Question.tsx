import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
type props = {
    answer: string;
    disabled: boolean;
    onclick: () => void;
    showAnswer: boolean,
    correct: boolean
}

export default function Question({
    answer,
    disabled,
    onclick,
    showAnswer,
    correct
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
            startIcon={showAnswer ? (!clicked ? null : correct ? <CheckCircleIcon /> : <CloseIcon />) : null}
            color={!showAnswer ? 'primary' : correct ? 'success' : 'error'}
            onClick={click}
            aria-disabled={disabled}
            aria-description={answer}
        >
            {answer}
        </Button>
    );
}