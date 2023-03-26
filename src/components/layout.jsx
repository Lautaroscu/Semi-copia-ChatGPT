import { Aside } from './aside'
import setMode from '../hooks/useDarkMode'
export function Layout({ children }) {
  const { darkMode, set } = setMode()
  return (
    <>
      <section
        className={
          darkMode
            ? 'w-full relative bg-gptgray text-white  h-screen'
            : 'w-full relative bg-white  text-black  h-screen'
        }
      >
        <Aside set={set} />

        {children}
      </section>
    </>
  )
}
