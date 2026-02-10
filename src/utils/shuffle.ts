export function shuffle<T>(a: T[]) {
    const b = [...a];
    return b.sort(() => 0.5 - Math.random())
}