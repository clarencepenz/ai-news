export type SVGProps = React.SVGProps<SVGSVGElement>;

export type ArticlesProps = {
  slug: string;
  coverImage: string;
  title: string;
  alt: string;
  description: string;
  tag: string;
  created_at: string;
  is_featured: boolean;
};
