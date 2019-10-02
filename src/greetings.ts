export function getGreeting(whoToGreet: string) {
    if (!whoToGreet || whoToGreet == "")
        whoToGreet = "world"

    return `Hello ${whoToGreet}!`
}