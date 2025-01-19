from main import app
from flask import request, jsonify
from gemini_utils import iniciar_jogo, resumir_context

# Rota de início do jogo
@app.route('/start-game', methods=['POST'])
def startGame():
    data = request.json
    mensagem = data.get("mensagem")
    if not mensagem:
        return jsonify({"erro": "Mensagem não fornecida"}), 400
    
    try:
        resposta = iniciar_jogo(mensagem)
        return jsonify({"resposta": resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500

# Rota de resumo de contexto
@app.route('/resume-contexto', methods=['POST'])
def resume_contexto():
    data = request.json
    contexto = data.get("context")
    if not contexto:
        return jsonify({"erro": "Contexto não fornecido"}), 400
    try:
        resposta = resumir_context(contexto)
        return jsonify({"resposta": resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500

# Rota de continuação do jogo
@app.route('/game-continue', methods=['POST'])
def game_continue():
    data = request.json
    escolha = data.get("escolha")
    if not escolha:
        return jsonify({"erro": "escolha não fornecida"}), 400
    try:
        resposta = f'ESCOLHA: {escolha}'
        return jsonify({"resposta": resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500