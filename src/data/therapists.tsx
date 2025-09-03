import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

export interface Therapist {
  id: string;
  name: string;
  designation: string;
  experience: number;
  clinic: string;
  specializations: string[];
  rating: number;
  totalReviews: number;
  image: string;
  location: string;
  bio: string;
  education: string[];
  languages: string[];
  consultationFee: number;
}

export const therapistsData: Therapist[] = [
  {
    id: "1",
    name: "Dr. Anjali Sharma",
    designation: "Senior Ayurveda Specialist",
    experience: 12,
    clinic: "Ayur Wellness Center",
    specializations: ["Vamana", "Stress Management", "Detoxification", "Mental Wellness"],
    rating: 4.8,
    totalReviews: 156,
    image: therapist1,
    location: "Mumbai, Maharashtra",
    bio: "Dr. Anjali Sharma is a renowned Ayurveda specialist with over 12 years of experience in Panchakarma treatments. She specializes in stress management and mental wellness through traditional Ayurvedic practices.",
    education: ["BAMS - Government Ayurveda College, Mumbai", "MD Panchakarma - Gujarat Ayurveda University"],
    languages: ["Hindi", "English", "Marathi"],
    consultationFee: 800
  },
  {
    id: "2", 
    name: "Dr. Rajesh Kumar",
    designation: "Panchakarma Therapist",
    experience: 8,
    clinic: "Panchakarma Healing Hub",
    specializations: ["Basti", "Pain Management", "Digestive Health", "Raktamokshana"],
    rating: 4.6,
    totalReviews: 89,
    image: therapist2,
    location: "Delhi, NCR",
    bio: "Dr. Rajesh Kumar specializes in Basti therapy and has helped hundreds of patients with chronic pain and digestive issues through authentic Panchakarma treatments.",
    education: ["BAMS - Rajasthan Ayurveda University", "Diploma in Panchakarma"],
    languages: ["Hindi", "English", "Punjabi"],
    consultationFee: 650
  },
  {
    id: "3",
    name: "Dr. Mohan Gupta",
    designation: "Chief Ayurveda Consultant",
    experience: 25,
    clinic: "Vedic Health Clinic",
    specializations: ["Nasya", "Vamana", "Detoxification", "Skin Care", "Mental Wellness"],
    rating: 4.9,
    totalReviews: 234,
    image: therapist3,
    location: "Pune, Maharashtra",
    bio: "Dr. Mohan Gupta is a veteran Ayurveda practitioner with 25 years of experience. He is an expert in Nasya therapy and has authored several research papers on traditional Panchakarma treatments.",
    education: ["BAMS - Pune University", "MD Ayurveda - Banaras Hindu University", "PhD in Ayurveda Research"],
    languages: ["Hindi", "English", "Marathi", "Sanskrit"],
    consultationFee: 1200
  },
  {
    id: "4",
    name: "Dr. Priya Patel",
    designation: "Ayurveda Physician",
    experience: 6,
    clinic: "Natural Therapy Center",
    specializations: ["Stress Management", "Skin Care", "Digestive Health"],
    rating: 4.5,
    totalReviews: 67,
    image: therapist1,
    location: "Bangalore, Karnataka",
    bio: "Dr. Priya Patel focuses on integrative Ayurveda treatments, combining traditional practices with modern wellness approaches for optimal patient care.",
    education: ["BAMS - SDM College of Ayurveda", "Certification in Yoga Therapy"],
    languages: ["Hindi", "English", "Gujarati", "Kannada"],
    consultationFee: 550
  },
  {
    id: "5",
    name: "Dr. Vikram Singh",
    designation: "Panchakarma Specialist",
    experience: 15,
    clinic: "Holistic Ayurveda Clinic",
    specializations: ["Basti", "Raktamokshana", "Pain Management", "Detoxification"],
    rating: 4.7,
    totalReviews: 198,
    image: therapist2,
    location: "Jaipur, Rajasthan",
    bio: "Dr. Vikram Singh is known for his expertise in Basti and blood purification therapies. He has successfully treated numerous patients with chronic conditions.",
    education: ["BAMS - National Institute of Ayurveda", "MD Panchakarma"],
    languages: ["Hindi", "English", "Rajasthani"],
    consultationFee: 750
  },
  {
    id: "6",
    name: "Dr. Sunita Joshi",
    designation: "Women's Health Specialist",
    experience: 10,
    clinic: "Ayur Wellness Center",
    specializations: ["Vamana", "Nasya", "Stress Management", "Mental Wellness"],
    rating: 4.8,
    totalReviews: 142,
    image: therapist1,
    location: "Chennai, Tamil Nadu",
    bio: "Dr. Sunita Joshi specializes in women's health and fertility treatments using traditional Ayurvedic methods combined with Panchakarma therapies.",
    education: ["BAMS - Government Ayurveda College, Chennai", "Specialization in Stree Roga"],
    languages: ["Hindi", "English", "Tamil", "Telugu"],
    consultationFee: 700
  }
];