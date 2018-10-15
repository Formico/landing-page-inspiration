import React from 'react'

import FancyAccents from '../FancyAccents';

import TeamMember from './TeamMember';

import './index.scss'

/* Roles */
const FS_ENG = "Full-Stack Engineer",
      FE_ENG = "Frontend Engineer",
      BE_ENG = "Backend Engineer",
      DES    = "Designer",
      PDM    = "Product Manager",
      PJM    = "Project Manager",
      ML_ENG = "Machine Learning Engineer",
      BL_ENG = "Blockchain Engineer",
      FNDR   = "Founder";

/* Technologies */
const REACT  = "React",
      NATIVE = "React Native",
      GD     = "Graphic Design",
      JS     = "Javascript",
      PY     = "Python",
      AWS    = "Amazon Web Services",
      GCP    = "Google Cloud Provider";

const team = [
  {
    name:  "Anthony Castrio",
    image: "anthony.jpg",
    roles: [PJM],
    tech:  [REACT, JS, PY]
  },
  {
    name:  "Satvik Pendem",
    image: "satvik.jpg",
    roles: [ML_ENG],
    tech:  [REACT, JS, PY]
  },
  {
    name:  "Brent Bovenzi",
    image: "brent.jpg",
    roles: [FS_ENG],
    tech:  [REACT, JS, NATIVE]
  },
  {
    name:  "Nathalyn Nunoo",
    image: "nathalyn.jpg",
    roles: [DES],
    tech:  [GD]
  },
  {
    name:  "Nick Aversano",
    image: "nick.jpg",
    roles: [FS_ENG],
    tech:  [REACT, JS, AWS, PY]
  }
].map((step, idx) => (
  <TeamMember key={ idx }
    name={ step.name }
    image={ step.image }
    roles={ step.roles } />
));

const Team = () => (
  <div className="team">
    <FancyAccents />
    <h2 className="team-title">Meet your team.</h2>
    <div className="team-members">
      { team }
    </div>
  </div>
)

export default Team
