"use client";

import { useMovie } from "@/store/useMovie";
import React from "react";
import FilterDropdown from "../common/FilterDropdown";
import { Filter } from "@/types/movie";
import { log } from "console";
import clsx from "clsx";

interface FilterMovieProps {
  setSlug: React.Dispatch<
    React.SetStateAction<{ label: string; value: string }>
  >;
  setQuery: (value: Filter | ((prevState: Filter) => Filter)) => void;
  query?: Filter & { keyword?: string };
  slug?: { label: string; value: string };
}

const FilterMovie = ({ setQuery, slug, query, setSlug }: FilterMovieProps) => {
  const { categories, nationals, listMovie } = useMovie();
  return (
    <>
      {/* filter */}
      <div className="col-12">
        <div className="filter">
          <div className="filter__search">
            <input
              type="text"
              placeholder="Search"
              value={query?.keyword || ""}
              onChange={(e) =>
                setQuery((prev) => ({
                  ...prev,
                  keyword: e.target.value,
                  category: "",
                  country: "",
                }))
              }
            />
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
            <button
              className={clsx("filter__search-clear", {
                active: !!query?.keyword,
              })}
              type="button"
              onClick={() => setQuery((prev) => ({ ...prev, keyword: "" }))}
            >
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
          {/* <FilterDropdown
            id="filterDrop0"
            label={slug?.label || "Danh sách phim"}
            type="list"
            items={listMovie.map((n) => ({
              label: n.name,
              value: n.slug + "",
              checked: false,
            }))}
            onClear={() => {
              setSlug({ label: "", value: "" });
              console.log("Clear all categories");
            }}
            onChange={(item, index) => {
              setSlug({ label: item.label, value: listMovie[index].slug });
              console.log("Toggle category", item, index);
            }}
          /> */}
          <FilterDropdown
            id="filterDrop1"
            label="Tất cả thể loại"
            labelSelected="Thể loại đã chọn"
            counter={
              query?.category ? query.category.split(",").length : undefined
            }
            type="checkboxes"
            items={categories.map((c) => ({
              label: c.name,
              value: c.slug,
              checked: query?.category
                ? query.category.split(",").includes(c.slug)
                : false,
            }))}
            showClear
            onClear={() => {
              setQuery((prev) => ({ ...prev, category: "" }));
              console.log("Clear all categories");
            }}
            onChange={(item, index) => {
              const current = query?.category || "";
              const arr = current ? current.split(",") : [];
              if (arr.includes(item.value)) {
                // Nếu có rồi => xoá
                arr.splice(arr.indexOf(item.value), 1);
              } else {
                // Nếu chưa có => thêm
                arr.push(item.value);
              }

              const newCategory = arr.join(",");

              setQuery((prev) => ({
                ...prev,
                category: newCategory,
              }));

              console.log("Updated category:", newCategory);
            }}
          />
          <FilterDropdown
            id="filterDrop2"
            label="Quốc gia"
            labelSelected="Quốc gia đã chọn"
            type="checkboxes"
            items={nationals.map((n) => ({
              label: n.name,
              value: n.slug,
              checked: query?.country
                ? query.country.split(",").includes(n.slug)
                : false,
            }))}
            counter={
              query?.country ? query.country.split(",").length : undefined
            }
            showClear
            onClear={() => {
              setQuery((prev) => ({ ...prev, country: "" }));
              console.log("Clear all categories");
            }}
            onChange={(item, index) => {
              const current = query?.country || "";
              const arr = current ? current.split(",") : [];
              if (arr.includes(item.value)) {
                // Nếu có rồi => xoá
                arr.splice(arr.indexOf(item.value), 1);
              } else {
                // Nếu chưa có => thêm
                arr.push(item.value);
              }

              const newCountry = arr.join(",");

              setQuery((prev) => ({
                ...prev,
                country: newCountry,
              }));

              console.log("Updated category:", newCountry);
            }}
          />
        </div>
      </div>
      {/* end filter */}
    </>
  );
};

export default FilterMovie;
