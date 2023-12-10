import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganges Rejuvenation Milestone: Namami Gange Initiative Achieves Significant Progress in River Cleanup",
  description: "This news title highlights a positive development in the ongoing efforts of the Namami Gange initiative. It suggests that there has been a noteworthy achievement or milestone in the process of rejuvenating the Ganges River through the program. The term "significant progress in river cleanup" implies that the initiative has successfully addressed some of the pollution or environmental challenges faced by the Ganges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
