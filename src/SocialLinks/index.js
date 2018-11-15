import React from "react";
import { css } from "emotion";

import SocialLink from "./SocialLink";

const SocialLinks = () => (
  <ul className={css``}>
    <SocialLink link="https://twitter.com/spiderdayNight" label="Twitter" />

    <SocialLink
      link="https://www.instagram.com/spiderdaynightlive/"
      label="Instagram"
    />
    <SocialLink
      link="https://www.flickr.com/photos/saecheverri/"
      label="Flickr"
    />
  </ul>
);

export default SocialLinks;
