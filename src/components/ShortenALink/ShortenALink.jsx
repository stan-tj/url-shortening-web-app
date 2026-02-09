import React, { useEffect, useState } from 'react'
import ShortenForm from './ShortenForm'
import ShortenLinkList from './ShortenLinkList'

const VITE_SHORTEN_API_ENDPOINT = import.meta.env.VITE_SHORTEN_API_ENDPOINT;

const shortenAPIURL = VITE_SHORTEN_API_ENDPOINT;

const ShortenALink = () => {
    const storedUrls = localStorage.getItem("urls");
    const [urls, setUrls] = useState(() => {
        return storedUrls ? JSON.parse(storedUrls) : [];
    });

    useEffect(() => {
        localStorage.setItem("urls", JSON.stringify(urls))
        localStorage.setItem("urls1", JSON.stringify(urls))
    }, [urls])


    const shortenUrlFunc = async (url) => {
        const res = await fetch(shortenAPIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: `url=${encodeURIComponent(url)}`
        })
        const data = await res.json();
        setUrls(prev => {
            return [...prev, { originalURL: url, shortenedURL: data.result_url }]
        });
    }

    return (
        <section className='shorten-a-link'>
            <div className='shorten-a-link-wrapper'>
                <ShortenForm onShortenUrl={shortenUrlFunc} />
                <ShortenLinkList urls={urls} />
            </div>
        </section>
    )
}

export default ShortenALink