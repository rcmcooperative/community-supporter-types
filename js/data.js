const questions = [
  {
    category: "Your Natural Energy",
    text: "You're at a conference with your peers. Which of the following activities are you most likely doing?",
    options: [
      { main: "Live-posting highlights, writing threads, and making sure your followers don't miss a thing", cats: { creative: 1 } },
      { main: "Playing matchmaker in the hallways — connecting people who absolutely need to know each other", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "Scoping trends, spotting opportunities, and working on the next steps for the community", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "Making sure everyone has the agenda, the Wi-Fi code, and knows where the good coffee is", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "Hunting down the speaker who mentioned reproducible workflows so you can geek out together", sub: "Systems, schedules, results", cats: { builder : 1 } },
      { main: "Eating and relaxing", sub: "Systems, schedules, results", cats: { organiser: 1 } }
    ]
  },
  {
    category: "How You Think",
    text: "You're at a meeting that feels disorganized. What role do you naturally assume?",
    options: [
      { main: "You draft a crisp summary of what's been said so everyone's aligned on the same page", cats: { creative: 1 } },
      { main: "You check in with quieter voices in the room to make sure everyone gets heard", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "You gently redirect the group toward goals and try to synthesise different ideas into a shared vision", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "You volunteer to capture action items and chase people up afterwards (cheerfully)", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "You start sketching a workflow diagram on a napkin to untangle the confusion", sub: "Systems, schedules, results", cats: { builder : 1 } },
      { main: "Sit and watch the chaos unfold", cats: { organiser: 1 } }
    ]
  },
  {
    category: "Work & Effort",
    text: "Someone proposes a new project at your workplace. What are you are most likely to suggest?",
    options: [
      { main: "We need a comms plan! Let's think about the narrative and how we announce this to the world.", cats: { creative: 1 } },
      { main: "Who are our stakeholders? Let's build an onboarding plan and get the community involved from day one.", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "What's the strategic fit? Let me do a quick horizon scan before we commit to anything.", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "Setting up a timeline, a risk register, and defining who owns what before we start.", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "Have we decided on the license, version control, and whether this will be open source?", sub: "Systems, schedules, results", cats: { builder : 1 } },
      { main: "Jump in and have a go at it", cats: { organiser: 1 } }
    ]
  },
  {
    category: "What Drains You",
    text: "You are in a hackathon refreshment break. Someone says they are contributing to project 'Foo'. What is your first comment?",
    options: [
      { main: "I've seen your posts about it! Have you thought about a newsletter or blog series?", cats: { creative: 1 } },
      { main: "Amazing! Who else is involved? How can other people get on board?", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "Interesting - how does it fit into the broader ecosystem? Have you thought about the long-term sustainability?", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "You can't resist asking about the roadmap. Any key milestones coming up soon?", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "Nice! What stack are you using? Is the code open source and the data FAIR?", sub: "Systems, schedules, results", cats: { builder : 1 } },
      { main: "That's a nice project", cats: { organiser: 1 } }
    ]
  },
  {
    category: "Your Values",
    text: "You are part of an event organizing group. What role are you most likely to take?",
    options: [
      { main: "Writing the event narrative, promotional copy, and keeping the social buzz alive", cats: { creative: 1 } },
      { main: "Designing the programme to encourage participation and centre diverse voices", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "Ensuring the event with the community's goals and identifying partnership opportunities", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "Managing logistics, tracking the budget, and making sure nothing falls through the cracks", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "Setting up the tech - platform, recording, accessibility tools, and shared notes", sub: "Systems, schedules, results", cats: { builder : 1 } },
      { main: "Purchase the ticket and attend the event", cats: { organiser: 1 } }
    ]
  },
  {
    category: "Social Style",
    text: "You are doing a retrospective for a project. What do you most notice in your notes?",
    options: [
      { main: "Whether key messages reached the right audiences — and what landed vs. what flopped", cats: { creative: 1 } },
      { main: "How engaged the community felt, and whether everyone truly had a voice", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "They are focused on the big picture and look at how things connect with other communities", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "Whether timelines, budgets, and action items were actually tracked and closed out", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "Whether the code is reproducible, documented, and properly archived and hopefully published on GitHub/Zenodo for others to build on", sub: "Systems, schedules, results", cats: { builder : 1 } },
      { main: "Retrospective? Huh! I wasn't even a part of that", cats: { organiser: 1 } }
    ]
  },
  {
    category: "Risk & Comfort",
    text: "Your colleagues come to your office and rant about an infrastructure is not working efficiently. What is your reaction?",
    options: [
      { main: "You listen, then suggest they find a solution together and channel it into a blog post or even better share it as a chapter in The Turing Way", cats: { creative: 1 } },
      { main: "You empathise deeply, then ask who else feels this way and how to bring them together", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "You help them reframe the rant as a chance to identify bigger issues that other people might be facing to have broader structural discussion to identify a solution together", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "You pull out your notebook and start capturing their concerns as potential action items, and come back next day with a plan for how this will solved", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "You're already mid-rant with them, tabs open, links flying, and a GitHub issue drafted", sub: "Systems, schedules, results", cats: { builder : 1 } },
      // { main: "Ugh, same!", cats: { organiser: 1 } }
    ]
  },
  {
    category: "Learning Style",
    text: "You're working in a group to solve a problem. Where do you start?",
    options: [
      { main: "By crafting a shared message that resonates with every audience you need to reach", cats: { creative: 1 } },
      { main: "By listening to each group first to understand how they relate to one another", sub: "Research, strategy, thinking through problems", cats: { intellectual: 1 } },
      { main: "By identifying the key decision-makers and figuring out overlaps between their interests", sub: "Crafts, code, products, physical work", cats: { helper: 1 } },
      { main: "By clarifying roles, responsibilities, and who owns which part of the solution", sub: "Systems, schedules, results", cats: { leader: 1 } },
      { main: "By mapping the technical dependencies and infrastructure constraints first, ensuring everyone understand what can or can not be done", sub: "Systems, schedules, results", cats: { builder : 1 } },
      // { main: "...", cats: { organiser: 1 } }
    ]
  },
  // {
  //   category: "What You're Drawn To",
  //   text: "Which section of a bookstore do you drift toward?",
  //   options: [
  //     { main: "Psychology, self-help, relationships", sub: "Human behaviour fascinates you", cats: { people: 2, helping: 2, intellectual: 2, emotional: 2 } },
  //     { main: "Science, technology, history, philosophy", sub: "Big ideas and deep knowledge", cats: { intellectual: 3, analytical: 2, technical: 1 } },
  //     { main: "Business, entrepreneurship, biographies", sub: "How people build things", cats: { entrepreneur: 3, leadership: 2, mastery: 1 } },
  //     { main: "Art, design, fiction, poetry, culture", sub: "Aesthetics and expression", cats: { creative: 3, maker: 1 } }
  //   ]
  // }
];

const phases = [
  "1",
  "2",
  "3",
  "4",
  "5"
];

const profiles = [
  {
    id: 'creative',
    name: 'Influencer Cook',
    emoji: '📢',
    color: '#c4532a',
    tagline: 'Core skill: Communication',
    summary: 'You craft stories, amplify voices, and make sure the right messages reach the right people at the right time. Your superpower is turning complex ideas into compelling content that moves communities to action. Congratulations! You are a Research Community Manager.',
    strengths: ['You turn complex ideas into compelling stories that reach and inspire the right audiences at the right time.'],
    weaknesses: ['You can focus so much on broadcasting that listening and deeper community engagement gets left behind.'],
    paths: [
      { title: 'Creative Professional', icon: '✏️', desc: 'Writer, designer, filmmaker, photographer, animator — build a career around your medium.', actions: ['Build a portfolio', 'Pick one medium to master', 'Find a community of creators'] },
      { title: 'Creative Entrepreneur', icon: '🏗️', desc: 'Start a creative business — brand studio, content agency, or a product powered by your aesthetic.', actions: ['Validate a creative service', 'Land first 3 clients', 'Build your brand online'] },
      { title: 'Creative Technologist', icon: '💻', desc: 'Combine creativity with tech — UI/UX design, game design, creative coding, or digital marketing.', actions: ['Learn Figma or a creative tool', 'Take a UX design course', 'Build a project to show employers'] }
    ]
  },
  {
    id: 'intellectual',
    name: 'Community Cook',
    emoji: '🤝',
    color: '#2a7ac4',
    tagline: 'Core skill: Enaggement',
    summary: 'You bring people together, spark connections, and make sure everyone has a seat at the table. Your superpower is building belonging and creating spaces where communities genuinely thrive. Congratulations! You are a Research Community Manager.',
    strengths: ['You create spaces where people genuinely belong and spark connections that wouldn\'t happen without you.'],
    weaknesses: ['Saying yes to everyone can stretch you too thin and tip you toward burnout before you notice it happening.'],
    paths: [
      { title: 'Expert / Specialist', icon: '🔬', desc: 'Go deep in a field — science, law, economics, psychology, engineering, medicine, data science, philosophy.', actions: ['Identify your deepest interest', 'Pursue advanced study or certification', 'Write or speak about your expertise'] },
      { title: 'Researcher / Analyst', icon: '📊', desc: 'Research roles in academia, think tanks, consulting firms, or data-heavy industries.', actions: ['Identify organisations doing research you respect', 'Build analytical skills (data, writing, methods)', 'Publish or present your thinking publicly'] },
      { title: 'Strategist / Consultant', icon: '♟️', desc: 'Use your analytical mind to help organisations solve complex problems.', actions: ['Learn a consulting framework', 'Practice case studies', 'Build a reputation for clear thinking'] }
    ]
  },
  {
    id: 'helper',
    name: 'Head Chef',
    emoji: '🧠',
    color: '#2ac47a',
    tagline: 'Core skill: Strategic',
    summary: 'You are helping to articulate the community\'s priorities, identify areas for growth or collaboration, and building collaborations with other communities. You advocate for your community to people outside of it and advocate for new leaders within in. Congratulations! You are a Research Community Manager.',
    strengths: ['Thinking about the big picture. Looking for ways to improve process and help people work better. Identifying future opportunities and potential risks.'],
    weaknesses: ['Become too focused on process and losing sight of the most important part of community - the people!'],
    paths: [
      { title: 'People-Facing Professional', icon: '👥', desc: 'Teaching, counselling, coaching, nursing, social work, therapy, HR, community management.', actions: ['Get certified in your area of care', 'Volunteer to build experience and clarity', 'Set boundaries early — this is career longevity'] },
      { title: 'Healthcare or Mental Health', icon: '🏥', desc: 'Medicine, psychology, therapy, physiotherapy, nutrition — helping people at their most vulnerable.', actions: ['Map the qualifications needed', 'Shadow someone in the field first', 'Explore both clinical and non-clinical options'] },
      { title: 'Mission-Driven Business or NGO', icon: '🌱', desc: 'Work in organisations where impact is the core metric — nonprofits, social enterprises, education reform.', actions: ['Identify causes you care about most', 'Look for organisations in those spaces', 'Find the role at the intersection of your skills and their need'] }
    ]
  },
  {
    id: 'leader',
    name: 'Hostess with the Mostest',
    emoji: '📋',
    color: '#c49a2a',
    tagline: 'Core skill: Accountability',
    summary: 'You keep everything running smoothly, timelines, budgets, action items, nothing slips through. Your superpower is turning good intentions into reliable, trackable outcomes. Congratulations! You are a Research Community Manager.',
    strengths: ['Nothing falls through the cracks on your watch - you bring the structure and reliability every community needs.'],
    weaknesses: ['Rigid processes can stifle the spontaneity and creativity that makes community work come alive.'],
    paths: [
      { title: 'Entrepreneur / Founder', icon: '🚀', desc: 'Build and lead something of your own. Leadership is your mode — ownership multiplies it.', actions: ['Identify a real problem you want to solve', 'Find a co-founder who complements your gaps', 'Launch something small and learn fast'] },
      { title: 'Manager / Executive Track', icon: '🏢', desc: 'Rise in a company that rewards leadership — corporate, government, NGO, military, education.', actions: ['Seek leadership roles early, even informal ones', 'Find a mentor who is where you want to be', 'Read widely on leadership and organisational design'] },
      { title: 'Community / Movement Builder', icon: '📣', desc: 'Build something around a cause, interest, or community — politics, activism, religion, sports.', actions: ['Start small — run a local event or online group', 'Build skills in public speaking and writing', 'Define what you actually stand for'] }
    ]
  },
  {
    id: 'builder',
    name: 'Nerd Cook',
    emoji: '💻',
    color: '#8a4ac4',
    tagline: 'Core skill: Technical',
    summary: 'You love the tools, the code, and the infrastructure that makes open research possible. Your superpower is embedding reproducible, ethical, and open practices into everything you touch. Congratulations! You are a Research Community Manager.',
    strengths: ['You build the open and reproducible infrastructure that gives your community a solid and trustworthy foundation.'],
    weaknesses: ['Technical jargon and tool-first thinking can unintentionally exclude the very people you are trying to support.'],
    paths: [
      { title: 'Technical / Engineering Career', icon: '⚙️', desc: 'Software engineering, electrical, mechanical, civil, data — any field where you build real things.', actions: ['Pick a technical domain to go deep in', 'Build projects that show real skill', 'Find mentors in your chosen field'] },
      { title: 'Product Development / Startup', icon: '📦', desc: 'Use your builder instinct to create products — digital or physical — that solve real problems.', actions: ['Identify a problem that frustrates you', 'Build a simple version (MVP)', 'Get 10 people to use it and listen carefully'] },
      { title: 'Skilled Trade or Craft', icon: '🛠️', desc: 'Architecture, construction, culinary arts, mechanics, carpentry — mastery through making.', actions: ['Invest in proper training or apprenticeship', 'Build a body of work to show', 'Charge what your skill is worth'] }
    ]
  },
  {
    id: 'organiser',
    name: 'Community Members',
    emoji: '💻',
    color: '#c4532a',
    tagline: 'Yay',
    summary: 'Yay!!! You belong to a community!',
    strengths: ['You are part of a community where your presence, perspective and ideas matter if you don\'t know it how.'],
    weaknesses: ['Watch out that you don\'t alway take the back seat and let others solve the problem always. Use spaces to advocate for yourself and know that you too can become part of the solution.'],
    paths: [
      { title: 'Operations & Management', icon: '📋', desc: 'Project management, operations director, COO track — organisations need people who make the trains run on time.', actions: ['Get a PMP or operations certification', 'Seek roles managing complex projects', 'Learn to communicate upward clearly'] },
      { title: 'Finance, Logistics, or Administration', icon: '📈', desc: 'Accounting, supply chain, event management, administration — precision-critical fields.', actions: ['Identify which industry appeals to you', 'Get sector-specific qualifications', 'Start in a support role and demonstrate reliability fast'] },
      { title: 'Entrepreneur (Operational)', icon: '🏗️', desc: 'Build a service business that runs on excellent processes — an agency, consultancy, or franchise.', actions: ['Design your processes before your product', 'Find a creative co-founder who needs your structure', 'Start with what you already know how to do'] }
    ]
  }
];
