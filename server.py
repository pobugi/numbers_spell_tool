from flask import Flask, request, render_template, jsonify
from spell_number import spell_number

app = Flask(__name__)


class database:
    data = []

    def __init__(self):
        self.data = []

    def save(self, entry):
        self.data.append(entry)


db = database()


@app.route("/", methods=["GET", "POST"])
def mainpage():
    return render_template("spell.html")


@app.route("/api/v1/create", methods=["POST"])
def create():
    if not request.is_json:
        return "Error"

    resp = {}
    data = request.get_json()
    db.save(data)
    answer = spell_number(data)
    resp = {"value": answer}
    db.data.clear()
    return jsonify(resp)


if __name__ == "__main__":
    app.run(debug=True)
