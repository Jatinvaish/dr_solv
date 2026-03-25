// Unidoc - AI-Powered Healthcare EMR Platform Content Configuration
// Centralized content for easy updates across all sections

export const siteConfig = {
  name: "Unidoc",
  tagline: "AI-Powered Healthcare EMR Platform",
  description: "Transform healthcare delivery with intelligent patient records management",
  primaryColor: "#1b6a52",
  primaryColorHover: "#15544a",
}

export const heroContent = {
  title: "Healthcare at Your Fingertips",
  titleHighlight: "Intelligent Patient Records",
  subtitle: "AI-powered EMR for modern healthcare delivery",
  description:
    "Unidoc transforms how healthcare professionals manage patient care. Access complete medical records, streamline workflows, and deliver better patient outcomes through intelligent automation.",
  cta1: "Explore Features",
  cta1Link: "#features",
  cta2: "Watch Demo",
  cta2Link: "#demo",
  image: "/hero-unidoc-emr.jpg",
}

export const problemContent = {
  title: "Healthcare Teams Face Critical Challenges",
  subtitle: "Managing patient care shouldn't require endless searching",
  problems: [
    {
      id: 1,
      title: "Fragmented Records",
      description:
        "Patient information scattered across multiple systems, making it impossible to get a complete medical picture quickly.",
      icon: "📋",
    },
    {
      id: 2,
      title: "Time-Consuming Workflows",
      description:
        "Administrative tasks consume precious time that should be spent with patients. Doctors spend more time on paperwork than care.",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Communication Gaps",
      description:
        "Disconnected departments and specialists lead to miscommunication, delayed decisions, and compromised patient safety.",
      icon: "💬",
    },
    {
      id: 4,
      title: "Data Security Risks",
      description:
        "Patient data stored in insecure systems puts sensitive information at risk and creates compliance headaches.",
      icon: "🔒",
    },
  ],
}

export const emrFeaturesContent = {
  title: "Complete EMR Solution for Healthcare Excellence",
  subtitle: "Every module you need to deliver exceptional patient care",
  features: [
    {
      id: 1,
      title: "Medical Records Management",
      description: "Centralized patient records with complete medical history, lab reports, prescriptions, and discharge summaries",
      highlights: [
        "Lab reports & prescriptions",
        "Discharge summaries",
        "Secure document sharing",
        "ABDM Integration",
        "HIPAA-ready security",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Medical%20records-iL9gorgKJtALLyMBsAQT28DJOeNctB.png",
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Hospital Operations",
      description: "Intelligent scheduling, task management, and real-time patient tracking across all departments",
      highlights: [
        "OPD/IPD scheduling",
        "Staff duty management",
        "Real-time patient tracking",
        "Intelligent task automation",
        "Real-time hospital analytics",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hospital%20operatinos-fxDfhHKh5LlLxJMmaBZcQLHm3Hak7b.png",
      color: "bg-green-50",
    },
    {
      id: 3,
      title: "Clinical Communication",
      description: "Secure doctor-patient communication and internal staff collaboration for seamless care delivery",
      highlights: [
        "Live OPD consultation chat",
        "Digital prescription sharing",
        "Internal staff communication",
        "Real-time messaging",
        "ABDM integrated system",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clinical%20Communicatios-GV1MskhLiMKTOWW70aNA6za9h5FWJz.png",
      color: "bg-purple-50",
    },
    {
      id: 4,
      title: "Intelligent Dashboard",
      description: "Real-time insights with comprehensive analytics, appointments, admissions, and revenue tracking",
      highlights: [
        "Appointment management",
        "Admission tracking",
        "Revenue analytics",
        "Patient statistics",
        "Real-time reporting",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Ww2WLEbtcjUCzE7fLjOuu8B8B7cG3.png",
      color: "bg-amber-50",
    },
  ],
}

export const aiCapabilitiesContent = {
  title: "AI-Powered Features That Transform Care",
  subtitle: "Leverage artificial intelligence for smarter healthcare decisions",
  capabilities: [
    {
      icon: "🤖",
      title: "Smart Diagnosis Assistance",
      description: "AI-powered insights to help clinicians identify patterns and suggest differential diagnoses",
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Forecast patient risk levels and intervention needs before they become critical",
    },
    {
      icon: "⚡",
      title: "Automated Documentation",
      description: "AI transcription and auto-completion reduce manual documentation by up to 80%",
    },
    {
      icon: "🔄",
      title: "Workflow Optimization",
      description: "Intelligent task routing and scheduling for optimal team efficiency",
    },
    {
      icon: "👥",
      title: "Patient Engagement",
      description: "AI chatbots and patient portals improve communication and satisfaction",
    },
    {
      icon: "💊",
      title: "Drug Interaction Checker",
      description: "Real-time alerts for potential drug interactions and contraindications",
    },
  ],
}

export const testimonialsContent = {
  title: "Trusted by Healthcare Professionals",
  subtitle: "See how Unidoc is transforming patient care delivery",
  testimonials: [
    {
      name: "Dr. Anil Mehta",
      role: "Senior Physician",
      hospital: "Delhi Medical Center",
      quote:
        "Unidoc has cut our patient record retrieval time from 10 minutes to 30 seconds. Our care quality has improved significantly.",
      image: "/testimonial-1.jpg",
    },
    {
      name: "Dr. Ravi Sharma",
      role: "Hospital Administrator",
      hospital: "Mumbai Healthcare",
      quote:
        "The integrated dashboard gives us real-time insights into hospital operations. We've reduced administrative overhead by 40%.",
      image: "/testimonial-2.jpg",
    },
    {
      name: "Dr. Himanshu Dayma",
      role: "Emergency Medicine Specialist",
      hospital: "Emergency Care Hospital",
      quote:
        "In emergency situations, every second counts. Unidoc's instant access to patient records has been a lifesaver.",
      image: "/testimonial-3.jpg",
    },
  ],
}

export const pricingContent = {
  title: "Transparent Pricing for Every Healthcare Setup",
  subtitle: "Choose the plan that fits your needs",
  plans: [
    {
      name: "Starter",
      description: "Perfect for small clinics and practices",
      price: "₹4,999",
      period: "per month",
      features: [
        "Up to 100 patient records",
        "Basic EMR features",
        "Email support",
        "HIPAA compliance",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      description: "For established hospitals and clinics",
      price: "₹9,999",
      period: "per month",
      features: [
        "Unlimited patient records",
        "Complete EMR suite",
        "AI-powered features",
        "Phone & email support",
        "ABDM integration",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large hospital networks",
      price: "Custom",
      period: "based on requirements",
      features: [
        "Everything in Professional",
        "Multi-location support",
        "Dedicated account manager",
        "Custom AI models",
        "SLA guarantee",
        "24/7 priority support",
      ],
      cta: "Contact Sales",
    },
  ],
}

export const faqContent = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about Unidoc",
  questions: [
    {
      question: "Is my patient data secure?",
      answer:
        "Yes. Unidoc is HIPAA-compliant and uses enterprise-grade encryption. All data is stored securely and patient privacy is our top priority.",
    },
    {
      question: "Can Unidoc integrate with existing systems?",
      answer:
        "Absolutely. Unidoc integrates with most EMR systems, hospital management software, and lab systems. We provide custom integration support.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation typically takes 2-4 weeks depending on your hospital size. Our team handles the entire setup and staff training.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 support through phone, email, and chat. Professional and Enterprise plans include dedicated account managers.",
    },
    {
      question: "Does Unidoc support ABDM?",
      answer:
        "Yes. Unidoc is fully integrated with ABDM (Ayushman Bharat Digital Mission) for seamless data sharing across the healthcare ecosystem.",
    },
    {
      question: "Can we customize Unidoc for our needs?",
      answer:
        "Yes. Enterprise customers get full customization options including custom workflows, branding, and AI model tuning.",
    },
  ],
}

export const ctaContent = {
  title: "Ready to Transform Your Healthcare Delivery?",
  description: "Join hundreds of healthcare professionals using Unidoc to deliver better patient care",
  buttonText: "Start Your Free Trial",
  buttonLink: "#contact",
  subtext: "No credit card required. Full access for 14 days.",
}

export const footerContent = {
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  solutions: [
    { label: "Hospitals", href: "/hospitals" },
    { label: "Clinics", href: "/clinics" },
    { label: "Practitioners", href: "/practitioners" },
    { label: "Lab Networks", href: "/labs" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api-docs" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Compliance", href: "/compliance" },
  ],
}
