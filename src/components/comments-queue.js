import React, { useState } from "react";

const Comments = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "", 
        website: "", 
        comment: ""
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleChange = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        })
    };

    const page_url = () => {
        window.location.href.toString()
    };

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "comments-queue", ...formState})
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    };

    return (
        <div class="mt-4 border-solid border-4 border-grey-500 flex w-8/12 mx-auto">
            <form
                name="comments-queue" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
            <input 
                type="hidden" 
                name="form-name" 
                value="comments-queue"
            />

            <input class="hidden" name="bot-field" />

            <input id="form-page-url" type="hidden" name="form-page-url" value={{page_url}}></input>

            <p>Do you have something to say or meaningful to contribute? If so, please feel free to comment using the form below.</p>
            <div class="flex mx-auto">
                <p>
                    <label htmlFor="name" class="ml-4 font-semibold text-red-500">Name:</label>
                        <input
                            class="ml-2 mt-2 border-dashed border-2 border-red-500" 
                            type="text" 
                            name="name" 
                            onChange={handleChange} 
                            onSubmit={handleSubmit} 
                            value={formState.name} 
                        />
                </p>

                <p>
                    <label htmlFor="email" class="ml-4 font-semibold text-red-500">Email:</label>
                    <input 
                        class="ml-2 mt-2 border-dashed border-2 border-red-500"
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        onSubmit={handleSubmit} 
                        value={formState.email} 
                    />
                </p>

                <p>
                    <label htmlFor="website" class="ml-4 font-semibold text-red-500">Website:</label> 
                    <input 
                        class="ml-2 mt-2 border-dashed border-2 border-red-500"
                        type="text" 
                        name="website" 
                        onChange={handleChange} 
                        onSubmit={handleSubmit} 
                        value={formState.website} 
                    />
                </p>
            </div>
            <div class="w-full">
                <p>
                    <label htmlFor="comment" class="ml-4 font-semibold text-red-500">Comment:</label> 
                        <input
                            class="ml-2 mt-2 box-border h-16 w-3/4 border-dashed border-2 border-red-500"            
                            type="text" 
                            name="comment" 
                            onChange={handleChange} 
                            onSubmit={handleSubmit} 
                            value={formState.comment} 
                        />
                </p>
            </div>

            <button type="submit" class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">Send your comment (no spam I promise).</button>

            </form>
        </div>
    )
};

export default Comments