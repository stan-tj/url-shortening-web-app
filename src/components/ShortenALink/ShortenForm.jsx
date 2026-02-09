import { useState } from "react";


/*
* TODO 
* - Handle Errors
* - Trigger An API 
*/



const ShortenForm = ({ onShortenUrl }) => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmitForm = (e) => {
        e.preventDefault();

        setError("")
        setLoading(true);
        if (!url.trim()) {
            setLoading(false)
            setError("Please add a link");
            return;
        }

        // Make a request
        onShortenUrl(url);

        console.log("error")
        setLoading(false);

        setUrl("")

    }
    console.log(loading)

    const handleInput = (e) => {
        setError("")
        if (!url.trim()) {
            setError("Please add a link");
        }
        setUrl(e.target.value)
    }

    return (
        <>
            <form className='shorten-form' onSubmit={handleSubmitForm}>
                <input
                    className={error ? "error-input" : ""}
                    type="url"
                    value={url}
                    placeholder='Shorten a link here...'
                    onChange={handleInput}
                />
                {error ? <span className="error-text">{error}</span> : ""}

                <button>{loading ? <span style={{ fontStyle: "italic" }}>Loading...</span> : "Shorten It!"}</button>
            </form>
        </>
    )
}

export default ShortenForm