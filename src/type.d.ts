export interface CoursesCard {
  course: {
    image: string;
    name: string;
    title: string;
    price: string;
  }[]
}

export interface Events {
  events: {
    // uid: number;
    date: {
      day: string;
      month: string
    };
    time: {
      from: string;
      to: string;
    };
    title: string;
    location: string;
    content: string;
    image: string;
    category: string;
    home?: string;
  }[]
}

export interface News {
  news: {
    title: string;
    image: string;
    name: string;
    date: Date | string;
  }[]
}