import React from 'react'

import { Hentai } from '@rayriffy-h/helper'

import { Listing } from '../../../core/components/listing'
import { Pagination } from '../../../core/components/pagination'

interface IProps {
  galleries: Hentai[]
  maxPage: number
  currentPage: number
}

export const ListingModule: React.FC<IProps> = props => {
  const { galleries, maxPage, currentPage } = props

  return (
    <div className="p-2 sm:p-4">
      <div className="flex justify-center pt-4">
        <nav className="z-0">
          <Pagination max={maxPage} current={currentPage} prefix="/listing/" />
        </nav>
      </div>
      <div className="py-4">
        <Listing {...{ galleries }} />
      </div>
      <div className="flex justify-center pb-4">
        <nav className="z-0">
          <Pagination max={maxPage} current={currentPage} prefix="/listing/" />
        </nav>
      </div>
    </div>
  )
}
