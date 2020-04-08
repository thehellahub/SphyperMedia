import setproctitle
from gevent.pywsgi import WSGIServer
from api_routes import webapp, api
from flask import Flask, redirect, url_for, render_template, Blueprint, session, app


debug = True

hostname = 'sphypermedia'

app = Flask(__name__)
app.register_blueprint(webapp)
app.register_blueprint(api)
app.config['SERVER_NAME'] = 'sphypermedia.com:5000'

def main():

	# For developers, use this
	#app.run(debug=debug, host='0.0.0.0')

	# For server, use this
	app.run(debug=debug)

main()