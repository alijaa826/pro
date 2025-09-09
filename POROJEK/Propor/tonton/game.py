from flask import Flask, render_template_string, request
import random

app = Flask(__name__)

# Template HTML
html_template = """
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Batu Gunting Kertas</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      color: #fff;
      text-align: center;
      padding: 40px;
      margin: 0;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 30px;
    }

    .choices {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .choices button {
      padding: 15px 30px;
      border: none;
      border-radius: 12px;
      background: #fff;
      color: #333;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s, background 0.3s;
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }

    .choices button:hover {
      background: #ff6a88;
      color: #fff;
      transform: scale(1.1);
    }

    .result {
      font-size: 1.4rem;
      font-weight: bold;
      margin-top: 20px;
      padding: 15px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      display: inline-block;
    }

    footer {
      margin-top: 50px;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.8);
    }
  </style>
</head>
<body>
  <h1>🎮 Batu Gunting Kertas 🎮</h1>
  <p>Pilih salah satu dan lawan komputer!</p>

  <div class="choices">
    <form method="POST">
      <button type="submit" name="choice" value="Batu">🪨 Batu</button>
      <button type="submit" name="choice" value="Gunting">✂️ Gunting</button>
      <button type="submit" name="choice" value="Kertas">📄 Kertas</button>
    </form>
  </div>

  {% if result %}
  <div class="result">
    {{ result }}
  </div>
  {% endif %}

  <footer>
    Dibuat dengan ❤️ pakai Flask
  </footer>
</body>
</html>
"""

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    if request.method == "POST":
        user_choice = request.form["choice"]
        computer_choice = random.choice(["Batu", "Gunting", "Kertas"])

        if user_choice == computer_choice:
            result = f"🤝 Seri! Kamu dan komputer sama-sama memilih {user_choice}."
        elif (user_choice == "Batu" and computer_choice == "Gunting") or \
             (user_choice == "Gunting" and computer_choice == "Kertas") or \
             (user_choice == "Kertas" and computer_choice == "Batu"):
            result = f"🎉 Menang! Kamu memilih {user_choice}, komputer memilih {computer_choice}."
        else:
            result = f"😢 Kalah... Kamu memilih {user_choice}, komputer memilih {computer_choice}."

    return render_template_string(html_template, result=result)

if __name__ == "__main__":
    app.run(debug=True)
