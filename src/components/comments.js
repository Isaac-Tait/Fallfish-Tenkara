import React from "react";

const Comments = () => {
    return (
        <div data-netlify-recaptcha="true">
            <form name="comments" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="comments-name" value="comments" />
                <p>
                    <label>Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email: <input type="text" name="email" /></label>
                </p>
                <p>
                    <label>Website: <input type="text" name="website" /></label>
                </p>
                <p>
                    <label>Comment: <textarea name="comment" /></label>
                </p>
                <button type="submit">Send your comment (no spam I promise).</button>
            </form>
        </div>
    )
};

export default Comments