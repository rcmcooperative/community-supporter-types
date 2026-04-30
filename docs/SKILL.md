---
name: rcm-quiz-generator
description: >-
    Generates a Research Community Manager (RCM) skills Q&A quiz from three source files:
    personas.rtf (persona definitions), persona-questions.csv (quiz questions), and RCMSkills.csv
    (skill categories). Produces an interactive HTML quiz, a quiz-options.csv export, and a
    persona-strengths-weaknesses.csv with one strength, one weakness, and one recommendation per persona.
user-invocable: true
---

# RCM Quiz Generator

Generates a fun, interactive Q&A quiz that helps people identify their Research Community Manager (RCM) skill persona.

## What this skill does

Given three source files in the current working directory, this skill will:

1. **Parse source files** — read personas from `personas.rtf`, questions from the first column of `persona-questions.csv`, and skill categories from `RCMSkills.csv`
2. **Generate 5 answer options per question** — one option per skill persona, grounded in real skills from `RCMSkills.csv` but written in a fun, recognisable, first-person style
3. **Produce `quiz.html`** — a self-contained interactive quiz with animated results, score bars, strengths/weaknesses, and a "Take It Again" button
4. **Produce `quiz-options.csv`** — all questions and options in a spreadsheet-friendly wide format
5. **Produce `persona-strengths-weaknesses.csv`** — one strength, one weakness, and one actionable recommendation per persona

## Source file formats

### `personas.rtf`
Contains persona names and their associated RCM skill. Expected personas:
- **Influencer Cook** → Communications
- **Community Cook** → Engagement
- **Head Chef** → Strategic Leadership
- **Hostess with the Mostest** → Programme Management / Accountability
- **Nerd Cook** → Technical Skills
- **Foodie** → Community Member / Participant (excluded from quiz options)

### `persona-questions.csv`
The first column contains the quiz questions (one per row, skipping the header row).
The remaining columns are labelled with persona/skill names and may be empty — the skill fills them in.
Expects exactly **8 questions**.

### `RCMSkills.csv`
A matrix of RCM skills across five columns:
- **Communications** — creating comms plans, content, social media, documentation
- **Engagement** — stakeholder mapping, onboarding, workshops, recognition, collaborative events
- **Strategic development** — horizon scanning, strategy, vision alignment, partnerships, funding
- **Technical skills** — open source, version control, reproducible research, infrastructure, data management
- **Programme/Project management** — timelines, risk registers, task prioritisation, governance, reporting

Use this content to inspire realistic, relatable answer options — not jargon, but recognisable behaviours.

## Output: quiz.html

A single self-contained HTML file with:

- **Header** — title "What's Your Community Management Flavour? 🍳" and subtitle
- **Progress bar** — shows current question out of 8
- **Question cards** — one per question, shown one at a time with fade animation
- **5 lettered options (A–E)** per question — clicking one highlights it in the persona's colour and enables the Next button
- **Back / Next navigation** — Back is disabled on Q1; Next button label becomes "See My Result 🎉" on Q8
- **Results screen** — shows:
  - Top persona hero card (coloured background, emoji, name, skill label, description paragraph)
  - Full flavour profile with animated score bars for all 5 personas sorted by score
  - Grid of all 5 persona mini-cards (winner highlighted, others dimmed)
  - "Take It Again" button that resets without page reload
- **Persona colour scheme**:
  - A Communications / Influencer Cook → `#FF6B6B` (coral red)
  - B Engagement / Community Cook → `#4ECDC4` (teal)
  - C Strategic / Head Chef → `#F7B731` (amber)
  - D Accountability / Hostess with the Mostest → `#26de81` (green)
  - E Technical / Nerd Cook → `#A55EEA` (purple)

The file must be fully self-contained (no external dependencies). CSS and JavaScript are inline.

## Output: quiz-options.csv

Wide-format CSV with these columns:

| Column | Content |
|--------|---------|
| `Question #` | 1–8 |
| `Question` | Full question text |
| `Option A - Communication (Influencer Cook 📢)` | Answer text |
| `Option B - Engagement (Community Cook 🤝)` | Answer text |
| `Option C - Strategic (Head Chef 🧠)` | Answer text |
| `Option D - Accountability (Hostess with the Mostest 📋)` | Answer text |
| `Option E - Technical (Nerd Cook 💻)` | Answer text |

## Answer option writing guidelines

Each answer option should:
- Be **first-person or directly relatable** (e.g. "You draft a crisp summary…", "We need a comms plan!")
- Include a relevant **emoji** at the end of the text
- Be **distinct** — each of the 5 options for a question should feel like different behavioural instincts, not variations of the same thing
- Draw on **real skills from RCMSkills.csv** but feel natural and human, not like a job description
- Be **15–25 words** — long enough to be recognisable, short enough to scan quickly

### Example options for Q1 "When you're at a conference with your peers..."
- A (Communications): "Live-posting highlights, writing threads, and making sure your followers don't miss a thing 📲"
- B (Engagement): "Playing matchmaker in the hallways — connecting people who absolutely need to know each other 🤝"
- C (Strategic): "Quietly scoping trends, spotting white spaces, and mentally drafting the next big strategy 🔭"
- D (Accountability): "Making sure everyone has the agenda, the Wi-Fi code, and knows where the good coffee is ☕"
- E (Technical): "Hunting down the speaker who mentioned reproducible workflows so you can geek out together 🤓"

## Output: persona-strengths-weaknesses.csv

One row per persona, with these columns:

| Column | Content |
|--------|---------|
| `Persona` | Persona name (e.g. Influencer Cook) |
| `Skill` | Associated RCM skill area |
| `Emoji` | Single emoji representing the persona |
| `Strength` | One sentence — the persona's single most defining professional strength |
| `Weakness` | One sentence — the persona's most common blind spot or risk area |
| `Recommendation` | One actionable sentence of growth advice that directly addresses the weakness |
| `Best Partner` | The persona name and emoji they complement most and should collaborate with |

### Tone guidelines for strengths, weaknesses and recommendations

- **Strength**: Positive, specific, grounded in RCMSkills.csv content. Written in second person ("You turn complex ideas…"). Celebratory but not generic.
- **Weakness**: Honest and direct but never harsh. Written in second person. Describes a recognisable pattern, not a character flaw ("You can focus so much on broadcasting that listening gets left behind").
- **Recommendation**: Actionable, warm, and constructive. One concrete behaviour change or habit. Written in second person ("Build regular community feedback loops…").

### Reference values (use these exactly)

| Persona | Skill | Emoji | Strength | Weakness | Recommendation | Best Partner |
|---------|-------|-------|----------|----------|----------------|--------------|
| Influencer Cook | Communications | 📢 | You turn complex ideas into compelling stories that reach and inspire the right audiences at the right time. | You can focus so much on broadcasting that listening and deeper community engagement gets left behind. | Build regular community feedback loops into your comms strategy — let the community shape the message. | Community Cook 🤝 |
| Community Cook | Engagement | 🤝 | You create spaces where people genuinely belong and spark connections that wouldn't happen without you. | Saying yes to everyone can stretch you too thin and tip you toward burnout before you notice it happening. | Set clear priorities for your engagement work and protect your energy — a sustainable you is a better community builder. | Head Chef 🧠 |
| Head Chef | Strategic Leadership | 🧠 | You see the big picture before anyone else and align people around a vision that gives the community direction. | Your high-altitude thinking can leave community members behind — execution and day-to-day needs can slip. | Stay grounded with regular direct touchpoints with your community and partner closely with someone who loves the detail. | Hostess with the Mostest 📋 |
| Hostess with the Mostest | Programme Management | 📋 | Nothing falls through the cracks on your watch — you bring the structure and reliability every community needs. | Rigid processes can stifle the spontaneity and creativity that makes community work come alive. | Build deliberate space for experimentation into your plans and remember to celebrate people not just deliverables. | Community Cook 🤝 |
| Nerd Cook | Technical Skills | 💻 | You build the open and reproducible infrastructure that gives your community a solid and trustworthy foundation. | Technical jargon and tool-first thinking can unintentionally exclude the very people you are trying to support. | Lead with why before how — partner with a strong communicator to make your technical work accessible to all. | Influencer Cook 📢 |

## Steps to execute this skill

1. Read all three source files from the current working directory
2. Extract the 8 questions from column 1 of `persona-questions.csv`
3. Extract skill descriptions from `RCMSkills.csv` to inform each persona's voice
4. For each question, write 5 fun, distinct answer options (one per persona A–E)
5. Build `quiz.html` as a fully self-contained interactive single-page app (see spec below)
6. Build `quiz-options.csv` in wide format with all questions and options
7. Build `persona-strengths-weaknesses.csv` using the reference values above
8. Open all three output files for the user to preview

## Persona result descriptions (use in results screen of quiz.html)

- **Influencer Cook (Communications):** "You craft stories, amplify voices, and make sure the right messages reach the right people at the right time. Your superpower is turning complex ideas into compelling content that moves communities to action."
- **Community Cook (Engagement):** "You bring people together, spark connections, and make sure everyone has a seat at the table. Your superpower is building belonging and creating spaces where communities genuinely thrive."
- **Head Chef (Strategic):** "You see the big picture, align teams with vision, and spot opportunities others miss. Your superpower is turning ambiguity into direction and complexity into coherent strategy."
- **Hostess with the Mostest (Programme Management):** "You keep everything running smoothly — timelines, budgets, action items — nothing slips through. Your superpower is turning good intentions into reliable, trackable outcomes."
- **Nerd Cook (Technical):** "You love the tools, the code, and the infrastructure that makes open research possible. Your superpower is embedding reproducible, ethical, and open practices into everything you touch."

## Results screen in quiz.html

The results screen must include (in order):

1. **Hero card** — persona emoji, name, skill label, and description paragraph on a coloured background
2. **Strength block** — labelled "Your Superpower 💪" — one sentence from `persona-strengths-weaknesses.csv`
3. **Weakness block** — labelled "Your Blind Spot 🔍" — one sentence from `persona-strengths-weaknesses.csv`
4. **Recommendation block** — labelled "Level Up 🚀" — one sentence from `persona-strengths-weaknesses.csv`
5. **Best partner callout** — labelled "Your Dream Collaborator 🤝" — persona name and emoji
6. **Flavour profile** — animated score bars for all 5 personas sorted by score
7. **Persona mini-card grid** — all 5 personas, winner highlighted
8. **"Take It Again" button** — resets quiz without page reload
