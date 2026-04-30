const questions = [
  {
    category: "Your Natural Energy",
    text: "At the end of a long day, what kind of work leaves you feeling tired but still satisfied?",
    options: [
      { main: "Working with people — listening, helping, or leading them", sub: "Conversations, coaching, teamwork", cats: { people: 3, helping: 2, leadership: 1 } },
      { main: "Working with ideas — reading, writing, analysing", sub: "Research, strategy, thinking through problems", cats: { intellectual: 3, creative: 1, analytical: 2 } },
      { main: "Making things — building, designing, or fixing", sub: "Crafts, code, products, physical work", cats: { maker: 3, creative: 2, technical: 2 } },
      { main: "Organising and executing — planning, managing, getting things done", sub: "Systems, schedules, results", cats: { organiser: 3, leadership: 2, structured: 2 } }
    ]
  },
  {
    category: "How You Think",
    text: "A friend has a big problem. What do you instinctively do first?",
    options: [
      { main: "Listen fully before saying anything", sub: "You care about making them feel heard", cats: { people: 3, helping: 3, emotional: 2 } },
      { main: "Ask lots of questions to understand the root cause", sub: "You want the full picture before reacting", cats: { analytical: 3, intellectual: 2 } },
      { main: "Jump into solutions — brainstorm options immediately", sub: "You're wired to fix things", cats: { maker: 2, organiser: 2, leadership: 1 } },
      { main: "Research — find out what worked for others in similar situations", sub: "You trust information over instinct", cats: { intellectual: 3, analytical: 2 } }
    ]
  },
  {
    category: "Work & Effort",
    text: "You're working on a project. What kind of challenge genuinely excites you?",
    options: [
      { main: "Convincing or inspiring people to believe in something", sub: "Pitching, presenting, persuading", cats: { leadership: 3, people: 2, creative: 1 } },
      { main: "Figuring out a complex technical or logical puzzle", sub: "Code, numbers, systems, data", cats: { technical: 3, analytical: 2, maker: 1 } },
      { main: "Creating something original that didn't exist before", sub: "Writing, designing, inventing", cats: { creative: 3, maker: 2 } },
      { main: "Turning chaos into a smooth, working process", sub: "Planning, coordinating, making things efficient", cats: { organiser: 3, structured: 3, leadership: 1 } }
    ]
  },
  {
    category: "What Drains You",
    text: "What kind of work makes you want to quit by lunchtime?",
    options: [
      { main: "Doing the same repetitive task over and over", sub: "No variety, no challenge", cats: { creative_need: 3, intellectual_need: 2 } },
      { main: "Endless meetings and socialising with no real output", sub: "Too much talking, not enough doing", cats: { introvert: 3, maker_need: 2 } },
      { main: "Being told exactly what to do with no room to think", sub: "No autonomy, just following orders", cats: { autonomy_need: 3, creative_need: 2 } },
      { main: "Unstructured, vague work with no clear goal", sub: "You need a target to aim at", cats: { structure_need: 3, organiser: 1 } }
    ]
  },
  {
    category: "Your Values",
    text: "If money wasn't a factor, what would matter most in your work?",
    options: [
      { main: "Making a real difference in people's lives", sub: "Impact over income", cats: { helping: 3, people: 2, meaning: 3 } },
      { main: "Creating things that last — art, writing, products", sub: "Legacy and craftsmanship", cats: { creative: 3, maker: 2, meaning: 2 } },
      { main: "Freedom — working on your terms, your schedule", sub: "Autonomy and independence", cats: { autonomy_need: 3, entrepreneur: 2 } },
      { main: "Mastery — becoming truly great at something specific", sub: "Expertise and recognition", cats: { intellectual: 2, technical: 2, mastery: 3 } }
    ]
  },
  {
    category: "Social Style",
    text: "How do you do your best work?",
    options: [
      { main: "Alone, deep in focus, with no interruptions", sub: "Solo is your superpower", cats: { introvert: 3, intellectual: 1, maker: 1 } },
      { main: "In a small, trusted team where everyone knows their role", sub: "Collaboration without chaos", cats: { people: 2, leadership: 1, structured: 1 } },
      { main: "In a busy, social environment with constant energy", sub: "Other people fuel you", cats: { extrovert: 3, people: 3, leadership: 1 } },
      { main: "Flexibly — sometimes alone, sometimes with others", sub: "Context-dependent", cats: { people: 1, intellectual: 1 } }
    ]
  },
  {
    category: "Risk & Comfort",
    text: "A once-in-a-lifetime opportunity appears — but it's risky and uncertain. What do you do?",
    options: [
      { main: "Go for it. The regret of not trying is worse than failing", sub: "You lean into risk", cats: { entrepreneur: 3, leadership: 2, autonomy_need: 2 } },
      { main: "Research it thoroughly, then decide", sub: "Calculated risk only", cats: { analytical: 2, intellectual: 2, structured: 1 } },
      { main: "Take a small step to test the waters first", sub: "Progress over leaps", cats: { organiser: 2, structured: 2 } },
      { main: "Hesitate — stability matters more to you right now", sub: "Security is a real value", cats: { structure_need: 2, helping: 1 } }
    ]
  },
  {
    category: "Learning Style",
    text: "How do you learn best?",
    options: [
      { main: "By doing — jumping in and figuring it out", sub: "Hands-on, trial and error", cats: { maker: 3, entrepreneur: 2 } },
      { main: "By reading, watching, and absorbing deeply first", sub: "Understand before you act", cats: { intellectual: 3, analytical: 2 } },
      { main: "By watching someone expert do it, then copying", sub: "Modelling and mentorship", cats: { people: 2, mastery: 2 } },
      { main: "By teaching others — explaining makes it click", sub: "You learn through articulation", cats: { helping: 3, people: 2, intellectual: 1 } }
    ]
  },
  {
    category: "What You're Drawn To",
    text: "Which section of a bookstore do you drift toward?",
    options: [
      { main: "Psychology, self-help, relationships", sub: "Human behaviour fascinates you", cats: { people: 2, helping: 2, intellectual: 2, emotional: 2 } },
      { main: "Science, technology, history, philosophy", sub: "Big ideas and deep knowledge", cats: { intellectual: 3, analytical: 2, technical: 1 } },
      { main: "Business, entrepreneurship, biographies", sub: "How people build things", cats: { entrepreneur: 3, leadership: 2, mastery: 1 } },
      { main: "Art, design, fiction, poetry, culture", sub: "Aesthetics and expression", cats: { creative: 3, maker: 1 } }
    ]
  },
  {
    category: "Money & Success",
    text: "What does 'success' honestly mean to you?",
    options: [
      { main: "Financial freedom — enough that money is never a worry", sub: "Security and choices", cats: { entrepreneur: 2, structured: 1, mastery: 1 } },
      { main: "Recognition — being respected as someone great at what you do", sub: "Status and excellence", cats: { mastery: 3, leadership: 2 } },
      { main: "Meaningful work — feeling like what you do matters", sub: "Purpose over prestige", cats: { meaning: 3, helping: 2, creative: 1 } },
      { main: "Balance — a good life outside of work too", sub: "Work isn't everything", cats: { people: 1, autonomy_need: 2, meaning: 1 } }
    ]
  },
  {
    category: "Under Pressure",
    text: "You're given a big, overwhelming task with no instructions. You:",
    options: [
      { main: "Break it into smaller pieces and start immediately", sub: "Structured action relieves stress", cats: { organiser: 3, structured: 3, leadership: 1 } },
      { main: "Research similar things and reverse-engineer an approach", sub: "Study before you start", cats: { intellectual: 3, analytical: 2 } },
      { main: "Ask someone experienced — collaboration saves time", sub: "You know when to seek help", cats: { people: 2, helping: 1 } },
      { main: "Dive in creatively and adapt as you go", sub: "Imperfect action over perfect planning", cats: { creative: 2, entrepreneur: 2, maker: 2 } }
    ]
  },
  {
    category: "Your Superpower",
    text: "Friends and colleagues come to you most often when they need...",
    options: [
      { main: "Advice — they trust your perspective on life decisions", sub: "You give solid, calm guidance", cats: { helping: 3, people: 3, emotional: 2 } },
      { main: "Help understanding something complex", sub: "You explain things clearly", cats: { intellectual: 3, analytical: 2, helping: 1 } },
      { main: "Help getting something done or organised", sub: "You execute when others freeze", cats: { organiser: 3, leadership: 2, structured: 2 } },
      { main: "Creative ideas — you always think differently", sub: "Your mind goes places others don't", cats: { creative: 3, entrepreneur: 1, maker: 1 } }
    ]
  },
  {
    category: "Conflict & Difficulty",
    text: "When something goes wrong in a team or project, you tend to:",
    options: [
      { main: "Focus on the people first — how is everyone feeling?", sub: "Emotions and morale matter", cats: { people: 3, helping: 2, emotional: 3 } },
      { main: "Analyse what went wrong and why", sub: "Root cause before reaction", cats: { analytical: 3, intellectual: 2 } },
      { main: "Immediately work on fixing it — action over analysis", sub: "Move fast, adjust later", cats: { maker: 2, entrepreneur: 2, leadership: 2 } },
      { main: "Reassign and reorganise to prevent it happening again", sub: "Systems prevent future failures", cats: { organiser: 3, structured: 3 } }
    ]
  },
  {
    category: "Long-Term Vision",
    text: "In 10 years, what picture makes your heart beat a little faster?",
    options: [
      { main: "Leading a team, organisation, or movement", sub: "Influence at scale", cats: { leadership: 3, people: 2, entrepreneur: 1 } },
      { main: "Being a known expert or authority in your field", sub: "The best at what you do", cats: { mastery: 3, intellectual: 2, technical: 1 } },
      { main: "Having built something — a business, a body of work, a product", sub: "Something that exists because of you", cats: { entrepreneur: 3, maker: 2, creative: 2 } },
      { main: "Living simply and meaningfully — helping, creating, being free", sub: "Depth over scale", cats: { meaning: 3, helping: 2, autonomy_need: 2 } }
    ]
  },
  {
    category: "Right Now",
    text: "Honestly, what's the biggest reason you feel stuck?",
    options: [
      { main: "Too many options — I don't know how to choose", sub: "Paralysis by too much possibility", cats: { intellectual: 1, creative: 1 } },
      { main: "Fear — what if I choose wrong and waste time?", sub: "Risk aversion holding me back", cats: { structure_need: 1, autonomy_need: 1 } },
      { main: "I know what I want but don't know how to start", sub: "Direction without a path", cats: { maker: 1, organiser: 1 } },
      { main: "I don't feel good enough yet", sub: "Confidence and self-belief", cats: { mastery: 1, helping: 1 } }
    ]
  }
];

const phases = [
  "Getting to Know You",
  "Your Work Style",
  "Your Values",
  "Your Strengths",
  "Finding Your Path"
];

const profiles = [
  {
    id: 'creative',
    name: 'The Creator',
    emoji: '🎨',
    color: '#c4532a',
    tagline: 'You make things. Your mind sees possibilities others miss.',
    summary: 'You think visually, feel deeply, and have a relentless drive to make things that didn\'t exist before. Your superpower is original thinking — whether in writing, design, music, art, video, or any craft. The world needs what lives in your imagination.',
    strengths: ['Original, out-of-the-box thinking', 'Deep aesthetic sensibility', 'Emotional intelligence in work', 'Can see the big picture others miss'],
    weaknesses: ['Can struggle with routine and deadlines', 'Perfectionism can slow output', 'Business/financial side feels draining', 'Hard to "switch off" your mind'],
    paths: [
      { title: 'Creative Professional', icon: '✏️', desc: 'Writer, designer, filmmaker, photographer, animator — build a career around your medium.', actions: ['Build a portfolio', 'Pick one medium to master', 'Find a community of creators'] },
      { title: 'Creative Entrepreneur', icon: '🏗️', desc: 'Start a creative business — brand studio, content agency, or a product powered by your aesthetic.', actions: ['Validate a creative service', 'Land first 3 clients', 'Build your brand online'] },
      { title: 'Creative Technologist', icon: '💻', desc: 'Combine creativity with tech — UI/UX design, game design, creative coding, or digital marketing.', actions: ['Learn Figma or a creative tool', 'Take a UX design course', 'Build a project to show employers'] }
    ]
  },
  {
    id: 'intellectual',
    name: 'The Thinker',
    emoji: '🧠',
    color: '#2a7ac4',
    tagline: 'You go deep. Ideas, knowledge, and understanding are your oxygen.',
    summary: 'You\'re energised by learning, complexity, and making sense of the world. You read widely, think rigorously, and have little patience for shallow answers. Your power is your mind — and the paths that let you use it fully will feel like breathing.',
    strengths: ['Deep analytical and research ability', 'Highly knowledgeable and well-read', 'Excellent at breaking down complex problems', 'Can explain difficult things clearly'],
    weaknesses: ['Overthinking can lead to inaction', 'Can underestimate emotional/people dimensions', 'May be impatient with "simple" thinking', 'Analysis paralysis is a real risk'],
    paths: [
      { title: 'Expert / Specialist', icon: '🔬', desc: 'Go deep in a field — science, law, economics, psychology, engineering, medicine, data science, philosophy.', actions: ['Identify your deepest interest', 'Pursue advanced study or certification', 'Write or speak about your expertise'] },
      { title: 'Researcher / Analyst', icon: '📊', desc: 'Research roles in academia, think tanks, consulting firms, or data-heavy industries.', actions: ['Identify organisations doing research you respect', 'Build analytical skills (data, writing, methods)', 'Publish or present your thinking publicly'] },
      { title: 'Strategist / Consultant', icon: '♟️', desc: 'Use your analytical mind to help organisations solve complex problems.', actions: ['Learn a consulting framework', 'Practice case studies', 'Build a reputation for clear thinking'] }
    ]
  },
  {
    id: 'helper',
    name: 'The Giver',
    emoji: '🤝',
    color: '#2ac47a',
    tagline: 'You care deeply. People feel better after talking to you.',
    summary: 'Your strength is people. You\'re a natural listener, an empathetic presence, and someone who genuinely wants others to thrive. You feel most alive when your work makes a tangible difference in someone\'s life — not just a bottom line.',
    strengths: ['Exceptional empathy and emotional awareness', 'Natural communicator and listener', 'Builds deep trust quickly', 'Motivated by meaning, not just money'],
    weaknesses: ['Can absorb others\' problems and burn out', 'Struggles to say no or set boundaries', 'May undervalue your own needs', 'Can be taken advantage of'],
    paths: [
      { title: 'People-Facing Professional', icon: '👥', desc: 'Teaching, counselling, coaching, nursing, social work, therapy, HR, community management.', actions: ['Get certified in your area of care', 'Volunteer to build experience and clarity', 'Set boundaries early — this is career longevity'] },
      { title: 'Healthcare or Mental Health', icon: '🏥', desc: 'Medicine, psychology, therapy, physiotherapy, nutrition — helping people at their most vulnerable.', actions: ['Map the qualifications needed', 'Shadow someone in the field first', 'Explore both clinical and non-clinical options'] },
      { title: 'Mission-Driven Business or NGO', icon: '🌱', desc: 'Work in organisations where impact is the core metric — nonprofits, social enterprises, education reform.', actions: ['Identify causes you care about most', 'Look for organisations in those spaces', 'Find the role at the intersection of your skills and their need'] }
    ]
  },
  {
    id: 'leader',
    name: 'The Leader',
    emoji: '🦁',
    color: '#c49a2a',
    tagline: 'You move people. You see what needs to happen — and you make it happen.',
    summary: 'You\'re energised by influence, direction, and results. People follow you naturally because you bring clarity in chaos. You\'re at your best when you\'re owning a vision, making decisions, and driving a team or organisation toward something meaningful.',
    strengths: ['Natural ability to organise and motivate others', 'Clear decisiveness under pressure', 'Big picture thinker who can delegate', 'High drive and execution energy'],
    weaknesses: ['Can steamroll others\' input if not careful', 'Impatience with slow or "soft" progress', 'Risk of burnout from always being "on"', 'Delegating — and truly letting go — is hard'],
    paths: [
      { title: 'Entrepreneur / Founder', icon: '🚀', desc: 'Build and lead something of your own. Leadership is your mode — ownership multiplies it.', actions: ['Identify a real problem you want to solve', 'Find a co-founder who complements your gaps', 'Launch something small and learn fast'] },
      { title: 'Manager / Executive Track', icon: '🏢', desc: 'Rise in a company that rewards leadership — corporate, government, NGO, military, education.', actions: ['Seek leadership roles early, even informal ones', 'Find a mentor who is where you want to be', 'Read widely on leadership and organisational design'] },
      { title: 'Community / Movement Builder', icon: '📣', desc: 'Build something around a cause, interest, or community — politics, activism, religion, sports.', actions: ['Start small — run a local event or online group', 'Build skills in public speaking and writing', 'Define what you actually stand for'] }
    ]
  },
  {
    id: 'builder',
    name: 'The Builder',
    emoji: '🔧',
    color: '#8a4ac4',
    tagline: 'You make things work. You\'re the person who actually gets it done.',
    summary: 'You\'re wired for execution. While others theorise, you build. You\'re happiest when your hands (or mind) are on something real — writing code, fixing systems, making products, constructing things. You measure success by what exists that didn\'t exist before.',
    strengths: ['High execution ability — you finish what you start', 'Strong technical aptitude and problem-solving', 'Practical, resourceful, and self-reliant', 'Great at learning on the job'],
    weaknesses: ['May under-communicate your work to others', 'Can get lost in the details and miss the big picture', 'Networking and self-promotion don\'t come naturally', 'May undervalue the "soft" skills needed to advance'],
    paths: [
      { title: 'Technical / Engineering Career', icon: '⚙️', desc: 'Software engineering, electrical, mechanical, civil, data — any field where you build real things.', actions: ['Pick a technical domain to go deep in', 'Build projects that show real skill', 'Find mentors in your chosen field'] },
      { title: 'Product Development / Startup', icon: '📦', desc: 'Use your builder instinct to create products — digital or physical — that solve real problems.', actions: ['Identify a problem that frustrates you', 'Build a simple version (MVP)', 'Get 10 people to use it and listen carefully'] },
      { title: 'Skilled Trade or Craft', icon: '🛠️', desc: 'Architecture, construction, culinary arts, mechanics, carpentry — mastery through making.', actions: ['Invest in proper training or apprenticeship', 'Build a body of work to show', 'Charge what your skill is worth'] }
    ]
  },
  {
    id: 'organiser',
    name: 'The Operator',
    emoji: '🗂️',
    color: '#c4532a',
    tagline: 'You bring order. Where others see chaos, you see a system waiting to happen.',
    summary: 'You\'re the backbone of every team you join. You see inefficiency and it bothers you. You\'re excellent at planning, coordinating, and making sure things actually happen. The world massively undervalues people like you — but the best organisations don\'t.',
    strengths: ['Exceptional at planning and systems thinking', 'Reliable, thorough, and detail-oriented', 'Calm under pressure and logistically sharp', 'Can manage multiple things at once without dropping any'],
    weaknesses: ['Can be resistant to sudden change or ambiguity', 'May undervalue creative or "soft" contributions', 'Risk of micromanaging or being too rigid', 'Can struggle to delegate — feels faster to do it yourself'],
    paths: [
      { title: 'Operations & Management', icon: '📋', desc: 'Project management, operations director, COO track — organisations need people who make the trains run on time.', actions: ['Get a PMP or operations certification', 'Seek roles managing complex projects', 'Learn to communicate upward clearly'] },
      { title: 'Finance, Logistics, or Administration', icon: '📈', desc: 'Accounting, supply chain, event management, administration — precision-critical fields.', actions: ['Identify which industry appeals to you', 'Get sector-specific qualifications', 'Start in a support role and demonstrate reliability fast'] },
      { title: 'Entrepreneur (Operational)', icon: '🏗️', desc: 'Build a service business that runs on excellent processes — an agency, consultancy, or franchise.', actions: ['Design your processes before your product', 'Find a creative co-founder who needs your structure', 'Start with what you already know how to do'] }
    ]
  }
];
