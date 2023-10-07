import requests
from bs4 import BeautifulSoup
from datetime import datetime
import json

res = requests.get('https://seatgeek.com/soccer-tickets')

soup_data = BeautifulSoup(res.text, 'html.parser')
print(soup_data.title)
print("\n")
matches = soup_data.find_all('li', {'data-test': 'item-wrapper'})
data = []
i = 0
for match in matches:
    ele = match.find('a')
    if ele:
        title = ele.find('div', {'data-test': 'title'}).text
        arr = ele.find('p').text.split('·')
        date_str = arr[0].strip()
        location = arr[1].strip()
        input_format = "%b %d %Y"
        date = datetime.strptime(
            date_str, '%b %d').strftime('%d/%m')
        date += '/2023'
        price = ele.find('div', {'data-test': 'price'}).text.split('$')[1]
        logo = ele.find('img').get('src')

        obj = {'id': i, 'title': title, 'location': location,
               'date': date, 'price': price, 'logo': 'url'}
        data.append(obj)
        i += 1

with open("data.json", "w") as outfile:
    json.dump(data, outfile)

# base64_data = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
# binary_data = base64.b64decode(base64_data)
# print(BytesIO(binary_data))
