from flask import Flask, render_template, redirect, url_for, request
from flask_mail import Mail, Message
from os import getenv
from itsdangerous import URLSafeTimedSerializer

app = Flask(__name__, template_folder='templates', static_folder='static', static_url_path='/')
app.config['SECRETE_KEY'] = getenv('SECRET_KEY')

app.config['MAIL_SERVER'] = getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = getenv('MAIL_PORT')
app.config['MAIL_USE_TLS'] = getenv('MAIL_USE_TLS')
app.config['MAIL_USERNAME'] = getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = getenv('MAIL_DEFAULT_SENDER')

mail = Mail(app)
#serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])


@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        email = request.form['email']
        asunto = request.form['asunto']
        mensaje = request.form['mensaje']

        if (email and asunto and mensaje):
            try:
                send_mail(email, asunto, mensaje)
                return redirect(url_for('index'))
            except Exception as e:
                print(e)
        
    return render_template('index.html')

def send_mail(email, asunto, mensaje):
    msg = Message(
    asunto,
    recipients=[email],
    body=mensaje
    )
    mail.send(msg)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000, threaded=True)