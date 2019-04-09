import React from "react";

export default function Search() {
  return (
    <div id="search">
      <label htmlFor="">
        <i className="fa fa-search" aria-hidden="true" />
      </label>
      <input type="text" placeholder="Search contacts..." />
    </div>
  );
}
