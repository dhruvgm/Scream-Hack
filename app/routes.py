from flask import Flask, render_template
 
app = Flask(__name__)      
 
@app.route('/')
def home():
  return render_template('home.html')

@app.route('/videoPage.html')
def about():
  return render_template('videoPage.html')
 
if __name__ == '__main__':
  app.run(debug=True)
