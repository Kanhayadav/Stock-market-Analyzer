import portfolioImg from "../assets/portfolio_image.png"
export default function Hero() {

    return (
        <>
            <section className="w-full min-h-screen flex items-center">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 mx-auto">
                    <div className="max-w-xl">
                        <p className="text-green-500 mb-4 text-sm font-bold">ML Engiine V1 LIVE</p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Empowering your trades with<span className="text-blue-600"> AI insights</span></h1>
                        <p className="text-sm text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio optio perspiciatis delectus placeat recusandae? Possimus nulla nobis minima deserunt ea doloremque cum provident dolorum porro quisquam totam accusamus, nesciunt esse?</p>
                        <button className="p-2 bg-blue-600 text-black rounded mt-4 hover:bg-blue-700">EXPORE MORE &rarr;</button>
                    </div>
                    <div>
                        <img src={portfolioImg} alt="portfolio image" className="w-full" />
                    </div>
                </div>
            </section>
        </>
    );
}