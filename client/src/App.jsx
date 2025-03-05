import { useState } from "react";
import "./App.css";

function App() {
  const [isWonkyLayout, setIsWonkyLayout] = useState(false);

  const handleLogInfo = () => {
    console.log("This is a regular console log message for debugging");
  };

  const handleLogWarning = () => {
    console.warn(
      "This is a warning message that will be highlighted in yellow"
    );
  };

  const handleLogError = () => {
    console.error("This is an error message that will be highlighted in red");
  };

  const handleLogEverything = () => {
    console.log("🚀 Application initialized");
    console.log("📦 Loading resources...");
    console.warn("⚠️ Some assets might be missing");
    console.log("🔍 User session started");
    console.error("❌ Failed to load user preferences");
    console.warn("⚠️ Using default settings instead");
    console.log("🔄 Syncing data with server");
    console.error("❌ Network connection unstable");
    console.warn("⚠️ Retrying connection in 5 seconds");
    console.log("✅ Connection established successfully");
  };

  const toggleLayout = () => {
    setIsWonkyLayout(!isWonkyLayout);
    console.log(`Layout is now ${!isWonkyLayout ? "wonky" : "good"}`);
  };

  return (
    <>
      <header>
        <h1>MCP Made Simple</h1>
        <h2 className="subtitle">Lesson 2: Browser Tools</h2>

        <div className="author-section">
          <p className="created-by">Created by:</p>
          <div className="social-links">
            <a
              href="https://www.x.com/chongdashu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <svg
                className="twitter-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
              @chongdashu
            </a>
            <span className="footer-divider">•</span>
            <a
              href="https://www.youtube.com/@AIOriented"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <svg
                className="youtube-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
              @AIOriented
            </a>
          </div>
          <div className="more-tutorials">
            <p>Follow for more content on AI vibe coding related content</p>
          </div>
        </div>
      </header>

      <div className="debug-section">
        <h2>Debugging Demo</h2>
        <div className="layout-status">
          <span
            className={`status-indicator ${isWonkyLayout ? "wonky" : "good"}`}
          >
            Layout Status: {isWonkyLayout ? "WONKY" : "GOOD"}
          </span>
        </div>
        <button
          className={`layout-toggle ${isWonkyLayout ? "wonky" : "good"}`}
          onClick={toggleLayout}
        >
          {isWonkyLayout ? "Fix Layout" : "Make Layout Wonky"}
        </button>
        <div className={`debug-buttons ${isWonkyLayout ? "wonky" : "good"}`}>
          <button className="log-button info" onClick={handleLogInfo}>
            Log Info
          </button>
          <button className="log-button warning" onClick={handleLogWarning}>
            Log Warning
          </button>
          <button className="log-button error" onClick={handleLogError}>
            Log Error
          </button>
          <button className="log-button stream" onClick={handleLogEverything}>
            Log Everything
          </button>
        </div>
        <p>
          Click the buttons above and open your browser's console (F12) to see
          the different log types
        </p>
      </div>
    </>
  );
}

export default App;
