import React, { useMemo } from 'react'

import dynamic from 'next/dynamic'

import { columnShuffle, Hentai } from '@rayriffy-h/helper'

import { useMedia } from 'web-api-hooks'

import { Poster } from './poster'

interface IProps {
  galleries: Hentai[]
}

const Component: React.FC<IProps> = React.memo(props => {
  const { galleries } = props

  const mediaMd = useMedia('(min-width: 768px)')
  const mediaLg = useMedia('(min-width: 1024px)')

  const column = useMemo(() => (mediaLg ? 4 : mediaMd ? 3 : 2), [
    mediaLg,
    mediaMd,
  ])

  return (
    <div className="flex flex-column flex-wrap">
      {columnShuffle(galleries, column).map((chunk, i) => (
        <section
          key={`listing-section-${i}`}
          className={column === 2 ? 'w-1/2' : column === 3 ? 'w-1/3' : 'w-1/4'}
        >
          {chunk.map(hentai => (
            <div key={`poster-${hentai.id}`} className="p-3">
              <Poster hentai={hentai} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
})

export const Listing = dynamic(async () => Component, {
  ssr: false,
})
