import React from "react";
import { AppHeader } from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list/post-list";
import PostStatusFilter from "../post-status-filter";
import { SearchPanel } from "../search-panel";

import './app.css';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
