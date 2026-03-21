from fastapi import FastAPI
from data import get_stock_data
from model import prepare_data, train_model

app = FastAPI()

model = None


@app.on_event("startup")
def load_model():
    global model
    df = get_stock_data("AAPL")
    X, y = prepare_data(df)
    model = train_model(X, y)


@app.get("/")
def home():
    return {"message": "API running"}


@app.get("/predict")
def predict():
    df = get_stock_data("AAPL")
    X, _ = prepare_data(df)

    latest = X.iloc[[-1]]

    pred = model.predict(latest)[0]

    return {
        "prediction": "BUY" if pred == 1 else "SELL"
    }