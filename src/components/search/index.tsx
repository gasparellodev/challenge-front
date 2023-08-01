"use client";
import { FC, useState } from "react";

import styles from "./search.module.scss";
import { SearchIcon } from "../svg-components/search-icon";

export const Search: FC = ({}) => {
  return (
    <div className={styles.content}>
      <input type="text" />
      <button>
        <SearchIcon className={styles.icon} color="#93BC1E" />
      </button>
    </div>
  );
};
