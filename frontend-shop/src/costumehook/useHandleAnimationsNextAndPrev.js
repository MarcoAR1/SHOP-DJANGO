const useHandleAnimationsNextAndPrev = () => {
  const handleAnimationsNext = (ref, length, disabledButton, distance) => {
    const CurrentTarget = ref.current
    if (length < 2) {
      return
    }
    disabledButton(true)
    CurrentTarget.style.transition = 'all 0.2s'
    CurrentTarget.style.marginLeft = distance
    setTimeout(() => {
      CurrentTarget.style.transition = 'none'
      CurrentTarget.style.marginLeft = '0'
      const fristElement = CurrentTarget.children[0]
      CurrentTarget.insertAdjacentElement('beforeend', fristElement)
      disabledButton(false)
    }, 200)
  }

  const handleAnimationsPrev = (ref, length, disabledButton, distance) => {
    const CurrentTarget = ref.current
    if (length < 2) {
      return
    }
    disabledButton(true)
    const lastElement = CurrentTarget.children[length - 1]
    CurrentTarget.insertAdjacentElement('afterbegin', lastElement)
    CurrentTarget.style.marginLeft = distance
    setTimeout(() => {
      CurrentTarget.style.transition = 'all 0.2s'
      CurrentTarget.style.marginLeft = '0'
      setTimeout(() => {
        CurrentTarget.style.transition = 'none'
        disabledButton(false)
      }, 200)
    }, 1)
  }

  return { handleAnimationsNext, handleAnimationsPrev }
}

export default useHandleAnimationsNextAndPrev
