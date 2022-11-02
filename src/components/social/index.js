import React from 'react';
import socialMedia from '../../service/social.media';

const SocialBar = () => {
  return (
    <div className="box-social-media">
      <nav>
        {socialMedia.map((item, i) => {
          return (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer">
              <img src={`/image/${item.image}`} alt={item.name} />
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default SocialBar;
