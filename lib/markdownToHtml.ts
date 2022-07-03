import { remark } from 'remark'
import remarkHtml from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkHtml,{sanitize:false}).process(markdown)
  return result.toString()
}
