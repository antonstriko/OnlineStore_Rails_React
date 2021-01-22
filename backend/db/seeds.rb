# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(email: "euberman@gmail.com", password: "1234", firstname: "Eric", lastname: "Uberman", isStoreManager:true)


# require 'uri'
# require 'net/http'
# require 'openssl'
all_electronics = []
all_bags = []

url1 = URI("https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=1&sortBy=bestselling")
http1 = Net::HTTP.new(url1.host, url1.port)
http1.use_ssl = true
http1.verify_mode = OpenSSL::SSL::VERIFY_NONE
request1 = Net::HTTP::Get.new(url1)
request1["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
request1["x-rapidapi-host"] = 'target1.p.rapidapi.com'
response1 = http1.request(request1)
res1 = JSON.parse response1.read_body
res1["products"].each{|p| all_electronics.push(p)}

url2 = URI("https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=2&sortBy=bestselling")
http2 = Net::HTTP.new(url2.host, url2.port)
http2.use_ssl = true
http2.verify_mode = OpenSSL::SSL::VERIFY_NONE
request2 = Net::HTTP::Get.new(url2)
request2["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
request2["x-rapidapi-host"] = 'target1.p.rapidapi.com'
response2 = http2.request(request2)
res2 = JSON.parse response2.read_body
res2["products"].each{|p| all_electronics.push(p)}

url3 = URI("https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=3&sortBy=bestselling")
http3 = Net::HTTP.new(url3.host, url3.port)
http3.use_ssl = true
http3.verify_mode = OpenSSL::SSL::VERIFY_NONE
request3 = Net::HTTP::Get.new(url3)
request3["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
request3["x-rapidapi-host"] = 'target1.p.rapidapi.com'
response3 = http3.request(request3)
res3 = JSON.parse response3.read_body
res3["products"].each{|p| all_electronics.push(p)}

url4 = URI("https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=4&sortBy=bestselling")
http4 = Net::HTTP.new(url4.host, url4.port)
http4.use_ssl = true
http4.verify_mode = OpenSSL::SSL::VERIFY_NONE
request4 = Net::HTTP::Get.new(url4)
request4["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
request4["x-rapidapi-host"] = 'target1.p.rapidapi.com'
response4 = http4.request(request4)
res4 = JSON.parse response4.read_body
res4["products"].each{|p| all_electronics.push(p)}

url5 = URI("https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=5&sortBy=bestselling")
http5 = Net::HTTP.new(url5.host, url5.port)
http5.use_ssl = true
http5.verify_mode = OpenSSL::SSL::VERIFY_NONE
request5 = Net::HTTP::Get.new(url5)
request5["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
request5["x-rapidapi-host"] = 'target1.p.rapidapi.com'
response5 = http5.request(request5)
res5 = JSON.parse response5.read_body
res5["products"].each{|p| all_electronics.push(p)}

url6 = URI("https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=6&sortBy=bestselling")
http6 = Net::HTTP.new(url6.host, url6.port)
http6.use_ssl = true
http6.verify_mode = OpenSSL::SSL::VERIFY_NONE
request6 = Net::HTTP::Get.new(url6)
request6["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
request6["x-rapidapi-host"] = 'target1.p.rapidapi.com'
response6 = http6.request(request6)
res6 = JSON.parse response6.read_body
res6["products"].each{|p| all_electronics.push(p)}

all_electronics.each do |product|
  same_id = Product.all.select{|p| p[:product_id] == product["productId"]}
  if same_id.length == 0
      prod = Product.new(brand: product["brand"][0], product_id: product["productId"], department: product["department"], title: product["title"], description: product["description"], image_url: product["imageUrl"], customer_rating: product["customerRating"], num_reviews: product["numReviews"], two_day_shipping_eligible: product["twoDayShippingEligible"], store_id: product["sellerId"], store_name: product["sellerName"])
      
      if product["inventory"]["availableOnline"]
          prod[:in_stock] = product["inventory"]["availableOnline"]
      else
          prod[:in_stock] = false
      end

      if product["primaryOffer"]["offerPrice"]
          prod[:price] = product["primaryOffer"]["offerPrice"]
      else
          prng = Random.new
          prod[:price] = (prng.rand(5.0..30.0) * 100).round / 100.0
      end
      prod.save
  end
end

## ----------------------------------------------------------
asos_url = URI("https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=9265&limit=100&store=US&brand=2986%2C15177%2C3312&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US")

asos_http = Net::HTTP.new(asos_url.host, asos_url.port)
asos_http.use_ssl = true
asos_http.verify_mode = OpenSSL::SSL::VERIFY_NONE

asos_request = Net::HTTP::Get.new(asos_url)
asos_request["x-rapidapi-key"] = '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46'
asos_request["x-rapidapi-host"] = 'asos2.p.rapidapi.com'

asos_response = asos_http.request(asos_request)
res6 = JSON.parse asos_response.read_body
res6["products"].each{|b| all_bags.push(b)}


# products_power_tools.each do |product|
#     Product.create(
#     brand: product[:brand],
#     product_id: product[:product_id],
#     department: product[:department],
#     title: product[:title],
#     #description: product[:brand],
#     #image_url: product[:brand],
#     rating: product[:rating],
#     num_reviews: product[:reviews],
#     in_stock: product[:in_stock],
#     #stock: product[:stock],
#     price: product[:price]
#     )
# end
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://target1.p.rapidapi.com/products/list',
  params: {
    storeId: '911',
    endecaId: '5xtg6',
    pageSize: '20',
    pageNumber: '1',
    sortBy: 'bestselling'
  },
  headers: {
    'x-rapidapi-key': '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46',
    'x-rapidapi-host': 'target1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    offset: '0',
    categoryId: '9265',
    limit: '100',
    store: 'US',
    brand: '2986,15177,3312',
    country: 'US',
    currency: 'USD',
    sort: 'freshness',
    lang: 'en-US',
    sizeSchema: 'US'
  },
  headers: {
    'x-rapidapi-key': '5a22496735mshf51f4c817a7b0f2p14c354jsnabf34077db46',
    'x-rapidapi-host': 'asos2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});