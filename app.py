from flask import Flask,redirect, render_template

app = Flask(__name__)

@app.route("/")
def home_page():
    return render_template("base.html")

@app.route("/coding")
def coding():
    return render_template("coding.html")

@app.route("/hiking")
def hiking():
    return render_template("hiking.html")

@app.route("/tech")
def tech():
    return render_template("tech.html")

@app.route("/dogs")
def dogs():
    return render_template("dogs.html")

if __name__ == "__main__":
    app.run(debug=True) 