import { model } from '../model.gpt'
import { CONSTANTES } from '../../consts'
const GPTQuery = async (message) => {
  try {
    const response = await fetch(CONSTANTES.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONSTANTES.API_KEY}`
      },
      body: JSON.stringify(model(message))
    })
    if (response.ok) {
      return await response.json()
    } else {
      throw new Error(`HTTP error: ${response.status}`)
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
export default GPTQuery
