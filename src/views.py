from main import app
from flask import request, jsonify
from gemini_utils import consultar_gemini

# Rota de início do jogo
@app.route('/start-game', methods=['POST'])
def startGame():
    data = request.json
    mensagem = data.get("mensagem")
    if not mensagem:
        return jsonify({"erro": "Mensagem não fornecida"}), 400
    
    try:
        resposta = consultar_gemini(mensagem)
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
        prompt = f'Resuma o máximo possível o seguinte texto: "{contexto}"'
        resposta = consultar_gemini(prompt)
        return jsonify({"resposta": resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500

# Rota de continuação do jogo
@app.route('/game-continue', methods=['POST'])
def game_continue():
    data = request.json
    prompt = data.get("novoPrompt")
    if not prompt:
        return jsonify({"erro": "novoPrompt não fornecido"}), 400
    try:
        novoContexto = consultar_gemini(prompt)
        status = 'jogando'
        if 'game-over: yes' in novoContexto.lower():
            status = 'perdeu'
        if 'game-win: yes' in novoContexto.lower():
            status = 'ganhou'
        # resposta = novoContexto
        return jsonify({"resposta": novoContexto, "status": status})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500