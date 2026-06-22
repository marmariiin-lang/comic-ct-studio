export function LessonCard({ data }) {
  if (!data) return null;
  return (
    <div className="card" data-testid="card-lesson-output">
      <div className="card-header card-header-accent">
        <h2 className="card-title">{data.title}</h2>
        <p className="card-subtitle-dark">{data.objective}</p>
      </div>

      <div className="card-body">
        <div>
          <h4 className="section-label">Summary</h4>
          <p className="summary-text">{data.summary}</p>
        </div>

        <div className="two-col">
          <div className="stack">
            <div>
              <h4 className="section-label">Comic Script</h4>
              <div className="panel-list">
                {data.script.map((panel, i) => (
                  <div key={i} className="panel-item">{panel}</div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="section-label">Student Activity</h4>
              <p className="activity-box">{data.studentActivity}</p>
            </div>
          </div>

          <div className="stack">
            <div>
              <h4 className="section-label">Lesson Plan</h4>
              <ul className="lesson-plan-list">
                <li><strong>Warm-up:</strong> {data.lessonPlan.warmUp}</li>
                <li><strong>Activity:</strong> {data.lessonPlan.mainActivity}</li>
                <li><strong>Wrap-up:</strong> {data.lessonPlan.wrapUp}</li>
              </ul>
            </div>
            <div>
              <h4 className="section-label">Vocabulary</h4>
              <div className="vocab-chips">
                {data.vocabulary.map((v, i) => (
                  <span key={i} className="vocab-chip">{v}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="section-label">Reflection Questions</h4>
              <ul className="reflection-list">
                {data.reflectionQuestions.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="checklist-section">
          <h4 className="section-label">Assessment Checklist</h4>
          <div className="checklist">
            {data.assessmentChecklist.map((item, i) => (
              <label key={i} className="checklist-item">
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="teacher-note">
          <span>📝</span>
          <p><strong>Note:</strong> {data.teacherNote}</p>
        </div>
      </div>
    </div>
  );
}
