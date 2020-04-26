import csv
import json
from flask import Flask
from os import getcwd

def ReadItunesCsv():
	app = Flask(__name__)
	Genre = {}
	print(getcwd())
	with open("bll/Itunes.csv", newline='') as csvfile:
		csv_reader = csv.reader(csvfile, delimiter=',')
		line_count = 0
		for row in csv_reader:
			line_count += 1
			genre = row[4]
			if genre not in Genre:
				Genre[genre] = 1
			else:
				Genre[genre] += 1
	del Genre["3:51"]
	Genre["Hip-Hop/Rap"] += 1
	for key in Genre:
		Genre[key] = round((int(Genre[key])/line_count) * 100, 2)
	my_json = json.dumps(Genre)
	return my_json

app = Flask(__name__)
@app.route('/')
def output():
	my_json = ReadItunesCsv()
	return my_json
@app.route('/receiver', methods = ['POST'])
def worker():
	data = request.get_json(my_json)
	result = ''

if __name__ == '__main__':
	app.run()

ReadItunesCsv()
output()