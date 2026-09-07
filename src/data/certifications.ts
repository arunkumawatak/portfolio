/**
 * Certifications data source.
 *
 * To add a new certificate, append another object to the `certifications` array.
 * Images live in `public/certificates/` and are referenced through BASE_URL so
 * they keep working under the GitHub Pages sub-path.
 */

const asset = (file: string) => `${import.meta.env.BASE_URL}certificates/${file}`;

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string; // ISO date — "2025-03-14"
  description: string;
  skills: string[];
  platform: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  certificateImage?: string;
  certificateUrl?: string;
  verificationUrl?: string;
  credentialId?: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "flutter-advanced",
    title: "Advanced Flutter Development",
    issuer: "LinkedIn Learning",
    issueDate: "2025-02-18",
    description:
      "Deep dive into advanced Flutter patterns — custom render objects, performance profiling, animation pipelines and production-grade app architecture.",
    skills: ["Flutter", "Dart", "Animations", "Performance", "Clean Architecture"],
    platform: "LinkedIn Learning",
    category: "Flutter",
    tags: ["Mobile", "Flutter", "Architecture"],
    thumbnail: asset("flutter-advanced.png"),
    certificateImage: asset("flutter-advanced.png"),
    verificationUrl: "https://www.linkedin.com/learning/",
    credentialId: "LIL-FLT-2025-0218",
    featured: true,
  },
  {
    id: "firebase-essentials",
    title: "Firebase for Mobile Applications",
    issuer: "Google",
    issueDate: "2024-11-05",
    description:
      "Building realtime, secure and scalable mobile backends with Firestore, Authentication, Cloud Functions and Cloud Messaging.",
    skills: ["Firebase", "Firestore", "Cloud Functions", "Authentication", "Push Notifications"],
    platform: "Google",
    category: "Cloud",
    tags: ["Backend", "Cloud", "Firebase"],
    thumbnail: asset("firebase-essentials.png"),
    certificateImage: asset("firebase-essentials.png"),
    verificationUrl: "https://developers.google.com/certification",
    credentialId: "GGL-FB-2024-1105",
  },
  {
    id: "state-management",
    title: "State Management with Riverpod & Bloc",
    issuer: "LinkedIn Learning",
    issueDate: "2024-06-22",
    description:
      "Comparing and applying reactive state management strategies in large Flutter codebases, with testing and dependency injection patterns.",
    skills: ["Riverpod", "Bloc", "Dart", "Testing", "Dependency Injection"],
    platform: "LinkedIn Learning",
    category: "Flutter",
    tags: ["Mobile", "Architecture", "Flutter"],
    thumbnail: asset("state-management.png"),
    certificateImage: asset("state-management.png"),
    verificationUrl: "https://www.linkedin.com/learning/",
    credentialId: "LIL-STM-2024-0622",
  },
  {
    id: "rest-api-design",
    title: "REST API Design & Integration",
    issuer: "Microsoft",
    issueDate: "2024-03-12",
    description:
      "Designing versioned REST APIs, handling authentication flows, pagination, caching and resilient client-side integration.",
    skills: ["REST API", "Node.js", "JSON", "Authentication", "Caching"],
    platform: "Microsoft",
    category: "Backend",
    tags: ["Backend", "API", "Integration"],
    thumbnail: asset("rest-api-design.png"),
    certificateImage: asset("rest-api-design.png"),
    verificationUrl: "https://learn.microsoft.com/",
    credentialId: "MS-API-2024-0312",
  },
  {
    id: "react-typescript",
    title: "Modern React with TypeScript",
    issuer: "LinkedIn Learning",
    issueDate: "2025-05-09",
    description:
      "Component architecture, hooks, type-safe data flow and build tooling for production React applications.",
    skills: ["React", "TypeScript", "Vite", "Hooks", "Tailwind CSS"],
    platform: "LinkedIn Learning",
    category: "Frontend",
    tags: ["Frontend", "Web", "React"],
    thumbnail: asset("react-typescript.png"),
    certificateImage: asset("react-typescript.png"),
    verificationUrl: "https://www.linkedin.com/learning/",
    credentialId: "LIL-RTS-2025-0509",
  },
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals for Developers",
    issuer: "Microsoft",
    issueDate: "2025-08-27",
    description:
      "Practical machine learning and generative AI concepts — prompt engineering, embeddings and integrating model APIs into real products.",
    skills: ["AI", "Machine Learning", "Prompt Engineering", "APIs"],
    platform: "Microsoft",
    category: "AI",
    tags: ["AI", "Cloud", "Product"],
    thumbnail: asset("ai-fundamentals.png"),
    certificateImage: asset("ai-fundamentals.png"),
    verificationUrl: "https://learn.microsoft.com/",
    credentialId: "MS-AI-2025-0827",
  },
  {
    id: "git-github",
    title: "Git & GitHub Professional Workflows",
    issuer: "LinkedIn Learning",
    issueDate: "2023-09-14",
    description:
      "Branching strategies, code review culture, rebasing, CI pipelines and release management for team projects.",
    skills: ["Git", "GitHub", "CI/CD", "Code Review"],
    platform: "LinkedIn Learning",
    category: "Development",
    tags: ["Tooling", "Workflow", "Development"],
    thumbnail: asset("git-github.png"),
    certificateImage: asset("git-github.png"),
    verificationUrl: "https://www.linkedin.com/learning/",
    credentialId: "LIL-GIT-2023-0914",
  },
  {
    id: "dart-programming",
    title: "Dart Programming Language",
    issuer: "Google",
    issueDate: "2023-04-02",
    description:
      "Language fundamentals through to async programming, isolates, null safety and idiomatic Dart for large applications.",
    skills: ["Dart", "Async", "Null Safety", "Programming"],
    platform: "Google",
    category: "Programming",
    tags: ["Programming", "Language", "Mobile"],
    thumbnail: asset("dart-programming.png"),
    certificateImage: asset("dart-programming.png"),
    verificationUrl: "https://dart.dev/",
    credentialId: "GGL-DART-2023-0402",
  },
];

export const certificationCategories = [
  "All",
  ...Array.from(new Set(certifications.map((c) => c.category))),
];

export const certificationPlatforms = Array.from(
  new Set(certifications.map((c) => c.platform)),
);

export const certificationSkills = Array.from(
  new Set(certifications.flatMap((c) => c.skills)),
).sort((a, b) => a.localeCompare(b));

export const formatIssueDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

export const sortedCertifications = [...certifications].sort(
  (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime(),
);

export const featuredCertification =
  certifications.find((c) => c.featured) ?? sortedCertifications[0];
  