import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 160px;
  height: 80px;
`;

export const Title = styled.h1`
  font-family: var(--font-geist-mono);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  color: var(--title-color);
`;

export const Options = styled.div`
  display: flex;
  gap: 24px;
`;

export const SearchProductInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-input);
  height: 42px;
  width: 352px;
  border-radius: 8px;
  border-color: none;
  border: none;
  color: var(--text-color);
  padding: 10px 16px;

  &:focus {
    outline-color: var(--text-color);
    outline-style: solid 2px;
  }
`;

export const PurchaseCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
