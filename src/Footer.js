import "./styles.css";

const url = {
  Twitter: "https://twitter.com/_girlwhocodes",
  GitHub: "https://github.com/bharati-21",
  LinkedIn: "https://www.linkedin.com/in/bharati-subramanian-29734b152/",
  Dev: "https://dev.to/bharati21"
};

function Footer() {
  return (
    <footer class="footer container">
      <ul>
        <li>
          <a href={url.GitHub} target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href={url.Twitter} target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href={url.LinkedIn} target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={url.Dev} target="_blank">
            Dev Blogs
          </a>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
