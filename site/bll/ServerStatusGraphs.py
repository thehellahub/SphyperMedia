import http.server

class ServerStatusGraphs:

	def __init__(self, _access_object):
		self._access_object = _access_object

	def render(self, ip_address):
		print("Graph")