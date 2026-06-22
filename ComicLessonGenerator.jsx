import { useState } from "react";
import {
  CHARACTERS, GRADE_LEVELS, CT_CONCEPTS, THEMES,
  LESSON_DURATIONS, STUDENT_LEVELS, OUTPUT_TYPES,
} from "./characters.js";
import { generateLessonMock } from "./generateLesson.js";
import { LessonCard } from "./LessonCard.jsx";

const DEFAULT_FORM = {
  gradeLevel: GRADE_LEVELS[3],
  ctConcept: CT_CONCEPTS[0],
  mainCharacter: CHARACTERS[0].name,
  topic: "",
  theme: THEMES[0],
  lessonDuration: LESSON_DURATIONS[1],
  studentLevel: STUDENT_LEVELS[1],
  outputType: OUTPUT_TYPES[2],
};

export function ComicLessonGenerator() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [formState, setFormState] = useState(DEFAULT_FORM);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const set = (key, val) => setFormState((s) => ({ ...s, [key]: val }));

  const handleGenerate = async () => {
    if (!formState.topic.trim()) {
      showToast("Please provide a topic before generating.");
      return;
    }
    setLoading(true);
    try {
      const res = await generateLessonMock(formState);
      setOutput(res);
      showToast("Lesson generated! Review your comic lesson below.");
    } catch {
      showToast("Generation failed. Please try again.");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(JSON.stringify(output, null, 2));
    showToast("Lesson data copied to clipboard.");
  };

  const handleSave = () => {
    if (!output) return;
    localStorage.setItem("saved_lesson", JSON.stringify(output));
    showToast("Saved to local storage.");
  };

  const handleReset = () => {
    setFormState(DEFAULT_FORM);
    setOutput(null);
  };

  return (
    <div className="studio-grid">
      {toast && <div className="toast">{toast}</div>}

      <div className="form-panel">
        <div>
          <h2 className="panel-title">Plan a Lesson</h2>
          <p className="panel-subtitle">Configure your comic story and lesson plan.</p>
        </div>

        <div className="form-stack">
          <div className="field">
            <label className="field-label">Topic <span className="required">*</span></label>
            <input
              className="field-input"
              type="text"
              placeholder="e.g. ecosystems, fractions, recycling..."
              value={formState.topic}
              onChange={(e) => set("topic", e.target.value)}
              data-testid="input-topic"
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label className="field-label">Grade Level</label>
              <select className="field-select" value={formState.gradeLevel} onChange={(e) => set("gradeLevel", e.target.value)}>
                {GRADE_LEVELS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="field">
              <label className="field-label">CT Concept</label>
              <select className="field-select" value={formState.ctConcept} onChange={(e) => set("ctConcept", e.target.value)}>
                {CT_CONCEPTS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label className="field-label">Main Character</label>
            <select className="field-select" value={formState.mainCharacter} onChange={(e) => set("mainCharacter", e.target.value)}>
              {CHARACTERS.map((c) => <option key={c.id} value={c.name}>{c.name} — {c.concept}</option>)}
            </select>
          </div>

          <div className="field">
            <label className="field-label">Theme</label>
            <select className="field-select" value={formState.theme} onChange={(e) => set("theme", e.target.value)}>
              {THEMES.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          <div className="field-row">
            <div className="field">
              <label className="field-label">Duration</label>
              <select className="field-select" value={formState.lessonDuration} onChange={(e) => set("lessonDuration", e.target.value)}>
                {LESSON_DURATIONS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="field">
              <label className="field-label">Student Level</label>
              <select className="field-select" value={formState.studentLevel} onChange={(e) => set("studentLevel", e.target.value)}>
                {STUDENT_LEVELS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label className="field-label">Output Type</label>
            <select className="field-select" value={formState.outputType} onChange={(e) => set("outputType", e.target.value)}>
              {OUTPUT_TYPES.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          <div className="form-actions">
            <button
              className="btn-primary"
              onClick={handleGenerate}
              disabled={loading}
              data-testid="button-generate-lesson"
            >
              {loading ? "Generating..." : "Generate Comic Lesson"}
            </button>
            <div className="btn-row">
              <button className="btn-outline" onClick={handleReset}>Reset</button>
              <button className="btn-outline" onClick={handleCopy} disabled={!output}>Copy Output</button>
              <button className="btn-outline" onClick={handleSave} disabled={!output}>Save Locally</button>
            </div>
          </div>
        </div>
      </div>

      <div className="output-panel">
        {output ? (
          <LessonCard data={output} />
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📖</div>
            <p className="empty-title">No Lesson Generated Yet</p>
            <p className="empty-desc">Provide a topic and click generate to create a comic script and lesson plan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
