import React from 'react'
import {animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter  } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
 const Footer = () => {
     const toggleHome = () => {
         scroll.scrollToTop();
     };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                 <FooterLinksWrapper>
                   <FooterLinkItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/signin">How it works</FooterLink>
                           <FooterLink to="/signin">Testimonials</FooterLink>
                           <FooterLink to="/signin">Carriers</FooterLink>
                           <FooterLink to="/signin">Investors</FooterLink>
                           <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                           <FooterLinkItems>         
                           <FooterLinkTitle>Contact US</FooterLinkTitle>
                           <FooterLink to="/signin">Contact</FooterLink>
                           <FooterLink to="/signin">Support</FooterLink>
                           <FooterLink to="/signin">Destination</FooterLink>
                           <FooterLink to="/signin">Sponsorships</FooterLink>
                          
                           </FooterLinkItems>
                   
                       </FooterLinksWrapper>

                       <FooterLinksWrapper>
                         <FooterLinkItems>
                       <FooterLinkTitle>Videos</FooterLinkTitle>
                           <FooterLink to="/signin">Submit Video</FooterLink>
                           <FooterLink to="/signin">Ambassadors</FooterLink>
                           <FooterLink to="/signin">Agency</FooterLink>
                          
                           <FooterLink to="/signin">Influencer</FooterLink>
                            </FooterLinkItems>
                           <FooterLinkItems>         
                           <FooterLinkTitle>Social Media</FooterLinkTitle>
                           <FooterLink to="/signin">Instagram</FooterLink>
                           <FooterLink to="/signin">Facebook</FooterLink>
                           <FooterLink to="/signin">Youtube</FooterLink>
                           <FooterLink to="/signin">Twitter</FooterLink>
                           
                           </FooterLinkItems>
                   
                       </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            NEXT
                        </SocialLogo>
                        <WebsiteRights>dolla ?? {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/smartscroll" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            
                            
                            
                          
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
           </FooterWrap>
     </FooterContainer>
    )
}

export default Footer;