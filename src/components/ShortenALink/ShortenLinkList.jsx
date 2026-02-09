import React, { useState } from 'react'

const ShortenLinkList = ({ urls }) => {
    // const [isCopied, setIsCopied] = useState(false);
    const [copyId, setCopyId] = useState();

    function checkCopied(id, ifText, elseText) {
        return copyId !== id ? ifText : elseText
    }


    async function handleCopy(url, id) {
        setCopyId(id)
        await navigator.clipboard.writeText(url);
        setTimeout(() => {
            setCopyId(null);
        }, 2000)
    }

    return (
        <section className='shorten-link-list'>
            {
                urls.map((item, index) => {
                    return (
                        <div className='url-container' key={index} style={{ display: "flex", gap: "6rem" }}>
                            <div className='original-url'>{item.originalURL}</div>
                            <div className='copy-url'>
                                <span>{item.shortenedURL}</span>

                                <button
                                    className={checkCopied(index, "copy-btn", "copied-btn")}
                                    onClick={() => handleCopy(item.shortenedURL, index)}>
                                    {checkCopied(index, "Copy", "Copied!")}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            {/* {originalURL || "No valid URL"} */}
            <br />
            {/* {shortenedURL || "No valid shor)tened URL"} */}
        </section>
    )
}

export default ShortenLinkList