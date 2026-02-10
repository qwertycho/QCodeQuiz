export type stat = {
    correct: number;
    total: number;
}

export function StatPercentage(stat: stat) : number {
    if (stat.total === 0) {
        return 0;
    }
    return Number((stat.correct / stat.total * 100).toFixed(0));
}

export default function SetQuestionStatistic(code: string, correct: boolean) {
    const statistics = JSON.parse(localStorage.getItem('statistics') || '{}');

    if (!statistics[code]) {
        statistics[code] = {
            correct: 0,
            total: 0,
        }
    }

    statistics[code].total += 1;
    if (correct) {
        statistics[code].correct += 1;
    }

    localStorage.setItem('statistics', JSON.stringify(statistics));
}

export function GetStatistics(): Record<string, stat> {
    const statistics = JSON.parse(localStorage.getItem('statistics') || '{}');
    return statistics;
}

export function ResetStatistics() {
    localStorage.removeItem('statistics');
}