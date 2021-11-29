from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/first')
def first():
    # returns payload
    return "your"