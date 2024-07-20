export const ProgressiveBlur = () => {
  const blurLevels = [0.078125, 0.15625, 0.3125, 0.625, 1.25, 2.5, 5, 10]
  const segments = blurLevels.length

  return (
    <div className='fixed bottom-0 left-0 right-0 h-32 pointer-events-none'>
      {blurLevels.map((blur, index) => (
        <div
          key={index}
          className='absolute inset-0'
          style={{
            zIndex: 1000 + index,
            backdropFilter: `blur(${blur}px)`,
            maskImage: `linear-gradient(rgba(0, 0, 0, 0) ${
              (index / segments) * 100
            }%, rgb(0, 0, 0) ${((index + 1) / segments) * 100}%, rgb(0, 0, 0) ${
              ((index + 2) / segments) * 100
            }%, rgba(0, 0, 0, 0) ${((index + 3) / segments) * 100}%)`,
          }}
        />
      ))}
    </div>
  )
}
