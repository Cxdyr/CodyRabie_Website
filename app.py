from flask import Flask, render_template, request, jsonify
from chatbot.chatbot import CodyBot

app = Flask(__name__)
bot = CodyBot()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chatbot')
def chatbot():
    return render_template('chatbot.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/get_response', methods=['POST'])
def get_response_route():
    user_input = request.form['user_input']
    response = bot.get_response(user_input) 
    return jsonify(response=response)

if __name__ == '__main__':
    app.run(debug=True)
