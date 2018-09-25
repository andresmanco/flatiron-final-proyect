# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user0 = User.create(fullname: 'Andres', username: 'user0', email: 'andres@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user1 = User.create(fullname: 'John', username: 'user1', email: 'john@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user2 = User.create(fullname: 'Alvaro', username: 'user2', email: 'alvaro@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user3 = User.create(fullname: 'Ryan', username: 'user3', email: 'ryan@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user4 = User.create(fullname: 'Emily', username: 'user4', email: 'emily@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user5 = User.create(fullname: 'Josh', username: 'user5', email: 'josh@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user6 = User.create(fullname: 'Ruby', username: 'user6', email: 'ruby@gmail.com', password: 'pw')
user7 = User.create(fullname: 'Aiyana', username: 'user7', email: 'aiyana@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')
user8 = User.create(fullname: 'Sydney', username: 'user8', email: 'sydney@gmail.com', password: 'pw', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ajKbrYD-GGBhrcRsf0gGbBaow3_mE_Xm3gwlcuj4mH6EPBns')


event0 = Event.create(host_id: user0.id, title: 'Guitar player', event_type: 'Street artist', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'none', price: 'Donations', open_to: 'All public', location: '-77.1 38.6', active: true, closing_time: "14/09/2018 12:09")
event1 = Event.create(host_id: user1.id, title: 'The money maker', event_type: 'Business', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'formal', price: '10', open_to: '18+', location: '-78.0332415 50.8982477', active: true, closing_time: "8/09/2018 12:09")
event2 = Event.create(host_id: user2.id, title: 'The best Magician', event_type: 'Street artist', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'none', price: 'free', open_to: 'Artists', location: '-60.0332415 43.8982477', active: true, closing_time: "16/09/2018 12:00")
event3 = Event.create(host_id: user3.id, title: 'What a nice title', event_type: 'Street artist', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'none', price: '10', open_to: 'Programmers', location: '-68.0332415 46.4321', active: true, closing_time: "17/09/2018 11:00")
event4 = Event.create(host_id: user4.id, title: 'Help me pass', event_type: 'Study group', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'flipflops', price: '15000', open_to: 'Programmers', location: '-73.0332415 36.1234', active: true, closing_time: "18/09/2018 10:00")
event5 = Event.create(host_id: user5.id, title: 'Lets kill maduro', event_type: 'Protest', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'naked', price: 'free', open_to: 'All public', location: '-59.0332415 30.9', active: true, closing_time: "16/09/2018 05:00")
event6 = Event.create(host_id: user6.id, title: 'My birthday party', event_type: 'Party', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'White', price: 'BYOB', open_to: 'Private', location: '-76.0332415 38.5', active: true, closing_time: "21/09/2018 03:09")
event7 = Event.create(host_id: user7.id, title: 'Emma Goodbye party', event_type: 'Party', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'none', price: 'BYOB', open_to: 'Just friends', location: '-80.0332415 34.8982477', active: true, closing_time: "24/09/2018 07:09")
event8 = Event.create(host_id: user8.id, title: 'Super title', event_type: 'Dinner', description: 'qwea ert sdvyd jgnfb  wcedvnt qw thre', dress_code: 'none', price: 'free', open_to: 'Private', location: '-77.3 40.8982477', active: true, closing_time: "25/09/2018 08:00")

review0 = Review.create(event_id: event0.id, guest_id: user0.id, comment: 'The lasagna was amazing. I would recommend this over the pesto pasta. The food was took a while but it was worth the wait.', date: "14/09/2018 12:00")
review1 = Review.create(event_id: event0.id, guest_id: user1.id, comment: 'I thought the pasta was the best. I wish they made the food faster.', date: "14/09/2018 12:01")
review2 = Review.create(event_id: event1.id, guest_id: user2.id, comment: 'This definitely the best food truck to go to for italian food. The service is also amazing.', date: "11/09/2018 10:00")
review3 = Review.create(event_id: event1.id, guest_id: user3.id, comment: 'Mama makes the best.', date: "14/14/2018 12:09")
review4 = Review.create(event_id: event2.id, guest_id: user4.id, comment: 'The tacos are really tasty. A lot of unique and intersting flavors happening here.', date: "12/07/2018 13:09")
review5 = Review.create(event_id: event2.id, guest_id: user5.id, comment: 'The food is out of this world amazing!', date: "12/07/2018 13:09")
review6 = Review.create(event_id: event3.id, guest_id: user6.id, comment: 'I LOVE this truck! I cry with happiness everytime I bit into a bahn min sandwich.', date: "12/07/2018 13:09")
review7 = Review.create(event_id: event3.id, guest_id: user7.id, comment: 'I have no idea what they put into this food to make it so delicious. I mean its ridiculous.', date: "12/07/2018 13:09")
review8 = Review.create(event_id: event4.id, guest_id: user8.id, comment: 'The chicken here is hit or miss. It can either be really dry or nice and juicy. When its good, its good.', date: "12/07/2018 13:09")
review9 = Review.create(event_id: event4.id, guest_id: user0.id, comment: 'I do like the chicken here, but its not the best thing on the menu. I recommend ordering a side of plantains.', date: "12/07/2018 13:09")
review10 = Review.create(event_id: event5.id, guest_id: user1.id, comment: 'This place has great food. Its really the best.', date: "12/07/2018 13:09")
review11 = Review.create(event_id: event5.id, guest_id: user2.id, comment: 'Probably the best place for Venezuelan food outside of Venezuela.', date: "12/07/2018 13:09")
review12 = Review.create(event_id: event6.id, guest_id: user3.id, comment: 'The food is OK. Honestly I would eat anywhere else.', date: "14/09/2018 12:09")
review13 = Review.create(event_id: event6.id, guest_id: user4.id, comment: 'The service was pretty slow but the food is still pretty good.', date: "14/09/2018 12:01")
review14 = Review.create(event_id: event7.id, guest_id: user5.id, comment: 'Great food. Great people.', date: "11/09/2018 10:00")
review15 = Review.create(event_id: event7.id, guest_id: user6.id, comment: 'I really love the food here.', date: "14/14/2018 12:09")
review16 = Review.create(event_id: event8.id, guest_id: user7.id, comment: 'The feel like the food was good but not great.', date: "12/07/2018 13:09")
review17 = Review.create(event_id: event8.id, guest_id: user8.id, comment: 'I think this may have been the best experience of my life.', date: "12/07/2018 13:09")
