import React, { useRef, useState } from 'react'
import '../styles/CardsProductsStyle.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Button, Card, IconButton, Typography } from '@material-ui/core'
import useHandleAnimationsNextAndPrev from '../costumehook/useHandleAnimationsNextAndPrev'

const CardsProducts = ({
  name,
  description,
  img,
  amount,
  onMouseOver,
  onMouseOut,
  style,
}) => {
  const CardProductOnlyImg = useRef()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const { handleAnimationsNext, handleAnimationsPrev } =
    useHandleAnimationsNextAndPrev()

  return (
    <Card
      style={style}
      className="CardProductContainer"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Typography className="CardProductName">{name}</Typography>
      <div className="CardProductImgAndButtons">
        <div className="CardProductOnlyImgSpace">
          <div ref={CardProductOnlyImg} className="CardProductOnlyImg">
            {img.map((img) => (
              <img key={img} src={img} alt={name} />
            ))}
          </div>
        </div>
        <div className="CardProductNextAndPrev">
          <IconButton
            disabled={buttonDisabled}
            onClick={() =>
              handleAnimationsPrev(
                CardProductOnlyImg,
                img.length,
                setButtonDisabled,
                '-200%'
              )
            }
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            disabled={buttonDisabled}
            onClick={() =>
              handleAnimationsNext(
                CardProductOnlyImg,
                img.length,
                setButtonDisabled,
                '-200%'
              )
            }
          >
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
      <div className="CardProductPricesAndButton">
        <div>{amount}$</div>
        <div className="CardProductButton">
          <Button>Buy Now</Button>
          <Button endIcon={<AddShoppingCartIcon />}>ADD</Button>
        </div>
      </div>
    </Card>
  )
}

export default CardsProducts
