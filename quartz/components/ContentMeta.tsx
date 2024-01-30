import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: string[] = []

      if (fileData.dates) {
        const createdDate = formatDate(getDate(cfg, fileData)!)
        const modifiedDate = formatDate(fileData.dates.modified) // Assuming fileData contains a 'dates' object with 'modified' property

        segments.push(`Created: ${createdDate} | Modified: ${modifiedDate}`)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { text: timeTaken, words: _words } = readingTime(text)
        segments.push(timeTaken)
      }

      return <p class={classNames(displayClass, "content-meta")}>{segments.join(" | ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
