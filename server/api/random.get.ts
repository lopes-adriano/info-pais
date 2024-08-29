import countries from "../data/countries"

export default defineEventHandler(() => {
    return {
        country : countries.paises[Math.floor(Math.random() * countries.paises.length)],
    }
})