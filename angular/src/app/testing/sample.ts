export function factorial(n:number) {
    if (n<= 0) {return undefined}
    return(n===1) ? 1 : n*factorial(n-1)
}