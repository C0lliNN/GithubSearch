/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { User } from '../../interfaces';
import { Container, Photo, Info, Repositories } from './styles';
import repository from '../../assets/repository.svg';
import location from '../../assets/location.svg';
import company from '../../assets/company.svg';
import followers from '../../assets/followers.svg';
import following from '../../assets/following.svg';
import stars from '../../assets/star.svg';

interface Props {
  user: User;
  startsCount: string;
}

export default function UserInfo(props: Props) {
  const { user, startsCount } = props;
  return (
    <Container>
      <Fade duration={500}>
        <Slide direction="down">
          <Photo src={user.avatar_url} />
          <Info>
            <h2>{user.name}</h2>
            {user.twitter_username && <h3>@{user.twitter_username}</h3>}
            <div className="details">
              {user.location && (
                <div>
                  <img src={location} alt="Location:" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.company && (
                <div>
                  <img src={company} alt="Company:" />
                  <span>{user.company}</span>
                </div>
              )}
              <div>
                <img src={followers} alt="Followers:" />
                <span>{user.followers}</span>
              </div>
              <div>
                <img src={following} alt="Following:" />
                <span>{user.following}</span>
              </div>
              <div>
                <img src={stars} alt="Stars:" />
                <span>{startsCount}</span>
              </div>
            </div>
          </Info>
          <Repositories>
            <h3>Total Repositories</h3>
            <div>
              <img src={repository} alt="" />
              <span>{user.public_repos}</span>
            </div>
          </Repositories>
        </Slide>
      </Fade>
    </Container>
  );
}
