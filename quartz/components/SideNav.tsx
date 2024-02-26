import { QuartzComponentConstructor } from "./types"
import style from "./styles/sideNav.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function SideNav() {
    return (
        <div style="text-align: right;">
            <div style="margin-bottom: 7px;">
                <a href="/about">About</a>
            </div>
            <div style="margin-bottom: 7px;">
                <a href="/essays">Essays</a>
            </div>
            <div style="margin-bottom: 7px;">
                <a href="/talahardin">Notes</a>
            </div>
            <div style="margin-bottom: 7px;">
                <a href="/walking">Walking</a>
            </div>
            <div style="margin-bottom: 7px;">
            <a href="/newsletter">Newsletter</a>
            </div>
        </div>
    )
  }

  SideNav.css = style
  return SideNav
}) satisfies QuartzComponentConstructor
