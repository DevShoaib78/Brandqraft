import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | BrandQraft",
    };
  }

  return {
    title: `${project.title} – ${project.category} | BrandQraft`,
    description: project.description,
    openGraph: {
      title: `${project.title} – ${project.category} | BrandQraft`,
      description: project.description,
      url: `/projects/${project.slug}`,
      siteName: "BrandQraft",
      type: "article",
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          type: "image/png",
          alt: `${project.title} – BrandQraft Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${project.title} – ${project.category} | BrandQraft`,
      description: project.description,
      images: ["/favicon.png"],
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
