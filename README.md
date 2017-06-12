# README

Match App is for making your outsourcing job easier to be able to find out proper service and post request, make an appointment, make a deal,.etc.

Following are configuration of this app

* Ruby version
    2.4.1
    Rails -v : 5.1.1

* System dependencies
    rspec-rails
    react-rails

* Configuration

    rails new matchApp -T --skip-coffeescript --skip-turbolinks -d postgresql

    cd matchApp
    edit Gemfile
    add gem 'rspec-rails'
        gem 'react-rails'

* Database creation
    Getting started postgresql in local not vagrant
   To install PostgreSQL on the command line we will be using a package manager called Homebrew.You can start by copying and pasting the following command into our command line: 
```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Installing Postgres
```
brew install postgresql
```
Homebrew takes care of resolving Postgres’ dependencies. You can just start postgres with the following command.
```
brew services start postgresql
```
And, make sure postgres is installed and running by checking what version is running
```
postgres -V
```
Create user in CLI
```
createuser {username} -s
```
You don't need to create database, instead use rails db:create command. 


* Database initialization

edit config/database.yml
modify username and password for developement database

rails db:create

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* steps to build application

				Installing Tools
				Ruby & PG
				Running on Rails
				Creating the Home Controller
				React-Ralls gem and the first component
				Pro-rendering SEO
				Building the mock up
				Install node
				Install webpack
				
				
```apple js
				npm install --save-dev babel-loader babel-core babel-preset-env babel-preset-react webpack
				npm install --save-dev babel-cli babel-preset-react
				echo '{ "presets": ["react"] }' > .babelrc

                webpack -w -d
```
				Post form markup
				Posts List
				Hooking the Post Form
				Rails A Pt
				Devise for Authentication
				User Profile
				The Post Resource
				Using the A PA with React Directives
				Adding time and Gravatar

```

createdb project_dev
createuser development -s
psql
\password  development
rails g model user first_name last_name email password_digest profile_pic
rails g model category name
rails g model service user:references category:references description hourly_rate:integer
rails g model review user:references service:references description rating:integer

```
# for message model just run 1st line in command line next in model file.
```
rails g model message content:text
t.references :sender_user
t.references :receiver_user
```

# Start Postgresql
```
brew services start postgresql

brew services stop postgresql

```
### if mini-magick error occured

```
brew uninstall imagemagick
brew install imagemagick
```

### Project looks like.
* When you visit home page you can able to see this UI.
![Home](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/home.png)
![Home](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/home2.png)

* You can able to find service providers by typing in search bar or selecting in category list in left side.

![search category](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/search.png)
![search category](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/search2.png)

* If you want to see some one's profile you need to register/login if you click on particular card from home page it redirects to login.
![registration](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/signup.png)
![login](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/login.png)

* you cna see individual service providers page contains reviews/ratings and also you can give ratings to them and send message if you want to have work with them.
![send_review](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/review.png)
![send_message](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/send%20message.png)

* As a service provider you can goto your profile and add profile/ edit profile/ delete profile.
![myprofile_add](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/myservice_add.png)
![edit_myprofile](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/edit_service.png)

* You can see your messages and send reply message as well.
![my_messages](https://github.com/sindhupriya-madala/lhl-final-match-app/blob/master/blucoller%20screenshots/my_messages.png)


