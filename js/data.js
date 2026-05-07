const questions = [
  {
    category: "Natural Energy",
    text: "When you're at a conference with your peers, which of the following activities are you most likely doing?",
    options: [
      { main: "Live-posting highlights, writing threads, and making sure your followers don't miss a thing", cats: { creative: 1 } },
      { main: "Playing matchmaker in the hallways — connecting people who absolutely need to know each other", cats: { intellectual: 1 } },
      { main: "Quietly scoping trends, spotting white spaces, and mentally drafting the next big strategy", cats: { helper: 1 } },
      { main: "Making sure everyone has the agenda, the Wi-Fi code, and knows where the good coffee is", cats: { leader: 1 } },
      { main: "Hunting down the speaker who mentioned reproducible workflows so you can geek out together", cats: { builder : 1 } },
      { main: "Chatting with people, sharing your experiences, and trying to find ways to contribute to the community", cats: { cooking_curious: 1 } },
      { main: "Sipping conference coffee and taking selfie to post it with the event hashtag", cats: { participant: 1 } }
    ]
  },
  {
    category: "How You Think",
    text: "When you're at a meeting that feels disorganized, what role do you naturally assume?",
    options: [
      { main: "You draft a crisp summary of what's been said so everyone's aligned on the same page", cats: { creative: 1 } },
      { main: "You check in with quieter voices in the room to make sure everyone gets heard", cats: { intellectual: 1 } },
      { main: "You gently redirect the group toward goals and what actually matters long-term", cats: { helper: 1 } },
      { main: "You volunteer to capture action items and chase people up afterwards (cheerfully)", cats: { leader: 1 } },
      { main: "You start sketching a workflow diagram on a napkin to untangle the confusion", cats: { builder : 1 } },
      { main: "You ask questions and share your perspective, trying to find a way to contribute to the solution", cats: { cooking_curious: 1 } },
      { main: "Sit back, relax and watch the chaos unfold, hoping someone will step in", cats: { participant: 1 } }
    ]
  },
  {
    category: "Work & Effort",
    text: "When someone proposes a new project at your workplace, you are more likely to suggest...",
    options: [
      { main: "We need a comms plan! Let's think about the narrative and how we announce this to the world.", cats: { creative: 1 } },
      { main: "Who are our stakeholders? Let's build an onboarding plan and get the community involved from day one.", cats: { intellectual: 1 } },
      { main: "What's the strategic fit? Let me do a quick horizon scan before we commit to anything.", cats: { helper: 1 } },
      { main: "Let's set up a timeline, a risk register, and define who owns what before we start.", cats: { leader: 1 } },
      { main: "Have we decided on the license, version control, and whether this will be open source?", cats: { builder : 1 } },
      { main: "How can I help? What are the next steps and how can I get involved?", cats: { cooking_curious: 1 } },
      { main: "Can I help? Who else is involved and how can I get on board?", cats: { participant: 1 } }
    ]
  },
  {
    category: "Engagement Style",
    text: "You are in a conference refreshment break. Someone says that they are contributing to project \"Foo\". What is your first comment?",
    options: [
      { main: "I've seen your posts about it! Have you thought about a newsletter or blog series?", cats: { creative: 1 } },
      { main: "Amazing! Who else is involved? How can other people get on board?", cats: { intellectual: 1 } },
      { main: "Interesting — how does it fit into the broader ecosystem? Any sustainability or funding plans?", cats: { helper: 1 } },
      { main: "Great! What does the roadmap look like? Any key milestones coming up soon?", cats: { leader: 1 } },
      { main: "Nice! What stack are you using? Is the code open source and the data FAIR?", cats: { builder : 1 } },
      { main: "Cool! How did you get involved? What are you working on right now?", cats: { cooking_curious: 1 } },
      { main: "That's a nice project! Curious to know how you got involved", cats: { participant: 1 } }
    ]
  },
  {
    category: "Your Values",
    text: "When you are part of an event organizing group, you are most likely to take one of the following roles",
    options: [
      { main: "Writing the event narrative, promotional copy, and keeping the social buzz alive", cats: { creative: 1 } },
      { main: "Designing the programme to encourage participation and centre diverse voices", cats: { intellectual: 1 } },
      { main: "Aligning the event with organisational goals and identifying partnership opportunities", cats: { helper: 1 } },
      { main: "Managing logistics, tracking the budget, and making sure nothing falls through the cracks", cats: { leader: 1 } },
      { main: "Setting up the tech — platform, recording, accessibility tools, and shared notes", cats: { builder : 1 } },
      { main: "Volunteering to help with whatever needs doing, and encouraging others to do the same", cats: { cooking_curious: 1 } },
      { main: "Purchase the ticket to attend and looking for ways to contribute", cats: { participant: 1 } }
    ]
  },
  {
    category: "Social Style",
    text: "When you are doing a retrospective for a project, what do you most notice in your notes",
    options: [
      { main: "Whether key messages reached the right audiences — and what landed vs. what flopped", cats: { creative: 1 } },
      { main: "How engaged the community felt, and whether everyone truly had a voice", cats: { intellectual: 1 } },
      { main: "Whether the project moved the mission forward and what bold moves to make next time", cats: { helper: 1 } },
      { main: "Whether timelines, budgets, and action items were actually tracked and closed out", cats: { leader: 1 } },
      { main: "Whether the code is reproducible, documented, and properly archived for others to build on", cats: { builder : 1 } },
      { main: "Whether people felt like they had a chance to contribute and whether they took it", cats: { cooking_curious: 1 } },
      { main: "Retrospective? Huh! I wonder what happens in those meetings?", cats: { participant: 1 } }
    ]
  },
  {
    category: "Risk & Comfort",
    text: "Your nerdy friends come to your office and rant about something, what is your reaction?",
    options: [
      { main: "You listen, then suggest they channel it into a blog post or a rallying tweet thread", cats: { creative: 1 } },
      { main: "You empathise deeply, then ask who else feels this way and how to bring them together", cats: { intellectual: 1 } },
      { main: "You help them reframe the rant as an opportunity and identify the key stakeholders to involve", cats: { helper: 1 } },
      { main: "You pull out your notebook and start capturing their concerns as potential action items", cats: { leader: 1 } },
      { main: "You're already mid-rant with them, tabs open, links flying, and a GitHub issue half-drafted", cats: { builder : 1 } },
      { main: "Check if they need help troubleshooting, finding collaborators, or sharing their work?", cats: { cooking_curious: 1 } },
      { main: "You listen and commiserate, sharing your own frustrations with the problem", cats: { participant: 1 } }
    ]
  },
  {
    category: "Learning Style",
    text: "When you are interacting with multiple groups when solving a problem, where do you generally start?",
    options: [
      { main: "By crafting a shared message that resonates with every audience you need to reach", cats: { creative: 1 } },
      { main: "By listening to each group first to understand how they relate to one another", cats: { intellectual: 1 } },
      { main: "By identifying the key decision-makers and aligning everyone on shared goals", cats: { helper: 1 } },
      { main: "By clarifying roles, responsibilities, and who owns which part of the solution", cats: { leader: 1 } },
      { main: "By mapping the technical dependencies and infrastructure constraints first", cats: { builder : 1 } },
      { main: "By offering to help wherever needed and asking what would be most useful right now", cats: { cooking_curious: 1 } },
      { main: "By listening and observing first before figuring out how or whether to get involved", cats: { participant: 1 } }
    ]
  }
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
    color: '#FF6B6B',
    tagline: 'Core skill: Communication',
    summary: 'Core skill: Communication. You craft stories, amplify voices, and make sure the right messages reach the right people at the right time. Your superpower is turning complex ideas into compelling content that moves communities to action. Congratulations! You are a Research Community Manager.',
    strengths: ['You turn complex ideas into compelling stories that reach and inspire the right audiences at the right time.'],
    weaknesses: ['You can focus so much on broadcasting that listening and deeper community engagement gets left behind.'],
    recommendation: 'Build regular community feedback loops into your comms strategy — let the community shape the message.',
    bestPartner: 'Community Cook 🤝',
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
    color: '#4ECDC4',
    tagline: 'Core skill: Engagement',
    summary: 'Core skill: Engagement. You bring people together, spark connections, and make sure everyone has a seat at the table. Your superpower is building belonging and creating spaces where communities genuinely thrive. Congratulations! You are a Research Community Manager.',
    strengths: ['You create spaces where people genuinely belong and spark connections that wouldn\'t happen without you.'],
    weaknesses: ['Saying yes to everyone can stretch you too thin and tip you toward burnout before you notice it happening.'],
    recommendation: 'Set clear priorities for your engagement work and protect your energy — a sustainable you is a better community builder.',
    bestPartner: 'Head Chef 🧠',
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
    color: '#F7B731',
    tagline: 'Core skill: Strategic',
    summary: 'Core skill: Strategic. You are helping to articulate the community\'s priorities, identify areas for growth or collaboration, and building collaborations with other communities. You advocate for your community to people outside of it and advocate for new leaders within it. Congratulations! You are a Research Community Manager.',
    strengths: ['You see the big picture before anyone else and align people around a vision that gives the community direction.'],
    weaknesses: ['Your high-altitude thinking can leave community members behind — execution and day-to-day needs can slip.'],
    recommendation: 'Stay grounded with regular direct touchpoints with your community and partner closely with someone who loves the detail.',
    bestPartner: 'Hostess with the Mostest 📋',
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
    color: '#26de81',
    tagline: 'Core skill: Accountability',
    summary: 'Core skill: Accountability. You keep everything running smoothly — timelines, budgets, action items — nothing slips through. Your superpower is turning good intentions into reliable, trackable outcomes. Congratulations! You are a Research Community Manager.',
    strengths: ['Nothing falls through the cracks on your watch — you bring the structure and reliability every community needs.'],
    weaknesses: ['Rigid processes can stifle the spontaneity and creativity that makes community work come alive.'],
    recommendation: 'Build deliberate space for experimentation into your plans and remember to celebrate people, not just deliverables.',
    bestPartner: 'Community Cook 🤝',
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
    color: '#A55EEA',
    tagline: 'Core skill: Technical',
    summary: 'Core skill: Technical. You love the tools, the code, and the infrastructure that makes open research possible. Your superpower is embedding reproducible, ethical, and open practices into everything you touch. Congratulations! You are a Research Community Manager.',
    strengths: ['You build the open and reproducible infrastructure that gives your community a solid and trustworthy foundation.'],
    weaknesses: ['Technical jargon and tool-first thinking can unintentionally exclude the very people you are trying to support.'],
    recommendation: 'Lead with why before how — partner with a strong communicator to make your technical work accessible to all.',
    bestPartner: 'Influencer Cook 📢',
    paths: [
      { title: 'Technical / Engineering Career', icon: '⚙️', desc: 'Software engineering, electrical, mechanical, civil, data — any field where you build real things.', actions: ['Pick a technical domain to go deep in', 'Build projects that show real skill', 'Find mentors in your chosen field'] },
      { title: 'Product Development / Startup', icon: '📦', desc: 'Use your builder instinct to create products — digital or physical — that solve real problems.', actions: ['Identify a problem that frustrates you', 'Build a simple version (MVP)', 'Get 10 people to use it and listen carefully'] },
      { title: 'Skilled Trade or Craft', icon: '🛠️', desc: 'Architecture, construction, culinary arts, mechanics, carpentry — mastery through making.', actions: ['Invest in proper training or apprenticeship', 'Build a body of work to show', 'Charge what your skill is worth'] }
    ]
  },
  {
    id: 'cooking_curious',
    name: 'Cooking Curious',
    emoji: '❤️',
    color: '#FF85A1',
    tagline: 'Core skill: Active Contributor',
    summary: 'Core skill: Active Contributor. You are actively engaging with the community, sharing your experiences, and looking for ways to contribute. Your superpower is your willingness to jump in and get involved — you are the lifeblood of any community. Congratulations! You are a Research Community Member.',
    strengths: ['You actively engage and contribute to the community, helping to drive its growth and vibrancy.'],
    weaknesses: ['You may be navigating spaces and finding your voice to contribute and influence within the community.'],
    recommendation: 'Seek out places to get onboarded in the community, seek mentorship and opportunities to take on visible roles within the community.',
    bestPartner: 'Community Cook 🤝',
    paths: [
      { title: 'Community Contributor', icon: '🤝', desc: 'Deepen your involvement — take on visible roles, mentor others, and help shape community direction.', actions: ['Volunteer for a working group', 'Share your expertise in a workshop or blog post', 'Find a mentor in the community'] },
      { title: 'Community Organiser', icon: '📣', desc: 'Move from contributing to organising — plan events, coordinate groups, and help others find their way in.', actions: ['Propose and lead a community event', 'Create onboarding resources for newcomers', 'Build connections between different community groups'] },
      { title: 'Open Source Contributor', icon: '💻', desc: 'Bring your active energy to open source projects that align with your interests and expertise.', actions: ['Find a project that matches your skills', 'Start with small contributions', 'Connect with project maintainers'] }
    ]
  },
  {
    id: 'participant',
    name: 'not sure where to get started',
    emoji: '🤷🏽‍♂️',
    color: '#94a3b8',
    tagline: 'Core skill: Participant',
    summary: 'Core skill: Participant. You aren\'t sure where to start and hopefully interested in getting involved. You may be new to the field or just haven\'t found the right entry point yet. Your superpower is your new ideas and openness to learning — you have the potential to become a valuable contributor to the community. Congratulations! You are a Research Community Member.',
    strengths: ['You have the potential to become a valuable contributor to the community with your new ideas and openness to learning.'],
    weaknesses: ['You may feel overwhelmed by the many ways to get involved and unsure of where to start.'],
    recommendation: 'Start by listening and learning from the community — attend events, join discussions, and look for opportunities to contribute in small ways.',
    bestPartner: 'Cooking Curious ❤️',
    paths: [
      { title: 'Attend & Listen', icon: '👂', desc: 'Start as a participant — attend events, join discussions, and find ways to contribute in small ways.', actions: ['Attend a community event', 'Introduce yourself to someone new', 'Look for beginner-friendly contribution opportunities'] },
      { title: 'Find Your Entry Point', icon: '🚪', desc: 'Explore different areas of the community to discover where your interests and skills fit best.', actions: ['Try different types of community activities', 'Ask a community member how they got started', 'Identify one area you want to learn more about'] },
      { title: 'Build Your Network', icon: '🌐', desc: 'Connect with others who share your interests and can help guide you into deeper involvement.', actions: ['Join online community spaces', 'Follow community members doing work you admire', 'Share something small — a question, a resource, an idea'] }
    ]
  }
];
