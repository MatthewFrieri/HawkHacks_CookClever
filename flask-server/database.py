import subprocess
import json
import requests

def get_db():
    curlUrl = 'curl -X GET "https://us-west-2.aws.neurelo.com/rest/user?" -H "X-API-KEY:neurelo_9wKFBp874Z5xFw6ZCfvhXTnM6mAQxbpYAG+rMHlUkUg1NZs9OSSnXGu+hGt+WzxXg1KWSeI1CI4UxtphVWMLJlxo0x0yYB9V6CoMi71wn51PMxM9BaSvlt4oiiiidzmMW2joJNLJXeKnqjrGbSVkyW0ULltx1Hu8V8Xu0KY/CFUVxz7qdbeh9Onc4kwcad+h_JYO6GNbVpQJuMPeOQA8Xg1PfJxXlt7ZujJj+r51x3k4="'
    status, data = subprocess.getstatusoutput(curlUrl)

    # format to only have the db data
    data = data[data.index('{'):]

    data = json.loads(data)
    return data

def is_valid_credentials(username, password):
    db = get_db()
    for user in db['data']:
        if user['username'] == username and user['password'] == password:
            return user['id']
    return False

def add_user(username, password):
    headers = {
        'X-API-KEY': 'neurelo_9wKFBp874Z5xFw6ZCfvhXTnM6mAQxbpYAG+rMHlUkUg1NZs9OSSnXGu+hGt+WzxXg1KWSeI1CI4UxtphVWMLJlxo0x0yYB9V6CoMi71wn51PMxM9BaSvlt4oiiiidzmMW2joJNLJXeKnqjrGbSVkyW0ULltx1Hu8V8Xu0KY/CFUVxz7qdbeh9Onc4kwcad+h_JYO6GNbVpQJuMPeOQA8Xg1PfJxXlt7ZujJj+r51x3k4=',
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    data = '{"username": "' + username + '", "password": "' + password + '", "points": 0}'
    response = requests.post('https://us-west-2.aws.neurelo.com/rest/user/__one', headers=headers, data=data)
    return response

def get_user_points(userId):
    db = get_db()
    for user in db['data']:
        if user['id'] == userId:
            return user['points']

def add_user_points(userId, pointsToAdd):
    db = get_db()
    for user in db['data']:
        if user['id'] == userId:
            username = user['username']
            password = user['password']
            existingPoints = user['points']


    headers = {
        'X-API-KEY': 'neurelo_9wKFBp874Z5xFw6ZCfvhXTnM6mAQxbpYAG+rMHlUkUg1NZs9OSSnXGu+hGt+WzxXg1KWSeI1CI4UxtphVWMLJlxo0x0yYB9V6CoMi71wn51PMxM9BaSvlt4oiiiidzmMW2joJNLJXeKnqjrGbSVkyW0ULltx1Hu8V8Xu0KY/CFUVxz7qdbeh9Onc4kwcad+h_JYO6GNbVpQJuMPeOQA8Xg1PfJxXlt7ZujJj+r51x3k4=',
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    data = '{    "username": "' + username + '",    "password": "' + password + '",    "points": ' + str(existingPoints + pointsToAdd) + '}'

    response = requests.patch(
        'https://us-west-2.aws.neurelo.com/rest/user/' + userId,
        headers=headers,
        data=data,
    )
    return response
