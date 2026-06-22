import { CHARACTERS } from "../data/characters.js";

// ─── AI Stub ──────────────────────────────────────────────────────────────────
// TODO: Replace this function with a real AI API call.
// Example using OpenAI:
//   import OpenAI from "openai";
//   const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
//   export async function generateWithAI(prompt) {
//     const res = await client.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{ role: "user", content: prompt }],
//     });
//     return res.choices[0].message.content;
//   }
export async function generateWithAI(prompt) {
  // Simulated delay to mimic an API call
  return new Promise((resolve) => setTimeout(() => resolve(""), 1000));
}

// ─── Mock Lesson Generation ───────────────────────────────────────────────────
export async function generateLessonMock(data) {
  await generateWithAI("mock wait");

  const baseChar =
    CHARACTERS.find((c) => c.name === data.mainCharacter) || CHARACTERS[0];
  const topic = data.topic || "a mysterious problem";
  const durationMins = parseInt(data.lessonDuration) || 30;
  const activityMins = Math.max(durationMins - 15, 10);

  return {
    title: `${baseChar.name} and the ${data.theme} of ${topic}`,
    objective: `Students in grade ${data.gradeLevel} will learn about ${data.ctConcept} through the engaging topic of ${topic}, guided by ${baseChar.name}.`,
    summary: `A ${data.lessonDuration} ${data.studentLevel.toLowerCase()}-level lesson where ${baseChar.name} guides students through a ${data.theme.toLowerCase()} involving ${topic}. Students will practice ${data.ctConcept} to reach a satisfying solution.`,
    script: [
      `Panel 1: ${baseChar.name} is exploring ${topic} and discovers something puzzling. "${baseChar.catchphrase}" says ${baseChar.name}.`,
      `Panel 2: A ${data.theme.toLowerCase()} begins — something about ${topic} is not quite right! ${baseChar.name} looks determined.`,
      `Panel 3: ${baseChar.name} says, "Let's use ${data.ctConcept} to figure this out!" and starts working through the problem carefully.`,
      `Panel 4: Step by step, ${baseChar.name} applies ${data.ctConcept}. The solution begins to take shape, and ${topic} starts to make sense.`,
      `Panel 5: The challenge is solved! ${baseChar.name} celebrates with the class: "We did it! ${data.ctConcept} saved the day!"`,
    ],
    lessonPlan: {
      warmUp: `5 min: Ask students what they already know about ${topic}. Show one real-world example connecting ${topic} to ${data.ctConcept}.`,
      mainActivity: `${activityMins} min: Read the comic together. Students then complete the worksheet connecting ${data.ctConcept} to examples from ${topic} in their own lives.`,
      wrapUp: `10 min: Group discussion — how did ${baseChar.name} use ${data.ctConcept}? What other challenges could be solved this way?`,
    },
    studentActivity: `Draw your own comic panel (3 boxes minimum) showing how ${baseChar.name} might use ${data.ctConcept} to solve a different problem related to ${topic}. Add speech bubbles!`,
    vocabulary: [
      data.ctConcept.split(" ")[0],
      "Pattern",
      topic.split(" ")[0] || "Concept",
      "Solution",
      "Challenge",
    ],
    reflectionQuestions: [
      `How did ${baseChar.name} use ${data.ctConcept} to solve the problem in the story?`,
      `Can you think of a situation in your own life where ${data.ctConcept} would help?`,
      `What was the most important step ${baseChar.name} took? Why?`,
    ],
    assessmentChecklist: [
      `Student can explain what ${data.ctConcept} means in their own words.`,
      `Student can give an example of ${data.ctConcept} connected to ${topic}.`,
      `Student completed the comic panel activity with clear reasoning.`,
      `Student participated in the group reflection discussion.`,
    ],
    teacherNote:
      "Teacher review required: Adjust vocabulary difficulty, timing, and examples based on your specific class. Check that all content is accurate for your curriculum context.",
  };
}
