from main import app
from flask import request, jsonify
from gemini_utils import consultar_ia

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    mensagem = data.get("mensagem")
    if not mensagem:
        return jsonify({"erro": "Mensagem não fornecida"}), 400
    
    try:
        resposta = consultar_ia(mensagem)
        return jsonify({"resposta": resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500
