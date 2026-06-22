import { useState } from "react";
import "./App.css";
import { CharacterStudio } from "./components/CharacterStudio.jsx";
import { ComicLessonGenerator } from "./components/ComicLessonGenerator.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("character");

  return (
    <div className="app">
      {/* Guardrails Banner */}
      <div className="guardrails-banner" role="alert">
        <span className="guardrails-icon">⚠️</span>
        <p>
          <strong>Teacher review required:</strong> Please review all generated
          content before classroom use. Check that language is child-friendly,
          age-appropriate, non-scary, non-violent, free of copyrighted
          characters, aligned with your learning objective, and accurate for
          your classroom context.
        </p>
      </div>

      <main className="main-content">
        {/* Header */}
        <header className="app-header hero-with-characters">
          <div className="brand-row" aria-label="Comic CT Studio logo">
            <div className="brand-mark" aria-hidden="true">
              <span className="brand-dot brand-dot-one"></span>
              <span className="brand-dot brand-dot-two"></span>
              <span className="brand-dot brand-dot-three"></span>
              <span className="brand-spark">✦</span>
            </div>
            <div className="app-logo">Comic CT Studio</div>
          </div>

          {/* Decorative CSS-only character peeks. No image files are used here. */}
          <div className="peek-stage" aria-hidden="true">
            <div className="peek-character bugsy-peek">
              <span className="hair hair-1"></span>
              <span className="hair hair-2"></span>
              <span className="hair hair-3"></span>
              <span className="face">
                <span className="eye left"></span>
                <span className="eye right"></span>
                <span className="smile"></span>
              </span>
              <span className="hand"></span>
              <span className="label">Bugsy</span>
            </div>

            <div className="peek-character nova-peek">
              <span className="curl curl-1"></span>
              <span className="curl curl-2"></span>
              <span className="curl curl-3"></span>
              <span className="face">
                <span className="eye left"></span>
                <span className="eye right"></span>
                <span className="smile"></span>
              </span>
              <span className="star">★</span>
              <span className="label">Nova</span>
            </div>

            <div className="peek-character bot-peek">
              <span className="antenna"></span>
              <span className="bot-face">
                <span className="bot-eye left"></span>
                <span className="bot-eye right"></span>
                <span className="bot-mouth"></span>
              </span>
            </div>
          </div>

          <h1 className="app-tagline">
            Where computational thinking meets imagination.
          </h1>
          <p className="app-desc">
            A creative workspace for educators to craft characters and comic
            lessons that make learning click.
          </p>
        </header>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs" role="tablist">
            <button
              className={`tab-btn ${activeTab === "character" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("character")}
              role="tab"
              aria-selected={activeTab === "character"}
              data-testid="tab-character"
            >
              Character Studio
            </button>
            <button
              className={`tab-btn ${activeTab === "lesson" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("lesson")}
              role="tab"
              aria-selected={activeTab === "lesson"}
              data-testid="tab-lesson"
            >
              Comic Lesson Generator
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "character" && <CharacterStudio />}
          {activeTab === "lesson" && <ComicLessonGenerator />}
        </div>
      </main>
    </div>
  );
}

export default App;
