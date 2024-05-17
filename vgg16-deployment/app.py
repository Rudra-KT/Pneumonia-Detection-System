from flask import Flask, request, render_template
from keras.models import load_model
from keras.preprocessing import image
from keras.applications.vgg16 import preprocess_input
import numpy as np
import os

app = Flask(__name__)

# Loading trained pneumonia detection model
MODEL_PATH = 'chest_xray.h5'
model = load_model(MODEL_PATH)

@app.route('/pneumonia.html')
def pneumonia():
    return render_template('pneumonia.html')

def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocess the image
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    img_data = preprocess_input(x)

    # Make predictions using the model
    classes = model.predict(img_data)

    # Determine the result based on the prediction
    result = "Affected By PNEUMONIA" if int(classes[0][0]) == 0 else "Result is Normal"
    prob_pneumonia = 1-classes[0][0]
    probability =f"Probability of having PNEUMONIA is {prob_pneumonia}"

    return result , probability



@app.route('/', methods=['GET'])
def index():
    # Render the HTML template for uploading images
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return render_template('index.html', prediction='No file selected')

    file = request.files['file']
    if file.filename == '':
        return render_template('index.html', prediction='No file selected')

    img_path = os.path.join('uploads', file.filename)
    file.save(img_path)

    prediction, probability = model_predict(img_path, model)

    # Return prediction and probability as a list
    return [prediction, probability]


if __name__ == '__main__':
    app.run(debug=True)
