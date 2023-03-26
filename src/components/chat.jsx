import useResponse from '../hooks/useGPTresponse'
import Form from './formulario'
import { Message } from './message'
// eslint-disable-next-line import/no-duplicates
import { useRef } from 'react'
export function Chat() {
  const userRef = useRef()
  const { chatHistory, getResponse } = useResponse()
  const handleSubmit = (e) => {
    e?.preventDefault()
    const { value } = userRef.current
    getResponse(value)
    userRef.current.value = ''
  }
  const handleChage = () => {
    const el = userRef.current
    const scrollHeight = el.scrollHeight
    el.style.height = scrollHeight + 'px'
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
      resetHeight()
    }
  }
  const resetHeight = () => {
    const el = userRef.current
    el.style.height = 'auto'
  }

  return (
    <div className='flex flex-1 flex-col h-full ml-64 w-full'>
      <main className='h-full w-full'>
        {chatHistory &&
          chatHistory.map(({ message, ia, user }) => (
            <Message key={message} ia={ia} user={user} message={message} />
          ))}
      </main>
      <Form
        handleSubmit={handleSubmit}
        userRef={userRef}
        handleChange={handleChage}
        handleKeyDown={handleKeyDown}
      />
    </div>
  )
}
