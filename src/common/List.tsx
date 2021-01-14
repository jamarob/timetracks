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
  padding: 8px 16px;
  list-style: none;
  display: grid;
  grid-auto-rows: min-content;
  overflow-y: scroll;

  li {
    padding: 8px 0;
  }

  li + li {
    padding: 8px 0;
    border-top: 1px solid #666;
  }

  li:last-child:after {
    content: '';
    display: block;
    height: 8px;
  }
`
