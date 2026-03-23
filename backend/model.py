from sklearn.linear_model import LogisticRegression

def prepare_data(df):
    df["return"] = df["Close"].pct_change()
    df["MA5"] = df["Close"].rolling(5).mean()
    df["MA20"] = df["Close"].rolling(20).mean()

    df = df.dropna()

    df["target"] = (df["Close"].shift(-1) > df["Close"]).astype(int)
    df = df.dropna()

    X = df[["return", "MA5", "MA20"]]
    y = df["target"]

    return X, y


def train_model(X, y):
    model = LogisticRegression()
    model.fit(X, y)
    return model