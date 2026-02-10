import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import { GetStatistics, ResetStatistics, StatPercentage } from "../utils/Statistics";
import codeAnswers from "../data/codeAnswers";
import { useState } from "react";

function CodeStat({ code, correct, total }: { code: string, correct: number, total: number }) {

    return (
        <TableRow>

            <TableCell align="center">
                <Tooltip title={codeAnswers.find(ca => ca.code === code)?.answer || 'idk'}>
                    <Typography>{code}</Typography>
                </Tooltip>

            </TableCell>

            <TableCell align="center">
                {StatPercentage({ correct, total })}%
            </TableCell>
            <TableCell align="center">
                {correct} / {total}
            </TableCell>
        </TableRow>

    )
}

export default function Statistics() {
    const [statistics, setStatistics] = useState(() => GetStatistics());

    const reset = () => {
        ResetStatistics();
        setStatistics(() => GetStatistics());
    }

    return (
        <Grid padding={2}>

            <Typography align="center" variant="h2">
                Statistics
            </Typography>
            <TableContainer sx={{
                maxHeight: '70vh',
                overflowY: 'scroll'
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Code
                            </TableCell>
                            <TableCell align="center">
                                Percentage
                            </TableCell>
                            <TableCell align="center">
                                Correct / Total
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(statistics).sort((a, b) => {
                                const statA = statistics[a];
                                const statB = statistics[b];
                                return StatPercentage(statB) - StatPercentage(statA);
                            }).map((code) => {
                                const stat = statistics[code];
                                return (
                                    <CodeStat key={code} code={code} correct={stat.correct} total={stat.total} />
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justifyContent='center' padding={2}>
                <Button variant='contained' onClick={reset}>Reset statistics</Button>
            </Grid>
        </Grid>
    )
}