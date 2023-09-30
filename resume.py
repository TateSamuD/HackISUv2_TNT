from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_uploads import UploadSet, configure_uploads, DOCUMENTS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key_here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///uploads.db'
app.config['UPLOADED_RESUMES_DEST'] = 'uploaded_resumes'  # Folder for uploaded resumes

db = SQLAlchemy(app)
resumes = UploadSet('resumes', DOCUMENTS)
configure_uploads(app, resumes)

class Resume(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(300))

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST' and 'resume' in request.files:
        filename = resumes.save(request.files['resume'])
        new_resume = Resume(filename=filename)
        db.session.add(new_resume)
        db.session.commit()
        flash('Resume uploaded successfully!')
        return redirect(url_for('index'))
    return render_template('index.html')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
