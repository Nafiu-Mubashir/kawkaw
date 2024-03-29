export interface CoursesCard {
  course: {
    image: string;
    authur: string;
    authorDetails?: string;
    title: string;
    amount: number;
    category: string;
    price: 'Free' | 'Paid';
    discount?: string;
    overview?: string
    description: string;
    members: number;
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
    author: string;
    authorImg?: string;
    authorTitle?: string;
    authurCont?: string;
    date: Date | string;
    category?: string;
    comment?: number;
    content?: string;
  }[]
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  registeredUsers: User[];
}

export interface Faqs {
 faqs:{
   title: string;
   content: string | null;
   header: "Purchases & Refunds" | "Making Courses";
 }[]
}

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string
}