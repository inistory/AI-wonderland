import React from 'react';
import FooterStyle from './FooterStyle.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="service_Name">AI WONDERLAND</div>
        <div className="item_content">
          <ul>
            <li>
              <label>Project Name</label>
              <span>AI Wonderland</span>
            </li>
            <li>
              <label>Team Name</label>
              <span>Soondoong_Six</span>
            </li>
            <li>
              <label>Contact</label>
              <span>
                Nayun Kim: lily.nayun.kim@gmail.com
                <br />
                Jungin Kim: jungin3486@gmail.com
                <br />
                Jaewook Bae: bae.jae.w@gmail.com
                <br />
                Hyejin Yang: dbdrmek00@gmail.com
                <br />
                Sodam Shin: damsoshin@gmail.com
                <br />
                Seulkee Lee: ms.sseul@gmail.com
              </span>
            </li>
          </ul>
        </div>
        <div class="copyright">
          Copyright © Soondoong_Six. All rights reserved.
        </div>
        <div class="gitlab_address">
          <Link to="https://kdt-gitlab.elice.io/001-part4-aifashionkeyword/team3/project-team3">
            Our Gitlab
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
