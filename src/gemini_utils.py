from dotenv import load_dotenv
import os
import google.generativeai as genai

def consultar_ia(mensagem="cite um trecho de um poema conhecido."):
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(mensagem)
    return response.text