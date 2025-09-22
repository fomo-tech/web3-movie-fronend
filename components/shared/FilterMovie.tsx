import { useMovie } from "@/store/useMovie";
import React from "react";

const FilterMovie = () => {
  const { categories } = useMovie();
  return (
    <>
      {/* filter */}
      <div className="col-12">
        <div className="filter">
          <div className="filter__search">
            <input type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <button className="filter__search-clear" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="dropdown filter__dropdown filter__dropdown--checkboxes">
            <button
              className="filter__btn"
              type="button"
              id="filterDrop0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="filter__btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M4 6l8 0" />
                  <path d="M16 6l4 0" />
                  <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M4 12l2 0" />
                  <path d="M10 12l10 0" />
                  <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M4 18l11 0" />
                  <path d="M19 18l1 0" />
                </svg>
              </span>
              <span className="filter__btn-name">All Сategories</span>
              <span className="filter__btn-counter" />
              <span className="filter__btn-mask">
                <span className="filter__btn-title">Сategories</span>
                <span className="filter__btn-clear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </span>
              <span className="filter__btn-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end filter__dropdown-menu"
              aria-labelledby="filterDrop0"
            >
              <button className="filter__dropdown-clear" type="button">
                Clear All
              </button>
              <ul className="filter__dropdown-checkboxes">
                <li>
                  <input id="sort0" name="sort0" type="checkbox" />
                  <label htmlFor="sort0">
                    Action <span>462</span>
                  </label>
                </li>
                <li>
                  <input id="sort1" name="sort1" type="checkbox" />
                  <label htmlFor="sort1">
                    Adventure <span>1 204</span>
                  </label>
                </li>
                <li>
                  <input id="sort2" name="sort2" type="checkbox" />
                  <label htmlFor="sort2">
                    Animation <span>89</span>
                  </label>
                </li>
                <li>
                  <input id="sort3" name="sort3" type="checkbox" />
                  <label htmlFor="sort3">
                    Biography <span>103</span>
                  </label>
                </li>
                <li>
                  <input id="sort4" name="sort4" type="checkbox" />
                  <label htmlFor="sort4">
                    Comedy <span>2 094</span>
                  </label>
                </li>
                <li>
                  <input id="sort5" name="sort5" type="checkbox" />
                  <label htmlFor="sort5">
                    Documentary <span>923</span>
                  </label>
                </li>
                <li>
                  <input id="sort6" name="sort6" type="checkbox" />
                  <label htmlFor="sort6">
                    Drama <span>781</span>
                  </label>
                </li>
                <li>
                  <input id="sort7" name="sort7" type="checkbox" />
                  <label htmlFor="sort7">
                    Education <span>62</span>
                  </label>
                </li>
                <li>
                  <input id="sort8" name="sort8" type="checkbox" />
                  <label htmlFor="sort8">
                    Fantasy <span>803</span>
                  </label>
                </li>
                <li>
                  <input id="sort9" name="sort9" type="checkbox" />
                  <label htmlFor="sort9">
                    History <span>1 942</span>
                  </label>
                </li>
                <li>
                  <input id="sort10" name="sort10" type="checkbox" />
                  <label htmlFor="sort10">
                    Horror <span>693</span>
                  </label>
                </li>
                <li>
                  <input id="sort11" name="sort11" type="checkbox" />
                  <label htmlFor="sort11">
                    Kind <span>105</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown filter__dropdown filter__dropdown--sort">
            <button
              className="filter__btn"
              type="button"
              id="filterDrop1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="filter__btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 16 4 4 4-4" />
                  <path d="M7 20V4" />
                  <path d="M20 8h-5" />
                  <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
                  <path d="M15 14h5l-5 6h5" />
                </svg>
              </span>
              <span className="filter__btn-name">Featured</span>
              <span className="filter__btn-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end filter__dropdown-menu"
              aria-labelledby="filterDrop1"
            >
              <ul className="filter__dropdown-list">
                <li className="active">
                  <span>Featured</span>
                </li>
                <li>
                  <span>Most Popular</span>
                </li>
                <li>
                  <span>Recently Played</span>
                </li>
                <li>
                  <span>Recently Added</span>
                </li>
                <li>
                  <span>Random</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end filter */}
    </>
  );
};

export default FilterMovie;
