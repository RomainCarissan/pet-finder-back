const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const lostPetSchema = new Schema(
  {
    isLost: {
      type: Boolean,
      default: true,
    },

    /* creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    }, */

    petName: {
      type: String,
      required: [true, "petName is required."],
    },

    dateOfLoss: {
      type: Date,
      default: Date.now,
      required: [true, "dateOfLoss is required."],
    },

    petType: {
      type: String,
      enum: ["Dog", "Cat", "NAC", "Other"],
      required: [true, "petType is required."],
    },

    petSex: {
      type: String,
      enum: ["Male", "Female", "I don't know"],
      required: [true, "petSex is required."],
    },

    sterilized: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "sterilized is required."],
    },

    identified: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "identified is required."],
    },

    identification: {
      type: String,
    },

    breed: {
      type: String,
      enum: [
        //cat breeds
        "Please select your pet's breed...",
        "Abyssinian",
        "American Bobtail",
        "American Curl",
        "American Shorthair",
        "American Wirehair",
        "Turkish Angora",
        "Balinese",
        "Bengal",
        "Russian Blue",
        "Bombay",
        "British Shorthair",
        "Burmese",
        "Burmilla",
        "Ceylon",
        "Chartreux",
        "Chausie",
        "Cornish Rex",
        "Devon Rex",
        "Donskoy",
        "European Shorthair",
        "Exotic Shorthair",
        "German Rex",
        "Havana Brown",
        "Highland Lynx",
        "Japanese Bobtail",
        "Javanese",
        "Korat",
        "Kurilian Bobtail",
        "LaPerm",
        "Maine Coon",
        "Manx",
        "Egyptian Mau",
        "Munchkin",
        "Norwegian Forest",
        "Ocicat",
        "Oriental Shorthair",
        "Persian",
        "Peterbald",
        "Pixie-Bob",
        "Ragdoll",
        "Birman",
        "Savannah",
        "Scottish Fold",
        "Siamese",
        "Siberian",
        "Singapura",
        "Norwegian Forest Cat",
        "Snowshoe",
        "Somali",
        "Sphynx",
        "Thai",
        "Tiffany",
        "Tonkinese",
        "Toyger",
        "Turkish Van",

        // dog breeds
        "Affenpinscher",
        "Airedale Terrier",
        "American Akita",
        "Akita Inu",
        "American Staffordshire Terrier",
        "Danish Pointer",
        "Anglo-French Hound",
        "Ariegeois",
        "Barbet",
        "Czech Terrier",
        "Borzoi",
        "Basenji",
        "Artois Basset",
        "Bleu de Gascogne Basset",
        "Fawn Brittany Basset",
        "Basset Hound",
        "Westphalian Basset",
        "Alps Basset",
        "Beagle",
        "Beagle-Harrier",
        "Bearded Collie",
        "Beauceron",
        "Bedlington Terrier",
        "German Shepherd",
        "Australian Shepherd",
        "Belgian Shepherd Groenendael",
        "Belgian Shepherd Laekenois",
        "Belgian Shepherd Malinois",
        "Belgian Shepherd Tervuren",
        "White Swiss Shepherd",
        "Catalan Shepherd",
        "Dutch Shepherd",
        "Icelandic Shepherd",
        "Polish Lowland Shepherd",
        "Polish Tatra Shepherd",
        "Portuguese Shepherd",
        "Yugoslav Shepherd",
        "Anatolian Shepherd",
        "Central Asian Shepherd",
        "Bergamasco Shepherd",
        "Bohemian Shepherd",
        "Briard Shepherd",
        "Maremma and Abruzzes Shepherd",
        "Picardy Shepherd",
        "Russian Shepherd",
        "Atlas Shepherd",
        "Pyrenean Shepherd",
        "Shetland Shepherd",
        "Caucasian Shepherd",
        "Karst Shepherd",
        "Finnish Lapphund",
        "Bolognese Bichon",
        "Havanese Bichon",
        "Maltese Bichon",
        "Curly-Coated Bichon",
        "Biewer Yorkshire",
        "Billy",
        "Bobtail",
        "Boerboel",
        "Border Collie",
        "Border Terrier",
        "Boston Terrier",
        "American Bulldog",
        "French Bulldog",
        "Australian Bouvier",
        "Bernese Mountain Dog",
        "Appenzell Bouvier",
        "Entlebuch Bouvier",
        "Ardennes Bouvier",
        "Flanders Bouvier",
        "Boxer",
        "German Brachet",
        "Polish Brachet",
        "Tyrolean Brachet",
        "Black and Tan Austrian Brachet",
        "Hard-Haired Styrian Brachet",
        "French Pointer",
        "Short-Haired Hungarian Pointer",
        "Italian Pointer",
        "Saint-Germain Pointer",
        "German Short-Haired Pointer",
        "German Wire-Haired Pointer",
        "Auvergne Pointer",
        "Burgos Pointer",
        "Weimaraner Pointer",
        "Ariège Pointer",
        "Bourbonnais Pointer",
        "Hard-Haired Hungarian Pointer",
        "Jura Bruno",
        "Bull Terrier",
        "English Bulldog",
        "Bullmastiff",
        "Cairn Terrier",
        "Cane Corso",
        "Poodle",
        "Cao de Castro Laboreiro",
        "Pug",
        "Cavalier King Charles Spaniel",
        "Finnish Lapphund",
        "Czechoslovakian Wolfdog",
        "Saarloos Wolfdog",
        "Chinese Crested Dog",
        "Finnish Courser",
        "Portuguese Water Dog",
        "American Water Spaniel",
        "Irish Water Dog",
        "Canaan Dog",
        "Saint Hubert Dog",
        "Pyrenean Mountain Dog",
        "Portuguese Mountain Dog",
        "Pharaoh Hound",
        "Norwegian Elkhound Black",
        "Swedish Lapphund",
        "Chihuahua",
        "Chow Chow",
        "Clumber Spaniel",
        "American Cocker Spaniel",
        "English Cocker Spaniel",
        "Short-Haired Collie",
        "Long-Haired Collie",
        "Coton de Tulear",
        "Curly Coated Retriever",
        "Cursinu",
        "Dalmatian",
        "Dandie Dinmont Terrier",
        "Doberman",
        "Canário",
        "German Mastiff",
        "Dogue Argentin",
        "Bordeaux Mastiff",
        "Majorca Mastiff",
        "Tibetan Mastiff",
        "English Toy Terrier",
        "Brittany Spaniel",
        "French Spaniel",
        "Japanese Spaniel",
        "Continental Toy Spaniel",
        "Picard Spaniel",
        "Tibetan Spaniel",
        "Pont-Audemer Spaniel",
        "Eurasier",
        "Field Spaniel",
        "Brazilian Fila",
        "Flat-Coated Retriever",
        "Fox Terrier",
        "English Foxhound",
        "Galgo (Spanish Greyhound)",
        "Golden Retriever",
        "Grand Basset Griffon Vendéen",
        "Great Swiss Mountain Dog",
        "Greyhound",
        "Belgian Griffon",
        "Brussels Griffon",
        "Korthals Griffon",
        "Nivernais Griffon",
        "Hovawart",
        "Siberian Husky",
        "Irish Terrier",
        "Jack Russell Terrier",
        "Kelpie",
        "King Charles Spaniel",
        "Kishu",
        "Komondor",
        "Labrador",
        "Lakeland Terrier",
        "Landseer",
        "Leonberger",
        "Lhasa Apso",
        "Afghan Hound",
        "Scottish Deerhound",
        "Hungarian Greyhound",
        "Irish Greyhound",
        "Polish Greyhound",
        "Alaskan Malamute",
        "Mastiff",
        "Neapolitan Mastiff",
        "Norfolk Terrier",
        "Norwich Terrier",
        "Parson Russell Terrier",
        "Small Brabant Griffon",
        "Pekingese",
        "Ratonero Bodeguero Andaluz",
        "Rhodesian Ridgeback",
        "Rottweiler",
        "Saint Bernard",
        "Samoyed",
        "Schnauzer",
        "English Setter",
        "Gordon Setter",
        "Irish Red Setter",
        "Shar-Pei",
        "Shiba Inu",
        "Shih Tzu",
        "Dutch Smous",
        "German Spitz",
        "Japanese Spitz",
        "English Springer Spaniel",
        "Staffordshire Bull Terrier",
        "Sussex Spaniel",
        "Dachshund",
        "Newfoundland",
        "Scottish Terrier",
        "Russian Black Terrier",
        "Tibetan Terrier",
        "Tosa",
        "Welsh Corgi Cardigan",
        "Welsh Corgi Pembroke",
        "West Highland White Terrier",
        "Whippet",
        "Yorkshire Terrier",

        //NAC breeds
        "Egret",
        "Blue-fronted Amazon",
        "Macaw",
        "Blue-and-yellow Macaw",
        "Buffon's Macaw",
        "Scarlet Macaw",
        "Blue-crowned Conure",
        "Weasel",
        "Doe",
        "Badger",
        "Boa",
        "Goat",
        "Dwarf Goat",
        "Buzzard",
        "Woodcock",
        "Frantz's Kite",
        "Cockatoos",
        "Quail",
        "Cockatiel",
        "Yemeni Helmeted Chameleon",
        "Duck",
        "Canary",
        "Carp",
        "Beaver",
        "White-bellied Caique",
        "Goldfinch",
        "Bat",
        "Saddle Horse",
        "Draft Horse",
        "Roe Deer",
        "Prairie Dog",
        "Chinchilla",
        "Owl",
        "Goat",
        "Dwarf Goat",
        "Stork",
        "Pig",
        "Vietnamese Pig",
        "Guinea Pig",
        "Doves",
        "Patagonian Conure",
        "Red-fronted Conure",
        "Green-cheeked Conure",
        "Blue-crowned Conure",
        "Black-headed Conure",
        "Rooster",
        "Raven",
        "Blue-headed Parrot",
        "Cormorant",
        "Crow",
        "Snake",
        "Swan",
        "Deer",
        "Dolphin",
        "Bicheno's Diamond",
        "Turkey",
        "Squirrel",
        "Korean Squirrel",
        "Corn Snake",
        "Swordfish",
        "Starling",
        "Pheasant",
        "Peregrine Falcon",
        "Kestrel",
        "Flamingo",
        "Polecat",
        "Coot",
        "Ferret",
        "Gudgeon",
        "Jay",
        "Leopard Gecko",
        "Gerbil",
        "Seagull",
        "Black-necked Grebe",
        "Thrush",
        "Guppy (Fish)",
        "Chinese Hamster",
        "Golden Hamster",
        "Roborovski Hamster",
        "Russian Hamster",
        "Owls",
        "Swallow",
        "Hoopoe",
        "Hedgehog",
        "Heron",
        "Green Iguana",
        "Lovebird",
        "Red-fronted Kakariki",
        "Kangaroo",
        "Llama",
        "Rabbit",
        "Fauve de Bourgogne Rabbit",
        "Giant Butterfly Rabbit",
        "Flemish Giant Rabbit",
        "Dwarf Rabbit",
        "Netherland Dwarf Rabbit",
        "Hare",
        "Dormouse",
        "Swainson's Lorikeet",
        "Macaque",
        "Barbary Macaque",
        "Mandarin Duck",
        "Kingfisher",
        "Swift",
        "Marten",
        "Blackbird",
        "Sparrow",
        "Japanese Sparrow",
        "Seagull",
        "Skunk",
        "Sheep",
        "Ouessant Sheep",
        "Ant",
        "Titmouse",
        "Degu",
        "Goose",
        "Slowworm",
        "Pangolin",
        "Peacock",
        "New Caledonian Parakeet",
        "Partridge",
        "Amazon Parrot",
        "Eclectus Parrot",
        "African Grey Parrot",
        "Quaker Parrot",
        "Timneh Parrot",
        "Jardine's Parrot",
        "Meyer's Parrot",
        "Parakeet",
        "Elegant Parakeet",
        "Moustached Parakeet",
        "Bourke's Parakeet",
        "Pennant's Parakeet",
        "Ring-necked Parakeet",
        "Monk Parakeet",
        "Great Spotted Woodpecker",
        "Lesser Spotted Woodpecker",
        "Magpie",
        "Common Wood Pigeon",
        "Rock Pigeon",
        "Racing Pigeon",
        "Ornamental Pigeon",
        "Chaffinch",
        "Guinea Fowl",
        "Woodpecker",
        "Bearded Dragon",
        "Catfish",
        "Sunfish",
        "Goldfish",
        "Pony",
        "Shetland Pony",
        "Chicken",
        "Water Hen",
        "Ball Python",
        "Coypu",
        "Pet Rat",
        "Wild Rat",
        "Raccoon",
        "Fox",
        "Robin",
        "Salamander",
        "Wild Boar",
        "Starling",
        "Scorpion",
        "Canary",
        "Snake",
        "Catfish",
        "Monkey",
        "Pet Mouse",
        "Wild Mouse",
        "Turtle",
        "Land Turtle",
        "Turtle Dove",
        "Cow",
        "Dwarf Cow",
        "European Greenfinch",
        "Viper",
        "Mink",
        "Wallaby",
        "Senegal Parrot",
        "Donkey",
        "Grand Noir du Berry Donkey",
        "Poitou Donkey",
      ],
    },

    mixed: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "mixed is required."],
    },

    colors: {
      type: String,
      enum: [
        //cat colors
        "White",
        "Blue",
        "Blue Point",
        "Brown",
        "Chinchilla",
        "Chocolate",
        "Color Point",
        "Cream",
        "Diluted",
        "Tortoiseshell",
        "Gray",
        "Hare",
        "Marbled",
        "Brown",
        "Black",
        "Red Point",
        "Red Tabby",
        "Red",
        "Seal Point",
        "Silver",
        "Smoke",
        "Tabby",
        "Tiger",
        "Tortie Tabby",
        "Tricolor",

        //dogs colors
        "Apricot",
        "Harlequin",
        "Beige",
        "White",
        "Blue",
        "Blue Fawn",
        "Brindle Blue",
        "Light Brindle",
        "Dark Brindle",
        "Black Brindle",
        "Brown",
        "Quail",
        "Champagne",
        "Charred",
        "Chocolate",
        "Cream",
        "Golden",
        "Fawn",
        "Fire",
        "Liver",
        "Golden",
        "Gray",
        "Brown",
        "Merle",
        "Speckled",
        "Black",
        "Orange",
        "Red",
        "Red",
        "Sand",
        "Silver",
        "Tricolor",
        "Trout",
        "Sable",
      ],
    },

    age: {
      type: Number,
      required: [true, "age is required."],
    },

    ageUnit: {
      type: String,
      enum: ["year(s)", "month(s)"],
      required: [true, "ageUnit is required."],
    },

    picture: {
      type: String,
      default: "image de base",
    },

    description: {
      type: String,
    },

    placeOfLoss: {
      type: String,
      required: [true, "PlaceOf is required."],
    },
  },
  {
    timestamps: true,
  }
);

const LostPet = model("LostPet", lostPetSchema);

module.exports = LostPet;
