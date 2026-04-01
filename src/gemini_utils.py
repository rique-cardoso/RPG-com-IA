from dotenv import load_dotenv
import os
from google import genai

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
# Inicializa o cliente com a sua chave
client = genai.Client(api_key=api_key)

def consultar_gemini(mensagem):
    # Usando o modelo gemini-2.5-flash que estava na sua lista
    response = client.models.generate_content(
        model='gemini-2.5-flash', 
        contents=mensagem
    )
    return response.text