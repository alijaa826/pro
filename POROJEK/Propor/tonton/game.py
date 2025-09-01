import random

print("Selamat datang di permainan Batu, Gunting, Kertas")
print("-------------------------------------------------")

while True:
    tipe = input("Silahkan Pilih:")
    bot = ['Batu,' 'Gunting', 'Kertas']
    komputer_random = random.choice(bot)
    
    #Logicbatu
    if tipe == komputer_random:
        print("Seri!")
    else:
        if tipe == 'Batu':
            if komputer_random == 'Gunting':
                print("Selamat, kamu menang!")
            if komputer_random == 'Kertas':
                print("Maaf, kamu kalah")

        if tipe == 'Gunting':
            if komputer_random == 'Kertas':
                print("Selamat, kamu menang!")
            if komputer_random == 'Batu':
                print("Maaf, kamu kalah")

        if tipe == 'Kertas':
            if komputer_random== 'Batu':
                print("Selamat, kamu menang!")
            if komputer_random == 'Gunting':
                print("Maaf, kamu kalah")


