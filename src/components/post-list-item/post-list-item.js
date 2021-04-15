import React from "react";

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">Hello world!</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-all"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
