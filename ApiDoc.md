# Recipe List Documentation

Recipe List is an application to store recipes and search for the recipe we want. This app has : 
* Zomato Api
* Edamam Healty Api
* The MealDB Api
* Google Sign-in
* JSON formatted response

# URL
```
Client URL : http://localhost:8080
Server URL : http://localhost:3000
```

## ENDPOINT
### POST /login

_Request Params_
```
Not needed
```
_Request Header_
```
Not needed
```

_Request Body_
```
{
  "email": "<your email>",
  "password": "<your password>"
}
```

_Response (200)_
```
{
  "access_token": "<your access token>"
}
```

_Response (401)_
```
{
  "message": "InvalidEmail/Password"
}
```
---
### POST /register

> Create new user

_Request Params_
```
Not needed
```
_Request Header_
```
Not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "email": "<posted email>"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal server error"
}
```
_Response (400)_
```
{
  "message": "Password is required!, Password must be more than 6 character"
}
```
_Response (400)_
```
{
  "message": "Email is required!, Email must be a format sample@mail.com"
}
```
---
### GET /recipes

> Get all recipes

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200)_
```
[
  {
    "id": "<recipes id>",
    "name": "<recipes name>",
    "type": "<recipes type>",
    "ingredients": "<recipes ingredients>",
    "steps": "<recipes steps>",
    "portion": "<recipes portion>",
    "cooking_time": "<recipes cooking_time>",
    "UserId": "<User id>"
  }
]
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal server error"
}
```
_Response (400)_
```
{
  "message": "Invalid Email / Password"
}
```
---
### POST /recipes

> Create new recipes

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "name": "<name to get insert into>",
  "type": "<type to get insert into>"
  "ingredients": "<ingredients to get insert into>",
  "steps": "<steps to get insert into>",
  "portion": "<portion to get insert into>",
  "cooking_time": "<cooking_time to get insert into>"
}
```
_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "type": "<posted type>",
  "ingredients": "<posted ingredients>",
  "steps": "<posted steps>",
  "portion": "<posted portion>",
  "cooking_time": "<posted cooking_time>",
  "UserId": "<User id>"
}
```
_Response (400 - Bad Request)_
```
{
  "msg": "Name is required! Type is required! Ingredients is required! Steps is required! portion is required! Cooking Time is required!"
}
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
---
### PUT /recipes/:id

> Update recipes with specific id

_Request Params_
```
Recipe's ID
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "id": "<recipes id>",
  "name": "<recipes previous name>",
  "type": "<recipes previous type>"
  "ingredients": "<recipes previous ingredients>",
  "steps": "<recipes previous steps>",
  "portion": "<recipes previous portion>",
  "cooking_time": "<recipes previous cooking_time>"
}
```
_Response (200)_
```
{
  "id": <recipes id>,
  "name": "<recipes updated name>",
  "type": "<recipes updated type>",
  "ingredients": "<recipes updated ingredients>",
  "steps": "<recipes updated steps>",
  "portion": "<recipes updated portion>"
  "cooking_time": "<recipes updated cooking_time>",
  "UserId": "<User id>"
}
```
_Response (400 - Bad Request)_
```
{
  "msg": "Name is required! Type is required! Ingredients is required! Steps is required! portion is required! Cooking Time is required!"
}
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
_Response (404 - Not Found)_
```
{
  "msg": "Error not found!"
}
```
---
### GET /recipes/:id

> Get recipes with specific id

_Request Params_
```
recipe's ID
```
_Request Header_
```
{
  "access_token": "<your account access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200)_
```
[
  {
    "id": "<recipes id by request>",
    "name": "<recipes name>",
    "type": "<recipes type>",
    "ingredients": "<recipes ingredients>",
    "steps": "<recipes steps>",
    "portion": "<recipes portion>",
    "cooking_time": "<recipes steps>",
    "UserId": "<User id>"
  }
]
```
_Response (404 - Not Found)_
```
{
  "msg": "Error not found!"
}
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
---
### DELETE /recipes/:id

> Delete recipes with specific id

_Request Params_
```
Todo's ID
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200)_
```
{
  "The recipe has been successfully deleted."
}
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
_Response (404 - Not Found)_
```
{
  "msg": "Error not found!"
}
```
---
### GET /restaurants

> Get all restaurant in jakarta

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your account access token>"
},
{
  "user-key": "<Key user API Zomato>"
}
```
_Request Body_
```
Not needed
```
_Response (200)_
```
{
  "results_found": 60,
  "results_start": 0,
  "results_shown": 20,
  "restaurants": [
    {
      "restaurant": {
          "R": {
            "res_id": 18460102,
            "is_grocery_store": false,
            "has_menu_status": {
              "delivery": -1,
              "takeaway": -1
            }
          },
          "apikey": "c00658789a3d3af86fc738ec0e820c8f",
          "id": "18460102",
          "name": "HONU Poké & Matcha Bar",
          "url": "https://www.zomato.com/jakarta/honu-poké-matcha-bar-kemang?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "location": {
            "address": "Jl. Kemang Selatan Raya No. 125, Kemang, Jakarta",
            "locality": "Kemang",
            "city": "Jakarta",
            "city_id": 74,
            "latitude": "-6.2729260000",
            "longitude": "106.8157320000",
            "zipcode": "",
            "country_id": 94,
            "locality_verbose": "Kemang, Jakarta"
          },
          "switch_to_order_menu": 0,
          "cuisines": "Japanese, Tea, Beverages, Healthy Food",
          "timings": "10h – 21h 30m (Mon-Sun)",
          "average_cost_for_two": 220000,
          "price_range": 3,
          "currency": "IDR",
          "highlights": [
            "Credit Card",
            "Debit Card",
            "Delivery",
            "Takeaway Available",
            "Cash",
            "Dinner",
            "Lunch",
            "No Alcohol Available",
            "Air Conditioned",
            "Wifi",
            "Smoking Area",
            "Indoor Seating",
            "Outdoor Seating",
            "Table booking recommended"
          ],
          "offers": [],
          "opentable_support": 0,
          "is_zomato_book_res": 0,
          "mezzo_provider": "OTHER",
          "is_book_form_web_view": 0,
          "book_form_web_view_url": "",
          "book_again_url": "",
          "thumb": "https://b.zmtcdn.com/data/pictures/chains/2/18460102/3b6f31aac51e69e0f2e2d061ab2c6bfc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          "user_rating": {
            "aggregate_rating": "4.8",
            "rating_text": "Excellent",
            "rating_color": "3F7E00",
            "rating_obj": {
              "title": {
                "text": "4.8"
              },
              "bg_color": {
                "type": "lime",
                "tint": "800"
              }
            },
            "votes": 1065
          },
          "all_reviews_count": 528,
          "photos_url": "https://www.zomato.com/jakarta/honu-poké-matcha-bar-kemang/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
          "photo_count": 860,
          "menu_url": "https://www.zomato.com/jakarta/honu-poké-matcha-bar-kemang/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
          "featured_image": "https://b.zmtcdn.com/data/pictures/chains/2/18460102/3b6f31aac51e69e0f2e2d061ab2c6bfc.jpg",
          "has_online_delivery": 0,
          "is_delivering_now": 0,
          "store_type": "",
          "include_bogo_offers": true,
          "deeplink": "zomato://restaurant/18460102",
          "is_table_reservation_supported": 0,
          "has_table_booking": 0,
          "events_url": "https://www.zomato.com/jakarta/honu-poké-matcha-bar-kemang/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "phone_numbers": "021 71793580",
          "all_reviews": {
              "reviews": [
                {
                  "review": []
                },
                {
                  "review": []
                },
                {
                  "review": []
                },
                {
                  "review": []
                },
                {
                  "review": []
                }
              ]
          },
          "establishment": [
            "Casual Dining"
          ],
          "establishment_types": []
        }
      }
    }
  }
}
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
---
### GET /mealDB

> Get random meals

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your account access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200)_
```
{
  "meals": [
    {
      "idMeal": "52898",
      "strMeal": "Chelsea Buns",
      "strDrinkAlternate": null,
      "strCategory": "Dessert",
      "strArea": "British",
      "strInstructions": "Sift the flour and salt into a large bowl. Make a well in the middle and add the yeast.\r\nMeanwhile, warm the milk and butter in a saucepan until the butter melts and the mixture is lukewarm.\r\nAdd the milk mixture and egg to the flour mixture and stir until the contents of the bowl come together as a soft dough. (You may need to add a little extra flour.)\r\nTip the dough onto a generously floured work surface. Knead for five minutes, adding more flour if necessary, until the dough is smooth and elastic and no longer feels sticky.\r\nLightly oil a bowl with a little of the vegetable oil. Place the dough into the bowl and turn until it is covered in the oil. Cover the bowl with cling film and set aside in a warm place for one hour, or until the dough has doubled in size.\r\nLightly grease a baking tray.\r\nFor the filling, knock the dough back to its original size and turn out onto a lightly floured work surface. Roll the dough out into a rectangle 0.5cm/¼in thick. Brush all over with the melted butter, then sprinkle over the brown sugar, cinnamon and dried fruit.\r\nRoll the dough up into a tight cylinder , cut ten 4cm/1½in slice and place them onto a lightly greased baking sheet, leaving a little space between each slice. Cover with a tea towel and set aside to rise for 30 minutes.\r\nPreheat oven to 190C/375F/Gas 5.\r\nBake the buns in the oven for 20-25 minutes, or until risen and golden-brown.\r\nMeanwhile, for the glaze, heat the milk and sugar in a saucepan until boiling. Reduce the heat and simmer for 2-3 minutes.\r\nRemove the buns from the oven and brush with the glaze, then set aside to cool on a wire rack.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
      "strTags": "Bun,Baking,Treat",
      "strYoutube": "https://www.youtube.com/watch?v=i_zemP3yBKw",
      "strIngredient1": "White Flour",
      "strIngredient2": "Salt",
      "strIngredient3": "Yeast",
      "strIngredient4": "Milk",
      "strIngredient5": "Butter",
      "strIngredient6": "Eggs",
      "strIngredient7": "Vegetable Oil",
      "strIngredient8": "Butter",
      "strIngredient9": "Brown Sugar",
      "strIngredient10": "Cinnamon",
      "strIngredient11": "Dried Fruit",
      "strIngredient12": "Milk",
      "strIngredient13": "Caster Sugar",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "500g",
      "strMeasure2": "1 tsp ",
      "strMeasure3": "7g",
      "strMeasure4": "300ml ",
      "strMeasure5": "40g",
      "strMeasure6": "1",
      "strMeasure7": "Dash",
      "strMeasure8": "25g",
      "strMeasure9": "75g",
      "strMeasure10": "2 tsp",
      "strMeasure11": "150g",
      "strMeasure12": "2 tbs",
      "strMeasure13": "2 tbs",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "https://www.bbc.co.uk/food/recipes/chelsea_buns_95015",
      "dateModified": null
    }
  ]
}
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
---
### POST /edamam

> Post all recipe edamam

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your account access token>"
}
```
_Request Body_
```
{
  "food": "<food name>"
}
```
_Response (200)_
```
{
"q": "chiken",
"from": 0,
"to": 10,
"more": true,
"count": 8,
"hits": [
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c6fc7649f1a74676dbfa22d5aebc54c0",
      "label": "Roast Beef Tenderloin With Mushroom Madeira Sauce",
      "image": "https://www.edamam.com/web-img/982/982585855b1cb8fabd0126c5bb0f5fe8.jpg",
      "source": "Wolfgang Puck",
      "url": "http://www.wolfgangpuck.com/recipes/view/76644/Roast-Beef-Tenderloin-with-Mushroom-Madeira-Sauce",
      "shareAs": "http://www.edamam.com/recipe/roast-beef-tenderloin-with-mushroom-madeira-sauce-c6fc7649f1a74676dbfa22d5aebc54c0/chiken",
      "yield": 16,
      "dietLabels": [
        "Low-Carb"
      ],
      "healthLabels": [
        "Sugar-Conscious",
        "Peanut-Free",
        "Tree-Nut-Free"
      ],
      "cautions": [
        "Gluten",
        "Wheat",
        "Sulfites",
        "FODMAP"
      ],
      "ingredientLines": [
        "1 (4-pound) whole beef tenderloin roast, preferably the wide end, cut, trimmed, and tied",
        "Kosher salt and freshly ground black pepper",
        "2 tablespoons olive oil",
        "1 large onion, peeled, cut into 1-inch chunks",
        "2 celery stalks, cut into 1-inch chunks",
        "2 medium carrots, peeled, cut into 1-inch chunks",
        "2 to 4 tablespoons butter (or to taste)",
        "1/2 pound button mushrooms, or a mixture of button mushrooms and shiitakes, quartered or cut into eighths if large",
        "2 shallots, minced",
        "2 garlic cloves, minced",
        "1 cup Madeira",
        "2 cups homemade chiken stock or good-quality canned chicken broth",
        "1/2 cup heavy cream",
        "2 teaspoons Dijon mustard",
        "2 teaspoons bottled barbecue sauce",
        "2 tablespoons chopped flat-leaf parsley or chives for garnish"
      ],
      "ingredients": [
          {
            "text": "1 (4-pound) whole beef tenderloin roast, preferably the wide end, cut, trimmed, and tied",
            "weight": 1814.36948,
            "image": "https://www.edamam.com/food-img/561/56175911b1c3034a7d9e17a66e45c465.jpg"
          },
          {
            "text": "Kosher salt and freshly ground black pepper",
            "weight": 20.01902732333696,
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Kosher salt and freshly ground black pepper",
            "weight": 10.00951366166848,
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "2 tablespoons olive oil",
            "weight": 27,
            "image": null
          },
          {
            "text": "1 large onion, peeled, cut into 1-inch chunks",
            "weight": 150,
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "2 celery stalks, cut into 1-inch chunks",
            "weight": 80,
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "2 medium carrots, peeled, cut into 1-inch chunks",
            "weight": 122,
            "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
          },
          {
            "text": "2 to 4 tablespoons butter (or to taste)",
            "weight": 42.599999999999994,
            "image": null
          },
          {
            "text": "1/2 pound button mushrooms, or a mixture of button mushrooms and shiitakes, quartered or cut into eighths if large",
            "weight": 226.796185,
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 shallots, minced",
            "weight": 118.22222222222223,
            "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
          },
          {
            "text": "2 garlic cloves, minced",
            "weight": 6,
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 cup Madeira",
            "weight": 103,
            "image": "https://www.edamam.com/food-img/ea0/ea026d474cb3f9c0b3302eeaa5232151.jpg"
          },
          {
            "text": "2 cups homemade chiken stock or good-quality canned chicken broth",
            "weight": 498,
            "image": "https://www.edamam.com/food-img/06c/06c361adc1f98c1d97c44d7a5423897d.jpg"
          },
          {
            "text": "1/2 cup heavy cream",
            "weight": 119,
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 teaspoons Dijon mustard",
            "weight": 10,
            "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
          },
          {
            "text": "2 teaspoons bottled barbecue sauce",
            "weight": 11.916666667271093,
            "image": "https://www.edamam.com/food-img/7e3/7e303aa2cbb51e4bd70f71bf5cb4a754.jpg"
          },
          {
            "text": "2 tablespoons chopped flat-leaf parsley or chives for garnish",
            "weight": 7.6,
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          }
        ],
        "calories": 4649.803346462494,
        "totalWeight": 3357.993763481744,
        "totalTime": 0,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 4649.803346462494,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 243.45952570807646,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 107.2476017779285,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 8.654080172208,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.695523549038,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 16.89204806013206,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 89.27323795121674,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 16.713529917518677,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 44.751674239524476,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 515.7556963166945,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1773.409659568,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 7782.251533808876,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 585.4972323929526,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 459.31119664017075,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8747.363817628311,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 63.84361131489613,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 78.6644006926077,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 5107.534169612225,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1889.2079177260503,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 47.79399766278141,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.8614519763927353,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.690561084275776,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 112.14156643982294,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 13.531626770294576,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 305.3766626253846,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 305.3766626253846,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 73.94257308867999,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.7218181552000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 12.77125298136841,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 234.35546420513998,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2447.890845724682,
            "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 232.49016732312472,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 374.5531164739638,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 536.2380088896425,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 29.757745983738914,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 66.85411967007471,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 1031.511392633389,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 591.1365531893333,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 324.26048057536985,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 58.549723239295254,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 109.35980872385018,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 186.11412377932578,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 354.6867295272007,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 715.1309153873427,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 729.6477385160321,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 209.91199085845005,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 53.10444184753489,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 155.12099803272795,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 668.5046987904443,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 700.8847902488934,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1040.8943669457367,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 76.34416565634615,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3080.9405453616664,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 24.81212103466667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 85.14168654245606,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 195.29622017095,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 243.45952570807646,
            "hasRDI": true,
            "daily": 374.5531164739638,
            "unit": "g",
            "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 107.2476017779285,
                  "hasRDI": true,
                  "daily": 536.2380088896425,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 8.654080172208,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 100.695523549038,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 16.89204806013206,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
              ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 89.27323795121674,
            "hasRDI": true,
            "daily": 29.757745983738914,
            "unit": "g",
            "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 72.55970803369806,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 16.713529917518677,
                  "hasRDI": true,
                  "daily": 66.85411967007471,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 44.751674239524476,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
                }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 515.7556963166945,
            "hasRDI": true,
            "daily": 1031.511392633389,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 1773.409659568,
            "hasRDI": true,
            "daily": 591.1365531893333,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 7782.251533808876,
            "hasRDI": true,
            "daily": 324.26048057536985,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 585.4972323929526,
            "hasRDI": true,
            "daily": 58.549723239295254,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 459.31119664017075,
            "hasRDI": true,
            "daily": 109.35980872385018,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 8747.363817628311,
            "hasRDI": true,
            "daily": 186.11412377932578,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 63.84361131489613,
            "hasRDI": true,
            "daily": 354.6867295272007,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 78.6644006926077,
            "hasRDI": true,
            "daily": 715.1309153873427,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 5107.534169612225,
            "hasRDI": true,
            "daily": 729.6477385160321,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1889.2079177260503,
            "hasRDI": true,
            "daily": 209.91199085845005,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 47.79399766278141,
            "hasRDI": true,
            "daily": 53.10444184753489,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.8614519763927353,
            "hasRDI": true,
            "daily": 155.12099803272795,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 8.690561084275776,
            "hasRDI": true,
            "daily": 668.5046987904443,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 112.14156643982294,
            "hasRDI": true,
            "daily": 700.8847902488934,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 13.531626770294576,
            "hasRDI": true,
            "daily": 1040.8943669457367,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 305.3766626253846,
            "hasRDI": true,
            "daily": 76.34416565634615,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 305.3766626253846,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 73.94257308867999,
            "hasRDI": true,
            "daily": 3080.9405453616664,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.7218181552000003,
            "hasRDI": true,
            "daily": 24.81212103466667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 12.77125298136841,
            "hasRDI": true,
            "daily": 85.14168654245606,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 234.35546420513998,
            "hasRDI": true,
            "daily": 195.29622017095,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 2447.890845724682,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
```
_Response (500 - Bad Request)_
```
{
  "msg": "Internal server error"
}
```
---