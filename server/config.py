import os
from datetime import timedelta

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = "secret-key"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=10)
    JWT_ERROR_MESSAGE_KEY = "message"
    JWT_ACCESS_DENIED_MESSAGE = "Token has expired. Please log in again."