import logo from "./logo.png";
import gradientBackground from "./gradientBackground.png";
import arrow_icon from "./arrow_icon.svg";
import { SquarePen, Hash, Image, Eraser, Scissors, FileText } from 'lucide-react'


export const assets = {
    logo,
    gradientBackground,
    arrow_icon,
};

export const AiToolsData = [
  {
    title: 'Smart Article Writer',
    description: 'Craft well-written, engaging content on any subject using advanced AI writing tools.',
    Icon: SquarePen,
    bg: { from: '#3588F2', to: '#0BB0D7' },
    path: '/ai/write-article'
  },
  {
    title: 'Blog Title Creater',
    description: 'Generate eye-catching and relevant blog titles instantly with our AI assistant.',
    Icon: Hash,
    bg: { from: '#B153EA', to: '#E549A3' },
    path: '/ai/blog-titles'
  },
  {
    title: 'AI Image Generator',
    description: 'Produce stunning images through AI — bring your ideas to life in seconds.',
    Icon: Image,
    bg: { from: '#20C363', to: '#11B97E' },
    path: '/ai/generate-images'
  },
  {
    title: 'Background Eraser',
    description: 'Easily remove photo backgrounds in just one click with our AI-powered tool.',
    Icon: Eraser,
    bg: { from: '#F76C1C', to: '#F04A3C' },
    path: '/ai/remove-background'
  },
  {
    title: 'AI Object Removal',
    description: 'Quickly erase unwanted elements from your photos using intelligent object removal.',
    Icon: Scissors,
    bg: { from: '#5C6AF1', to: '#427DF5' },
    path: '/ai/remove-object'
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Let AI review and enhance your resume to help you stand out to employers.',
    Icon: FileText,
    bg: { from: '#12B7AC', to: '#08B6CE' },
    path: '/ai/review-resume'
  }
];





