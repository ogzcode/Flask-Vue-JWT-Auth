from flask import Flask, render_template
import json

def read_data():
    with open("./users.json") as f:
        data = json.load(f)

    return data

def find_user(id):
    data = read_data()
    for user in data:
        if user["id"] == id:
            return user
  

app = Flask(__name__)
app.config['SECRET_KEY'] = "this is secret key"

@app.route('/')
def all_user():
    users = read_data()
    return render_template("all_user.html", users=users)

@app.route('/user/<int:id>')
def user(id):
    user_data = find_user(id)
    print(user_data)
    return render_template("user.html", user=user_data)