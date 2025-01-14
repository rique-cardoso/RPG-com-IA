from main import app
from flask import request, jsonify
from openai_utils import consultar_chatgpt

@app.route('/chat')
def chat():
    data = request.json
    mensagem = data.get("mensagem", "")
    if not mensagem:
        return jonify({"erro": "Mensagem não fornecida"}), 400
    
    resposta = consultar_chatgpt(mensagem)
    return jsonify({"resposta": resposta})