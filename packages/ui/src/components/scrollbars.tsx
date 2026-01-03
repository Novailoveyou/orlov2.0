import { ComponentProps } from 'react'
import { Scrollbars as ScrollbarsBase } from 'react-custom-scrollbars'

export const Scrollbars = ({
  onScroll,
  onScrollFrame,
  onScrollStart,
  onScrollStop,
  onUpdate,
  renderView,
  renderTrackHorizontal,
  renderTrackVertical,
  renderThumbHorizontal,
  renderThumbVertical,
  autoHide,
  autoHideTimeout,
  autoHideDuration,
  autoHeight,
  autoHeightMin,
  autoHeightMax,
  thumbMinSize,
  universal,
  ...props
}: ComponentProps<typeof ScrollbarsBase>) => {
  return (
    <ScrollbarsBase
      onScroll={onScroll}
      onScrollFrame={onScrollFrame}
      onScrollStart={onScrollStart}
      onScrollStop={onScrollStop}
      onUpdate={onUpdate}
      renderView={renderView}
      renderTrackHorizontal={renderTrackHorizontal}
      renderTrackVertical={renderTrackVertical}
      renderThumbHorizontal={renderThumbHorizontal}
      renderThumbVertical={renderThumbVertical}
      autoHide={autoHide}
      autoHideTimeout={autoHideTimeout}
      autoHideDuration={autoHideDuration}
      autoHeight={autoHeight}
      autoHeightMin={autoHeightMin}
      autoHeightMax={autoHeightMax}
      thumbMinSize={thumbMinSize}
      universal={universal}
      {...props}
    />
  )
}
