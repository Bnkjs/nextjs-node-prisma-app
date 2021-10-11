import fetch from 'node-fetch';


export async function SaveOneContactResObj(userDatas){
  try {
    const response = await fetch(`http://localhost:8000`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDatas)
    })
    return await response.json()
  } catch (error) {
    return error
  }
}

export async function SaveOneContactResStatus(userDatas){
  try {
    const response = await fetch(`http://localhost:8000`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDatas)
    })
    return await response.status
  } catch (error) {
    return error
  }
}



export const UrlFetch = 'http://localhost:8000'

