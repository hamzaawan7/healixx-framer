export type BlogPost = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-your-health-metrics",
    date: "November 12, 2024",
    title: "Understanding Your Health Metrics",
    excerpt:
      "A deep dive into common health metrics like heart rate, sleep quality, and activity levels.",
    image: "https://framerusercontent.com/images/qpNsTU5cdXWV1tg8TaeK8Bwo0.png",
  },
  {
    id: 2,
    slug: "using-healix-to-manage-your-diet",
    date: "November 14, 2024",
    title: "Using Healix to Manage Your Diet",
    excerpt:
      "An in-depth look at essential wellness indicators such as hydration, stress levels, and energy balance.",
    image: "https://framerusercontent.com/images/yJLCW8fWMYxYPMrU9al9Tt8lnI.png",
  },
  {
    id: 3,
    slug: "your-wellness-goals-with-healix",
    date: "November 16, 2024",
    title: "Your Wellness Goals with Healix",
    excerpt:
      "Exploring key fitness metrics like calorie burn, workout intensity, and recovery rates.",
    image: "https://framerusercontent.com/images/ktXKPrHXemtm3s5BkFq2MEiNhc.png",
  },
  {
    id: 4,
    slug: "revolutionizing-healthcare-monitoring",
    date: "November 17, 2024",
    title: "Revolutionizing Healthcare\nMonitoring",
    excerpt:
      "A guide to tracking vital health factors like blood pressure, oxygen saturation, and cholesterol levels.",
    image: "https://framerusercontent.com/images/yuwzGZdjQwyhMRUDbo8tgYSmK7o.png",
  },
  {
    id: 5,
    slug: "health-monitoring-in-mental-wellness",
    date: "November 18, 2024",
    title: "Health Monitoring in Mental\nWellness",
    excerpt:
      "Getting expert advice on my health questions without leaving home has been incredibly.",
    image: "https://framerusercontent.com/images/dHJFhPWo213GPjQRR5RQhqKLtE.png",
  },
  {
    id: 6,
    slug: "regular-health-check-ups",
    date: "November 20, 2024",
    title: "Regular Health Check-Ups",
    excerpt:
      "Understanding core mental health indicators, including mood tracking, focus duration, and mindfulness levels.",
    image: "https://framerusercontent.com/images/PQ6SZCSla4XAH8asC7Jlo8dUvc.png",
  },
];
