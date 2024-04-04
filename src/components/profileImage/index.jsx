import { Container, InnerContainer, MemberProfileImageCrazy, MemberProfileImageSerious } from './styled';

const ProfileImage = ({ serious, crazy }) => {

  return (
    <Container>
      <InnerContainer>
        <MemberProfileImageSerious src={serious} />
        <MemberProfileImageCrazy src={crazy} />
      </InnerContainer>
    </Container>
  )
}

export default ProfileImage;