import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n/i18next"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass, cfg }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
        <b>ᜇ The Long Walk</b> — A weekly newsletter on philosophy, walking, and writing: <a href="https://vinceimbat.com/newsletter">Subscribe here.</a>
        </p>
        <p>
          Follow all changes in the forest garden via <a href="https://vinceimbat.com/index.xml">RSS.</a>
        </p>
        <hr />
        <p>
          Explored and cultivated using <a href="https://obsidian.md/">Obsidian</a> and <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>, © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
