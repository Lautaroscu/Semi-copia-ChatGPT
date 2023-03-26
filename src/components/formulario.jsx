import { SendIcon } from './Icons/Icons'

export default function Form({
  handleSubmit,
  userRef,
  handleChange,
  handleKeyDown
}) {
  return (
    <div className='absolute bottom-0 left-0 right-0 ml-32 '>
      <form
        className='flex flex-row max-w-3xl pt-6 mb-6 m-auto  '
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        <div className=' flex flex-row flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg ml-32 bg-gptligthgray border-gray-900/50'>
          <textarea
            onChange={handleChange}
            ref={userRef}
            className='h-6  w-full bg-transparent outline-none resize-none  border-0 m-0 '
            placeholder='ask what you want...'
            rows={1}
            tabIndex={0}
            autoFocus
            defaultValue=''
            id='inputUser'
          />
          <button type='submit' className=' p-1 rounded-md '>
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  )
}
