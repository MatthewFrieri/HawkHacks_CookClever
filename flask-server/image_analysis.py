import google.generativeai as genai
from PIL import Image
import json
import base64
from io import BytesIO

def interpret_input(imageBase64, requirements):

    # Decode image
    data = imageBase64[23:]
    image = Image.open(BytesIO(base64.b64decode(data)))

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

    textPrompt = f'''
        The defined requirements are: {requirements}.

        Return a python dictionary with the key "points" representing a score out of 10. 
        Establish this score based on how well it meets the defined requirements. 
        Also include the key "feedback" in the python dictionary, 
        representing some feedback based on how well the picture met the requirements.
        Give the feedback in a positive tone that promotes learning.'''
    response = model.generate_content([textPrompt, image]).text

    # # prep the response format
    response = response[10:-3]
    response = json.loads(response)

    return response
