import React, { useState } from "react";

const Comments = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "", 
        website: "", 
        comments: ""
    })

    const handleChange = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...form.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    }

    return (
        <div class="mt-4 border-solid border-4 border-grey-500 w-8/12 flex mx-auto">
            <form
                onSubmit={handleSubmit}
                name="comments" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                netlify
            >
            <input 
                type="hidden" 
                name="comments-name" 
                value="comments"
            />
            <p class="hidden">
                <label>Do not fill this out if you are human: <input name="bot-field" /></label>
            </p>

            <p>Do you have something to say or meaningful to contribute? If so, please feel free to comment using the form below:</p>
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
                            class="ml-2 mt-2 h-20 w-3/4 border-dashed border-2 border-red-500"            
                            type="text" 
                            name="comment" 
                            onChange={handleChange} 
                            onSubmit={handleSubmit} 
                            value={formState.comment} 
                        />
                </p>
                <button type="submit" class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">Submit (no spam I promise).</button>
            </div>
            </form>
        </div>
    )
};

export default Comments