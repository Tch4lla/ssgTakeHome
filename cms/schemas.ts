import { faker } from "@faker-js/faker";

type BlockType = "PARAGRAPH" | "HEADER" | "BLOCKQUOTE" | "IMAGE" | "CAROUSEL";

class Block {
  id: string;
  type: BlockType;
  reactNodeContent: React.ReactNode;
  stringContent: string;
  stringArrayContent: string[];

  constructor(type: BlockType) {
    this.id = faker.string.uuid();
    this.type = type;
    if (type === "PARAGRAPH") {
      this.reactNodeContent = faker.lorem.paragraphs();
    } else if (type === "HEADER") {
      this.reactNodeContent = faker.lorem.sentence();
    } else if (type === "BLOCKQUOTE") {
      this.stringContent = faker.lorem.paragraph();
    } else if (type === "IMAGE") {
      this.stringContent = "https://cataas.com/cat";
    } else if (type === "CAROUSEL") {
      const carouselData = faker.helpers.multiple(faker.image.url, { count: 10 })
      this.stringArrayContent = carouselData
    } else {
      throw new Error('type not found');
    }
  }
}

export class BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  hero_image: string;
  blocks: Block[];

  constructor(slug: string) {
    this.id = faker.string.uuid();
    this.slug = slug;
    this.title = faker.lorem.sentence();
    this.description = faker.lorem.paragraph();
    this.hero_image = faker.image.urlLoremFlickr();
    this.blocks = [
      new Block("PARAGRAPH"),
      new Block("CAROUSEL"),
      ...new Array(faker.number.int({ min: 5, max: 20 }))
        .fill(null)
        .map(
          () =>
            new Block(
              faker.helpers.arrayElement([
                "PARAGRAPH",
                "HEADER",
                "BLOCKQUOTE",
                "IMAGE",
              ])
            )
        ),
    ];
  }
}
