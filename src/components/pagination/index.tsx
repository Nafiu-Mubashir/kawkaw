import React, { useState } from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div>
      <ul className='pagination'>
        {pages.map((page) => (
          <li
            key={page}
            className={`pagination-item ${
              page === currentPage ? 'active' : ''
            }`}
            onClick={() => handlePageChange(page)}>
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
