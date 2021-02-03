import React from "react";

const Comments = () => {
    return (
        <div>
            <form method="POST" action="https://fallfish-tenkara-staticman.herokuapp.com/v2/entry/github-bot-fallfishtenkara/Fallfish-Tenkara/master/comments">
                <input name="options[redirect]" type="hidden" value="https://www.fallfishtenkara.com" />
                <input name="options[slug]" type="hidden" value="{{ page.slug }}" />
                <label><input name="fields[name]" type="text" />Name</label>
                <label><input name="fields[email]" type="email" />E-mail</label>
                <label><textarea name="fields[message]"></textarea>Message</label>

                <button type="submit">Go!</button>
            </form>
        </div>
    )
};

export default Comments