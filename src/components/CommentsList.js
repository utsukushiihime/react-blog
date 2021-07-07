import React from "react";

const CommentsList = ({ comments }) => {
    return (
        <>
            <h3>Comments:</h3>
            {comments.map((comment, key) => (
                <div key={key}>
                    <h5>{comment.username}</h5>
                    <p>{comment.text}</p>
                    <hr />
                </div>
            ))}
        </>
    );
};

export default CommentsList;
