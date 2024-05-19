from flask import Flask, jsonify, request
from flask_cors import CORS
from database import is_valid_credentials
from image_analysis import interpret_input

app = Flask('my_server')
CORS(app)

@app.route('/getinfo')
def getinfo():
    info = {"name":'mat', "age":"18"}
    return jsonify(info)

@app.route('/authentication', methods=['POST'])
def authentication():
    data = request.json
    username = data['usernameValue']
    password = data['passwordValue']
    valid_login = is_valid_credentials(username, password)
    return jsonify(valid_login)

@app.route('/imageanalysis', methods=['POST'])
def imageanalysis():
    data = request.json
    imageSrc = data['imageData']['imageSrc']
    imageRequirements = data['imageData']['imageRequirements']
    results = interpret_input(imageSrc, imageRequirements)
    return jsonify(results)


if __name__ == '__main__':
    app.run()
