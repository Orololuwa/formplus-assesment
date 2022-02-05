import { useState, useEffect } from "react";
import "./input.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { onPageChange, totalCount, currentPage, pageSize } = props;

  //Pagination variables
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  //Function to move to a next page
  const onNext = () => {
    if (currentPage === lastPageIndex) return;
    onPageChange(currentPage + 1);
  };

  //Function to move to a previous page
  const onPrevious = () => {
    if (currentPage === firstPageIndex) return;
    onPageChange(currentPage - 1);
  };

  //Two way binding for Input and submit handler
  const [current, setCurrent] = useState(currentPage);

  const onValueChangedHandler = (event) => {
    const { value } = event.target;
    if (+value >= firstPageIndex - 1 && +value <= lastPageIndex) {
      setCurrent(+value);
    } else return;
  };

  //Functions to submit the page to be changed
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (current) {
      onPageChange(current);
    }
  };

  useEffect(() => {
    // timeout function to automatically change the page after you've typed it in for a second
    const inputTimer = setTimeout(() => {
      if (current) {
        onPageChange(current);
      }
    }, 1000);

    return () => {
      // clear the timeout function when component unmounts or the current page updates
      clearTimeout(inputTimer);
    };
  }, [current]);

  //Function to change the value of the Input when the current Page changes
  useEffect(() => {
    setCurrent(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-between py-4 md:px-16">
      <button
        data-testId="btnPrev"
        className="flex items-center cursor-pointer hover:text-gray-400 transition-colors disabled:cursor-not-allowed"
        onClick={onPrevious}
        disabled={currentPage === firstPageIndex}
      >
        <span className="w-6">
          {currentPage !== firstPageIndex && <BiChevronLeft size={20} />}
        </span>
        <p>Previous</p>
      </button>
      <form className="flex items-center gap-2" onSubmit={onSubmitHandler}>
        <input
          type="number"
          value={current}
          onChange={onValueChangedHandler}
          className="rounded-md border-black border-2 w-12 h-6 text-center inline-flex items-center justify-center"
        />
        <p> of {totalPageCount}</p>
      </form>
      <button
        data-testId="btnNext"
        className="flex items-center cursor-pointer hover:text-gray-400 transition-colors disabled:cursor-not-allowed"
        onClick={onNext}
        disabled={currentPage === lastPageIndex}
      >
        <p>Next</p>
        <span className="w-6">
          {currentPage !== lastPageIndex && (
            <BiChevronRight size={20} className="float-right" />
          )}
        </span>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: propTypes.func.isRequired,
  totalCount: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
};

export default Pagination;
