function AboutMe() {
  return (
    <div id="about-me" className="w-3/4 justify-center items-center mx-auto flex-col">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-8">
        <div className="md:w-1/4 md:h-full w-3/4 flex flex-col items-center pt-10 md:pt-0">
          <img className="rounded-2 pb-5" src="images/Arnav-In-Thailand.jpg"></img>
          <p className="text-sm text-stone-500 italic font-poppins">Arnav in Batu Caves, Malaysia</p>
        </div>
        <div className="md:w-3/4 md:h-full border-2 mx-10 p-10 md:p-15 flex flex-col">
          <p className="text-3xl font-poppins"> 
            Welcome to my site!
          </p>
          <p className="pt-6 pb-3 font-redrose">
            Hello, my name is Arnav Badrish, and this is my website, which I made mainly 
            to mess around with web development. 
            <br /><br />
            There are also a few projects from high school which I haven't maintained properly, 
            but would still like to show nonetheless.
            <br /><br />
            I would also like to show a few more things, 
            like future projects, and other things that I have done.
          </p>
        </div>
      </div>
      <div id="contacts items-center justify-center flex flex-col my-10 py-10">
        <p className="text-3xl font-poppins text-center"> 
          Contact Details
        </p>
        <p className="text-sm text-stone-500 italic font-poppins text-center"> 
          Socials and the such...
        </p>
        <div className="flex items-center justify-center py-3">
          <SocialButton 
            href="http://www.linkedin.com/in/arnav-badrish-09590b25a" 
            socialMediaName="linkedin" 
            customHoverBg="bg-blue-900"/>
          <SocialButton 
            href="https://discord.com/users/542208988163604490" 
            socialMediaName="discord" 
            customHoverBg="bg-blue-700"/>
          <SocialButton 
            href="https://www.reddit.com/user/Ar_196/" 
            socialMediaName="reddit" 
            customHoverBg="bg-red-800"/>
          <SocialButton href="https://www.instagram.com/ar._.196/" 
            socialMediaName="instagram" 
            customBg="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" 
            customHoverBg='hover:bg-gradient-to-r hover:from-[#fd1d1d] hover:via-[#fd1d1d] hover:to-[#833ab4]'/>
        </div>
        <div className="invisible bg-linkedin bg-reddit bg-discord"></div>
        <div className="pt-10"></div>
      </div>
    </div>
  );
}

function SocialButton({ href, socialMediaName, customBg, customHoverBg }) {
  return (
    <a href={href} target="_blank">
      <button className={`border-r-0 w-20 h-20 hover:${customHoverBg || 'bg-blue-900'} ${customBg || `bg-${socialMediaName}`} rounded-full mx-3`}>
        <span className={`fa-brands fa-${socialMediaName} text-white text-4xl`}/>
      </button>
    </a>
  )
}

export default AboutMe;