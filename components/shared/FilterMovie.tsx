"use client";

import { useMovie } from "@/store/useMovie";
import React from "react";
import FilterDropdown from "../common/FilterDropdown";

const FilterMovie = () => {
  const { categories, nationals, listMovie } = useMovie();
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
          <FilterDropdown
            id="filterDrop0"
            title="Danh sách phim"
            type="list"
            items={listMovie.map((n) => ({
              label: n.name,
              value: n.id + "",
              checked: false,
            }))}
            onClear={() => {
              console.log("Clear all categories");
            }}
            onChange={(item, index) => {
              console.log("Toggle category", item, index);
            }}
          />
          <FilterDropdown
            id="filterDrop1"
            title="Tất cả thể loại"
            type="checkboxes"
            items={categories.map((c) => ({
              label: c.name,
              value: c._id,
              checked: false,
            }))}
            showClear
            onClear={() => {
              console.log("Clear all categories");
            }}
            onChange={(item, index) => {
              console.log("Toggle category", item, index);
            }}
          />
          <FilterDropdown
            id="filterDrop2"
            title="Quốc gia"
            type="checkboxes"
            items={nationals.map((n) => ({
              label: n.name,
              value: n._id,
              checked: false,
            }))}
            onClear={() => {
              console.log("Clear all categories");
            }}
            onChange={(item, index) => {
              console.log("Toggle category", item, index);
            }}
          />
        </div>
      </div>
      {/* end filter */}
    </>
  );
};

export default FilterMovie;
