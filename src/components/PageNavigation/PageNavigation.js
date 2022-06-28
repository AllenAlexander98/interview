import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";

function PageNavigation() {
  const ctx = useContext(AppContext);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    ctx.paginationHandler(pageNumber);
    ctx.onResetSort();
  }, [pageNumber]);

  const numberClickHandler = (event) => {
    setPageNumber(Number(event.target.innerHTML));
  };

  const previousClickHandler = (event) => {
    if (pageNumber > 1) setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };
  const nextClickHandler = (event) => {
    if (pageNumber < 10) setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={previousClickHandler}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pages.map((page, index) => (
            <li
              key={index}
              className={`page-item ${page === pageNumber ? "active" : ""}`}
            >
              <a className="page-link" href="#" onClick={numberClickHandler}>
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={nextClickHandler}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageNavigation;
