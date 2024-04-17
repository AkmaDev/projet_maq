import Nav from "@/components/Nav";
import NavB from "@/components/NavB";
import NavFooter from "@/components/NavFooter";
import "@/styles/globals.css";


export const metadata = {
    title: "maq_1",
    description: "Made By Manassé AKPOVI"
}

const Rootlayout = ({children}) => {
  return (

    <html lang="en">
    <head>
    <script src="https://kit.fontawesome.com/eda0842a66.js" crossorigin="anonymous"></script>
    </head>
    <body className="bg-slate-50">

      <Nav />
      {children}
    </body>
    </html>
  )
}

export default Rootlayout
