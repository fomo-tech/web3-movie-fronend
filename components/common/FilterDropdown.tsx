"use client";

import React, { ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import { useClickOutside } from "@/hooks/useClickOutside";
import { on } from "events";

type DropdownType = "checkboxes" | "list";

interface DropdownItem {
  label: string;
  value: string;
  checked?: boolean;
  active?: boolean;
}

interface FilterDropdownProps {
  id: string;
  counter?: number;
  label: ReactNode | string;
  labelSelected?: string;
  icon?: React.ReactNode;
  type?: DropdownType;
  items: DropdownItem[];
  showClear?: boolean;
  onClear?: () => void;
  onChange?: (item: DropdownItem, index: number) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  id,
  label,
  icon,
  type = "list",
  items,
  showClear,
  onClear,
  counter,
  onChange,
  labelSelected,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  useClickOutside(ref, () => close());
  return (
    <div
      ref={ref}
      className={clsx("dropdown filter__dropdown", {
        "filter__dropdown--checkboxes": type === "checkboxes",
        "filter__dropdown--sort": type === "list",
      })}
    >
      <button
        className={clsx("filter__btn", {
          active: counter && counter > 0,
        })}
        type="button"
        id={id}
        onClick={toggle}
        aria-expanded={open}
      >
        {icon && <span className="filter__btn-icon">{icon}</span>}
        {counter && <span className="filter__btn-counter">{counter}</span>}
        {counter && counter > 0 && labelSelected && (
          <span className="filter__btn-mask">
            <span className="filter__btn-title">{labelSelected}</span>
            <span className="filter__btn-clear" onClick={() => onClear?.()}>
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
        )}

        <span className="filter__btn-name">{label}</span>
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
        className={clsx(
          "dropdown-menu dropdown-menu-end filter__dropdown-menu",
          { show: open }
        )}
        style={{
          position: "absolute",
          inset: "0px 0px auto auto",
          margin: 0,
          transform: "translate(0px, 42px)",
        }}
        aria-labelledby={id}
      >
        {showClear && (
          <button
            className="filter__dropdown-clear"
            type="button"
            onClick={() => {
              onClear?.();
              close();
            }}
          >
            Clear All
          </button>
        )}

        {type === "checkboxes" ? (
          <ul className="filter__dropdown-checkboxes">
            {items.map((item, idx) => (
              <li key={idx}>
                <input
                  id={`${id}-${idx}`}
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => onChange?.(item, idx)}
                />
                <label htmlFor={`${id}-${idx}`}>{item.label}</label>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="filter__dropdown-list">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={clsx({ active: item.active })}
                onClick={() => {
                  onChange?.(item, idx);
                  close();
                }}
              >
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
