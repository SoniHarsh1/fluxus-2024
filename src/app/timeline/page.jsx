'use client'
import Events from "@/components/Timeline/Events";
import { useEffect } from "react";
import ScrollToTop from "../../components/Timeline/ScrollToTop";

export default function Timeline() {
  useEffect(() => {
   
    var btn = document.getElementById('button');

   
    window.addEventListener('scroll', function () {
      
      if (window.scrollY > 300) {
      
        btn.classList.add('show');
      } else {
        
        btn.classList.remove('show');
      }
    });

    
    btn.addEventListener('click', function (e) {
    
      e.preventDefault();
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

  }, [])
  return (
    <>
    <ScrollToTop />
    <div class="content">
      <Events />
      <style jsx>
        {`
                #button {
                    display: inline-block;
                    background-color: #FF9800;
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    border-radius: 4px;
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    transition: background-color .3s, 
                      opacity .5s, visibility .5s;
                    opacity: 0;
                    visibility: hidden;
                    z-index: 1000;
                  }
                  #button::after {
                    content: "\f077";
                    font-family: FontAwesome;
                    font-weight: normal;
                    font-style: normal;
                    font-size: 2em;
                    line-height: 50px;
                    color: #fff;
                  }
                  #button:hover {
                    cursor: pointer;
                    background-color: #333;
                  }
                  #button:active {
                    background-color: #555;
                  }
                  #button.show {
                    opacity: 1;
                    visibility: visible;
                  }
                  
                  /* Styles for the content section */
                  
                  .content {
                    width: 77%;
                    margin: 50px auto;
                    font-family: 'Merriweather', serif;
                    font-size: 17px;
                    color: #6c767a;
                    line-height: 1.9;
                  }
                  @media (min-width: 500px) {
                    .content {
                      width: 43%;
                    }
                    #button {
                      margin: 30px;
                    }
                  }
                  .content h1 {
                    margin-bottom: -10px;
                    color: #03a9f4;
                    line-height: 1.5;
                  }
                  .content h3 {
                    font-style: italic;
                    color: #96a2a7;
                  }
            `}
      </style>
    </div>
    </>
  );
}
