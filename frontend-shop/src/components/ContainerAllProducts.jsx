import React, { useRef } from 'react'
import ProductGrid from './ProductGrid'
import MenuIcon from '@material-ui/icons/Menu'
import '../styles/ContainerAllProductsStyle.css'
import { IconButton, Typography } from '@material-ui/core'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

const CLASS_NAME = {
  hidden: 'hidden',
  animation: 'animation',
}

const ContainerAllProducts = ({ Product }) => {
  const filterRef = useRef()

  const toggledHiddenClass = () => {
    const currentElement = filterRef.current
    const hasClassHidden = currentElement.classList.contains(CLASS_NAME.hidden)
    if (hasClassHidden) {
      currentElement.classList.toggle(CLASS_NAME.hidden)
      setTimeout(() => {
        currentElement.classList.toggle(CLASS_NAME.animation)
      }, 200)
      console.log('le hice trmendo focus')
      currentElement.focus()
      return
    }
    currentElement.style.transition = 'margin-left 0.2s'
    currentElement.style.marginLeft = '-100%'
    setTimeout(() => {
      currentElement.classList.toggle(CLASS_NAME.hidden)
      currentElement.style.transition = 'none'
      currentElement.style.marginLeft = '0'
      currentElement.classList.toggle(CLASS_NAME.animation)
    }, 200)
  }

  return (
    <div className="ContainerAllProducts">
      <div className="ContainerAllProducts-TopBar">
        <div className="ContainerAllProducts-TopBar-Title-Icon hiddenReverse">
          <IconButton onClick={toggledHiddenClass}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="ContainerAllProducts-TopBar-Title">
          Dragon Volador XYZ
        </div>
      </div>
      <div className="ContainerAllProducts-BoxProductAndFilters">
        <div
          className="ContainerAllProducts-BoxProductAndFilters-filters absolute hidden animation"
          ref={filterRef}
          tabIndex="-1"
          onBlurCapture={(e) => {
            console.log(e.target.contains(filterRef.current))

            if (filterRef.current === e.target) {
              if (!e.target.contains(filterRef.current)) {
                toggledHiddenClass()
                return
              }
            }
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: '10px 0',
            }}
          >
            <IconButton
              onClick={toggledHiddenClass}
              style={{ position: 'absolute' }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <Typography style={{ flexGrow: 1, textAlign: 'center' }}>
              Filter
            </Typography>
          </div>
          <div style={{ height: '50%', backgroundColor: 'red' }}></div>
        </div>

        <ProductGrid Product={Product} />
      </div>
    </div>
  )
}

export default ContainerAllProducts
