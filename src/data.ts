export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    category: string;
  }
  
  export const initialEvents: Event[] = [
    {
      id: 1,
      title: "Interfaith Prayer",
      date: "2025-04-10",
      location: "Community Center",
      description: "A gathering for people of all faiths.",
      category: "Religious",
    },
    {
      id: 2,
      title: "Charity Run",
      date: "2025-04-15",
      location: "City Park",
      description: "Run for a cause!",
      category: "Charity",
    },
  ];