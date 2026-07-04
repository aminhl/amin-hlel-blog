import {BlogContentBlock, BlogHeadingBlock, BlogTableOfContentsItem} from '../models/Blog';
function isHeadingBlock(block: BlogContentBlock): block is BlogHeadingBlock {
  return block.type === 'heading';
}

export function buildTableOfContents(
  content: BlogContentBlock[],
): BlogTableOfContentsItem[] {
  return content.filter(isHeadingBlock).map((heading) => ({
    id: heading.id,
    label: heading.text,
    level: heading.level,
  }));
}
