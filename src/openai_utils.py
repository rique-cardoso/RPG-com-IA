import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def consultar_chatgpt(mensagem):
    """
    Função para interagir com o ChatGPT.
    """
    try:
        resposta = openai.ChatCompletion.create(
            model = "gpt-3.5-turbo",
            messages = [
                {"role": "system", "content": "Você é um assistente útil."},
                {"role": "user", "content": mensagem}
            ]
        )
        return resposta.choices[0].message.content.strip()
    except Exception as e:
        return f"Ocorreu um erro: {str(e)}"