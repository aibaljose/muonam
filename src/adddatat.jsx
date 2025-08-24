// const questions = {
// 	Q1: { text: "What is the first building you enter in the college?", answer: "Entrance Gate" },
// 	Q2: { text: "Where can you find all the books in the college?", answer: "Library" },
// 	Q3: { text: "Which place hosts basketball matches?", answer: "Basketball Court" },
// 	Q4: { text: "Where do students work on computers in labs?", answer: "Computer Lab" },
// 	Q5: { text: "Which tree is famous for gatherings and shade in the campus?", answer: "Banyan Tree" },
// 	Q6: { text: "Where do chemistry experiments happen?", answer: "Chemistry Lab" },
// 	Q7: { text: "Which place hosts all the main events and programs?", answer: "Main Auditorium" },
// 	Q8: { text: "Where is the quiet space behind the auditorium?", answer: "Behind the Auditorium" },
// 	Q9: { text: "Where does the principal have their office?", answer: "Principal's Office" },
// 	Q10: { text: "Where do students eat and gather during breaks?", answer: "Canteen" },
// 	Q11: { text: "Where do students park their vehicles?", answer: "Parking Lot" },
// 	Q12: { text: "Which building hosts the student dormitories?", answer: "Hostel" },
// 	Q13: { text: "Which spot has water and decorative surroundings?", answer: "Garden Fountain" },
// 	Q14: { text: "Where are football matches played?", answer: "Football Ground" },
// 	Q15: { text: "Where are seminars and talks conducted?", answer: "Seminar Hall" },
// 	Q16: { text: "Which place gives a view of the campus from above?", answer: "Rooftop Terrace" },
// 	Q17: { text: "Where is the national flag hoisted in the campus?", answer: "Flag Pole" },
// 	Q18: { text: "Which room hosts the science exhibition?", answer: "Science Exhibition Room" },
// 	Q19: { text: "Which corridor has murals on the walls?", answer: "Corridor with Murals" },
// 	Q20: { text: "Where can you collect your treasure or prize?", answer: "Prize Desk" },
// };

const questions = {
  Q1: { 
    text: "The first day of the ten-day Onam celebration has a special name. It's when people start making small pookalams and the festivities begin. What is this opening day called?", 
    answer: "Atham" 
  },

  Q2: { 
    text: "In the Onam sadya, there's a mixed vegetable dish with coconut that's considered essential. It has many colorful vegetables and is slightly tangy. What is this traditional curry called?", 
    answer: "Avial" 
  },

  Q3: { 
    text: "During Onam, people enjoy swinging, but there's also a game played in water where participants try to catch a greased pole. What is this slippery water game called?", 
    answer: "Kummatti" 
  },

  Q4: { 
    text: "The day just before the main Thiruvonam day, when preparations reach their peak and the pookalam is made extra special, has its own name. What is this important day called?", 
    answer: "Uthradom" 
  },

  Q5: { 
    text: "In traditional Onam celebrations, there's a dance where people move in a circle holding hands, usually performed by women. It's graceful and rhythmic. What is this group dance called?", 
    answer: "Thiruvathira" 
  },

  Q6: { 
    text: "The boat races during Onam are famous worldwide, and there's one particular championship race held in Alappuzha that's named after India's first Prime Minister. What is this famous race called?", 
    answer: "Nehru Trophy" 
  },

  Q7: { 
    text: "In the pookalam, people often use a particular small yellow flower that grows abundantly in Kerala and is considered very auspicious. What is this traditional flower called?", 
    answer: "Thumba" 
  },

  Q8: { 
    text: "During Onam festivities, there's a martial art performance that showcases Kerala's ancient fighting techniques with weapons and bare hands. What is this traditional martial art called?", 
    answer: "Kalaripayattu" 
  },

  Q9: { 
    text: "The Onam sadya is served on a particular type of leaf that's large, green, and naturally antibacterial. Which leaf is traditionally used as the plate?", 
    answer: "Banana" 
  },

  Q10: { 
    text: "In the Onam story, when Vamana grew giant-sized, he measured the entire earth with his first step and the sky with his second. Where did King Mahabali offer to place the third step?", 
    answer: "Head" 
  },

  Q11: { 
    text: "There's a special type of steamed rice cake prepared during Onam that's white, soft, and often filled with coconut and jaggery. What are these sweet dumplings called?", 
    answer: "Kozhukatta" 
  },

  Q12: { 
    text: "The traditional music that accompanies Onam celebrations often features a particular percussion instrument that's cylindrical and played with sticks. What is this drum called?", 
    answer: "Chenda" 
  },

  Q13: { 
    text: "In boat races, the rowers sing special songs to keep their rhythm synchronized while rowing. What do we call these traditional boat songs?", 
    answer: "Vanchipattu" 
  },

  Q14: { 
    text: "The Onam celebration marks the harvest of which main crop that's the staple food of Kerala?", 
    answer: "Rice" 
  },

  Q15: { 
    text: "During Onam, there's a game where people try to break a pot filled with treats that's hung high up, similar to a piñata. What is this game called?", 
    answer: "Uriyadi" 
  },

  Q16: { 
    text: "The Onam sadya traditionally includes a specific number of dishes arranged in a particular order. According to tradition, what is the ideal number of dishes in a complete sadya?", 
    answer: "Thirteen" 
  },

  Q17: { 
    text: "The elephants in Onam processions are arranged in a specific formation, and there's a special term for the lead elephant that carries the main ceremonial items. What is this lead elephant called?", 
    answer: "Thidambu" 
  },

  Q18: { 
    text: "In traditional Kerala architecture, the courtyards where pookalams are made have a specific design. What do we call these open courtyards in Kerala homes?", 
    answer: "Nadumuttom" 
  },

  Q19: { 
    text: "Onam is celebrated when a particular star constellation appears in the sky. This nakshatra is crucial for determining the exact date of Thiruvonam. Which star determines this?", 
    answer: "Thiruvonam" 
  },

  Q20: { 
    text: "In the Onam legend, Vamana's three giant steps represent three different realms of existence. The third step, placed on Mahabali's head, symbolically represents conquering what human quality?", 
    answer: "Pride" 
  }
};


const addQuestionsData = async () => {
	try {
		await setDoc(doc(db, "questions", "list"), questions);
		alert("Questions data added to Firestore!");
	} catch (err) {
		alert("Error adding questions: " + err.message);
	}
};
// const clues = {
// 	Q1: "Clue: Entrance Gate.",
// 	Q2: "Clue: College Library.",
// 	Q3: "Clue: Basketball Court.",
// 	Q4: "Clue: Computer Lab.",
// 	Q5: "Clue: Under the Banyan Tree.",
// 	Q6: "Clue: Chemistry Lab.",
// 	Q7: "Clue: Main Auditorium Stage.",
// 	Q8: "Clue: Behind the Auditorium.",
// 	Q9: "Clue: Principal’s Office Door.",
// 	Q10: "Clue: College Canteen.",
// 	Q11: "Clue: Parking Lot.",
// 	Q12: "Clue: Hostel Entrance.",
// 	Q13: "Clue: Garden Fountain.",
// 	Q14: "Clue: Football Ground.",
// 	Q15: "Clue: Seminar Hall.",
// 	Q16: "Clue: Rooftop Terrace.",
// 	Q17: "Clue: Near the Flag Pole.",
// 	Q18: "Clue: Science Exhibition Room.",
// 	Q19: "Clue: Corridor with Murals.",
// 	Q20: "Clue: Final Spot – Prize Desk 🎉",
// };

const clues = {
  Q1: "Clue: Find the place where a movie was shot, \
And a cinematic treasure was sought. \
The actor, Sharaf U Dheen, found his prize, \
Hidden among the bamboo that reaches for the skies.",

  Q2: "Clue: Before you enter the world of books, seek the place of sound. \
Look for the metal and stone letters that spell out the campus's own radio frequency. \
Your clue is waiting there.",

  Q3: "Clue: Between the Resource Block and Research Square, \
A holy tree stands, breathing fresh air. \
With heart-shaped leaves that flutter and sing, \
Look to its trunk for the next code to bring.",

  Q4: "Clue: Beside the grand Research Square building, you'll find a place that honors history. \
Look for the outdoor museum with old machines. \
Your clue is waiting on the large, blue one, the 'Bobbin Armouring Machine.'",

  Q5: "Clue: In front of the place where all the books are found, \
Look up high, a watchful sign is bound. \
A camera is there, keeping an eye on it all, \
Your clue is hiding right under its call.",

  Q6: "Clue: Find the spot where food and friendship are found. \
Look for a message of love spelled out in stone. \
Your clue is waiting near the giant red heart, tucked among the green bushes.",

  Q7: "Clue: I am the largest of my kind, a place for young minds to learn. \
With eight stories that reach for the sky, and a holy figure watching nearby. \
You'll find your next step on the first floor, in the room where many ideas are shared.",

  Q8: "Clue: Go to the block where cars are designed, \
Walk up the stairs, a place you will find. \
On the fourth floor, where thirst is quenched, \
Your next clue is waiting, fully drenched.",

  Q9: "Clue: Between the world of books and where you can dine, \
A small tree stands, a hidden sign. \
Find the open space where events take place, \
A QR code is waiting in that very same space.",

  Q10: "Clue: Take the road down from the canteen's open air, \
Where the CC Block stands, a sign of care. \
Look for the lab where machines are made, \
A shady tree holds the clue you have prayed.",

  Q11: "Clue: When the lights go out and the campus falls dark, \
I roar to life, a powerful spark. \
Follow the road down from where meals are served, \
To find the machine that keeps the power reserved.",

  Q12: "Clue: Find the hall that bears a saint's name, \
Where events and gatherings play their game. \
Stand at the entrance, a door you must face, \
Your next clue awaits in this welcoming space.",

  Q13: "Clue: Where the court's painted lines are found, \
And the bouncing of a ball makes a sound, \
Look for the shade, a leafy friend, \
Where your treasure hunt's journey can extend.",

  Q14: "Clue: Follow the path where students first arrive, \
Look up high where the bright lamps thrive. \
A single, tall pole with a crown of light, \
Your next clue is there, shining ever so bright.",

  Q15: "Clue: Head to the place where no full meals are served, \
Where a quick cup of coffee is deserved. \
Your next clue is on a machine, an old electric part, \
A rusted relic, a work of art.",

  Q16: "Clue: In the heart of the campus, a place to gather, \
Where stores, a bank, and a canteen all matter. \
A statue of Mary watches over the ground, \
On a towering lamp, your next clue is found.",

  Q17: "Clue: In the home of the automotive trade, \
A journey to the third floor must be made. \
Find the red tool, a protector from heat, \
Your QR is waiting, making your quest complete.",

  Q18: "Clue: Where the hoop stands tall and the ball takes flight, \
Walk behind the court, away from the light. \
A large, shady tree is your next goal, \
Find the code to complete your quest, mind and soul.",

  Q19: "Clue: Look for the wall where heroes unite, \
Painted in black and red, yellow, and white. \
Where a pirate king and a dark knight share the air. \
Let the man with the scar and the red robe guide you. \
Your clue is waiting for you there.",

  Q20: "Clue: In the Resource Block, on the ground you must stay, \
Look to the stairs that lead to a play. \
Right by the side, a railing stands tall, \
Where your next clue is waiting for you all."
};


const addCluesData = async () => {
	try {
		await setDoc(doc(db, "clues", "locations"), clues);
		alert("Clues data added to Firestore!");
	} catch (err) {
		alert("Error adding clues: " + err.message);
	}
};
import React from "react";
import { db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

// const pathways = {
// 	path1: ["Q5","Q8","Q3","Q12","Q10","Q1","Q7","Q2","Q9","Q4","Q6","Q11","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"],
// 	path2: ["Q2","Q14","Q1","Q6","Q9","Q3","Q8","Q5","Q10","Q7","Q4","Q11","Q12","Q13","Q15","Q16","Q17","Q18","Q19","Q20"],
// 	path3: ["Q1","Q3","Q5","Q7","Q9","Q2","Q4","Q6","Q8","Q10","Q11","Q12","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"],
// 	path4: ["Q4","Q8","Q12","Q16","Q3","Q7","Q11","Q15","Q19","Q1","Q5","Q9","Q13","Q17","Q2","Q6","Q10","Q14","Q18","Q20"],
// 	path5: ["Q2","Q5","Q8","Q11","Q14","Q1","Q4","Q7","Q10","Q13","Q3","Q6","Q9","Q12","Q15","Q16","Q17","Q18","Q19","Q20"],
// 	path6: ["Q1","Q3","Q6","Q9","Q12","Q2","Q4","Q5","Q7","Q10","Q8","Q11","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"],
// 	path7: ["Q7","Q10","Q13","Q16","Q19","Q1","Q4","Q8","Q11","Q14","Q2","Q5","Q9","Q12","Q15","Q3","Q6","Q17","Q18","Q20"],
// 	path8: ["Q4","Q8","Q12","Q16","Q3","Q7","Q11","Q15","Q19","Q2","Q6","Q10","Q14","Q18","Q1","Q5","Q9","Q13","Q17","Q20"],
// 	path9: ["Q2","Q5","Q8","Q11","Q14","Q1","Q4","Q7","Q10","Q13","Q3","Q6","Q9","Q12","Q15","Q16","Q17","Q18","Q19","Q20"],
// 	path10:["Q7","Q13","Q15","Q4","Q11","Q1","Q3","Q5","Q8","Q10","Q2","Q6","Q9","Q12","Q14","Q16","Q17","Q18","Q19","Q20"]
// };

const pathways = {
  path1: ["Q7","Q3","Q15","Q9","Q18","Q6","Q14","Q12","Q11","Q16","Q1","Q8","Q5","Q13","Q4","Q2","Q10","Q19","Q17","Q20"],
  path2: ["Q12","Q2","Q8","Q14","Q5","Q9","Q19","Q7","Q4","Q10","Q3","Q1","Q6","Q13","Q17","Q11","Q18","Q16","Q15","Q20"],
  path3: ["Q8","Q18","Q3","Q2","Q5","Q9","Q11","Q13","Q10","Q6","Q17","Q7","Q1","Q15","Q19","Q4","Q12","Q16","Q14","Q20"],
  path4: ["Q11","Q4","Q13","Q2","Q6","Q15","Q1","Q18","Q7","Q12","Q10","Q19","Q3","Q14","Q5","Q8","Q17","Q9","Q16","Q20"],
  path5: ["Q6","Q16","Q12","Q9","Q18","Q4","Q15","Q1","Q13","Q19","Q8","Q3","Q14","Q11","Q2","Q5","Q7","Q17","Q10","Q20"],
  path6: ["Q5","Q14","Q18","Q1","Q7","Q4","Q11","Q8","Q16","Q19","Q10","Q13","Q3","Q2","Q15","Q9","Q12","Q6","Q17","Q20"],
  path7: ["Q13","Q7","Q5","Q17","Q11","Q6","Q15","Q4","Q8","Q1","Q9","Q18","Q3","Q14","Q19","Q12","Q2","Q10","Q16","Q20"],
  path8: ["Q9","Q3","Q18","Q6","Q12","Q14","Q10","Q7","Q2","Q13","Q1","Q19","Q5","Q11","Q15","Q17","Q4","Q8","Q16","Q20"],
  path9: ["Q4","Q10","Q1","Q15","Q6","Q2","Q9","Q12","Q7","Q13","Q17","Q14","Q19","Q8","Q16","Q11","Q3","Q5","Q18","Q20"],
  path10:["Q2","Q16","Q7","Q18","Q4","Q9","Q13","Q5","Q10","Q6","Q15","Q3","Q1","Q12","Q17","Q8","Q14","Q19","Q11","Q20"]
};


const addSampleData = async () => {
	try {
		await setDoc(doc(db, "pathway_order", "pathways"), pathways);
		alert("Sample pathways data added to Firestore!");
	} catch (err) {
		alert("Error adding data: " + err.message);
	}
};

const AddDatat = () => {
	return (
		<div style={{ padding: 40 }}>
					<button onClick={addSampleData} style={{ padding: 16, fontSize: 18, borderRadius: 8, background: '#bb5c5c', color: '#fff', border: 'none', marginRight: 16 }}>
						Add Sample Pathways to Firestore
					</button>
					<button onClick={addCluesData} style={{ padding: 16, fontSize: 18, borderRadius: 8, background: '#e7b96c', color: '#222', border: 'none', marginRight: 16 }}>
						Add Clues to Firestore
					</button>
					<button onClick={addQuestionsData} style={{ padding: 16, fontSize: 18, borderRadius: 8, background: '#5cbb7a', color: '#fff', border: 'none' }}>
						Add Questions to Firestore
					</button>
		</div>
	);
};

export default AddDatat;
