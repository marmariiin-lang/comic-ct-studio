import { useState } from "react";
import {
  CHARACTERS, FORMS, GENDER_STYLES, AGE_VIBES,
  VISUAL_STYLES, SETTINGS, PERSONALITY_TONES,
} from "./characters.js";
import { generateCharacterMock } from "./generateCharacter.js";
import { CharacterCard } from "./CharacterCard.jsx";

const DEFAULT_FORM = {
  characterId: CHARACTERS[0].id,
  form: FORMS[0],
  genderStyle: GENDER_STYLES[0],
  ageVibe: AGE_VIBES[0],
  visualStyle: VISUAL_STYLES[0],
  setting: SETTINGS[0],
  personalityTone: PERSONALITY_TONES[0],
  appearanceNotes: "",
};

export function CharacterStudio() {
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
    setLoading(true);
    try {
      const res = await generateCharacterMock(formState);
      setOutput(res);
      showToast("Character generated! Review your output below.");
    } catch {
      showToast("Generation failed. Please try again.");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(JSON.stringify(output, null, 2));
    showToast("Character data copied to clipboard.");
  };

  const handleSave = () => {
    if (!output) return;
    localStorage.setItem("saved_character", JSON.stringify(output));
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
          <h2 className="panel-title">Customize Character</h2>
          <p className="panel-subtitle">Select traits to craft the perfect CT buddy.</p>
        </div>

        <div className="form-stack">
          <div className="field">
            <label className="field-label">Base Character & Concept</label>
            <select
              className="field-select"
              value={formState.characterId}
              onChange={(e) => set("characterId", e.target.value)}
              data-testid="select-character"
            >
              {CHARACTERS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.concept}
                </option>
              ))}
            </select>
          </div>

          <div className="field-row">
            <div className="field">
              <label className="field-label">Form</label>
              <select className="field-select" value={formState.form} onChange={(e) => set("form", e.target.value)}>
                {FORMS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="field">
              <label className="field-label">Gender Style</label>
              <select className="field-select" value={formState.genderStyle} onChange={(e) => set("genderStyle", e.target.value)}>
                {GENDER_STYLES.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="field">
              <label className="field-label">Age Vibe</label>
              <select className="field-select" value={formState.ageVibe} onChange={(e) => set("ageVibe", e.target.value)}>
                {AGE_VIBES.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="field">
              <label className="field-label">Visual Style</label>
              <select className="field-select" value={formState.visualStyle} onChange={(e) => set("visualStyle", e.target.value)}>
                {VISUAL_STYLES.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label className="field-label">Setting</label>
            <select className="field-select" value={formState.setting} onChange={(e) => set("setting", e.target.value)}>
              {SETTINGS.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          <div className="field">
            <label className="field-label">Personality Tone</label>
            <select className="field-select" value={formState.personalityTone} onChange={(e) => set("personalityTone", e.target.value)}>
              {PERSONALITY_TONES.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          <div className="field">
            <label className="field-label">Appearance Notes (Optional)</label>
            <textarea
              className="field-textarea"
              placeholder="e.g. purple hair, fox detective, glasses..."
              value={formState.appearanceNotes}
              onChange={(e) => set("appearanceNotes", e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button
              className="btn-primary"
              onClick={handleGenerate}
              disabled={loading}
              data-testid="button-generate-character"
            >
              {loading ? "Generating..." : "Generate Character Version"}
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
          <CharacterCard data={output} />
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🎨</div>
            <p className="empty-title">No Character Generated Yet</p>
            <p className="empty-desc">Fill out the form and click generate to create a computational thinking buddy.</p>
          </div>
        )}
      </div>
    </div>
  );
}
