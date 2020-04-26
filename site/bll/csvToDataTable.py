import pandas as pd
import os

class csvToDataTable:

	def __init__(self, _access_object):

		self._access_object = _access_object

	def convert(self, csvfile):
		print("\n\n MADE IT TO csvToDataTable.convert \n\n")
		#print(__file__)
		fullpath = str(__file__)
		thisfilesname = os.path.basename(__file__)
		staticfolderpath = fullpath[:-len(thisfilesname)]
		staticfolderpath = staticfolderpath[:-4]
		staticfolderpath = staticfolderpath + "static/"
		print(staticfolderpath)
		df = pd.read_csv(str(staticfolderpath) + str(csvfile), header=0, index_col=False, encoding="utf-8")
		df = df.to_html(table_id='mytable', index=False, classes="dt-center")
		return df