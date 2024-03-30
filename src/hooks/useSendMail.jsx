export default async function Fetch() {
  const response = await fetch('https://github.com/GPAstJS')
  return(
    console.log(response.json())
  )
}