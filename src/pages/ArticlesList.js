import React from "react";
import { Link } from "react-router-dom";

import articleContent from "./article-content";

const ArticlesList = () => {
    return (
        <>
            <div className="container mt-4">
                <h1>Articles</h1>
                {articleContent.map((article, key) => (
                    <Link
                        className="text-decoration-none"
                        key={key}
                        to={`/article/${article.name}`}
                    >
                        <h3>{article.title}</h3>
                        <p>{article.content[0].substring(0, 150)}...</p>
                        <hr />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ArticlesList;
