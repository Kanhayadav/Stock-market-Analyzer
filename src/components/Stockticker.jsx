import { useState } from "react";

export default function Stockticker() {
    const [stocks] = useState([
        { symbol: 'TSLA', change: 1.24 },
        { symbol: 'NVIDA', change: -0.83 },
        { symbol: 'TATA', change: -0.10 },
        { symbol: 'X', change: 1.83 },
        { symbol: 'SPACE', change: 0.83 },
    ])


    return (
        <>
            <div className="mt-3 pl-8 flex gap-8 text-white cursor-default text-sm">
                {stocks.map((stock, index) => (
                    <div key={index} className="flex gap-2">
                        <span>{stock.symbol}</span>

                        <span
                            className={
                                stock.change >= 0
                                    ? "text-green-400"
                                    : "text-red-400"
                            }
                        >
                            {stock.change}%
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}