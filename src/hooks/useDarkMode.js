import { useState } from 'react'
export default function setMode() {
  const [darkMode, setDarkMode] = useState(false)
  const set = () => {
    setDarkMode(!darkMode)
  }
  return { darkMode, set }
}
