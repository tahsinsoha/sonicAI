import random
import os
from flask import Flask, request, jsonify
from genre_prediction_service import Genre_Prediction_Service
from flask_cors import CORS
from Emotion_Prediction_Service import Emotion_Prediction_Service
# instantiate flask app
app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*": {
        "origins": "*"
    }
})


@app.route("/predict_genre", methods=["POST"]) 
def predict():
	"""Endpoint to predict keyword
    :return (json): This endpoint returns a json file with the following format:
        {
            "keyword": "down"
        }
	"""

	# get file from POST request and save it
	audio_file = request.files['file']
	file_name = str(random.randint(0, 100000))
	audio_file.save(file_name)

	# instantiate keyword spotting service singleton and get prediction
	gps = Genre_Prediction_Service()
	eps = Emotion_Prediction_Service()
	predicted_genre = gps.predict(file_name)
	#print("type holo ", type(gps))
	
	# we don't need the audio file any more - let's delete it!
	os.remove(file_name)

	# # send back result as a json file
	result = {"genre": predicted_genre }
	return jsonify(result)


@app.route("/predict_emotion", methods=["POST"])
def predict():
	"""Endpoint to predict keyword
    :return (json): This endpoint returns a json file with the following format:
        {
            "keyword": "down"
        }
	"""

	# get file from POST request and save it
	audio_file = request.files['file']
	file_name = str(random.randint(0, 100000))
	audio_file.save(file_name)

	# instantiate keyword spotting service singleton and get prediction
	eps = Emotion_Prediction_Service()
	predicted_emotion = eps.predict(file_name)
	#print("type holo ", type(gps))
	
	# we don't need the audio file any more - let's delete it!
	os.remove(file_name)

	# # send back result as a json file
	result = { "emotion" : predicted_emotion}
	# print("result",result)
	return jsonify(result)


if __name__ == "__main__":
    app.run(debug=False)
