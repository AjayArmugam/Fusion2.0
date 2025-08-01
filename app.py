from flask import Flask, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)

# Get the Gemini API key securely
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file.")

# Configure Gemini
genai.configure(api_key=api_key)

# Load Gemini 1.5 Pro model
model = genai.GenerativeModel(model_name="gemini-1.5-pro")

@app.route('/')
def home():
    return open("index.html").read()

@app.route('/api/scholarship', methods=['POST'])
def scholarship():
    data = request.json

    prompt = f"""
    You are an expert scholarship advisor. Based on the student profile below, recommend the most suitable scholarships in India.

    Student Profile:
    - Name: {data.get('name')}
    - Date of Birth: {data.get('dob')}
    - Place: {data.get('place')}
    - Gender: {data.get('gender')}
    - Education Level: {data.get('education')}
    - Disability Status: {data.get('disability')}
    - Academic Marks: {data.get('marks')}%
    - Ex-Servicemen Family: {data.get('exservice')}

    Please provide:
    - 3 to 5 scholarships
    - Short summary of each
    - Application link if available
    """

    try:
        response = model.generate_content(prompt)
        return jsonify({'reply': response.text})
    except Exception as e:
        return jsonify({'reply': f"Something went wrong: {str(e)}"})

if __name__ == '__main__':
    app.run(debug=True)
