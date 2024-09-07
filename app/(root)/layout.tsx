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
    <html lang="en">
      <body className="bg-gray-50">
        <Topbar isDarkTheme={false}/>
        <Navbar />
        {children}
        <LookingForESG />
        <Footer />
      </body>
    </html>
  );
}
