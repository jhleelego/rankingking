interface Props {
  children?: React.ReactNode
}

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
