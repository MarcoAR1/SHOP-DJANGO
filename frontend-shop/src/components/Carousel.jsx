import { IconButton } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import '../styles/Carousel.css'
import useHandleAnimationsNextAndPrev from '../costumehook/useHandleAnimationsNextAndPrev'
const Carousel = React.forwardRef(({ children, ProductLength }, ref) => {
  const CorouselItems = useRef()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [activate, setActivate] = useState(false)
  const [idInterva, setIdInterva] = useState('')
  const { handleAnimationsNext, handleAnimationsPrev } =
    useHandleAnimationsNextAndPrev()
  let minLengthForAutoPlay = Math.floor((window.innerWidth * 0.8) / 188.6)

  const handleDesactiveAutoMove = () => {
    if (ProductLength > minLengthForAutoPlay) {
      setActivate(false)
    }
  }

  const handleActiveAutoMove = () => {
    if (ProductLength > minLengthForAutoPlay) {
      setActivate(true)
    }
  }

  useImperativeHandle(ref, () => ({
    handleDesactiveAutoMove,
    handleActiveAutoMove,
  }))

  useEffect(() => {
    if (ProductLength > minLengthForAutoPlay) {
      if (activate) {
        const interval = setInterval(() => {
          if (CorouselItems.current) {
            handleAnimationsNext(
              CorouselItems,
              ProductLength,
              setButtonDisabled,
              '-188.6px'
            )
          }
        }, 5000)
        setIdInterva(interval)
        return () => clearInterval(interval)
      }
      clearInterval(idInterva)
    }
    // eslint-disable-next-line
  }, [activate])
  useEffect(() => {
    if (ProductLength > minLengthForAutoPlay) {
      setTimeout(() => {
        setActivate(true)
      }, 200)
    }
  }, [ProductLength, minLengthForAutoPlay])

  return (
    <div className="carouselContainer">
      <div className="carouselContainerRelative">
        <div className="carouselItems" ref={CorouselItems}>
          {children}
        </div>
      </div>
      <div className="carouselContainerNextAndPrev">
        <IconButton
          disabled={buttonDisabled}
          onClick={() =>
            handleAnimationsPrev(
              CorouselItems,
              ProductLength,
              setButtonDisabled,
              '-188.6px'
            )
          }
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          disabled={buttonDisabled}
          onClick={() =>
            handleAnimationsNext(
              CorouselItems,
              ProductLength,
              setButtonDisabled,
              '-188.6px'
            )
          }
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  )
})

Carousel.displayName = 'Carousel'

export default Carousel
