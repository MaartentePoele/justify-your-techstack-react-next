import ThemeSwitch from "./components/ThemeSwitch";
import { PhoneIcon, EmailIcon, WebsiteIcon, LinkedinIcon, GithubIcon } from "./components/Icons";
import "./card.css";


export default function Page() {
  return (
    <article>
      <ThemeSwitch />
      <figure>
        <picture>
          <source
            type="image/avif"
            srcset="https://fdnd.directus.app/assets/ee9e43f9-4b86-4969-bbf9-b36a223ef9ca?format=avif&height=550"
          />
          <source
            type="image/webp"
            srcset="https://fdnd.directus.app/assets/ee9e43f9-4b86-4969-bbf9-b36a223ef9ca?format=webp&height=550"
          />
          <img
            src="https://fdnd.directus.app/assets/ee9e43f9-4b86-4969-bbf9-b36a223ef9ca?height=550"
            alt="Profielfoto van Maarten te Poele"
            fetchpriority="high"
            width="250"
            height="250"
          />
        </picture>
      </figure>

      <h1>Maarten te Poele</h1>
      <h2>Frontend Developer</h2>
      <ul>
        <li>
          <PhoneIcon />
          06-12345678
        </li>
        <li>
          <EmailIcon />
          maarten.te.poele@hva.nl
        </li>
        <li>
          <a
            href="https://github.com/MaartentePoele/i-love-web"
            target="_blank"
          >
            <WebsiteIcon />
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/maarten-te-poele-3a7a57332/"
            target="_blank"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/MaartentePoele" target="_blank">
            <GithubIcon />
            GitHub
          </a>
        </li>
      </ul>

      <div class="hover-wrapper">
        <div class="hover top-left"></div>
        <div class="hover top-center"></div>
        <div class="hover top-right"></div>
        <div class="hover middle-left"></div>
        <div class="hover middle-center"></div>
        <div class="hover middle-right"></div>
        <div class="hover bottom-left"></div>
        <div class="hover bottom-center"></div>
        <div class="hover bottom-right"></div>
      </div>
    </article>
  );
}
