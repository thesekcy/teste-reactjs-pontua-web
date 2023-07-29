import React from 'react'
import { RightArrowIcon } from '../../assets/icons/rightArrow'
import { LeftArrowIcon } from '../../assets/icons/leftArrow'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const renderPageButton = (page: number) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={currentPage === page ? 'active' : ''}
    >
      {page}
    </button>
  )

  const renderPageButtons = () => {
    const pageButtons = []

    if (totalPages <= 5) {
      for (let page = 1; page <= totalPages; page++) {
        pageButtons.push(renderPageButton(page))
      }
    } else {
      pageButtons.push(renderPageButton(1))
      pageButtons.push(renderPageButton(2))

      if (currentPage <= 3) {
        pageButtons.push(renderPageButton(3))
        pageButtons.push(<button key="ellipsis">...</button>)
        pageButtons.push(renderPageButton(totalPages -2 ))
        pageButtons.push(renderPageButton(totalPages -1 ))
        pageButtons.push(renderPageButton(totalPages))
      } else if (currentPage >= totalPages - 2) {
        pageButtons.push(
          <button key="ellipsis" disabled>
            ...
          </button>
        )
        pageButtons.push(renderPageButton(totalPages - 3))
        pageButtons.push(renderPageButton(totalPages - 2))
        pageButtons.push(renderPageButton(totalPages - 1))
        pageButtons.push(renderPageButton(totalPages))
      } else {
        pageButtons.push(
          <button key="ellipsis" disabled>
            ...
          </button>
        )
        pageButtons.push(renderPageButton(currentPage - 1))
        pageButtons.push(renderPageButton(currentPage))
        pageButtons.push(renderPageButton(currentPage + 1))
        pageButtons.push(
          <button key="ellipsis" disabled>
            ...
          </button>
        )
        pageButtons.push(renderPageButton(totalPages))
      }
    }

    return pageButtons
  }

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <LeftArrowIcon />
        Anterior
      </button>
      {renderPageButtons()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Próximo
        <RightArrowIcon />
      </button>
    </div>
  )
}

export default Pagination
