from flask import Flask
from constants.main import SERVER_PORT

from translator.init import translator

app = Flask(__name__)


@app.route("/")
def hello_world():
    translator("lol")
    return "<p>Hello, World!</p>"


def startServer():
    app.run(port=SERVER_PORT)
