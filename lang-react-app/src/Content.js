import React from "react";

function Content({ content }) {
    return (
        <div>
            <p>{content.description}</p> {/* 전달받은 props 사용 */}
        </div>
    );
}

export default Content;