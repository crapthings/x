module.exports = ({ text, children }) => {
  if (children)
    return children()

  return (
    <div>
      {text || 'Unauthorized'}
    </div>
  )
}
