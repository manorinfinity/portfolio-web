import Image from "next/image";

const Navbar = () => (
    <div className='nav-container'>
          <div className='nav-logo'>
            <Image
              src={"/images/navbar/logo.svg"}
              alt="MOI LOGO"
              width={43.3}
              height={40}
            />
          </div>

    </div>
)
export default Navbar;