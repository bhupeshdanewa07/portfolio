export interface PersonalInfo {
  name: string;
  headline: string;
  subHeadline: string;
  coreDomainPills: string[];
  location: string;
  phone: {
    display: string;
    href: string;
  };
  email: {
    display: string;
    href: string;
  };
  linkedin: string;
  github: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  levelTag: string;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  dates: string;
  location: string;
  tag: string;
  bullets: string[];
}

export interface PublicationItem {
  title: string;
  venue: string;
  linkLabel?: string;
  linkUrl?: string;
}

export interface ProjectItem {
  title: string;
  categoryTag: string;
  linkLabel: string;
  linkUrl: string;
  metricBadges: string[];
  techTags: string[];
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  linkLabel: string;
  linkUrl: string;
  tag: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  publications: PublicationItem[];
  projects: ProjectItem[];
  skills: {
    languages: string[];
    developerTools: string[];
    technologiesAndFrameworks: string[];
  };
  certifications: CertificationItem[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Bhupesh Danewa",
    headline: "AI Engineer & Data Scientist (M.Tech in Artificial Intelligence)",
    subHeadline: "Architecting Agentic RAG Systems, Predictive ML Pipelines, and High-Performance AI Solutions.",
    coreDomainPills: [
      "Programming",
      "Machine Learning",
      "Deep Learning",
      "Agentic RAG & LLMs",
      "Autonomous Driving (ADAS) Simulation",
      "Data Science",
    ],
    location: "Bikaner, Rajasthan",
    phone: {
      display: "+91-9468601702",
      href: "tel:+919468601702",
    },
    email: {
      display: "prince.danewa@gmail.com",
      href: "mailto:prince.danewa@gmail.com",
    },
    linkedin: "https://linkedin.com/in/bhupesh-danewa",
    github: "https://github.com/bhupeshdanewa07",
  },
  education: [
    {
      institution: "Maulana Azad National Institute of Technology",
      degree: "M. Tech in Artificial Intelligence",
      dates: "2023 – 2025",
      location: "Bhopal, Madhya Pradesh",
      levelTag: "Postgraduate",
    },
    {
      institution: "Govt. Engineering College",
      degree: "B.Tech in Civil Engineering",
      dates: "2017 – 2021",
      location: "Bikaner, Rajasthan",
      levelTag: "Undergraduate",
    },
  ],
  experience: [
    {
      organization: "National Institute of Electronics & Information Technology",
      role: "Faculty",
      dates: "Sep 2025 – Present",
      location: "Bikaner",
      tag: "Current Appointment",
      bullets: [
        "Delivered instructions in Data Structures, Algorithms, Python, Web Design, AI Foundations, and Machine Learning at NIELIT Bikaner, ensuring curriculum alignment with industry standards and competency-based learning outcomes.",
        "Instructed a cohort of 50+ students in Data Structures and AI, achieving a 95% curriculum completion rate and consistently receiving positive feedback for hands-on lab sessions.",
      ],
    },
    {
      organization: "KPIT Technologies",
      role: "Software Engineering Intern",
      dates: "Oct 2024 – May 2025",
      location: "Pune",
      tag: "Automotive Software",
      bullets: [
        "Built a simulation-based AD Learning app to demonstrate ADAS capabilities like Highway Pilot (HP) and Lane Keep Assist (LKA). Leveraged Figma for prototyping and Java/XML for robust application architecture.",
        "Built a RAG-based backend service using FastAPI and Vector Embeddings to index technical documentation, reducing query resolution time by 30% and enhancing the learning experience for AD (Autonomous Driving) concepts.",
        "Engineered and integrated a chatbot using Retrofit for seamless API communication and FastAPI for backend interaction, enhancing user experience with AI-driven scenario-based dialogue.",
      ],
    },
  ],
  publications: [
    {
      title: "Smart Yield: Machine Learning-Based Prediction Framework for Optimizing Biodiesel Production.",
      venue: "Paper presented at ICCCNT 2025, IIT Indore.",
      linkLabel: "Abstract & Code",
      linkUrl: "https://github.com/bhupeshdanewa07/biodiesel-yield-prediction",
    },
  ],
  projects: [
    {
      title: "Predictive Modeling Using Custom Dataset and Ensemble ML",
      categoryTag: "ML & Research",
      linkLabel: "GitHub",
      linkUrl: "https://github.com/bhupeshdanewa07",
      metricBadges: ["3,021-Row Custom Dataset", "Published Research"],
      techTags: ["XGBoost", "Random Forest", "Gradient Boosting", "Data Cleaning", "Streamlit"],
      bullets: [
        "Compiled a custom dataset of 3021 rows from open literature and developed a complete ML regression pipeline using XGBoost, Random Forest, and Gradient Boosting with preprocessing, training, validation, and hyperparameter tuning; also authored a research paper based on this work.",
        "Built a data cleaning workflow with imputation, outlier removal, multicollinearity reduction, and feature scaling.",
        "Deployed a Streamlit web app to visualize predictions, evaluation metrics, and model insights interactively.",
      ],
    },
    {
      title: "Agentic RAG System",
      categoryTag: "Autonomous AI",
      linkLabel: "GitHub",
      linkUrl: "https://github.com/bhupeshdanewa07",
      metricBadges: ["70% Faster Lookup", "<2s Retrieval Latency"],
      techTags: ["LangGraph", "ReAct Agent", "Voyage-4-Large", "FAISS", "Sarvam-30b LLM", "Pydantic", "Streamlit"],
      bullets: [
        "Engineered an end-to-end Agentic RAG pipeline using LangGraph and a ReAct agent architecture with 2 integrated tools (vector retriever + Wikipedia), reducing manual information lookup time by 70% and enabling autonomous multi-step reasoning over user-uploaded PDF, TXT, and web documents.",
        "Built a semantic search engine powered by Voyage-4-Large embeddings and FAISS vector store, processing documents into 500-token chunks with 50-token overlap, achieving sub-2-second retrieval latency across 100+ document chunks.",
        "Developed a Streamlit web app with real-time PDF/TXT upload, typewriter-style streaming, source citations, and search history, powered by Sarvam-30b LLM and Pydantic-validated state management.",
      ],
    },
    {
      title: "T20 World Cup Analytics & Predictive ML System",
      categoryTag: "Sports Analytics",
      linkLabel: "GitHub",
      linkUrl: "https://github.com/bhupeshdanewa07",
      metricBadges: ["97.5% Accuracy", "0.97 F1-Score", "1,500+ Match Scorecards"],
      techTags: ["Python ETL", "Scikit-Learn", "Random Forest", "Streamlit"],
      bullets: [
        "Engineered a Python ETL pipeline scraping 1,500+ match scorecards into clean, feature-engineered datasets.",
        "Trained a Scikit-Learn Random Forest model predicting player impact with 97.5% accuracy and 0.97 F1-score.",
        "Built a Streamlit web dashboard featuring real-time ML inference, dynamic data slicers, and interactive visual analytics.",
      ],
    },
  ],
  skills: {
    languages: ["Python", "C++", "HTML/CSS", "JavaScript", "SQL"],
    developerTools: ["Linux", "VS Code", "Git & Github", "Power BI", "Android Studio", "Anaconda Distribution"],
    technologiesAndFrameworks: [
      "Machine Learning",
      "Deep Learning",
      "cuDA",
      "RAPIDS",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "Matplotlib",
      "Fast API",
      "Streamlit",
      "LangChain",
      "cuDF",
      "cuML",
      "cuPY",
    ],
  },
  certifications: [
    {
      name: "NVIDIA-Certified Associate: Generative AI and LLMs",
      linkLabel: "Link",
      linkUrl: "https://www.credly.com/badges/24eb64e6-3f3f-42ca-8f7f-c9c47389657d/public_url/",
      tag: "Enterprise AI Credential",
    },
    {
      name: "Machine Learning Specialization Stanford University (Coursera)",
      linkLabel: "Link",
      linkUrl: "https://www.coursera.org/account/accomplishments/specialization/X3A3HMLV8A29?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
      tag: "Foundational ML",
    },
  ],
};

