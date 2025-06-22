declare module '@/data/thematics.json' {
  const data: {
    title: string;
    author: string;
    thematics: {
      title: string;
      subtitle?: string;
      description: string;
    }[];
    about: string;
  };
  export default data;
} 