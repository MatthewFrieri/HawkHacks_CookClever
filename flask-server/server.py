from flask import Flask, jsonify, request
from flask_cors import CORS
from database import is_valid_credentials, add_user, get_user_points, add_user_points
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

@app.route('/adduser', methods=['POST'])
def adduser():
    data = request.json
    username = data['usernameValue']
    password = data['passwordValue']
    response = add_user(username, password)
    return jsonify(response)

@app.route('/getuserpoints', methods=['POST'])
def getuserpoints():
    data = request.json
    userId = data['userId']
    points = get_user_points(userId)
    return jsonify(points)

@app.route('/adduserpoints', methods=['POST'])
def adduserpoints():
    data = request.json
    userId = data['userId']
    pointsToAdd = data['points']
    result = add_user_points(userId, pointsToAdd)
    return jsonify(result)



if __name__ == '__main__':
    app.run()
