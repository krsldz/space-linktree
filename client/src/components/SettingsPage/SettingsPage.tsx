import React, { type FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProfileData } from '../../redux/actions/profileDataActions';
import { ProfileData } from '../../redux/reducers/profileDataReducer';
import { RootState } from '../../redux/types';
import CardLayout from '../../ui/CardLayout/CardLayout';

import styles from './SettingsPage.module.scss';

const SettingsPage: FC = () => {
  const { data } = useSelector((state: RootState) => state.profileData);
  const {
    name,
    email,
    whatsapp,
    spotify,
    telegram,
    link,
    linkedin,
    facebook,
    instagram,
    youtube,
  } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCancel = () => {
    navigate('/profile/edit');
  };

  const onSubmit = (profileData: ProfileData) => {
    // dispatch(editProfileData(profileData));
  };

  return (
    <form autoComplete="off" noValidate>
      <div className={styles.wrap}>
        <div className={styles.sectionWrap}>
          <h3 className={styles.title}>Basic information...</h3>
          <CardLayout>
            <input
              className={styles.input}
              defaultValue={name}
              id="name"
              placeholder="Name"
            />
            <label className={styles.infoTitle} htmlFor="name">
              Name
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="email" placeholder="Email" />
            <label className={styles.infoTitle} htmlFor="email">
              Email
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="website" placeholder="Website" />
            <label className={styles.infoTitle} htmlFor="website">
              Website
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="whatsapp" placeholder="WhatsApp" />
            <label className={styles.infoTitle} htmlFor="whatsapp">
              WhatsApp
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="telegram" placeholder="Telegram" />
            <label className={styles.infoTitle} htmlFor="telegram">
              Telegram
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="avatar" placeholder="Avatar pic" />
            <label className={styles.infoTitle} htmlFor="avatar">
              Avatar pic
            </label>
          </CardLayout>
        </div>
        <div className={styles.sectionWrap}>
          <h3 className={styles.title}>Social media links...</h3>
          <CardLayout>
            <input className={styles.input} id="linkedin" placeholder="LinkedIn" />
            <label className={styles.infoTitle} htmlFor="linkedin">
              LinkedIn
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="github" placeholder="Github" />
            <label className={styles.infoTitle} htmlFor="github">
              Github
            </label>
          </CardLayout>
          {/* <CardLayout>
          <span className={styles.infoTitle}>Behance</span>
          <input />
        </CardLayout> */}
          <CardLayout>
            <input className={styles.input} id="facebook" placeholder="Facebook" />
            <label className={styles.infoTitle} htmlFor="facebook">
              Facebook
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="instagram" placeholder="Instagram" />
            <label className={styles.infoTitle} htmlFor="instagram">
              Instagram
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="tiktok" placeholder="Tiktok" />
            <label className={styles.infoTitle} htmlFor="tiktok">
              Tiktok
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="spotify" placeholder="Spotify" />
            <label className={styles.infoTitle} htmlFor="spotify">
              Spotify
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="youtube" placeholder="Youtube" />
            <label className={styles.infoTitle} htmlFor="youtube">
              Youtube
            </label>
          </CardLayout>
        </div>
        <div className={styles.sectionWrap}>
          <h3 className={styles.title}>Additional...</h3>
          <CardLayout>
            <input className={styles.input} id="link" placeholder="Your Link" />
            <label className={styles.infoTitle} htmlFor="link">
              Your Link
            </label>
            {/* <input className={styles.input} id="title" placeholder="Title" />
            <label className={styles.infoTitle} htmlFor="title">
              Title
            </label> */}
          </CardLayout>
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.applyBtn} type="submit">
          Apply
        </button>
        <button className={styles.cancelBtn} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default memo(SettingsPage);
