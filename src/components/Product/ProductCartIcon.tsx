import React, { FC } from 'react'
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'

const StyleProductCartIconWrap = styled.div<IProductPriceProps>`
  @media (max-width: 375px) {
    bottom: 17px;
    right: -7px;
  }
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: -12px;
  right: 0;
  width: 50px;
  height: 50px;
  transition: background 0.2s 0.2s ease-out;
  border-radius: 50%;
  cursor: ${(props) => (props.loading ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) => !props.loading && '#fcfcfc'};
  }
`

const StyleProductCartIcon = styled.img`
  @media (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
  width: 25px;
  height: 25px;
`

const StyleProductCartLoading = styled(LoadingOutlined)`
  color: #3869da;
`

interface IProductPriceProps {
  active?: boolean
  loading?: boolean
  style?: { [k: string]: string }
}

const ProductCartIcon: FC<IProductPriceProps> = ({ active, loading, style }) => {
  return (
    <StyleProductCartIconWrap active={active} loading={loading} style={style}>
      {loading ? (
        <StyleProductCartLoading />
      ) : (
        <StyleProductCartIcon src={active ? '/images/ActiveCartIcon.svg' : 'images/CartIcon.svg'} alt="카트아이콘" />
      )}
    </StyleProductCartIconWrap>
  )
}

export default React.memo(ProductCartIcon)
