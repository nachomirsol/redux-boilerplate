import styled from "styled-components/macro";

const UserAvatarContainer = styled.div`
  -webkit-transform: translate(0, 18px);
  transform: translate(0, 18px);
`;

const UserAvatarWrapper = styled.div`
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 24px;
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const UserAvatarPhotoContainer = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserAvatarPhotoContainerBig = styled.div`
  width: 136px;
  height: 136px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserAvatarPhoto = styled.img`
  height: 100%;
  width: auto;
`;

const UserAvatarName = styled.div`
  font-family: "Myriad Pro Regular";
`;

const UserAvatarDropdown = styled.div`
  cursor: pointer;
  padding: 0px 2px 4px;
  min-width: 150px;

  label {
    font-family: "Myriad Pro Regular";
    font-size: 16px;
    padding: 3px;
  }
`;

// .c-user-avatar__arrow{
//     margin-left: 5px;
//     height: 6px;
//   }

//   .c-user-avatar__arrow svg {
//     height: 6px;
//   }

// .c-user-avatar--fix{
//     -webkit-transform: translate(0,0);
//             transform: translate(0,0);
// }

export {
  UserAvatarContainer,
  UserAvatarWrapper,
  UserAvatarPhotoContainer,
  UserAvatarPhotoContainerBig,
  UserAvatarPhoto,
  UserAvatarName,
  UserAvatarDropdown
};
