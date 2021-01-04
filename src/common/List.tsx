import styled from 'styled-components/macro'

interface Props<T> {
  items: T[]
  genKey: (item: T) => string | number
  render: (item: T) => JSX.Element
}

export default function List<T>({ items, genKey, render }: Props<T>) {
  return (
    <UnorderedList>
      {items.map((item) => (
        <li key={genKey(item)}>{render(item)}</li>
      ))}
    </UnorderedList>
  )
}

const UnorderedList = styled.ul`
  margin: 0;
  padding: 16px;
  list-style: none;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 16px;
  overflow-y: scroll;

  li:last-child::after {
    content: '';
    display: block;
    height: 16px;
  }
`
