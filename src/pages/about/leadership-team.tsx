import leadership1 from '../../assets/images/leadership1.png'
import leadership2 from '../../assets/images/leadership2.png'
import leadership3 from '../../assets/images/leadership3.png'

import { ContainerClass } from '../../layout'
import { LeadershipTeam, Paragraph, SectionHeader } from './styled-components'

const leadershipProfiles = [
  { imagesrc: leadership1, name: 'Michael Scott', jobTitle: 'General Manager' },
  {
    imagesrc: leadership2,
    name: 'Dwight Schrute',
    jobTitle: 'General Manager'
  },
  { imagesrc: leadership3, name: 'Pam Beetsley', jobTitle: 'General Manager' }
]

const Team = () => {
  return (
    <ContainerClass>
      <LeadershipTeam>
        <div className="content">
          <div className="header">
            <Paragraph>Our team</Paragraph>

            <SectionHeader>The leadership team</SectionHeader>

            <Paragraph className="description">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </Paragraph>
          </div>
        </div>
        <div className="profile">
          {leadershipProfiles.map((i, index) => (
            <div className="profile-item" key={index}>
              <img src={i.imagesrc} alt="" />

              <h3>{i.name}</h3>

              <Paragraph>{i.jobTitle}</Paragraph>
            </div>
          ))}
        </div>
      </LeadershipTeam>
    </ContainerClass>
  )
}

export default Team
