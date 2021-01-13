import React from "react";
import css from "../Footer/Footer.module.css";
import { GiDirectionSigns } from "react-icons/gi";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <div className={css.FooterContainer}>
      <div className={css.FooterLinks}>
        <div className={css.FooterLinksWrapper}>
          <div className={css.FooterLinkItems}>
            <h2 className={css.EndHeadings}>About Us</h2>
            <p className={css.EndLinks}>How it works</p>
            <p className={css.EndLinks}>Testimonials</p>
            <p className={css.EndLinks}>Careers</p>
            <p className={css.EndLinks}>Investors</p>
            <p className={css.EndLinks}>Terms of Service</p>
          </div>
          <div className={css.FooterLinkItems}>
            <h2 className={css.EndHeadings}>Contact Us</h2>
            <p className={css.EndLinks}>Contact</p>
            <p className={css.EndLinks}>Support</p>
            <p className={css.EndLinks}>Destinations</p>
            <p className={css.EndLinks}>Sponsorships</p>
          </div>
        </div>
        <div className={css.FooterLinksWrapper}>
          <div className={css.FooterLinkItems}>
            <h2 className={css.EndHeadings}>Videos</h2>
            <p className={css.EndLinks}>Submit Video</p>
            <p className={css.EndLinks}>Ambassadors</p>
            <p className={css.EndLinks}>Agency</p>
            <p className={css.EndLinks}>Influencer</p>
          </div>
          <div className={css.FooterLinkItems}>
            <h2 className={css.EndHeadings}>Social Media</h2>
            <p className={css.EndLinks}>Instagram</p>
            <p className={css.EndLinks}>Facebook</p>
            <p className={css.EndLinks}>Youtube</p>
            <p className={css.EndLinks}>Twitter</p>
          </div>
        </div>
      </div>

      <div className={css.EndIconsContainer}>
        <div>
          <h2>
            MOODPATH
            <GiDirectionSigns className={css.EndIcons} />
          </h2>
        </div>

        <AiFillYoutube className={css.EndIcons} />
        <AiFillTwitterCircle className={css.EndIcons} />
        <AiFillInstagram className={css.EndIcons} />
        <AiFillFacebook className={css.EndIcons} />
        <AiFillLinkedin className={css.EndIcons} />
      </div>
    </div>
  );
}

export default Footer;
