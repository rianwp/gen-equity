const Container = ({children, className}) => {
  return (
    <div className={`container mx-auto md:px-0 ${className}`}>{children}</div>
  )
}

export default Container