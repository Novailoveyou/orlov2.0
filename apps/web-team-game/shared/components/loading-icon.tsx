import LoadingIcons from 'react-loading-icons'

export const LoadingIcon = ({
  width = '48',
  height = '48',
  className,
}: {
  width?: string
  height?: string
  className?: string
}) => {
  return (
    <LoadingIcons.Bars width={width} height={height} className={className} />
  )
}
