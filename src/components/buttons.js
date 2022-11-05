const ButtonEmail = () => {
  return (
    <a
      href="mailto:rioaldierwanto@email.com"
      target="_blank"
      rel="noreferrer"
      className="text-decoration-none">
      <div className="btn-email">
        Lest Talk
        <img src="/image/mug-coffe-icon.svg" alt="btn-email" />
      </div>
    </a>
  );
};

const ButtonDownload = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1GwU2cf74WQ2nRZX5lsxeumKtsI9p-FBX/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
      className="text-decoration-none">
      <div className="btn-download">
        Download CV
        <img src="/image/download.svg" alt="btn-download" />
      </div>
    </a>
  );
};

export { ButtonEmail, ButtonDownload };
