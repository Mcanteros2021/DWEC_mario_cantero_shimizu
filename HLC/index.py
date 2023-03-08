import requests
from bs4 import BeautifulSoup
r = requests.get('https://www.filmaffinity.com/es/film449226.html')
t = r.text
soup = BeautifulSoup(t, 'html.parser')

titulo_original = soup.find('dt', text='Título original').find_next_sibling('dd').text.strip()
año = soup.find('dt', text='Año').find_next_sibling('dd').text.strip()
duracion = soup.find('dt', text='Duración').find_next_sibling('dd').text.strip()
pais = soup.find('dt', text='País').find_next_sibling('dd').text.strip()
direccion = soup.find('dt', text='Dirección').find_next_sibling('dd').text.strip()
guion = soup.find('dt', text='Guion').find_next_sibling('dd').text.strip()
musica = soup.find('dt', text='Música').find_next_sibling('dd').text.strip()
fotografia = soup.find('dt', text='Fotografía').find_next_sibling('dd').text.strip()
reparto = soup.find('dt', text='Reparto').find_next_sibling('dd').text.strip()
productora = soup.find('dt', text='Compañías').find_next_sibling('dd').find('span').find('span').text.strip()
generos = soup.find('dt', text = 'Género').find_next_sibling('dd').text.strip().replace('.',',').replace('|',',').replace(' ','')
sinopsis = soup.find('dt',text = 'Sinopsis').find_next_sibling('dd').text.strip()

print('Título original:', titulo_original)
print('Año:', año)
print('Duración:', duracion)
print('País:', pais)
print('Dirección:', direccion)
print('Guion:', guion)
print('Música:', musica)
print('Fotografía:', fotografia)
print('Reparto:', reparto)  
print('Productora:', productora)
print('Generos:', generos)
print('Sinopsis: ', sinopsis)

pelicula = {
    "Título original": titulo_original,
    "Año": año,
    "Duración": duracion,
    "País": pais,
    "Dirección": direccion,
    "Guion": guion,
    "Música": musica,
    "Fotografía": fotografia,
    "Reparto": reparto,
    "Productora": productora,
    "Géneros": generos,
    "Sinopsis": sinopsis
}