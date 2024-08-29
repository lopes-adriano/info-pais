import countries from "../data/countries";

export default defineEventHandler(async (event) => {
    const { name } = await readBody(event)
    const country = countries.paises.find((country) => country.nome == name)
    return country
})