import React from 'react'

import routes from '../../../../constants/routes'

import './index.scss'

const TeamMember = ({ name, image, roles }) => (
  <div className="team-member">
    <img src={ `${routes.IMG}/${image}` } />
    <div className="text">
      <h2 className="name">{ `${name}` }</h2>
      <p className="roles">{ `${roles}` }</p>
    </div>
  </div>
)

export default TeamMember
