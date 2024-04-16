export default async function Fetch() {

  let result = await fetch('https://api.github.com/users/GPAstJS')
      const data = await result.json()

      return data
}