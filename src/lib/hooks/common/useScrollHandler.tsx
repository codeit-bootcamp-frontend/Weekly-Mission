import { useState, useEffect } from 'react'

const useScrollHandler = (threshold: number) => {
  const [isExceedThreshold, setIsExceedThreshold] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsExceedThreshold(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isExceedThreshold
}

export default useScrollHandler
