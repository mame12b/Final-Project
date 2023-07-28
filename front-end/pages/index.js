import Heator from "../components/Landing_page/Heator"
import Aboutus from "../components/Landing_page/Aboutus"
import Contact from "../components/Landing_page/Contact"
import News from "../components/Landing_page/News"
import Section from "../components/Landing_page/Section"


function Index() {
  
    return <>
    <>
    <div>
    <Heator>
    <Section/>
    <Aboutus/>
    <News/>
    <Contact/>
    </Heator>
    </div>
     </>         
    </>
}
export default Index

Index.getLayout = function pageLayout(page)
{
  return(
    <>
   
    {page}
    
    </>
  )
}