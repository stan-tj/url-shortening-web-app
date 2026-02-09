const Hero = () => {
    return (
        <section className='hero'>
            {/* Hero Contents */}
            <div className='hero__left'>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className='get-started'> Get Started</button>
            </div>
            <div className='hero__right'>
                <img src='/illustration-working.svg' width={733} height={482} />
            </div>
        </section>
    )
}

export default Hero