# angka = int(input("Masukkan sebuah angka: "))
# if angka % 2 == 0:
#     print(angka, "adalah bilangan genap")
# else:
#     print(angka, "adalah bilangan ganjil")

import random

def main():
    print("Selamat datang di permainan Tebak Angka!")
    print("Saya telah memilih angka antara 1 dan 100.")
    
    angka_rahasia = random.randint(1, 50)
    percobaan = 0

    while True:
        try:
            tebakan = int(input("Tebak angka: "))
            percobaan += 1

            if tebakan < angka_rahasia:
                print("Terlalu kecil!")
            elif tebakan > angka_rahasia:
                print("Terlalu besar!")
            else:
                print(f"Selamat! Kamu menebak dengan benar dalam {percobaan} percobaan.")
                break
        except ValueError:
            print("Masukkan angka yang valid!")

if __name__ == "__main__":  
    main()
