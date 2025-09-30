"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
  active?: boolean;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <ul className={clsx("breadcrumbs breadcrumbs--tablet", className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={clsx("breadcrumbs__item", {
            "breadcrumbs__item--active": item.active,
          })}
        >
          {item.href && !item.active ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
