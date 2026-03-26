import { useState } from "react";
import axios from "axios";

function App() {
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
      console.error(err);
      alert("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>AI Stock Analyzer 🚀</h1>

      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter Stock Symbol"
      />

      <button onClick={fetchData}>Analyze</button>

      {loading && <p>Loading...</p>}

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ color: data.prediction === "BUY" ? "green" : "red" }}>
            Prediction: {data.prediction}
          </h2>

          <p>Confidence: {data.confidence}%</p>
          <p>Strength: {data.decision_strength}</p>

          <p>Trend: {data.trend}</p>
          <p>Market: {data.market_state}</p>

          <p>RSI: {data.rsi}</p>
          <p>Signal: {data.signal}</p>

          <p>Score: {data.score}</p>
          <p>Backtest Accuracy: {data.backtest_accuracy}%</p>

          <p>Confluence: {data.confluence}</p>
          <p>Insight: {data.insight}</p>

          <h3>Reasoning:</h3>
          <ul>
            {data.reasoning.negative.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;