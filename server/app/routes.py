from app import app, db
from flask import request, jsonify
from app.model import User
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity

@app.route('/')
def index():
    return "Hello, World!"

@app.route("/signup", methods=["POST"])
def register():
    data = request.get_json()
    
    username = data["username"]
    password = data["password"]
    email = data["email"]

    if (User.query.filter_by(username=username).first() is not None):
        return jsonify({"message": "Username already exists"}), 409
    
    user = User(username=username, email=email)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 200

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    username = data["username"]
    password = data["password"]

    user = User.query.filter_by(username=username).first()
    if (user is None or not user.check_password(password)):
        return jsonify({"message": "Invalid credentials"}), 401
    
    access_token = create_access_token(identity=username)
    
    return jsonify({
        "status": "success",
        "message": "Login successful", 
        "data": {
            "access_token": access_token
        }
        }), 200

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    return jsonify({
        "status": "success",
        "data": {
            "username": user.username,
            "email": user.email
        }
        }), 200

    



