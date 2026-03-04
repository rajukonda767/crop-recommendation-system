import requests

data = {
"N": 90,
"P": 42,
"K": 43,
"temperature": 21,
"humidity": 82,
"ph": 6.5,
"rainfall": 202
}

res = requests.post("https://crop-recommendation-system-t44g.onrender.com/predict", json=data)

print(res.json())