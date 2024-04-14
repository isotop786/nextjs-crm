import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js CRM App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     

      <body className="bg-gray-100 flex">
      <Sidebar/>

      <div className="w-full flex flex-col h-screen overflow-y-hidden">
       <TopHeader/>

        {/* Mobile Header & Nav */}
        <header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                <button  className="text-white text-3xl focus:outline-none">
                    <i x-show="!isOpen" className="fas fa-bars"></i>
                    <i x-show="isOpen" className="fas fa-times"></i>
                </button>
            </div>

           
            <nav  className="flex flex-col pt-4">
                <a href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
                <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sticky-note mr-3"></i>
                    Blank Page
                </a>
                <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-table mr-3"></i>
                    Tables
                </a>
                <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-align-left mr-3"></i>
                    Forms
                </a>
                <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-tablet-alt mr-3"></i>
                    Tabbed Content
                </a>
                <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-calendar mr-3"></i>
                    Calendar
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-cogs mr-3"></i>
                    Support
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    My Account
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Sign Out
                </a>
               
            </nav>
           
        </header>

        <div className="w-full overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                {children}
            </main>
    
            <footer className="w-full bg-white text-right p-4">
                Built by <a target="_blank" href="#" className="underline">Maruf</a>.
            </footer>
        </div>

      </div>
    
      </body>
    </html>
  );
}