import React from "react";
import ReactPaginate from "react-paginate";

const PaginationCom = ({ totalPageCount, getCurrentPage }) => {
  const handlePageClick = (dataSelect) => {
    getCurrentPage(dataSelect.selected);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageCount={totalPageCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      previousLabel="< السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination pagination-lg justify-content-center mt-4 border"
      pageClassName="page-item  "
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName=" active"
      // forcePage={currentPage}
    />
  );
};

export default PaginationCom;
