import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: "post",
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername("");
        setCommentText("");
    };

    return (
        <>
            <h3>Add a Comment</h3>
            <div className="mb-3">
                <label className="form-label"> Name:</label>

                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Comment:</label>
                <textarea
                    className="form-control"
                    rows="4"
                    cols="50"
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                />
            </div>
            <button
                className="btn btn-info btn-sm"
                onClick={() => addComment()}
            >
                Add Comment
            </button>
            <hr />
        </>
    );
};

export default AddCommentForm;
