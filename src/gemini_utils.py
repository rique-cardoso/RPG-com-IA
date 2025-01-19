from dotenv import load_dotenv
import os
import google.generativeai as genai

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

def iniciar_jogo(mensagem=""):
    response = model.generate_content(mensagem)
    return response.text
def resumir_context(contexto):
    comando = f'Resuma o máximo possível o seguinte texto: "{contexto}"'
    context_resumido = model.generate_content(comando)
    return context_resumido.text
