import React from 'react'
import "../globals.css"
import "./page.module.css"

const PublicLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <html>
    <body>
    <section className="bg-gray-50  dark:bg-gradient-to-l from-[#496989] to-[#58A399] ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {children}
    </div>
    </section>
    </body>
    </html>
  )
}

export default PublicLayout