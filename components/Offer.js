import Link from "next/link";

const Offer = () => {
  return (
    <section style={{backgroundColor:"#EB5C74",textAlign:"center"}} >
 <div className="hidden sm:block">
 <a href="https://courses.microdegree.work/pages/microdegree-pro"><h6 className='text-2xl' style={{color:"#fff",fontSize:"14px"}}>Now you can switch between any course for just Rs.2500! - More Details <i class="fa fa-angle-double-right"></i></h6></a>

 </div>
 <div className="block sm:hidden">
 <a href="https://courses.microdegree.work/pages/microdegree-pro"><h6 className='text-2xl' style={{color:"#fff",fontSize:"10px"}}>Now you can switch between any course for just Rs.2500! - More Details <i class="fa fa-angle-double-right"></i></h6></a>

 </div>
        
    </section>
  );
};

export default Offer;
