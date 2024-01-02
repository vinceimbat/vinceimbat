import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      Instagram: "https://www.instagram.com/vinceimbat",
      Threads: "https://www.threads.net/@vinceimbat",
      Mastodon: "https://mstdn.social/@vinceimbat",
      GitHub: "https://github.com/vinceimbat",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Essays",
        limit: 4,
        filter: (f) =>
          f.slug!.startsWith("essays/") && f.slug! !== "essays/index" && !f.frontmatter?.noindex,
        linkToMore: "essays/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Thoughts",
        limit: 2,
        filter: (f) => f.slug!.startsWith("thoughts/"),
        linkToMore: "thoughts/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
  ],
  right: [],
}
