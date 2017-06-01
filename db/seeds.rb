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
cat1 = Category.find_or_create_by! name: 'AC Repair'
cat2 = Category.find_or_create_by! name: 'Carpentry' 
cat3 = Category.find_or_create_by! name: 'Electrician'
cat4 = Category.find_or_create_by! name: 'Gutters and Roofing'
cat5 = Category.find_or_create_by! name: 'Housekeeping'
cat6 = Category.find_or_create_by! name: 'Interior Design'
cat7 = Category.find_or_create_by! name: 'Painting'
cat8 = Category.find_or_create_by! name: 'Plumbing'
cat9 = Category.find_or_create_by! name: 'Renovations'


# user table
u1 = User.create!({
  first_name: 'Sindhu',
  last_name: 'Priya',
  email: 'SindhuPriya@gmail.com',
  password: '123456',
  profile_pic: 'sindhu.jpg'
})

u2 = User.create!({
  first_name: 'Rubber',
  last_name: 'Ducky',
  email: 'test2@test.com',
  password: '123456',
  profile_pic: 'duck.jpg'
})

u3 = User.create!({
  first_name: 'Sean',
  last_name: 'Park',
  email: 'test3@test.com',
  password: '123456',
  profile_pic: 'anon.jpg'
})

u4 = User.create!({
  first_name: 'Alvin',
  last_name: 'Shih',
  email: 'test4@test.com',
  password: '123456',
  profile_pic: 'anon.jpg'
})

u5 = User.create!({
  first_name: 'Charles',
  last_name: 'Bob',
  email: 'charles.bob@gmail.com',
  password: '123456',
  profile_pic: 'charles.jpg'
})

u6 = User.create!({
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@gmail.com',
  password: '123456',
  profile_pic: 'john.jpg'
})

u7 = User.create!({
  first_name: 'A',
  last_name: 'Dog',
  email: 'a.dog@gmail.com',
  password: '123456',
  profile_pic: 'dog.jpg'
})

u8 = User.create!({
  first_name: 'Pika',
  last_name: 'Chu',
  email: 'pika.chu@gmail.com',
  password: '123456',
  profile_pic: 'pikachu.png'
})

u9 = User.create!({
  first_name: 'Brock',
  last_name: 'Omama',
  email: 'brock.omama@gmail.com',
  password: '123456',
  profile_pic: 'obama.jpg'
})

u10 = User.create!({
  first_name: 'Daniel',
  last_name: 'Frump',
  email: 'daniel.frump@gmail.com',
  password: '123456',
  profile_pic: 'Trump.jpg'
})

u11 = User.create!({
  first_name: 'Bruce',
  last_name: 'Wayne',
  email: 'not.batman@gmail.com',
  password: '123456',
  profile_pic: 'batman.jpg'
})

# message table
Message.create!({
  sender_user: u3,
  receiver_user: u2,
  content: 'Hi are you available next week?'
})

Message.create!({
  sender_user: u4,
  receiver_user: u1,
  content: 'message from user1 to user3'
})

Message.create!({
  sender_user: u5,
  receiver_user: u2,
  content: 'message from user1 to user4'
})

Message.create!({
  sender_user: u6,
  receiver_user: u2,
  content: 'message from user2 to user3'
})

# Service table
ser1 = Service.create!({
  user: u2,
  category: cat1,
  description: 'Why do junior web developers keep reading and explaining their terrible code to me. For the love of god, please make it stop. I can"t take it anymore."',
  hourly_rate: 400
})

ser2 = Service.create!({
  user: u6,
  category: cat2,
  description: 'Has any seen a corpse lying around here somewhere?',
  hourly_rate: 20
})

ser3 = Service.create!({
  user: u2,
  category: cat3,
  description: 'Hi. I"m Sindhu and I am a Electrician',
  hourly_rate: 50
})

ser4 = Service.create!({
  user: u8,
  category: cat3,
  description: 'pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika chu.',
  hourly_rate: 30
})

ser5 = Service.create!({
  user: u5,
  category: cat6,
  description: 'Hi Im new to Interior Design please hire me',
  hourly_rate: 16
})

ser6 = Service.create!({
  user: u7,
  category: cat6,
  description: 'Seriously, I"m just a dog and have absolutely no idea what I"m doing. Bark Bark Bark Woof.',
  hourly_rate: 20
})

ser7 = Service.create!({
  user: u9,
  category: cat9,
  description: 'Welcome, I have been in the home service industry for over 10 years. I work with a closely knit team to help individuals renovate their houses. Now let me be clear, it won"t be an easy task, but can we help build your dream home? Yes we can!',
  hourly_rate: 90
})

ser8 = Service.create!({
  user: u10,
  category: cat9,
  description: 'Hi I"m completely new to home renovations and have zero training, but I really enjoy building walls. Let"s make your home great again!',
  hourly_rate: 100000
})

# reviews table

Review.create!({
  user: u7,
  service: ser8,
  description: 'I hired this guy earlier in January and later discovered that he"s a total quack.',
  rating: 1
})

Review.create!({
  user: u6,
  service: ser8,
  description: 'Tried to replace my front door with a wall AND charge me for it. Absurd.',
  rating: 2
})

Review.create!({
  user: u7,
  service: ser9,
  description: 'On the internet, nobody knows you"re a dog. Woof.',
  rating: 5
})

Review.create!({
  user: u5,
  service: ser9,
  description: 'Did a fine job, thanks for all the hard work.',
  rating: 4
})