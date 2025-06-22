declare module '@/data/menu.json' {
  const data: {
    name: string;
    link: string;
    type?: string;
    contentKey?: string;
  }[];
  export default data;
} 