import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="navbar">
          <a href="/about">About</a>
          <span style="margin-right: 20px;"></span>
          <a href="/essays">Essays</a>
          <span style="margin-right: 20px;"></span>
          <a href="/talahardin">Notes</a>
          <span style="margin-right: 20px;"></span>
          <a href="/walking">Walking</a>
          <span style="margin-right: 20px;"></span>
          <a href="/newsletter">Newsletter</a>
        </div>
        <hr />
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
