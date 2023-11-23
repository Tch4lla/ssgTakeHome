export type BlockType =
  | 'PARAGRAPH'
  | 'HEADER'
  | 'BLOCKQUOTE'
  | 'IMAGE'
  | 'CAROUSEL';

export type Block = {
  id: string;
  type: BlockType;
  reactNodeContent: React.ReactNode;
  stringContent: string;
  stringArrayContent: string[];
};

export type Props = {
  id: string;
  slug: string;
  title: string;
  description: string;
  hero_image: string;
  blocks: Block[];
};
