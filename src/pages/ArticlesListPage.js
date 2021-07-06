import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => {
    return (
        <>
            <div className="container mt-4">
                <h1>Articles</h1>
                <ArticlesList articles={articleContent} />
            </div>
        </>
    );
};

export default ArticlesListPage;
