import os
import re
import glob
import pandas as pd
import numpy as np
import json
from flask import Flask, render_template, Blueprint, request, send_from_directory, send_file, flash, Blueprint, g, session, app
from flask_wtf import Form
from bll import logic_layer
from bs4 import BeautifulSoup as bs

webapp = Blueprint("webapp",
					__name__,
					template_folder="templates",
					static_folder="static",
					static_url_path="/static"
					)

#api = Blueprint("api", __name__, url_prefix="/api")

LogicLayer = logic_layer.LogicLayer()


def get_js__and_css_source():

	# Add js files here as you create them
	js_files = ['init.js','nick.js','magicscroll.js','derrick.js']

	css_files = ['style.css', 'd3LineChart.css','tipsy.css','magicscroll.css']

	this_files_dir = os.path.dirname(os.path.abspath(__file__))

	js_source = ""
	for js_filename in js_files:
		js_path = os.path.join(this_files_dir, "static", js_filename)
		with open(js_path, "r") as f:
			js_source += f.read()

	css_source = ""
	for css_filename in css_files:
		css_path = os.path.join(this_files_dir, "templates", css_filename)
		with open(css_path, "r") as f:
			css_source += f.read()

	return js_source, css_source

@webapp.route("/")
def go():
	js_source, css_source = get_js__and_css_source()

	return render_template("index.html.j2",
							js_source=js_source,
							css_source=css_source
							)


@webapp.route("/load-profile", methods=["POST"])
def load_profile_html():	
	#js_source, css_source = get_js__and_css_source()
	member = request.form["member"]
	return json.dumps(render_template(member + ".html.j2"))


@webapp.route("/nicks-load-weather-data", methods=["POST"])
def nicks_load_weather_data():	
	zip_code = request.form["zip_code"]
	return json.dumps(LogicLayer.nicks_get_weather_data(zip_code))


@webapp.route('/download-nhella-resume',methods = ['GET'])
def download_nhella_resume():
	path = os.getcwd()
	return send_file(path+"/Resumes/Nhella_Resume.pdf",
					mimetype='pdf',
					attachment_filename='Nhella_Resume.pdf',
					as_attachment=True)
	
@webapp.route('/download-dleger-resume',methods = ['GET'])
def download_dleger_resume():
	path = os.getcwd()
	return send_file(path+"/Resumes/Dleger_Resume.pdf",
					mimetype='pdf',
					attachment_filename='Dleger_Resume.pdf',
					as_attachment=True)
