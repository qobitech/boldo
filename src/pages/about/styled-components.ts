import styled from 'styled-components'
import cta from '../../assets/images/Call to Action.png'

export const Wrapper = styled.div`
  margin-bottom: 84px;
`

export const CallToActionSection = styled.div`
  background-image: url(${cta});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  height: auto;
  width: 100%;
  padding: 72px 0 80px;
  text-align: center;
  box-sizing: border-box;

  .content {
    max-width: 716px;
    width: 90%;
    margin: 0 auto;

    h2 {
      color: #ffffff;
      margin-bottom: 48px;
      font-family: Manrope_Light;
    }

    form {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      width: 100%;

      input {
        height: 56px;
        outline: none;
        border: none;
        border-radius: 240px;
        padding-left: 32px;
        font-size: 18px;
        width: 370px; /* Set width for larger screens */
        max-width: 370px; /* Limit max-width to maintain good layout on large screens */

        &::placeholder {
          color: #bbb;
        }
        &:focus {
          border: 2px solid #65e4a3;
        }
      }

      button {
        height: 56px;
        border: none;
        border-radius: 240px;
        font-size: 18px;
        font-family: OpenSans_Bold;
        padding: 16px 56px;
        color: #0a2640;
        background: #65e4a3;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          background: rgb(85, 194, 137);
        }
      }
    }
  }

  /* Media query for devices less than 1200px (Tablets and smaller screens) */
  @media (max-width: 1200px) {
    height: auto;

    .content {
      width: 80%;

      h2 {
        font-size: 36px;
        line-height: 50px;
        margin-bottom: 58px;
      }

      form {
        gap: 20px;
        input,
        button {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
`

export const OurValuesSection = styled.div`
  background: #0a2640;
  margin-bottom: 124px;
  padding: 120px 0;
  color: #ffffff;

  .content {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;

    .header {
      p {
        margin-bottom: 12px;
      }

      h2 {
        margin-bottom: 22.5px;
      }

      .description {
        margin-bottom: 72px;
        color: #f1f1f1;
      }

      @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 72px;

      .item {
        display: flex;
        align-items: center;
        gap: 50px;

        img {
          width: 150px;
          height: 150px;
          border-radius: 24px;
        }

        .text-content {
          h5 {
            font-size: clamp(1.25rem, 1rem + 1.5vw, 1.75rem);
            line-height: clamp(2rem, 1.8rem + 1.5vw, 3rem);
            margin-bottom: 16px;
          }

          p {
            color: #f1f1f1;
          }
        }

        @media (max-width: 1200px) {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
`

export const LeadershipTeam = styled.div`
  padding: 96px 0 120px;

  .content {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;

    .header {
      p {
        margin-bottom: 12px;
        color: #777777;
      }

      h2 {
        margin-bottom: 22.5px;
        color: #000000;
      }

      .description {
        margin-bottom: 72px;
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      algin-items: center;
      text-align: center;
      gap: 60px;
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profile-item {
      img {
        width: 300px;
        height: 354px;
        border-radius: 24px;
        margin-bottom: 24px;
      }

      h3 {
        font-size: 23px;
        color: #000000;
        line-height: 48px;
        margin-bottom: 4px;
      }

      p {
        color: #777777;
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      algin-items: center;
      text-align: center;
      gap: 60px;

      .profile-item {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`

export const OurNumbers = styled.div`
  background: #0a2640;
  padding: 94px 0 96px;

  .header-section {
    max-width: 842px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h2 {
      color: #ffffff;
      margin-bottom: 82px;
    }

    p {
      margin-bottom: 12px;
      color: #f1f1f1;
    }

    @media (max-width: 1200px) {
      text-align: center;
    }
  }

  .numbers-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .number-item {
      h1 {
        font-size: clamp(3rem, -0.875rem + 8.333vw, 6rem);
        line-height: clamp(2rem, 2.8rem + 2vw, 3.5rem);
        margin-bottom: 32px;
        color: #4fe9a4;
      }

      p {
        font-size: clamp(0.8rem, -0.875rem + 6.333vw, 1.5rem);
        line-height: clamp(1rem, 2.8rem + 2vw, 2.25rem);
        color: #f1f1f1;
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 70px;

      .number-item {
        h1 {
          margin-bottom: 20px;
        }
      }
    }
  }
`

export const OurStorySection = styled.div`
  padding: 40px 0 120px;

  .content {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;

    .header {
      p {
        margin-bottom: 12px;
        color: #777777;
      }

      h2 {
        margin-bottom: 22.5px;
        color: #000000;
      }

      .description {
      }
      @media (max-width: 1200px) {
        text-align: center;
      }
    }
  }
`

export const GridWrapper = styled.div`
  position: relative;
  top: -90px;
  display: grid;
  grid-template-areas:
    'a c d'
    'b c e';
  grid-template-columns: 300px 400px 300px;
  grid-template-rows: 285px 285px;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    grid-template-areas:
      'c'
      'a'
      'b'
      'd'
      'e';
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

  &.item-a {
    grid-area: a;
  }
  &.item-b {
    grid-area: b;
  }
  &.item-c {
    grid-area: c;
  }
  &.item-d {
    grid-area: d;
  }
  &.item-e {
    grid-area: e;
  }
`

export const HeroSection = styled.div`
  background: #0a2640;
  padding: 120px 0 94px;

  .header-section {
    max-width: 842px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-size: clamp(2.5rem, -0.875rem + 8.333vw, 4rem);
      line-height: clamp(3rem, 2.8rem + 2vw, 4.5rem);
      color: #ffffff;
      margin-bottom: 17.5px;
      font-family: Manrope_Light;
    }

    p {
      margin-bottom: 12px;
      color: #f1f1f1;
    }

    .description {
      font-size: 16px;
      margin-bottom: 72px;
    }
  }
`

export const Paragraph = styled.p`
  font-size: clamp(0.7rem, 0.9rem + 1vw, 1.25rem);
  line-height: clamp(2rem, 1.4rem + 1vw, 3rem);
  font-family: OpenSans_Regular;
`

export const SectionHeader = styled.h2`
  font-size: clamp(2rem, -0.875rem + 8.333vw, 3rem);
  line-height: clamp(3.2rem, 2.8rem + 2vw, 4.5rem);
  font-family: Manrope_Light;
`
