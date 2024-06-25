function TabBtn({ children, onSelect }) {
  return <button onClick={onSelect}>{children}</button>;
}

export default TabBtn;
