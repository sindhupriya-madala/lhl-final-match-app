# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Message.destroy_all
Review.destroy_all
Category.destroy_all
Service.destroy_all
User.destroy_all

# category table
cat1 = Category.find_or_create_by! name: 'AC Services'
cat2 = Category.find_or_create_by! name: 'Carpenter' 
cat3 = Category.find_or_create_by! name: 'Cleaner'
cat4 = Category.find_or_create_by! name: 'Electrician'
cat5 = Category.find_or_create_by! name: 'Interior Design'
cat6 = Category.find_or_create_by! name: 'Painter'
cat7 = Category.find_or_create_by! name: 'Plumber'
cat8 = Category.find_or_create_by! name: 'Renovations'


# user table
u1 = User.create!({
  first_name: 'Sindhu',
  last_name: 'Manoj',
  email: 'sindhu@test.com',
  password: '123456',
  profile_pic: 'asd'
})

u2 = User.create!({
  first_name: 'Sindhu',
  last_name: 'Priya',
  email: 'test2@test.com',
  password: '123456',
  profile_pic: 'asd'
})

u3 = User.create!({
  first_name: 'Sean',
  last_name: 'Park',
  email: 'test3@test.com',
  password: '123456',
  profile_pic: 'asd'
})

u4 = User.create!({
  first_name: 'Alvin',
  last_name: 'Shih',
  email: 'test4@test.com',
  password: '123456',
  profile_pic: 'asd'
})

u5 = User.create!({
  first_name: 'charls',
  last_name: 'bob',
  email: 'charls.bob@gmail.com.com',
  password: '123456',
  profile_pic: 'computer1.jpg'
})

# message table
Message.create!({
  sender_user: u1,
  receiver_user: u2,

  content: ' Hi are you available next week'

})

Message.create!({
  sender_user: u1,
  receiver_user: u3,
  content: 'message from user1 to user3'
})

Message.create!({
  sender_user: u1,
  receiver_user: u4,
  content: 'message from user1 to user4'
})

Message.create!({
  sender_user: u2,
  receiver_user: u3,
  content: 'message from user2 to user3'
})


# Service table
ser1 = Service.create!({
  user: u1,
  category: cat1,
  description: 'service 1 service 1 service 1 service 1 service 1 service 1 service 1 service 1 service 1 service 1',
  hourly_rate: 15
})

ser2 = Service.create!({
  user: u1,
  category: cat2,
  description: 'sdsflshgfufjduriughkjkjvhiufjkefheiuqwofksfndxxvodifeuo',
  hourly_rate: 15
})

ser3 = Service.create!({
  user: u1,
  category: cat3,
  description: 'Hi. I"m Sindhu and I am a Cleaner',
  hourly_rate: 15
})

ser4 = Service.create!({
  user: u1,
  category: cat4,
  description: 'sdsflshgfufjduriughkjkjvhiufjkefheiuqwofksfndxxvodifeuo',
  hourly_rate: 16
})

ser4 = Service.create!({
  user: u1,
  category: cat2,
  description: 'sdsflshgfufjduriughkjkjvhiufjkefheiuqwofksfndxxvodifeuo',
  hourly_rate: 16
})

# reviews table

Review.create!({
  user: u1,
  service: ser1,
  description: 'review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1 review 1',
  rating: 3
})


Review.create!({
  user: u2,
  service: ser2,
  description: 'review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2 review 2',
  rating: 4
})

Review.create!({
  user: u3,
  service: ser3,
  description: 'review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3 review 3',
  rating: 4
})
Review.create!({
  user: u4,
  service: ser4,
  description: 'review 4 review 4 review 4 review 4 review 4 review 4 review 4 review 4 review 4 review 4 review 4 review 4',
  rating: 4
})