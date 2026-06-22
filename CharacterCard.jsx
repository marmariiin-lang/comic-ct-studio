export function CharacterCard({ data }) {
  if (!data) return null;
  return (
    <div className="card" data-testid="card-character-output">
      <div className="card-header">
        <div className="card-header-row">
          <div>
            <h2 className="card-title">{data.name}</h2>
            <p className="card-subtitle">{data.concept}</p>
          </div>
          <span className="badge">CT Character</span>
        </div>
      </div>

      <div className="card-body">
        <div className="section-block">
          <h4 className="section-label">Appearance</h4>
          <p>{data.appearanceDescription}</p>
        </div>

        <div className="two-col">
          <div className="stack">
            <div>
              <h4 className="section-label">Personality</h4>
              <p>{data.personality}</p>
            </div>
            <div>
              <h4 className="section-label">Catchphrase</h4>
              <p className="catchphrase">"{data.catchphrase}"</p>
            </div>
          </div>
          <div>
            <h4 className="section-label">Classroom Role</h4>
            <p>{data.learningPurpose}</p>
          </div>
        </div>

        <div className="section-block accent-block">
          <h4 className="section-label accent-label">Image Prompt</h4>
          <p className="prompt-mono">{data.imagePrompt}</p>
        </div>

        <div className="teacher-note">
          <span>📝</span>
          <p><strong>Note:</strong> {data.teacherNote}</p>
        </div>
      </div>
    </div>
  );
}
