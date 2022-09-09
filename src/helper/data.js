// Importing Chevrolet pictures:
import chevroletTrax from '../assets/cars/chevrolet-trax.webp';
import chevroletBlazer from '../assets/cars/chevrolet-blazer.webp';
import chevroletSuburban from '../assets/cars/chevrolet-suburban.webp';
import chevroletJoySedan from '../assets/cars/chevrolet-joy-sedan.webp';
import chevroletOnix from '../assets/cars/chevrolet-onix.webp';

// Importing Kia pictures:
import kiaSeltos from '../assets/cars/kia-seltos.webp';
import kiaRio from '../assets/cars/kia-rio.webp';
import kiaForte from '../assets/cars/kia-forte.webp';


// Object to import all the cars DB:
export const data = [
	{
		"id": 1,
		"category": "SUV",
		"brand": "Chevrolet",
		"title": "Trax",
		"price": 21400,
		"description": "Go the extra mile for style with Trax Special Edition models. The all-black Trax Midnight Edition and the Sport Edition, which is available in a variety of colors, both exude cool confidence with mindful details.",
		"features": ["18-inch gloss Black aluminum wheels", "All-season blackwall tires", "Black front and rear skid plates", "Front and rear Black bowtie emblems", "Black beltline moldings and door handles"],
		"pictureUrl": chevroletTrax,
		"stock": 24
	},
	{
		"id": 2,
		"category": "SUV",
		"brand": "Chevrolet",
		"title": "Blazer",
		"price": 33400,
		"description": "You'll stand out on every street thanks to its strong stance and sleek body lines, effortless performance comes from a turbocharged 2.0L engine or an available 308-horsepower V6. Includes Chevy Safety Assist too.",
		"features": ["Sleek and muscular 5-passenger SUV.", "Four models: 2LT, 3LT, RS and Premier.", "4,500 lbs. of maximum towing capability.", "Up to 64.2 cubic feet of maximum cargo space with rear seats folded down.", "Availavle all-wheel drive."],
		"pictureUrl": chevroletBlazer,
		"stock": 15
	},
	{
		"id": 3,
		"category": "SUV",
		"brand": "Chevrolet",
		"title": "Suburban",
		"price": 54700,
		"description": "The luxurious interior is complemented by generous second- and third-row leg toom your passengers are sure to enjoy. There's also plenty of cargo volume, so you don't have to leave anyone or anything behind.",
		"features": ["Full-size SUV with multiple seating options.", "Six models: LS, LT, RST, Z71, Premier and High Country.", "Available as 2WD or 4WD (4WD standard on Z71).", "8,300 lbs. of maximum towing capability."],
		"pictureUrl": chevroletSuburban,
		"stock": 8
	},
	{
		"id": 4,
		"category": "Car",
		"brand": "Chevrolet",
		"title": "Joy Sedan",
		"price": 13350,
		"description": "No matter how far is the trip, inside Chevrolet Joy your family will be able to take advantage of the comfort of its ample interior space, the temperature and the ease of electriv windows.",
		"features": ["ABS brakes with EDB.", "Electronic Stability Control.", "1.4L 4I Motor", "Trunk capacity of 500L."],
		"pictureUrl": chevroletJoySedan,
		"stock": 32
	},
	{
		"id": 5,
		"category": "Car",
		"brand": "Chevrolet",
		"title": "Onix Turbo Sedan",
		"price": 14530,
		"description": "It comes with a host of features that make it the most innovative of its kind. From its polished exterior to its sporty grille and its 16 inches aluminium wheels, it was made to add more style to every route you decide to take.",
		"features": ["5 stars safety for Latin NCAP.", "115HP and 160Nm turbo motor.", "Electronic Stability Control.", "Trunk capacity of 470L."],
		"pictureUrl": chevroletOnix,
		"stock": 30
	},
	{
		"id": 6,
		"category": "SUV",
		"brand": "Kia",
		"title": "Seltos",
		"price": 22840,
		"description": "Get behind the wheel of the 2023 Seltos and experience a new breed of SUV. With a suite of confidence-inspiring tech, impressive cargo space, up to 35 MPG, and a bold desig, the 2023 Seltos is highly capable for wherever inspiration takes you.",
		"features": ["Turbocharged engine with 175hp/195 lb.-ft.", "Class-leading 10.25-inch touchscreen with navigation.", "Heated front seats.", "62.8 cu. ft. of cargo space."],
		"pictureUrl": kiaSeltos,
		"stock": 8
	},
	{
		"id": 7,
		"category": "Car",
		"brand": "Kia",
		"title": "Rio",
		"price": 16450,
		"description": "The convention-breaking Rio continues to evolve, packing new technology and smart style into a practical subcompact sedan, all at an affordable price. Take a seat in the Rio’s stylish and spacious cabin, with comfort that’s personalized to you.",
		"features": ["1.6L Inline 4-cylinder engine.", "Intelligent Variable Automatic Transmission.", "8-inch Touchscreen Display with Rear Camera.", "13.7 cu. ft. of cargo space."],
		"pictureUrl": kiaRio,
		"stock": 26
	},
	{
		"id": 8,
		"category": "Car",
		"brand": "Kia",
		"title": "Forte",
		"price": 19490,
		"description": "The 2023 Forte puts the power in your hands with a bold design, powerful engine options, available manual transmission, and a track-inspired driving experience. Designed with an unmistakable attitude, the Forte's bold look is complete with eye-catching upper and lower grills and a sleek front bumper.",
		"features": ["1.6L Turbocharged Engine w/ 201 hp.", "Multi-Link Rear Suspension.", "Sport-Tuned Dual Exhaust.", "Available 6-Speed Manual Transmission."],
		"pictureUrl": kiaForte,
		"stock": 27
	}
]