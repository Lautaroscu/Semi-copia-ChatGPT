import { Avatar } from './Avatar'
import { GptIcon } from './Icons/Icons'
import { TypingEffect } from './typingEffect'
import { useTypingEffect } from '../hooks/TypingEffect'
export function Message({ message, ia }) {
  const avatar = ia ? (
    <GptIcon />
  ) : (
    <img
      src='https://pbs.twimg.com/profile_images/1634672060369608704/BiF11xfa_400x400.jpg'
      alt='foto de lautaro'
    />
  )
  const { displayText, showCursor } = useTypingEffect(message)

  const textElement = ia ? (
    <TypingEffect displayText={displayText} showCursor={showCursor} />
  ) : (
    message
  )

  return (
    <div className={ia ? 'bg-gptligthgray ' : 'bg-gptgray '}>
      <article className='flex gap-4 m-auto max-w-3xl p-4'>
        <Avatar>{avatar}</Avatar>
        <div className='min-h-[20px] flex flex-1 flex-col items-start gap-4 whitespace-pre-wrap '>
          <div className='prose-invert w-full break-words'>
            <p>{textElement}</p>
          </div>
        </div>
      </article>
    </div>
  )
}
