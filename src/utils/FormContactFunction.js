export async function SaveOneContact({ hook }){
  const response = await fetch(`${UrlFetch}`,{
    method: "POST",
    body: JSON.stringify({ hook })
  })
  return await response.json()
 }


export const UrlFetch = 'http://localhost:8000'

