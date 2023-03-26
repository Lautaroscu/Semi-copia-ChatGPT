import { useState } from 'react'
import GPTQuery from '../services/GPT'
export default function useResponse() {
  const [chatHistory, setChatHistory] = useState([])
  const getResponse = async (user) => {
    const newResponse = await GPTQuery(user)
    const content = newResponse.choices[0].message.content

    setChatHistory([
      ...chatHistory,
      {
        id: content.length,
        ia: false,
        message: user
      },
      {
        id: content.length + 1,
        ia: true,
        message: content
      }
    ])
  }

  console.log(...chatHistory)

  return { chatHistory, getResponse }
}
