User.create!(name:  "Saba Bashayir",
             email: "rrp@gmail.com",
             password:              "rrproject",
             password_confirmation: "rrproject",
             role:  "admin")

User.create!(name:  "Farah",
             email: "rrp1@gmail.com",
             password:              "rrproject1",
             password_confirmation: "rrproject1",
             role:  "pm")
User.create!(name:  "Usman",
             email: "rrp2@gmail.com",
             password:              "rrproject2",
             password_confirmation: "rrproject2",
             role:  "lc")
             

               
10.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@gmail.com"
  password = "password"
  role = "student"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
               
end