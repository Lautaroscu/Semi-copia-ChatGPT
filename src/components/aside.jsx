import { NewChatIcon, LigthIcon } from './Icons/Icons'

export function Aside({ set }) {
  return (
    <aside className='bg-gptdarkgray fixed flex w-64 h-screen flex-col '>
      <nav className='flex flex-col flex-1 p-2 space-y-1 h-full'>
        <NewChatIcon />
        <LigthIcon set={set} />
      </nav>
    </aside>
  )
}
