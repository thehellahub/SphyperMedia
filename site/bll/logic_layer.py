from bll import WeatherData
from bll import csvToDataTable
from object_access_file import Object_Access

class LogicLayer:

	def __init__(self):
		self._oa = Object_Access()


	def nicks_get_weather_data(self,zip_code):
		return WeatherData.WeatherData(self._oa).nicks_query_by_zip_api_function(zip_code)

	def andrews_load_genre_data():
		return itunes.output()

	def andrews_load_datatable(self, filename):
		return csvToDataTable.csvToDataTable(self._oa).convert(filename)

	
