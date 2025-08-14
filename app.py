from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def home():
    return render_template("index.html")

# Serve model or other assets from /static/assets
@app.route("/assets/<path:filename>")
def assets(filename):
    return send_from_directory("static/assets", filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
