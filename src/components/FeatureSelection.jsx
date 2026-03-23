export default function FeatureSelection() {
    return (
        <>
            <section className="bg-gray-800 w-full min-h-screen flex flex-wrap">
                <h1 className="p-20">The Monolithic Edge</h1>
                <div className="flex m-10 p-10 bg-gray-600 w-fit rounded-xl">
                    <div className="">
                        <h2>Real-time Alpha Vantage data</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum blanditiis nesciunt.</p>
                        <button className="hover:bg-gray-200 hover:underline transition text-black mt-20 p-3 bg-white rounded">Expore more </button>
                    </div>
                </div>

                <div className="flex flex-col p-10 h-fit w- bg-slate-700 m-10 rounded-xl">
                    <h2>
                        ML- Powed Recomendations
                    </h2>
                    <p >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum nam sunt earum<br /> nulla a commodi nostrum iusto
                    </p>
                    <span className="text-white p-4 mt-20 bg-gray-800 m-3">
                        Risk Assiment
                    </span>
                    <span className="text-white p-4 bg-gray-800 m-3">
                        Clusterlization
                    </span>
                </div>


            </section>
        </>
    );
}