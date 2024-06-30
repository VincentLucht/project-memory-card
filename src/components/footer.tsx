function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          Memory game as part of{' '}
          <a href="https://www.theodinproject.com" id="odin-link">
            <span id="odin">The Odin Project</span>{' '}
          </a>
          curriculum
        </div>
        <a href="https://github.com/VincentLucht/" id="github-link">
          <img src="./github.png" alt="github logo" id="github" />
        </a>
      </div>
    </footer>
  );
}

export { Footer };
