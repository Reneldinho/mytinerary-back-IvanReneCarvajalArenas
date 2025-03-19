import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js";

let cities = [
    {
        "cityName": "Madrid",
        "cityCountry": "Spain",
        "cityPhoto": "https://example.com/madrid.jpg",
        "cityDescription": "The vibrant capital of Spain, known for its art, culture, and lively atmosphere.",
        "localCurrency": "EUR",
        "importantRestaurants": "DiverXO, Casa Lucio, Sobrino de Botín",
        "importantAttractions": "Plaza Mayor, Prado Museum, Royal Palace of Madrid",
        "mainParks": "Retiro Park, Casa de Campo",
        "notableTouristSities": "Gran Vía, Puerta del Sol",
        "importanHotels": "Hotel Ritz Madrid, Palacio de los Duques Gran Meliá"
    },
    {
        "cityName": "New York",
        "cityCountry": "USA",
        "cityPhoto": "https://example.com/newyork.jpg",
        "cityDescription": "A bustling metropolis known for its iconic skyline and vibrant culture.",
        "localCurrency": "USD",
        "importantRestaurants": "Le Bernardin, Katz's Delicatessen, Gramercy Tavern",
        "importantAttractions": "Statue of Liberty, Times Square, Empire State Building",
        "mainParks": "Central Park, Bryant Park",
        "notableTouristSities": "Brooklyn Bridge, Fifth Avenue",
        "importanHotels": "The Plaza, Waldorf Astoria"
    },
    {
        "cityName": "Paris",
        "cityCountry": "France",
        "cityPhoto": "https://example.com/paris.jpg",
        "cityDescription": "The city of love, known for its art, fashion, and iconic landmarks.",
        "localCurrency": "EUR",
        "importantRestaurants": "Le Meurice, L'Ambroisie, Septime",
        "importantAttractions": "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
        "mainParks": "Jardin des Tuileries, Luxembourg Gardens",
        "notableTouristSities": "Champs-Élysées, Montmartre",
        "importanHotels": "Ritz Paris, Le Bristol"
    },
    {
        "cityName": "Tokyo",
        "cityCountry": "Japan",
        "cityPhoto": "https://example.com/tokyo.jpg",
        "cityDescription": "A futuristic city blending ancient culture with modern technology.",
        "localCurrency": "JPY",
        "importantRestaurants": "Sukiyabashi Jiro, Narisawa, Den",
        "importantAttractions": "Shibuya Crossing, Senso-ji Temple, Tokyo Tower",
        "mainParks": "Shinjuku Gyoen, Ueno Park",
        "notableTouristSities": "Akihabara, Tsukiji Market",
        "importanHotels": "The Peninsula Tokyo, Aman Tokyo"
    },
    {
        "cityName": "London",
        "cityCountry": "United Kingdom",
        "cityPhoto": "https://example.com/london.jpg",
        "cityDescription": "A historic city known for its landmarks, culture, and global influence.",
        "localCurrency": "GBP",
        "importantRestaurants": "The Ledbury, Dishoom, Sketch",
        "importantAttractions": "Big Ben, London Eye, Tower of London",
        "mainParks": "Hyde Park, Regent's Park",
        "notableTouristSities": "Buckingham Palace, Westminster Abbey",
        "importanHotels": "The Ritz London, Claridge's"
    },
    {
        "cityName": "Dubai",
        "cityCountry": "UAE",
        "cityPhoto": "https://example.com/dubai.jpg",
        "cityDescription": "A luxurious desert metropolis with futuristic architecture.",
        "localCurrency": "AED",
        "importantRestaurants": "Pierchic, Nobu Dubai, Zuma",
        "importantAttractions": "Burj Khalifa, Palm Jumeirah, Dubai Mall",
        "mainParks": "Zabeel Park, Dubai Miracle Garden",
        "notableTouristSities": "Burj Al Arab, Dubai Fountain",
        "importanHotels": "Atlantis The Palm, Burj Al Arab"
    },
    {
        "cityName": "Buenos Aires",
        "cityCountry": "Argentina",
        "cityPhoto": "https://example.com/buenosaires.jpg",
        "cityDescription": "The Paris of South America, known for its tango and vibrant nightlife.",
        "localCurrency": "ARS",
        "importantRestaurants": "Don Julio, La Cabrera, Tegui",
        "importantAttractions": "Casa Rosada, Recoleta Cemetery, Teatro Colón",
        "mainParks": "Bosques de Palermo, Parque Centenario",
        "notableTouristSities": "San Telmo Market, La Boca",
        "importanHotels": "Alvear Palace Hotel, Faena Hotel Buenos Aires"
    },
    {
        "cityName": "Bucaramanga",
        "cityCountry": "Colombia",
        "cityPhoto": "https://example.com/bucaramanga.jpg",
        "cityDescription": "The Beautiful City of Colombia, known for its parks and pleasant climate.",
        "localCurrency": "COP",
        "importantRestaurants": "El Tony, La Carreta, Mercagan",
        "importantAttractions": "Parque del Agua, Catedral de la Sagrada Familia",
        "mainParks": "Parque García Rovira, Parque San Pío",
        "notableTouristSities": "Cañón del Chicamocha, Girón",
        "importanHotels": "Hotel Chicamocha, Dann Carlton Bucaramanga"
    },
    {
        "cityName": "Rome",
        "cityCountry": "Italy",
        "cityPhoto": "https://example.com/rome.jpg",
        "cityDescription": "The Eternal City, home to ancient history and world-famous landmarks.",
        "localCurrency": "EUR",
        "importantRestaurants": "Roscioli, La Pergola, Trattoria Pennestri",
        "importantAttractions": "Colosseum, Vatican City, Pantheon",
        "mainParks": "Villa Borghese, Orange Garden",
        "notableTouristSities": "Trevi Fountain, Spanish Steps",
        "importanHotels": "Hotel de Russie, Hassler Roma"
    },
    {
        "cityName": "Berlin",
        "cityCountry": "Germany",
        "cityPhoto": "https://example.com/berlin.jpg",
        "cityDescription": "Germany's capital, known for its history, art scene, and vibrant nightlife.",
        "localCurrency": "EUR",
        "importantRestaurants": "Tim Raue, Nobelhart & Schmutzig, Cookies Cream",
        "importantAttractions": "Brandenburg Gate, Berlin Wall, Museum Island",
        "mainParks": "Tiergarten, Tempelhofer Feld",
        "notableTouristSities": "Checkpoint Charlie, East Side Gallery",
        "importanHotels": "Hotel Adlon Kempinski, The Ritz-Carlton Berlin"
    },
    {
        "cityName": "Bangkok",
        "cityCountry": "Thailand",
        "cityPhoto": "https://example.com/bangkok.jpg",
        "cityDescription": "A bustling city known for its street food, temples, and vibrant culture.",
        "localCurrency": "THB",
        "importantRestaurants": "Gaggan, Raan Jay Fai, Bo.lan",
        "importantAttractions": "Grand Palace, Wat Arun, Floating Markets",
        "mainParks": "Lumphini Park, Benjakitti Park",
        "notableTouristSities": "Khao San Road, Chinatown",
        "importanHotels": "Mandarin Oriental Bangkok, The Peninsula Bangkok"
    },
    {
        "cityName": "Sydney",
        "cityCountry": "Australia",
        "cityPhoto": "https://example.com/sydney.jpg",
        "cityDescription": "A stunning harbor city famous for its beaches and landmarks.",
        "localCurrency": "AUD",
        "importantRestaurants": "Quay, Bennelong, Tetsuya’s",
        "importantAttractions": "Sydney Opera House, Harbour Bridge, Bondi Beach",
        "mainParks": "Royal Botanic Garden, Hyde Park",
        "notableTouristSities": "Darling Harbour, The Rocks",
        "importanHotels": "Shangri-La Hotel Sydney, Park Hyatt Sydney"
    },
    {
        "cityName": "Rio de Janeiro",
        "cityCountry": "Brazil",
        "cityPhoto": "https://example.com/rio.jpg",
        "cityDescription": "A city of samba, beaches, and the iconic Christ the Redeemer.",
        "localCurrency": "BRL",
        "importantRestaurants": "Fogo de Chão, Aprazível, CT Boucherie",
        "importantAttractions": "Sugarloaf Mountain, Christ the Redeemer, Copacabana Beach",
        "mainParks": "Parque Lage, Jardim Botânico",
        "notableTouristSities": "Maracanã Stadium, Lapa Arches",
        "importanHotels": "Belmond Copacabana Palace, Hotel Fasano Rio de Janeiro"
    },
    {
        "cityName": "Cape Town",
        "cityCountry": "South Africa",
        "cityPhoto": "https://example.com/capetown.jpg",
        "cityDescription": "A city with stunning landscapes, beaches, and cultural diversity.",
        "localCurrency": "ZAR",
        "importantRestaurants": "La Colombe, Test Kitchen, Fyn",
        "importantAttractions": "Table Mountain, Robben Island, Cape Point",
        "mainParks": "Kirstenbosch National Botanical Garden, Green Point Park",
        "notableTouristSities": "Bo-Kaap, V&A Waterfront",
        "importanHotels": "One&Only Cape Town, Mount Nelson Hotel"
    },
    {
        "cityName": "Istanbul",
        "cityCountry": "Turkey",
        "cityPhoto": "https://example.com/istanbul.jpg",
        "cityDescription": "A historic city where East meets West, rich in culture and architecture.",
        "localCurrency": "TRY",
        "importantRestaurants": "Mikla, Nusr-Et, Karaköy Lokantası",
        "importantAttractions": "Hagia Sophia, Blue Mosque, Grand Bazaar",
        "mainParks": "Gülhane Park, Emirgan Park",
        "notableTouristSities": "Bosphorus Strait, Topkapi Palace",
        "importanHotels": "Çırağan Palace Kempinski, Four Seasons Istanbul"
    }
];


City.insertMany(cities)