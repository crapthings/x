LoadingView = ({ text }) => <div>{text || 'loading'}</div>

EmptyView = ({ text, children }) => {
  if (children)
    return children()

  return <div>{text || 'empty'}</div>
}
