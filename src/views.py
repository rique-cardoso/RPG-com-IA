from main import app
from flask import request, jsonify
from gemini_utils import consultar_ia

# Rota de início do jogo
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

# Rota de continuação do jogo
@app.route('/jogo-continue', methods=['POST'])
def jogo_continue():
    data = request.json
    mensagem = data.get("escolha")
    if not mensagem:
        return jsonify({"erro": "Mensagem não fornecida"}), 400
    try:
        resposta = f'{mensagem} ==HHHHHH== TA DANDO BOM!'
        return jsonify({"resposta": resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500