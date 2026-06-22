// ─── CT Characters ────────────────────────────────────────────────────────────
// Add new characters here. The learning role (concept, catchphrase, role) stays
// fixed; only appearance options are customizable by teachers.
export const CHARACTERS = [
  {
    id: "patter",
    name: "Patter",
    concept: "Pattern Recognition",
    personality: "curious, observant, notices similarities and repeated things",
    catchphrase: "I've seen this before!",
    role: "helps students find patterns, similarities, repetition, and clues",
  },
  {
    id: "deco",
    name: "Deco",
    concept: "Decomposition",
    personality: "organized, helpful, calm",
    catchphrase: "Let's split it up!",
    role: "helps students break big problems into smaller parts",
  },
  {
    id: "algo",
    name: "Algo",
    concept: "Algorithms",
    personality: "planner, guide, step-by-step thinker",
    catchphrase: "Step by step!",
    role: "helps students create and follow ordered steps",
  },
  {
    id: "bugsy",
    name: "Bugsy",
    concept: "Debugging",
    personality: "playful, persistent, learns from mistakes",
    catchphrase: "Oops! Let's try again!",
    role: "helps students find errors, test ideas, and improve solutions",
  },
  {
    id: "nova",
    name: "Nova",
    concept: "Creativity and AI",
    personality: "imaginative, inventive, optimistic",
    catchphrase: "What if we try something new?",
    role: "helps students create new ideas and think about responsible AI use",
  },
  {
    id: "gisty",
    name: "Gisty",
    concept: "Abstraction",
    personality: "thoughtful, calm, sees the big picture",
    catchphrase: "What really matters?",
    role: "helps students focus on important details and ignore unnecessary ones",
  },
];

// ─── Character Studio Options ─────────────────────────────────────────────────
export const FORMS = ["Human", "Animal", "Robot", "Fantasy Creature"];
export const GENDER_STYLES = ["Girl", "Boy", "Neutral", "Unspecified"];
export const AGE_VIBES = [
  "Younger child",
  "Same age as students",
  "Slightly older helper",
];
export const VISUAL_STYLES = [
  "Soft watercolor storybook",
  "Comic style",
  "Classroom style",
  "Magical style",
  "Sci-fi style",
];
export const SETTINGS = [
  "Classroom",
  "Forest",
  "Space",
  "Lab",
  "Village",
  "Museum",
  "Persian-inspired magical world",
];
export const PERSONALITY_TONES = [
  "Gentle",
  "Funny",
  "Adventurous",
  "Calm",
  "Energetic",
  "Nerdy",
];

// ─── Comic Lesson Generator Options ───────────────────────────────────────────
export const GRADE_LEVELS = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
export const CT_CONCEPTS = [
  "Pattern Recognition",
  "Decomposition",
  "Algorithms",
  "Debugging",
  "Abstraction",
  "Creativity and AI",
];
export const THEMES = [
  "Mystery",
  "Adventure",
  "Classroom problem",
  "Magical journey",
  "Science lab",
  "Community problem",
];
export const LESSON_DURATIONS = [
  "20 minutes",
  "30 minutes",
  "45 minutes",
  "60 minutes",
];
export const STUDENT_LEVELS = ["Beginner", "Intermediate", "Advanced"];
export const OUTPUT_TYPES = [
  "Comic script only",
  "Lesson plan only",
  "Comic + lesson plan",
];
