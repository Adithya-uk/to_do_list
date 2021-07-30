from flask import Flask, render_template , request,json,jsonify,redirect,url_for,abort,render_template
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from datetime import date
import time

app = Flask(__name__)
CORS(app)

ENV = 'dev'

if ENV == 'dev' :
  app.debug = True
  app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://todo_list:admin@localhost/todo'

else:
  app.debug = False
  app.config['SQLALCHEMY_DATABASE_URI'] = ''


app.config['SQLALCHEMY_TRACK_NOTIFICATONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Userclass(db.Model):
    __tablename__='userinfo'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(50))

    def __init__(self, username, email, password):
      self.username = username
      self.email = email
      self.password = password

class Todoclass(db.Model):
    __tablename__='taskinfo'
    id = db.Column(db.String(200),primary_key=True)
    userid = db.Column(db.Integer)
    taskdesc = db.Column(db.Text())
    tasktime = db.Column(db.Time)
    taskdate = db.Column(db.Date)
    taskweek = db.Column(db.Integer)

    def __init__(self, id ,taskdesc, tasktime, taskdate,taskweek):
      
      self.id = id
      self.taskdesc = taskdesc
      self.tasktime = tasktime
      self.taskdate = taskdate
      self.taskweek = taskweek
class TodoclassSchema(ma.Schema):
  class Meta:
    fields = ('id', 'userid' , 'taskdesc', 'tasktime', 'taskdate', 'taskweek')


todoclass_schema = TodoclassSchema()
todoclasss_schema = TodoclassSchema(many=True)    



class Object :
  def toJSON(self):
    return json.dumps(self, default=lambda o: o.__dict__,sort_keys=True, indent=4)      

@app.route('/api/signup' , methods=['POST'])
def signup():
    request_data = json.loads(request.data)
    print(request_data['content']["username"])
    user = Userclass(username=request_data['content']["username"],password=request_data['content']["password"],email=request_data['content']["email"])

    db.session.add(user)
    db.session.commit()

    return {'201': 'user added '}

@app.route('/api/login' , methods=['POST'])
def login():

  request_data = json.loads(request.data)
  print(request_data)
  un = request_data['content']["username"]
  ps = request_data['content']["password"]
  print(un)
  print(ps)
  
  
  
  #user_info = Userclass.query.all()
  #print("user_info",user_info)
  # user = Userclass(username=request_data['content']["username"],password=request_data['content']["password"],email=request_data['content']["email"])
  # results = [
  #   {
  #       "id" : user.id,
  #     "username" : user.username,
  #     "email" : user.email,
  #     "password" : user.password
            
  #   }for user in user_info]

  check_details = Userclass.query.filter_by(username = un).first()
  if (check_details.password==ps):
     print("got it here")
    # db.session.add(user)
    # db.session.commit()
  #print("count",len(results), "user_info",results)
     return {'message': 'login success'}
  else :
      return render_template("invalid.html")



@app.route('/api/addtodo' , methods=['POST'])
def addtask():
    request_data = json.loads(request.data)
    print(request_data['content']["time"])
    date_str = (request_data['content']["date"])
    print(date_str)
    format_str = '%Y-%m-%d'
    datetime_obj = datetime.datetime.strptime(date_str, format_str)
    date = datetime_obj.date()
    weekno = date.isocalendar()[1]
    print(weekno)
    task = Todoclass(id=request_data['content']["id"],taskdesc=request_data['content']["taskTitle"],taskdate=request_data['content']["date"],tasktime=request_data['content']["time"],taskweek=weekno)
   
    db.session.add(task)
    db.session.commit()

    return {'201': 'task added '}

@app.route('/api/deletetodo' , methods=['POST'])
def deletetask():
  print("hi")
  request_data = request.data.decode()
  print(request_data)  
  print(request_data)
  del_data = Todoclass.query.get(request_data)  
   
  print(del_data)
  db.session.delete(del_data)
  db.session.commit()
  return {'201': 'task deleted '}

@app.route('/api/viewdue' , methods=['GET'])  
def viewdue():
  todaydate = date.today()
  print(todaydate)
  now = time.localtime()

  timenow = time.strftime("%H:%M:%S",now)
  print(timenow)
  all_Data = Todoclass.query.filter(Todoclass.taskdate <= todaydate )
  print(all_Data)
  results = todoclasss_schema.dump(all_Data)
  return jsonify(results)  

@app.route('/api/viewtoday' , methods=['GET'])
def viewtoday():  
  todaydate = date.today()
  print(todaydate)
  all_Data = Todoclass.query.filter_by(taskdate=todaydate).all()
  # print(all_Data)
  results = todoclasss_schema.dump(all_Data)
  #json.dumps(all_Data)
  return jsonify(results)

@app.route('/api/viewweek' , methods=['GET'])
def viewweek():  
  todaydate = date.today()
  
  weekno = todaydate.isocalendar()[1]
  print(weekno)
  all_Data = Todoclass.query.filter_by(taskweek=weekno)
  
  # print(all_Data)
  results = todoclasss_schema.dump(all_Data)
  #json.dumps(all_Data)
  return jsonify(results) 






  


@app.route('/api/deletearticle/<id>/' , methods = ['GET','DELETE'])
def deletearticle(id):
  print(id)
  article = Todoclass.query.get(id)
  print("heyyyyyy")
  print(article)
  db.session.delete(article)
  db.session.commit()
  return {'201': 'task deleted '}

  

@app.route('/')
def index():
    return ("hello")

if __name__ == '__main__' :
  app.run()    

