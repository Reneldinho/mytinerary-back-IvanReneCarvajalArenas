import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js";

let cities = [
    {
        "cityName": "Madrid",
        "cityCountry": "Spain",
        "cityPhoto": "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/46AXQFD5Z5AEHHLNME22AATVZA.JPG?auth=cfaa6feb44404d06fc8bcba674ba2c00eb75ad8218960f6fbcd24b90c9504443&height=553&width=830&smart=true&quality=80,
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
        "cityPhoto": "https://images.unsplash.com/photo-1536031696538-924fe11c7037?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "cityPhoto": "https://images.unsplash.com/photo-1679231926885-0287bbe32008?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "cityPhoto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Ffoto%2F2009068-vista-aerea-de-la-ciudad-de-tokio-japon&psig=AOvVaw1UnrsROhfMLgQWQQ7LNl0p&ust=1742569139137000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjfxJn2mIwDFQAAAAAdAAAAABAE",
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
        "cityPhoto": "https://fotografias.lasexta.com/clipping/cmsimages02/2018/02/02/0A8C13C7-BCBF-451C-887D-E6EB10997DE2/97.jpg?crop=1300,731,x0,y68&width=1600&height=900&optimize=high&format=webply",
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
        "cityPhoto": "https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "cityPhoto": "https://img.freepik.com/fotos-premium/vista-aerea-obelisco-buenos-aires-dron_686512-17.jpg?w=1060",
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
        "cityPhoto": "https://upload.wikimedia.org/wikipedia/commons/1/16/Bucaramanga_desde_mirador.jpg",
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
        "cityPhoto": "https://roma-bella.com/wp-content/uploads/2017/01/Roma-veduta-aerea.jpg",
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
        "cityPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/16-07-04-Abflug-Berlin-DSC_0122.jpg/1280px-16-07-04-Abflug-Berlin-DSC_0122.jpg",
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
        "cityPhoto": "https://www.visitsoutheastasia.travel/wp-content/uploads/2019/10/Thailand-Bangkok.jpg",
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
        "cityPhoto": "https://get.pxhere.com/photo/horizon-skyline-city-skyscraper-cityscape-panorama-downtown-tower-sydney-tower-block-australia-skyscrapers-metropolis-neighbourhood-bird's-eye-view-aerial-photography-urban-area-residential-area-geographical-feature-human-settlement-atmosphere-of-earth-metropolitan-area-676422.jpg",
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
        "cityPhoto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Ffoto%2F7426956-rio-de-janeiro-rio-de-janeiro-brasil-alrededor-de-octubre-2019-vista-aerea-de-cristo-redentor-cristo-redentor-estatua-sobre-rio-de-janeiro-ciudad-brasil&psig=AOvVaw0gG-0N5EliMKQqjxLeMgg-&ust=1742572054852000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjEh_6AmYwDFQAAAAAdAAAAABAx",
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
        "cityPhoto": "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/04/Que-ver-en-Ciudad-del-Cabo-10-Lugares-que-no-te-puedes-perder.jpg",
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
        "cityPhoto": "https://img.freepik.com/fotos-premium/barco-turistico-cuerno-oro-estambul-noche-turquia_483040-1324.jpg?w=826",
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