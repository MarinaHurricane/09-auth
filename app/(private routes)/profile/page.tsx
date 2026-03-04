import ProfileClient from "./ProfileClient";
import type { Metadata } from "next";
import { getMe } from "@/lib/serverApi";



export async function generateMetadata(): Promise<Metadata> {
  const user = await getMe();

  return {
    title: `profile of ${user.username}`,
    description: `profile page of ${user.username}`,
    openGraph: {
      url: `https://08-zustand-kf5mmf8bz-marynas-projects-3f5c6324.vercel.app/profile`,
      title: `profile of ${user.username}`,
      description: `profile page of ${user.username}`,
      siteName: "Notes App",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 600,
          height: 300,
          alt: "Notes App preview image",
        },
      ],
    },
  };
}

export default function Profile() {
  return <ProfileClient />
}
