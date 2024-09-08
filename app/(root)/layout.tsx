import Footer from "@/components/footer";
import LookingForESG from "@/components/looking-for-esg";
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-100 max-w-screen-2xl">
        <Navbar />
        {children}
        <LookingForESG />
        <Footer />
      </body>
    </html>
  );
}
