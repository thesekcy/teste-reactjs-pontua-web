import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'

import SearchBar from './searchBar'
import SideBar from './sideBar'

export default function PrivateTemplate() {
  const currentUrl = window.location.pathname
  const [heroes, setHeroes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
    useState(true)
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false)

  useEffect(() => {
    const publicKey = '68afca1dab65b415025506038a6d4dc8'
    const privateKey = '51bee32a6b88a9ab620c0764a553b5ccf9f822f3'
    const timestamp = new Date().getTime()
    const hash = md5(timestamp + privateKey + publicKey)
    const url = 'https://gateway.marvel.com/v1/public/characters'

    const params = {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
      offset: (currentPage - 1) * 20,
    }

    if (searchQuery.length > 1) {
      params.nameStartsWith = searchQuery
    }

    const delay = 0 //0.5 seconds

    const timer = setTimeout(() => {
      axios
        .get(url, { params })
        .then((response) => {
          console.log(response.data)
          const heroesData = response.data.data.results
          const totalHeroes = response.data.data.total
          const totalPages = Math.ceil(totalHeroes / 20)

          setHeroes(heroesData)
          setTotalPages(totalPages)
        })
        .catch((error) => {
          console.error(error)
        })
    }, delay)

    setIsPreviousButtonDisabled(currentPage === 1)
    setIsNextButtonDisabled(currentPage === totalPages)

    // Clean up the timer if searchQuery or currentPage changes before the 5 seconds
    return () => clearTimeout(timer)
  }, [searchQuery, currentPage])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setIsPreviousButtonDisabled(page === 1)
    setIsNextButtonDisabled(page === totalPages)
  }

  const createPaginationButtons = () => {
    return (
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage - 1 > 1 ? false : true}
        >
          Anterior
        </button>
        <button className="active">{currentPage}</button>

        {currentPage < totalPages && (
          <>
            {/* {currentPage + 1 < totalPages && <button disabled>...</button>} */}
            {[currentPage + 1, currentPage + 2].map((page) => (
              <button key={page} onClick={() => handlePageChange(page)}>
                {page}
              </button>
            ))}
            {currentPage + 2 < totalPages && <button disabled>...</button>}
            {[totalPages - 2, totalPages - 1, totalPages].map((page) => (
              <button key={page} onClick={() => handlePageChange(page)}>
                {page}
              </button>
            ))}
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage - 1 == totalPages ? false : true}
        >
          Próximo
        </button>
      </div>
    )
  }

  return (
    <div className="private-template">
      <nav>
        <SideBar />
      </nav>
      <div className="private-content">
        <SearchBar />
        <main>
          <p>This is a test - {currentUrl}</p>

          <h1>Marvel Heroes</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by name"
          />
          <div className="d-flex flex-wrap">
            {heroes.map((hero) => (
              <div className="col-lg-4 d-flex" key={hero.id}>
                <img
                  style={{ width: '50px' }}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt=""
                />
                {hero.name}
              </div>
            ))}
          </div>
          <div>{createPaginationButtons()}</div>
        </main>
      </div>
    </div>
  )
}
