const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const inspiration = [
  "No king, force, or god can make you walk a path you do not choose;",
	"The smallest choice you make can alter the course of time;",
	"Your burdens are yours - yours to keep hidden, and yours to share;"
];

app.get("/api/compliment/", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune/", (req, res) => {
  const fortunes = ["There are countless consequences for messing with history. You are living in one of them.",
					 "Your world is being watched by a distant pair of eyes.",
					 "There is a spark of divinity in everyone. Just not enough to start a fire.",
           "Even the strongest walls crumble under enough force. Worlds, too.",
           "There is a question that many have no answer for: “Then what?”",
           "Just because you can repair what was broken does not mean you have solved the problem. Nothing so important is ever that easy.",
           "Chaos crawls across the world in a suit and a sinister smile.",
           "Death is never the end. Oh, how desperately some wish it was.",
           "Sacrifice and reward are rarely in equal measure.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/inspiration/", (req, res) => {
  const inspiration = [
    "No king, force, or god can make you walk a path you do not choose;",
    "The smallest choice you make can alter the course of time;",
    "Your burdens are yours - yours to keep hidden, and yours to share."
  ];
  res.status(200).send(inspiration.join(" "));
  
});

app.get("/api/jokes/", (req, res) => {
  const jokes = [
    "How many narcissists does it take to screw in a light bulb? One. The narcissist holds the light bulb while the rest of the world revolves around him.",
    "I read that by law you must turn on your headlights when it’s raining in Sweden, but how am I supposed to know when it is raining in Sweden?",
    "I was addicted to hokey pokey...but I turned myself around.",
    "I don’t trust stairs. They are always up to something.",
    "What’s the least spoken language in the world? Sign language.",
    "How do you make holy water? You boil the hell out of it.",
  ];

  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomIndex];

  res.status(200).send(randomJoke);
  
});

app.put(`/api/titles/:name`, (req, res) => {
    let { name } = req.params
    const titles = [
      `You shall be called ${name}, Bringer of Hope.`,
      `You shall be called ${name}, Defender of Allies.`,
      `You shall be called ${name}, Awe Champion.`,
      `You shall be called ${name}, Dawn Herald.`,
      `You shall be called ${name}, Revealer of Truth.`,
    ];

    let randomIndex = Math.floor(Math.random() * titles.length);
    let randomTitle = titles[randomIndex];

    res.status(200).send(randomTitle);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
