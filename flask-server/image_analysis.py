import google.generativeai as genai
from PIL import Image
import json

def interpret_input(image, criteria):

    genaiApiKey = 'AIzaSyALiAf2fi7aNLa2rQS4x7F_9XGctY25e94' # FIXME
    genai.configure(api_key=genaiApiKey)

    # Create the model
    # See https://ai.google.dev/api/python/google/generativeai/GenerativeModel
    generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
    }
    safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE",
    },
    ]

    model = genai.GenerativeModel(
    model_name='gemini-pro-vision',
    safety_settings=safety_settings,
    generation_config=generation_config,
    )

    textPrompt = f'Critique this image based on these requirements. \
        Also give it some points out of 10 based on how good it did: {criteria}'
    response = model.generate_content([textPrompt, image])

    return response.text


img = Image.open('flask-server/carrots.jpeg')
requirements = 'cut the carrots into even pieces'

criteria = f'''
The defined requirements are: {requirements}.

Return a python dictionary with the key "points" representing a score out of 10. 
Establish this score based on how well it meets the defined requirements. 
Also include the key "feedback" in the python dictionary, 
representing some feedback based on how well the picture met the requirements.
Give the feedback in a positive tone that promotes learning.'''

response = interpret_input(img, criteria)

# prep the response format
response = response[10:-3]
response = json.loads(response)

print(response)
