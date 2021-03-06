import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: "POST",
        });
        const body = await result.json();

        setArticleInfo(body);
    };

    return (
        <>
            <div id="upvotes-section">
                <button className="btn btn-info btn-sm" onClick={upvoteArticle}>
                    Add Upvote
                </button>
                <p>
                    This post has been upvoted{" "}
                    <span className="badge bg-info text-dark">{upvotes}</span>{" "}
                    times.
                </p>
            </div>
        </>
    );
};

export default UpvotesSection;
