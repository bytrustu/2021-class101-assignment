import React, { FC, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyleCartSelectedItemWrap = styled.div`
  height: auto;
  min-height: 110px;
  & > div.cart-selected-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
  }
`

const CartSelectedItemTitle = styled.h3`
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  top: 15px;
  left: 20px;
`

const StyleCartSelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.15px;
  color: #1b1c1d;

  & + & {
    margin-top: 14px;
  }
`

const StyleMultiplyIcon = styled.img`
  margin: 0 10px;
  width: 10px;
  height: 10px;
`

const CartSelectedItemSkeleton = styled(Skeleton)`
  height: 110px;
  width: 100%;
`

interface ICartSelectedItemProps {
  cartLoading?: boolean
}

const CartSelectedItem: FC<ICartSelectedItemProps> = ({ cartLoading }) => {
  return (
    <>
      <StyleCartSelectedItemWrap>
        {cartLoading ? (
          <CartSelectedItemSkeleton />
        ) : (
          <div className="cart-selected-wrap">
            <CartSelectedItemTitle>구매목록</CartSelectedItemTitle>
            <StyleCartSelectedItem>
              소복소복 바늘 끝에서 피어오르는 자수 <StyleMultiplyIcon src="/images/Cross.svg" alt="곱하기 아이콘" /> 3
            </StyleCartSelectedItem>
            <StyleCartSelectedItem>
              소복소복 바늘 끝에서 피어오르는 자수 <StyleMultiplyIcon src="/images/Cross.svg" alt="곱하기 아이콘" /> 3
            </StyleCartSelectedItem>
            <StyleCartSelectedItem>
              소복소복 바늘 끝에서 피어오르는 자수 <StyleMultiplyIcon src="/images/Cross.svg" alt="곱하기 아이콘" /> 3
            </StyleCartSelectedItem>
          </div>
        )}
      </StyleCartSelectedItemWrap>
    </>
  )
}

export default React.memo(CartSelectedItem)
