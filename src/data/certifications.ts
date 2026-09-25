const asset = (file: string) => `${import.meta.env.BASE_URL}certificates/${file}`;
export const formatIssueDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  skills: string[];
  platform: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  certificateUrl?: string;
  verificationUrl?: string;
  credentialId?: string;

  featured?: boolean;
}

export const certifications: Certification[] = [
  // Internship Letter (Encanto Technologies)
  {
    id: "InternshipLetter",
    title: "Internship Letter",
    issuer: "Encanto Technologies LLP",
    issueDate: "2023-05-25",
    description: "This is to certify that Arun Kumawat has successfully completed a three-month internship program (25 May 2023 to 03 Sept 2023) at Encanto Technologies LLP, Indore, India. During the period of the internship program with us, he was found punctual, hardworking, and inquisitive. We wish her all the best in future endeavors.",
    skills: ["Flutter", "Dart", "UI Designing", "API Integration"],
    platform: "Encanto Technologies LLP",
    category: "Internship",
    tags: ["Internship", "Letter", "Flutter"],
    thumbnail: asset("images/InternshipLetter.png"),
    // certificateImage: asset("images/InternshipLetter.png"),
    credentialId: "PDF-2025-0002",
    featured: true,
  },

  {
    id: "JiraManaging",
    title: "Jira: Managing Custom Workflows",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-31",
    description: "Certificate of Completion for Managing Custom Workflows in Jira.",
    skills: ["Jira", "Workflow Management"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Jira", "Workflow"],
    thumbnail: asset("images/JiraManaging.png"),
    // certificateImage: asset("images/JiraManaging.png"),
    credentialId: "PDF-2025-0001",
  },
  {
    id: "ProgrammingFoundations",
    title: "Programming Foundations: Fundamentals",
    issuer: "LinkedIn Learning",
    issueDate: "2026-05-16",
    description: "Course completed by Arun Kumawat · 3 hours 11 minutes",
    skills: ["Programming", "Programming Foundations"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Programming"],
    thumbnail: asset("images/Programming Foundations Fundamentals.png"),
    // certificateImage: asset("images/Programming Foundations Fundamentals.png"),
    credentialId: "LIL-PFF-2026-0516",
  },
  {
    id: "SecureCodingJava",
    title: "Secure Coding in Java",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-07",
    description: "Course completed by Arun Kumawat · 1 hour 3 minutes",
    skills: ["Java"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "Security"],
    thumbnail: asset("images/Secure Coding in Java.png"),
    // certificateImage: asset("pdf/Secure Coding in Java.pdf"),
    credentialId: "LIL-SC-JAVA-2026-0807",
  },
  {
    id: "SQLPractice",
    title: "SQL Practice: Intermediate Queries",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-31",
    description: "Course completed by Arun Kumawat · 11 minutes",
    skills: ["Database Queries", "SQL"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "SQL", "Database"],
    thumbnail: asset("images/SQL Practice.png"),
    // certificateImage: asset("pdf/SQL Practice.pdf"),
    credentialId: "LIL-SQL-2026-0831",
  },
  {
    id: "NETBackend",
    title: "Back-End Web Development with .NET",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-23",
    description: "Course completed by Arun Kumawat · 59 minutes",
    skills: ["Back-End Web Development", ".NET Framework"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "NET", "Backend"],
    thumbnail: asset("images/Web Development with .NET.png"),
    // certificateImage: asset("pdf/Web Development with .NET.pdf"),
    credentialId: "LIL-NET-2026-0723",
  },
  {
    id: "BookSearchJava",
    title: "Creating a Book Search Engine from Scratch Using Java and GitHub Copilot",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-05",
    description: "Course completed by Arun Kumawat · 2 hours 11 minutes",
    skills: ["GitHub", "Spring Boot", "Artificial Intelligence (AI)"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "Spring Boot", "AI"],
    thumbnail: asset("images/Creating a Book Search Engine Using Java and GitHub Copilot.png"),
    credentialId: "LIL-BOOK-JAVA-2026-0805",
  },
  {
    id: "ExcelFinancial",
    title: "Excel: Financial Functions in Depth",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-07",
    description: "Course completed by Arun Kumawat · 2 hours 29 minutes",
    skills: ["Financial Analysis", "Microsoft Excel"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Excel", "Financial"],
    thumbnail: asset("images/Excel Financial Functions.png"),
    credentialId: "LIL-EXCEL-2026-0707",
  },
  {
    id: "FlutterEssential",
    title: "Flutter Essential Training: Build for Multiple Platforms",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-13",
    description: "Course completed by Arun Kumawat · 7 hours 57 minutes",
    skills: ["Flutter", "Cross-platform Development"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Flutter", "Mobile"],
    thumbnail: asset("images/Flutter Training.png"),
    credentialId: "LIL-FLUTTER-2026-0713",
  },
  {
    id: "ProductivityNano",
    title: "Nano Tips to Increase Productivity and Focus with Lillian Daniels",
    issuer: "LinkedIn Learning",
    issueDate: "2026-09-04",
    description: "Course completed by Arun Kumawat · 17 minutes",
    skills: ["Productivity Improvement"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Productivity"],
    thumbnail: asset("images/Increase Productivity and Focus.png"),
    credentialId: "LIL-PROD-2026-0904",
  },
  {
    id: "Java5Projects",
    title: "Intermediate Java: 5 Projects",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-12",
    description: "Course completed by Arun Kumawat · 3 hours 2 minutes",
    skills: ["Java"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "Projects"],
    thumbnail: asset("images/Java 5.png"),
    credentialId: "LIL-JAVA-5-2026-0812",
  },
  {
    id: "JavaAdvanced",
    title: "Java: Advanced Concepts for High-Performance Development",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-15",
    description: "Course completed by Arun Kumawat · 1 hour 57 minutes",
    skills: ["Java", "Java Software Development"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "Advanced"],
    thumbnail: asset("images/Java Advanced Concepts.png"),
    credentialId: "LIL-JAVA-ADV-2026-0815",
  },
  {
    id: "JavaFoundations",
    title: "Oracle Java Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-09",
    description: "Course completed by Arun Kumawat · 7 hours 17 minutes",
    skills: ["Programming Languages", "Java"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "Foundations"],
    thumbnail: asset("images/java Foundations.png"),
    credentialId: "LIL-JAVA-FOUND-2026-0709",
  },
  {
    id: "JavaOOP",
    title: "Java Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-25",
    description: "Course completed by Arun Kumawat · 2 hours 2 minutes",
    skills: ["Java", "Object-Oriented Programming (OOP)"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "OOP"],
    thumbnail: asset("images/Java OOP.png"),
    // certificateImage: asset("pdf/Java OOP.pdf"),
    credentialId: "LIL-JAVA-OOP-2026-0725",
  },
  {
    id: "JavaSE21",
    title: "Java SE 21 Developer (1Z0-830) Cert Prep",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-07",
    description: "Course completed by Arun Kumawat · 22 hours 16 minutes",
    skills: ["Java", "Java Development"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java", "Certification"],
    thumbnail: asset("images/Java SE 21.png"),
    credentialId: "LIL-JAVA-SE21-2026-0707",
  },
  {
    id: "LearningJava11",
    title: "Learning Java 11",
    issuer: "LinkedIn Learning",
    issueDate: "2026-07-20",
    description: "Course completed by Arun Kumawat · 2 hours 36 minutes",
    skills: ["Java"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Java"],
    thumbnail: asset("images/java.png"),
    credentialId: "LIL-JAVA-11-2026-0720",
  },
  {
    id: "JiraWorkflow",
    title: "Jira: Managing Custom Workflows",
    issuer: "LinkedIn Learning",
    issueDate: "2026-08-31",
    description: "Certificate of Completion for Managing Custom Workflows in Jira.",
    skills: ["Jira", "Workflow Management"],
    platform: "LinkedIn Learning",
    category: "PDF",
    tags: ["PDF", "Jira", "Workflow"],
    thumbnail: asset("images/Jira.png"),
    credentialId: "LIL-JIRA-2026-0831",
  },
];

export const certificationCategories = [
  "All",
  ...Array.from(new Set([...certifications.map((c) => c.category), ...certifications.map((c) => c.platform)])),
];

export const certificationPlatforms = Array.from(new Set(certifications.map((c) => c.platform)));

export const certificationSkills = Array.from(
  new Set(certifications.flatMap((c) => c.skills))
).sort((a, b) => a.localeCompare(b));

export const sortedCertifications = [...certifications].sort(
  (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
);
export const featuredCertification =
  certifications.find((c) => c.featured) ?? sortedCertifications[0];