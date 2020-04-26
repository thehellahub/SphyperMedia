import csv
import json
import os

class itunes:

	def ReadItunesCsv():
		print("\n\n Made it to itunes.ReadItunesCsv \n\n")
		Genre = {}
		fullpath = str(__file__)
		thisfilesname = os.path.basename(__file__)
		bllfolderpath = fullpath[:-len(thisfilesname)]
		bllfolderpath = bllfolderpath[:-4]
		bllfolderpath = bllfolderpath + "bll/"
		with open(str(bllfolderpath) + "Itunes.csv", newline='') as csvfile:
			csv_reader = csv.reader(csvfile, delimiter=',')
			line_count = 0
			for row in csv_reader:
				line_count += 1
				genre = row[4]
				if genre not in Genre:
					Genre[genre] = 1
				else:
					Genre[genre] += 1
		for key in Genre:
			Genre[key] = round((int(Genre[key])/line_count) * 100, 2)
		my_json = json.dumps(Genre)
		return my_json