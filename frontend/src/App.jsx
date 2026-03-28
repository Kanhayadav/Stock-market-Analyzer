import { useState } from "react";
import axios from "axios";

export default function App() {
  const [symbol, setSymbol] = useState("AAPL");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/predict?symbol=${symbol}`
      );
      setData(res.data);
    } catch (err) {
      alert("Error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">AI Stock Dashboard 🚀</h1>

      <div className="flex gap-3 mb-6">
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="p-2 text-black rounded"
          placeholder="AAPL"
        />

        <div className="mb-6">
          <iframe
            src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=D&theme=dark`}
            width="100%"
            height="300"
          ></iframe>
        </div>

        <button
          onClick={fetchData}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg"  >
          Analyze
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Prediction */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition" > <h2 className={`text-xl font-bold ${data.prediction === "BUY" ? "text-green-400" : "text-red-400"}`}>
              {data.prediction}
            </h2>
            <p>Confidence: {data.confidence}%</p>
            <p>Strength: {data.decision_strength}</p>
            <p>Confluence: {data.confluence}</p>
          </div>

          {/* Market */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">  <p>Trend: {data.trend}</p>
            <p>Market: {data.market_state}</p>
            <p>Score: {data.score}</p>
          </div>

          {/* RSI */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">  <p>RSI: {data.rsi}</p>
            <p>Signal: {data.signal}</p>
          </div>

          {/* Trade Plan */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition" > <p>Entry: {data.trade_plan.entry}</p>
            <p>Stop Loss: {data.trade_plan.stop_loss}</p>
            <p>Target: {data.trade_plan.target}</p>
          </div>

          {/* Backtest */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">  <p>Backtest Accuracy: {data.backtest_accuracy}%</p>
          </div>

          {/* Insight */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition" > <h3 className="font-bold">Insight</h3>
            <p>{data.insight}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-2">AI Analysis 🤖</h3>
            <p className="text-sm whitespace-pre-line">
              {data.ai_analysis}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}