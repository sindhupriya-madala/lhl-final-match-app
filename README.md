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
				Post form markup
				Posts List
				Hooking the Post Form
				Rails A Pt
				Devise for Authentication
				User Profile
				The Post Resource
				Using the A PA with React Directives
				Adding time and Gravatar

