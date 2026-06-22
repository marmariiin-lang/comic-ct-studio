import { CHARACTERS } from "./characters.js";
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
  return new Promise((resolve) => setTimeout(() => resolve(""), 800));
}

// ─── Mock Character Generation ────────────────────────────────────────────────
export async function generateCharacterMock(data) {
  await generateWithAI("mock wait");

  const baseChar =
    CHARACTERS.find((c) => c.id === data.characterId) || CHARACTERS[0];

  const appearanceDescription =
    `${baseChar.name} appears as a ${data.personalityTone.toLowerCase()} ` +
    `${data.form} with a ${data.genderStyle.toLowerCase()} styling and a ` +
    `${data.ageVibe.toLowerCase()} vibe, set in a ${data.setting}. ` +
    `Styled in a ${data.visualStyle}. ` +
    `Additional notes: ${data.appearanceNotes || "None"}.`;

  const imagePrompt =
    `A child-friendly illustration of a ${data.form}, ${data.genderStyle}, ` +
    `${data.ageVibe}, ${data.personalityTone} personality, in a ${data.setting}, ` +
    `${data.visualStyle}. Details: ${data.appearanceNotes || "no extra details"}. ` +
    `Soft colors, educational, age-appropriate for children 8-12. No text in image.`;

  return {
    name: baseChar.name,
    concept: baseChar.concept,
    appearanceDescription,
    personality: `${baseChar.personality} — specifically leaning towards ${data.personalityTone.toLowerCase()}`,
    catchphrase: baseChar.catchphrase,
    learningPurpose: baseChar.role,
    imagePrompt,
    teacherNote:
      "Teacher review required: Ensure this character design aligns with your classroom standards and is culturally appropriate for your students.",
  };
}
