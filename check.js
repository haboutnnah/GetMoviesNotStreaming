const JustWatch = require('justwatch-api');
const fs = require("fs")

top250 = {
    "The Shawshank Redemption": [],
    "The Godfather": [],
    "The Godfather: Part II": [],
    "The Dark Knight": [],
    "12 Angry Men": [],
    "Schindler's List": [],
    "The Lord of the Rings The Return of the King": [],
    "Pulp Fiction": [],
    "Il buono, il brutto, il cattivo": [],
    "Fight Club": [],
    "The Lord of the Rings The Fellowship of the Ring": [],
    "Forrest Gump": [],
    "Star Wars: Episode V - The Empire Strikes Back": [],
    "Inception": [],
    "The Lord of the Rings The Two Towers": [],
    "One Flew Over the Cuckoo's Nest": [],
    "Goodfellas": [],
    "The Matrix": [],
    "Seven Samurai": [],
    "Cidade de Deus": [],
    "Se7en": [],
    "Star Wars": [],
    "The Silence of the Lambs": [],
    "It's a Wonderful Life": [],
    "La Vita e Bella": [],
    "The Usual Suspects": [],
    "Sen to Chihiro no kamikakushi": [],
    "Saving Private Ryan": [],
    "Leon": [],
    "The Green Mile": [],
    "Interstellar": [],
    "Psycho": [],
    "American History X": [],
    "City Lights": [],
    "Once Upon a Time in the West": [],
    "Casablanca": [],
    "Modern Times": [],
    "The Intouchables": [],
    "The Pianist": [],
    "The Departed": [],
    "Terminator 2 Judgment Day": [],
    "Back to the Future": [],
    "Whiplash": [],
    "Rear Window": [],
    "Raiders of the Lost Ark": [],
    "Gladiator": [],
    "The Lion King": [],
    "The Prestige": [],
    "Apocalypse Now": [],
    "Memento": [],
    "Avengers Infinity War": [],
    "Alien": [],
    "The Great Dictator": [],
    "Nuovo Cinema Paradiso": [],
    "Hotaru no haka": [],
    "Sunset Blvd.": [],
    "Das Leben der Anderen": [],
    "Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb": [],
    "Paths of Glory": [],
    "The Shining": [],
    "Django Unchained": [],
    "WALL-E": [],
    "Mononoke-hime": [],
    "Witness for the Prosecution": [],
    "American Beauty": [],
    "The Dark Knight Rises": [],
    "Oldeuboi": [],
    "Coco": [],
    "Aliens": [],
    "Once Upon a Time in America": [],
    "Das Boot": [],
    "Citizen Kane": [],
    "Braveheart": [],
    "Vertigo": [],
    "North by Northwest": [],
    "Reservoir Dogs": [],
    "Star Wars: Episode VI - Return of the Jedi": [],
    "Kimi no na wa.": [],
    "M - Eine Stadt sucht einen Murder": [],
    "Dangal": [],
    "Requiem for a Dream": [],
    "Amadeus": [],
    "Taare Zameen Par": [],
    "Lawrence of Arabia": [],
    "Eternal Sunshine of the Spotless Mind": [],
    "A Clockwork Orange": [],
    "Amelie": [],
    "Double Indemnity": [],
    "3 Idiots": [],
    "2001 A Space Odyssey": [],
    "Toy Story": [],
    "Taxi Driver": [],
    "Singin' in the Rain": [],
    "Full Metal Jacket": [],
    "Inglourious Basterds": [],
    "To Kill a Mockingbird": [],
    "Ladri di biciclette": [],
    "The Kid": [],
    "The Sting": [],
    "Toy Story 3": [],
    "Good Will Hunting": [],
    "Jagten": [],
    "Snatch": [],
    "Monty Python and the Holy Grail": [],
    "Scarface": [],
    "Per qualche dollaro in piu": [],
    "L.A. Confidential": [],
    "The Apartment": [],
    "Metropolis": [],
    "Jodaeiye Nader az Simin": [],
    "Indiana Jones and the Last Crusade": [],
    "Rashomon": [],
    "Up": [],
    "All About Eve": [],
    "Yojimbo": [],
    "Batman Begins": [],
    "Some Like It Hot": [],
    "Unforgiven": [],
    "Der Untergang": [],
    "The Treasure of the Sierra Madre": [],
    "Die Hard": [],
    "Heat": [],
    "Ikiru": [],
    "Raging Bull": [],
    "Incendies": [],
    "The Great Escape": [],
    "Babam ve Oglum": [],
    "Bacheha-Ye aseman": [],
    "Pan's Labyrinth": [],
    "The Third Man": [],
    "Chinatown": [],
    "Tonari no Totoro": [],
    "Ran": [],
    "Hauru no ugoku shiro": [],
    "Judgment at Nuremberg": [],
    "El secreto de sus ojos": [],
    "The Gold Rush": [],
    "The Bridge on the River Kwai": [],
    "Three Billboards Outside Ebbing, Missouri": [],
    "A Beautiful Mind": [],
    "On the Waterfront": [],
    "Lock, Stock and Two Smoking Barrels": [],
    "Casino": [],
    "Det sjunde inseglet": [],
    "Inside Out": [],
    "Room": [],
    "The Elephant Man": [],
    "Mr. Smith Goes to Washington": [],
    "The Wolf of Wall Street": [],
    "V for Vendetta": [],
    "Warrior": [],
    "Blade Runner": [],
    "The General": [],
    "Smultronstallet": [],
    "Dial M for Murder": [],
    "Trainspotting": [],
    "No Country for Old Men": [],
    "There Will Be Blood": [],
    "The Sixth Sense": [],
    "Gone with the Wind": [],
    "The Thing": [],
    "Fargo": [],
    "Gran Torino": [],
    "The Deer Hunter": [],
    "Finding Nemo": [],
    "Idi i smotri": [],
    "Sherlock Jr.": [],
    "The Big Lebowski": [],
    "Kill Bill Vol. 1": [],
    "Shutter Island": [],
    "Cool Hand Luke": [],
    "Rebecca": [],
    "Tokyo monogatari": [],
    "A Star Is Born": [],
    "Hacksaw Ridge": [],
    "Mary and Max": [],
    "Sunrise A Song of Two Humans": [],
    "Gone Girl": [],
    "How to Train Your Dragon": [],
    "Relatos salvajes": [],
    "Jurassic Park": [],
    "Into the Wild": [],
    "Eskiya": [],
    "Life of Brian": [],
    "It Happened One Night": [],
    "In the Name of the Father": [],
    "Platoon": [],
    "The Grand Budapest Hotel": [],
    "Stand by Me": [],
    "The Truman Show": [],
    "Network": [],
    "Stalker": [],
    "Hotel Rwanda": [],
    "Ben-Hur": [],
    "Persona": [],
    "Salinui chueok": [],
    "12 Years a Slave": [],
    "Andrei Rublev": [],
    "Le salaire de la peur": [],
    "Million Dollar Baby": [],
    "Rang De Basanti": [],
    "La passion de Jeanne d'Arc": [],
    "Rush": [],
    "Mad Max Fury Road": [],
    "Before Sunrise": [],
    "Les quatre cents coups": [],
    "Spotlight": [],
    "Hachi A Dog's Tale": [],
    "Logan": [],
    "Prisoners": [],
    "Amores perros": [],
    "The Princess Bride": [],
    "Kaze no tani no Naushika": [],
    "Catch Me If You Can": [],
    "Butch Cassidy and the Sundance Kid": [],
    "Harry Potter and the Deathly Hallows Part 2": [],
    "Rocky": [],
    "Barry Lyndon": [],
    "Monsters, Inc.": [],
    "The Grapes of Wrath": [],
    "The Maltese Falcon": [],
    "Les diaboliques": [],
    "Donnie Darko": [],
    "Sanjuro": [],
    "The Terminator": [],
    "Gandhi": [],
    "Dead Poets Society": [],
    "La haine": [],
    "Groundhog Day": [],
    "Blade Runner 2049": [],
    "La La Land": [],
    "Le notti di Cabiria": [],
    "The Wizard of Oz": [],
    "Jaws": [],
    "The Help": [],
    "Faa yeung nin wa": [],
    "Paper Moon": [],
    "Gangs of Wasseypur": [],
    "Mandariinid": [],
    "Before Sunset": [],
    "A Wednesday": [],
    "Paris, Texas": [],
    "Ah-ga-ssi": [],
    "The Bourne Ultimatum": [],
    "Guardians of the Galaxy": [],
    "PK": [],
    "Pirates of the Caribbean The Curse of the Black Pearl": [],
    "Tenku no shiro Rapyuta": [],
    "The Best Years of Our Lives": [],
    "Swades We, the People": []
}

var jw = new JustWatch({"locale": "en_AU"})
var parsed = 0
var started = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getApprovedProviders() {
    return jw.getProviders().then(
    (providers) => {
        providers = providers.filter(
            (provider) => {
                var name = provider.clear_name

                return (name == "Netflix" || 
                        name == "Amazon Prime Video" ||
                        name == "SBS On Demand") // The only providers I care about
            } 
        )
        return (providers)
    }).then(
    (providers) => {
        providers = providers.map(
            (provider) => {
                return [provider.clear_name, provider.id]
            }
        )
        return providers
    })
}

async function processResults (result, movie) {
    started++
    console.log(movie, started)
    //console.log(result.items[0])
    var items = result["items"]
    try {
        if (items.length == 0) {
            return undefined
    }
    } catch (e) {
        console.log (`! ! ! ! ! ! ERR ! ! ! ! ! ! ${movie} ${e}, ${typeof(result)}`)
    }
    try {
        var topResult = items[0]
    } catch (e) {
        console.log(`! ! ! ! ERR ! ! ! ! : ${movie}, error ${e}`)
        process.exit(54)
    }
    var offers = topResult.offers 
    if (offers == undefined || offers == []) {
        return undefined
    }  
    var found = offers.filter(
        (provider_obj) => {
            providerId = provider_obj.provider_id
            return (providerTranslation[providerId] != undefined)
        }
    ).map(
        (provider) => {
            return provider.provider_id
    })    
    if (top250[movie] == [] || top250[movie] == undefined) {
        top250[movie] = []
    }
    providers = found.map(
        (providerId) => {
            return providerTranslation[providerId]
        }
    )
    if (offers == undefined || offers == []) {
        return undefined
    }  
    try { 
        if (top250[movie].length < providers.length) {
            top250[movie] = providers
            console.log(movie, parsed)
            parsed ++
            if(started >= 245) {
                fs.writeFile(
                    `./dumps/_DATA`,
                    JSON.stringify(top250, null, 2),
                    'utf-8',
                    ()=>({})
                )
                fs.writeFile(
                    `./dumps/_AVAIL_STREAMS`,
                    function(){
                        output = ""
                        for (var key in top250) {
                            if (top250.hasOwnProperty(key)) {
                                if (top250[key].length > 0) {
                                    output += key + "\n"
                                }
                            }
                        }
                        return output  
                    }(),
                    'utf-8',
                    ()=>({})
                )
                fs.writeFile(
                    `./dumps/_NO_STREAMS`,
                    function (){
                        output = ""
                        for (var key in top250) {
                            if (top250.hasOwnProperty(key)) {
                                if (top250[key].length == 0) {
                                    output += key + "\n"
                                }
                            }
                        }
                        return output  
                    }(),
                    'utf-8',
                    ()=>({})
                )
            }
        }
    } catch (e) {
        console.log(`! ERR ! : with movie ${movie}, which has providers of ${providers} and an entry of${top250[movie]}. E = ${e}`)
    }
}

async function main() {
    getApprovedProviders().then(
        (approvedProviders) => {
            providerTranslation = {}
            approvedProviders.map(
                (arr) => {
                    providerTranslation[arr[1]] = arr[0]
                }
            )
            //console.log(providerTranslation)
            Object.keys(top250).map(
                (movie) => {
                    sleep(/*getRandomInt(5,10)*1000*/0).then(()=>{
                        fs.stat(`./dumps/${movie}`, function (err, stat) {
                            if (err == null) {
                                fs.readFile(
                                    `./dumps/${movie}`,
                                    'utf8', 
                                    function (err, data) {
                                        if (err) {
                                            console.log(`! ERR ! : With movie ${movie}, had error ${e}`)
                                        }
                                        else {
                                            data = JSON.parse(data)
                                            processResults(data, movie)
                                        }
                                    }
                                )
                                
                            } else if (err.code =='ENOENT') {
                                jw.search({"query": movie}).then(results => {
                                    fs.writeFile(
                                        `./dumps/${movie}`,
                                        JSON.stringify(results, null, 2),
                                        'utf-8',
                                        ()=>({})
                                    );
                                    processResults(results, movie)
                                })
                            } else {
                                console.log(" ! ERR ! : ", err.code, "with movie ", movie)
                            }
                        })
                    }
)})})}
                
main()
